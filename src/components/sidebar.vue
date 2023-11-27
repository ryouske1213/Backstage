<script setup>
import {useMemeberStore} from '../store/auth'

let isMemberStore = useMemeberStore()


</script>

<template>
  <div class="w-1/5 h-full">
    <div class="w-full h-full text-center font-bold">
      <div class="py-20">
        <h3 class="h-full text-2xl">平凡後台</h3>
      </div>
      <router-link to="/HomeMain">
        <div class="py-5">
          <p class="h-full text-2xl">會員</p>
        </div>
      </router-link>
      <router-link to="/product">
        <div class="py-5">
          <p class="h-full text-2xl">產品</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style></style>
