/* eslint-disable */
<template>
  <div class="package" ref="regForm">
    <client-only>
      <div class="container mt-5 px-0" style="overflow-x: hidden">
        <div
          v-if="packageData != null && !loading"
          class="card mb-4 p-3 mobile"
        >
          <h1 class="card-title h3 fw-bold mb-3 text-capitalize">
            {{ packageData.noOfDay }}-Day
            {{ packageData.title }}
          </h1>
          <div class="mt-2 mb-1 d-flex align-items-center">
            <CustomStarRating
              :rating="packageData.operator.avgReview"
              :size="20"
              class="mb-1 me-2"
            />
            <span> ({{ packageData.operator.numReview }} Reviews) </span>
          </div>
          <div class="mt-4 mb-1 d-flex align-items-center">
            <img
              class="me-2"
              src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23dat_tim_a)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 .75C5.787.75.75 5.787.75 12S5.787 23.25 12 23.25 23.25 18.213 23.25 12 18.213.75 12 .75zM11.25 12a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0-6.75v4.628a2.25 2.25 0 101.72 4.153l2.25 2.25a.75.75 0 001.06-1.061l-2.25-2.25a2.25 2.25 0 00-1.28-3.092V5.25a.75.75 0 00-1.5 0z' fill='%23505557'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='dat_tim_a'%3E%3Cpath fill='%23fff' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
            />
            <span v-if="packageData.noOfDay == 1">
              {{ packageData.noOfDay }} Day
            </span>
            <span v-else> {{ packageData.noOfDay }} Days </span> &nbsp;
            <span v-if="packageData.noOfNight == 1">
              {{ packageData.noOfNight }} Night</span
            >
            <span v-else> {{ packageData.noOfNight }} Nights</span>&nbsp;
            <img
              v-if="packageData.tourGroup == 'private'"
              class="me-2 ms-4"
              src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23rat_tra_a)' fill-rule='evenodd' clip-rule='evenodd' fill='%23505557'%3E%3Cpath d='M7.808 11.26A6.001 6.001 0 001.5 17.25a.75.75 0 01-1.5 0 7.502 7.502 0 0111.685-6.223.75.75 0 01-.836 1.245 6.002 6.002 0 00-3.04-1.012z'/%3E%3Cpath d='M7.5 1.5a3.375 3.375 0 100 6.75 3.375 3.375 0 000-6.75zM2.625 4.875a4.875 4.875 0 119.75 0 4.875 4.875 0 01-9.75 0zm14.613 7.128a.051.051 0 00-.026.007.051.051 0 00-.014.013l-1.53 3.293a.75.75 0 01-.68.434h-2.98l2.598 2.56a.75.75 0 01.162.835l-1.44 3.304a.036.036 0 00.053.043l.008-.005 3.486-1.96a.75.75 0 01.736 0l3.494 1.964a.036.036 0 00.052-.043l-1.439-3.303a.75.75 0 01.162-.834l2.598-2.56h-2.99a.75.75 0 01-.68-.435l-1.53-3.293a.05.05 0 00-.04-.02zm-.796-1.28a1.55 1.55 0 012.184.641l1.34 2.886h2.51a1.485 1.485 0 011.045 2.578l-2.222 2.19 1.243 2.854a1.536 1.536 0 01-2.183 1.921l-3.116-1.752-3.115 1.752a1.536 1.536 0 01-2.183-1.922l.004-.011 1.238-2.842-2.222-2.19a1.484 1.484 0 011.032-2.578h2.512l1.343-2.889a1.55 1.55 0 01.59-.638z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='rat_tra_a'%3E%3Cpath fill='%23fff' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
            /><img
              v-else
              class="me-2 ms-4"
              src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23tou_tra_a)' fill-rule='evenodd' clip-rule='evenodd' fill='%23505557'%3E%3Cpath d='M7.5 3a4.875 4.875 0 100 9.75 7.5 7.5 0 00-7.5 7.5.75.75 0 001.5 0 6 6 0 1112 0 .75.75 0 001.5 0 7.5 7.5 0 00-7.5-7.5A4.875 4.875 0 107.5 3zM4.125 7.875a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zm9.477 2.25a4.125 4.125 0 115.283 3.96A6.274 6.274 0 0124 20.25a.75.75 0 01-1.5 0 4.775 4.775 0 00-6.427-4.478.75.75 0 11-.52-1.408c.331-.122.67-.215 1.014-.28a4.127 4.127 0 01-2.965-3.959zM17.727 7.5a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='tou_tra_a'%3E%3Cpath fill='%23fff' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
            />
            <span class="text-capitalize"> {{ packageData.tourGroup }}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="me-2 ms-4"
              fill="#505557cc"
              height="24px"
              width="24px"
              viewBox="0 0 365.892 365.892"
              xml:space="preserve"
            >
              <g>
                <circle cx="182.945" cy="286.681" r="41.494" />
                <path
                  d="M182.946,176.029c-35.658,0-69.337,17.345-90.09,46.398c-5.921,8.288-4.001,19.806,4.286,25.726   c3.249,2.321,6.994,3.438,10.704,3.438c5.754,0,11.423-2.686,15.021-7.724c13.846-19.383,36.305-30.954,60.078-30.954   c23.775,0,46.233,11.571,60.077,30.953c5.919,8.286,17.437,10.209,25.726,4.288c8.288-5.92,10.208-17.438,4.288-25.726   C252.285,193.373,218.606,176.029,182.946,176.029z"
                />
                <path
                  d="M182.946,106.873c-50.938,0-99.694,21.749-133.77,59.67c-6.807,7.576-6.185,19.236,1.392,26.044   c3.523,3.166,7.929,4.725,12.32,4.725c5.051-0.001,10.082-2.063,13.723-6.116c27.091-30.148,65.849-47.439,106.336-47.439   s79.246,17.291,106.338,47.438c6.808,7.576,18.468,8.198,26.043,1.391c7.576-6.808,8.198-18.468,1.391-26.043   C282.641,128.621,233.883,106.873,182.946,106.873z"
                />
                <path
                  d="M360.611,112.293c-47.209-48.092-110.305-74.577-177.665-74.577c-67.357,0-130.453,26.485-177.664,74.579   c-7.135,7.269-7.027,18.944,0.241,26.079c3.59,3.524,8.255,5.282,12.918,5.281c4.776,0,9.551-1.845,13.161-5.522   c40.22-40.971,93.968-63.534,151.344-63.534c57.379,0,111.127,22.563,151.343,63.532c7.136,7.269,18.812,7.376,26.08,0.242   C367.637,131.238,367.745,119.562,360.611,112.293z"
                />
              </g>
            </svg>
            <span class="text-capitalize">Wifi Available</span>
            <svg
              viewBox="0 0 20 20"
              class="me-2 ms-4"
              fill="#505557cc"
              height="24px"
              width="24px"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm14.15-4h2.77a8.04 8.04 0 00-3.78-3.36c.47 1.07.81 2.2 1 3.36zm-1.65 4c0 .71-.03 1.38-.09 2H7.59a22.14 22.14 0 010-4h4.82c.06.62.09 1.29.09 2zm-4.62 4c.54 2.6 1.53 4 2.12 4 .6 0 1.58-1.4 2.12-4H7.88zm0-8C8.42 3.39 9.41 2 10 2c.6 0 1.58 1.39 2.12 4H7.88zM5.85 6c.2-1.16.53-2.29 1.01-3.36A8.04 8.04 0 003.08 6h2.77zM2.26 8H5.6a23.77 23.77 0 000 4H2.26a7.73 7.73 0 010-4zm3.6 6H3.07a8.04 8.04 0 003.78 3.36 13.9 13.9 0 01-1-3.36zm7.28 3.36c.47-1.08.81-2.2 1-3.36h2.78a8.04 8.04 0 01-3.78 3.36zM14.4 12h3.33a7.73 7.73 0 000-4H14.4a23.74 23.74 0 010 4z"
              ></path>
            </svg>
            <span class="text-capitalize">{{ packageData.countries[0] }}</span>
          </div>
        </div>
        <div v-if="packageData != null && !loading" class="card mb-4">
          <div class="row package-inner-banner">
            <div
              class="fav-icon"
              @click.stop="addRemoveToWishlist"
              :title="
                isFav ? 'Remove from your wish list.' : 'Add to your wish list.'
              "
            >
              <svg width="100%" height="100%" viewBox="0 0 24 24">
                <path
                  :class="{ fav: isFav }"
                  d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </div>
            <div class="col-lg-8 col-md-12">
              <div
                v-if="packageData.bannerType == 'image'"
                class="package-inner-image"
                :style="{
                  'background-image': 'url(' + packageData.banner + ')',
                }"
              />
              <div v-else>
                <client-only>
                  <youtube :video-id="videoId" />
                </client-only>
              </div>
            </div>
            <div
              class="
                col-lg-4 col-md-12
                p-2
                position-relative
                package-inner-title
              "
            >
              <div class="card-body">
                <h5 class="card-title fw-bold mb-3 h5 text-capitalize desktop">
                  {{ packageData.noOfDay }}-Day
                  {{ packageData.title }}
                </h5>
                <h5 class="card-title fw-bold mb-3 text-capitalize mobile">
                  Book with confidence
                </h5>

                <h6
                  v-if="
                    packageData.additionalInfo != null &&
                    packageData.additionalInfo.cancellation != ''
                  "
                  class="card-title"
                >
                  <span class="text-danger mx-2">✓</span>Free Cancellation Up to
                  {{ packageData.additionalInfo.cancellation }}
                </h6>

                <h6
                  v-if="
                    packageData.additionalInfo != null &&
                    packageData.additionalInfo.advancePayment != ''
                  "
                  class="card-title"
                >
                  <span class="text-danger mx-2">✓</span>
                  Only
                  {{ packageData.additionalInfo.advancePayment }}
                  Advance Payment
                </h6>

                <h6 v-if="packageData.customizable" class="card-title">
                  <span class="text-danger mx-2">✓</span>
                  Can be customized
                </h6>
                <h6 v-else class="card-title">
                  <span class="mx-2">✗</span>
                  Can't be customized
                </h6>

                <h6
                  v-if="
                    packageData.additionalInfo != null &&
                    packageData.additionalInfo.departure
                  "
                  class="card-title"
                >
                  <span class="text-danger mx-2">✓</span>
                  Guaranteed Departure
                </h6>
                <h6 v-else class="card-title">
                  <span class="mx-2">✗</span>Non Guaranteed Departure
                </h6>

                <h6
                  v-if="
                    packageData.additionalInfo != null &&
                    packageData.additionalInfo.arrivalVisa
                  "
                  class="card-title position-relative"
                >
                  <span class="text-danger mx-2">✓</span>
                  Get Visa On Arrival (
                  <span
                    class="learn-hover text-decoration-underline text-primary"
                  >
                    Learn more
                    <div
                      class="
                        shadow-lg
                        position-absolute
                        left-0
                        bg-white
                        mt-2
                        learn-more
                        p-4
                        text-dark
                      "
                    >
                      <ul class="mb-0 ps-0 fst-italic">
                        <li class="list-unstyled mb-2">
                          Upon arrival at any entry point Visa cost 50 USD for
                          all countries expect the USA citizens, Charged 100
                          USD.
                        </li>
                        <li class="list-unstyled mb-2">
                          All European Countries, North and South Americas,
                          Australia, Asia countries are eligible for Visa on
                          arrival.
                        </li>
                        <li class="list-unstyled">
                          For Most Arab countries and Countries affected by
                          terrorism Visa on arrival is not available.
                        </li>
                      </ul>
                    </div>
                  </span>
                  )
                </h6>
                <h6 v-else class="card-title">
                  <span class="mx-2">✗</span>
                  Get Visa On Arrival (Unavailable)
                </h6>
              </div>
              <div class="price-rate p-3 pt-0 w-100">
                <div class="p-3 pt-0">
                  <h4 class="fw-bold text-success my-0">
                    <small
                      v-if="packageData.rates.discount != 0"
                      class="text-muted text-decoration-line-through me-1"
                    >
                      &nbsp;{{ price | currency }}&nbsp;
                    </small>
                    {{
                      (price * (1 - packageData.rates.discount * 0.01))
                        | currency
                    }}
                    <small class="text-dark">USD</small>
                  </h4>
                  <div class="mt-2 mb-1 d-flex align-items-center">
                    <CustomStarRating
                      :rating="packageData.operator.avgReview"
                      :size="20"
                      class="mb-1"
                    />
                    <span class="align-middle">
                      <strong v-if="packageData.operator.avgReview == '5'"
                        >&nbsp;5.0/5</strong
                      >
                      <strong v-else-if="packageData.operator.avgReview == '4'"
                        >&nbsp;4.0/5</strong
                      >
                      <strong v-else-if="packageData.operator.avgReview == '3'"
                        >&nbsp;3.0/5</strong
                      >
                      <strong v-else-if="packageData.operator.avgReview == '2'"
                        >&nbsp;2.0/5</strong
                      >
                      <strong v-else-if="packageData.operator.avgReview == '1'"
                        >&nbsp;1.0/5</strong
                      >
                      <strong v-else
                        >&nbsp;{{
                          Math.round(packageData.operator.avgReview * 10) / 10
                        }}/5</strong
                      >
                      ({{ packageData.operator.numReview }} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TourPackageSkelecton v-else />
        <div id="packageCard" class="row mt-3 mb-5">
          <div class="col-lg-8 col-md-12">
            <div ref="tab" class="card mb-3 pb-5">
              <ul
                id="ex1"
                ref="base"
                class="nav nav-tabs mb-3 border"
                role="tablist"
                style="
                  background: #f1f1f1;
                  position: sticky;
                  top: 58px;
                  z-index: 1029;
                "
              >
                <li
                  class="nav-item border-end mb-0"
                  role="presentation"
                  v-scroll-to="{ el: '#packageCard', offset: -62 }"
                  @click="
                    isItineryTab = true;
                    isReviewTab = false;
                    top();
                  "
                >
                  <a
                    id="ex1-tab-1"
                    class="nav-link active"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    Summary
                  </a>
                </li>
                <li
                  class="nav-item border-end mb-0"
                  role="presentation"
                  v-scroll-to="{ el: '#packageCard', offset: -62 }"
                  @click="
                    isReviewTab = true;
                    isItineryTab = false;
                    top();
                  "
                >
                  <a
                    id="ex1-tab-2"
                    ref="itinery"
                    class="nav-link"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    Itinerary
                  </a>
                </li>
                <li
                  class="nav-item border-end mb-0"
                  role="presentation"
                  v-scroll-to="{ el: '#packageCard', offset: -62 }"
                  @click="
                    isReviewTab = false;
                    isItineryTab = false;
                    top();
                  "
                >
                  <a
                    id="ex1-tab-3"
                    ref="review"
                    class="nav-link"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
                <li
                  class="nav-item border-end mb-0"
                  role="presentation"
                  v-scroll-to="{ el: '#packageCard', offset: -62 }"
                  @click="
                    isReviewTab = false;
                    isItineryTab = false;
                    top();
                  "
                >
                  <a
                    id="ex1-tab-4"
                    class="nav-link"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-4"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    Gallery
                  </a>
                </li>
              </ul>

              <div id="ex1-content" class="tab-content">
                <div
                  id="ex1-tabs-1"
                  class="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <div v-if="loading" class="px-3 px-md-5">
                    <content-placeholders :rounded="true">
                      <content-placeholders-text :lines="8" />
                    </content-placeholders>
                  </div>
                  <div v-else class="px-3 px-md-5">
                    <h4 class="fw-bold mt-3">Overview</h4>

                    <div
                      class="overview-description"
                      v-html="packageData.description"
                    />

                    <div class="d-flex mt-5 s-heading">
                      <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' fill='%235e0302'%3E%3Cpath d='M14.5 9h-9a.75.75 0 000 1.5h9a.75.75 0 100-1.5zm.75 4.249a.75.75 0 00-.75-.75h-9a.75.75 0 100 1.5h9a.75.75 0 00.75-.75zM8 6.5h4a1 1 0 001-1V3A3.006 3.006 0 009.192.107 3.045 3.045 0 007 3.087V5.5a1 1 0 001 1zm1.25-3.75a.75.75 0 11.057.286.75.75 0 01-.057-.287v.001z'/%3E%3Cpath d='M17.5 3h-2.75a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H17a.5.5 0 01.5.5v12.792a.5.5 0 01-.146.354l-3.208 3.207a.5.5 0 01-.353.146H3a.5.5 0 01-.5-.5V5.5A.5.5 0 013 5h2.25a.25.25 0 00.25-.25v-1.5A.25.25 0 005.25 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2z'/%3E%3Cpath d='M5.5 16a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5H5.5z'/%3E%3C/svg%3E"
                        width="24"
                        height="24"
                        class="me-2"
                      />
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        Tour Summary
                      </h4>
                      <div class="horizontal-grayline" />
                    </div>

                    <div v-if="packageData != null">
                      <div
                        v-for="(item, index1) in packageData.dayByDay"
                        :key="index1"
                        class="routine"
                      >
                        <h6 class="fw-bold mt-4 py-3 sum-day">
                          Day {{ index1 + 1 }}
                        </h6>
                        <ul class="position-relative">
                          <li
                            v-if="
                              item.destination != null && item.destination != ''
                            "
                            class="include"
                          >
                            <p>
                              Destination:
                              <strong>{{ item.destination }}</strong>
                            </p>
                          </li>
                          <li v-else class="exclude">
                            Destination:
                            <strong> Excluded</strong>
                          </li>
                          <li
                            v-if="
                              item.accomName != null && item.accomName != ''
                            "
                            class="include"
                          >
                            <p>
                              Accomodation:
                              <strong>{{ item.accomName }}</strong>
                            </p>
                          </li>
                          <DaySlider
                            v-if="
                              item.accomName != null && item.accomName != ''
                            "
                            class="position-absolute top-0 end-0 accom-slider"
                            :accomName="item.accomName"
                          ></DaySlider>
                          <li v-else class="exclude">
                            Accomodation:
                            <strong> Excluded</strong>
                          </li>
                          <li
                            v-if="
                              item.accomLocation != null &&
                              item.accomLocation != 'nan'
                            "
                            class="include"
                          >
                            <p>
                              Location:
                              <strong v-if="item.accomLocation == 'inside'">
                                Inside the Park
                              </strong>
                              <strong
                                v-else-if="item.accomLocation == 'justoutside'"
                              >
                                Just Outside the Park
                              </strong>
                              <strong
                                v-else-if="item.accomLocation == 'crater'"
                              >
                                On the Crater Rim
                              </strong>
                              <strong
                                v-else-if="item.accomLocation == 'outside'"
                              >
                                Outside The Park
                              </strong>
                            </p>
                          </li>
                          <li
                            v-if="
                              item.accomLevel != null && item.accomLevel != ''
                            "
                            class="include"
                          >
                            <p>
                              Comfort Level:
                              <strong>{{ item.accomLevel }}</strong>
                            </p>
                          </li>
                          <li
                            v-if="
                              item.accomType != null &&
                              item.accomType != '' &&
                              item.accomType != 'null'
                            "
                            class="include"
                          >
                            <p>
                              Accomodation Type:
                              <strong>{{ item.accomType }}</strong>
                            </p>
                          </li>
                          <li
                            v-if="
                              item.mealsDrinks != undefined &&
                              (item.mealsDrinks.indexOf('Breakfast') > -1 ||
                                item.mealsDrinks.indexOf('Lunch') > -1 ||
                                item.mealsDrinks.indexOf('Diner') > -1)
                            "
                            class="include"
                          >
                            <p>
                              Meals:
                              <strong
                                v-if="
                                  item.mealsDrinks.indexOf('Breakfast') > -1
                                "
                                >Breakfast, </strong
                              ><strong
                                v-if="item.mealsDrinks.indexOf('Lunch') > -1"
                                >Lunch, </strong
                              ><strong
                                v-if="item.mealsDrinks.indexOf('Diner') > -1"
                                >Dinner,
                              </strong>
                              <span
                                style="
                                  width: 20px;
                                  display: inline-block;
                                  background: white;
                                  margin-left: -8.5px;
                                  color: white;
                                "
                              >
                                .
                              </span>
                            </p>
                          </li>
                          <li v-else class="exclude">
                            Meals:
                            <strong> Excluded</strong>
                          </li>

                          <li
                            v-if="
                              item.mealsDrinks.indexOf('Drinking water') > -1 ||
                              item.mealsDrinks.indexOf('Non-alcoholic drinks') >
                                -1 ||
                              item.mealsDrinks.indexOf('Beer and wine') > -1 ||
                              item.mealsDrinks.indexOf('Spirits/liquor') > -1
                            "
                            class="include"
                          >
                            <p>
                              Drinks:
                              <strong
                                v-if="
                                  item.mealsDrinks.indexOf('Drinking water') >
                                  -1
                                "
                                >Drinking water, </strong
                              ><strong
                                v-if="
                                  item.mealsDrinks.indexOf(
                                    'Non-alcoholic drinks'
                                  ) > -1
                                "
                                >Non-alcoholic drinks, </strong
                              ><strong
                                v-if="
                                  item.mealsDrinks.indexOf('Beer and wine') > -1
                                "
                                >Beer and wine, </strong
                              ><strong
                                v-if="
                                  item.mealsDrinks.indexOf('Spirits/liquor') >
                                  -1
                                "
                                >Spirits/liquor,
                              </strong>
                              <span
                                style="
                                  width: 20px;
                                  display: inline-block;
                                  background: white;
                                  margin-left: -8.5px;
                                  color: white;
                                "
                              >
                                .
                              </span>
                            </p>
                          </li>
                          <li v-else class="exclude">
                            Drinks:
                            <strong> Excluded</strong>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <lazy-component @show.once="reviewShow" />

                    <div v-if="packageData != null" class="mobile">
                      <div class="d-flex mt-5 s-heading">
                        <img
                          src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath fill='%235e0302' fill-rule='evenodd' d='M2.37 10.67c-.84.42-1.12.88-1.12 1.2 0 .33.28.8 1.12 1.21.8.4 1.95.67 3.25.67a7.5 7.5 0 003.26-.67c.84-.42 1.12-.88 1.12-1.2 0-.33-.28-.8-1.12-1.21A7.5 7.5 0 005.62 10a7.5 7.5 0 00-3.25.67zM1.8 9.55c1-.5 2.36-.8 3.81-.8 1.46 0 2.81.3 3.82.8.97.48 1.81 1.27 1.81 2.32 0 1.06-.84 1.85-1.81 2.33-1 .5-2.36.8-3.81.8-1.46 0-2.81-.3-3.82-.8-.96-.48-1.8-1.27-1.8-2.32 0-1.06.84-1.85 1.81-2.33z' clip-rule='evenodd'/%3E%3Cpath fill='%235e0302' fill-rule='evenodd' d='M.63 11.25c.34 0 .62.28.62.63v5c0 .32.28.78 1.12 1.2.8.4 1.95.67 3.25.67a7.5 7.5 0 003.26-.67c.84-.42 1.12-.88 1.12-1.2v-5a.62.62 0 111.25 0v5c0 1.05-.84 1.84-1.81 2.32-1 .5-2.36.8-3.81.8-1.46 0-2.81-.3-3.82-.8C.84 18.72 0 17.93 0 16.88v-5c0-.35.28-.63.63-.63z' clip-rule='evenodd'/%3E%3Cpath fill='%235e0302' fill-rule='evenodd' d='M.63 13.75c.34 0 .62.28.62.63 0 .32.28.78 1.12 1.2.8.4 1.95.67 3.25.67a7.5 7.5 0 003.26-.67c.84-.42 1.12-.88 1.12-1.2a.62.62 0 111.25 0c0 1.05-.84 1.84-1.81 2.32-1 .5-2.36.8-3.81.8-1.46 0-2.81-.3-3.82-.8C.84 16.22 0 15.43 0 14.38c0-.35.28-.63.63-.63zM11.67 3.54c.34 0 .62.28.62.63v4.16a.62.62 0 11-1.25 0V4.17c0-.35.28-.63.63-.63z' clip-rule='evenodd'/%3E%3Cpath fill='%235e0302' fill-rule='evenodd' d='M11.23 7.89a.63.63 0 01.88 0l2.5 2.5a.63.63 0 01-.89.89l-2.5-2.5a.63.63 0 010-.89z' clip-rule='evenodd'/%3E%3Cpath fill='%235e0302' fill-rule='evenodd' d='M5.08 6.8A.63.63 0 014.7 6a7.47 7.47 0 1110.37 9.19.62.62 0 11-.56-1.12 6.22 6.22 0 10-8.63-7.65.62.62 0 01-.8.38z' clip-rule='evenodd'/%3E%3C/svg%3E"
                          width="24"
                          height="24"
                          class="me-2"
                        />
                        <h4 class="fw-bold text-danger flex-shrink-0">
                          <span>Rates Per Person</span>
                        </h4>
                        <div class="horizontal-grayline" />
                      </div>

                      <div
                        v-if="
                          packageData != null &&
                          packageData.rates.adult != undefined
                        "
                        class="table-responsive pb-3 mt-3 ps-2"
                      >
                        <table
                          class="
                            table
                            text-center
                            table-striped table-bordered
                            align-middle
                          "
                        >
                          <thead>
                            <tr>
                              <th scope="col">Start Dates</th>
                              <th
                                v-for="(item, index) in packageData.rates.adult
                                  .currencyAutumn"
                                :key="index + 'rate header'"
                                :class="item == 0 ? 'd-none' : ''"
                                scope="col"
                              >
                                {{ index + 1 }}
                                Person
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Dec 1 - Feb 28</th>
                              <td
                                v-for="(item, index) in packageData.rates.adult
                                  .currencyWinter"
                                :key="index + 'rate ff'"
                                :class="item == 0 ? 'd-none' : ''"
                              >
                                {{ item | currency }}
                              </td>
                              <td
                                class="text-primary"
                                style="cursor: pointer"
                                @click="getQuoteNow"
                              >
                                Get Quote
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">Mar 1 - May 31</th>
                              <td
                                v-for="(item, index) in packageData.rates.adult
                                  .currencySpring"
                                :key="index + 'rate w'"
                                :class="item == 0 ? 'd-none' : ''"
                              >
                                {{ item | currency }}
                              </td>
                              <td
                                class="text-primary"
                                style="cursor: pointer"
                                @click="getQuoteNow"
                              >
                                Get Quote
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">Jun 1 - Aug 31</th>
                              <td
                                v-for="(item, index) in packageData.rates.adult
                                  .currencySummer"
                                :key="index + 'rate s'"
                                :class="item == 0 ? 'd-none' : ''"
                              >
                                {{ item | currency }}
                              </td>
                              <td
                                class="text-primary"
                                style="cursor: pointer"
                                @click="getQuoteNow"
                              >
                                Get Quote
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">Sep 1 - Nov 30</th>
                              <td
                                v-for="(item, index) in packageData.rates.adult
                                  .currencyAutumn"
                                :key="index + 'rate ss'"
                                :class="item == 0 ? 'd-none' : ''"
                              >
                                {{ item | currency }}
                              </td>
                              <td
                                class="text-primary"
                                style="cursor: pointer"
                                @click="getQuoteNow"
                              >
                                Get Quote
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="fst-italic">
                          * All Park Fees or Tickets cost are included in the
                          cost.
                        </div>
                        <div
                          class="fst-italic"
                          v-if="
                            packageData.additionalInfo != null &&
                            packageData.additionalInfo.arrivalVisa
                          "
                        >
                          * We Do accept Credit Card Payments.
                        </div>
                        <div v-else>
                          * We Do not accept Credit Card Payments.
                        </div>
                      </div>
                    </div>

                    <div class="d-flex mt-5 s-heading">
                      <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 8.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zm.75 2.75a.75.75 0 000 1.5h5.25a.75.75 0 000-1.5H12zm-.75 4.25a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6.94 7.75A1.125 1.125 0 108.81 9a1.125 1.125 0 00-1.87-1.25zm-.19 4.125a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm.19 2.875A1.125 1.125 0 108.81 16a1.125 1.125 0 00-1.87-1.25z' fill='%235e0302'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.659 3.409A2.25 2.25 0 012.25 2.75h19.5A2.25 2.25 0 0124 5v4.75a.75.75 0 01-.75.75 1.5 1.5 0 100 3 .75.75 0 01.75.75V19a2.25 2.25 0 01-2.25 2.25H2.25A2.25 2.25 0 010 19v-4.75a.75.75 0 01.75-.75 1.5 1.5 0 100-3A.75.75 0 010 9.75V5c0-.597.237-1.169.659-1.591zm1.591.841A.75.75 0 001.5 5v4.095a3 3 0 010 5.81V19a.75.75 0 00.75.75h19.5a.75.75 0 00.75-.75v-4.095a2.999 2.999 0 010-5.81V5a.75.75 0 00-.75-.75H2.25z' fill='%235e0302'/%3E%3C/svg%3E"
                        width="24"
                        height="24"
                        class="me-2"
                      />
                      <h4 class="fw-bold text-danger flex-shrink-0 mb-1">
                        <span>Inclusions</span>
                      </h4>
                      <div class="horizontal-grayline" />
                    </div>
                    <div class="row g-0">
                      <div
                        v-if="packageData != null"
                        class="col-md-6 col-sm-12"
                      >
                        <h6 class="fw-bold ms-2 mt-5">Included</h6>
                        <ul>
                          <li
                            class="include"
                            v-for="(item, index2) in includeList"
                            :key="'A' + index2"
                          >
                            <p>{{ item.tourNote }}</p>
                          </li>
                        </ul>
                      </div>
                      <div
                        v-if="packageData != null"
                        class="col-md-6 col-sm-12"
                      >
                        <h6 class="fw-bold ms-2 mt-5">Excluded</h6>
                        <ul>
                          <li
                            class="exclude"
                            v-for="(item, index3) in excludeList"
                            :key="'B' + index3"
                          >
                            <p>{{ item.tourNote }}</p>
                          </li>
                          <Exclude
                            :heading="'Tipping'"
                            :description="'Tips for guides and porters are exclusive. You decide what you want to tip, but be generous. A recommended fee is between 10 - 15% of the climbing costs.'"
                          ></Exclude>
                        </ul>
                      </div>
                    </div>

                    <div
                      v-if="!loading && packageData.guideOverview.length != 0"
                    >
                      <div class="d-flex mt-5 s-heading">
                        <img
                          src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23com_con_a)' fill-rule='evenodd' clip-rule='evenodd' fill='%235e0302'%3E%3Cpath d='M2.25 1.5a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h3a.75.75 0 01.75.75v3l1.8-1.35a.75.75 0 11.9 1.2l-3 2.25a.75.75 0 01-1.2-.6V16.5H2.25A2.25 2.25 0 010 14.25v-12A2.25 2.25 0 012.25 0h16.5A2.25 2.25 0 0121 2.25v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 00-.75-.75H2.25z'/%3E%3Cpath d='M10.5 9.75a.75.75 0 01.75-.75h12a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H21v3.75a.75.75 0 01-1.28.53l-4.28-4.28h-4.19a.75.75 0 01-.75-.75v-9zm1.5.75V18h3.75a.75.75 0 01.53.22l3.22 3.22v-2.69a.75.75 0 01.75-.75h2.25v-7.5H12z'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='com_con_a'%3E%3Cpath fill='%235e0302' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                          width="24"
                          height="24"
                          class="me-2"
                        />
                        <h4 class="fw-bold text-danger flex-shrink-0">
                          <span>Our Guides</span>
                        </h4>
                        <div class="horizontal-grayline" />
                      </div>
                      <ul>
                        <li
                          class="include"
                          v-for="(item, index) in packageData.guideOverview"
                          :key="index"
                        >
                          <p>{{ item }}</p>
                        </li>
                      </ul>
                    </div>

                    <div class="d-flex mt-5 s-heading">
                      <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23tra_tra_a)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.25 4.5a.75.75 0 00-.75.75V6h18.392l-.19-.343A2.25 2.25 0 0017.734 4.5H2.25zm6 5.25V7.5H1.5v2.25h6.75zm.75 1.5H1.5v1.5h18.05a3.753 3.753 0 012.938 1.424l.012.015V11.86c0-.205-.014-.409-.041-.61H9zm6.75-1.5h-6V7.5h6v2.25zm1.5 0h4.724a5.184 5.184 0 00-.04-.074L20.725 7.5H17.25v2.25zm6.538.528a5.993 5.993 0 00-.544-1.332L21.013 4.93A3.75 3.75 0 0017.735 3H2.25A2.25 2.25 0 000 5.25V16.5a2.25 2.25 0 002.25 2.25h.095a3.001 3.001 0 005.81 0h6.94a3.001 3.001 0 005.81 0h.845A2.25 2.25 0 0024 16.5v-4.64a5.99 5.99 0 00-.212-1.582zm-1.294 6.32l-1.182-1.494a2.25 2.25 0 00-1.762-.854H1.5v2.25a.75.75 0 00.75.75h.095a3.001 3.001 0 015.81 0h6.94a3.001 3.001 0 015.81 0h.845a.75.75 0 00.744-.651zM18 16.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-12.75 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z' fill='%235e0302'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='tra_tra_a'%3E%3Cpath fill='%235e0302' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                        width="24"
                        height="24"
                        class="me-2"
                      />
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        <span>Activities & Transpotation</span>
                      </h4>
                      <div class="horizontal-grayline" />
                    </div>
                    <ul>
                      <li class="include">
                        <p>
                          Activitiy:
                          <strong>
                            {{ packageData.tourFocus }}
                          </strong>
                        </p>
                      </li>
                      <li class="include">
                        <p>
                          Getting around:
                          <strong
                            v-for="(item, index) in packageData.tourTransports"
                            :key="index + 'transport'"
                          >
                            {{ item.transport
                            }}<span
                              v-if="
                                index != packageData.tourTransports.length - 1
                              "
                              >,
                            </span>
                          </strong>
                        </p>
                      </li>
                    </ul>

                    <div class="row safari mx-3">
                      <!-- <div
                        v-if="
                          packageData.tourActivities.some((res) =>
                            res.includes('Balloon')
                          )
                        "
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderBalloon></ActivitySliderBalloon>
                      </div>
                      <div
                        v-if="
                          packageData.tourFocus == 'Birdwatching' ||
                          packageData.tourActivities.some((res) =>
                            res.includes('Birding')
                          )
                        "
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderBirding></ActivitySliderBirding>
                      </div>
                      <div
                        v-if="packageData.tourFocus == 'walking-safari'"
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderWalking></ActivitySliderWalking>
                      </div>
                      <div
                        v-if="
                          packageData.tourFocus ==
                          'Canoe/Mokoro safari & Game drive'
                        "
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderCanoe></ActivitySliderCanoe>
                      </div>
                      <div
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                        v-if="
                          packageData.tourActivities.some((res) =>
                            res.includes('Boat')
                          )
                        "
                      >
                        <ActivitySliderBoat></ActivitySliderBoat>
                      </div>

                      <div
                        v-if="packageData.tourFocus == 'Cycling safari'"
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderCycling></ActivitySliderCycling>
                      </div>
                      <div
                        v-if="packageData.tourFocus == 'Horseback safari'"
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderHorse></ActivitySliderHorse>
                      </div>
                      <div
                        v-if="
                          packageData.tourActivities.some((res) =>
                            res.includes('Nature')
                          )
                        "
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderNature></ActivitySliderNature>
                      </div>
                      <div
                        v-if="
                          packageData.tourActivities.some((res) =>
                            res.includes('Night')
                          )
                        "
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderNight></ActivitySliderNight>
                      </div>
                      <div
                        v-if="isNormal"
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderNormal></ActivitySliderNormal>
                      </div> -->
                      <div
                        v-if="isOpen"
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderOpen></ActivitySliderOpen>
                      </div>
                      <div
                        v-if="isPopup"
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderPop></ActivitySliderPop>
                      </div>
                      <!-- <div
                        v-if="isPopmini"
                        class="col-12 col-lg-6 col-md-6 col-sm-12 mt-3"
                      >
                        <ActivitySliderPopmini></ActivitySliderPopmini>
                      </div> -->
                    </div>

                    <div class="d-flex mt-5 s-heading">
                      <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 4.504a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm-3.75 5.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z' fill='%235e0302'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 .004a9.75 9.75 0 00-9.75 9.75c0 4.184 1.84 7.435 3.864 9.743a20.918 20.918 0 005.142 4.208 1.5 1.5 0 001.487 0 20.903 20.903 0 005.143-4.207c2.024-2.308 3.864-5.56 3.864-9.744A9.75 9.75 0 0012 .004zM6.166 3.92A8.25 8.25 0 0120.25 9.754c0 3.715-1.627 6.629-3.492 8.754A19.405 19.405 0 0112 22.402a19.422 19.422 0 01-4.759-3.895c-1.865-2.125-3.491-5.04-3.491-8.753A8.25 8.25 0 016.166 3.92z' fill='%235e0302'/%3E%3C/svg%3E"
                        width="24"
                        height="24"
                        class="me-2"
                      />
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        <span>Location</span>
                      </h4>
                      <div class="horizontal-grayline" />
                    </div>
                    <ul>
                      <li class="include">
                        <p>
                          The Tour starts at
                          <strong
                            >{{ packageData.gettingThere.startCity }}
                          </strong>
                          and ends in
                          <strong>{{ packageData.gettingThere.endCity }}</strong
                          >.
                        </p>
                      </li>
                    </ul>

                    <client-only>
                      <MapBox
                        :mapData="packageData.destinationMap"
                        :dayData="packageData.dayByDay"
                        v-if="
                          packageData.destinationMap.length > 0 &&
                          packageData.destinationMap.every(
                            (element) =>
                              element.latitude != null &&
                              element.longitude != null
                          )
                        "
                      ></MapBox>
                    </client-only>

                    <div class="d-flex mt-5 s-heading">
                      <img
                        src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.506 8.25L5.24 8.272l-1.1-2.2-2.293-.1A1.1 1.1 0 00.84 7.5l2.067 4.668A2.2 2.2 0 004.924 13.5h4.041l-2.484 5.168a1.086 1.086 0 00.967 1.582h2.1a1.1 1.1 0 00.843-.395L15.55 13.5h4.956a2.613 2.613 0 002.744-2.59 2.674 2.674 0 00-2.744-2.66z' stroke='%235e0302' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.782 3h2.068a1.854 1.854 0 011.478.738l.002.003 2.992 4.02a.75.75 0 01-1.204.896l-2.99-4.018a.35.35 0 00-.279-.139H9.783a.35.35 0 00-.311.506l1.44 2.912a.75.75 0 01-1.345.664l-1.439-2.91a1.852 1.852 0 01.754-2.436A1.85 1.85 0 019.78 3h.002z' fill='%235e0302'/%3E%3C/svg%3E"
                        width="24"
                        height="24"
                        class="me-2 airport"
                      />
                      <h4 class="fw-bold text-danger flex-shrink-0">
                        <span>Getting There</span>
                      </h4>
                      <div class="horizontal-grayline" />
                    </div>
                    <ul>
                      <li
                        v-if="packageData.gettingThere.airportTransfer == 'yes'"
                        class="include"
                      >
                        <p>Airport transfer are included</p>
                      </li>
                      <li
                        v-if="
                          packageData.gettingThere.localInternationalAirport !=
                          ''
                        "
                        class="include"
                      >
                        <p>
                          The best and closest international airport to land is
                          <strong class="text-capitalize">{{
                            packageData.gettingThere.localInternationalAirport.replace(
                              /-/g,
                              " "
                            )
                          }}</strong>
                        </p>
                      </li>
                      <!-- <li
                        v-if="
                          packageData.gettingThere.localInternationalAirport !=
                          ''
                        "
                        class="include"
                      >
                        <p>
                          The closest local airport to land is
                          <strong>{{
                            packageData.gettingThere.localInternationalAirport
                          }}</strong>
                        </p>
                      </li> -->

                      <li
                        v-if="packageData.gettingThere.bookFlight != 'no'"
                        class="include"
                      >
                        <p>
                          We can help clients book local flights but not
                          international flights.
                        </p>
                      </li>

                      <li
                        v-if="
                          packageData.gettingThere.accomBeforeAfter !=
                          'extra-cost'
                        "
                        class="include"
                      >
                        <p>
                          Additional accommodation can be arranged for an extra
                          cost.
                        </p>
                      </li>
                      <li
                        v-else-if="
                          packageData.gettingThere.accomBeforeAfter !=
                          'before-yes'
                        "
                        class="include"
                      >
                        <p>
                          Accommodation before safari is included. (after
                          safari, accommodation can be arranged at an extra
                          cost).
                        </p>
                      </li>
                      <li
                        v-else-if="
                          packageData.gettingThere.accomBeforeAfter != 'yes'
                        "
                        class="include"
                      >
                        <p>
                          Accommodation before and after safari is included.
                        </p>
                      </li>
                      <li
                        v-else-if="
                          packageData.gettingThere.accomBeforeAfter != 'no'
                        "
                        class="include"
                      >
                        We can't arrange it.
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  id="ex1-tabs-2"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <div v-if="packageData != null" class="px-3 px-md-5">
                    <lazy-component @show.once="reviewShow" />
                    <Itinerary
                      v-if="isReview"
                      :key="updated"
                      :packagedataday="packageData.dayByDay"
                    />
                  </div>
                </div>
                <div
                  id="ex1-tabs-3"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <div v-if="packageData != null" class="px-3 px-md-5">
                    <lazy-component @show.once="reviewShow" />
                    <Reviews
                      v-if="isReview"
                      :key="updated"
                      :avg_review="packageData.operator.avgReview"
                      :num_review="packageData.operator.numReview"
                      :package-datareview="packageData.operator.reviews"
                    />
                  </div>
                </div>
                <div
                  id="ex1-tabs-4"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-4"
                >
                  <div v-if="packageData != null" class="px-3 px-md-5">
                    <Gallery :gallery="packageData.gallery" />
                  </div>
                </div>
              </div>
              <div v-if="isMobile()" class="text-center mt-5">
                <div
                  v-if="isItineryTab"
                  class="next-btn"
                  @click="itineryButton"
                >
                  Next: Itinerary
                  <div class="arrow A1"></div>
                  <div class="arrow A2"></div>
                  <div class="arrow A3"></div>
                </div>
                <div v-if="isReviewTab" class="next-btn" @click="reviewButton">
                  Next: Reviews
                  <div class="arrow A1"></div>
                  <div class="arrow A2"></div>
                  <div class="arrow A3"></div>
                </div>
                <!-- <button
                  v-if="isItineryTab"
                  class="btn btn-primary px-5"
                  @click="itineryButton"
                >
                  Next: Itinerary >
                </button>
                <button
                  v-if="isReviewTab"
                  class="btn btn-primary"
                  @click="reviewButton"
                >
                  Next: Reviews >
                </button> -->
              </div>
            </div>
            <div class="card mt-4">
              <div class="px-3 px-md-5">
                <form
                  v-if="packageData != null"
                  class="mb-3 px-2"
                  @submit.prevent="delay"
                >
                  <h5 class="fw-bold mt-5 mb-3 text-danger">
                    Start Planning Your Tour
                  </h5>
                  <ul>
                    <li class="include">
                      <p class="h6"><b>The Best Time To Do This Tour</b></p>
                      <p>
                        Get Expert Analysis on Advantages of each month, the
                        low, and high season to do this tour.
                      </p>
                    </li>
                    <li class="include">
                      <p><b>Climate and Weather Expected During The Tour</b></p>
                      <p>
                        Our Team will inform you on the temperature and rains.
                        Also give you some tips on packing list.
                      </p>
                    </li>
                    <li class="include">
                      <p><b>Cheap Flight and Routes To This Destination</b></p>
                      <p>
                        Get advice on the best airline, entry and exit points to
                        this destination.
                      </p>
                    </li>
                    <li class="include">
                      <p><b>Your Accommodations</b></p>
                      <p>
                        Our team will give you advantage of each accommodation,
                        locations, distance and reasons why the suggested them.
                      </p>
                    </li>
                    <li class="include">
                      <p>
                        <b>Start Your Journey Toward Memorable Tour Now.</b>
                      </p>
                      <p>
                        Save time and take out the stress of planning, let us
                        warmly assist you in planning.
                      </p>
                    </li>
                  </ul>
                  <div class="row mt-5 mb-5">
                    <div class="col-sm-12 col-md-6 col-lg-4 mt-3">
                      <div class="d-flex align-items-center p-2 border rounded">
                        <div class="me-3">
                          <svg
                            viewBox="0 0 20 20"
                            style="width: 25px; height: 25px"
                          >
                            <path
                              fill="#5e0302"
                              d="M9.74 0A10 10 0 1 0 20 9.74 10 10 0 0 0 9.74 0zm.5 19A9 9 0 1 1 19 9.76 9 9 0 0 1 10.24 19z"
                            />
                            <path
                              fill="#5e0302"
                              d="M10.21 11.5H10a6.5 6.5 0 0 0-5.5 3.4.5.5 0 1 0 .88.48 5.5 5.5 0 0 1 4.69-2.87h.15a5.5 5.5 0 0 1 4.69 2.62.5.5 0 0 0 .85-.52 6.5 6.5 0 0 0-5.55-3.11zm-.29-1H10A3.5 3.5 0 0 0 13.42 7v-.09a3.5 3.5 0 0 0-3.5-3.41h-.09A3.5 3.5 0 0 0 6.42 7v.09a3.5 3.5 0 0 0 3.5 3.41zm-.06-6h.07a2.5 2.5 0 0 1 2.5 2.43V7A2.5 2.5 0 0 1 10 9.5h-.08a2.5 2.5 0 0 1-2.5-2.43V7a2.5 2.5 0 0 1 2.43-2.5z"
                            />
                          </svg>
                        </div>
                        <input
                          v-model="name"
                          placeholder="Your Name"
                          class="w-100 travel"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mt-3">
                      <div
                        class="
                          d-flex
                          text-danger
                          align-items-center
                          p-2
                          border
                          rounded
                        "
                      >
                        <div class="me-3">
                          <svg
                            viewBox="0 0 256 256"
                            style="width: 25px; fill: #5e0302"
                          >
                            <defs></defs>
                            <g
                              style="
                                stroke: none;
                                stroke-width: 0;
                                stroke-dasharray: none;
                                stroke-linecap: butt;
                                stroke-linejoin: miter;
                                stroke-miterlimit: 10;
                                fill: none;
                                fill-rule: nonzero;
                                opacity: 1;
                              "
                              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                            >
                              <path
                                d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
                                style="
                                  stroke: none;
                                  stroke-width: 1;
                                  stroke-dasharray: none;
                                  stroke-linecap: butt;
                                  stroke-linejoin: miter;
                                  stroke-miterlimit: 10;
                                  fill: #5e0302;
                                  fill-rule: nonzero;
                                  opacity: 1;
                                "
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                              <path
                                d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"
                                style="
                                  stroke: none;
                                  stroke-width: 1;
                                  stroke-dasharray: none;
                                  stroke-linecap: butt;
                                  stroke-linejoin: miter;
                                  stroke-miterlimit: 10;
                                  fill: #5e0302;
                                  fill-rule: nonzero;
                                  opacity: 1;
                                "
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                              <path
                                d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"
                                style="
                                  stroke: none;
                                  stroke-width: 1;
                                  stroke-dasharray: none;
                                  stroke-linecap: butt;
                                  stroke-linejoin: miter;
                                  stroke-miterlimit: 10;
                                  fill: #5e0302;
                                  fill-rule: nonzero;
                                  opacity: 1;
                                "
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                              <path
                                d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"
                                style="
                                  stroke: none;
                                  stroke-width: 1;
                                  stroke-dasharray: none;
                                  stroke-linecap: butt;
                                  stroke-linejoin: miter;
                                  stroke-miterlimit: 10;
                                  fill: #5e0302;
                                  fill-rule: nonzero;
                                  opacity: 1;
                                "
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                              <path
                                d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"
                                style="
                                  stroke: none;
                                  stroke-width: 1;
                                  stroke-dasharray: none;
                                  stroke-linecap: butt;
                                  stroke-linejoin: miter;
                                  stroke-miterlimit: 10;
                                  fill-rule: nonzero;
                                  opacity: 1;
                                  fill: #5e0302;
                                "
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                            </g>
                          </svg>
                        </div>
                        <div class="w-100">
                          <input
                            v-model="email"
                            type="email"
                            placeholder="Email"
                            class="w-100 travel"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mt-3">
                      <button
                        class="btn btn-danger w-100"
                        type="submit"
                        :disabled="disabled"
                      >
                        Send an Inquiry
                      </button>
                    </div>
                  </div>

                  <!-- tour buttons -->
                  <!-- <div class="get-quote-mobile w-100 p-2 text-center shadow-lg">
                    <div class="w-50 px-1">
                      <button
                        class="btn btn-danger w-100"
                        type="submit"
                        :disabled="disabled"
                      >
                        Book tour
                      </button>
                    </div>
                    <div class="w-50 px-1">
                      <button
                        class="btn btn-danger w-100"
                        type="submit"
                        :disabled="disabled"
                      >
                        Get Free Quote
                      </button>
                    </div>
                  </div> -->

                  <div class="get-quote-mobile w-100 p-2 text-center shadow-lg">
                    <button
                      class="btn btn-danger w-100"
                      type="submit"
                      :disabled="disabled"
                    >
                      Get Free Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            v-if="packageData == null || loading"
            class="col-lg-4 col-md-12 mobile"
          >
            <TourCardSkelecton></TourCardSkelecton>
          </div>

          <div
            v-if="packageData != null && !loading"
            class="col-lg-4 col-md-12 mobile"
          >
            <div class="card p-0 mb-3 position-relative p-4">
              <h5 class="text-center text-capitalize mb-2 mb-4">
                {{ packageData.operator.companyName }}
              </h5>

              <img v-lazy="packageData.image" class="w-100" />

              <h6 class="text-center mt-4">
                Number of Staff:
                {{ packageData.operator.noOfStaff }}
              </h6>

              <div>
                <h6
                  class="text-center"
                  v-if="packageData.operator.officeLocation != null"
                >
                  Office Location:
                  {{ packageData.operator.officeLocation }}
                </h6>

                <h6 class="text-center">
                  Contact Person:
                  {{ packageData.operator.personName }}
                </h6>

                <h6 class="text-center">
                  Language: offer Multi-language Guides
                </h6>
              </div>
            </div>
            <lazy-component @show.once="sliderReviewShow" />

            <form @submit.prevent="delay">
              <div class="card px-0 pb-4 mb-3 pt-0" @submit.prevent="delay">
                <div
                  v-if="packageData != null && packageData.rates.discount != 0"
                  class="d-flex gx-0 row position-relative"
                >
                  <div class="price-triangle"></div>
                  <div class="price-before">
                    <h6 class="text-center mb-0 mt-2">FROM</h6>
                    <h5
                      class="
                        text-center
                        fw-bold
                        my-1
                        text-decoration-line-through
                      "
                    >
                      &nbsp;{{ price | currency }}&nbsp;
                    </h5>
                  </div>
                  <div class="price-after">
                    <h6 class="text-center fw-bold my-0">TO</h6>
                    <h4 class="text-center fw-bold my-0">
                      {{
                        (price * (1 - packageData.rates.discount * 0.01))
                          | currency
                      }}
                    </h4>
                    <h6 class="text-center my-0">(USD pp)</h6>
                  </div>
                </div>

                <h5 class="fw-bold text-center mt-4">Request a Quote</h5>
                <div class="row rightside">
                  <div class="col-sm-12 mt-3 text-center">
                    <div class="position-relative mx-4">
                      <div class="me-3 position-absolute icon">
                        <span>
                          <svg
                            viewBox="0 0 500 500"
                            style="max-width: 25px; fill: #5e0302; width: 25px"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M19,107a35,35 0 01 35-35h36v-27a44,44 0 01 44-44h19a44,44 0 01 44,44v27h106v-27a44,44 0 01 44-44h19a44,44 0 01 44,44v27h36a35,35 0 01 35,35v357a35,35 0 01-35,35h-392a35,35 0 01-35-35zM125.5,45a8.5,8.5 0 01 8.5-8.5h18.5a8.5,8.5 0 01 8.5,8.5v81a8.5,8.5 0 01-8.5,8.5h-18.5a8.5,8.5 0 01-8.5-8.5zM339,45a8.5,8.5 0 01 8.5-8.5h18.5a8.5,8.5 0 01 8.5,8.5v81a8.5,8.5 0 01-8.5,8.5h-18.5a8.5,8.5 0 01-8.5-8.5zM54,179h392v285h-392z"
                            />

                            <rect width="100" height="80" x="80" y="220" />
                            <rect width="100" height="80" x="200" y="220" />
                            <rect width="100" height="80" x="320" y="220" />

                            <rect width="100" height="80" x="80" y="325" />
                            <rect width="100" height="80" x="200" y="325" />
                            <rect width="100" height="80" x="320" y="325" />
                          </svg>
                        </span>
                      </div>
                      <datepicker
                        v-model="start_date"
                        :highlighted="highlighted"
                        :placeholder="'When?'"
                        class="tours-picker w-100"
                      >
                        <div
                          slot="beforeCalendarHeader"
                          class="calender-header text-end me-2 my-2"
                        >
                          <a class="btn btn-danger" @click="selectToday">
                            Today
                          </a>
                        </div>
                      </datepicker>
                    </div>
                  </div>
                  <div class="col-sm-12 mt-3 px-3">
                    <div class="mt-3">
                      <h5 class="p-2 my-2 text-center">Select Traveler</h5>
                    </div>

                    <div v-click-outside-dropdown="closeTravelerDropdown">
                      <div
                        class="
                          d-flex
                          text-danger
                          align-items-center
                          mt-3
                          border
                          rounded
                          p-2
                          bg-white
                          select-traveller
                        "
                      >
                        <div class="me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style="
                              width: 25px;
                              height: 25px;
                              vertical-align: middle;
                              fill: #5e0302;
                              overflow: hidden;
                            "
                            viewBox="0 0 1024 1024"
                            version="1.1"
                          >
                            <path
                              d="M368.071472 533.396309c106.49036 0 193.127556-86.532819 193.127556-192.894242 0-106.361423-86.637196-192.892195-193.127556-192.892195s-193.127556 86.530772-193.127556 192.892195C174.943916 446.864514 261.581112 533.396309 368.071472 533.396309zM368.071472 198.833511c78.246085 0 141.903917 63.552431 141.903917 141.668557 0 78.117149-63.657832 141.670603-141.903917 141.670603s-141.903917-63.553455-141.903917-141.670603C226.167554 262.385942 289.825386 198.833511 368.071472 198.833511zM782.219863 538.397207c50.315966-21.135366 85.73771-70.876234 85.73771-128.72885 0-76.960813-62.683644-139.572826-139.732461-139.572826-77.047794 0-139.731438 62.612013-139.731438 139.572826 0 62.971194 41.96988 116.327402 99.43057 133.647883-44.6315 12.485359-84.175121 39.092343-112.36516 75.757404-56.391335-53.006238-129.938398-82.102926-207.992101-82.102926-80.691787 0-156.566872 31.094182-213.649961 87.555102C96.759229 681.059394 65.280284 756.248863 65.280284 836.240709c0 5.131881 0.132006 10.311857 0.39295 15.397688l1.24741 24.298406 601.292676 0 1.249457-24.296359c0.261966-5.090948 0.394996-10.270924 0.394996-15.399735 0-18.185174-1.644453-36.116569-4.830005-53.641711l293.554826 0 1.245364-24.301476c0.184195-3.605108 0.277316-7.274684 0.277316-10.906397C960.105273 642.693598 883.088178 555.488467 782.219863 538.397207zM639.717312 409.668357c0-48.715515 39.70428-88.348164 88.5078-88.348164s88.508823 39.632649 88.508823 88.348164c0 48.716538-39.705304 88.350211-88.508823 88.350211S639.717312 458.384895 639.717312 409.668357zM116.771005 824.713164c6.118348-131.441635 116.272143-236.519832 250.797-236.519832 134.525879 0 244.678652 105.078197 250.798023 236.519832L116.771005 824.713164zM650.842697 731.37536c-9.827833-26.061562-23.337521-50.705845-40.300868-73.281003C640.439766 613.945857 691.071933 586.572416 746.008126 586.572416c84.33885 0 153.910369 63.61383 162.073282 144.802944L650.842697 731.37536z"
                            />
                          </svg>
                        </div>
                        <div class="w-100">
                          <input
                            v-model="traveler_number"
                            type="text"
                            placeholder="Travellers"
                            autocomplete="off"
                            class="w-100 travel"
                            readonly
                            @click="showTravelerDropdown"
                          />
                        </div>
                      </div>

                      <div
                        v-if="visible_traveler_dropdown"
                        class="
                          ms-3
                          shadow-lg
                          traveler-dropdown
                          left-0
                          bg-white
                          mt-3
                        "
                      >
                        <div class="position-relative">
                          <h5 class="p-2 my-2 text-center">
                            <strong>Select Traveler</strong>
                          </h5>
                          <button
                            type="button"
                            class="
                              btn btn-white btn-sm btn-floating
                              text-danger
                              float-right
                              position-absolute
                            "
                            style="top: 5px; right: 10px"
                            @click="closeTravelerDropdown"
                          >
                            <span style="font-size: 20px">✕</span>
                          </button>
                          <div
                            class="
                              py-2
                              px-3
                              mt-2
                              border-1
                              text-start
                              d-flex
                              justify-content-between
                            "
                          >
                            <div><strong>Adult </strong>(16+ years):</div>
                            <div>
                              <select
                                v-model="adults_number"
                                class="form-select form-select-sm"
                                aria-label="Select Adult Number"
                              >
                                <option value="0">Adult Number</option>
                                <option value="1">1 Adult</option>
                                <option
                                  v-for="(item, index) in 30"
                                  :key="index"
                                  :value="index + 2"
                                >
                                  {{ index + 2 }} Adults
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            py-2
                            px-3
                            border-1
                            text-start
                            d-flex
                            justify-content-between
                          "
                        >
                          <div><strong>Child </strong>(0~15 years):</div>
                          <div>
                            <select
                              v-model="children_number"
                              class="form-select form-select-sm"
                              aria-label="Select Child Number"
                              placeholder="Select"
                            >
                              <option value="0">Child Number</option>
                              <option value="1">1 Child</option>
                              <option
                                v-for="(item, index) in 10"
                                :key="index"
                                :value="index + 2"
                              >
                                {{ index + 2 }} Children
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="text-start">
                          <button
                            class="btn btn-danger btn-rounded mx-3 my-3"
                            @click="setTravelerInfo"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      class="
                        mt-3
                        select-traveller
                        d-flex
                        align-items-center
                        p-2
                        border
                        rounded
                        bg-white
                      "
                    >
                      <div class="me-3">
                        <svg
                          viewBox="0 0 20 20"
                          style="width: 25px; height: 25px"
                        >
                          <path
                            fill="#5e0302"
                            d="M9.74 0A10 10 0 1 0 20 9.74 10 10 0 0 0 9.74 0zm.5 19A9 9 0 1 1 19 9.76 9 9 0 0 1 10.24 19z"
                          />
                          <path
                            fill="#5e0302"
                            d="M10.21 11.5H10a6.5 6.5 0 0 0-5.5 3.4.5.5 0 1 0 .88.48 5.5 5.5 0 0 1 4.69-2.87h.15a5.5 5.5 0 0 1 4.69 2.62.5.5 0 0 0 .85-.52 6.5 6.5 0 0 0-5.55-3.11zm-.29-1H10A3.5 3.5 0 0 0 13.42 7v-.09a3.5 3.5 0 0 0-3.5-3.41h-.09A3.5 3.5 0 0 0 6.42 7v.09a3.5 3.5 0 0 0 3.5 3.41zm-.06-6h.07a2.5 2.5 0 0 1 2.5 2.43V7A2.5 2.5 0 0 1 10 9.5h-.08a2.5 2.5 0 0 1-2.5-2.43V7a2.5 2.5 0 0 1 2.43-2.5z"
                          />
                        </svg>
                      </div>
                      <input
                        v-model="name"
                        placeholder="Your Name"
                        class="w-100 travel"
                        required
                      />
                    </div>

                    <div
                      class="
                        mt-3
                        select-traveller
                        d-flex
                        text-danger
                        align-items-center
                        p-2
                        bg-white
                        border
                        rounded
                      "
                    >
                      <div class="me-3">
                        <svg
                          viewBox="0 0 256 256"
                          style="width: 25px; fill: #5e0302"
                        >
                          <defs></defs>
                          <g
                            style="
                              stroke: none;
                              stroke-width: 0;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: none;
                              fill-rule: nonzero;
                              opacity: 1;
                            "
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                          >
                            <path
                              d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
                              style="
                                stroke: none;
                                stroke-width: 1;
                                stroke-dasharray: none;
                                stroke-linecap: butt;
                                stroke-linejoin: miter;
                                stroke-miterlimit: 10;
                                fill: #5e0302;
                                fill-rule: nonzero;
                                opacity: 1;
                              "
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                            <path
                              d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"
                              style="
                                stroke: none;
                                stroke-width: 1;
                                stroke-dasharray: none;
                                stroke-linecap: butt;
                                stroke-linejoin: miter;
                                stroke-miterlimit: 10;
                                fill: #5e0302;
                                fill-rule: nonzero;
                                opacity: 1;
                              "
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                            <path
                              d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"
                              style="
                                stroke: none;
                                stroke-width: 1;
                                stroke-dasharray: none;
                                stroke-linecap: butt;
                                stroke-linejoin: miter;
                                stroke-miterlimit: 10;
                                fill: #5e0302;
                                fill-rule: nonzero;
                                opacity: 1;
                              "
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                            <path
                              d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"
                              style="
                                stroke: none;
                                stroke-width: 1;
                                stroke-dasharray: none;
                                stroke-linecap: butt;
                                stroke-linejoin: miter;
                                stroke-miterlimit: 10;
                                fill: #5e0302;
                                fill-rule: nonzero;
                                opacity: 1;
                              "
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                            <path
                              d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"
                              style="
                                stroke: none;
                                stroke-width: 1;
                                stroke-dasharray: none;
                                stroke-linecap: butt;
                                stroke-linejoin: miter;
                                stroke-miterlimit: 10;
                                fill-rule: nonzero;
                                opacity: 1;
                                fill: #5e0302;
                              "
                              transform=" matrix(1 0 0 1 0 0) "
                              stroke-linecap="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div class="w-100">
                        <input
                          v-model="email"
                          type="email"
                          placeholder="Email"
                          class="w-100 travel"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 mt-3" />
                </div>

                <button
                  class="btn btn-danger m-3 mt-4 mx-4"
                  type="submit"
                  :disabled="disabled"
                >
                  FREE INQUIRY
                </button>
              </div>

              <div v-if="packageData != null" class="card p-4 mb-3">
                <h5 class="mb-0 text-center">Customer Reviews</h5>
                <h6
                  class="
                    reviews
                    mb-3
                    mt-2
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <CustomStarRating
                    :rating="packageData.operator.avgReview"
                    :size="17"
                    class="me-2 mb-2"
                  />
                  <span
                    v-if="packageData.operator.avgReview == '5'"
                    class="text-danger"
                  >
                    5.0 / 5
                  </span>
                  <span
                    v-else-if="packageData.operator.avgReview == '4'"
                    class="text-danger"
                  >
                    4.0 / 5
                  </span>
                  <span
                    v-else-if="packageData.operator.avgReview == '3'"
                    class="text-danger"
                  >
                    3.0 / 5
                  </span>
                  <span
                    v-else-if="packageData.operator.avgReview == '2'"
                    class="text-danger"
                  >
                    2.0 / 5
                  </span>
                  <span
                    v-else-if="packageData.operator.avgReview == '1'"
                    class="text-danger"
                  >
                    1.0 / 5
                  </span>
                  <span v-else class="text-danger">
                    {{ Math.round(packageData.operator.avgReview * 10) / 10 }} /
                    5
                  </span>

                  <span
                    v-if="packageData.operator.numReview == '1'"
                    class="ms-1"
                  >
                    ({{ packageData.operator.numReview }} Review)
                  </span>
                  <span v-else class="ms-1"
                    >({{ packageData.operator.numReview }} Reviews)</span
                  >
                </h6>

                <SliderReview
                  v-if="isSliderReview"
                  :review="packageData.operator.reviews"
                />
                <h6
                  v-if="packageData.operator.reviews.length == 0"
                  class="text-center"
                >
                  There are no reviews yet.
                </h6>
                <button
                  type="button"
                  class="btn write-review mx-2 mt-3"
                  data-mdb-toggle="modal"
                  data-mdb-target="#writeareview"
                >
                  <span class="text-danger"> Write a Review </span>
                </button>
                <ReviewModal
                  :operator_id="packageData.operator.id"
                  :package_id="packageData.id"
                />
              </div>
              <lazy-component @show.once="reviewShow" />
              <span ref="scroll" id="scroll-detect">&nbsp;</span>

              <div
                v-if="packageData != null && sticky"
                class="card p-3 mb-3 mobile sticky-price bg-white"
                style="width: 350px"
              >
                <div class="row align-items-center">
                  <div class="col-5 col-md-5 text-center">
                    <span class="h4 fw-bold">{{
                      (price * (1 - packageData.rates.discount * 0.01))
                        | currency
                    }}</span
                    ><span>/pp</span>
                  </div>
                  <div class="col-7 col-md-7">
                    <button
                      class="btn btn-danger w-100"
                      style="white-space: nowrap"
                      type="submit"
                      :disabled="disabled"
                    >
                      Free Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <!-- <div v-if="packageData != null" class="card p-0 mb-3 gallery">
              <SliderGallery v-if="isReview" :gallery="packageData.gallery" />
            </div> -->
          </div>
        </div>
      </div>

      <exit-intent
        v-show="isVisible"
        :is-sent="isSent"
        @closePopUp="close"
        @showPopUp="show"
        @modalClick="modalClick"
      />
    </client-only>
    <TourHeroSection></TourHeroSection>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";
