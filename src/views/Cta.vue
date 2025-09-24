<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                <h2>This is a header</h2>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h4>
                <button @click="selection">Watch more!</button>
                <button @click="finish">Finish</button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: white;
  z-index: 0;
}

h2 {
    font-size: 100px;
}

h4 {
    font-size: 50px;
    padding: 50px 200px;
}

button {
    margin-top: 2rem;
    padding: 15px 100px;
    font-size: 40px;
    cursor: pointer;
    border-radius: 70px;
    border: none;
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
