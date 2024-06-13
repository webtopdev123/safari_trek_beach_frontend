<template>
  <div>
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        px-0 px-lg-5 px-md-3 px-sm-2
        py-1
        w-100
        fixed-top
        text-white
        fw-bold
      "
    >
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand" title="Safari-Trek-Beach.com">
          <img
            :src="require('@/assets/images/logo.png')"
            height="40"
            width="191"
            alt="Safari Trek Beach"
          />
        </NuxtLink>

        <div class="d-flex">
          <NuxtLink to="/wishlist" class="nav-link position-relative mobile">
            <div class="favicon">
              <svg width="25px" height="25px" viewBox="0 0 24 24">
                <path
                  fill="#fe415b"
                  d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
                  fill-rule="nonzero"
                ></path>
              </svg>
              <span
                class="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  px-2
                  rounded-pill
                  bg-danger
                "
              >
                {{ w_count }}
              </span>
            </div>
          </NuxtLink>

          <div id="burger" :class="{ active: isBurgerActive }" @click="toggle">
            <slot>
              <button type="button" class="burger-button" title="Menu">
                <span class="hidden">Toggle menu</span>
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
              </button>
            </slot>
          </div>
        </div>

        <div id="navbarNav" class="navbar-collapse desktop">
          <ul
            class="
              navbar-nav
              ms-auto
              d-flex
              justify-content-center
              align-items-center
              text-center
            "
          >
            <li class="nav-item text-uppercase p-2" title="Home">
              <NuxtLink to="/" class="nav-link"> Home </NuxtLink>
            </li>
            <li class="nav-item text-uppercase p-2" title="Our Tours">
              <NuxtLink to="/our-tours/" class="nav-link"> Our Tours </NuxtLink>
            </li>
            <li class="nav-item text-uppercase p-2" title="Tour Operators">
              <NuxtLink to="/tour-operators" class="nav-link">
                Tour Operators
              </NuxtLink>
            </li>
            <li class="nav-item text-uppercase p-2" title="Contact Us">
              <NuxtLink to="/contact" class="nav-link"> Contact Us </NuxtLink>
            </li>
            <li class="nav-item text-uppercase p-2" title="About Us">
              <NuxtLink to="/about" class="nav-link"> About Us </NuxtLink>
            </li>
            <li
              class="nav-item text-uppercase p-2 position-relative"
              title="Wish List"
            >
              <NuxtLink to="/wishlist" class="nav-link">
                <div class="favicon">
                  <svg width="25px" height="25px" viewBox="0 0 24 24">
                    <path
                      fill="#fe415b"
                      d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                  <span
                    class="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      px-2
                      rounded-pill
                      bg-danger
                    "
                  >
                    {{ w_count }}
                  </span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- <button
          class="navbar-toggler text-danger"
          type="button"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 448 512" width="20">
            <path
              fill="#f93154"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button> -->
        <transition name="slide">
          <div id="navbarNav" v-if="isBurgerActive" class="navbar-collapse">
            <ul
              class="
                navbar-nav
                ms-auto
                d-flex
                justify-content-center
                align-items-center
                text-center
              "
            >
              <li class="nav-item text-uppercase p-2" title="Home">
                <NuxtLink to="/" class="nav-link"> Home </NuxtLink>
              </li>
              <li class="nav-item text-uppercase p-2" title="Our Tours">
                <NuxtLink to="/our-tours/" class="nav-link">
                  Our Tours
                </NuxtLink>
              </li>
              <li class="nav-item text-uppercase p-2" title="Tour Operators">
                <NuxtLink to="/tour-operators" class="nav-link">
                  Tour Operators
                </NuxtLink>
              </li>
              <li class="nav-item text-uppercase p-2" title="Contact Us">
                <NuxtLink to="/contact" class="nav-link"> Contact Us </NuxtLink>
              </li>
              <li class="nav-item text-uppercase p-2" title="About Us">
                <NuxtLink to="/about" class="nav-link"> About Us </NuxtLink>
              </li>
            </ul>
          </div>
        </transition>
        <div
          class="sidebar-backdrop"
          @click="toggle"
          v-if="isBurgerActive"
        ></div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isBurgerActive: false,
    };
  },
  computed: {
    ...mapGetters({
      w_count: "tourController/wishlist_count",
    }),
  },
  watch: {
    $route() {
      // This will close the collapse if any part of the route changes
      // including query, params, hash, name, or path
      var element = document.getElementById("navbarNav");
      element.classList.remove("show");
      this.isBurgerActive = false;
    },
  },

  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive;
      // console.log(this.isBurgerActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: rgba(15, 26, 46, 0.938);
}
.nav-item {
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
}
#burger,
.mobile {
  display: none;
}

.navbar-collapse {
  display: none;
}
.navbar-collapse.desktop {
  display: block;
}
@media (max-width: 991px) {
  .navbar-collapse {
    display: block;
  }
  .navbar-collapse.desktop {
    display: none;
  }
  .navbar-collapse {
    position: absolute;
    top: 57px;
    background: gray;
    height: calc(100vh - 57px);
    width: 250px;
    right: 0;
    background: rgba(15, 26, 46, 0.938);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
    z-index: 2;
  }
  #burger,
  .mobile {
    display: block;
    margin-left: 20px;
  }
}
@media (max-width: 340px) {
  #burger {
    margin-left: 10px;
  }
}

/* Burger for menu in mobile */

.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #fe415b;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fe415b;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

/* CSS for side bar - Vlad */

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}
.slide-leave-to {
  transform: translateX(200%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 1;
}
.favicon {
  width: 27px;
  height: 27px;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 3px;
  color: white;

  svg:hover {
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }

  path {
    fill: #fe415b;
  }
}
</style>
