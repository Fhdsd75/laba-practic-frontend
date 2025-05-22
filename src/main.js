import { createApp }   from 'vue'
import { createPinia } from 'pinia'
import App             from './App.vue'
import router          from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/steam.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

// сразу после монтирования загрузим игры
import { useGameStore } from './stores/gameStore'
const store = useGameStore()
store.loadGames()
