<script setup lang="ts">
import { computed } from "vue";

interface Props {
  currentPosition?: number;
  totalOfQuestions?: number;
}

const props = withDefaults(defineProps<Props>(), {
  currentPosition: 0,
  totalOfQuestions: 1,
})

// Computed
const progress = computed<number>(() => {
  return Math.floor((props.currentPosition / props.totalOfQuestions) * 100)
})

const progressStyle = computed(() => {
  return { width: `calc(${progress.value}% - 114px)` }
})
</script>

<template>
  <div class="progress-container">
    <div class="progress" :style="progressStyle"></div>
    <span class="progress-label">{{progress}}%</span>
    <span class="progress-number">
      {{props.currentPosition}} of {{props.totalOfQuestions}}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.progress-container {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  height: 32px;
  border: solid 3px #bdbdbd;
  border-radius: 12px;
  user-select: none;

  .progress {
    height: 34px;
    border-radius: 8px;
    background-color: #bdbdbd;
    transition: width 300ms ease;

    &-label {
      margin: 0 auto 0 0;
    }
  }
}
</style>