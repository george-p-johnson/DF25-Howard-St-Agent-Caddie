<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                
                <img id="header" :src="headerImg">
                <h2>Explore how LIV Golf brings fans inside the ropes<br>with live updates, insights, and more.</h2>

                <div id="button-container">
                    <img 
                        :src="caddieBtn" 
                        alt="Experience Agent Caddie"
                        @click="caddie"
                        class="img-button"
                    >
                    <img 
                        :src="otherBtn" 
                        alt="Experience Fan Caddie"
                        @click="other"
                        class="img-button"
                    >

                    <!-- <div id="button-container"> 
                        <button @click="caddie">Experience Agent Caddie</button> 
                        <button @click="other">Experience Fan Caddie</button> 
                    </div> -->
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()

// Use reactive constants to reference public folder images
const headerImg = '/img/selection-headline.png'
const caddieBtn  = '/img/agent-caddie-button.png'
const otherBtn   = '/img/fan-caddie-button.png'

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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: white;
    z-index: 0;
    /* background-image: url('/img/Selection-bg.png'); */
}

#header { 
    position: relative;
    top: 333px;
}

h2 {
    font-family: 'Sequel Sans Medium';
    top: 380px;
    position: relative;
}

#button-container {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 175px;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

/* Back button */
/* #back-button {
    position: absolute;
    top: 40px;
    left: 40px;
    font-size: 24px;
    color: #ffffff;
    border-radius: 110px;
    line-height: 1;  
    border: 2.7px solid #34BECD;
    background: #292929;
    padding: 10px 25px;
    font-family: 'Sequel Sans Medium';
} */

/* button {
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
} */

</style>
