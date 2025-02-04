<script setup lang="ts">
import { useAppStore } from './store'
import FcProgress from "./components/FcProgress.vue"
import FcQuestionNavigator from "./components/FcQuestionNavigator.vue"

const store = useAppStore()
</script>

<template>
  <main class="main-container">
    <header>
      <h2>Flash Cards</h2>
    </header>
    <fc-progress
      :current-position="store.currentQuestion + 1"
      :total-of-questions="store.questions.length">
    </fc-progress>
    <fc-question-navigator>
    </fc-question-navigator>
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 4px;

  header h2 {
    margin: 8px 0;
    font-weight: 500;
  }
}
</style>