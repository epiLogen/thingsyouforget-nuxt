<script setup>
const props = defineProps({
    quote: {
        type: Object,
        required: false
    }
})
</script>

<template>
<button class="shuffle-button" type="button"><Icon name="fa6-solid:dice" /></button>
</template>

<style scoped>
.shuffle-button {
    background-image: linear-gradient(30deg, rgb(11, 24, 31) 0%, rgb(57, 102, 128) 70%, rgb(159, 216, 247) 100%);
    font-size: 1.5rem;
    aspect-ratio: 1;
    height: 70px;
    color:#ffe6b3;
    border-radius: 50%;
    border: 3px solid #ffe6b3;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.2s ease-out;
    box-shadow: 0px 0px 8px 1px rgb(159, 216, 247);
  }

.shuffle-button:hover {
    opacity: 0.8;
}
svg {
    padding-bottom: 2px;
}
</style>