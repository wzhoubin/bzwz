<template>
  <div class="hot-Head">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">首页
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="`${route.path}`">
        {{ route.name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>ren</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
// import router from "@/router";
// import useRoute
const route = useRoute()
</script>

<style scoped>
.hot-Head {
  width: 1200px;
  margin: auto;
  margin-bottom: 10px;
}

.showBread {
  display: none;
}
</style>