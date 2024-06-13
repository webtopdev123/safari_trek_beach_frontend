<template>
  <li class="exclude">
    <p>{{ heading }} <span @click="toggle">ℹ️</span></p>
    <Transition name="bounce">
      <p v-if="isVisible" class="mt-2">
        {{ description }}
      </p>
    </Transition>
  </li>
</template>
<script>
export default {
  name: "exclude",
  props: {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },

  data() {
    return {
      isVisible: false,
    };
  },

  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
<style scoped>
p span {
  cursor: pointer;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>