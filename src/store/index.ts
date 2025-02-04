import { defineStore } from 'pinia'
import { computed, ref } from "vue"

import type { Question } from "../types"
import { QUESTIONS } from "../constants";

export const useAppStore = defineStore('appStore', () => {
  // State
  const questions = ref<Question[]>(QUESTIONS)
  const currentQuestion = ref<number>(0)
  const showAnswer = ref<number|null>(false)

  // Getters
  const isFirstQuestion = computed<boolean>(() => {
    return currentQuestion.value === 0
  })

  const isLastQuestion = computed<boolean>(() => {
    return currentQuestion.value === questions.value.length - 1
  })

  // Mutations
  function setNextQuestion(): void {
    currentQuestion.value = currentQuestion.value + 1
  }

  function setPreviousQuestion(): void {
    currentQuestion.value = currentQuestion.value - 1
  }

  /**
   * @description To reveal the current answer for the current question
   * @param {number} value
   */
  function setShowAnswer(value: number|null): void {
    showAnswer.value = value
  }

  return {
    // State
    questions,
    currentQuestion,
    showAnswer,
    // getters
    isFirstQuestion,
    isLastQuestion,
    // Mutations
    setNextQuestion,
    setPreviousQuestion,
    setShowAnswer,
  }
})
