<template>
  <div class="header-all">
    <div class="header">
      <div class="header-left" v-for="(item, index) in date" :key="index" :class="{ activeLeft: dateleft === index }"
        @click.prevent="dateLeftFn(index)">
        <a href="">{{ item }}</a>
      </div>
      <div class="header-right">
        <a href="">前几天</a>
        <span v-for="(item, index) in   date2  " :key="index" :class="{ activeRight: dateright === index }"
          @click="dateRightFn(index)">
          {{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const date = ref(['日榜', '周榜', '月榜'])
const date2 = ref(['日榜', '周榜', '月榜', '周榜', '月榜', '周榜'])
let dateleft = ref(0)
let dateright = ref(0)

const dateRightFn = (i) => {
  dateright.value = i
}
const dateLeftFn = (i) => {
  dateleft.value = i
}

</script>

<style scoped>
.header-all {
  width: 100%;
  height: 36px;
  display: flex;
  margin-bottom: 10px;
  /* justify-content: space-between; */
  /* background: red; */
  /* border: 1px solid red; */
}

.header {
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  width: 1200px;
}

/* 日周月榜单 */
.header-left {
  display: flex;
  flex-grow: 1;
  min-width: 100px;
  flex-shrink: 0;
  /* width: 200px; */
  /* margin-left: 20px; */
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  background: beige;
  font-weight: 600;
}

.header-right {
  display: flex;
  border: 1px solid red;
  flex-grow: 3;
  min-width: 800px;
  justify-content: end;
  /* border: 1px solid red; */
  flex-shrink: 0;
  background: beige;
}

.header span {
  margin-left: 50px;
}

.activeLeft {
  color: #feab00;
}

.activeRight {
  background: #ffd800;
}
</style>