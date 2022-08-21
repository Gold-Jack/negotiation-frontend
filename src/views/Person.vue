<template>
  <div style="padding: 20px; display: flex">
    <el-card style="min-width: 230px; height: 280px; text-align: center; margin: 30px">
      <h3 style="padding-bottom: 20px">头像</h3>
      <el-upload
          class="avatar-uploader"
          action="http://file-service/file/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeUpload"
      >
        <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div style="text-align: center; color: grey; padding-top: 20px; font-size: small">
        *图片上传后会自动更新
      </div>
    </el-card>
    <el-card style="min-width: 400px; height: 450px; margin: 30px ">
      <h3 style="text-align: center; padding-bottom: 20px">个人信息</h3>
      <el-form ref="form" v-model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-input v-model="form.authority" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="form.profession"></el-input>
        </el-form-item>
      </el-form>
      <div style="text-align: center">
        <el-button type="primary" @click="update">保存</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
import request from "@/utils/request";
import {ElMessage} from "element-plus";

export default {
  name: "Person",
  data() {
    return {
      form: {},
      isUploadAvatarTypeLegal: false,
    }
  },
  created() {
    let userJson = sessionStorage.getItem("loginUser") || "{}"
    this.form = JSON.parse(userJson);

    // 如果姓名、年龄、性别、地址全部为空，说明是新注册用户，提示需要完善个人信息
    if( this.form.age === null
        && this.form.sex === null
        && this.form.address === null ) {
      ElMessage.info("请完善个人信息");
    }
  },
  methods: {
    beforeUpload(file) {
      const allowedUrlList = ['png', 'jpg', 'gif', 'jpeg'];
      let fileType = file.type.split('/')[1];   // file.type: "image/<TYPE>"
      if (!(allowedUrlList.includes(fileType))) {
        ElMessage.error("图片格式不正确");
      } else {
        // 如果图片格式合法，则允许上传
        this.isUploadAvatarTypeLegal = true;
      }
    },
    handleAvatarSuccess(uploadRes) {
      // 如果图片格式合法，则上传并更新
      if ( this.isUploadAvatarTypeLegal ) {
        this.form.avatarUrl = uploadRes.data;
        this.update();
      }
      this.isUploadAvatarTypeLegal = false;
      // ElMessage.success("Update Success!")
    },
    update() {
      request.put("/user-service/user/update", this.form).then(res => {
        // console.log(res)
        if (res.code === 'CODE_200') {
          ElMessage.success("更新成功")
          sessionStorage.setItem("loginUser", JSON.stringify(this.form))

          // 触发Layout更新用户信息
          this.$emit("layoutInfo")
        } else {
          ElMessage.error(res.msg);
        }
      })
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 155px;
  height: 155px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 155px;
  height: 155px;
  display: block;
}
</style>
