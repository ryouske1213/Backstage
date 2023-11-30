<script setup>
import MemberList from '../../components/MemberList.vue'
import sidebar from "../../components/sidebar.vue";
import Header from "../../components/header.vue";
import Model from '../../components/Model.vue'
import { useMemeberStore } from '../../store/auth.js'

const buttonMemberState = useMemeberStore()

</script>




<template>
    <Model v-if="buttonMemberState.model" />
   <div class="min-w-screen h-screen flex">
    <sidebar />
    <div class="w-full h-full">
      <Header />
      <div class="w-full h-4/5 bg-slate-300">
        <div class="ml-8 h-16 flex items-center">
          <p>主頁 / 會員</p>
        </div>
        <div class="w-full h-4/5 px-8">
          <div class="w-full h-full bg-white">
            <div>
              <MemberList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
