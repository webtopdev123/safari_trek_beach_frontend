<template>
  <div class="card mb-5">
    <div class="position-relative">
      <img
        src="https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour_day/TARANGIRE_NATIONAL_PARK_18.jpg"
        class="w-100"
      />
      <div class="section-heading">20 things to know in Arusah - Tanzania</div>
    </div>
    <div class="card-body">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // tourData: Object,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.section-heading {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: left;
  padding: 12px 10px;
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0.9) 100%
  );
  text-shadow: 1px 1px 5px #000;
  color: #fff;
  font-weight: 700;
  font-size: 19px;
  line-height: 1.5;
  margin: 40px 0 0;
}
</style>
