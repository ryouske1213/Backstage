<script setup>
import { ref, reactive, onMounted, watch, computed } from "vue";
import axios from "axios";
import Input from "./input.vue";
import { useApiStore } from "../store/api";
import { useMemeberStore } from "../store/auth";

const props = defineProps(["newPatch"])
console.log(props.newPatch)

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
const buttonShowCoffeeData = ref();
const inputValue = ref([]);
// const inputValue = reactive({
//   productId: productId.value,
//   username: username.value,
//   roast: roast.value,
//   Origin: Origin.value,
//   method: method.value,
//   flavour: flavour.value,
//   unit: unit.value,
//   price: price.value,
//   count: count.value,
// });

// console.log(inputValue.productId);

onMounted(async () => {
  buttonShowCoffeeData.value = await apiStore.ShowCoffeeData();
});

const buttonReviseAPI = async () => {
  const { data } = await axios.patch(
    `http://localhost:8080/update/${id.value}`,
    {
      productId: productId.value,
      username: username.value,
      roast: roast.value,
      Origin: Origin.value,
      method: method.value,
      flavour: flavour.value,
      unit: unit.value,
      price: price.value,
      count: count.value,
    }
  );
  console.log(data);
  console.log(inputValue.value)
  return data;
};

watch(
  [productId, username, roast, Origin, method, flavour, unit, price, count],
  (newNum, oldNum) => {
    console.log()
  }
);
</script>

<template>
  <div
    class="fixed w-full h-full inset-0 justify-center items-center flex bg-black opacity-40"
  ></div>
  <div class="absolute inset-0 w-full h-full flex justify-center mt-20">
    <div class="w-[350px] h-[600px] bg-white rounded-lg">
      <button
        class="absolute -top-8"
        @click="buttonMemberState.ReviseCloseModel()"
      >
        <img class="w-8" src="../../public/close.png" alt="" />
      </button>
      <h1 class="text-2xl w-full flex justify-center my-4">咖啡資料更改</h1>

      <div class="flex my-2">
        <label class="w-full text-center mx-4">序號ID</label>
        <Input
          class="mx-4"
          :id="id"
          :value="id"
          @input="id = $event.target.value"
        />
      </div>
      <div class="flex my-2">
        <label class="w-full text-center mx-4">產品ID</label>
        <Input
          class="mx-4"
          :id="id"
          :value="id"
          @input="id = $event.target.value"
          v-model="id"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">順序</p>
        <Input
          class="mx-4"
          :value="productId"
          @input="productId = $event.target.value"
          v-model="productId"
        />
      </div>
      <div class="w-full flex"></div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">產品</p>
        <Input
          class="mx-4"
          :value="username"
          @input="username = $event.target.value"
          v-model="username"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">烘培度</p>
        <Input
          class="mx-4"
          :value="roast"
          @input="roast = $event.target.value"
          v-model="roast"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">產地</p>
        <Input
          class="mx-4"
          :value="Origin"
          @input="Origin = $event.target.value"
          v-model="Origin"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">咖啡豆處理</p>
        <Input
          class="mx-4"
          :value="method"
          @input="method = $event.target.value"
          v-model="method"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">特色</p>
        <Input
          class="mx-4"
          :value="flavour"
          @input="flavour = $event.target.value"
          v-model="flavour"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">單位</p>
        <Input
          class="mx-4"
          :value="unit"
          @input="unit = $event.target.value"
          v-model="unit"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">金額</p>
        <Input
          class="mx-4"
          :value="price"
          @input="price = $event.target.value"
          v-model="price"
        />
      </div>
      <div class="flex my-2">
        <p class="w-full text-center mx-4">數量</p>
        <Input
          class="mx-4"
          :value="count"
          @input="count = $event.target.value"
          v-model="count"
        />
      </div>

      <div class="w-full flex justify-center">
        <button
          class="m-4 bg-slate-500 w-24 h-10 rounded-md"
          @click="buttonReviseAPI"
        >
          <p class="font-bold">按鈕</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
