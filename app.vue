<script setup>
import '~/assets/main.css'

const client = useSupabaseClient()
const quotes = ref(await fetchQuotes())
const currentQuote = ref(null)
const previousQuotes = ref([])

function getRandomQuote() {
    const list = quotes.value
    if (!list.length) return

    // First pick (nothing shown yet)
    if (!currentQuote.value) {
        currentQuote.value = list[Math.floor(Math.random() * list.length)]
        return
    }

    const blockedIds = new Set([
        currentQuote.value.id,
        ...previousQuotes.value.map(q => q.id),
    ])

    // Quotes not yet visited in this cycle
    let candidates = list.filter(q => !blockedIds.has(q.id))

    // All quotes have been visited → reset cycle
    if (candidates.length === 0) {
        previousQuotes.value = []
        candidates = list.filter(q => q.id !== currentQuote.value.id)
    }

    // Safety: only one quote total
    if (!candidates.length) return

    // Save history and pick a new one
    previousQuotes.value.push(currentQuote.value)
    currentQuote.value = candidates[Math.floor(Math.random() * candidates.length)]
}

function rewindQuote() {
    // Pop last shown quote from history and show it.
    const prev = previousQuotes.value.pop()
    if (prev) currentQuote.value = prev
}
 
onMounted(() => {
    getRandomQuote()
})

async function fetchQuotes() { 

    const { data: quotes, error } = await client.from('quotes').select()
    if(error) {
        console.error('Error fetching quotes: ', error.message)
        return null
    }

    console.log('quotes: ', quotes)
    return quotes
}
</script>

<template>
	<div class="app">
		<Link rel="icon" href="/favicon.ico" />
		<Title>Things You Forget</Title>

		<header>
			<div class="buttons">
				<div class="btn" :class="{ 'disabled': !previousQuotes.length }" @click="rewindQuote"><Icon name="fa6-solid:rotate-left"/></div>
				<div class="btn btn-shuffle" @click="getRandomQuote"><Icon name="fa6-solid:dice" /></div>
			</div>
		</header>

		<main>
			<transition name="fade" mode="out-in" appear>
				<div v-if="currentQuote == null" class="loader"><Icon name="svg-spinners:6-dots-scale"/></div>
				<Quote v-else :quote="currentQuote" :key="currentQuote.id"/>
			</transition>
		</main>

		<footer>
			&copy; Things You Forget 2026 &ensp;&bull;&ensp; {{ quotes.length }} entries
		</footer>
	</div>
</template>

<style scoped>
header {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    gap: 20px;
    color: #d2e0e0;
    padding: 40px 10px;
    user-select: none;
}

main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: inherit;
    padding: 0 10px;
}

footer {
    flex: 0 0 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #E0E0E0;
    background-color: inherit;
    font-family: 'EB Garamond', serif;
    padding: 10px 5px;
    background-color: inherit;
}

.disabled {
	opacity: 0.3;
	pointer-events: none;
}

.loader {
  color: #ffe6b3;
  font-size: 3rem;
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
    display: flex;
    gap: 20px;
    align-items: center;
    padding-right: 70px;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    transition: opacity 0.15s;
    cursor: pointer;
    font-size: 1.5rem;
    background-color: #282828;
    color: #E0E0E0;
    -webkit-tap-highlight-color: transparent;
}

.btn:hover {
    opacity: 0.8;
}

.btn:active {
    opacity: 0.6;
}

.btn-shuffle {
    height: 80px;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active {
    transition: 0.3s;
}

.fade-leave-active {
    transition: 0s;
}
</style>