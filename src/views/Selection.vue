<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                <img src="/img/Selection-headline.png">
                <div id="button-container">
                    <button @click="caddie">Experience Agent Caddie</button>
                    <button @click="other">Experience Fan Caddie</button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()

function caddie() {
  logClick('Caddie Button', 'Selection')
  router.push('/caddieVideo')
}

function other() {
    logClick('Other Button', 'Selection')
    router.push('/selectionOther')
}

</script>

<style scoped>
.page-content {
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: white;
    z-index: 0;
    background-image: url('/img/Selection-bg.png');
}

img { 
    position: relative;
    top: 333px;
}

#button-container {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 175px;
    display: flex;
    z-index: 10;
}

button {
    padding: 20px 75px;
    cursor: pointer;
    border: none;
    flex-shrink: 0;
    border-radius: 100px;
    background: #CBFC7E;
    color: #000;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0 30px;
}

</style>
