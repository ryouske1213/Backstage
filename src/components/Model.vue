<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Input from "./input.vue";
import { useApiStore } from "../store/api";
import { useMemeberStore } from '../store/auth'

const id = ref("");
const productId = ref("");
const name = ref("");
const roast = ref("");
const Origin = ref("");
const method = ref("");
const flavour = ref("");
const unit = ref("");
const price = ref("");
const count = ref("");
const apiStore = useApiStore();
const buttonMemberState = useMemeberStore()

const buttonAPI = async () => {
  await apiStore.fetchData(
    id.value,
    productId.value,
    name.value,
    roast.value,
    Origin.value,
    method.value,
    flavour.value,
    unit.value,
    price.value,
    count.value
  );
};
</script>

<template>
  <div
    class="fixed w-full h-full justify-center items-center flex bg-black opacity-40"
  ></div>
  <div class="absolute w-full h-full flex justify-center items-center">
    <div class="w-[350px] h-[500px] bg-white rounded-lg">
      <button class="absolute top-[190px] left-[35%]" @click="buttonMemberState.closeModel( )">
        <img class="w-8" src="../../public/close.png" alt="">
      </button>
      <h1 class="text-2xl w-full flex justify-center my-4">咖啡資料輸入</h1>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">產品ID</p>
        <Input class="mx-4" :value="id" @input="id = $event.target.value" />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">順序</p>
        <Input
          class="mx-4"
          :value="productId"
          @input="productId = $event.target.value"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">產品</p>
        <Input class="mx-4" :value="name" @input="name = $event.target.value" />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">烘培度</p>
        <Input
          class="mx-4"
          :value="roast"
          @input="roast = $event.target.value"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">產地</p>
        <Input
          class="mx-4"
          :value="Origin"
          @input="Origin = $event.target.value"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">咖啡豆處理</p>
        <Input
          class="mx-4"
          :value="method"
          @input="method = $event.target.value"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">特色</p>
        <Input
          class="mx-4"
          :value="flavour"
          @input="flavour = $event.target.value"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">單位</p>
        <Input class="mx-4" :value="unit" @input="unit = $event.target.value" />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">金額</p>
        <Input
          class="mx-4"
          :value="price"
          @input="price = $event.target.value"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">數量</p>
        <Input
          class="mx-4"
          :value="count"
          @input="count = $event.target.value"
        />
      </div>
      <div class="w-full flex justify-center">
        <button class="m-4 bg-slate-500 w-24 h-10 rounded-md" @click="buttonAPI">
          <p class="font-bold">按鈕</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
