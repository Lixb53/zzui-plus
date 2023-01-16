<template>
  <div class="flex">
    <zz-button type="primary" :icon="Edit" />
    <zz-button type="primary" :icon="Share" />
    <zz-button type="primary" :icon="Delete" />
    <zz-button type="primary" :icon="Search">Search</zz-button>
    <zz-button type="primary">
      Upload<zz-icon class="el-icon--right"><Upload /></zz-icon>
    </zz-button>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
