<template>
  <div class="picture-all">
    <div class="picture" v-for="item in HotImg" :key="item.img_name">
      <img :src="item.img_path" />

      <div class="picture-font">
        <p>{{ item.img_name }}</p>
        <div class="imgBtn">
          <button @click="downloadImg(item.img_path, item.img_suffix)">下载图片</button>
          <button @click="aaaImg(item.img_path)">查看原图</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/picitue.css';
import { ref, onMounted } from 'vue';
import { GetHotImgApi } from '@/api/img';
const HotImg = ref();
const GetHotImg = async () => {
  const res = await GetHotImgApi();
  HotImg.value = res.data;
};
import axios from 'axios';
const downloadImg = (path, name) => {
  axios({
    url: path, // 文件路径
    method: 'GET',
    responseType: 'blob' // 设置响应类型为二进制流
  })
    .then((response) => {
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      // 提取文件地址中的文件后缀名，将其拼接在文件名后面，如果文件名包含后缀则不需要这一步
      link.href = url;
      link.setAttribute('download', `${name}`); // 设置下载文件的名称
      document.body.appendChild(link);
      link.click();
      document.removeChild.link;
    })
    .catch((error) => {
      console.error('文件下载失败', error);
    });
};
const aaaImg = (path) => {
  const a = document.createElement('a');
  a.href = path;
  a.download = path;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
onMounted(() => {
  GetHotImg();
});
</script>

<style scoped>
.picture-all {
  width: 1200px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.picture-all .picture {
  width: calc((100% - 80px) / 4);
  height: 200px;
  margin: 10px;
}
.picture-all .picture img {
  width: 100%;
  height: 100%;
}
.picture-font {
  text-align: center;
  margin-top: 10px;
}
.imgBtn {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.imgBtn button {
  border: 0;
  color: #e6a23c;
  padding: 10px;
  /* background: #fff; */

  transition: 0.5s linear;
}
.imgBtn button:hover {
  background: #e6a23c;
  color: #fff;
  border: 0px solid #e6a23c;
  border-radius: 40%;
  padding: 10px;
  cursor: pointer;
}
</style>
