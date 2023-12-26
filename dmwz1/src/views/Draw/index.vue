<template>
  <!-- 整个图片数据展示页面 -->
  <div class="Draw">
    <!-- 左边区域 -->
    <div class="Draw-left">
      <!-- 管理左边每一个盒子 -->
      <div class="Draw-left-All">
        <!-- 中间第一个盒子 -->
        <!-- 展示点击进来的图片 -->
        <div class="Draw-left-one-img">
          <img :src="$route.query.path" alt="" />
        </div>
        <div class="Draw-left-one">
          <!-- <div class="Draw-left-one-font">
            <p><i></i>喜欢</p>
            <p><i></i>喜欢</p>
            <p><i></i>喜欢</p>
          </div> -->
          <div class="Draw-left-one-font2">作品版权归作者所有</div>
        </div>
        <!-- 轮播图区域 -->
        <div class="Draw-left-two-img">
          <img src="../../assets/1.jpg" alt="" />
        </div>
      </div>
      <!-- 左边第二个盒子 -->
      <!-- <div class="Draw-left-two">
        <div class="Draw-left-two-font">
          <h1>名字</h1>
        </div>
        <div class="Draw-left-two-font">
          <h1>{{ $route.query.name }}</h1>
        </div>
        <div class="Draw-left-two-font">
          <h1>标签</h1>
        </div>
      </div> -->
      <!-- 左边第三个盒子 -->
      <!-- <div class="Draw-left-three">
        <div class="Draw-left-three-font">
          <div class="Draw-left-three-font1">
            <h1>热门标签</h1>
          </div>
          <div class="Draw-left-three-font2">
            <div class="Draw-left-three-font2-son">
              <p>aaa</p>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 左边第四个盒子-评论区 -->
      <div class="Draw-left-four">
        <!-- 发表评论区 -->
        <div class="Draw-left-four-one">
          <div class="Draw-left-four-input">
            <el-input
              v-model="textarea2"
              :autosize="{ minRows: 3.3, maxRows: 4 }"
              type="textarea"
              placeholder="Please input"
            />
          </div>
          <div class="Draw-left-four-btn">
            <button style="width: 116px; height: 80px" @click="pinglun()">评论</button>
          </div>
        </div>
        <!-- 全部评论 -->
        <div class="Draw-left-four-two">
          <!-- <div class="Draw-left-four-two-font">
            <p>全部评论({{ user.pinglunAll[route.query.index - 1].length }})</p>
          </div> -->
          <!-- 评论区 -->
          <div class="Draw-left-four-two-All" :key="item.Comment_ID" v-for="item in Comments">
            <div class="Draw-left-four-two-img">
              <img src="../../assets/1.jpg" style="width: 80px; height: 80px; border-radius: 88%" />
            </div>
            <div class="Draw-left-four-two-font2">
              <p>名字:{{ item.name }}</p>
              <!-- <div class="Draw-left-four-two-font2-son"> -->
              <p>评论时间:{{ item.Comment_Time }}</p>
              <p>
                评论：{{ item.Comment_Content }}
                <!-- <i>a</i> -->
              </p>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- 中间区域 -->
      <div class="Draw-center">
        <!-- 中间第一个盒子 -->

        <!-- 中间第二个盒子 -->
        <!-- <div class="Draw-center-two">
          <div class="Draw-center-two-font">
            <p>此作品发布在<a href="" style="padding: 10px;">二次元区</a> <a href="">查看更多</a></p>
          </div>
        </div> -->
        <!-- 中间第三个盒子 -->
        <div class="Draw-center-three">
          <div class="Draw-center-three-one">
            <!-- <img src="../../assets/1.jpg"> -->
            <p style="font-size: small">请点击'更多图片'按钮查看更多图片</p>
            <a href="">更多图片<router-link to="/"></router-link></a>
          </div>
          <!-- <div class="Draw-center-three-two">
            <p>作品在<span>11</span>榜单中排<span>aa</span>名</p>
          </div> -->
        </div>
        <div class="Draw-center-four">
          <div class="Draw-center-four-font">
            <h1>更多热门作品</h1>
          </div>
          <div class="Draw-center-four-img">
            <div
              class="Draw-center-four-img-son"
              v-for="img in hotimg"
              :key="img.image_id"
              @click="imgFn(img.image_name, img.image_path, img.image_id)"
            >
              <img :src="img.image_path" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边区域 -->
    <!-- <div class="Draw-Rigth">
      <div>
        <button><i>喜欢</i></button>
      </div>
      <div>
        <button><i>收藏</i></button>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref, toRaw, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { userStore } from '@/store/user';
