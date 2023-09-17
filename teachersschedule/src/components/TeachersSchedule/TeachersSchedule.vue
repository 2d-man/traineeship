<script setup lang="ts">
import VButton from './components/VButton.vue'
import VInput from './components/VInput.vue'
import VSelect from './components/VSelect.vue'

function onButtonClick() {
  console.log('клик');
}

// export interface Props {
//   btn : string;
//   parallels : string;
// }

</script>

<template>
  <div class="w-full block">
    <div class="flex flex-col min-w-1/3">
      <div class="form-description ">
        <b>Класс:</b>
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VButton @click="onButtonClick" v-for="i in 11" :key="i" :label="i" />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VSelect />
      </div>

      <div class="max-w-full flex grow flex-wrap justify-center mb-5">
        <VInput />
      </div>

    </div>
  </div>
</template>

<style scoped></style>
