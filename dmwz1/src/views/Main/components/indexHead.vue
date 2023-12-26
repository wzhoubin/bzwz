<template>
  <div :class="classActive" v-show="true">
    <div class="header-img">
      <div class="logo">
        <a href="">
          <img src="../../../assets/twitter.svg" />
        </a>
      </div>
    </div>
    <div class="Nav">
      <ul class="Nav-ul">
        <li class="Nav-li" v-for="(item, index) in Nav" :key="index">
          <router-link
            :to="{ path: `/${item.path}`, query: { name: item.query } }"
            :class="{ NavActive: NavActive === item.name }"
            @click="aa(item.name)"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="header-center">
      <el-input
        type="text"
        placeholder="请输入内容"
        v-model="searchfont"
        @keyup.enter="SearchFn()"
        class="header-ipt"
      >
        <template #append> <el-button @click="SearchFn()" :icon="Search" /> </template
      ></el-input>
    </div>
    <div class="upload">
      <div class="upload-btn">
        <el-button @click="CreateFn()" plain>
          <!-- <i>a</i> -->
          投稿分享</el-button
        >
      </div>
    </div>
    <div class="header-btn-all">
      <div class="header-btn">
        <button @click.prevent="LoginFn(Login)">
          <el-button text>{{ Login }}</el-button>
        </button>
        <button @click.prevent="RegisterFn(Register)">
          <el-button @click.prevent="RegisterFn(Register)" text @click="open">{{ Register }}</el-button>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, onUpdated } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import { SearchData } from "@/store/Search";
import { userStore } from '@/store/user';
import { ElMessage, ElMessageBox } from 'element-plus';
// import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ArrowDown, ChatDotRound, Phone, Promotion, Search } from '@element-plus/icons-vue';
import { headnavApi } from '@/api/index';
const route = useRoute();
const router = useRouter();
const input = ref();
// 导航栏数据
let Nav = ref([]);
const NavApi = async () => {
  let res = await headnavApi();
  // console.log(res);
  Nav.value = res.data;
};

const NavActive = ref(route.name);
const userData = userStore();
const aa = (i) => {
  NavActive.value = i;
};

// 搜索框输入的内容
const searchfont = ref();
// 存储图片
const imgSearch = ref();
const SearchFn = async () => {
  console.log('触发了');
  // const res = await imgSearchApi(searchfont.value);
  // Searchdata.Searchimg = res.data;
  router.push({ name: '搜索', query: { data: searchfont.value } });
};
// 控制导航栏样式
const classActive = ref('header');
// 控制导航栏显示隐藏
const actives = ref('true');
// 获取页面滑动距离
import { useScroll } from '@vueuse/core';
const { y } = useScroll(window);
const Login = ref('');
const Register = ref('');
watch(y, (old) => {
  if (old > 30) {
    // actives.value = true
    classActive.value = 'header-avtive';
  } else {
    // actives.value = true
    classActive.value = 'header';
  }
});
const CreateFn = () => {
  router.push('/work/create');
};
// 页面加载时判断是否登录
const token = () => {
  if (userData.username != '') {
    Login.value = '已登录';
    Register.value = '退出登录';
  } else {
    Login.value = '登录';
    Register.value = '注册';
  }
};

onMounted(() => {
  token();
  NavApi();
});
const LoginFn = (Login) => {
  if (Login == '登录') {
    router.push('Login');
  }
};
const RegisterFn = (Register) => {
  if (Register == '注册') {
    router.push('Register');
  }
};
const open = () => {
  ElMessageBox.confirm('是否退出登录', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'error',
        message: '退出成功'
        // userdata.token = ''
      });
      router.push('Login');
      userData.$patch({
        username: '',
        password: ''
      });
    })
    .catch(() => {
      // ElMessage({
      // type: 'info',
      // message: 'Delete canceled',
      // })
    });
};
</script>

<style scoped>
.header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  min-width: 1200px;
  width: 100%;
  height: 55px;
  padding: auto;
  /* background-color: rgb(0, 0, 0, 0.5); */
}

.header-avtive {
  min-width: 1200px;
  display: flex;
  flex-wrap: nowrap;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: auto;
  background-color: #fff;
  /* border: 1px solid red; */
  z-index: 999;
}

.header-img {
  min-width: 120px;
  flex-shrink: 0;
  display: flex;
  flex-grow: 0;
  padding: 20px;
  /* margin-right: auto; */
  /* border: 1px solid red; */
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 34px;
  flex-shrink: 0;
}

.logo img {
  width: 113px;
  height: 34px;
}

.Nav {
  flex-grow: 6;
  /* width: 400px; */
  min-width: 500px;
}

.Nav-ul {
  display: flex;
  flex-shrink: 0;
  /* width: 800px; */
  /* min-width: 500px; */
  /* min-width: 100px; */
  justify-content: space-around;
}

.Nav-li {
  display: flex;
  /* justify-content: center; */
  flex-shrink: 0;
}

.header-center {
  flex-shrink: 0;
  /* flex-grow: 1; */
}

.header-ipt {
  background-color: transparent;
  flex-shrink: 0;
  /* padding: 0 0 0 21px; */
  /* height: 40px; */
  width: 380px;
  min-width: 250px;
  max-width: 380px;
  /* border-radius: 18px; */
}

.upload {
  display: flex;
  flex-shrink: 0;
  min-width: 100px;
  height: 40px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  /* background: yellow; */
}

.header-btn-all {
  display: flex;
  /* padding: 0 20px; */
  /* justify-content: space-around; */
  flex-shrink: 0;
  /* flex-grow: 0.5; */
}

.header-btn {
  display: flex;
  /* padding: 5px; */
  /* justify-content: space-around; */
  flex-shrink: 0;
  flex-grow: 0.5;
}

.el-button:hover {
  color: var(--color);
  border: 1px solid var(--color);
}
.header-btn button {
  /* padding: 5px; */
  /* margin: 5px; */
  background: none;
  border: 1px;
  outline: none;
}
.header-btn button:hover {
  border: 0;
}

.NavActive {
  color: #ffd800;
}
</style>
