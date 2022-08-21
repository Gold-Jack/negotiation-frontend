<template>
  <div class="wrapper">
    <div style="width: 400px; margin: 150px auto; background-color: white; border-radius: 25px">
      <div style=" font-size: 30px; text-align: center; padding: 30px 0">注册</div>
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
        <el-form-item prop="confirm">
          <el-input v-model="form.confirm" placeholder="请再次输入密码" show-password />
        </el-form-item>
        <el-form-item style="width: 100%; display: flex">
          <el-button type="primary" style="flex: 1" @click="register">注册</el-button>
          <el-button type="primary" style="flex: 1" @click="$router.push('/user/login')">返回登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import { Lock, UserFilled } from '@element-plus/icons-vue'
import request from "@/utils/request";
import {ElMessage} from "element-plus";

export default {
  name: "Register",
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
        confirm: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
        ],
      }
    }
  },
  setup() {
    return {
      Lock, UserFilled
    }
  },
  methods: {
    register() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form.password !== this.form.confirm) {
            ElMessage.error("两次密码输入不一致，请重新输入");
            this.form = {};
          } else {
            request.post("/user-service/user/register", this.form).then(res => {
              if (res.code === 'CODE_200' ) {
                ElMessage.success("注册成功，请重新登陆");
                this.$router.push("/user/login");
              } else {
                ElMessage.error(res.msg);
                this.form = {};
              }
            })
          } // else

        }
      }) // validate

    },

  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #3F5EFB, #fff06c);
  overflow: hidden
}
</style>