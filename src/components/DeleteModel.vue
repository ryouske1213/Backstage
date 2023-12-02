<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useMemeberStore } from '../store/auth'
import axios from "axios";
import Input from "./input.vue";

const _id = ref("")
const buttonMemberState = useMemeberStore()

const buttonDeleteAPI = async () => {
    const { data } = await axios.delete(
    `http://localhost:8080/api/delete/${_id.value}`,
    {
      _id: _id.value,
    }
  );
  window.location.reload()
  return data
}
</script>

<template>
  <div
    class="fixed w-full h-full inset-0 justify-center items-center flex bg-black opacity-40"
  ></div>
  <div class="absolute inset-0 w-full h-full flex justify-center mt-20">
    <div class="w-[300px] h-40 bg-white rounded-lg">
      <button
        class="absolute -top-8"
        @click="buttonMemberState.DeleteCloseModel()"
      >
        <img class="w-8" src="../../public/close.png" alt="" />
      </button>
      <h1 class="text-2xl w-full flex justify-center my-4">咖啡資料刪除</h1>

      <div class="flex my-2">
        <label class="w-full text-center mx-4">序號ID</label>
        <Input
          class="mx-4"
          :id="_id"
          :value="_id"
          @input="_id = $event.target.value"
          v-model="_id"
        />
      </div>

      <div class="w-full flex justify-center">
        <button
          class="m-4 bg-slate-500 w-24 h-10 rounded-md"
          @click="buttonDeleteAPI"
        >
          <p class="font-bold">按鈕</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
