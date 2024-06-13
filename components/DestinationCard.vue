<template>
  <a
    target="_blank"
    class="destination-card card mb-3 mx-2"
    :href="'/destination/' + destination.slug"
  >
    <div
      v-lazy:background-image="destination.image"
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
      :title="destination.title"
    >
      <a>
        <div class="mask" />
      </a>
    </div>
    <div class="card-body">
      <h5
        class="card-title fw-bold text-center text-danger"
        :title="destination.title"
      >
        {{ destination.title }}
      </h5>
      <h6
        class="fw-bold text-dark mt-4 mb-2 subtitle"
        :title="destination.subTitle"
        style="text-overflow: ellipsis"
      >
        {{ destination.subTitle }}
      </h6>
      <p class="card-text" :title="destination.shortDescription">
        {{ destination.shortDescription }}
      </p>
      <a class="text-danger">
        Read More &nbsp;
        <svg
          enable-background="new 0 0 32 32"
          version="1.1"
          viewBox="0 0 32 32"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="width: 16px"
        >
          <path
            clip-rule="evenodd"
            d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z"
            fill="#fe415b"
            fill-rule="evenodd"
            id="Arrow_Forward"
          ></path>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g></svg
      ></a>
    </div>
  </a>
</template>

<script>
export default {
  name: "DestinationCard",
  props: {
    destination: Object,
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
.destination-card {
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 13px #666;
  }
  .bg-image {
    background-size: cover;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }
  .card-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    --max-lines: 3;
    min-height: 75px;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
    padding-right: 1rem;
  }
  .card-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    --max-lines: 1;
    min-height: 24px;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
    padding-right: 1rem;
  }
  .subtitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  button[type="button"] {
    background-color: #3d3d3f;
    color: white;
  }
  svg {
    width: 16px;
    margin-top: -2px;
  }
}
</style>