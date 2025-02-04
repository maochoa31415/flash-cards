<script setup lang="ts">
import { useAppStore } from '../store'
import FcQuestion from "./FcQuestion.vue";
import FcQuestionControls from "./FcQuestionControls.vue";

const store = useAppStore()

// Actions
function onShowAnswer(status: boolean): void {
  store.setShowAnswer(status)
}

function onPreviousQuestion(): void {
  store.setShowAnswer(false)
  store.setPreviousQuestion()
}

function onNextQuestion(): void {
  store.setShowAnswer(false)
  store.setNextQuestion()
}
</script>

<template>
<div class="question-navigator">
  <div class="question-container">
    <fc-question
      v-for="(question, index) in store.questions"
      :key="index"
      v-show="store.currentQuestion === index"
      :question="question.question"
      :answer="question.answer"
      :show-answer="store.showAnswer && store.currentQuestion === index">
    </fc-question>
  </div>
  <fc-question-controls
    :use-previous="!store.isFirstQuestion"
    :use-next="!store.isLastQuestion"
    :use-show="store.showAnswer"
    @previous="onPreviousQuestion"
    @show="onShowAnswer($event)"
    @next="onNextQuestion">
  </fc-question-controls>
</div>
</template>

<style scoped lang="scss">
.question-navigator {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  border: solid 3px #bdbdbd;
  border-radius: 12px;
}
</style>