<template>
  <el-row>
    <zz-button size="large">Large</zz-button>
    <zz-button>Default</zz-button>
    <zz-button size="small">Small</zz-button>
    <zz-button size="large" :icon="Search">Search</zz-button>
    <zz-button :icon="Search">Search</zz-button>
    <zz-button size="small" :icon="Search">Search</zz-button>
  </el-row>
  <el-row class="my-4">
    <zz-button size="large" round>Large</zz-button>
    <zz-button round>Default</zz-button>
    <zz-button size="small" round>Small</zz-button>
    <zz-button size="large" :icon="Search" round>Search</zz-button>
    <zz-button :icon="Search" round>Search</zz-button>
    <zz-button size="small" :icon="Search" round>Search</zz-button>
  </el-row>
  <el-row>
    <zz-button :icon="Search" size="large" circle />
    <zz-button :icon="Search" circle />
    <zz-button :icon="Search" size="small" circle />
  </el-row>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
