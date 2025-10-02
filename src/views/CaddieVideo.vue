<template>
    <div class="page-content">
        <button id="back-button" @click="goBack">Back</button>
        <h1 class="gradient-text">Agent caddie</h1>

        <Transition name="fade">
        <div v-if="true" class="fade-group video-wrapper">
            <video
            ref="videoEl"
            autoplay
            muted
            playsinline
            @ended="handleEnded"
            @timeupdate="updateTime"
            @loadedmetadata="updateDuration"
            >
            <source src="/videos/2025_09_25_SFC_Liv Golf x Salesforce_16x9_JSE_v02.mp4" type="video/mp4" />
            </video>
        </div>
        </Transition>

        <!-- Countdown display -->
        <div class="time-display">
        {{ formattedCountdown }} 
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()
const videoEl = ref(null)

const currentTime = ref(0)
const duration = ref(0)

// Navigation
function handleEnded() {
  logClick('Caddie video watched', 'selection')
  router.push('/selection')
}

function goBack() {
  router.back()
}

// Video time updates
function updateTime() {
  if (videoEl.value && Number.isFinite(videoEl.value.currentTime)) {
    currentTime.value = videoEl.value.currentTime
  }
}

function updateDuration() {
  if (videoEl.value && Number.isFinite(videoEl.value.duration)) {
    duration.value = videoEl.value.duration
  }
}


function formatFullMMSS(secondsInput) {
  const s = Math.max(0, Math.floor(Number(secondsInput) || 0))
  const minutes = Math.floor(s / 60)
  const secs = s % 60
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

function formatCountdown(secondsInput) {
  const s = Math.max(0, Math.ceil(Number(secondsInput) || 0))
  const minutes = Math.floor(s / 60)
  const secs = s % 60
  if (minutes > 0) {
    return `${minutes}:${secs.toString().padStart(2, '0')}` // e.g. 1:05
  } else {
    return `${secs}` // e.g. 5
  }
}

// computed values
const countdownTime = computed(() => {
  // ensure duration is a number; if not yet loaded, return 0
  const d = Number(duration.value) || 0
  const ct = Math.max(0, d - (Number(currentTime.value) || 0))
  return ct
})

const formattedCountdown = computed(() => formatCountdown(countdownTime.value))
// const formattedDuration = computed(() => formatFullMMSS(duration.value))

onMounted(() => {
  // try to play; also in case metadata already loaded, populate duration
  if (videoEl.value) {
    // if metadata already available
    if (Number.isFinite(videoEl.value.duration) && videoEl.value.duration > 0) {
      duration.value = videoEl.value.duration
    }
    videoEl.value.play().catch(err => {
      console.warn('Autoplay blocked:', err)
    })
  }
})
</script>

<style scoped>
.page-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: white;
    text-align: center;
}

.video-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.video-wrapper video {
    max-width: 80%;
    max-height: 80%;
    border-radius: 25px;
}

.gradient-text {
    position: absolute;
    left: 196px;
    top: 38px;
    font-family: 'MD Nichrome Black';
    background: linear-gradient(90deg, #BDFF69, #0BCCDB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 50px;
}

#back-button {
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
  z-index: 2;
}

.time-display {
    font-size: 50px;
    position: absolute;
    top: 20px;
    left: 492px;
    font-family: 'MD Nichrome Black';
    color: #0BCCDB;
}
</style>


<style scoped>
.page-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;          
    color: white;
    text-align: center;
}

.video-wrapper {
    display: flex;
    justify-content: center;  
    align-items: center;     
    height: 100vh;            
    width: 100vw;            
}

.video-wrapper video {
    max-width: 80%;   
    max-height: 80%;  
    border-radius: 25px;
}

.gradient-text {
    position: absolute;
    left: 196px;
    top: 38px;
    font-family: 'MD Nichrome Black';
    background: linear-gradient(90deg, #BDFF69, #0BCCDB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 50px;
}

#back-button {
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
    z-index: 2;
}

.time-display {
    font-size: 50px;
    position: absolute;
    top: 40px;
    left: 492px;
    font-family: 'MD Nichrome Black';
    color: #0BCCDB;
}
</style>
