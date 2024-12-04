<script setup>
// import { computed, ref } from 'vue';


// const questions = ref([
//   {
//     questions: 'What is Vue JS?',
//     answer: 1,
//     options: [
//       'A front end framework',
//       'A library',
//       'An ice cream maker',
//     ],
//     selected: null
//   },
//   {
//     question: 'What is pinia ?',
//     answer: 2,
//     options: [
//       'A state management library',
//       'A cheese selection',
//       'Vue JS',
//     ],
//     selected: null
//   },
//   {
//     question: 'What is Vue Router used for ?',
//     answer: 1,
//     options: [
//       'Walking in space',
//       'A routing library for Vue JS',
//       'Burger sauce',
//       'Quizzes'
//     ],
//     selected: null
//   }
// ])

// const quizCompleted = ref(false)
// const currentQuestion = ref(0)
// const score = computed(() => {
//   let value = 0
//   questions.value.map(question => {
//     if (question.selected == question.answer) {
//       value++
//     }
//   })
//   return value
// })

// const getCurrentQuestion = computed(() => {
//   let question = questions.value[currentQuestion.value]
//   question.index = currentQuestion.value
//   return question
// })

// const SetAnswer = event => {
//   questions.value[currentQuestion.value] = event.target.value
//   event.target.value = null
// }
// const NextQuestion = () => {
//   if (currentQuestion.value < questions.value.length - 1) {
//     currentQuestion.value++
//   } else {
//     quizCompleted.value = true
//   }
// }

</script>

<template>
  <main class="app">
    <RouterView></RouterView>
  </main>

</template>

<style scoped></style>
