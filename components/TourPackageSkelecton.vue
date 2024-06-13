<template>
    <div class="card mb-3">
        <content-placeholders :rounded="true">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <content-placeholders-img />
                </div>
                <div class="col-lg-4 col-md-12">
                    <content-placeholders-text :lines="10" class="mt-3 mx-2" />
                </div>
            </div>
        </content-placeholders>
    </div>
</template>

<style lang="scss">
.vue-content-placeholders-img,
.vue-content-placeholders-text__line {
    background: #c9c9c9 !important;
}

.vue-content-placeholders-img {
    height: 400px !important;
    @media (max-width: 450px) {
        height: 200px !important;
    }
}
</style>
