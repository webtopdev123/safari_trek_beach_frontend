<template>
  <div class="card">
    <content-placeholders :rounded="true">
      <content-placeholders-img />
      <content-placeholders-text :lines="6" />
    </content-placeholders>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 3.2rem;
}
.vue-content-placeholders-img,
.vue-content-placeholders-text__line {
  background: #c9c9c9 !important;
}

.vue-content-placeholders-img {
  height: 200px !important;
}
</style>
