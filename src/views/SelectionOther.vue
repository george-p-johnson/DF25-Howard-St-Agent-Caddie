<template>
    <div class="page-content">
        <Transition name="fade">
            <div v-if="true" class="fade-group">
                <button id="back-button" @click="goBack">⬅ Back</button>


                <h2>This is a header</h2>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h4>
                <button @click="video1">Video1</button>
                <button @click="video2">Video2</button>

                <button @click="video3">Video3</button>
                <button @click="video4">Video4</button>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { logClick } from '@/utils/logger.js'

const router = useRouter()
function video1() {
    logClick('Video1 Button', 'SelectionOther')
    router.push('/video1')
}

function video2() {
    logClick('Video2 Button', 'SelectionOther')
    router.push('/video2')
}

function video3() {
    logClick('Video3 Button', 'SelectionOther')
    router.push('/video3')
}

function video4() {
    logClick('Video4 Button', 'SelectionOther')
    router.push('/video4')
}

function goBack() {
  router.back()   // same as window.history.back()
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

#back-button {
    background: none;
    display: block;
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
