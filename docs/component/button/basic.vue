<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
<template>
  <el-row class="mb-4">
    <zz-button>Default</zz-button>
    <zz-button type="primary">Primary</zz-button>
    <zz-button type="success">Success</zz-button>
    <zz-button type="info">Info</zz-button>
    <zz-button type="warning">Warning</zz-button>
    <zz-button type="danger">Danger</zz-button>
  </el-row>

  <el-row class="mb-4">
    <zz-button plain>Plain</zz-button>
    <zz-button type="primary" plain>Primary</zz-button>
    <zz-button type="success" plain>Success</zz-button>
    <zz-button type="info" plain>Info</zz-button>
    <zz-button type="warning" plain>Warning</zz-button>
    <zz-button type="danger" plain>Danger</zz-button>
  </el-row>

  <el-row class="mb-4">
    <zz-button round>Round</zz-button>
    <zz-button type="primary" round>Primary</zz-button>
    <zz-button type="success" round>Success</zz-button>
    <zz-button type="info" round>Info</zz-button>
    <zz-button type="warning" round>Warning</zz-button>
    <zz-button type="danger" round>Danger</zz-button>
  </el-row>
  <el-row>
    <zz-button :icon="Search" circle>
      <zz-icon> <Search /> </zz-icon>
    </zz-button>
    <zz-button type="primary" :icon="Edit" circle />
    <zz-button type="success" :icon="Check" circle />
    <zz-button type="info" :icon="Message" circle />
    <zz-button type="warning" :icon="Star" circle />
    <zz-button type="danger" :icon="Delete" circle />
  </el-row>
</template>
<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 16px;
}
</style>
