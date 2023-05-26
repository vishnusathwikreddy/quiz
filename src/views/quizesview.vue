<script setup>
import { ref,watch } from "vue";
import q from "../data/quiz.json";
import Card from "../components/card.vue"
import { RouterLink } from "vue-router";
const quizes=ref(q)
const search=ref("")
watch(search,()=>{
  quizes.value= q.filter(quiz=>quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>
<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search Quizes"/>
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>
<style scoped>

header{
  margin-top:30px;
  margin-bottom:10px;
  display:flex;
  flex-direction: row;
  align-items: center;
}
header h1{
  font-weight: bold;
  margin-right:20px;
}
header input{
  height:25px;
  border-radius: 5px;
  padding:10px;
  background-color: #f0f3f5;
  border: none;
}

.options-container{
  display:flex;
  flex-wrap:wrap;
}

</style>