// import { ImgAll } from '@/store/img'
import { PostCommentApi, GetCommentApi, ImgAllApi } from '@/api/img';
// import moment from 'moment';
const route = useRoute();
const router = useRouter();
const Comments = ref();
const user = userStore();
// const imgAlla = ImgAll()
// console.log(route.query.index)
// const BannerD = ref([{ name: route.query, img: require(`../../assets/${route.query.index}.jpg`) }]);
// 评论区输入框
const textarea2 = ref('');
const id = ref();

const pinglun = async () => {
  if (textarea2.value === '') {
    return;
  }
  await PostCommentApi({ id: route.query.id, comment: textarea2.value });
  textarea2.value = '';
  setTimeout(() => {
    commentFn();
  }, 500);
};
const commentFn = async () => {
  const res = await GetCommentApi(route.query.id);
  Comments.value = res.data;
};
const hotimg = ref();
const hotImgApi = async () => {
  const res = await ImgAllApi();
  // 数据
  let temp = res.data;
  // 过滤掉和页面相同的数据
  let data = temp.filter((item) => item.image_path != route.query.path);
  // 使用Fisher-Yates洗牌算法打乱数据
  function shuffle(data) {
    let currentIndex = data.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = data[currentIndex];
      data[currentIndex] = data[randomIndex];
      data[randomIndex] = temporaryValue;
    }
    return data;
  }
  // 打乱数据并限制为八个元素
  hotimg.value = shuffle(data).slice(0, 8);
};
const imgFn = (imgname, imgpath, image_id) => {
  router.push({ path: `/draw/${imgname}`, query: { name: imgname, path: imgpath, id: image_id } });
  hotImgApi();
};
watch(route, () => {
  commentFn();
});
onMounted(() => hotImgApi(), commentFn());
// 当前画师作品
</script>

<style scoped>
.Draw {
  display: flex;
  width: 1200px;
  margin: auto;
}

/* 左边盒子 */
/* #region */

.Draw-left {
  display: flex;
  flex-wrap: wrap;
  background: var(--background);
  width: 750px;
}

.Draw-left-All {
  display: flex;
  flex-wrap: wrap;
  /* background: green; */
  width: 750px;
  padding: 15px;
  /* border: 1px solid red; */
}

/* 展示用户点击进来图片区域 */
.Draw-left-one {
  display: flex;
  flex-wrap: wrap;
  width: 720px;
  margin: 10px 0;
  background: var(--background);
  /* border: 1px solid red; */
}

.Draw-left-one-img {
  width: 720px;

  /* border: 1px solid red; */
}

.Draw-left img {
  width: 720px;
}

/* 展示用户点击进来图片区域下方文字 */
.Draw-left-one-font {
  display: flex;
  width: 720px;
  margin-top: 10px;
  background: var(--background);
  /* border: 1px solid red; */
}

.Draw-left-one-font p {
  padding: 0 20px;
}

.Draw-left-one-font2 {
  width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}

/* 广告图区域 */
.Draw-left-two-img {
  /* display: flex; */
  /* border: 1px solid red; */
  width: 720px;
  height: 160px;
}

.Draw-left-two-img img {
  width: 720px;
  height: 150px;
}

/* 左边第二个盒子 */
.Draw-left-two {
  display: flex;
  width: 750px;
  flex-wrap: wrap;
  padding: 15px;
  /* border: 1px solid red; */
  margin-top: 10px;
  margin-bottom: 10px;
  background: var(--background);
}

.Draw-left-two-font {
  width: 720px;
  margin-top: 5px;
}

.Draw-left-three {
  width: 750px;
  display: flex;
  /* background: red; */
  margin-bottom: 10px;
}

.Draw-left-three-font1 {
  width: 720px;
}

