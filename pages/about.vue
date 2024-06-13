<template>
  <div id="aboutus">
    <div class="container">
      <!-- How do we help you ? -->
      <section>
        <header class="section-header">
          <h1>How Do We Help You!</h1>
        </header>
        <div class="row">
          <div class="col-lg-4 col-xs-12 text-center mt-3">
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1.33L4 6.67v8c0 7.4 5.12 14.32 12 16 6.88-1.68 12-8.6 12-16v-8L16 1.33zm-2.67 21.34L8 17.33l1.88-1.88 3.45 3.44 8.79-8.78L24 12 13.33 22.67z' fill='%23f93154'/%3E%3C/svg%3E"
              alt="Connect Best/licensed Tour Operator"
              height="50"
            />
            <br />
            <div class="mt-3 description">
              Connecting with the best/licenced tour operator
            </div>
          </div>

          <div class="col-lg-4 col-xs-12 text-center mt-3">
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' width='22' height='24'%3E%3Cpath fill='%23f93154' d='M20.25 4.5H14.5a.25.25 0 00-.25.25v8.025a.75.75 0 11-1.5 0V3a1.5 1.5 0 00-1.5-1.5h-6a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h4.23c-.683.359-1.23.93-1.561 1.627a1 1 0 00.929 1.373h11.4a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.498-1.5zM1.75 0a1.5 1.5 0 00-1.5 1.5v21a1.5 1.5 0 003 0v-21A1.5 1.5 0 001.75 0z'/%3E%3C/svg%3E"
              alt="Compare Quotes"
              height="50"
            />
            <br />
            <div class="mt-3 description">
              Comparing quotes from different tour operators
            </div>
          </div>

          <div class="col-lg-4 col-xs-12 text-center mt-3">
            <img
              src="data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.67 20.67c-1.67 0-3.27-.27-4.76-.76a1.36 1.36 0 00-1.36.32l-2.94 2.93a20.1 20.1 0 01-8.78-8.77l2.93-2.95c.37-.36.48-.88.33-1.35-.49-1.49-.76-3.09-.76-4.76C11.33 4.6 10.73 4 10 4H5.33C4.6 4 4 4.6 4 5.33A22.66 22.66 0 0026.67 28c.73 0 1.33-.6 1.33-1.33V22c0-.73-.6-1.33-1.33-1.33zM16 4v13.33l4-4h8V4H16z' fill='%23f93154'/%3E%3C/svg%3E"
              alt="Advise Clients"
              height="50"
            />
            <br />
            <div class="mt-3 description">
              Advise clients on questions to ask before booking and how to get
              best details
            </div>
          </div>
        </div>
      </section>

      <!-- WHY ARE WE THE BEST? -->
      <section>
        <header class="section-header">
          <h1>Why Are We the Best?</h1>
        </header>
        <div class="row">
          <div
            v-for="(item, index) in why_best"
            :key="index"
            class="col-lg-4 col-xs-12 text-center mt-3"
          >
            <div v-once class="mt-3 description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </section>

      <!-- OUR TEAM -->
      <lazy-component @show.once="aboutMobile" />
      <div v-if="isAbout">
        <section class="our-team">
          <header class="section-header">
            <h1>Our Team</h1>
          </header>
          <div
            v-for="(member, index) in ourteam"
            :key="index"
            class="card mb-4 mx-2"
            :title="member.title"
          >
            <div
              v-lazy:background-image="
                require(`@/assets/images/team_photo/${member.image}`)
              "
              class="bg-image shadow-sm rounded"
            />
            <div class="card-body p-4 text-center text-md-start">
              <h3 v-once class="fw-bold" :title="member.title">
                <div>{{ member.title }}</div>
              </h3>
              <h5 class="text-muted fst-italic" v-once>
                {{ member.subtitle }}
              </h5>
              <p v-once class="card-text">
                {{ member.description }}
              </p>
            </div>
          </div>

          <!-- Developers -->
          <div class="card p-3 mx-2">
            <div class="card-body text-center">
              <h3 class="fw-bold">
                <div>Developers</div>
              </h3>
              <div class="row">
                <div
                  v-for="(item, index) in developers"
                  :key="index"
                  class="col-lg-4 col-xs-12 text-center mt-3"
                >
                  <div
                    v-once
                    v-lazy:background-image="
                      require(`@/assets/images/team_photo/${item.image}`)
                    "
                    class="developer-photo rounded shadow-sm"
                  />

                  <h5 v-once>
                    {{ item.role }}
                  </h5>
                  <p v-once class="card-text px-3">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- OUR VISION -->
        <section>
          <header class="section-header">
            <h1>Our Vision</h1>
          </header>
          <div v-once class="mt-3 description text-center">
            {{ our_vision }}
          </div>
        </section>

        <!-- OUR COMMUNITY RESPONSIBILITY -->
        <section aboutus>
          <header class="section-header">
            <h1>Our Community and Responsibility</h1>
          </header>
          <div
            v-once
            class="mt-3 description community text-center"
            v-html="our_community"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      ourteam: [
        {
          image: "calison.jpg",
          title: "Carlson Mbise",
          subtitle: "Experienced Tour Operator & CEO",
          description:
            "Carlson Mbise is an experienced Tour Operator and board member of several Companies. Driven by passion he takes prides in providing the best tour services possible. As a CEO his goals includes ensuring compliance from Tour Operators, providing Top notch services and Simplifying tourist process of planning, finding best tour operator and comparing Tanzania Tour Operator.",
        },
        {
          image: "jac.jpg",
          title: "Jacqueline Mbise",
          subtitle: "One of the owners of Safari Trek Beach",
          description:
            "Jacqueline Mbise is one of the owners of Safari Trek Beach. For over 5 years she has been a noteworthy leader in the tourism industry. She is also a board member of several companies. In additional to her primary job function Jacqueline Mbise has been recognized by TANAPA for her extraordinary commitment to Tourism in Tanzania.",
        },
        {
          image: "oliva.jpg",
          title: "Oliva Ngalya",
          subtitle: "Compliance manager",
          description:
            "Oliva Ngalya joined Safari Trek Beach in 2018 as the compliance manager. Before this, she was the operational manager at Africa Serengeti Safari. Her primary responsibility is to ensure all tour operators in Safari Trek Beach are licensed and live up to the promise or contract with their clients. She loves wildlife and would take every chance to enjoy a safari trip.",
        },
        {
          image: "jartan.jpg",
          title: "Jartan Mbalakai",
          subtitle: "Director of content in Safari Trek Beach",
          description:
            "Jartan Mbalakai is the director of content in Safari Trek Beach. Having attending a wildlife university, he has a degree of wildlife tourism. He has being a Tour Guide for over 5 years, during the period amassing the knowledge and experience to inform the world about Tanzania Tourism. We say for the best stories about Tanzania there is no one better to share than Jartan Mbalakai.",
        },
      ],

      why_best: [
        {
          description:
            "We ensure clients get large pool of Tour Operator of their choice!",
        },
        {
          description:
            "Very competitive offers (packages) to choose from over 10,000 packages from different Tour Operators.",
        },
        {
          description:
            "We offer packages that cover all destinations in Tanzania and Zanzibar.",
        },
      ],

      developers: [
        {
          image: "android.jpg",
          role: "Front-end designer",
          description:
            "Lugano E mwakapuku is our front end and graphics designer, He has built the user interface (UI) and (UX) of interactive websites, web-application, and interactive media on other platforms. He uses a number of different programming languages like PHP (Laravel), Python (Django) and JavaScript (jQuery) and web technologies like HTML5 and CSS3 to develop different site. +255 762 506 012",
        },
        {
          image: "dona.jpg",
          role: "Front-end designer",
          description:
            "Donald is also our front end developer, He specializes in design user interfaces and experience on the website.  He is passionate about designing responsive user interfaces, time management in delivering work projects and a tone of knowledge on CSS3, Laravel, Bootstrap and JavaScript. +255 672 426 411",
        },
        {
          image: "isaac.jpg",
          role: "Back-end developer",
          description:
            "Isaac is our lead developer, captain of team; He built his first web application in 2018, and has never looked back since then. He works on diverse technologies and has successfully delivered a number of complex mobile and Web application projects. He manages our hosting server ensuring everything works perfectly. +255 752 988 988",
        },
      ],

      isAbout: false,

      our_vision:
        "Ensure the whole process of planning and finding the right tour operator for your safari is as easy as Possible.",

      our_community:
        "We strive to ensure that the number of women employed in tourism sector improves.<br /> We encourage tour companies to employ more women. One among our raking factors for tour companies is the number of women they have employed.",
    };
  },

  metaInfo() {
    return {
      title: `About Safari Trek Beach`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "We strive to ensure that the number of women employed in tourism sector improves. We encourage tour companies to employ more women. One among our raking factors for tour companies is the number of women they have employed.",
        },
        {
          property: "og:title",
          content: "About Safari Trek Beach",
        },
        {
          name: "twitter:title",
          content: "About Safari Trek Beach",
        },
        // {property: 'og:image', content: ''},
        // {property: 'twitter:image', content: ''},
        // {property: 'og:url', content: window.location.href},
      ],
    };
  },
  methods: {
    aboutMobile() {
      this.isAbout = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#aboutus {
  padding-top: 50px;
  padding-bottom: 100px;
  p {
    text-align: justify;
  }
  section {
    margin-top: 100px;
  }
  .description {
    font-size: 1rem;
  }

  .bg-image {
    background-size: cover;
    width: 250px;
    height: 0;
    padding-top: 250px;
    margin: 10px;
    @media (max-width: 991px) {
      margin-left: calc(50% - 125px);
    }
  }

  .card {
    flex-direction: row;

    @media (max-width: 991px) {
      flex-direction: column;
    }
  }

  .card-body {
    width: calc(100% - 250px);
    @media (max-width: 991px) {
      width: 100%;
    }
  }

  .developer-photo {
    background-size: cover;
    width: 250px;
    height: 0;
    padding-top: 250px;
    margin-left: calc(50% - 125px);
    margin-bottom: 30px;
  }

  .community {
    max-width: 750px;
    margin: auto;
  }
}
</style>
