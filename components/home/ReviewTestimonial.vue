<template>
  <section
    class="position-relative reviews_testimonial bg-fixed"
    title="Top reviews and testimonials of Safari-trek-beach.com"
  >
    <picture>
      <source
        media="(min-width:1025px)"
        :srcset="require('@/assets/images/home/desktop/11.jpg')"
      />
      <source
        media="(min-width:500px)"
        :srcset="require('@/assets/images/home/tab/11.jpg')"
      />
      <img
        :src="require('@/assets/images/home/mobile/8.jpg')"
        alt="Home banner"
        class="w-100 h-100 position-absolute"
      />
    </picture>
    <div class="text-center text-light">
      <div class="pt-5 review-testimonial-section">
        <div class="wrap">
          <header class="section-header">
            <h1 class="text-light">REVIEWS & TESTIMONIES</h1>
          </header>
          <p>
            We booked a safari with Travel Africa Safari Agency through Safari
            Trek Beach platform after comparing many offers from tour operators
            in the platform. Through Safari trek beach we got a reliable
            operator very easily and guidance on the questions to ask tour
            operators so we can get the best deals. I recommend the use of this
            platform in your search for a good tour operator and best prices.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.reviews_testimonial {
  height: 400px;
  img {
    object-fit: cover;
  }
  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }
  h3 {
    text-shadow: 2px 2px 5px #000;
  }
  p {
    font-size: 20px;
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }
  .wrap {
    position: relative;
    width: 60%;
    margin-left: 20%;
    z-index: 2;
    @media (max-width: 767px) {
      position: relative;
      width: 90%;
      margin-left: 5%;
    }
  }
  @media (max-width: 991px) {
    height: 550px;
  }
}
</style>
