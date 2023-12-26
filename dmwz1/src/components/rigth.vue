<template>
  <div class="right">
    <!-- v-for="(item, index) in right" :key="index" -->
    <div class="right-div">
      <el-dropdown @command="handleCommand" placement="left">
        <!-- <img src="../assets/1.jpg" alt=""> -->
        <el-icon style="width: 90px; height: 50px">
          <Phone style="width: 36px; height: 37px" />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- 移动到图片上展示的内容 -->
            <el-dropdown-item command="a">
              <div class="right-div-son">
                <p>手机号：17825654415</p>
                <p>邮箱:1907347255@qq.com</p>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <p>联系方式</p>
    </div>
    <div class="right-div">
      <el-dropdown @command="handleCommand" placement="left">
        <el-icon style="width: 90px; height: 50px">
          <Promotion style="width: 36px; height: 37px" />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">
              <div class="right-div-son">
                <img src="../assets/erweima.png" />
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <p>公众号</p>
    </div>
    <div class="right-div">
      <!-- <el-dropdown @command="handleCommand" placement="left"> -->
      <el-icon style="width: 90px; height: 50px">
        <ChatDotRound style="width: 36px; height: 37px" />
      </el-icon>
      <!-- <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown> -->
      <p>反馈方式</p>
    </div>
    <!-- <div class="right-div">
        <el-icon style="width: 90px;height: 90px;">
          <ArrowDown style=" width: 60px; height: 60px;" />
        </el-icon>
      </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { ArrowDown, ChatDotRound, Phone, Promotion } from '@element-plus/icons-vue';
const handleCommand = (command) => {
  ElMessage(`click on item ${command}`);
};
// const right = ref(
//   [{ img: require('../assets/11.jpg'), name: '联系方式' },
//   { img: require('../assets/11.jpg'), name: '公众号', },
//   { img: require('../assets/11.jpg'), name: '反馈方式' },
//   ]
// )
</script>

<style scoped>
.right {
  display: flex;
  width: 90px;
  flex-wrap: wrap;
  position: absolute;
  margin-left: 1250px;
  margin-top: 250px;
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  width: 90px;
  height: 81px;
  border: 1px solid #606266;
  /* padding: 5px; */
  /* margin: 5px; */
  /* margin: auto; */
  /* margin: auto; */
  /* margin: 10px; */
  /* margin: 5px; */
}

.right-div-son {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 150px;
  /* height: 100px;  */
}
</style>
