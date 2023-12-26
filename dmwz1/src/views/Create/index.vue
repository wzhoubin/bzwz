<template>
  <div class="Files">
    <div class="File">
      <div class="Files-File-son">
        <el-upload
          class="upload-demo"
          ref="uploadRef"
          action="http://localhost:3000/testApi/file"
          method="post"
          list-type="picture"
          :show-file-list="true"
          :auto-upload="false"
          name="name"
          :data="beforeUpload"
          :limit="limit"
          :on-exceed="handleExceed"
        >
          <div class="el-upload__text">请点击选择一张图片上传</div>
        </el-upload>
      </div>
    </div>
    <div class="Files-input">
      <div class="Files-input-son">
        <el-form ref="formref" :rules="rules" :model="form" size="large" class="form">
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="Please input"
              ><template #prepend>作品名字:</template></el-input
            >
          </el-form-item>
          <!-- <el-form-item prop="content">
            <el-input
              v-model="form.content"
              :autosize="{ minRows: 4, maxRows: 10 }"
              maxlength="1000"
              show-word-limit
              type="textarea"
              placeholder="请输入你要分享的内容"
            ></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button class="form_btn" @click="submitUpload(formref)"><span>立即发布</span></el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="Files-inpu-fb">
        <div class="Files-inpu-fb-one">
          <!-- <p>作品发布须知</p>
          <p>1、请上传个人原创作品，一旦发现上传非原创作品，画师认证将被取消</p>
          <p>2、请上传完整度与质量相对较高的作品，低质量的作品将被拒绝发布</p>
          <p>3、请勿上传包含反动、涉恐、涉政、涉黄作品，上传不合宜的作品您的画师页面和账号将会被封禁</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
// 作品名字
const name = ref();
// 作品内容
// const content = ref();
// 获取表单
const formref = ref();
// 表单内容
const form = ref({ name });
// 表单规则
const rules = ref({
  name: [
    { required: true, message: '请输入作品名字', trigger: 'blur' },
    {
      min: 5,
      max: 10,
      message: '请输入作品名字长度大于5个字并且小于10字',
      trigger: 'blur'
    }
  ],
  content: [
    { required: true, message: '请输入内容', trigger: 'blur' },
    { min: 100, max: 1000, message: '作品内容长度要大于100字并且小于1000字', trigger: 'blur' }
  ]
});
// 规定能上传多少张图片
const limit = ref(1);
// 获取上传图片的实例
const uploadRef = ref('');
const submitUpload = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // 提交图片
      uploadRef.value.submit();
      // 清除提交的图片
      uploadRef.value.clearFiles();
      form.value.name = '';
      form.value.content = '';
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
// upload上传提交额外的内容
const beforeUpload = ref({ name });
const handleExceed = (file) => {
  // 清除已经选择的图片
  uploadRef.value.clearFiles();
  // 重新选择的图片
  uploadRef.value.handleStart(file[0]);
};
</script>

<style>
.Files {
  display: flex;
  flex-direction: column;
  /* min-height: 400px; */
  justify-content: center;
  align-items: center;
  width: 100%;
}

.File {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  min-height: 200px;
  border: 1px solid #e6a23c;
}
.Files-File-son {
  width: 100%;
  /* border: 1px solid red; */
}
.Files-File-son p {
  font-size: large;
  font-weight: 800;
}

.Files-input {
  width: 1200px;
  margin: 10px auto;
  border: 1px solid #e6a23c;
}

.Files-input-son {
  display: flex;
  width: 1200px;
  padding: 0 100px;
  margin: 10px 0;
  position: relative;
}
.form {
  width: 100%;
}
.form .form_btn {
  color: #e6a23c;
  border: 1px solid #e6a23c;
  background: #fff;
  margin: auto;
  transition: 1s;
}
.form .form_btn:hover {
  color: #fff;
  background: #e6a23c;
  margin: auto;
}
/* .form .form_btn span {
  color: #fff;
  transition: 1s;
} */

.Files-inpu-fb {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;
}
.upload-demo {
  text-align: center;
}
.upload-demo button {
  margin: 10px;
}
.el-upload__text {
  color: #e6a23c;
}
</style>
