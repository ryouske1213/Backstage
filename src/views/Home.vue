<script setup>
import {useMemeberStore} from '../store/auth'

let isberState = useMemeberStore()

const isState = () => {
    console.log(isberState.showState())
}

</script>
<template>
  <div class="w-full h-full">
    <div @click="isState">
        
      123456555
    </div>
  </div>
</template>

<style></style>
