<template>
  <div class="page-content">
    <!-- Text fade -->
    <Transition name="fade">
      <div v-if="true" class="fade-group">
        <button @click="goNext">Press to get started</button>
      </div>
    </Transition>
  </div>
</template>



<script setup>
import { useRouter } from 'vue-router'
// import { logClick } from '@/utils/logger.js'
import { startSession, logClick, endSession } from '@/utils/logger.js'


const router = useRouter()
function goNext() {
    startSession()

    logClick('Start Button', 'Attract')
    router.push('/selection')
}

</script>

<style scoped>
.page-content {
    position: relative;   /* keeps it above video */
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
    text-align: center;
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
    position: fixed;   
    left: 50%;         
    transform: translateX(-50%); 
    bottom: 175px;    
    z-index: 10;      
}
</style>
