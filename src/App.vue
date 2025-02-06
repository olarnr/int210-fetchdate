<script setup>
  import {ref, computed, onBeforeMount} from "vue"
  import {getService} from "./functions/fetchService.js"
  const API_ROOT = import.meta.env.VITE_API_ROOT;
  const date = ref({});

onBeforeMount(async () => {
  let res = await getService(API_ROOT+"/api/date");
  date.value = res.body;
});
</script>


<template>

  <h1>INT210 Architecture, Integration, Deployment 2024</h1>
  <!-- <hr> -->
  <hr style="width: 80%; margin: .3rem auto; border: 1; border-top: 1px solid #e0e0e0;">
  <h2>Fetch date from API</h2>
  <br>
  <p v-if="date.humanReadable">{{ date.humanReadable }}</p>
  <p v-if="date.timeStamp">Timestamp: {{ date.timeStamp }}</p>
  <p v-if="date.error" style="color:crimson;">ERROR: {{ date.error }}</p>

</template>
