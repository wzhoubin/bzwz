<template>
  <div class="Login">
    <div class="form">
      <el-form ref="formRef" :model="form" :rules="rules" status-icon>
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item prop="agree" label-width="22px">
          <el-checkbox size="large" v-model="form.agree"> 我已同意隐私条款和服务条款 </el-checkbox>
        </el-form-item>
        <div class="form-btn">
          <el-form-item>
            <el-button type="primary" @click="LoginFn">登录</el-button>
            <el-button type="info" @click="$router.push('/Register')">注册</el-button>
            <!-- <a href="http:localhost:3000/">2</a> -->
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router';
import { userStore } from '@/store/user';
import { ElMessage } from 'element-plus';
import { loginApi } from '@/api/user';
const formRef = ref(null);
const UserData = userStore();
// 存储账号数据
const form = ref({
  username: '',
  password: '',
  agree: true
});

const rules = {
  username: [
    {
      required: true,
      message: '请输入10位内的正确用户名',
      trigger: 'blur',
      pattern: /^[a-zA-Z0-9]{1,10}$/
    }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 10, message: '请输入6-10位的密码', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rules, value, callback) => {
        if (value) {
          callback();
        } else {
          callback(new Error('请勾选协议'));
        }
      }
    }
  ]
};
const LoginFn = async () => {
  const res = await loginApi(form.value.username, form.value.password);
  // res.data.code=1 账号存在,登录
  // res.data.code=0 失败
  if (res.data.code == 1) {
    UserData.username = form.value.username;
    UserData.password = form.value.password;

    ElMessage({
      message: '登录成功',
      type: 'success'
    });
    router.push('/');
  } else {
    ElMessage({
      message: '账号或密码错误',
      type: 'error'
    });
  }
};
</script>

<style scoped>
.Login {
  background: url(../../assets//1.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100lvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border-radius: 39px;
  background-color: #f0f0f0;
  /* filter: alpha(Opacity=60); */
  /* -moz-opacity: 0.6; */
  /* opacity: 0.6; */
  flex-shrink: 0;
  /* position: relative; */
}

.form-btn {
  /* position: absolute; */
  display: flex;
  justify-content: center;
  /* margin: auto; */
  /* margin-left: 45px; */
}
</style>
