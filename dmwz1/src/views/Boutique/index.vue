<template>
  <div class="Boutique">
    <div class="Banner">
      <img src="../../assets/3.jpg" alt="" />
    </div>
    <div class="Banner-size">
      <div class="Banner-size-siez">
        <a
          href=""
          v-for="(item, index) of a"
          :key="index"
          :class="{ active: isActive === item }"
          @click.prevent="changeClass(item)"
        >
          {{ item }}
        </a>
      </div>
    </div>
    <div class="BannerNav">
      <div class="u-tab">
        <div class="u-tab-item u-tab-active"><a href="">推荐画师</a></div>
        <div class="u-tab-item"><a href="">最新入驻</a></div>
      </div>
    </div>
    <div class="ImgAll">
      <div class="ImgAll-fa">
        <template v-if="Active">
          <div class="ImgAll-son" v-for="item in BoutiqueImg" :key="item.name">
            <img :src="item.path" />
          </div>
        </template>
        <template v-if="!Active">
          <div class="ImgAll-son" v-for="item in imgActive" :key="item.name">
            <img :src="item.path" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { BoutiqueApi, PostBoutiqueApi } from '@/api/img';
const a = ref(['全部', '超清大图', '微信红包封面', '动态壁纸']);
// 显示全部图片或者超清图片
const Active = ref(true);
// 被点击后的状态
let isActive = ref('全部');
// 全部图片
const BoutiqueImg = ref();
// 获取全部图片
const boutiqueImgFn = async () => {
  const res = await BoutiqueApi();
  BoutiqueImg.value = res.data.img;
  Active.value = true;
};
// 被点击后的图片
const imgActive = ref();
// 获取被点击后的图片
const changeClass = async (name) => {
  isActive.value = name;
  console.log(name);
  if (name == '全部') {
    boutiqueImgFn();
  } else {
    const res = await PostBoutiqueApi(name);
    imgActive.value = res.data.img;
    // console.log(imgActive.value);
    Active.value = false;
  }
};
onMounted(() => boutiqueImgFn());
// console.log(imgAll.value)
</script>

<style scoped>
a {
  list-style: none;
  text-decoration: none;
  color: inherit;
}

.Boutique {
  width: 1200px;
  margin: auto;
}

.Banner img {
  height: 200px;
  width: 100%;
}

.Banner-size {
  width: auto;
  height: auto;
  margin: 20px 0;
  display: flex;
  justify-content: start;
  /* border: 1px solid red; */
  font-size: 16px;
  /* position: relative; */
}

.Banner-size a:not(:first-child) {
  margin-left: 20px;
}

.Banner-size-siez a::after {
  content: '';
  /* display: flex; */
  /* display: inline-block;
  bottom: -7px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #feab00;
  border-radius: 1.5px;
  margin-top: 10px;
  position: absolute; */
}

.active {
  position: relative;
  color: #feab00;
  font-size: 16px;
}

.BannerNav {
  display: flex;
  width: 1200px;
  /* padding-top: 20px; */
  margin: auto;
}

.Banner-size-siez a {
  font-size: 16px;
  /* color: #333; */
}

.u-tab-item a {
  color: #333;
}

.u-tab {
  display: flex;
  width: 200px;
  font-weight: 600;
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

.ImgAll {
  width: 1200px;
  margin: auto;
  display: flex;
}

.ImgAll-fa {
  display: flex;
  width: 1200px;
  flex-wrap: wrap;
}

.ImgAll-son {
  display: flex;
  width: calc((100% - 80px) / 4);
  height: 300px;
  margin: 10px;
  position: relative;
  overflow: hidden;
}
.ImgAll-son img {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.5s ease-out;
}
.ImgAll-son:hover img {
  transform: scale(1.3);
}
/* .ImgAll-son :not(:first-child) {
  width: 300px;
  height: 300px;
} */

/* .a {
  position: absolute;
  width: 100px;
  height: 20px;
} */
</style>
