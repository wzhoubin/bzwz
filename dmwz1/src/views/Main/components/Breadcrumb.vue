<template>
  <div class="hot-Head">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>当前位置:</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }" v-if="route.path != '/home'"> 首页 </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: route.path }">
        {{ route.name }}
      </el-breadcrumb-item>
      <!-- <el-breadcrumb-item> {{ route.query.name }}</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
</script>

<style scoped>
.hot-Head {
  width: 1200px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}

.showBread {
  display: none;
}
</style>
