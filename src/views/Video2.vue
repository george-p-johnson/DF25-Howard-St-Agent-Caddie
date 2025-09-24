<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                <h2>video2</h2>

                <video
                    ref="videoEl"
                    autoplay
                    muted
                    playsinline
                    @ended="handleEnded"
                    >
                    <source src="/videos/mobileVideo1.mp4" type="video/mp4" />
                </video>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { logClick, endSession } from '@/utils/logger.js'  // ✅ add endSession here


const router = useRouter()
const videoEl = ref(null)

const handleEnded = () => {
    // endSession()
    logClick('Video 2 watched', 'CTA')
    router.push('/cta') 
}

onMounted(() => {
  // Ensure autoplay works — some browsers need this kick
  if (videoEl.value) {
    videoEl.value.play().catch(err => {
      console.warn('Autoplay blocked:', err)
    })
  }
})
</script>

<style scoped>
video {
  position: fixed;        
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;      /* cover screen without distortion */
  z-index: -1;            /* push behind any text if you keep it */
}

.page-content {
  position: relative;
  z-index: 1;             /* keep text above video */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;          /* match viewport height */
  color: white;
  text-align: center;
}

h2 {
  font-size: 100px;
}

.bg-video {
  max-width: 100%;
  height: auto;
}

/* Transition classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
