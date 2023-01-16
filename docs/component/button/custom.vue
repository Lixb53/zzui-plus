<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div class="flex">
    <zz-button color="#626aef" :dark="isDark">Default</zz-button>
    <zz-button color="#626aef" :dark="isDark" plain>Plain</zz-button>

    <zz-button color="#626aef" :dark="isDark" disabled>Disabled</zz-button>
    <zz-button color="#626aef" :dark="isDark" disabled plain
      >Disabled Plain</zz-button
    >
  </div>
</template>
