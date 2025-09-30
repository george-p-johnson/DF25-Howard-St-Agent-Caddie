<template>
    <div class="page-content">
        <transition name="fade">
        <div v-if="true" class="fade-group">
            <button id="back-button" @click="goBack">Back</button>

            <img id="headline" src="/img/Selection-headline.png" alt="headline">

            <!-- Video thumbnails + buttons -->
            <div id="thumbnails-container">
            <div class="video-item">
                <img src="/img/Thumbnail.png" alt="Video 1">
                <button @click="video1">Play Video 1</button>
            </div>

            <div class="video-item">
                <img src="/img/Thumbnail.png" alt="Video 2">
                <button @click="video2">Play Video 2</button>
            </div>

            <div class="video-item">
                <img src="/img/Thumbnail.png" alt="Video 3">
                <button @click="video3">PLay Video 3</button>
            </div>

            <div class="video-item">
                <img src="/img/Thumbnail.png" alt="Video 4">
                <button @click="video4">Play Video 4</button>
            </div>
            </div>
        </div>
        </transition>
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
    position: relative;        /* allow children to be positioned absolutely/fixed */
    height: 100%;
    width: 100%;
    text-align: center;
    color: white;
    z-index: 0;
    background-image: url('/img/Selection-bg.png');
    background-size: cover;
    background-position: center;
}


/* Back button */
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
    /* font-family: 'Sequel Sans Book Body', 'Arial', sans-serif; */
    font-family: 'Sequel Sans Medium';
}


#headline {
    top: 220px;
    position: relative;
}

/* Container for all thumbnails */
#thumbnails-container {
    display: flex;
    justify-content: center;
    gap: 40px; /* space between each video-item */
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 300px;
    z-index: 10;
}

/* Each thumbnail + button pair */
.video-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Thumbnail image */
.video-item img {
    /* width: 100%;  */
    height: auto;
    margin-bottom: 40px;
}

/* Video buttons */
.video-item button {
    padding: 15px 40px;
    font-size: 24px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    width: 344px;
    height: 75px;
}

</style>
