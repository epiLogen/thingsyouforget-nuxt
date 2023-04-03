<script setup>
import '~/assets/main.css'

const quotes = await $fetch('/api/quotes')
let current = ref(null)

function randomQuote() {
  let next = quotes[Math.floor(Math.random()*quotes.length)]
  if(current.value === null) {
    return next
  }

  while(next.id === current.value.id) {
    next = quotes[Math.floor(Math.random()*quotes.length)]
  }

  return next
}

onMounted(() => {
    current.value = randomQuote()
})
</script>

<template>
  <div class="app">
    <Link rel="icon" href="/favicon.ico" />
    <Title>Things you forget</Title>
    <TheHeader />
    <div class="main">
        <transition name="fade" mode="out-in" appear>
            <div v-if="current == null" class="loader"><Icon name="svg-spinners:6-dots-scale"/></div>
            <Quote v-else :quote="current" :key="current.id"/>
        </transition>
        <ShuffleButton @click="current = randomQuote()"/>
    </div>
    <TheFooter :count="quotes.length"/>
  </div>
</template>

<style scoped>
.main {
    background-color: black;
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0px 0px 10px;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: 0.3s ease-out;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: 0.1s linear;
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
</style>