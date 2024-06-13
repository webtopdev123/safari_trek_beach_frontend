<template>
  <div class="faq-item">
    <div :class="isShow ? 'shadow round mb-5 mt-3 px-3 rounded' : 'px-3'">
      <div class="faq-header" @click="open">
        <h3 class="mb-0 fw-bold">{{ question }}</h3>
        <img
          src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.697 7.283a1 1 0 01.02 1.414l-8.576 8.819A1.6 1.6 0 0112 18a1.584 1.584 0 01-1.141-.484L2.283 8.697a1 1 0 111.434-1.394L12 15.82l8.283-8.518a1 1 0 011.414-.02zm-9.99 8.84v-.001z' fill='currentColor'/%3E%3C/svg%3E"
          width="16"
          height="16"
          :class="isShow ? '' : 'rotate'"
        />
      </div>
      <transition name="fade">
        <div class="faq-text" v-if="isShow">
          <p class="mb-0">
            {{ answer }}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    question: String,
    answer: String,
  },
  methods: {
    open() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid #d4d4d4;
}
.faq-header {
  min-height: 48px;
  padding: 17px 30px 5px 35px;
  position: relative;
  cursor: pointer;
}
.faq-header:before {
    content: "Q";
    font-weight: 300;
    position: absolute;
    left: 0;
    color: #eb5e3c;
    font-size: 24px;
    top: 5px;
}
.faq-header img {
  position: absolute;
  right: 0;
  top: 17px;
}
img.rotate {
  transform: rotate(180deg);
}
.faq-header h3 {
  font-size: 14px !important;
}
.faq-text {
  padding-left: 15px;
  padding-bottom: 8px;
  padding-top: 8px;
}


.faq-text p {
  font-size: 14px !important;
  font-weight: 400;
  margin: 0 0 8px !important;
}

shadow {
  transition: box-shadow 500ms, padding 500ms;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>