<template>
    <div>
        <h3>Question topics</h3>
        <span v-for="subject in subjects" :key="subject">{{ subject }}</span>
    </div> 
</template>

<script>

import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;

export default {
    data(){
        return{
            subjects:[]
        }
    },
    methods:{

    },
    created(){
        this.$http
            .get('http://localhost:5000/get-questions')
            .then( response => {
                this.subjects = [...response.data.message.map((element) => element.subject).filter((element, index, array) => element !== array[index -1])];
                console.log(this.subjects);
            })
    }
}
</script>
<style scoped>
*{
    color: red;
}
</style>

hpiPa559u0rd