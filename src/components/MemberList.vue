<script setup>
import { useMemeberStore } from '../store/auth'
import { useUserApi } from '../store/User'
import axios from 'axios'
import { ref, onMounted } from 'vue';

const buttonMemberState = useMemeberStore()
const buttonUserAPI = useUserApi()
const showUserData = ref()
const username = ref('coo')
const password = ref('zxczxc')

onMounted(async () => {
  showUserData.value = await buttonUserAPI.ShowUserData()
})

const aaa = async () => {
  const postData = {
    username: username.value,
    password: password.value
  }
  await buttonUserAPI.isUser(postData)
}

</script>
  
<template>
  <div class="w-full">
    <div class="w-full">
      <button class="w-20 m-4 py-2 bg-slate-400 rounded-lg" @click="buttonMemberState.showModel()">添加</button>
    </div>
    <div class="mx-4">
      <table>
        <thead>
          <tr class="w-full">
            <th class="w-40 p-2 border border-gray-400">序號ID</th>
            <th class="w-40 p-2 border border-gray-400">會員帳號</th>
            <th class="w-40 p-2 border border-gray-400">會員密碼</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in showUserData" :key="item._id">
            <td class="border p-2 border-gray-400">{{ item._id }}</td>
            <td class="border p-2 border-gray-400">{{item.username}}</td>
            <td class="border p-2 border-gray-400">{{item.password}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
