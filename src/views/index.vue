<script setup>
import sidebar from "../components/sidebar.vue";
import Header from "../components/header.vue";
</script>
<template>
  <div class="min-w-screen h-screen flex">
    <sidebar />
    <div class="w-full h-full">
      <Header />
      <div class="w-[11/12] xl:w-full h-4/5 bg-slate-300">
        <div class="ml-8 h-16 flex items-center">
          <p>主頁</p>
        </div>
        <div class="w-full h-4/5 px-8">
          <div class="w-full h-full bg-white">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
