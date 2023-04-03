<script setup>
const props = defineProps({
    quote: {
        type: Object,
        required: true
    }
})
</script>

<template>
<div class="quote-card">
    <div class="quote-text" v-html="quote.text"></div>
    <div class="quote-source">

        <div class="voice">- {{ quote.voice }}</div>

        <div class="source">
            <span class="author">{{ quote.author }}: </span>
            <span class="book">{{ quote.book }}</span>
        </div>
    </div>
</div>
</template>

<style scoped>
.quote-card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #ffe6b3;
    height: auto;
    width: 500px;
    padding: 5px;
    text-align: left;
    line-height: 1.5em;
    margin-top: 5px;
    background-color: black;
    font-size: 1.2em;
}

.quote-text {
    font-family: 'EB Garamond', serif;
    font-weight: 400;
}

.quote-source {
    align-self: flex-end;
}

.voice {
    font-family: 'EB Garamond', serif;
    font-weight: 700;
}

.source {
    font-family: 'EB Garamond', serif;
    font-weight: 400;
    color: rgb(73, 66, 66);
    font-size: 0.85em;
    padding-left: 10px;
}

.author {
    font-style: normal;
}

.book {
    font-style: italic;
}

@media (max-width: 500px) {
    .quote-card {
        font-size: 1em;
        width: 90vw;
    }
}
</style>