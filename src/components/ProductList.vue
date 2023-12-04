<script setup>
import { useApiStore } from '../store/api'
import { useMemeberStore } from '../store/auth'
import { ref, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import ReviseModel from '../components/ReviseModel.vue'
import DeleteModel from '../components/DeleteModel.vue'

const buttonAPI = useApiStore()
const buttonMemberState = useMemeberStore()
const useCoffeeData = ref([])
let newPatch = reactive([])
let _id = ref()
// const forEachPatch = reactive()

onMounted(async() => {
  useCoffeeData.value = await buttonAPI.ShowCoffeeData()
})

const buttonPatch = (item) => {
  newPatch = item
  buttonMemberState.ReviseShowModel()
}
const buttonDelete = () => {
  buttonMemberState.DeleteShowModel()
}


</script>

<template>
  <ReviseModel v-if="buttonMemberState.ReviseModel" :newPatch="newPatch"/>
  <DeleteModel v-if="buttonMemberState.DeleteModel"/>
  <div class="xl:h-[550px] overflow-y-auto">
    <div class="lg:w-[1100px] h-[400px] xl:w-full overflow-x-auto">
      <div class="">
        <button class="w-20 m-4 py-2 bg-slate-400 rounded-lg" @click="buttonMemberState.showModel()">添加</button>
      </div>
      <div class="mx-4">
        <table>
          <thead>
            <tr class="w-full">
              <th class="w-40 p-2 border border-gray-400">產品序號</th>
              <th class="w-40 p-2 border border-gray-400">產品ID</th>
              <th class="w-40 p-2 border border-gray-400">名稱</th>
              <th class="w-40 p-2 border border-gray-400">烘培度</th>
              <th class="w-40 p-2 border border-gray-400">產地</th>
              <th class="w-40 p-2 border border-gray-400">咖啡豆處理</th>
              <th class="w-40 p-2 border border-gray-400">特色</th>
              <th class="w-40 p-2 border border-gray-400">單價</th>
              <th class="w-40 p-2 border border-gray-400">數量</th>
              <th class="w-40 p-2 border border-gray-400">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr class="w-full h-full" v-for="item in useCoffeeData" key="item.id">
              <td class="border p-2 border-gray-400">{{item._id}}</td>
              <td class="border p-2 border-gray-400">{{item.id}}</td>
              <td class="border p-2 border-gray-400">{{item.name}}</td>
              <td class="border p-2 border-gray-400">{{item.roast}}</td>
              <td class="border p-2 border-gray-400">{{item.Origin}}</td>
              <td class="border p-2 border-gray-400">{{item.method}}</td>
              <td class="border p-2 border-gray-400">{{item.flavour}}</td>
              <td class="border p-2 border-gray-400">{{item.unit}}</td>
              <td class="border p-2 border-gray-400">{{item.count}}</td>
              <td class="border p-2 border-gray-400">{{item.price}}</td>
              <td>
                <button class="w-20 m-2 py-2 bg-slate-400 rounded-lg" @click="buttonPatch(item)">修改</button>
                <button class="w-20 m-2 py-2 bg-slate-400 rounded-lg" @click="buttonDelete()">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
