<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Input from "./input.vue";
import { useApiStore } from "../store/api";

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
  <div class="fixed inset-0 w-full h-full justify-center items-center flex">
    <div class="absolute w-full h-full flex justify-center items-center">
      <div class="w-[500px] h-[300px] bg-neutral-400">
        <div class="w-full flex">
          <p class="text-center">產品ID</p>
          <Input
            class="flex justify-center"
            :value="id"
            @input="id = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">順序</p>
          <Input
            class="flex justify-center"
            :value="productId"
            @input="productId = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">產品名稱</p>
          <Input
            class="flex justify-center"
            :value="name"
            @input="name = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">烘培度</p>
          <Input
            class="flex justify-center"
            :value="roast"
            @input="roast = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">產地</p>
          <Input
            class="flex justify-center"
            :value="Origin"
            @input="Origin = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">咖啡豆處理</p>
          <Input
            class="flex justify-center"
            :value="method"
            @input="method = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">產品特色</p>
          <Input
            class="flex justify-center"
            :value="flavour"
            @input="flavour = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">單位</p>
          <Input
            class="flex justify-center"
            :value="unit"
            @input="unit = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">金額</p>
          <Input
            class="flex justify-center"
            :value="price"
            @input="price = $event.target.value"
          />
        </div>
        <div class="w-full flex">
          <p class="text-center">數量</p>
          <Input
            class="flex justify-center"
            :value="count"
            @input="count = $event.target.value"
          />
        </div>
        <button @click="buttonAPI">按鈕</button>
      </div>
    </div>
  </div>
</template>

<style></style>
