<template>
  <div class="left">
    <div class="left-img">
      <div><img src="../assets/left.png" alt="" /></div>
      <div style="border: 1px solid black">
        <div class="left-img-top">
          <h1>app</h1>
        </div>
        <div class="erweima">
          <img
            src="../assets/erweima.png"
            style="width: 80px; height: 80px; margin: 10px; border: 1px solid #ffd800"
            alt=""
          />
        </div>
        <p style="font-size: 10px; margin-bottom: 10px">一个动漫图片网站而已</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown, ChatDotRound, Phone, Promotion } from "@element-plus/icons-vue";
// const handleCommand = (command) => {
//   ElMessage(`click on item ${command}`)
// }
</script>

<style scoped>
.left {
  position: absolute;
  /* flex-shrink: 0; */
  width: 100px;
  margin-top: 250px;
  margin-left: -130px;
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  border-bottom: 5px solid #ffd800;
}

.left-img-top {
  display: flex;
  flex-direction: column;
  width: 100px;
  background: #ffd800;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  font-style: italic;
}

.left-img {
  display: flex;
  flex-wrap: wrap;
}

.erweima {
  width: 100px;
}

.left-img :not(:first-child) {
  /* margin: 5px 0; */
  /* padding: 5px; */
}
</style>
