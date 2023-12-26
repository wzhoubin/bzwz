<template>
  <div class="Login">
    <div class="form">
      <el-form ref="formRef" :model="form" :rules="rules" status-icon>
        <el-form-item label="账号" prop="username">
          <el-input style="width: 200px" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" style="width: 200px" v-model="form.password" />
        </el-form-item>
        <div class="itt">
          <el-form-item label="确认密码" prop="password2">
            <el-input type="password" style="width: 200px" v-model="form.password2" />
          </el-form-item>
        </div>
        <el-form-item prop="agree" label-width="22px">
          <el-checkbox size="large" v-model="form.agree"> 我已同意隐私条款和服务条款 </el-checkbox>
        </el-form-item>
        <div class="form-btn">
          <el-form-item>
            <el-button type="primary" @click="$router.push('/Login')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="useregisterApi">注册</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "@/router";
import { userStore } from "@/store/user";
import { ElMessage } from "element-plus";
import { registerApi } from "@/api/user";
const formRef = ref(null);
const user = userStore();
const form = ref({
  username: "",
  password: "",
  password2: "",
  agree: true
});
// 注册账号
const useregisterApi = () => {
  if (form.value.password === form.value.password2 && user.username != form.value.username) {
    user.username = form.value.username;
    user.password = form.value.password;
    ElMessage({
      message: "注册成功",
      type: "success"
    });
    registerApi(form.value.username, form.value.password);
    router.push("Login");
  } else if (form.value.username == user.username) {
    ElMessage({
      message: "注册失败,该账号已存在",
      type: "error"
    });
  } else if (form.value.password == "" || form.value.username == "") {
    ElMessage({
      message: "注册失败,请输入账号或密码",
      type: "error"
    });
  } else {
    ElMessage({
      message: "注册失败,请确认账号或密码",
      type: "error"
    });
  }
};
const rules = {
  username: [
    {
      required: true,
      message: "请输入10位内的正确用户名",
      trigger: "blur",
      pattern: /^[a-zA-Z0-9]{1,10}$/
    }
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 10, message: "请输入6-10位的密码", trigger: "blur" }
  ],
  password2: [
    { required: true, message: "两次密码不一致", trigger: "blur" },
    { min: 6, max: 10, message: "请输入6-10位的密码", trigger: "blur" },
    {
      validator: (rules, value, callback) => {
        if (value == form.value.password) {
          callback();
        } else {
          callback(new Error("两次输入的密码不一致!"));
        }
      },
      trigger: "blur"
    }
  ],
  agree: [
    {
      validator: (rules, value, callback) => {
        if (value) {
          callback();
        } else {
          callback(new Error("请勾选协议"));
        }
      }
    }
  ]
};
const samePwd = (rule, value, callback) => {
  if (value !== this.form.password) {
    // 如果验证失败，则调用 回调函数时，指定一个 Error 对象。
    callback(new Error("两次输入的密码不一致!"));
  } else {
    // 如果验证成功，则直接调用 callback 回调函数即可。
    callback();
  }
};
const RegisterFn = () => {
  if (form.value.password.length < 6) return;
};
</script>

<style scoped>
.itt .el-input {
  margin-left: 20px;
}

.Login {
  background: url(../../assets//12.jpg) no-repeat;
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
  height: 350px;
  border-radius: 38px;
  background-color: #f0f0f0;
  /* filter: alpha(Opacity=60); */
  /* -moz-opacity: 0.6; */
  /* opacity: 0.6; */
  flex-shrink: 0;
  /* position: relative; */
}

.form-btn {
  display: flex;
  justify-content: space-between;
}

.el-input {
  margin-left: 50px;
}
</style>
