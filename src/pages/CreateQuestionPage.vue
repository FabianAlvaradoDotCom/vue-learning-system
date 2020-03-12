<template>
  <div>
    Create a new question
    <form>
      <label for="Question">
        Question
        <input type="text" v-model="question_text"/>
      </label>
      <br />
      <button type="button" @click="submitQuestion">Submit new question</button>
    </form>
    <p>{{ question_text }}</p>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;
export default {
  methods: {
    submitQuestion: function(e) {
      e.preventDefault();
      this.$http
        .post('http://localhost:5000/create-question', {origin: "app", question: this.question_text})
    }
  },
  data() {
    return {
      propi: 0,
      question_text: ""
    };
  }
};
</script>

<style scoped>
</style>