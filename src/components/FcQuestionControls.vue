<script setup lang="ts">
const emit = defineEmits(['previous', 'show' ,'next'])

interface Props {
  usePrevious?: boolean;
  useShow?: boolean;
  useNext?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  usePrevious: true,
  useShow: true,
  useNext: true,
})

// Actions
function onPrevious() {
  emit('previous')
}

function onShow(status: boolean): void {
  emit('show', status)
}

function onNext() {
  emit('next')
}
</script>

<template>
<div class="question-controls">
  <div v-if="!props.usePrevious"></div>
  <button
    v-show="props.usePrevious"
    type="button"
    class="btn-previous"
    @click="onPrevious">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
    <span>Previous</span>
  </button>
  <button
    v-if="!props.useShow"
    type="button"
    class="btn-show-answer"
    @click="onShow(true)">
    Show Answer
  </button>
  <button
      v-else
      type="button"
      class="btn-show-answer"
      @click="onShow(false)">
    Hide Answer
  </button>
  <button
    v-show="props.useNext"
    type="button"
    class="btn-next"
    @click="onNext">
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
</div>
</template>

<style scoped lang="scss">
.question-controls {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  height: 38px;
  background-color: #eeeeee;
  border-radius: 8px;

  button {
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border: none;
    appearance: none;
    cursor: pointer;

    &:hover {
      color: #1e88e5;
    }

    &:active {
      color: #1565c0;
    }

    svg {
      fill: currentColor;
      width: 24px;
      height: 24px;
    }
  }

  .btn-show-answer {

  }
}
</style>