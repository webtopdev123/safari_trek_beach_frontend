<template>
    <div class="card p-3 mt-5 skelecton-operator">
        <div class="wrapper d-flex">
            <div class="operator-logo text-center m-auto">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                </content-placeholders>
            </div>
            <div class="px-3 operator-content">
                <content-placeholders :rounded="true">
                    <content-placeholders-heading />
                    <content-placeholders-text :lines="6" />
                </content-placeholders>
            </div>
            <div class="logo-layout-skelecton text-center">
                <content-placeholders :rounded="true">
                    <content-placeholders-img />
                </content-placeholders>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skelecton-operator {
    .wrapper {
        flex-direction: row;
        justify-content: space-between;
    }
    .logo-layout-skelecton {
        min-width: 400px;
        width: 400px;
        .vue-content-placeholders-img {
            height: 225px !important;
            margin: auto;
        }
        @media (max-width: 1200px) {
            margin: auto;
        }
        @media (max-width: 460px) {
            width: 100%;
            min-width: unset;
        }
    }
    .operator-logo .vue-content-placeholders {
        height: 180px;
    }

    .operator-logo .vue-content-placeholders-img {
        height: 100% !important;
        // min-width: 150px;
        width: 100%;
        margin: auto;
        background: #c9c9c9 !important;
    }
    .vue-content-placeholders-text__line {
        background: #c9c9c9 !important;
    }
}
</style>
