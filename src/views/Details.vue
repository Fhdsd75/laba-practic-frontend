<template>
  <div>
    <h2>Детали элемента {{ id }}</h2>
    <!-- Подробности выбранного элемента -->
    <p>Описание, обложка и т. д.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
</script>
