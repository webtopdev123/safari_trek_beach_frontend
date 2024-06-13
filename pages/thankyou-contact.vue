<template>
  <Thankyou :message="'Your message has been successfully sent!'" />
</template>

<script>
import Thankyou from "../components/Thankyou";
export default {
  name: "thankyou-contact",
  components: {
    Thankyou,
  },

  metaInfo() {
    return {
      title: "Thank you for your message! - Safari-Trek-Beach.com",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
};
</script>
