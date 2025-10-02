
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
                <source src="/videos/mobileVideo1.mp4" type="video/mp4" />
                </video>
            </div>
        </Transition>

        <!-- Time display -->
        <div class="time-display">
            {{ formattedTime }} / {{ formattedDuration }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { logClick, endSession } from '@/utils/logger.js'  

const router = useRouter()
const videoEl = ref(null)

const currentTime = ref(0)
const duration = ref(0)


// Navigation
const handleEnded = () => {
    logClick('Video 4 watched', 'CTA')
    router.push('/cta') 
}

function goBack() {
    router.back()
}


// Video time function
function updateTime() {
  if (videoEl.value) {
    currentTime.value = videoEl.value.currentTime
  }
}

function updateDuration() {
  if (videoEl.value) {
    duration.value = videoEl.value.duration
  }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)

    if (minutes > 0) {
        return `${minutes}:${secs.toString().padStart(2, '0')}`
    } else {
        return `${secs}`
    }
}


const formattedTime = computed(() => formatTime(currentTime.value))
const formattedDuration = computed(() => formatTime(duration.value))

onMounted(() => {
  if (videoEl.value) {
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
    top: 40px;
    left: 492px;
    font-family: 'MD Nichrome Black';
    color: #0BCCDB;
}
</style>
















