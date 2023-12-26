<template>
  <div class="test">
    <!-- 左边二维码区域 -->
    <er></er>
    <right></right>
    <!-- 轮播图区域  -->
    <!-- #region -->
    <div class="Banner">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in BannerA" :key="item">
          <img :src="item.img" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播图下面的图片区域 -->
    <div class="BannerImg">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in BannerB" :key="item.id" @click.prevent="BannerImg(item.id)">
          <a href=""> <img :src="item.img" /></a>
        </el-col>
      </el-row>
    </div>
    <!-- #endregion -->
    <!-- #region -->
    <!-- 推荐画师区域 -->
    <div class="BannerNav">
      <div class="u-tab">
        <div class="u-tab-item u-tab-active"><a href="">推荐画师</a></div>
        <div class="u-tab-item"><a href="">最新入驻</a></div>
      </div>
      <div
        class="BannerA"
        v-for="(item, index) in BannerFont"
        :key="index"
        @click.prevent="testaa(item)"
      >
        <a href="">{{ item }}</a>
      </div>
    </div>
    <!-- #endregion -->
    <!-- #region -->
    <!-- 推荐画师图片区域 -->
    <!-- <div class="tjhs">
      <div class="tjhs-item" v-for="item in  BannerC ">
        <a href="https://www.huashi6.com/painter/25526">
          <img :src="item.img" alt="">
          <span>{{ item.name }}</span>
        </a>
      </div>
    </div> -->
    <!-- #endregion -->
    <!-- #region -->
    <div class="Banner-card">
      <div class="demo-image">
        <div
          v-for="fit in imgS"
          :key="fit.name"
          class="block"
          @click="imgFn(fit.image_name, fit.image_path, fit.image_id)"
        >
          <el-image :src="fit.image_path" />
          <div class="img-font">
            <span class="demonstration">{{ fit.image_name }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->
  </div>
</template>

<script setup>
import { onMounted, ref, toRaw, watch } from 'vue';
import { useRouter } from 'vue-router';
import er from '../components/er';
import VueLazyload from 'vue-lazyload';
import { Plus } from '@element-plus/icons-vue';
const router = useRouter();
import right from '@/components/rigth.vue';
import { SectionsData } from '@/store/section';
import { imgSearchApi } from '@/api/img';
// import { ElMessage } from 'element-plus'
// import { ArrowDown, ChatDotRound, Phone, Promotion } from '@element-plus/icons-vue'
// const handleCommand = (command) => {
//   ElMessage(`click on item ${command}`)
// }

// 最新入驻模块
const BannerFont = ref(['动漫头像', 'pixiv', '动漫壁纸', '头像女', '二次元', '动漫壁纸', '头像男']);
// 点击查询按钮
const testaa = (data) => {
  // console.log();
  router.push({ path: 'Search', query: { data } });
};
const BannerA = ref([
  { id: '1', name: 'a', img: require('../assets/lunbotu1.jpg') },
  { id: '2', name: 'a', img: require('../assets/lunbotu2.jpg') },
  { id: '3', name: 'a', img: require('../assets/lunbotu3.jpg') },
  { id: '4', name: 'a', img: require('../assets/lunbotu4.jpg') }
]);

const sections = SectionsData();
const routepath2 = ref('Section/');
const BannerB = ref([
  { id: '1', name: 'a', img: require('../assets/5.png') },
  { id: '2', name: 'a', img: require('../assets/6.png') },
  { id: '3', name: 'a', img: require('../assets/7.png') },
  { id: '4', name: 'a', img: require('../assets/8.png') }
]);
const BannerImg = (id) => {
  // console.log(sections);
  // console.log(id);
  sections.indexFn(id);
  router.push({ path: routepath2.value + id, query: { id: id } });
};

// 主要图片展示区域
const routepath4 = ref('draw/');
import { imgAllApi, ImgAllApi } from '@/api/img';
let imgS = ref({});

const imgAll = async () => {
  let res = await ImgAllApi();
  imgS.value = res.data;
  // 主页面图片
  // imgS.value = res.data.img;
};
const imgFn = (imgsrc, imgpath, image_id) => {
  router.push({ path: `/draw/${imgsrc}`, query: { name: imgsrc, path: imgpath, id: image_id } });
};
onMounted(() => imgAll());

const test = ref('666');
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

/* .right {
  display: flex;
  width: 90px;
  flex-wrap: wrap;
  position: absolute;
  margin-left: 1250px;
  margin-top: 250px;
 border: 1px solid red;
  text-align: center;
}

.right-div img {
  width: 36px;
  height: 37px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 10px;

}

.right-div p {
  margin: 5px;
}

.right-div {
  width: 90px;
  height: 81px;
  border: 1px solid #606266;

}

.right-div-son {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 150px;
}  */

.test {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: auto;
}

/* #region */
.Banner-card {
  width: 1200px;
  background: var(--background);
}
.Banner-card .demo-image {
  width: 1200px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.Banner-card .demo-image .block {
  height: 100%;
  text-align: center;
  width: calc((100% - 100px) / 5);
  vertical-align: top;
  margin: 10px;
}
.Banner-card .demo-image .block .el-image {
  width: 100%;
  height: 200px;
}
.demo-image .block .el-image img {
  width: 100%;
  height: 100%;
}
.img-font {
  width: 100%;
  height: 100%;
  margin: 10px 0;
  overflow: hidden;
}
/* .demo-image .block:last-child {
  border-right: none;
} */

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 300px;
  height: 250px;
  display: block;
}

/* 轮播图区域 */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 轮播图下面的图片区域 */
.Banner {
  width: 1200px;
  margin: auto;
  padding: auto;
}

.Banner img {
  width: 600px;
  height: 200px;
}

.BannerImg {
  width: 1200px;
  padding-top: 20px;
  margin: auto;
  align-items: center;
  justify-content: center;
}

.BannerImg img {
  width: 285px;
  height: 124px;
  margin: auto;
}

/* 推荐画师区域 */
.BannerNav {
  display: flex;
  width: 1200px;
  /* padding-top: 50px; */

  margin: 15px 0;
  background: var(--background);
}

.u-tab {
  display: flex;
  width: 200px;
}

.u-tab span {
  align-items: center;
}

.u-tab-item {
  display: flex;
  border-radius: 4px;
  width: 105px;
  height: 36px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-right: 10px;
}

.u-tab .u-tab-active {
  background: yellow;
  font-weight: 600;
}

.BannerA {
  display: flex;
  align-items: center;
  margin-left: 20px;
  /* width: 600px; */
  height: 36px;
  font-size: 12px;
  /* border: 1px solid red; */
  /* margin-left: 20px; */
}

/* 推荐画师图片区域 */
.tjhs {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  position: relative;
}

.tjhs-item {
  display: flex;
  width: 150px;
  height: 140px;
  justify-content: center;
  align-items: center;
}

.tjhs-item img {
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  border-radius: 50%;
}

.tjhs-item span {
  position: absolute;
  display: flex;
}

/* #endregion */
/* .left {
  position: absolute;
  width: 100px;
  margin-top: 300px;
  margin-left: -130px;
  border: 1px solid red;
  min-width: 100px;
}

.left-img {
  display: flex;
  flex-wrap: wrap;
}
.left-img :not(:first-child) {
  margin-top: 10px;
  padding: 10px;
} */
</style>
