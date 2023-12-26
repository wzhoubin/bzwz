<template>
  <div class="picture-all">
    <!-- <el-empty
      description="description"
      style="width: 1200px; margin: auto; min-height: 600px"
      v-if="shareImg"
    /> -->
    <div class="picture" :key="item.id" v-for="item in shareImg">
      <img :src="item.img_path" style="width: 280px; height: 200px" />
      <div class="picture-font">
        <p>{{ item.img_name }}</p>
      </div>
      <div class="picture-img">
        <!-- <a href=""> <img :src="item.img" style="width: 50px;height: 50px;border-radius: 60px;"></a>
        <a href="">{{ item.a }}</a> -->
        <!-- <p>{{ NewImg.createdata.share }}</p> -->
      </div>
    </div>
    <er></er>
  </div>
</template>

<script setup>
import '@/assets/picitue.css';
import er from '../../components/er.vue';
import { onMounted, ref, watch } from 'vue';
// import { CreateImgAll } from "@/store/create";
import { GetshareImgApi } from '@/api/img';
// const NewImg = CreateImgAll();
const shareImg = ref();
const GetshareImg = async () => {
  const res = await GetshareImgApi();
  shareImg.value = res.data;
};
onMounted(() => GetshareImg());
</script>

<style scoped>
.picture-font {
  text-align: center;
}
</style>
