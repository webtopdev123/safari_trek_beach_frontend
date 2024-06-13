<template>
  <div>
    <h5 class="fw-bold mt-3">
      {{ reviewItem.title }}
    </h5>
    <div class="d-flex w-100 justify-content-between align-items-center">
      <h6 class="reviews d-flex align-items-center">
        <CustomStarRating :rating="reviewItem.rate" :size="18" class="mb-1" />
        <span v-if="reviewItem.rate == '5'" class="text-danger">
          &nbsp;5.0 / 5
        </span>
        <span v-else class="text-danger">
          &nbsp;{{ reviewItem.rate }} / 5
        </span>
      </h6>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            style="width: 35px; height: 35px"
          >
            <path
              fill="rgb(204,204,204)"
              d="M9.74 0A10 10 0 1 0 20 9.74 10 10 0 0 0 9.74 0zm.5 19A9 9 0 1 1 19 9.76 9 9 0 0 1 10.24 19z"
            />
            <path
              fill="rgb(204,204,204)"
              d="M10.21 11.5H10a6.5 6.5 0 0 0-5.5 3.4.5.5 0 1 0 .88.48 5.5 5.5 0 0 1 4.69-2.87h.15a5.5 5.5 0 0 1 4.69 2.62.5.5 0 0 0 .85-.52 6.5 6.5 0 0 0-5.55-3.11zm-.29-1H10A3.5 3.5 0 0 0 13.42 7v-.09a3.5 3.5 0 0 0-3.5-3.41h-.09A3.5 3.5 0 0 0 6.42 7v.09a3.5 3.5 0 0 0 3.5 3.41zm-.06-6h.07a2.5 2.5 0 0 1 2.5 2.43V7A2.5 2.5 0 0 1 10 9.5h-.08a2.5 2.5 0 0 1-2.5-2.43V7a2.5 2.5 0 0 1 2.43-2.5z"
            />
          </svg>
        </div>
        <div>
          <h5 class="fw-bold text-muted my-0 ms-3 text-capitalize">
            {{ reviewItem.fullName }}
          </h5>
        </div>
      </div>
      <!-- <p class="mb-0">
              Reviewed:
              <i class="text-muted">{{
                new Date(reviewItem.createdAt).toDateString()
              }}</i>
            </p> -->
    </div>
    <div class="mt-3">
      <div class="review-content">
        <read-more
          more-str="Read more"
          :text="reviewItem.description"
          less-str="Read less"
          :max-chars="isMobile() ? 180 : 350"
          class="text-decoration-none"
          :key="reviewItem._id"
        />
      </div>
    </div>
    <ReviewReply :replyData="reviewItem.replies"></ReviewReply>
    <div v-if="!isReact" class="mt-3 text-end">
      <span class="text-muted fst-italic">This review is helpful ? </span>
      <button class="bg-transparent" @click="thumbUp">
        <svg id="thumbup" fill="#fe415b" width="20" viewBox="0 0 32 32">
          <path
            d="M5.47 29.191h-0.392c-1.417 0-2.577-1.156-2.577-2.568v-11.446c0-1.412 1.16-2.568 2.577-2.568h0.392c1.417 0 2.577 1.156 2.577 2.568v11.443c0.003 1.415-1.157 2.572-2.577 2.572zM23.843 29.5h-0.040c-1.226-0.013-2.455-0.013-3.685-0.013h-1.875c-1.252 0-2.505 0-3.76-0.016-0.695-0.020-1.381-0.164-2.027-0.427-1.097-0.427-1.724-1.379-1.72-2.618l0.003-4.644c0-2.571 0-5.146 0.023-7.718 0.003-0.7 0.455-1.356 0.841-1.701 1.493-1.36 3.115-3.054 3.793-5.34 0.188-0.637 0.26-1.34 0.336-2.082 0.152-1.478 1.114-2.44 2.399-2.44 0.504 0 1.009 0.151 1.503 0.443 0.992 0.594 1.654 1.527 2.020 2.857 0.587 2.112 0.287 4.161-0.043 5.918v0.007c-0.076 0.411 0.234 0.792 0.656 0.792h4.284c0.738 0 1.796 0.092 2.449 0.88 0.475 0.575 0.61 1.35 0.409 2.375-0.613 3.15-1.364 6.325-2.083 9.285-0.224 0.923-0.596 1.777-0.956 2.604l-0.155 0.355c-0.409 0.959-1.252 1.485-2.373 1.485z"
          ></path>
        </svg>
        <span class="text-danger" v-if="likes > 0">{{ likes }}</span>
      </button>
      <button class="bg-transparent" @click="thumbDown">
        <svg id="thumbdown" fill="grey" width="20" viewBox="0 0 32 32">
          <path
            d="M5.47 29.191h-0.392c-1.417 0-2.577-1.156-2.577-2.568v-11.446c0-1.412 1.16-2.568 2.577-2.568h0.392c1.417 0 2.577 1.156 2.577 2.568v11.443c0.003 1.415-1.157 2.572-2.577 2.572zM23.843 29.5h-0.040c-1.226-0.013-2.455-0.013-3.685-0.013h-1.875c-1.252 0-2.505 0-3.76-0.016-0.695-0.020-1.381-0.164-2.027-0.427-1.097-0.427-1.724-1.379-1.72-2.618l0.003-4.644c0-2.571 0-5.146 0.023-7.718 0.003-0.7 0.455-1.356 0.841-1.701 1.493-1.36 3.115-3.054 3.793-5.34 0.188-0.637 0.26-1.34 0.336-2.082 0.152-1.478 1.114-2.44 2.399-2.44 0.504 0 1.009 0.151 1.503 0.443 0.992 0.594 1.654 1.527 2.020 2.857 0.587 2.112 0.287 4.161-0.043 5.918v0.007c-0.076 0.411 0.234 0.792 0.656 0.792h4.284c0.738 0 1.796 0.092 2.449 0.88 0.475 0.575 0.61 1.35 0.409 2.375-0.613 3.15-1.364 6.325-2.083 9.285-0.224 0.923-0.596 1.777-0.956 2.604l-0.155 0.355c-0.409 0.959-1.252 1.485-2.373 1.485z"
          ></path>
        </svg>
        <span class="text-grey" v-if="dislikes > 0">{{ dislikes }}</span>
      </button>
    </div>
    <div v-if="isShow" class="text-muted fst-italic mt-3 text-end">
      Thank you for your reaction.
    </div>
    <hr class="my-3" />
  </div>
