<template>
  <div>
    <!-- footer section -->
    <lazy-component @show.once="footer" />
    <footer v-if="isFooter" class="">
      <div class="text-center py-3 position-relative featured-on">
        <h6>As featured on</h6>
        <a href="https://www.tatotz.org" target="_blank" rel="noopener"
          ><img
            src="@/assets/images/tanzania-association-of-tour-operators-logo.png"
            alt="Tanzania association of tour operators"
            height="64"
            class="m-2"
        /></a>
        <a
          href="https://www.tanzaniatourism.go.tz"
          target="_blank"
          rel="noopener"
          ><img
            src="@/assets/images/tatto-logo.png"
            alt="Tanzania tourist board"
            width="108"
            height="70"
            class="m-2"
        /></a>
        <img
          src="@/assets/images/tanapa-logo.png"
          alt="Tanzania national parks"
          width="71"
          class="m-2"
          height="70"
        /><img
          src="@/assets/images/kilimanjaro-rescue-service-logo.png"
          alt="Kilimanjaro rescue"
          width="108"
          height="70"
          class="m-2"
        />
      </div>
      <div class="row gx-0 container-fluid pt-4">
        <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
          <h6 class="text-uppercase font-weight-bold">General</h6>
          <ul class="list-unstyled">
            <li title="About Us">
              <router-link to="/about" class="text-decoration-none">
                About Us
              </router-link>
            </li>
            <li title="Contact Us">
              <router-link to="/contact" class="text-decoration-none">
                Contact Us
              </router-link>
            </li>
            <li title="Become a Partner">
              <a
                href="/BecomePartner"
                target="_blank"
                class="text-decoration-none"
              >
                Become a Partner
              </a>
            </li>
            <li title="Become a Partner">
              <a
                href="/accommodation-register"
                target="_blank"
                class="text-decoration-none"
              >
                List Accommodation
              </a>
            </li>
            <li title="Operator Login">
              <a
                href="http://operators.safaritreksbeach.com/"
                class="text-decoration-none"
                rel="noreferrer"
                target="_blank"
              >
                Operator Login
              </a>
            </li>
            <li title="Terms and Conditions">
              <router-link to="/TermsCondition" class="text-decoration-none">
                Terms &amp; Conditions
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
          <h6 class="text-uppercase font-weight-bold">Our Tours</h6>
          <ul class="list-unstyled">
            <li title="Serengeti">
              <a
                @click="dest_tours('serengeti-national-park')"
                class="text-decoration-none"
                >Serengeti</a
              >
            </li>
            <li title="Kilimanjaro">
              <a @click="dest_tours('kilimanjaro')" class="text-decoration-none"
                >Kilimanjaro</a
              >
            </li>
            <li title="Zanzibar">
              <a @click="dest_tours('Zanzibar')" class="text-decoration-none"
                >Zanzibar</a
              >
            </li>
            <li title="Ngorongoro">
              <a
                @click="dest_tours('ngorongoro-crater')"
                class="text-decoration-none"
                >Ngorongoro</a
              >
            </li>
            <li title="Ruaha">
              <a
                @click="dest_tours('ruaha-national-park')"
                class="text-decoration-none"
                >Ruaha</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
          <h6 class="text-uppercase font-weight-bold">Blog</h6>
          <ul class="list-unstyled">
            <li title="UKEREWE ISLAND">
              <a href="/blog/ukerewe-island" class="text-decoration-none"
                >UKEREWE ISLAND</a
              >
            </li>
            <li title="RUBONDO ISLAND">
              <a href="/blog/rubondo-national-park" class="text-decoration-none"
                >RUBONDO ISLAND</a
              >
            </li>
            <li title="Kilimanjaro">
              <a href="/blog/mount-kilimanjaro" class="text-decoration-none"
                >Mount Kilimanjaro</a
              >
            </li>
            <li title="KIGOSI">
              <a href="/blog/kigosi-national-park" class="text-decoration-none"
                >KIGOSI</a
              >
            </li>
            <li title="Saadani">
              <a href="/blog/saadani-national-park" class="text-decoration-none"
                >Saadani</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-2 mx-auto mb-4 mt-3 text-center">
          <h6 class="text-uppercase font-weight-bold">Destination</h6>
          <ul class="list-unstyled">
            <li title="Tanzania">
              <a href="/destination/ngorongoro" class="text-decoration-none"
                >NGORONGORO</a
              >
            </li>
            <li title="STONE TOWN">
              <a href="/destination/serengeti" class="text-decoration-none"
                >Serengeti</a
              >
            </li>
            <li title="Materuni Watertfalls">
              <a href="/destination/kilimanjaro" class="text-decoration-none"
                >Kilimanjaro</a
              >
            </li>
            <li title="Dhow">
              <a href="/destination/zanzibar" class="text-decoration-none"
                >Zanzibar</a
              >
            </li>
            <li title="Spice">
              <a href="/destination/tarangire" class="text-decoration-none"
                >TARANGIRE</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3 mx-auto mb-4 mt-3 text-center text-md-start">
          <h6 class="text-uppercase font-weight-bold">Safari-Trek-Beach</h6>
          <ul class="list-unstyled">
            <li title="Our Company Location">
              <a
                href="http://maps.google.com/?q=Mafao House Arusha Tanzania"
                target="_blank"
                class="text-decoration-none"
                rel="noreferrer"
              >
                <span>
                  <svg
                    viewBox="-83.5 0 500 500"
                    style="max-width: 18px; fill: #fff"
                  >
                    <g fill-rule="evenodd">
                      <path
                        d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z"
                      />
                    </g>
                  </svg>
                </span>
                NSSF Mafao House Arusha Tanzania
              </a>
            </li>
            <li title="Contact Phone Number">
              <a href="tel:+255758022567" class="text-decoration-none">
                <span>
                  <svg
                    viewBox="0 0 500 500"
                    style="max-width: 18px; fill: #fff"
                  >
                    <path
                      d="M128,21q40,75,53,91.5q10,15.5-2,27.5c-10,13-38,32-45,40c-10,9-12,15-3,32q54,105,158,156c18,10,20,5,32-5c8-8,20-27,35-41c10-11,20-12,32-3q14,11,88,51c9,5,11,8,9,27q-7,40-22,51q-67,53-133,29c-180-55-286-195-315-336q-4-62,36-105q10-13,30-17c35-11,42-6,47,2z"
                    />
                  </svg>
                </span>
                +255 758-022-567
              </a>
            </li>
            <li title="Company Email">
              <a
                href="mailto:info@safari-trek-beach.com"
                class="text-decoration-none"
              >
                <span>
                  <svg
                    viewBox="0 -54 500 500"
                    style="max-width: 18px; fill: #fff"
                  >
                    <path
                      d="M0,50a40,49 0 01 40-49h420a40,49 0 01 40,49c0,22-28,55-46,70l-171,118.5c-27,15.5-39,15.5-66,0l-171-118.5c-28-15-46-48-46-70z"
                    />

                    <path
                      d="M0,127.5v221.5a45,45 0 00 45,45h415a45,45 0 00 40-45v-221.5c-8,8.5-16,15.5-26,22.5l-162,113c-47,31-77,31-124,0l-162-113c-10-6-18-14-26-22.5z"
                    />
                  </svg>
                </span>
                info@safari-trek-beach.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social icons -->
      <div class="container">
        <div class="row gx-0 d-flex py-4 align-item-center">
          <div class="col-md-12 text-center">
            <a href="#" title="Safari-Trek-Beach on Facebook" class="me-4">
              <span>
                <svg
                  viewBox="17 12 466 466"
                  style="max-width: 35px; fill: #fff"
                >
                  <path
                    d="M205,183v-63c1-71 43-103 97-107c27-1 48,0 73,3v74h-53c-20,0-31,13-32,35v58h82l-11,82h-71v212h-85v-212h-71v-82z"
                  />
                </svg>
              </span>
            </a>
            <a href="#" title="Safari-Trek-Beach on Instagram" class="me-4">
              <span>
                <svg viewBox="0 0 500 500" style="max-width: 35px; fill: #fff">
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
              <span>
                <svg
                  viewBox="30 30 440 440"
                  xmlns="http://www.w3.org/2000/svg"
                  style="max-width: 35px; fill: #fff"
                >
                  <path
                    d="M246.8,182.2C157,176 101,135 61,88 A90,90 0 00 88.5,208.5C74,208 58,203 48,197A90,90 0 00 120.4,286.5C110,289.8 93,290.8 79.5,288.2A90,90 0 00 163.8,350.7C137,373 90,394.8 30,388.2A256,254 0 00 424.5,160.5C447,144 459,129 469.8,113.8C453,121 436,126 417.8,127.8C438,116 452,97 457.6,78.2C442,87 422,96 400,100A90,90 0 00 246.8,182.2Z"
                  />
                </svg>
              </span>
            </a>
            <a href="#" target="_blank" title="Safari-Trek-Beach on Youtube">
              <span>
                <svg
                  viewBox="0 75 500 350"
                  xmlns="http://www.w3.org/2000/svg"
                  style="max-width: 35px; fill: #fff"
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
    </footer>

    <!-- footer copyright section -->
    <div class="footer-copyright py-1 bg-dark">
      <p class="text-light text-center mt-3">© 2022 Safari Trek Beach</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isFooter: false,
    };
  },
  methods: {
    dest_tours(slug) {
      this.$router.push({ path: "/our-tours/", query: { destination: slug } });
    },
    footer() {
      this.isFooter = true;
    },
  },
};
</script>
<style lang="scss" scoped>
footer {
  background: #0f1a2e;
}
h6 {
  color: #cbc7c7;
  font-weight: bold;
  font-size: 15px;
}
a {
  color: #999;
  font-size: 13px;
}

svg {
  fill: #999 !important;
}

a:hover {
  color: white;
}

a:hover svg {
  fill: white !important;
}

.featured-on {
  // background: linear-gradient(#262626, #0f1a2e);
  background: #1b222f;
  h6 {
    position: absolute;
    left: 150px;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 991px) {
      position: relative;
      top: unset;
      left: 0px;
      right: 0px;
      margin-top: 20px;
    }
  }
}
</style>
