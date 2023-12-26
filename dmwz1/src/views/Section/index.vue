<template>
  <div class="SectionAll">
    <div>
      <div class="Section-one" :key="index" v-for="(item, index) in SectionS.imgTemp1">
        <div class="Sectionone-img">
          <img :src="item.img" alt="" />
        </div>
        <div class="Sectionone-font">
          <p style="font-size: 15px; font-weight: 600; margin-right: 20px">{{ item.name }}</p>
          <p style="font-size: small; color: #999">{{ item.introduce }}</p>
        </div>
      </div>
      <div class="Section-two">
        <div class="Section-two-font">
          <p style="font-weight: 600; font-size: large">{{ SectionS.imgAll.label2 }}</p>
        </div>
        <div class="Section-three">
          <div class="Section-three-son" :key="index" v-for="(item, index) in SectionS.imgTemp3">
            <div class="Section-three-son-img">
              <img :src="item.img" />
            </div>
            <div class="Section-three-son-font">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="Section-two">
        <div class="Section-two-font">
          <p style="font-weight: 600; font-size: large">{{ SectionS.imgAll.label }}</p>
        </div>
        <div class="Section-two-imgandFont">
          <div class="Section-two-son" :key="index" v-for="(item, index) in SectionS.imgTemp2">
            <div class="Section-two-son-img">
              <img :src="item.img" />
            </div>
            <div class="Section-two-son-font">
              <p style="font-weight: 600; font-size: large">
                {{ item.name }}
              </p>
              <p class="line-limit">
                <a href="">{{ item.introduce }}</a>
              </p>
              <p>{{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { nextTick, onMounted, ref } from "vue";
import { SectionsData } from "@/store/section";
const router = useRouter();
const route = useRoute();
const SectionS = SectionsData();
// console.log(SectionS.imgTemp1)
// console.log(SectionS.erciyuan)
</script>

<style scoped>
.SectionAll {
  margin: auto;
  max-width: 1200px;
  display: flex;
  /* border: 1px solid red; */
}

.Section-one {
  width: 1200px;
  height: 300px;
  /* border: 1px solid red; */
}

.Sectionone-img {
  width: 1200px;
  height: 200px;
}

.Sectionone-img img {
  width: 1200px;
  height: 200px;
}

.Sectionone-font {
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  /* border: 10px red solid; */
}

.Section-two {
  display: flex;
  width: 1200px;
  margin: auto;
  flex-wrap: wrap;
}

.Section-two-font {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 1200px;
  height: 50px;
  flex-wrap: wrap;
  /* border: 5px solid red; */
}

.Section-two-imgandFont {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  /* border: 100xp solid red; */
}

.Section-two-son {
  display: flex;
  justify-content: start;
  width: 600px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px 0;
  /* border: 1px solid green; */
}

.Section-two-son-img {
  width: 210px;
  height: 140px;
  /* padding: 20px; */
  /* border: 1px solid red; */
}

.Section-two-son-img img {
  width: 210px;
  height: 140px;
  border-radius: 10px;
}

.Section-two-son-font {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 380px;
  height: 140px;
  justify-content: space-between;
  /* border: 1px solid red; */
}

.line-limit {
  /* width: 350px; */
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  /* border: 1px solid red; */
  /* flex-wrap: wrap; */
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 20px;
}

.Section-three {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.Section-three-son {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 220px;
  height: 240px;
  /* border: 1px solid red; */
}

.Section-three-son-img {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 240px;
  height: 210px;
  /* border: 1px solid red; */
}

.Section-three-son-img img {
  width: 220px;
  height: 210px;
}

.Section-three-son-font {
  width: 220px;
  height: 30px;
  /* border: 1px solid red; */
  padding: 5px;
  /* margin: 10px; */
}
</style>