import CustomStarRating from "../../components/CustomStarRating";
import TourPackageSkelecton from "../../components/TourPackageSkelecton.vue";
import Itinerary from "../../components/tourpackage/Itinerary.vue";
import Gallery from "../../components/tourpackage/Gallery";
import Reviews from "../../components/tourpackage/Reviews";
import ExitIntent from "../../components/tourpackage/ExitIntent";
import MapBox from "../../components/tourpackage/MapBox.vue";
import ActivitySliderBalloon from "../../components/tourpackage/ActivitySliderBalloon.vue";
import ActivitySliderBirding from "../../components/tourpackage/ActivitySliderBirding.vue";
import ActivitySliderBoat from "../../components/tourpackage/ActivitySliderBoat.vue";
import ActivitySliderCanoe from "../../components/tourpackage/ActivitySliderCanoe.vue";
import ActivitySliderCycling from "../../components/tourpackage/ActivitySliderCycling.vue";
import ActivitySliderHorse from "../../components/tourpackage/ActivitySliderHorse.vue";
import ActivitySliderNature from "../../components/tourpackage/ActivitySliderNature.vue";
import ActivitySliderNight from "../../components/tourpackage/ActivitySliderNight.vue";
import ActivitySliderNormal from "../../components/tourpackage/ActivitySliderNormal.vue";
import ActivitySliderOpen from "../../components/tourpackage/ActivitySliderOpen.vue";
import ActivitySliderPop from "../../components/tourpackage/ActivitySliderPop.vue";
import ActivitySliderPopmini from "../../components/tourpackage/ActivitySliderPopmini.vue";
import ActivitySliderWalking from "../../components/tourpackage/ActivitySliderWalking.vue";
import DaySlider from "../../components/tourpackage/DaySlider.vue";
import SliderGallery from "../../components/tourpackage/SliderGallery";
import SliderReview from "../../components/tourpackage/SliderReview";
import ReviewModal from "../../components/ReviewModal.vue";
import TourHeroSection from "../../components/tourpackage/TourHeroSection.vue";
import Exclude from "../../components/tourpackage/Exclude.vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

