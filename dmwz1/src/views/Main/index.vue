<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <indexHeadVue />
      </el-header>
      <el-main>
        <Breadcrumb></Breadcrumb>
        <RouterView />
      </el-main>
      <el-footer>
        <indexBottom></indexBottom>
      </el-footer>
    </el-container>
  </div>
</template>
<script setup>
import indexHeadVue from './components/indexHead.vue';
import indexBottom from './components/indexBottom.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import er from '../../components/er.vue';
import { ref } from 'vue';
const count = ref(0);
const load = () => {
  count.value += 2;
};
</script>
<style scoped>
.el-header {
  padding: 0;
  margin: 0;
}

.el-main {
  margin: 0;
  min-height: 700px;
  padding: 0;
  background: #f0f0f0;
}

.el-footer {
  padding: 0;
  margin: 0;
}
</style>
