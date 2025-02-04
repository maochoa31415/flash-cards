<script setup lang="ts">
interface Props {
  question: string;
  answer: string;
  showAnswer?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  question: '',
  answer: '',
})
</script>

<template>
<section
  class="question-container"
  :class="{'show-answer': showAnswer}">
  <div class="answer">{{props.answer}}</div>
  <div class="question">{{props.question}}</div>
</section>
</template>

<style scoped lang="scss">
.question-container {
  position: relative;
  width: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 350ms ease;

  &.show-answer {
    transform: rotateX(180deg);
  }

  .question,
  .answer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    text-align: center;
    border-radius: 8px;
    background-color: #eeeeee;
    aspect-ratio: 4/3;
  }

  .answer {
    position: absolute;
    inset: 0;
    width: calc(100% - 24px);
    font-size: 1.5rem;
    font-weight: 600;
    backface-visibility: hidden;
    transform: rotateX(180deg);
  }

  .question {
    font-size: 2rem;
    font-weight: 600;
  }
}
</style>