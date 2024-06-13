<template>
    <div class="pill" @click="pillClick">
        <span class="text">{{ text }}</span>
        <span class="ms-2">✕</span>
    </div>
</template>
<script>
export default {
    props: {
        text: String,
    },
    methods: {
        pillClick() {
            this.$emit("clicked", this.text);
        },
    },
};
</script>

<style lang="scss" scoped>
.pill {
    background-color: transparent;
    border: 1px solid #d64113;
    color: #d64113;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    border-radius: 14px;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-size: 13px;
    font-weight: 400;
    height: 28px;
    justify-content: center;
    line-height: 1.5em;
    margin: 4px;
    outline: none;
    overflow: hidden;
    padding: 0 10px;
    position: relative;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    &:hover {
        background-color: rgba(214, 65, 19, 0.12);
    }
    &:active {
        background-color: #ef724c;
        border-color: transparent;
        color: #fff;
        box-shadow: 0 2px 1px -6px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);
    }
    .text {
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    span.fa {
        font-size: 15px;
    }
}
</style>
