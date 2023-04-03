<script setup>
const props = defineProps({
    count: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="footer">
        &copy; epiLogen 2023 &ensp;&bull;&ensp; {{ count }} quotes
    </div>
</template>

<style scoped>
.footer {
    flex: 0 0 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #ffe6b3;
    background-color: inherit;
    font-family: 'EB Garamond', serif;
    font-size: 1em;
    padding: 10px 0px;
    width: 100%;
}
</style>