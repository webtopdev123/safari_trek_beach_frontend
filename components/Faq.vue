<template>
  <div id="faq">
    <h2 class="h4 fw-bold text-center">FAQs</h2>
    <FaqItem
      v-for="(item, index) in faqData"
      :key="index"
      :question="item.question"
      :answer="item.answer"
    ></FaqItem>
  </div>
</template>
<script>
import FaqItem from "./FaqItem";
export default {
  components: {
    FaqItem,
  },
  data() {
    return {
      faqData: [
        {
          question: "ARE SAFARIS IN TANZANIA SAFE?",
          answer:
            "You bet they are. Tanzania is one of Africa’s most stable countries. You’ll be welcomed by its friendly people and always taken care of by attentive staff. After full days of wildlife viewing, rest up at handpicked camps and lodges, which offer authentic African charm and modern-day conveniences.",
        },
        {
          question: "IS IT OKAY TO DRINK THE WATER?",
          answer:
            "We provide free bottled water at all camps and during all wildlife-viewing drives. You can also purchase bottled water at all lodges.",
        },
        {
          question: "ARE THERE A LOT OF BUGS IN TANZANIA?",
          answer:
            "There are more bugs in many places in the U.S. than you will encounter on safari! As in North America, deet-based repellents and citronelle-based products work well if you encounter mosquitoes or other small insects..",
        },
        {
          question: "WHAT SHOTS SHOULD I GET?",
          answer:
            "For medical advice, it’s always best to consult your doctor. Most travelers receive a vaccination for yellow fever and ant malarial pills. Keep in mind that you’ll be staying in camps and lodges designed to accommodate American and European guests.",
        },
        {
          question:
            "WHERE IS THE BEST PLACE TO GO FOR WILDLIFE VIEWING IN AFRICA?",
          answer:
            "Northern Tanzania! Ngorongoro Crater, a World Heritage Site, has one of the greatest concentrations of wildlife in the world. The vast plains of Serengeti National Park also host a myriad of wildlife, especially during the wildebeest migration.",
        },
        {
          question: "WHAT KINDS OF ANIMALS WILL I SEE ON SAFARI IN TANZANIA?",
          answer:
            "All kinds! You will see the animals you’ve always dreamed of encountering on safari—zebra, elephant, hippo, giraffe, lion, warthog, wildebeest, and so much more.",
        },
        {
          question:
            "WHEN IS THE BEST TIME OF YEAR TO GO ON SAFARI IN TANZANIA?",
          answer:
            "Tanzania has the best year-round wildlife viewing, and we adjust our itineraries, departure dates, and accommodations based on wildlife migration patterns. In Tanzania, any time is a wonderful time to be on safari. Of course, there are seasonal variations, but you’ll always see a lot of animals.",
        },
        {
          question: "WHAT IS THE GREAT MIGRATION?",
          answer:
            "The Great Migration is a year-round phenomenon where vast herds of mammals, mainly wildebeest, gazelle, and zebra, move around the Serengeti in search of food and water. The driving force of the migration is rain, making it difficult to predict.",
        },
        {
          question: "WHAT IF I DON’T SEE THE GREAT MIGRATION DURING MY SAFARI?",
          answer:
            "Hakuna matata! No worries! Plenty of awe-inspiring moments present themselves whenever you travel in Tanzania. Even if you don’t happen to see the Great Migration, you’ll still see an abundance of wildlife.",
        },
        {
          question: "HOW FAR IN ADVANCE SHOULD I BOOK MY SAFARI?",
          answer:
            "We recommend booking as far in advance as possible to ensure your spot. This is especially important for travelers booking private safaris or adding extensions to their trips.",
        },
        {
          question: "CAN I USE A CREDIT CARD TO PAY?",
          answer:
            "We accept Visa, MasterCard, and American Express for your safari deposit. The remaining balance to be paid on your arravial",
        },
        {
          question:
            "WHAT ADDITIONAL COSTS CAN I EXPECT WHEN TRAVELING IN TANZANIA?",
          answer:
            "Your safari land packages will include all accommodations, meals, bottled water with meals and on wildlife-viewing drives, airport transfers, park fees, and services of guides and drivers.\nAdditional costs not provided may include: tips for your guides/drivers/staff, bar beverages, laundry service, phone calls, passport and visa fees, souvenirs, and travel insurance (if you choose to purchase).\nPlease note: Your pre-departure packet includes a visa application form and information on travel insurance and tipping.",
        },
        {
          question:
            "WILL I HAVE A CHANCE TO INTERACT WITH LOCAL PEOPLE OF TANZANIA?",
          answer:
            "Many of our trips provide opportunities to visit local villages and interact with the people. However, if your itinerary does not include these visits, you’ll still gain valuable local insight from your expert guide, a native of Tanzania.",
        },
        {
          question: "CAN I MAKE MY OWN ITINERARY?",
          answer:
            "Absolutely. Just contact us to start the process. We’ll listen to your needs and give expert recommendations based on your interests, timeline, and budget. Leave the details to us!",
        },
      ],
    };
  },
};
</script>
<style scoped>
#faq {
  margin-top: 100px;
}
</style>