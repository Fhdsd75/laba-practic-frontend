<template>
  <div>
    <h2 class="text-steam-accent mb-4">Добавить игру</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label class="form-label text-white">Название</label>
        <input v-model="title" type="text" class="form-control bg-dark text-white" required/>
      </div>
      <div class="mb-3">
        <label class="form-label text-white">Описание</label>
        <textarea v-model="description" class="form-control bg-dark text-white" rows="3" required></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label text-white">URL обложки</label>
        <input v-model="coverUrl" type="url" class="form-control bg-dark text-white" />
      </div>
      <button type="submit" class="btn btn-steam">Добавить</button>
    </form>
  </div>
</template>

<script setup>
import { ref }          from 'vue'
import { useRouter }    from 'vue-router'
import { useGameStore } from '../stores/gameStore'

const title       = ref('')
const description = ref('')
const coverUrl    = ref('')

const store  = useGameStore()
const router = useRouter()

function onSubmit() {
  store.addGame({
    title:       title.value,
    description: description.value,
    coverUrl:    coverUrl.value
  })
  router.push('/catalog')
}
</script>
    