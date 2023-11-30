<script setup>
import { useApiStore } from '../store/api'
import { useMemeberStore } from '../store/auth'
import { ref, onMounted } from 'vue'

const buttonAPI = useApiStore()
const buttonMemberState = useMemeberStore()
const useCoffeeData = ref([])

onMounted(async() => {
  useCoffeeData.value = await buttonAPI.ShowCoffeeData()
})

</script>

<template>
  <div class="w-full h-[600px] overflow-y-auto">
    <div class="w-full">
      <button class="w-20 m-4 py-2 bg-slate-400 rounded-lg" @click="buttonMemberState.showModel()">添加</button>
    </div>
    <div class="mx-4">
      <table>
        <thead>
          <tr class="w-full">
            <th class="w-40 p-2 border border-gray-400">產品ID</th>
            <th class="w-40 p-2 border border-gray-400">產品</th>
            <th class="w-40 p-2 border border-gray-400">烘培度</th>
            <th class="w-40 p-2 border border-gray-400">產地</th>
            <th class="w-40 p-2 border border-gray-400">咖啡豆處理</th>
            <th class="w-40 p-2 border border-gray-400">特色</th>
            <th class="w-40 p-2 border border-gray-400">數量</th>
            <th class="w-40 p-2 border border-gray-400">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in useCoffeeData" key="item.id">
            <td class="border p-2 border-gray-400">{{item.id}}</td>
            <td class="border p-2 border-gray-400">{{item.name}}</td>
            <td class="border p-2 border-gray-400">{{item.roast}}</td>
            <td class="border p-2 border-gray-400">{{item.Origin}}</td>
            <td class="border p-2 border-gray-400">{{item.method}}</td>
            <td class="border p-2 border-gray-400">{{item.flavour}}</td>
            <td class="border p-2 border-gray-400">{{item.count}}</td>
            <td class="border p-2 border-gray-400">{{item.price}}</td>
          </tr>
          <!-- <tr>
            <td class="border p-2 border-gray-400">Jane Doe</td>
            <td class="border p-2 border-gray-400">30</td>
            <td class="border p-2 border-gray-400">Los Angeles</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
