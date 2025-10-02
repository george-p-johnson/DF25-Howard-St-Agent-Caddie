<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                <img id="headline" src="/img/cta-headline.png" alt="headline">

                <div id="button-container">
                    <button @click="finish">End Experience</button>
                    <button @click="selection">Go back to video page</button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { logClick, endSession } from '@/utils/logger.js'  // ✅ add endSession here

const router = useRouter()

function selection() {
  logClick('Watch more Button', 'CTA')
  router.push('/selection')
}

function finish() {
    endSession()
    router.push('/')
}

</script>

<style scoped>
.page-content {
    position: relative;        
    height: 100%;
    width: 100%;
    text-align: center;
    color: white;
    z-index: 0;
    background-image: url('/img/Selection-bg.png');
    background-size: cover;
    background-position: center;
}

#headline {
    top: 220px;
    position: relative;
}

#button-container {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 260px;
    display: flex;
    z-index: 10;
}

button {
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
    width: 344px;
    height: 75px;
}
</style>
