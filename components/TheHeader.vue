<template>
    <div class="header">
        <a href="/"><div class="logo">things you forget...</div></a>
    </div>
</template>

<style scoped>
.header {
    flex: 0 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    padding: 5px 0px;
    width: 100%;
  }
  
  .logo {
    font-weight: 400;
    font-size: 40px;
    font-family: 'Dancing Script';
    padding: 5px;
    background-color: transparent;
    opacity: 1;
    text-shadow: 3px 3px 10px rgb(159, 216, 247);
    color: #ffe6b3;
    cursor: pointer;
    transition: opacity 0.2s ease-out;
  }

  .logo:hover {
    opacity: 0.8;
  }
</style>