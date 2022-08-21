<template>
  <div class="wrapper">
    <div style="width: 400px; margin: 150px auto; background-color: white; border-radius: 25px">
      <div style="font-size: 30px; text-align: center; padding: 30px 0">欢迎登陆</div>
      <el-form ref="form"
               :model="form"
               :rules="rules"
               style="padding: 0 50px 50px 50px"
               size="large">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item style="width: 100%; display: flex">
          <el-button type="primary" style="flex: 1" @click="$router.push('/user/register')">注册</el-button>
          <el-button type="primary" style="flex: 1" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import request from "@/utils/request";
import {ElMessage} from "element-plus";

export default {
  name: "Login",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      }
    }
  },
  setup() {

  },
  methods: {
    login() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          request.post("/user-service/user/login", this.form).then(res => {
            if (res.code === 'CODE_200') {
              ElMessage.success("登陆成功");
              sessionStorage.setItem("loginUser", JSON.stringify(res.data));
              // console.log(sessionStorage.getItem("loginUser"));
              this.$router.push("/");
            } else {
              ElMessage.error(res.msg);
            }
          })  // then
        }
      })  // validate

    },

  }
}
</script>

<style scoped>

.wrapper {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient( to bottom right, #FC466B, #3F5EFB);
  overflow: hidden;
}


</style>