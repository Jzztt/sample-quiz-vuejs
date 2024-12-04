import axios from 'axios'
import { defineStore } from 'pinia'
const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [
      // {
      //   id: 1,
      //   question: 'What is Vue?',
      //   answer: 0,
      //   options: ['A framework', 'A library', 'A type of hat'],
      //   selected: null,
      // },
      // {
      //   id: 2,
      //   question: 'What is Vuex used for?',
      //   answer: 2,
      //   options: ['Eating a delicious snack', 'Viewing things', 'State management'],
      //   selected: null,
      // },
      // {
      //   id: 3,
      //   question: 'What is Vue Router?',
      //   answer: 1,
      //   options: ['An ice cream maker', 'A routing library for Vue', 'Burger sauce'],
      //   selected: null,
      // },
    ],
    quizCompleted: false,
    currentQuestion: 0,
  }),
  getters: {
    score: (state) => {
      let value = 0
      state.questions.map((question) => {
        if (question.selected === question.answer) {
          value++
        }
      })
      return value
    },
    quizScore(state) {
      state.questions.map((question) => {
        if (question.selected === question.answer) {
          state.score++
        }
      })
      return state.score
    },
  },
  actions: {
    async fetchQuestions() {
      try {
        const response = await axios.get('http://localhost:3000/questions')
        this.questions = response.data
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    },
    async saveSelectedAnswer() {
      try {
        const question = this.questions[this.currentQuestion]
        await axios.patch(`http://localhost:3000/questions/${question.id}`, {
          selected: question.selected,
        })
      } catch (error) {
        console.error('Error saving selected answer:', error)
      }
    },
    async nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
        return
      }
      this.quizCompleted = true
    },
    setSelected(index) {
      this.questions[this.currentQuestion].selected = index
      this.saveSelectedAnswer()
    },
    resetQuiz() {
      this.questions.forEach((question) => {
        question.selected = null
      })
      this.currentQuestion = 0
      this.quizCompleted = false
    },
  },
})

export default useQuizStore
