<template>
  <Thankyou :message="'YOUR OPERATOR DATA HAS BEEN SUCCESSFULLY SENT!'" />
</template>

<script>
import Thankyou from "../components/Thankyou";
export default {
  name: "thankyou-partner",
  components: {
    Thankyou,
  },

  metaInfo() {
    return {
      title:
        "Thank you for submitting the operator info - Safari-Trek-Beach.com",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
};
</script>
