<template>
  <div>
    Questions pool
    <table>
      <thead>
        <tr>
          <th>Col1</th>
          <th>Col2</th>
          <th>Col3</th>
          <th>Col4</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(question, index) in some_stuff" :key="question._id">
            <td>{{ index+1 }}</td>
          <td>{{ question.question}}</td>
          <td>{{ question.subject}}</td>
          <td>{{ question.question_topic}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";

Vue.prototype.$http = axios;
export default {
  data() {
    return {
      some_stuff: 0
    };
  },
  created() {
    this.$http.get("http://localhost:5000/get-questions").then(response => {
      console.log(response.data.message);
      this.some_stuff = [...response.data.message];
    });
  }
};
</script>