.Draw-left-three-font2 {
  display: flex;
  justify-content: start;
  width: 720px;
  padding: 10px;
  /* border: 1px solid red; */
  flex-wrap: wrap;
}

.Draw-left-three-font2-son {
  /* margin: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 40px;
  max-width: 200px;
  /* width: 70px; */
  margin: 5px;
  padding: 10px;
  height: 40px;
  border-radius: 16px;
  background: var(--background);
}

.Draw-left-four {
  display: flex;
  flex-wrap: wrap;
  width: 750px;
  padding: 15px;
  background: var(--background);
  margin-bottom: 10px;
  /* border: 1px solid red; */
}

.Draw-left-four-one {
  width: 720px;
  display: flex;
  flex-wrap: nowrap;
  min-width: 720px;
}

.Draw-left-four-input {
  width: 600px;
  height: 80px;
  min-height: 80px;
  margin-bottom: 10px;
}
.Draw-left-four-input .el-textarea {
  height: 100%;
}
.Draw-left-four-btn {
  min-width: 80px;
}

/* 评论区 */
.Draw-left-four-two {
  display: flex;
  flex-wrap: wrap;
  width: 720px;
  /* height: 200px; */
  /* border: 1px solid red; */
}

.Draw-left-four-two-font {
  width: 720px;
  /* border: 1px solid red; */
}

.Draw-left-four-two-All {
  display: flex;
}

.Draw-left-four-two-img {
  width: 100px;
  padding: 10px;
  /* border: 1px solid green; */
}

.Draw-left-four-two-font2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  /* border: 1px solid red; */

  /* justify-content: center; */
}

.Draw-left-four-two-font2-son {
  display: flex;
  justify-content: space-between;
  width: 580px;
}

/* #endregion */
/* 中间第一个盒子 */
/* #region */
.Draw-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;
  padding-left: 20px;
}

.Draw-center-one {
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  justify-content: center;
  width: 300px;
  padding: 10px;
  background: var(--background);
  margin-bottom: 10px;
}

.Draw-center-one-img {
  width: 100px;
  height: 100px;
}

.Draw-center-one img {
  border-radius: 66%;
  width: 88px;
  height: 88px;
}

.Draw-center-one-font {
  text-align: center;
  width: 300px;
}

.Draw-center-one-font p {
  margin: 10px 0;
}

.Draw-center-one-font span {
  margin: 20px;
}

.Draw-center-one-Btn {
  width: 300px;
  display: flex;
  justify-content: center;
}

.Draw-center-one-Btn button {
  margin: 10px 20px;
  width: 50px;
  height: 20px;
}

/* #endregion */
/* 中间第二个盒子 */
/* #region */
.Draw-center-two {
  margin: 10px 0;
  width: 300px;
  /* border: 1px solid red; */
}

.Draw-center-two-font {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

/* #endregion */
/* 中间第三个盒子 */
/* #region */
.Draw-center-three {
  min-width: 300px;
  /* border: 0px solid red; */
  padding: 10px;
  background: var(--background);
  margin-bottom: 10px;
}

.Draw-center-three-one {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Draw-center-three-one img {
  width: 40px;
  height: 40px;
  border-radius: 50px;
}

.Draw-center-three-two {
  margin: 10px 0;
}

.Draw-center-three-two span {
  color: aqua;
}

/* #endregion */
/* #region */
.Draw-center-four {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  background: var(--background);
  margin-bottom: 10px;
  /* border: 1px solid red; */
}

.Draw-center-four-font {
  width: 300px;
  margin: 10px;
  /* border: 1px solid red; */
}

.Draw-center-four-img {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 300px;
  margin-bottom: 10px;
  /* border: 1px solid green; */
}

.Draw-center-four-img-son {
  width: 150px;
  height: 150px;
  padding: 5px;
}
.Draw-center-four-img img {
  width: 145px;
  height: 145px;

  /* border: 1px solid red; */
}
.Draw-center-four-img img:hover {
  cursor: pointer;
}

/* #endregion */
/* #region */
.Draw-Rigth {
  display: flex;
  position: fixed;
  margin-left: 1050px;
  margin-top: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  /* background: green; */
}

.Draw-Rigth i {
  margin: 20px;
}

/* #endregion */
</style>
