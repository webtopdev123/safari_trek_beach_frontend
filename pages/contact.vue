<template>
  <div id="contactus">
    <div class="container">
      <section>
        <header class="section-header">
          <h1 class="h2">Queries about Safari or Tour Operator</h1>
        </header>
        <h3 class="text-center mt-3 h4">
          Safari Packages in Safari-Trek-Beach are offered by individual tour
          operator and not Safari-Trek-Beach company.
        </h3>
        <h4 class="mt-3 text-center h5">
          For questions about a specific tour, we recommend that you contact
          tour operator directly.
        </h4>
        <h4 class="mt-5 h5 fw-bold text-center">Follow these three steps:</h4>
        <p class="mt-3 mb-0">1. Select the tour package you like!</p>
        <p class="mt-2 mb-0">2. Then Click "Send Inquriy" button to contact.</p>
        <p class="mt-2">3. Fill your email and message then send.</p>
        <div class="text-center mt-5">
          <NuxtLink class="btn btn-danger text-light" to="/our-tours/">
            Start Here >>
          </NuxtLink>
        </div>
      </section>

      <section>
        <header class="section-header">
          <h1>CONTACT US</h1>
        </header>
        <h3 class="text-center mt-3 h4">
          For queries about Safari-Trek-Beach Company
        </h3>
        <div class="card p-4 p-md-5 p-lg-5 mx-auto contact-form-card">
          <form @submit.prevent="sendEmail">
            <div class="row align-items-center">
              <div class="col-sm-12">
                <div class="form-outline">
                  <input
                    id="Name"
                    v-model="name"
                    type="text"
                    class="form-control"
                    name="user_name"
                    required
                    autocomplete="off"
                  />
                  <label class="form-label" for="Name">Name</label>
                </div>
              </div>
              <div class="col-sm-12 mt-3">
                <div class="form-outline">
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="form-control"
                    name="user_email"
                    required
                    autocomplete="off"
                  />
                  <label class="form-label" for="email">Email</label>
                </div>
              </div>
              <div class="col-sm-12 mt-3">
                <div class="form-outline">
                  <textarea
                    id="message"
                    v-model="message"
                    class="form-control"
                    name="message"
                    rows="6"
                    required
                  />
                  <label class="form-label" for="message"
                    >Write a message</label
                  >
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-danger mt-3">
                  Submit
                </button>
              </div>
              <div class="mt-5">
                <h4 class="fw-bold">Address</h4>
                <div class="d-flex align-items-center">
                  <h5 style="min-width: 30px" class="text-danger">
                    <span>
                      <svg
                        viewBox="-83.5 0 500 500"
                        style="max-width: 18px; fill: #f80c35"
                      >
                        <g fill-rule="evenodd">
                          <path
                            d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z"
                          />
                        </g>
                      </svg>
                    </span>
                  </h5>
                  <h5>
                    <a
                      class="text-dark text-decoration-none"
                      href="http://maps.google.com/?q=Mafao House Arusha Tanzania"
                      target="_blank"
                    >
                      Mafao House Arusha Tanzania
                    </a>
                  </h5>
                </div>
                <div class="d-flex align-items-center">
                  <h5 style="min-width: 30px" class="text-danger">
                    <span>
                      <svg
                        viewBox="0 0 500 500"
                        style="max-width: 18px; fill: #f80c35"
                      >
                        <path
                          d="M128,21q40,75,53,91.5q10,15.5-2,27.5c-10,13-38,32-45,40c-10,9-12,15-3,32q54,105,158,156c18,10,20,5,32-5c8-8,20-27,35-41c10-11,20-12,32-3q14,11,88,51c9,5,11,8,9,27q-7,40-22,51q-67,53-133,29c-180-55-286-195-315-336q-4-62,36-105q10-13,30-17c35-11,42-6,47,2z"
                        />
                      </svg>
                    </span>
                  </h5>
                  <h5>
                    <a
                      class="text-dark text-decoration-none"
                      href="tel:+255758022567"
                    >
                      +255 758 022 567
                    </a>
                  </h5>
                </div>
                <div class="d-flex align-items-center">
                  <h5 style="min-width: 30px" class="text-danger">
                    <span>
                      <svg
                        viewBox="0 -54 500 500"
                        style="max-width: 18px; fill: #f80c35"
                      >
                        <path
                          d="M0,50a40,49 0 01 40-49h420a40,49 0 01 40,49c0,22-28,55-46,70l-171,118.5c-27,15.5-39,15.5-66,0l-171-118.5c-28-15-46-48-46-70z"
                        />

                        <path
                          d="M0,127.5v221.5a45,45 0 00 45,45h415a45,45 0 00 40-45v-221.5c-8,8.5-16,15.5-26,22.5l-162,113c-47,31-77,31-124,0l-162-113c-10-6-18-14-26-22.5z"
                        />
                      </svg>
                    </span>
                  </h5>
                  <h5>
                    <a
                      class="text-dark text-decoration-none"
                      href="mailto:info@safari-trek-beach.com"
                    >
                      info@safari-trek-beach.com
                    </a>
                  </h5>
                </div>
              </div>
              <h4 class="fw-bold mt-3">Follow Us On</h4>
              <div class="row gx-0 d-flex py-4 align-item-center">
                <div class="col-md-12 text-center">
                  <a
                    href="#"
                    title="Safari-Trek-Beach on Facebook"
                    class="me-4"
                  >
                    <span>
                      <svg
                        viewBox="17 12 466 466"
                        style="max-width: 35px; fill: #f80c35"
                      >
                        <path
                          d="M205,183v-63c1-71 43-103 97-107c27-1 48,0 73,3v74h-53c-20,0-31,13-32,35v58h82l-11,82h-71v212h-85v-212h-71v-82z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#"
                    title="Safari-Trek-Beach on Instagram"
                    class="me-4"
                  >
                    <span>
                      <svg
                        viewBox="0 0 500 500"
                        style="max-width: 35px; fill: #f80c35"
                      >
                        <g fill-rule="evenodd">
                          <path
                            d="M5.5,180c-2.5-123,51.5-177,174.5-174.5c48-1,92-1,140,0c123-2.5,177,51.5,174.5,174.5c1,48,1,92,0,140c2.5,123-51.5,177-174.5,174.5c-48,1-92,1-140,0c-123,2.5-177-51.5-174.5-174.5c-1-48-1-92,0-140zM49,185c-3-103,33-139,136-136h130c103-3,139,33,136,136v130c3,103-33,139-136,136h-130c-103,3-139-33-136-136z"
                          />
                          <path
                            d="M250,124a126,126 0 01 0,252a126,126 0 01 0-252zM250,168a82,82 0 01 0,164a82,82 0 01 0-164z"
                          />
                          <circle cx="380.5" cy="119" r="29.5" />
                        </g>
                      </svg>
                    </span>
                  </a>
                  <a href="#" title="Safari-Trek-Beach on Twitter" class="me-4">
                    <!-- <i class="fa fa-twitter fa-2x text-light me-4"></i> -->
                    <span>
                      <svg
                        viewBox="30 30 440 440"
                        xmlns="http://www.w3.org/2000/svg"
                        style="max-width: 35px; fill: #f80c35"
                      >
                        <path
                          d="M246.8,182.2C157,176 101,135 61,88 A90,90 0 00 88.5,208.5C74,208 58,203 48,197A90,90 0 00 120.4,286.5C110,289.8 93,290.8 79.5,288.2A90,90 0 00 163.8,350.7C137,373 90,394.8 30,388.2A256,254 0 00 424.5,160.5C447,144 459,129 469.8,113.8C453,121 436,126 417.8,127.8C438,116 452,97 457.6,78.2C442,87 422,96 400,100A90,90 0 00 246.8,182.2Z"
                        />
                      </svg>
                    </span>
                  </a>
                  <a href="#" title="Safari-Trek-Beach on Youtube">
                    <!-- <i class="fa fa-youtube fa-2x text-light"></i> -->
                    <span>
                      <svg
                        viewBox="0 75 500 350"
                        xmlns="http://www.w3.org/2000/svg"
                        style="max-width: 35px; fill: #f80c35"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M 2,178 C 7,95 34.5,80.5 90,78.6 C 200,72.5 300,72.5 410,78.6 C 465.5,80.5 493,95 498,178 C 500.5,225 500.5,275 498,322 C 493,405 465.5,419.5 410,421.4 C 300,427.5 200,427.5 90,421.4 C 34.5,419.5 7,405 2,322 C -0.5,275 -0.5,225 2,178 Z M 198,174 L 334,245 L 198,315 Z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  metaInfo() {
    return {
      title: `Contact Safari-Trek-Beach.com`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Contact Safri-Trek-Beach.com info@safari-trek-beach.com",
        },
        {
          property: "og:title",
          content: "Contact Safari-Trek-Beach.com",
        },
        {
          name: "twitter:title",
          content: "Contact Safari-Trek-Beach.com",
        },
        // {property: 'og:image', content: this.blogData.post_inner_image},
        // {property: 'twitter:image', content: this.blogData.post_inner_image},
        // {property: 'og:url', content: window.location.href},
      ],
    };
  },

  methods: {
    sendEmail(e) {
      try {
        emailjs
          .sendForm(
            "service_8epjmd8",
            "template_7agdlyh",
            e.target,
            "user_Z6g8TrxjNQJm18JpKPLQB"
          )
          .then(() => {
            this.$router.push("/thankyou-contact");
          })
          .catch(() => {
            this.$notify({
              group: "warning",
              title: "Sending Error !",
              text: "Sorry, Something went wrong...",
            });
          });
      } catch (error) {
        this.$notify({
          group: "warning",
          title: "Sending Error !",
          text: "Sorry, Something went wrong...",
        });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
#contactus {
  padding-top: 50px;
  padding-bottom: 100px;
  @media (max-width: 420px) {
    padding-top: 0;
  }

  section {
    margin-top: 100px;
  }
  .contact-form-card {
    width: 75%;
    @media (max-width: 991px) {
      width: 100%;

      h5 {
        text-align: left;
        font-size: 15px;
      }
    }
  }
}
.form-outline .form-control:focus {
  box-shadow: inset 0px 0px 0px 1px #1266f1 !important;
  border: 0 !important;
}
.form-outline .form-control {
  border: 1px solid #bdbdbd !important;
}
.form-outline .form-control ~ .form-label {
  padding-top: 0;
  margin-top: 0.37rem;
  background-color: white;
}
input:-internal-autofill-selected {
  background-color: white !important;
}
</style>
