import { createRouter, createWebHistory } from 'vue-router'
import Attract from '../views/Attract.vue'
import Selection from '../views/Selection.vue'
import CaddieVideo from '../views/CaddieVideo.vue'
import SelectionOther from '../views/SelectionOther.vue'
import Cta from '../views/Cta.vue'

import Video1 from '../views/Video1.vue'
import Video2 from '../views/Video2.vue'
import Video3 from '../views/Video3.vue'
import Video4 from '../views/Video4.vue'


const routes = [
    { path: '/', name: 'Attract', component: Attract },
    { path: '/selection', name: 'Selection', component: Selection },
    { path: '/caddieVideo', name: 'CaddieVideo', component: CaddieVideo },
    { path: '/selectionOther', name: 'SelectionOther', component: SelectionOther },
    { path: '/video1', name: 'Video1', component: Video1 },
    { path: '/video2', name: 'Video2', component: Video2 },
    { path: '/video3', name: 'Video3', component: Video3 },
    { path: '/video4', name: 'Video4', component: Video4 },
    { path: '/cta', name: 'Cta', component: Cta },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
