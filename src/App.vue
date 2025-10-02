<template>
  <div class="app-container">
    <!-- Background videos -->
    <video
      autoplay muted loop playsinline
      class="bg-video attract"
      :class="{ visible: currentPath === '/' }"
    >
      <source src="/videos/attract-bg.mp4" type="video/mp4" />
    </video>

    <!-- <video
      autoplay muted loop playsinline
      class="bg-video main"
      :class="{ visible: currentPath !== '/' }"
    >
      <source src="/videos/main-bg.mp4" type="video/mp4" />
    </video> -->


    <!-- Routed content -->
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>

    <!-- Timeout Modal -->
        <div v-if="showModal" class="modal-backdrop">
            <div class="modal">
                <img id="eyes-gif" src="/img/eyes.gif"></img>
                <h2 id="modal-header">Are you still there?</h2>
                <p id="countdown">{{ countdown }}</p>
                <div class="buttons">
                    <button id="restart" @click="restart">Restart</button>
                    <button id="continue" @click="continueSession">Continue</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue"
import { useRoute, useRouter } from "vue-router"
import { endSession } from "@/utils/logger.js"   


const route = useRoute()
const router = useRouter()
const currentPath = ref(route.path)

let inactivityTimer = null
const INACTIVITY_LIMIT = 60000 // Controls amount of time before timeout is triggered

const showModal = ref(false)
const countdown = ref(10)
let countdownTimer = null

function resetInactivityTimer() {
  clearTimeout(inactivityTimer)
  inactivityTimer = setTimeout(() => {
    if (currentPath.value !== "/") {
      openModal()
    }
  }, INACTIVITY_LIMIT)
}

function openModal() {
  showModal.value = true
  countdown.value = 10 // Controls the amount of time on the countdown
  startCountdown()
}

function startCountdown() {
  clearInterval(countdownTimer)
  countdownTimer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      restart()
    }
  }, 1000)
}

function closeModal() {
  showModal.value = false
  clearInterval(countdownTimer)
}

function continueSession() {
  closeModal()
  resetInactivityTimer()
}

function restart() {
    endSession() 
    closeModal()
    router.push("/")
}

function activityListener() {
  if (!showModal.value) {
    resetInactivityTimer()
  }
}

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath
    resetInactivityTimer()
  },
  { immediate: true }
)

onMounted(() => {
  window.addEventListener("mousemove", activityListener)
  window.addEventListener("mousedown", activityListener)
  window.addEventListener("keydown", activityListener)
  window.addEventListener("touchstart", activityListener)
  window.addEventListener("scroll", activityListener)

  resetInactivityTimer()
})

onBeforeUnmount(() => {
  clearTimeout(inactivityTimer)
  clearInterval(countdownTimer)
  window.removeEventListener("mousemove", activityListener)
  window.removeEventListener("mousedown", activityListener)
  window.removeEventListener("keydown", activityListener)
  window.removeEventListener("touchstart", activityListener)
  window.removeEventListener("scroll", activityListener)
})
</script>


<style>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Videos stay pinned behind everything */
.bg-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;            
    opacity: 0;
    transition: opacity 1s ease;
    pointer-events: none;   
}

.bg-video.visible {
  opacity: 1;
}

/* Routed page content fills screen */
.router-view,
.page-content {
    position: relative;
    height: 1080px;
    width: 1920px;
    justify-content: center;
    align-items: center;
    z-index: 1;
    color: white;
}

/* ============================== 
Timeout Modal 
============================== */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal {
    background: white;
    opacity: .85;
    color: black;
    padding: 2rem;
    border-radius: 75px;
    text-align: center;
    width: 500px;
    height: 500px;
    font-family:'MD Nichrome Test Black';
}

#eyes-gif {
    width: 100px;
}

#modal-header {
    font-size: 50px;
    margin-top: 0;
    font-family: 'Sequel Sans Medium';

}

#countdown {
    font-size: 120px;
    margin-top: 25px;
    font-family: 'Sequel Sans Medium';
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.buttons button {
    padding: 10px 50px;
    font-size: 25px;
    cursor: pointer;
    border-radius: 50px;
    border: none;
}

#restart {
    background-color: #CBFC7E;
}

#continue {
    background-color: #CBFC7E;
}
</style>
