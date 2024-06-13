<template>
  <Thankyou :message="'Your review has been successfully sent!'" />
</template>

<script>
import Thankyou from "../components/Thankyou";
export default {
  name: "thankyou-review",
  components: {
    Thankyou,
  },

  metaInfo() {
    return {
      title: "Thank you for your review! - Safari-Trek-Beach.com",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
};
</script>
