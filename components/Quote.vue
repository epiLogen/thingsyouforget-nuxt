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
        <div class="voice">– {{ quote.voice }}</div>
        <div class="source">
            <span class="author">{{ quote.author + " | " }} </span>
            <span class="book">{{ quote.book }}</span>
        </div>
    </div>
</div>
</template>

<style scoped>
.quote-card {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #ffe6b3;
    width: min(90vw, 500px);
    line-height: 1.5em;
    background-color: inherit;
    font-size: 1.2em;
    font-family: 'EB Garamond', serif;
}

.quote-text {
}

.quote-source {
    align-self: flex-end;
}

.voice {
    font-weight: 700;
}

.source {
    color: #484848;
    font-size: 0.9em;
    padding-left: 14px;
}

.author {
}

.book {
    font-style: italic;
}

@media (max-width: 500px) {
    .quote-card {
        font-size: 1rem;
        width: 90vw;
    }
}
</style>