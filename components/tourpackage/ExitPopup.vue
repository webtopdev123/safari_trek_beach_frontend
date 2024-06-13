<template>
    <div class="exit-wrap">
        <div class="position-fixed top-50 start-50 translate-middle bg-white p-3 p-md-5 shadow-lg exit ">
            <h2 class="fw-bold text-center text-capitalize mt-3 mt-md-0 mb-3">
                Do you want to get a picture perfect experiences?
            </h2>
            <div class="row border border-danger g-0 p-3">
                <div class="col-12 col-md-8 col-sm-12 px-3">
                    <h3 class="fw-bold h2 mt-3 mt-md-5">
                        Get Tips
                    </h3>
                    <h2 class="text-danger h1 fw-bold">
                        How To Avoid Bad
                    </h2>
                    <h3 class="fw-bold h2">
                        Tour Experience
                    </h3>
                    <form class="button-wrap mt-3 mt-md-5">
                        <input
                            v-model="email"
                            class="w-100 px-4 py-2 form-control"
                            placeholder="Enter Your Email Here"
                            required
                        />
                        <div class="mt-2 mt-md-4">
                            <button type="submit" class="btn btn-danger py-2 w-100">
                                I Want A Picture Perfect Experience
                            </button>
                        </div>
                        <div class="text-center mt-4">
                            <a class="">
                                No thanks
                            </a>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-md-4 col-sm-12">
                    <div class="row">
                        <div class="col-6 col-sm-6 col-md-12">
                            <h5 class="text-center fw-bold fst-italic mt-3">
                                From
                            </h5>
                            <div class="text-center">
                                <img src="/images/sad.png" width="150" class="display-block" />
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-12">
                            <h5 class="text-center mt-3 mt-md-4 fw-bold fst-italic">
                                To
                            </h5>
                            <div class="text-center">
                                <img src="/images/happy.jpg" width="150" class="display-block" />
                            </div>
                        </div>
                    </div>

                    <h5 class="text-center mt-4 h5 fw-bold fst-italic">
                        Return Home With Best Pictures, Memories and Smile
                    </h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
        };
    },
    methods: {},
};
</script>

<style scoped>
.exit-wrap {
    display: none;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1030;
    top: 0;
}
.exit {
    z-index: 1031;
    max-width: 1100px;
    width: 100%;
    border-radius: 30px;
}
.button-wrap {
    max-width: 500px;
}

input,
button {
    height: 50px;
    text-align: center;
    font-size: 23px;
}

input {
    border-color: gray;
    font-size: 20px;
}

.h1 {
    font-size: 40px;
}
.border {
    border-radius: 15px;
}
a {
    cursor: pointer;
}

@media (max-width: 768px) {
    img {
        width: 90px;
    }
    input,
    button {
        font-size: 15px;
        height: 40px;
    }
    h3 {
        text-align: center;
        font-size: 20px;
    }
    h2 {
        text-align: center;
        font-size: 25px !important;
    }
    h5 {
        font-size: 18px;
    }
    .exit {
        border-radius: 0;
    }
}
</style>