export default {
  name: "TourPackage",
  scrollToTop: true,
  components: {
    Datepicker: () => import("vuejs-datepicker"),
    CustomStarRating,
    Gallery,
    Reviews,
    Itinerary,
    ExitIntent,
    ReviewModal,
    SliderGallery,
    SliderReview,
    TourPackageSkelecton,
    MapBox,
    ActivitySliderBalloon,
    ActivitySliderBirding,
    ActivitySliderBoat,
    ActivitySliderCanoe,
    ActivitySliderCycling,
    ActivitySliderHorse,
    ActivitySliderNature,
    ActivitySliderNight,
    ActivitySliderNormal,
    ActivitySliderOpen,
    ActivitySliderPop,
    ActivitySliderPopmini,
    ActivitySliderWalking,
    DaySlider,
    TourHeroSection,
    Exclude,
  },
  directives: {
    "click-outside-dropdown": {
      bind: function (el, binding) {
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event);
          }
        };
        el.__vueClickEventHandler__ = ourClickEventHandler;
        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function (el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },
  data() {
    return {
      start_date: new Date(),
      highlighted: {
        dates: [new Date()],
      },
      traveler_number: "",
      visible_traveler_dropdown: false,
      visible_traveler_dropdown1: false,
      adults_number: 2,
      children_number: 0,
      title: "", //for page title and image
      image_url: "",

      price: 0,

      updated: 0,

      isReview: false,
      isSliderReview: false,

      name: "",
      email: "",

      disabled: false,
      timeout: null,

      selected_country: "",
      phone_code: "+",
      isSent: true,
      isVisible: false, // this is for testing and design purpose...has to be FALSE

      videoId: "",

      isItineryTab: true,
      isReviewTab: false,

      favList: [],
      isFav: false,

      loading: true,

      includeList: [],
      excludeList: [],

      isNormal: false,
      isOpen: false,
      isPopup: false,
      isPopmini: false,

      sticky: false,

      images: [
        "https://loremflickr.com/320/240?random=1",
        "https://loremflickr.com/320/240?random=2",
        "https://loremflickr.com/320/240?random=3",
        "https://loremflickr.com/320/240?random=4",
        "https://loremflickr.com/320/240?random=5",
        "https://loremflickr.com/320/240?random=6",
        "https://loremflickr.com/320/240?random=7",
        "https://loremflickr.com/320/240?random=8",
        "https://loremflickr.com/320/240?random=9",
        "https://loremflickr.com/320/240?random=10",
        "https://loremflickr.com/320/240?random=11",
        "https://loremflickr.com/320/240?random=12",
        "https://loremflickr.com/320/240?random=14",
        "https://loremflickr.com/320/240?random=25",
        "https://loremflickr.com/320/240?random=54",
      ],
    };
  },
  metaInfo() {
    return {
      title: `${this.title} | Safari-Trek-Beach`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // {name: 'description', content: this.packageData.description},
        { property: "og:title", content: this.title },
        { name: "twitter:title", content: this.title },
        { property: "og:image", content: this.image_url },
        {
          property: "twitter:image",
          content: this.image_url,
        },
        {
          property: "og:url",
          content:
            "https://safaritrekbeach.org/tour-package/" + this.package_id,
        },
      ],
    };
  },
  computed: {
    package_id: function () {
      // console.log("*** route ***", this.$route);
      var id = this.$route.params.slug;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      packageData: "tourController/packageData",
      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
      email_state: "tourController/email",
      fullname_state: "tourController/fullname",
    }),
  },

  watch: {
    adults_number: function () {
      this.priceCalc(
        parseInt(this.adults_number) + parseInt(this.children_number),
        this.start_date
      );
    },

    children_number: function () {
      this.priceCalc(
        parseInt(this.adults_number) + parseInt(this.children_number),
        this.start_date
      );
    },

    start_date: function () {
      this.priceCalc(
        parseInt(this.adults_number) + parseInt(this.children_number),
        this.start_date
      );
    },
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  created() {
    this.getPacakgeById(this.package_id);
    console.log("&&&&&&&&&&packageData&&&&&&&&&&", this.packageData)
    this.traveler_number = this.traveler_number_state;
    this.start_date = this.start_date_state;
    this.adults_number = this.adults_number_state;
    this.children_number = this.children_number_state;
    this.name = this.fullname_state;
    this.email = this.email_state;
    this.traveler_number_calc();
    if (process.client) window.addEventListener("scroll", this.handleScroll);
  },

  mounted() {
    this.favList = process.server
      ? []
      : JSON.parse(localStorage.getItem("safariWishList") || "[]");
    let index = this.favList.findIndex((x) => x.id == this.package_id);
    if (index > -1) {
      this.isFav = true;
    }
  },

  methods: {
    showImage() {
      console.log("view photos clicked ....");
      this.$viewerApi({
        options: {
          toolbar: true,
          initialViewIndex: 0,
        },
        images: this.images,
      });
    },

    handleScroll(e) {
      if (this.$refs.scroll == undefined) return;
      const top = this.$refs.scroll.getBoundingClientRect().top;
      if (top < 0) this.sticky = true;
      else this.sticky = false;
    },
    addRemoveToWishlist() {
      var dataToAdd = {};
      this.favList = JSON.parse(localStorage.getItem("safariWishList") || "[]");
      let index = this.favList.findIndex((x) => x.id == this.packageData.id);
      if (index > -1) {
        this.favList.splice(index, 1);
        this.isFav = false;
      } else {
        (dataToAdd = {
          id: this.packageData.id,
          noOfDay: this.packageData.noOfDay,
          noOfNight: this.packageData.noOfDay - 1,
          title: this.packageData.title,
          image: this.packageData.banner,
          bannerType: this.packageData.bannerType,
          tourGroup: this.packageData.tourGroup,
          adultCurrency: this.packageData.rates.adultCurrency,
          currencyDiscount: this.packageData.rates.discount,
          startCity: this.packageData.gettingThere.startCity,
          endCity: this.packageData.gettingThere.endCity,
          operator: {
            logo: this.packageData.operator.logo,
            companyName: this.packageData.operator.companyName,
            tag: "seller",
            numReview: this.packageData.operator.numReview,
            sumReview: this.packageData.sum_review,
            avgReview: this.packageData.operator.avgReview,
          },
          destinations: this.packageData.dayByDay.map(function (item) {
            return item["destination"];
          }),
          levels: [this.packageData.operator.tourType],
        }),
          this.favList.push(dataToAdd);
        this.isFav = true;
      }
      this.$store.dispatch(
        "tourController/setWishlistCount",
        this.favList.length
      );
      localStorage.setItem("safariWishList", JSON.stringify(this.favList));
    },
    itineryButton() {
      this.isItineryTab = false;
      this.isReviewTab = true;
      this.$refs.itinery.click();
    },
    reviewButton() {
      this.isReviewTab = false;
      this.$refs.review.click();
    },

    isMobile() {
      /* eslint-disable */
      let check = false;
      if (process.browser) {
        (function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true;
        })(
          window.navigator.userAgent || window.navigator.vendor || window.opera
        );
      }

      return check;
    },
    top() {
      this.isSent = false;
      setTimeout(() => (this.isSent = true), 2000);
    },
    async modalClick(email) {
      const ipUrl = process.env.VUE_APP_IP_URL;
      const ipKey = process.env.VUE_APP_IP_SECRET_KEY;

      let firstQuote = {};

      await axios
        .get(ipUrl, {
          headers: {
            Authorization: `ApiKey ${ipKey}`,
          },
        })
        .then((response) => {
          this.selected_country = response.data.location.country.name;
          this.phone_code = response.data.location.country.calling_code;
        });

      firstQuote = {
        adult: this.adults_number,
        child: this.children_number,
        travelDate:
          this.start_date == null || this.start_date == ""
            ? "NULL"
            : this.start_date,
        fullName:
          this.name == undefined || this.name == "" ? "Email Modal" : this.name,
        email: email,
        country: this.selected_country,
        phone: `+${this.phone_code}00000000`,
        description:
          "This quote is by the email modal when exit intent(by Admin)",
        zanzibarActivity: 0,
        kilimanjaroActivity: 0,
        safariActivity: 0,
        package: this.packageData.id,
        user: this.packageData.operator.id,
        estimateCost: 0,
      };
      this.$store
        .dispatch("operatorController/tourQuote", firstQuote)
        .then(() => {});
    },
    show() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
    getPacakgeById(package_id) {
      this.$store
        .dispatch("tourController/getTourById", package_id)
        .then(() => {
          this.loading = false;
          if (this.packageData == null) {
            this.$router.push("/error404");
            return;
          }

          this.updated++;
          this.title =
            this.packageData.operator.companyName +
            ": " +
            this.packageData.noOfDay +
            "-Day " +
            this.packageData.title;
          this.image_url = this.packageData.banner;

          this.includeList = this.packageData.inclusion.filter(
            (val) => val.included == true
          );
          this.excludeList = this.packageData.inclusion.filter(
            (val) => val.included == false
          );

          this.priceCalc(
            parseInt(this.adults_number) + parseInt(this.children_number),
            this.start_date
          );

          for (let i = 0; i < this.packageData.tourTransports.length; i++) {
            if (this.packageData.tourTransports[i].transport == "Minivan")
              this.isPopmini = true;
            if (this.packageData.tourTransports[i].facility != null) {
              if (
                this.packageData.tourTransports[i].facility.some((res) =>
                  res.name.includes("Pop up Roof")
                )
              ) {
                this.isPopup = true;
              }
              if (
                this.packageData.tourTransports[i].facility.some((res) =>
                  res.name.includes("4*4")
                )
              )
                this.isNormal = true;

              if (
                this.packageData.tourTransports[i].facility.some((res) =>
                  res.name.includes("Open side")
                )
              )
                this.isOpen = true;
            }
          }

          if (this.packageData.bannerType == "video") {
            this.videoId = this.$youtube.getIdFromURL(this.packageData.banner);
          }
        });
    },

    priceCalc(num, start_date) {
      var d = new Date();
      var n = d.getMonth();

      if (start_date != "" && start_date != null) {
        d = new Date(start_date);
        n = d.getMonth();
      }

      if (
        num > this.packageData.rates.adult?.currencySpring.length ||
        num == 0
      ) {
        num = this.packageData.rates.adult?.currencySpring.length;
      }

      if (n > 1 && n < 5) {
        this.price = this.packageData.rates.adult.currencySpring[num - 1];
        while (this.price == 0 && num > 0) {
          this.price = this.packageData.rates.adult.currencySpring[num - 1];
          num = num - 1;
        }
      } else if (n > 4 && n < 8) {
        this.price = this.packageData.rates.adult.currencySummer[num - 1];
        while (this.price == 0 && num > 0) {
          this.price = this.packageData.rates.adult.currencySummer[num - 1];
          num = num - 1;
        }
      } else if (n > 7 && n < 11) {
        this.price = this.packageData.rates.adult.currencyAutumn[num - 1];
        while (this.price == 0 && num > 0) {
          this.price = this.packageData.rates.adult.currencyAutumn[num - 1];
          num = num - 1;
        }
      } else {
        this.price = this.packageData.rates.adult.currencyWinter[num - 1];
        while (this.price == 0 && num > 0) {
          this.price = this.packageData.rates.adult.currencyWinter[num - 1];
          num = num - 1;
        }
      }
    },

    traveler_number_calc() {
      if (this.adults_number == undefined) this.adults_number = 2;
      if (this.children_number == undefined) this.children_number = 0;
      let traveler = this.adults_number + this.children_number;
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
    },

    showTravelerDropdown() {
      var current_flag = this.visible_traveler_dropdown;
      this.visible_traveler_dropdown = !current_flag;
    },

    closeTravelerDropdown: function () {
      this.visible_traveler_dropdown = false;
    },

    reviewShow() {
      this.isReview = true;
      this.updated++;
    },

    delay() {
      this.disabled = true;
      this.timeout = setTimeout(() => {
        this.disabled = false;
      }, 5000);
      this.getQuoteNow();
    },

    sliderReviewShow() {
      this.isSliderReview = true;
      console.log("Review section is showed now...");
    },

    setTravelerInfo(event) {
      event.preventDefault();
      let traveler =
        parseInt(this.adults_number) + parseInt(this.children_number);
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else this.traveler_number = traveler + " Travelers";
      this.closeTravelerDropdown();
    },

    async getQuoteNow() {
      this.isSent = false;

      let searchData = {};

      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: parseInt(this.adults_number),
        children_number: parseInt(this.children_number),
        email: this.email,
        name: this.name,
      };

      //this is the data for tour quote page - more detailed information

      let quoteData = {};

      quoteData = {
        title: this.packageData.title,
        noOfDay: this.packageData.noOfDay,
        adult_currency_rate: this.packageData.rates.adult,
        company_name: this.packageData.company_name,
        image: this.packageData.image,
        logo: this.packageData.operator.logo,
        price: this.price,
        avg_review: this.packageData.operator.avgReview,
        num_review: this.packageData.operator.numReview,
        start_city: this.packageData.gettingThere.startCity,
        end_city: this.packageData.gettingThere.endCity,
        day: this.packageData.day,
        tour_focus: this.packageData.tourFocus,
        tour_group: this.packageData.tourGroup,
        currency_discount: this.packageData.rates.discount,
        email: this.email,
        name: this.name,
        day: this.packageData.dayByDay,
      };

      this.$store.dispatch("tourController/setSearchData", searchData);
      this.$store.dispatch("tourController/setQuotePackage", quoteData);

      let quote_tourInfo = {};
      quote_tourInfo = {
        package_id: this.packageData.id,
        user_id: this.packageData.operator.id,
      };
      this.$store.dispatch("tourController/setTourInfo", quote_tourInfo);

      this.$router.push("/TourQuote");

      const ipUrl = process.env.VUE_APP_IP_URL;
      const ipKey = process.env.VUE_APP_IP_SECRET_KEY;

      let firstQuote = {};

      await axios
        .get(ipUrl, {
          headers: {
            Authorization: `ApiKey ${ipKey}`,
          },
        })
        .then((response) => {
          this.selected_country = response.data.location.country.name;
          this.phone_code = response.data.location.country.calling_code;
        });

      firstQuote = {
        adult: this.adults_number,
        children: this.children_number,
        travelDate:
          this.start_date == null || this.start_date == ""
            ? "NULL"
            : this.start_date,
        fullName: this.name,
        email: this.email,
        country: this.selected_country,
        phone: `+${this.phone_code}00000000`,
        description: "This quote is before the detailed inquiry(by Admin)",
        zanzibarActivity: undefined,
        kilimanjaroActivity: undefined,
        safariActivity: undefined,
        package: this.packageData.id,
        user: this.packageData.operator.id,
        estimateCost: 0,
      };

      this.$store
        .dispatch("operatorController/tourQuote", firstQuote)
        .then(() => {
          //console.log("send success: first data send successfully...");
        });
    },

    selectToday() {
      var date = new Date();
      this.start_date = date;
      var items = document.getElementsByClassName("vdp-datepicker__calendar");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
    },
  },
};
</script>

