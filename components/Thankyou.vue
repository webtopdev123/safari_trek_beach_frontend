<template>
    <div id="thankyou">
        <div class="thankyou">
            <div class="thankyou-inner">
                <h1>Thank you</h1>
                <h2>{{ message }}</h2>
            </div>
            <router-link to="/" class="btn btn-danger m-2">
                Homepage
            </router-link>
            <router-link to="/our-tours/" class="btn btn-danger m-2">
                Our Tours
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Thankyou",
    props: {
        message: String,
    },
};
</script>

<style lang="scss" scoped>
#thankyou {
    position: relative;
    height: 100vh;
    .thankyou {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        line-height: 1.4;
        text-align: center;
        .thankyou-inner {
            position: relative;
            height: 200px;
            margin: 0px auto 20px;
            z-index: -1;
            h1 {
                font-size: 120px;
                font-weight: 400;
                margin: 0px;
                color: #211b19;
                text-transform: uppercase;
                position: absolute;
                left: 50%;
                top: 15%;
                transform: translate(-50%, -50%);
                @media (max-width: 767px) {
                    top: -10%;
                    font-size: 80px;
                }
            }
            h2 {
                font-size: 28px;
                font-weight: 400;
                text-transform: uppercase;
                color: #211b19;
                background: #f6f6f7;
                padding: 10px 5px;
                margin: auto;
                display: inline-block;
                position: absolute;
                bottom: 0px;
                left: 0;
                right: 0;
            }
        }
    }
}
</style>
