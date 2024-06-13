<template>
  <div id="our-tours">
    <div class="container mt-0">
      <section class="section-header mb-3">
        <h1 class="mb-0 text-capitalize">
          {{ search_name }}
        </h1>
        <span class="read-more">
          Tanzania is Africa’s number one safari destination. The wildlife
          viewing is amazing and big cats are easy to see. Africa Big Five can
          be found in many Tanzanian parks and reserves.
        </span>
        <span v-if="!read_more">...</span>
        <span v-if="read_more" class="read-more">
          The most famous parks are Ngorongoro Crater and Serengeti National
          Park. More than a quarter of the country is set aside for
          conservation. Tanzania is also home to Africa tallest Mountain, Mt.
          Kilimanjaro and has the best white sand beaches at Zanzibar Island.
        </span>
        <span
          v-if="!read_more"
          class="read-more text-danger"
          @click="read_more = !read_more"
          >Read more</span
        >
        <span
          v-else
          class="read-more text-danger"
          @click="read_more = !read_more"
        >
          Read less</span
        >
        <div class="desktop">
          <DestiListOurTours
            :destination="where_to_search"
            @click_destination="select_destination($event)"
          />
        </div>
      </section>

      <!-- <hr class="desktop" /> -->
      <div class="row mt-3">
        <div
          v-if="isSidebar"
          class="overlay-mobile"
          @click="isSidebar = false"
        />
        <div
          class="mobile-filter-close bg-danger text-white py-3"
          :style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]"
        >
          <div
            class="
              position-relative
              d-flex
              justify-content-between
              align-items-center
              px-3
            "
            @click="isSidebar = false"
          >
            <h4 class="font-bold my-0 py-3">Filter Options</h4>
            <div class="filter-option-close">
              <span class="fa fa-times-circle-o display-5" />
            </div>
          </div>
        </div>
        <div
          class="mobile-filter-button bg-white text-white py-3"
          :style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]"
        >
          <button class="btn btn-danger w-100 h-100" @click="isSidebar = false">
            <span>See Results</span>
          </button>
        </div>
        <div
          class="col-lg-3 col-xs-12 filters mt-4"
          :style="[
            isSidebar
              ? {
                  right: 0,
                }
              : '',
          ]"
        >
          <h6 class="my-3 fw-bold">Destination</h6>
          <div class="position-relative pb-5">
            <div class="row gx-0 mobile-filter-traveler p-3 rounded">
              <div
                v-click-outside-dropdown="closeWhereToDropDown"
                class="col-md-12 mobile-filter position-relative"
              >
                <div
                  class="
                    bg-white
                    h-100
                    align-items-center
                    d-flex
                    justify-content-between
                    px-3
                    shadow-sm
                    border border-1
                    rounded
                  "
                >
                  <svg
                    style="width: 25px"
                    aria-labelledby="title desc"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.9 19.7"
                  >
                    <g style="stroke-width: 2px" fill="none" stroke="#5e0302">
                      <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                      <circle cx="8" cy="8" r="7" />
                    </g>
                  </svg>
                  <div class="w-100 px-2" @click="showWhereToDropdown(true)">
                    <input
                      ref="whereTo"
                      v-model="where_to_search"
                      autocomplete="off"
                      placeholder="Where to?"
                      type="text"
                      class="w-100"
                      :disabled="package_loading"
                    />
                  </div>
                  <span
                    v-if="
                      where_to_search != '' && visible_whereto_dropdown == false
                    "
                    class="fa fa-times-circle-o"
                    @click="setInitWhereTo"
                  />
                  <span v-else class="fa fa-search invisible" />
                </div>
                <div
                  v-if="visible_whereto_dropdown == true && search_result != ''"
                  class="
                    shadow-lg
                    where_to_dropdown
                    left-0
                    w-100
                    bg-white
                    mt-2
                    destination-list
                  "
                >
                  <div v-for="(item, index) in search_result" :key="index">
                    <div
                      class="py-1 px-3 text-start"
                      @click="setCurrentWhereTo(item.name)"
                    >
                      <div class="p-0 m-0">
                        <strong>{{ item.name }}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mobile-filter position-relative">
                <div
                  class="
                    bg-white
                    w-100
                    h-100
                    align-items-center
                    d-flex
                    justify-content-between
                    px-3
                    shadow-sm
                    border border-1
                    rounded
                  "
                >
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
                  <div class="w-100 px-2">
                    <input
                      v-model="start_date"
                      type="date"
                      id="date"
                      class="form-control"
                      required
                      placeholder="When?"
                      rounded
                    />
                  </div>
                  <span
                    v-if="start_date != '' && start_date != null"
                    class="fa fa-times-circle-o"
                    @click="initStartDate"
                  />
                  <span v-else class="fa fa-times-circle-o invisible" />
                </div>
              </div>
              <div
                v-click-outside-dropdown="closeTravelerDropdown"
                class="col-md-12 mobile-filter position-relative"
              >
                <div
                  class="
                    bg-white
                    w-100
                    h-100
                    align-items-center
                    d-flex
                    justify-content-between
                    px-3
                    shadow-sm
                    border border-1
                    rounded
                  "
                  @click="showTravelerDropdown"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    style="fill: #5e0302"
                  >
                    <path
                      d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"
                    />
                  </svg>
                  <div class="w-100 px-2">
                    <input
                      id="traveler_input"
                      v-model="traveler_number"
                      autocomplete="off"
                      type="text"
                      placeholder="Travelers"
                      class="w-100"
                      readonly
                    />
                  </div>
                  <span
                    v-if="traveler_number != ''"
                    class="fa fa-times-circle-o"
                    @click="setTravelerInit"
                  />
                  <span v-else class="fa fa-times-circle-o invisible" />
                </div>
                <div
                  v-if="visible_traveler_dropdown"
                  class="shadow-lg traveler-dropdown left-0 bg-white mt-2"
                >
                  <div class="position-relative">
                    <h5 class="p-2 pt-3 my-2 text-center">
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
            </div>

            <div class="mt-3">
              <div class="price-day p-3 rounded">
                <h6 class="fw-bold mt-3">Tour Price</h6>
                <div class="px-2">
                  <client-only placeholder="loading...">
                    <vue-slider
                      v-model="price_range"
                      tooltip="none"
                      :min="10"
                      :max="10000"
                      :interval="333"
                      :disabled="package_loading"
                      @drag-end="onDragEnd"
                      @change="getFilterToursBySlidePrice"
                      @dragging="onDraggingSlider"
                    />
                  </client-only>
                  <div class="d-flex justify-content-between">
                    <div>${{ price_range[0] }}</div>
                    <div v-if="price_range[1] == 10000">
                      ${{ price_range[1] }}+
                    </div>
                    <div v-else>${{ price_range[1] }}</div>
                  </div>
                </div>

                <h6 class="mt-5 fw-bold">Tour Days</h6>

                <div class="d-flex justify-content-between px-2">
                  <div class="w-50 text-start" style="font-size: 13px">
                    Min Day
                  </div>

                  <div class="w-50 ms-3 text-start" style="font-size: 13px">
                    Max Day
                  </div>
                </div>

                <div class="d-flex mt-2 mb-3 px-2">
                  <div class="w-50 me-2">
                    <select
                      v-model="day_range[0]"
                      style="max-width: 100px"
                      class="form-select form-select-sm"
                      aria-label="Select Min Day"
                      :disabled="package_loading"
                      @change="getFilterToursBySlideDayMin"
                    >
                      <option value="1">1 Day</option>
                      <option
                        v-for="(item, index) in 28"
                        :key="index"
                        :value="index + 2"
                      >
                        {{ index + 2 }} Days
                      </option>
                      <option value="30">30+ Day</option>
                    </select>
                  </div>

                  <div class="w-50 ms-2">
                    <select
                      v-model="day_range[1]"
                      style="max-width: 100px"
                      class="form-select form-select-sm"
                      aria-label="Select Max Day"
                      :disabled="package_loading"
                      @change="getFilterToursBySlideDayMax"
                    >
                      <option value="1">1 Day</option>
                      <option
                        v-for="(item, index) in 28"
                        :key="index"
                        :value="index + 2"
                      >
                        {{ index + 2 }} Days
                      </option>
                      <option value="30">30+ Day</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="private-standard mt-3 rounded p-3">
                <h6 class="mt-4 fw-bold">Private or Group</h6>
                <div class="row ms-2">
                  <div
                    :key="'private' + update_private_check"
                    class="form-check col-6"
                  >
                    <input
                      id="privateCheck"
                      v-model="check_private_filter"
                      class="form-check-input"
                      type="checkbox"
                      :disabled="package_loading"
                      @change="groupChange(1)"
                    />
                    <label class="form-check-label" for="privateCheck">
                      Private
                    </label>
                  </div>
                  <div
                    :key="'group' + update_group_check"
                    class="form-check col-6"
                  >
                    <input
                      id="groupCheck"
                      v-model="check_group_filter"
                      class="form-check-input"
                      type="checkbox"
                      :disabled="loading ? true : false"
                      @change="groupChange(2)"
                    />
                    <label class="form-check-label" for="groupCheck">
                      Group
                    </label>
                  </div>
                </div>
                <div :key="update_checklist" class="pb-3">
                  <h6 class="mt-5 fw-bold">Standard</h6>
                  <div class="row ms-2">
                    <div
                      v-for="(check_data, index) in standard_check_list"
                      :key="check_data.name"
                      class="form-check mt-1 col-6"
                    >
                      <input
                        :id="'std' + index"
                        v-model="check_data.checked_state"
                        class="form-check-input"
                        type="checkbox"
                        :disabled="package_loading"
                        @change="updateCheckedFilterOptions"
                      />
                      <label class="form-check-label" :for="'std' + index">
                        {{ check_data.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="private-standard mt-3 rounded p-3">
                <h6 class="mt-4 fw-bold">Specialized</h6>
                <div
                  v-for="(check_data, index) in specialized_check_list"
                  :key="check_data.name"
                  class="form-check ms-2 mt-1"
                >
                  <input
                    :id="'spec' + index"
                    v-model="check_data.checked_state"
                    class="form-check-input"
                    type="checkbox"
                    :disabled="package_loading"
                    @change="updateCheckedFilterOptions"
                  />
                  <label class="form-check-label" :for="'spec' + index">
                    {{ check_data.name }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-xs-12">
          <div class="mobile">
            <DestiListOurTours
              :destination="where_to_search"
              @click_destination="select_destination($event)"
            />
          </div>

          <div class="mobile-sidebar-trigger mt-3 text-center px-2">
            <button class="btn btn-primary w-100" @click="isSidebar = true">
              Search Filter
            </button>
          </div>
          <ul v-if="!package_loading" class="tagpill-group ps-0 mt-4">
            <span
              v-if="
                where_to_search_option != '' ||
                checked_specialized_filter_options.length != 0 ||
                checked_standard_filter_options.length != 0 ||
                day_range[0] != 1 ||
                day_range[1] != 30 ||
                price_range[0] != 10 ||
                price_range[1] != 10000 ||
                check_private_filter == true ||
                check_group_filter == true
              "
              class="my-1"
            >
              Selected Filters:
            </span>
            <FilterPill
              v-if="
                where_to_search_option != '' && where_to_search_option != null
              "
              :text="'To: ' + where_to_search_option"
              @clicked="deleteFilterOption1('To: ' + where_to_search_option)"
            />
            <FilterPill
              v-if="price_range[0] != 10 || price_range[1] != 10000"
              :text="getPriceRangeChip()"
              @clicked="deleteFilterOption1(getPriceRangeChip())"
            />
            <FilterPill
              v-if="day_range[0] != 1 || day_range[1] != 30"
              :text="getDayRangeChip()"
              @clicked="deleteFilterOption1(getDayRangeChip())"
            />
            <FilterPill
              v-if="check_private_filter == true"
              text="Private"
              @clicked="deleteFilterOption1('Private')"
            />
            <FilterPill
              v-if="check_group_filter == true"
              text="Group"
              @clicked="deleteFilterOption1('Group')"
            />
            <FilterPill
              v-for="(item, index) in checked_standard_filter_options"
              :key="index + 'standard'"
              :text="item.name"
              @clicked="deleteFilterOption1(item.name)"
            />
            <FilterPill
              v-for="(item, index) in checked_specialized_filter_options"
              :key="index + 'specialized'"
              :text="item.name"
              @clicked="deleteFilterOption1(item.name)"
            />
            <FilterPillDanger
              v-if="
                checked_specialized_filter_options.length != 0 ||
                checked_standard_filter_options.length != 0 ||
                day_range[0] != 1 ||
                day_range[1] != 30 ||
                price_range[0] != 10 ||
                price_range[1] != 10000 ||
                check_private_filter == true ||
                check_group_filter == true ||
                where_to_search_option != ''
              "
              text="Clear All Filters"
              @clicked="deleteFilterOption1('Clear All Filters')"
            />
          </ul>
          <h6
            v-if="filterTours != null && !package_loading"
            class="my-3 ms-2 fw-bold"
          >
            <span v-if="filterTours.totalTours > 1">
              Showing {{ filterTours.tourShowFrom }} -
              {{ filterTours.tourShowTo }} of
              {{ filterTours.totalTours }} results
            </span>
            <span v-if="filterTours.totalTours == 1"
              >Showing 1 of 1 result</span
            >
          </h6>
          <div class="mt-3 pt-1" v-else>
            <h6 class="my-3 ms-2 fw-bold">Searching...</h6>
          </div>
          <div v-if="filterTours == null || package_loading" class="row gx-0">
            <div
              v-for="(item, index) in 26"
              :key="'skelecton' + index"
              class="col-md-6 col-xs-12 px-2"
            >
              <TourCardSkelecton />
            </div>
          </div>
          <div
            v-else-if="filterTours != null && filterTours.tours.length > 0"
            class="row gx-0"
          >
            <div
              v-for="(item, index) in filterTours.tours.slice(0, 2)"
              :key="'filter' + index"
              class="col-md-6 col-xs-12 px-2"
            >
              <TourCard
                :tour-data="item"
                :where_to_search="where_to_search"
                :traveler_number="traveler_number"
                :start_date="start_date != null ? start_date.toString() : ''"
                :adults_number="adults_number"
                :children_number="children_number"
              />
            </div>

            <lazy-component @show.once="ourtoursPackage" />
            <div
              v-for="(item, index) in filterTours.tours.slice(2, 30)"
              :key="'filter2' + index"
              class="col-md-6 col-xs-12 px-2"
            >
              <TourCard
                v-if="isPackage"
                :tour-data="item"
                :where_to_search="where_to_search"
                :traveler_number="traveler_number"
                :start_date="start_date != null ? start_date.toString() : ''"
                :adults_number="adults_number"
                :children_number="children_number"
              />
            </div>

            <div class="ourtours-pagination px-2 my-3">
              <client-only placeholder="loading...">
                <paginate
                  v-model="current_ourtour_page"
                  :page-count="filterTours.pages"
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination'"
                  :page-class="'page-item'"
                  :prev-class="'page-link prev'"
                  :next-class="'page-link next'"
                  :page-link-class="'page-link'"
                />
              </client-only>
            </div>
          </div>
          <p
            v-else-if="filterTours != null && filterTours.tours.length == 0"
            class="text-center mt-5 nosafari-search"
          >
            <span>Found 0 Safari Tours</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col col-md-6 col-lg-6 col-sm-12">
          <Faq></Faq>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Datepicker from "vuejs-datepicker";
import TourCard from "../../components/TourCard";
import TourCardSkelecton from "../../components/TourCardSkelecton";
import DestiListOurTours from "../../components/home/DestiListOurTours";
import FilterPill from "../../components/ourtours/FilterPill";
import FilterPillDanger from "../../components/ourtours/FilterPillDanger";
import "vue-slider-component/theme/default.css";
import Faq from "../../components/Faq.vue";

import { mapGetters } from "vuex";

export default {
  name: "OurTours",
  components: {
    TourCard,
    Paginate: () => import("vuejs-paginate"),
    // VueSlider: () => import("vue-slider-component"),
    // [process.browser && "Datepicker"]: () => import("vuejs-datepicker"),
    [process.browser && "VueSlider"]: () => import("vue-slider-component"),
    TourCardSkelecton,
    DestiListOurTours,
    FilterPill,
    FilterPillDanger,
    Faq,
  },

  directives: {
    "click-outside-dropdown": {
      bind: function (el, binding) {
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event); // before binding it
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
      price_range: [10, 10000],
      day_range: [1, 30],
      read_more: false,

      where_to_search: "",
      traveler_number: "",
      start_date: new Date(),
      adults_number: 2,
      children_number: 0,

      visible_whereto_dropdown: false,
      visible_traveler_dropdown: false,

      highlighted: {
        dates: [new Date()],
      },

      day_range_chip: "",

      search_result: [],
      isSidebar: false,
      standard_check_list: [],
      specialized_check_list: [],

      checked_specialized_filter_options: [],
      checked_standard_filter_options: [],
      where_to_search_option: "",
      update_checklist: 0,
      check_private_filter: false,
      check_group_filter: false,
      update_private_check: 0,
      update_group_check: 0,
      current_ourtour_page: 1,

      page: 1,

      page_from_url: 0,

      where_to_list: [],
      search_name: "Our Tours",
      package_loading: true,

      mindayList: [],
      maxdayList: [],

      isDrag: false,

      where_to_list_state: [],
      tourLevel: [],
      tourFocus: [],

      isPackage: false,

      title: "",

      indexOfRequest: 0,
    };
  },

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Advertising",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://dev.safaritrekbeach.org/",
      },
      headline: "Our Tours - Safari Trek Beach",
      description:
        "Tanzania is Africa’s number one safari destination. The wildlife viewing is amazing and big cats are easy to see. Africa Big Five can be found in many Tanzanian parks and reserves. The most famous parks are Ngorongoro Crater and Serengeti National Park. More than a quarter of the country is set aside for conservation. Tanzania is also home to Africa tallest Mountain, Mt. Kilimanjaro and has the best white sand beaches at Zanzibar Island.",
      image:
        "https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour/SERENGETI_NATIONAL_PARK_8.jpg",
      author: {
        "@type": "Person",
        name: "Carlson Mbise",
      },
      datePublished: "2022-09-31",
      dateModified: "2022-12-05",
      publisher: {
        "@type": "Organization",
        name: "Safari Trek Beach",
        logo: {
          "@type": "ImageObject",
          url: "http://safaritrekbeach.com/images/logo.png",
        },
      },
    };
  },

  // async asyncData({ $http }) {
  //   const [tourActivityfromState, tourFocusfromState, tourLevelfromState] =
  //     await Promise.all([
  //       $http.$get(`https://api.safaritreksbeach.com/web/our-tour/activity`),
  //       $http.$get(`https://api.safaritreksbeach.com/web/our-tour/focus`),
  //       $http.$get(`https://api.safaritreksbeach.com/web/our-tour/level`),
  //     ]);

  //   return {
  //     tourActivityfromState,
  //     tourFocusfromState,
  //     tourLevelfromState,
  //   };
  // },

  metaInfo() {
    return {
      name: `${this.title}`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Our Tours - Safari Trek Beach",
        },
        { hid: "twitter:site", name: "twitter:site", content: "@STB" },
        { hid: "twitter:creator", name: "twitter:creator", content: "@STB" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Our Tours - Safari Trek Beach",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Tanzania is Africa’s number one safari destination. The wildlife viewing is amazing and big cats are easy to see. Africa Big Five can be found in many Tanzanian parks and reserves. The most famous parks are Ngorongoro Crater and Serengeti National Park. More than a quarter of the country is set aside for conservation. Tanzania is also home to Africa tallest Mountain, Mt. Kilimanjaro and has the best white sand beaches at Zanzibar Island.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour/SERENGETI_NATIONAL_PARK_24.jpg",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Tanzania is Africa’s number one safari destination. The wildlife viewing is amazing and big cats are easy to see. Africa Big Five can be found in many Tanzanian parks and reserves. The most famous parks are Ngorongoro Crater and Serengeti National Park. More than a quarter of the country is set aside for conservation. Tanzania is also home to Africa tallest Mountain, Mt. Kilimanjaro and has the best white sand beaches at Zanzibar Island.",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://dev.safaritrekbeach.org",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour/SERENGETI_NATIONAL_PARK_24.jpg",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Our Tours - Safari Trek Beach",
        },

        {
          hid: "og:title",
          name: "og:title",
          content: "Our Tours - Safari Trek Beach",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Tanzania is Africa’s number one safari destination. The wildlife viewing is amazing and big cats are easy to see. Africa Big Five can be found in many Tanzanian parks and reserves. The most famous parks are Ngorongoro Crater and Serengeti National Park. More than a quarter of the country is set aside for conservation. Tanzania is also home to Africa tallest Mountain, Mt. Kilimanjaro and has the best white sand beaches at Zanzibar Island. ",
        },
      ],
    };
  },

  computed: {
    router_query: function () {
      if (process.browser) {
        if (
          history.state.single == undefined &&
          history.state.destination == undefined &&
          history.state.private == undefined
        ) {
          this.checkUrl(this.$route.params.pathMatch);
        }
        var string = this.$route.hash;
        if (string == undefined || string == "" || string == "#") return "";
        var query = JSON.parse(
          '{"' +
            this.$route.hash
              .substring(1)
              .replace(/&/g, '","')
              .replace(/=/g, '":"') +
            '"}',
          function (key, value) {
            return key === "" ? value : decodeURIComponent(value);
          }
        );

        return query;
      } else return "";
    },
    destination_id: function () {
      if (process.browser) {
        if (this.$route.query.destination) {
          this.where_to_search_option = this.$route.query.destination;
          return this.$route.query.destination;
        } else {
          var id = history.state.destination;
          if (id != undefined) {
            // return id.slice(0, id.length);
            return id;
          } else {
            return "";
          }
        }
      } else return "";
    },
    single_id: function () {
      if (process.browser) {
        if (this.$route.query.single) {
          return this.$route.query.single;
        } else {
          var id = history.state.single;
          if (id != undefined) {
            return id;
          } else {
            return "";
          }
        }
      } else return "";
    },
    level_id: function () {
      if (process.browser) {
        if (this.$route.query.level) {
          return this.$route.query.level;
        } else {
          var id = history.state.level;
          if (id != undefined) {
            return id;
          } else {
            return "";
          }
        }
      } else return "";
    },
    private_id: function () {
      if (process.browser) {
        if (this.$route.query.private) {
          return this.$route.query.private;
        } else {
          var id = history.state.private;
          if (id != undefined) {
            return id;
          } else {
            return "";
          }
        }
      } else return "";
    },
    day_id: function () {
      if (process.browser) {
        if (this.$route.query.day) {
          return this.$route.query.day;
        } else {
          var id = history.state.day;
          if (id != undefined) {
            return id;
          } else {
            return "";
          }
        }
      } else return "";
    },
    ...mapGetters({
      filterTours: "tourController/filterTours",
      loading: "tourcard_loading",
      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
      traveler_number_state: "tourController/traveler_number",
      query_instore: "tourController/query_instore",
      tourActivityfromState: "tourController/tourActivity",
      tourLevelfromState: "tourController/tourLevel",
      tourFocusfromState: "tourController/tourFocus",
    }),
  },

  watch: {
    where_to_search: function () {
      if (this.where_to_search) {
        this.search_result = this.where_to_list.filter((item) => {
          return this.where_to_search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
        var start_filtered = this.search_result.filter((p) =>
          p.name.toLowerCase().startsWith(this.where_to_search.toLowerCase())
        );
        var not_start_filtered = this.search_result.filter(
          (p) =>
            !p.name.toLowerCase().startsWith(this.where_to_search.toLowerCase())
        );

        Array.prototype.push.apply(start_filtered, not_start_filtered);

        this.search_result = start_filtered;
      } else {
        this.search_result = this.where_to_list;
      }
    },

    current_ourtour_page: function (newValue) {
      this.page = newValue;
      this.getFilterTours();
    },

    start_date: function () {
      this.saveFormtoStore();
    },

    adults_number: function () {
      this.saveFormtoStore();
    },

    children_number: function () {
      this.saveFormtoStore();
    },
  },

  created() {
    console.log("********** filterTours *********", this.filterTours);

    this.preProcess();
    for (let i = 1; i < 30; i++) {
      this.mindayList.push({ text: i + " Day", value: i });
    }
    this.mindayList.push({ text: "30+ Day", value: 30 });
    this.maxdayList = this.mindayList;
  },

  methods: {
    threeAPI() {
      this.getTourActivity();
      this.getTourLevel();
      this.getTourFocus();
    },
    checkUrl(url) {
      var temp = url.split("/");
      let urlParam = {};
      let urlQuery = {};
      for (let i = 0; i <= temp.length - 1; i++) {
        if (temp[i] == "private" || temp[i] == "group") {
          urlParam.private = temp[i];
        } else if (
          temp[i] == "lodge" ||
          temp[i] == "camping" ||
          temp[i] == "budget" ||
          temp[i] == "luxury" ||
          temp[i] == "luxury++" ||
          temp[i] == "mid-range" ||
          temp[i] == "all-inclusive-safari" ||
          temp[i] == "beach-and-game-drive" ||
          temp[i] == "beach-holiday" ||
          temp[i] == "bird-watching" ||
          temp[i] == "canoe-mokoro-safari-game-drive" ||
          temp[i] == "mountain-bike-safari" ||
          temp[i] == "family" ||
          temp[i] == "game-drive-safari" ||
          temp[i] == "golf-wildlife-viewing" ||
          temp[i] == "gorilla-and-climbing" ||
          temp[i] == "gorilla-and-game-drive" ||
          temp[i] == "gorilla-only" ||
          temp[i] == "self-drive-g" ||
          temp[i] == "honeymoon" ||
          temp[i] == "horseback-safari" ||
          temp[i] == "climbing-and-game-drive" ||
          temp[i] == "climbing-only" ||
          temp[i] == "scenic-cultural-tour" ||
          temp[i] == "self-drive-ung" ||
          temp[i] == "tanzania-safari-zanzibar-all-inclusive" ||
          temp[i] == "walking-safari-game-drive" ||
          temp[i] == "walking-safari" ||
          temp[i] == "wildlife-photography" ||
          temp[i] == "yoga" ||
          temp[i] == "zanzibar-all-inclusive"
        ) {
          urlParam.single = temp[i];
        } else if (temp[i] != "") {
          urlParam.destination = temp[i];
        }
      }

      urlQuery = this.$route.query;

      history.pushState({ ...urlParam, ...urlQuery }, null, null);
    },
    select_destination(rec_destination) {
      let destination = rec_destination.split("-").join(" ");

      this.where_to_search = destination;
      this.where_to_search_option = this.where_to_search;
      this.page = 1;
      this.saveFormtoStore();
      this.getFilterTours();
      location.reload();
    },
    async preProcess() {
      this.where_to_search = this.where_to_search_state;
      this.traveler_number = this.traveler_number_state;
      this.start_date = this.start_date_state;
      this.adults_number = this.adults_number_state;
      this.children_number = this.children_number_state;

      if (this.where_to_search != "") {
        this.where_to_search_option = this.where_to_search;
      }

      this.$store.commit("tourController/initFilterData");
      this.threeAPI();
      // this.initFilterForm();

      this.traveler_number_calc();
    },

    urlAnalysis2() {
      let temp_query = this.router_query;

      var destination_url = this.destination_id;
      var single_url = this.single_id;
      var level_url = this.level_id;
      var private_url = this.private_id;
      var day_url = this.day_id;

      // ===== logic added by isaac destination url fixed ===
      this.where_to_list.forEach((item) => {
        if (item.inputId == destination_url) {
          this.where_to_search = item.name;
          return;
        }
      });
      // ===== logic added by isaac destination url fixed ===

      if (destination_url != "") {
        let single = this.checkSingleParam(destination_url);
        if (single != null && single.length != 0) {
          // if single param, append this to temp query
          switch (single[0]) {
            case "destination":
              temp_query = Object.assign(
                { destination: single[1] },
                temp_query
              );
              break;
            case "group":
              temp_query = Object.assign({ group: single[1] }, temp_query);
              break;
            case "comfort":
              if (temp_query.comfort != undefined) {
                temp_query.comfort += "|" + single[1];
              } else {
                temp_query = Object.assign({ comfort: single[1] }, temp_query);
              }
              break;
            case "focus":
              temp_query = Object.assign({ focus: single[1] }, temp_query);
              break;
            case "day":
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
            default:
              break;
          }
        }
      }

      if (single_url != "") {
        let single = this.checkSingleParam(single_url);
        if (single != null && single.length != 0) {
          // if single param, append this to temp query
          switch (single[0]) {
            case "destination":
              temp_query = Object.assign(
                { destination: single[1] },
                temp_query
              );
              break;
            case "group":
              temp_query = Object.assign({ group: single[1] }, temp_query);
              break;
            case "comfort":
              if (temp_query.comfort != undefined) {
                temp_query.comfort += "|" + single[1];
              } else {
                temp_query = Object.assign({ comfort: single[1] }, temp_query);
              }
              break;
            case "focus":
              temp_query = Object.assign({ focus: single[1] }, temp_query);
              break;
            case "day":
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
            default:
              break;
          }
        }
      }

      if (level_url != "") {
        let single = this.checkSingleParam(level_url);
        if (single != null && single.length != 0) {
          // if single param, append this to temp query
          switch (single[0]) {
            case "destination":
              temp_query = Object.assign(
                { destination: single[1] },
                temp_query
              );
              break;
            case "group":
              temp_query = Object.assign({ group: single[1] }, temp_query);
              break;
            case "comfort":
              temp_query = Object.assign({ comfort: single[1] }, temp_query);
              break;
            case "focus":
              temp_query = Object.assign({ focus: single[1] }, temp_query);
              break;
            case "day":
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
            default:
              break;
          }
        }
      }

      if (private_url != "") {
        let single = this.checkSingleParam(private_url);
        if (single != null && single.length != 0) {
          // if single param, append this to temp query
          switch (single[0]) {
            case "destination":
              temp_query = Object.assign(
                { destination: single[1] },
                temp_query
              );
              break;
            case "group":
              temp_query = Object.assign({ group: single[1] }, temp_query);
              break;
            case "comfort":
              if (temp_query.comfort != undefined) {
                temp_query.comfort += "|" + single[1];
              } else {
                temp_query = Object.assign({ comfort: single[1] }, temp_query);
              }
              break;
            case "focus":
              temp_query = Object.assign({ focus: single[1] }, temp_query);
              break;
            case "day":
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
            default:
              break;
          }
        }
      }

      if (day_url != "") {
        let single = this.checkSingleParam(day_url);
        if (single != null && single.length != 0) {
          // if single param, append this to temp query
          switch (single[0]) {
            case "destination":
              temp_query = Object.assign(
                { destination: single[1] },
                temp_query
              );
              break;
            case "group":
              temp_query = Object.assign({ group: single[1] }, temp_query);
              break;
            case "comfort":
              if (temp_query.comfort != undefined) {
                temp_query.comfort += "|" + single[1];
              } else {
                temp_query = Object.assign({ comfort: single[1] }, temp_query);
              }
              break;
            case "focus":
              temp_query = Object.assign({ focus: single[1] }, temp_query);
              break;
            case "day":
              temp_query = Object.assign(
                { min_day: single[1] },
                { max_day: single[1] },
                temp_query
              );
              break;
            default:
              break;
          }
        }
      }

      if (
        destination_url == "" &&
        single_url == "" &&
        level_url == "" &&
        private_url == "" &&
        day_url == ""
      ) {
        this.where_to_search = "";
        this.where_to_search_option = "";
        this.saveFormtoStore();
      }
      if (temp_query["comfort"] !== undefined) {
        temp_query["comfort"] = temp_query["comfort"].split("_").join(" ");
        temp_query["comfort"] = temp_query["comfort"].split("@").join("+");
      }
      this.$store.dispatch("tourController/setQuery", temp_query);

      this.setCurrentCheck();
    },

    getTourActivity() {
      this.$store.dispatch("tourController/getTourActivity").then(() => {
        this.indexOfRequest++;
        if (this.indexOfRequest == 3) {
          this.initFilterForm();
        }
      });
    },

    getTourLevel() {
      this.$store.dispatch("tourController/getTourLevel").then(() => {
        this.indexOfRequest++;
        if (this.indexOfRequest == 3) {
          this.initFilterForm();
        }
      });
    },

    getTourFocus() {
      this.$store.dispatch("tourController/getTourFocus").then(() => {
        this.indexOfRequest++;
        if (this.indexOfRequest == 3) {
          this.initFilterForm();
        }
      });
    },

    // this is the new function of our tours because of different API
    initFilterForm() {
      this.tourLevel = this.tourLevelfromState;
      this.tourFocus = this.tourFocusfromState;
      this.where_to_list_state = this.tourActivityfromState;

      const newArr = this.tourLevel.map((v) => ({
        name: v,
      }));

      this.tourLevel = newArr;
      // console.log("this.tourLevel");
      // console.log(this.tourLevel);

      this.specialized_check_list = this.tourFocus;
      for (let i = 0; i < this.tourFocus.length; i++) {
        this.specialized_check_list[i].checked_state = false;
      }

      this.standard_check_list = this.tourLevel;
      for (let i = 0; i < this.tourLevel.length; i++) {
        this.standard_check_list[i].checked_state = false;
      }

      let first_activity = [
        {
          name: "Serengeti National Park",
          inputId: "serengeti-national-park",
        },
        {
          name: "Mount Kilimanjaro",
          inputId: "mount-kilimanjaro",
        },
        {
          name: "Zanzibar",
          inputId: "zanzibar",
        },
        {
          name: "Ngorongoro Crater",
          inputId: "ngorongoro-crater",
        },
        {
          name: "Tarangire National Park",
          inputId: "tarangire-national-park",
        },
        {
          name: "Ruaha National Park",
          inputId: "ruaha-national-park",
        },
      ];

      let ar = this.where_to_list_state;

      for (var i = 0; i < ar.length; i++) {
        if (
          ar[i].name == "Serengeti National Park" ||
          ar[i].name == "Mount Kilimanjaro" ||
          ar[i].name == "Ngorongoro Crater" ||
          ar[i].name == "Tarangire National Park" ||
          ar[i].name == "Zanzibar" ||
          ar[i].name == "Ruaha National Park"
        ) {
          ar.splice(i, 1);
        }
      }
      this.where_to_list = first_activity.concat(ar);
      this.search_result = this.where_to_list;

      this.urlAnalysis2();
    },

    onDraggingSlider() {
      if (this.isDrag == false) this.isDrag = true;
    },

    setCurrentCheck() {
      var comfort_list =
        this.query_instore["comfort"] !== undefined
          ? this.query_instore.comfort.split("|")
          : [];
      var focus_list =
        this.query_instore["focus"] !== undefined
          ? this.query_instore.focus.split("|")
          : [];
      var destination =
        this.query_instore["destination"] !== undefined
          ? this.query_instore.destination
          : this.where_to_search;
      var group =
        this.query_instore["group"] !== undefined
          ? this.query_instore.group
          : "";
      var page =
        this.query_instore["p"] !== undefined ? this.query_instore.p : "";

      if (page != "") {
        this.page_from_url = parseInt(page);
      }

      if (group != "") {
        if (group == "group") {
          this.check_group_filter = true;
        } else {
          this.check_private_filter = true;
        }
        this.update_group_check++;
        this.update_private_check++;
      }

      this.price_range = [
        this.query_instore.min_price != undefined
          ? this.query_instore.min_price
          : 10,
        this.query_instore.max_price != undefined
          ? this.query_instore.max_price
          : 10000,
      ];

      var minday_temp =
        this.query_instore.min_day != undefined
          ? this.query_instore.min_day
          : 1;
      var maxday_temp =
        this.query_instore.max_day != undefined
          ? this.query_instore.max_day
          : 30;

      this.$set(this.day_range, 0, parseInt(minday_temp));
      this.$set(this.day_range, 1, parseInt(maxday_temp));

      this.where_to_search = destination;
      this.where_to_search_option = destination;

      for (let i = 0; i < this.standard_check_list.length; i++) {
        if (comfort_list.includes(this.standard_check_list[i].name)) {
          this.standard_check_list[i].checked_state = true;
        }
      }

      for (let i = 0; i < this.specialized_check_list.length; i++) {
        if (focus_list.includes(this.specialized_check_list[i].inputId)) {
          this.specialized_check_list[i].checked_state = true;
        }
      }

      this.update_checklist++;

      this.updateCheckedFilterOptions();
    },

    updateCheckedFilterOptions() {
      let index = 0;
      this.checked_standard_filter_options = [];
      this.checked_specialized_filter_options = [];
      for (let i = 0; i < this.standard_check_list.length; i++) {
        if (this.standard_check_list[i].checked_state) {
          this.checked_standard_filter_options[index] =
            this.standard_check_list[i];
          index++;
        }
      }
      index = 0;
      for (let i = 0; i < this.specialized_check_list.length; i++) {
        if (this.specialized_check_list[i].checked_state) {
          this.checked_specialized_filter_options[index] =
            this.specialized_check_list[i];
          index++;
        }
      }
      this.page = 1;

      this.getFilterTours();
    },

    closeWhereToDropDown() {
      this.visible_whereto_dropdown = false;
    },

    showWhereToDropdown(visible_flag) {
      this.visible_whereto_dropdown = visible_flag;
    },

    setCurrentWhereTo(value) {
      this.where_to_search = value;
      this.where_to_search_option = this.where_to_search;
      this.visible_whereto_dropdown = false;
      this.page = 1;
      this.saveFormtoStore();
      this.getFilterTours();
    },

    saveFormtoStore() {
      let searchData = {};
      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number,
      };

      this.$store.dispatch("tourController/setSearchData", searchData);
    },

    setInitWhereTo() {
      this.where_to_search = "";
      this.where_to_search_option = "";
      this.page = 1;
      this.saveFormtoStore();
      this.getFilterTours();
    },

    showTravelerDropdown() {
      var current_flag = this.visible_traveler_dropdown;
      this.visible_traveler_dropdown = !current_flag;
    },

    closeTravelerDropdown: function () {
      this.visible_traveler_dropdown = false;
    },

    setTravelerInfo(event) {
      event.preventDefault();
      let traveler =
        parseInt(this.adults_number) + parseInt(this.children_number);
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else this.traveler_number = traveler + " Travelers";
      this.closeTravelerDropdown();
    },

    traveler_number_calc() {
      if (this.adults_number == null || this.adults_number == undefined)
        this.adults_number = 2;
      if (this.children_number == null || this.children_number == undefined)
        this.children_number = 0;
      let traveler =
        parseInt(this.adults_number) + parseInt(this.children_number);
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
    },

    setTravelerInit() {
      this.traveler_number = "";
      this.adults_number = 0;
      this.children_number = 0;
      this.saveFormtoStore();
    },

    initStartDate() {
      this.start_date = "";
      this.saveFormtoStore();
    },

    selectToday() {
      var date = new Date();
      this.start_date = date;
      document.getElementsByClassName(
        "vdp-datepicker__calendar"
      )[0].style.display = "none";
      document.getElementsByClassName(
        "vdp-datepicker__calendar"
      )[1].style.display = "none";
      document.getElementsByClassName(
        "vdp-datepicker__calendar"
      )[2].style.display = "none";
    },
    deleteFilterOption1(text) {
      var lastChar = text[text.length - 1];
      var check_first_string = text.substr(0, 4);
      var check_last_string = text.substr(text.length - 5, 5);
      var check_last_string_4 = text.substr(text.length - 4, 4);
      if (lastChar == "$") {
        this.price_range = [10, 10000];
        this.page = 1;
        this.getFilterTours();
        return;
      }
      if (check_first_string == "To: ") {
        this.where_to_search = "";
        this.where_to_search_option = "";
        this.page = 1;
        this.getFilterTours();
        return;
      }
      if (check_last_string == " days" || check_last_string_4 == " day") {
        this.day_range = [1, 30];
        this.page = 1;
        this.getFilterTours();
        return;
      }
      switch (text) {
        case "Clear All Filters":
          this.checked_specialized_filter_options = [];
          this.checked_standard_filter_options = [];
          this.day_range = [1, 30];
          this.price_range = [10, 10000];
          this.check_private_filter = false;
          this.check_group_filter = false;
          this.where_to_search = "";
          this.where_to_search_option = "";
          this.adults_number = 2;
          var searchData = {
            where_to_search: "",
            start_date: new Date(),
            adults_number: 2,
            children_number: 0,
            traveler_number: "2 Travelers",
          };
          this.$store.dispatch("tourController/setSearchData", searchData);
          this.update_private_check++;
          this.update_group_check++;
          this.initCheckList();

          break;

        case "Private":
          this.check_private_filter = false;
          this.update_private_check++;
          this.page = 1;
          this.getFilterTours();

          break;

        case "Group":
          this.check_group_filter = false;
          this.update_group_check++;
          this.page = 1;
          this.getFilterTours();

          break;

        default:
          this.removeFilterOptionItem(text);
          this.uncheckFilterCheckListItem(text);
          break;
      }
    },

    uncheckFilterCheckListItem(item) {
      for (let i = 0; i < this.standard_check_list.length; i++) {
        if (this.standard_check_list[i].name == item) {
          this.standard_check_list[i].checked_state = false;
        }
      }
      for (let i = 0; i < this.specialized_check_list.length; i++) {
        if (this.specialized_check_list[i].name == item) {
          this.specialized_check_list[i].checked_state = false;
        }
      }
      this.update_checklist++;
      this.page = 1;
      this.getFilterTours();
    },

    removeFilterOptionItem(item) {
      for (let i = 0; i < this.checked_standard_filter_options.length; i++) {
        if (this.checked_standard_filter_options[i].name == item) {
          this.checked_standard_filter_options.splice(i, 1);
        }
      }

      for (let i = 0; i < this.checked_specialized_filter_options.length; i++) {
        if (this.checked_specialized_filter_options[i].name == item) {
          this.checked_specialized_filter_options.splice(i, 1);
        }
      }
    },

    initCheckList() {
      for (let i = 0; i < this.standard_check_list.length; i++) {
        this.standard_check_list[i].checked_state = false;
      }
      for (let i = 0; i < this.specialized_check_list.length; i++) {
        this.specialized_check_list[i].checked_state = false;
      }
      this.update_checklist++;

      this.page = 1;
      this.getFilterTours();
    },

    getDayRangeChip() {
      let day_range_text = "";
      if (this.day_range[0] != 1) {
        if (this.day_range[1] == 30)
          day_range_text = "From " + this.day_range[0] + " days";
        else
          day_range_text =
            this.day_range[0] + " to " + this.day_range[1] + " days";
      } else if (this.day_range[1] != 30) {
        day_range_text = "Up to " + this.day_range[1] + " days";
      }

      if (this.day_range[0] == this.day_range[1]) {
        day_range_text =
          this.day_range[0] == 1 ? "1 day" : this.day_range[0] + " days";
      }
      return day_range_text;
    },

    getPriceRangeChip() {
      let price_range_text = "";
      if (this.price_range[0] != 10) {
        if (this.price_range[1] == 10000)
          price_range_text = "From " + this.price_range[0] + "$";
        else
          price_range_text =
            this.price_range[0] + " to " + this.price_range[1] + "$";
      } else if (this.price_range[1] != 10000) {
        price_range_text = "Up to " + this.price_range[1] + "$";
      }

      if (this.price_range[0] == this.price_range[1]) {
        price_range_text = this.price_range[0] + "$";
      }

      return price_range_text;
    },

    groupChange(index) {
      if (index == 1) {
        if (this.check_private_filter) {
          this.check_group_filter = false;
          this.update_group_check++;
        }
        this.page = 1;
        this.getFilterTours();
        return;
      }
      if (index == 2) {
        if (this.check_group_filter) {
          this.check_private_filter = false;
          this.update_private_check++;
        }
        this.page = 1;
        this.getFilterTours();
      }
    },

    ourtoursPackage() {
      this.isPackage = true;
    },

    searchEnter() {
      this.where_to_search_option = this.where_to_search;

      this.saveFormtoStore();

      this.getFilterTours();
    },

    // filter tours function

    getFilterToursBySlidePrice() {
      if (this.isDrag) return;
      this.page = 1;
      this.getFilterTours();
    },

    onDragEnd() {
      this.isDrag = false;
      this.getFilterToursBySlidePrice();
    },

    getFilterToursBySlideDayMin() {
      if (this.day_range[0] > this.day_range[1]) {
        this.$set(this.day_range, 1, this.day_range[0]);
      }

      this.page = 1;
      this.getFilterTours();
    },

    getFilterToursBySlideDayMax() {
      if (this.day_range[0] > this.day_range[1]) {
        this.$set(this.day_range, 0, this.day_range[1]);
      }

      this.page = 1;
      this.getFilterTours();
    },

    capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    },

    checkSingleParam(single) {
      if (single == "group" || single == "private") {
        return ["group", single];
      }

      // this is the single day ...

      if (single.substr(single.length - 4) == "-Day") {
        return ["day", single.substring(0, single.length - 4)];
      }

      // focus check ...

      let focus = this.tourFocus.find(function (el) {
        return el.inputId == single;
      });

      if (focus != undefined) {
        return ["focus", focus.inputId];
      }

      //level check ...

      single = single.split("_").join(" ");
      single = single.split("@").join("+");

      let level = this.tourLevel.find(function (el) {
        return el.name == single;
      });

      if (level != undefined) {
        return ["comfort", level.name];
      }

      return [];
    },

    checkSingleParam2(single) {
      if (single == "group" || single == "private") {
        return ["group", single];
      }

      // this is the single day ...

      if (single.substr(single.length - 4) == "-Day") {
        return ["day", single.substring(0, single.length - 4)];
      }

      // focus check ...

      let focus = this.tourFocus.find(function (el) {
        return el.inputId == single;
      });

      if (focus != undefined) {
        return ["focus", focus.inputId];
      }

      //level check ...

      single = single.split("_").join(" ");
      single = single.split("@").join("+");

      let level = this.tourLevel.find(function (el) {
        return el.name == single;
      });

      if (level != undefined) {
        return ["comfort", level.name];
      }

      //destination check...
      let destination = this.where_to_list_state.find(function (el) {
        return el.inputId == single;
      });

      if (destination != undefined) {
        this.where_to_search_option = destination.name;
        this.where_to_search = destination.name;
        return ["destination", destination.inputId];
      }

      return [];
    },

    getFilterTours() {
      let group_filter = "";
      let level_filter = "";
      let specialized_filter = "";
      let focus_for_url = "";
      let group_number = 0;
      let comfort_number = 0;
      let focus_number = 0;
      let day_number = 0;

      if (this.check_private_filter) {
        group_filter = "private";
        group_number = 1;
      } else if (this.check_group_filter) {
        group_filter = "group";
        group_number = 1;
      }

      if (this.day_range[0] == this.day_range[1]) {
        day_number = 1;
      }

      comfort_number = this.checked_standard_filter_options.length;
      focus_number = this.checked_specialized_filter_options.length;

      for (let i = 0; i < this.checked_standard_filter_options.length; i++) {
        level_filter += this.checked_standard_filter_options[i].name + "|";
      }

      if (level_filter != "") {
        level_filter = level_filter.substring(0, level_filter.length - 1);
      }

      for (let i = 0; i < this.checked_specialized_filter_options.length; i++) {
        specialized_filter +=
          this.checked_specialized_filter_options[i].name + "|";
        focus_for_url +=
          this.checked_specialized_filter_options[i].inputId + "|";
      }

      if (specialized_filter != "") {
        specialized_filter = specialized_filter.substring(
          0,
          specialized_filter.length - 1
        );
      }

      if (focus_for_url != "") {
        focus_for_url = focus_for_url.substring(0, focus_for_url.length - 1);
      }

      let query = {
        destination: this.where_to_search,
        minPrice: this.price_range[0],
        maxPrice: this.price_range[1],
        minDay: this.day_range[0],
        maxDay: this.day_range[1],
        group: group_filter,
        comfort: level_filter,
        focus: specialized_filter,
        page: this.page,
      };

      //for URL query

      let url_query = {
        destination: this.where_to_search,
        min_price: this.price_range[0],
        max_price: this.price_range[1],
        min_day: this.day_range[0],
        max_day: this.day_range[1],
        group: group_filter,
        comfort: level_filter,
        focus: focus_for_url,
        p: this.page,
      };

      if (this.page_from_url > 1) {
        query.page = this.page_from_url;
        url_query.page = this.page_from_url;
        this.page_from_url = 0;
      }

      // let filtered_query = query

      for (var key in query) {
        if (query[key] === "") {
          delete query[key];
        }
      }

      this.$store.dispatch("tourController/setQuery", query);

      // let filtered_query = query

      for (var key1 in url_query) {
        if (url_query[key1] === "") {
          delete url_query[key1];
        }
      }

      if (url_query["min_price"] == 10) {
        delete url_query["min_price"];
      }

      if (url_query["max_price"] == 10000) {
        delete url_query["max_price"];
      }

      if (url_query["min_day"] == 1) {
        delete url_query["min_day"];
      }

      if (url_query["max_day"] == 30) {
        delete url_query["max_day"];
      }

      this.search_name = "";

      if (url_query["destination"] != undefined) {
        this.search_name = url_query["destination"];

        let destination_item = this.where_to_list.find(function (el) {
          return el.name == url_query["destination"];
        });

        if (destination_item != undefined) {
          url_query["destination"] = destination_item.inputId;
        } else {
          url_query["destination"] = url_query["destination"]
            .split(" ")
            .join("_");
          url_query["destination"] = url_query["destination"]
            .split("&")
            .join("~");
        }
      }

      if (url_query["comfort"] !== undefined) {
        url_query["comfort"] = url_query["comfort"].split(" ").join("_");
        url_query["comfort"] = url_query["comfort"].split("+").join("@");
      }

      if (url_query["p"] !== undefined) {
        if (url_query["p"] == 1) {
          delete url_query["p"];
        }
      }

      let destination_params =
        url_query["destination"] != undefined ? url_query["destination"] : "";

      if (url_query["destination"] !== undefined) {
        delete url_query["destination"];
      }

      let single = ""; //this is for single router params
      let private_param = "";
      let day = "";
      let level = "";

      if (focus_number == 1) {
        single = url_query["focus"];
        // this.search_name = query["focus"] + " " + this.search_name;
        delete url_query["focus"];
      } else if (comfort_number == 1) {
        single = url_query["comfort"];
        this.search_name =
          this.capitalize(query["comfort"]) + " " + this.search_name;
        delete url_query["comfort"];
      } else if (comfort_number == 2) {
        single = this.checked_standard_filter_options[0].name;
        level = this.checked_standard_filter_options[1].name;
        delete url_query["comfort"];
      }

      if (group_number == 1) {
        // single = url_query["group"];
        private_param = url_query["group"];
        this.search_name =
          this.capitalize(query["group"]) + " " + this.search_name;
        delete url_query["group"];
      }

      if (day_number == 1) {
        if (url_query["min_day"] != undefined)
          // single = url_query["min_day"] + "-Day";
          day = url_query["min_day"] + "-Day";
        else if (url_query["max_day"] != undefined)
          // single = url_query["max_day"] + "-Day";
          day = url_query["max_day"] + "-Day";

        this.search_name = day + " " + this.search_name;
        if (url_query["min_day"] != undefined) delete url_query["min_day"];
        if (url_query["max_day"] != undefined) delete url_query["max_day"];
      }

      if (this.search_name != "") {
        this.search_name = this.search_name + " Tours";
      } else {
        this.search_name = "Our Tours";
      }

      var hash = new URLSearchParams(url_query).toString();

      hash = decodeURIComponent(hash);

      if (
        destination_params == "" &&
        single == "" &&
        day == "" &&
        private_param == "" &&
        process.browser
      ) {
        if (hash != "") {
          history.pushState({}, null, "/our-tours/#" + hash);
        } else {
          history.pushState({}, null, "/our-tours/");
          // this.$router.push({ path: this.$route.path });
        }
      } else {
        let params = {};
        var urlString = "";
        if (destination_params != "") {
          params["destination"] = destination_params;
          urlString = urlString + destination_params + "/";
        }
        if (single != "") {
          params["single"] = single;
          urlString = urlString + single + "/";
        }
        if (level != "") {
          params["level"] = level;
          urlString = urlString + level + "/";
        }
        if (private_param != "") {
          params["private"] = private_param;
          urlString = urlString + private_param + "/";
        }
        if (day != "") {
          params["day"] = day;
          urlString = urlString + day + "/";
        }

        if (hash != "" && process.browser) {
          // this.$router
          //   .replace({
          //     name: "Our Tours2",
          //     params: params,
          //     // query: url_query,
          //     hash: "#" + hash,
          //   })
          //   .catch(() => {});

          history.pushState(
            { ...params },
            null,
            "/our-tours/" + urlString + "#" + hash
          );
        } else if (process.browser) {
          // this.$router
          //   .replace({
          //     name: "Our Tours2",
          //     params: params,
          //   })
          //   .catch(() => {});

          history.pushState({ ...params }, null, "/our-tours/" + urlString);
        }
      } // with params and query

      this.$store
        .dispatch("tourController/getTourFilter", query)
        .then(() => {
          this.current_ourtour_page = parseInt(this.filterTours.page);

          document.title =
            this.search_name + " ( " + this.filterTours.totalTours + " Tours )";
          this.title =
            this.search_name + " ( " + this.filterTours.totalTours + " Tours )";
          this.package_loading = false;
          this.$scrollTo(document.getElementById("our-tours"), 0);
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/ourtours.scss";

li {
  list-style: none;
}

.pagination a {
  outline: none;
}

#our-tours .form-check-label {
  text-transform: capitalize;
  font-size: 13px;
}

.ourtours-pagination {
  display: flex;
  justify-content: center;
}

.nosafari-search {
  margin-top: 30px;
  line-height: 1px !important;
  background-color: #8f8e8e;
}

.nosafari-search span {
  background-color: #f6f6f7;
  font-size: 20px;
  padding: 10px 20px;
}
.price-day,
.private-standard,
.mobile-filter-traveler {
  background-color: #ffffff8c;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.18);
}

@media (max-width: 450px) {
  .mobile-filter-traveler {
    background-color: #ececee;
    box-shadow: none;
    margin-left: -20px;
    margin-right: -20px;
  }
  .price-day,
  .private-standard {
    background-color: transparent;
    box-shadow: none;
    margin-left: -20px;
    margin-right: -20px;
  }
}

.tours-picker.vdp-datepicker input {
  background: white !important;
}

.destination-list {
  padding-top: 12px;
  padding-bottom: 12px;
  max-height: 260px;
  overflow-y: auto;
  border-radius: 5px;
  & > div {
    cursor: pointer;
    :hover {
      background: #f2f2f2;
    }
  }
}
input[type="text"]:disabled {
  background-color: white;
  cursor: not-allowed;
}

.vue-slider-process {
  background-color: #5e0302 !important;
}

.mobile {
  display: none;
}
.desktop {
  display: block;
}

hr.desktop {
  max-width: 1000px;
  height: 4px;
}
@media (max-width: 767px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}

.pagination {
  width: 100%;
  position: relative;
  justify-content: center;
}
.page-item {
  margin-right: 10px;
  margin-left: 10px;
}
.page-link.prev {
  position: absolute;
  left: 0;
}
.page-link.next {
  position: absolute;
  right: 0;
}

@media (max-width: 480px) {
  .pagination {
    width: 100%;
    position: relative;
    justify-content: center;
  }
  .page-item {
    margin-right: 1px;
    margin-left: 1px;
  }
}

.form-select {
  border-color: #5e0302;
  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(51, 3, 11, 0.25);
  }
}

input#date {
  display: inline-block;
  position: relative;
  border: none;
  &:focus {
    border: none;
    box-shadow: none;
  }
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}

#our-tours {
  .form-check-input[type="checkbox"]:checked {
    background-color: #5e0302;
  }
  .form-check-input:checked {
    border-color: #5e0302;
  }
  .form-check-input:checked:focus::before {
    box-shadow: 0px 0px 0px 13px #5e0302;
  }
  .form-select:focus {
    border-color: #5e0302;
  }
  .form-check-input {
    border-color: #5e0302;
  }
}
</style>
