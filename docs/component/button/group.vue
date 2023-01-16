<template>
  <zz-button-group>
    <zz-button type="primary" :icon="ArrowLeft">Previous Page</zz-button>
    <zz-button type="primary">
      Next Page<zz-icon class="el-icon--right"><ArrowRight /></zz-icon>
    </zz-button>
  </zz-button-group>

  <zz-button-group class="ml-4">
    <zz-button type="primary" :icon="Edit" />
    <zz-button type="primary" :icon="Share" />
    <zz-button type="primary" :icon="Delete" />
  </zz-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
</script>
