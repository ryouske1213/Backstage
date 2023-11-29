<script setup>
import { useMemeberStore } from '../store/auth'

const buttonMemberState = useMemeberStore()



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
            <th class="w-40 p-2 border border-gray-400">姓名</th>
            <th class="w-40 p-2 border border-gray-400">年齡</th>
            <th class="w-40 p-2 border border-gray-400">城市</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2 border-gray-400">John Doe</td>
            <td class="border p-2 border-gray-400">25</td>
            <td class="border p-2 border-gray-400">New York</td>
          </tr>
          <tr>
            <td class="border p-2 border-gray-400">Jane Doe</td>
            <td class="border p-2 border-gray-400">30</td>
            <td class="border p-2 border-gray-400">Los Angeles</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
