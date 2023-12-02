<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Input from "./input.vue";
import { useApiStore } from "../store/api";
import { useMemeberStore } from "../store/auth";

const id = ref("");
const productId = ref("");
const username = ref("");
const roast = ref("");
const Origin = ref("");
const method = ref("");
const flavour = ref("");
const unit = ref("");
const price = ref("");
const count = ref("");
const apiStore = useApiStore();
const buttonMemberState = useMemeberStore();

const buttonAPI = async () => {
  await apiStore.fetchData(
    id.value,
    productId.value,
    username.value,
    roast.value,
    Origin.value,
    method.value,
    flavour.value,
    unit.value,
    price.value,
    count.value
  );

  if (!id.value) {
    id.value = "使用者必填";
  } else {
    id.value = "";
  }

  if (!productId.value) {
    productId.value = "順序必填";
  } else {
    productId.value = "";
  }

  if (!username.value) {
    username.value = "產品必填";
  } else {
    username.value = "";
  }

  if (!roast.value) {
    roast.value = "烘培度必填";
  } else {
    roast.value = "";
  }

  if (!Origin.value) {
    Origin.value = "產地必填";
  } else {
    Origin.value = "";
  }

  if (!method.value) {
    method.value = "咖啡豆處理必填";
  } else {
    method.value = "";
  }

  if (!flavour.value) {
    flavour.value = "特色必填";
  } else {
    flavour.value = "";
  }

  if (!unit.value) {
    unit.value = "單位必填";
  } else {
    unit.value = "";
  }

  if (!price.value) {
    price.value = "金額必填";
  } else {
    price.value = "";
  }

  if (!count.value) {
    count.value = "數量必填";
  } else {
    count.value = "";
  }

  window.location.reload()
};
</script>

<template>
  <div
    class="fixed w-full h-full justify-center items-center flex bg-black opacity-40"
  ></div>
  <div class="absolute w-full h-full flex justify-center mt-20">
    <div class="w-[350px] h-[700px] bg-white rounded-lg">
      <button
        class="absolute -top-8 "
        @click="buttonMemberState.closeModel()"
      >
        <img class="w-8" src="../../public/close.png" alt="" />
      </button>
      <h1 class="text-2xl w-full flex justify-center my-4">咖啡資料輸入</h1>
      <form @submit.prevent="submitForm">
        <div class="flex my-2">
          <label class="w-full text-center mx-4">產品ID</label>
          <Input
            class="mx-4"
            :value="id"
            @input="id = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="id">{{ id }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">順序</p>
          <Input
            class="mx-4"
            :value="productId"
            @input="productId = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="productId">
            {{ productId }}
          </p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">產品</p>
          <Input
            class="mx-4"
            :value="username"
            @input="username = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="username">{{ username }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">烘培度</p>
          <Input
            class="mx-4"
            :value="roast"
            @input="roast = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="roast">{{ roast }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">產地</p>
          <Input
            class="mx-4"
            :value="Origin"
            @input="Origin = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="Origin">{{ Origin }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">咖啡豆處理</p>
          <Input
            class="mx-4"
            :value="method"
            @input="method = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="method">{{ method }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">特色</p>
          <Input
            class="mx-4"
            :value="flavour"
            @input="flavour = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="flavour">{{ flavour }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">單位</p>
          <Input
            class="mx-4"
            :value="unit"
            @input="unit = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="unit">{{ unit }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">金額</p>
          <Input
            class="mx-4"
            :value="price"
            @input="price = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="price">{{ price }}</p>
        </div>
        <div class="flex my-2">
          <p class="w-full text-center mx-4">數量</p>
          <Input
            class="mx-4"
            :value="count"
            @input="count = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-xs text-red-700 pl-40" v-if="count">{{ count }}</p>
        </div>
      </form>
      <div class="w-full flex justify-center">
        <button
          class="m-4 bg-slate-500 w-24 h-10 rounded-md"
          @click="buttonAPI"
        >
          <p class="font-bold">按鈕</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