<style lang="scss">
.package {
  padding-top: 60px;
  @media (max-width: 480px) {
    padding-top: 9px;
  }

  strong {
    color: #434f64;
  }
  p {
    font-weight: 350 !important;
  }

  button[type="submit"] {
    font-size: 17px;
  }

  .card {
    border-radius: 10px;
  }
  .package-inner-image {
    height: 0;
    width: 100%;
    padding-top: 45%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    background-color: #c9c9c9;
    @media (min-width: 1201px) and (max-width: 1400px) {
      padding-top: 55%;
    }
    @media (min-width: 992px) and (max-width: 1200px) {
      padding-top: 65%;
    }
    @media (max-width: 991px) {
      padding-top: 70%;
      border-radius: 0;
    }

    @media (max-width: 480px) {
      padding-top: 89%;
      border-radius: 0;
    }
  }

  .nav-tabs .nav-link {
    text-transform: none;
  }

  .price-rate {
    bottom: 0;
    left: 0;
    position: absolute;
    @media (max-width: 991px) {
      position: relative;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }

  .photo-gallery-item {
    height: 0;
    width: 100%;
    padding-top: 56.25%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .review-content,
  .overview-description,
  .overview-description p,
  .itinery-content,
  ul li {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
  }

  input.travel {
    border: none;
    outline: none;
    color: gray;
  }

  h6 {
    margin-bottom: 10px;
  }

  .review-detail {
    border: 1px solid #e0e0e0;
    padding: 20px;
    position: relative;
    border-radius: 10px;
    margin: 5px;
    cursor: -webkit-grab;
    cursor: grab;
    & > h5:first-child {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      --max-lines: 2;
      min-height: 45px;
      max-height: calc(var(--lh) * var(--max-lines));
      overflow: hidden;
      padding-right: 1rem;
      color: rgb(60, 66, 87);
    }
  }

  .package-inner-titile {
    @media (max-width: 991px) {
      height: auto;
      h3 {
        font-size: 20px;
      }
      h5 {
        font-size: 18px;
      }
    }
  }

  .mobile {
    display: block;
    .card {
      border-radius: 10px;
      background-color: #ffffff8c;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }

  .desktop {
    display: none;

    @media (max-width: 991px) {
      display: block;
    }
  }

  .gallery .bg-image {
    height: 0;
    width: 100%;
    padding-top: 56.25%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .exclusion-inclusion {
    font-size: 16px;
  }

  .learn-more {
    z-index: 1030;
    border-radius: 20px;
    display: none;
  }
  .learn-hover {
    cursor: pointer;
    &:hover .learn-more {
      display: block;
    }
  }
}

.rating-wrap {
  display: table;
  max-width: 400px;
  width: 100%;
  position: relative;
}

.rating-item {
  display: table-row;

  span {
    font-size: 16px;
  }

  .progress {
    height: 15px;
  }
}

.rating-grade {
  display: table-cell;
  white-space: nowrap;
  vertical-align: middle;
}

.get-quote-mobile {
  display: none;
}

h4.flex-shrink-0 {
  font-size: 16px;
  line-height: 22px;
}
.s-heading {
  width: 80%;
}
.horizontal-grayline {
  margin-top: 11px;
  height: 1px;
  margin-left: 5px;
  background: #e0e0e0;
  width: 100% !important;
}

.routine h6 {
  font-size: 16px;
}

.routine-detail h6 {
  text-transform: capitalize;
}

table th,
table td {
  padding: 10px !important;
  vertical-align: middle;
  font-family: Georgia, serif;
}

table thead th:first-child {
  min-width: 150px;
}

.rightside {
  .icon {
    bottom: 20px;
    left: 28px;
    z-index: 10;
  }
  .vdp-datepicker {
    display: flex;
    flex-direction: column-reverse;
    border: 1px solid #e0e0e0 !important;
    border-radius: 10px;
    & > div:nth-child(2) {
      display: block !important;
    }
    & > div:nth-child(3),
    & > div:nth-child(4) {
      display: none !important;
    }
    input {
      background-color: transparent;
      padding: 0.5rem;
      padding-left: 50px;
      border: 1px solid #e0e0e0 !important;
      border-radius: 0.25rem !important;
      margin-right: 20px;
      margin-left: 20px;
      margin-bottom: 10px;
      width: calc(100% - 40px);
      color: gray;
    }
    .vdp-datepicker__calendar {
      width: 100%;
      position: relative !important;
      padding: 15px;
      border: none;
      box-shadow: none !important;
      background-color: transparent;
      left: 0;
      top: 0;
      .cell {
        border-radius: 50%;
      }
    }
  }
}

iframe {
  width: 100%;
}

@media (max-width: 991px) {
  .get-quote-mobile {
    display: flex;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 1030;
    background-color: white;
  }
}

.price-before {
  padding: 10px;
  background-color: #e1dfdb;
  width: 50%;
  color: #5e0302;
  border-top-left-radius: 10px;

  h6 {
    font-size: 15px;
  }
}
.price-after {
  padding: 10px;
  width: 50%;
  background-color: #5e0302;
  color: white;
  border-top-right-radius: 10px;
  h6 {
    font-size: 15px;
  }
}
.price-triangle {
  position: absolute;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 42px 0 42px 20px;
  border-color: transparent transparent transparent #e0e0e0;
  left: 50%;
}

.package-inner-banner {
  .fav-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;

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
      fill: #bec0c2;
    }

    .fav {
      fill: #fe415b;
    }
  }
}
ul li {
  list-style: none;
  font-size: 16px;
  position: relative;
  margin-bottom: 5px;
}

ul li.include::before {
  content: "✓";
  color: #f93154;
  display: inline-block;
  width: 1.5em;
  top: 2px;
  left: -23px;
  position: absolute;
}

ul li.exclude::before {
  content: "✗";
  color: black;
  display: inline-block;
  width: 1.5em;
  top: 2px;
  left: -23px;
  position: absolute;
}

ul li.include,
ul li.exclude {
  p {
    display: inline-table;
    margin-bottom: 0;
  }
}

// new next button

.next-btn {
  background-color: #8d2624;
  height: fit-content;
  padding: 5px 70px 5px 5px;
  position: relative;
  overflow: hidden;
  border: none;
  font-size: 0.9em;
  color: white;
  font-weight: 600;
  box-shadow: inset 5px 0px 5px #6d0402;
  width: 200px;
  margin: auto;
  cursor: pointer;
}
.next-btn::after {
  content: "";
  position: absolute;
  top: -45%;
  right: 0%;
  height: 100%;
  width: 17px;
  background-color: white;
  transform: rotate(-45deg);
}
.next-btn::before {
  content: "";
  position: absolute;
  bottom: -45%;
  right: 0%;
  height: 100%;
  width: 17px;
  background-color: white;
  transform: rotate(45deg);
}
.arrow {
  content: "";
  position: absolute;
  height: 45px;
  width: 45px;
  transform: rotate(-45deg);
  top: -16%;
  border-right: 7px solid white;
  border-bottom: 7px solid white;
}
.arrow.A1 {
  right: 10%;
}
.arrow.A2 {
  right: 19%;
}
.arrow.A3 {
  right: 29%;
}

.safari {
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

.write-review {
  box-shadow: none;
  border: 1px solid #e0e0e0;
}

@media (max-width: 767px) {
  .safari {
    flex-wrap: nowrap;
    overflow-y: auto;

    .col-12 {
      width: 75%;
    }
  }

  .accom-slider {
    position: relative !important;
    width: 250px;
    margin-bottom: 30px;
  }
}

.airport {
  transform: rotate(-20deg);
}

.reviews > span {
  font-size: 14px;
}
.select-traveller {
  margin-right: 41px;
  margin-left: 41px;
}

.sticky-price {
  position: fixed;
  top: 85px;
  z-index: 2;
}
</style>
