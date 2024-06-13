<template>
  <div class="reply-wrapper mt-3" v-if="replyData.length > 0">
    <div>
      <svg
        viewBox="0 0 16 16"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        height="16px"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.36 1.528v3.48c3.46.124 5.38 1.531 6.403 3.316 1.04 1.817 1.097 3.938 1.097 5.176v1.914l-.936-1.67c-1.048-1.869-2.15-2.778-3.278-3.24-1.012-.415-2.09-.49-3.286-.502v3.47L0 7.5l8.36-5.972ZM8.024 6H7.36V3.472L1.72 7.5l5.64 4.028V9h.5c1.384 0 2.808.023 4.165.578.977.4 1.893 1.064 2.747 2.135-.109-.942-.35-1.97-.877-2.891C13.042 7.332 11.387 6.04 8.024 6Z"
        ></path>
      </svg>
    </div>
    <div class="">
      <div class="title-wrapper">
        <p class="title">Reply from Tour Operator</p>
        <p class="time">3 days ago</p>
      </div>
      <p class="message mb-0">
        Hi Robin,<br /><br />Thank you for taking the time to leave a review. We
        are happy for the positive experience. <br />We have checked your issue.
        <br /><br />Regards,<br />XXX Tour Operator
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    replyData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="css" scoped>
.reply-wrapper {
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 16px;
  position: relative;
  border: 1px solid #e0e0e0;
  background-color: rgba(0, 0, 0, 0.05);
}
.reply-wrapper:before {
  content: "";
  width: 5px;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
  background: #5e0302;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #454554;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  letter-spacing: 0.5px;
  font-weight: 400;
}
.title {
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex: 1 1;
  font-weight: 700;
}
svg {
  transform: rotate(180deg);
  fill: #696a6d;
}
</style>
