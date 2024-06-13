<template>
  <client-only>
    <StarRating
      v-model="rating"
      active-color="#f93154"
      :star-size="size"
      :show-rating="false"
      read-only
      style="line-height: initial"
    />
  </client-only>
</template>

<script>
export default {
  components: {
    StarRating: () => import("vue-star-rating"),
  },
  props: {
    rating: Number,
    size: Number,
  },
};
</script>
<style>
@media (max-width: 370px) {
  .vue-star-rating span:nth-child(2),
  .vue-star-rating span:nth-child(3),
  .vue-star-rating span:nth-child(4),
  .vue-star-rating span:nth-child(5) {
    display: inline-block;
  }
}
</style>