</template>
  
  <script>
import CustomStarRating from "../CustomStarRating";
import ReviewReply from "./ReviewReply";

export default {
  name: "ReviewCard",
  components: {
    CustomStarRating,
    ReviewReply,
  },
  props: {
    reviewItem: Object,
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      reactList: [],
      isReact: false,
      isShow: false,
    };
  },

  mounted() {
    this.isReact = false;
    this.reactList = JSON.parse(
      localStorage.getItem("reactedToReview") || "[]"
    );
    let index = this.reactList.findIndex((x) => x == this.reviewItem._id);
    if (index > -1) {
      this.isReact = true;
    }
  },

  methods: {
    addToReviewReactList() {
      this.reactList = JSON.parse(
        localStorage.getItem("reactedToReview") || "[]"
      );
      let index = this.reactList.findIndex((x) => x == this.reviewItem._id);
      if (index > -1) {
        this.reactList.splice(index, 1);
        this.isReact = false;
      } else {
        this.reactList.push(this.reviewItem._id);
        this.isReact = true;
        this.isShow = true;
      }

      localStorage.setItem("reactedToReview", JSON.stringify(this.reactList));
    },
    thumbDown() {
      this.dislikes++;
      this.addToReviewReactList();
    },
    thumbUp() {
      this.likes++;
      this.addToReviewReactList();
    },
    isMobile() {
      /* eslint-disable */
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
  },
};
</script>
 