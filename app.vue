<script setup>
import '~/assets/main.css'

const quotes = await $fetch('/api/quotes')
let current = ref(null)
let previous = ref([])

function getRandomQuote() {
    
	// save for rewind
	if(previous.value.length == 5) previous.value.splice(0, 1)
	if(current.value != null) previous.value.push(current.value)

	// find and set new quote
    let next = quotes[Math.floor(Math.random()*quotes.length)]
    if(current.value == null) {
        current.value = next
		return
    }

    while(next.id === current.value.id) {
        next = quotes[Math.floor(Math.random()*quotes.length)]
    }

    current.value = next
}

function rewind() {
	if(previous.value.length > 0) current.value = previous.value.pop() 
}
 
onMounted(() => {
    getRandomQuote()
})
</script>

<template>
	<div class="app">
		<Link rel="icon" href="/favicon.ico" />
		<Title>Things You Forget</Title>

		<header>
			<div class="logo">things you forget...</div>
			<div class="buttons">
				<div class="btn" :class="{ 'disabled': !previous.length }" @click="rewind"><Icon name="fa6-solid:rotate-left"/></div>
				<div class="btn btn-shuffle" @click="getRandomQuote"><Icon name="fa6-solid:dice" /></div>
			</div>
		</header>

		<main>
			<transition name="fade" mode="out-in" appear>
				<div v-if="current == null" class="loader"><Icon name="svg-spinners:6-dots-scale"/></div>
				<Quote v-else :quote="current" :key="current.id"/>
			</transition>
		</main>

		<footer>
			&copy; Things You Forget 2025 &ensp;&bull;&ensp; {{ quotes.length }} entries
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
    color: #99e6ff;
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
    color: #99e6ff;
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
  
.logo {
    font-size: 2.5rem;
    font-family: 'Dancing Script';
    text-align: center;
}

.buttons {
    display: flex;
    gap: 20px;
    align-items: center;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #006080;
    transition: opacity 0.15s;
    cursor: pointer;
    font-size: 1.3rem;
}

.btn:hover {
    opacity: 0.8;
}

.btn:active {
    opacity: 0.6;
}

.btn-shuffle {
    height: 70px;
    font-size: 2rem;
}

@media (max-width: 500px) {
    .logo {
        font-size: 1.5em;
    }
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active {
    transition: 0.3s;
}

.fade-leave-active {
    transition: 0.1s;
}
</style>