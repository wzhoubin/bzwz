<template>
  <div class="Search-All">
    <div class="Search-One">
      <div
        v-if="imgall == ''"
        style="
          width: 1200px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        "
      >
        <el-empty :image-size="300" description="没有找到该内容，请重新输入" />
      </div>
      <div class="Search-one-son" v-for="(v, index) in imgall" :key="index">
        <img :src="v.path" />
        <p style="margin-top: 10px; margin-left: 5px">{{ v.name }}</p>
        <!-- <div class="Search-two">
          <img :src="Search.img" style="width: 40px; height: 40px; border-radius: 66%" alt="" />
          <span>{{ Search.name }}</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onmousedown, onMounted, watch, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import { imgSearchApi } from '@/api/img';
const route = useRoute();
const imgall = ref();
const imgSearch = async () => {
  const res = await imgSearchApi(route.query.data);
  imgall.value = res.data;
};
onMounted(() => imgSearch());
watch(route, (a, b) => {
  imgSearch();
});
</script>

<style>
.Search-All {
  width: 1200px;
  margin: auto;
}

.Search-One {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  /* justify-content: space-between; */
}

.Search-one-son {
  width: calc((100% - 100px) / 5);
  margin: 10px;
  height: 280px;
  /* border: 1px solid red; */
}
.Search-one-son img {
  width: 100%;
  height: 100%;
}

.Search-two {
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
  align-items: center;
}

.Search-two span {
  margin-left: 20px;
}
</style>
