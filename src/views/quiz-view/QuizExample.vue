<template>
  <div style="text-align: center; padding: 150px">
    <el-header style="font-size: xx-large; font-family: '楷体'; font-weight: bolder">请认真阅读以下说明</el-header>
    <br><br>
    <div>
      <span>*这里写说明</span>
    </div>
    <br><br><br>
    <div>
      <el-button @click="doQuiz">我已阅读上述说明，开始测验</el-button>
      <el-button :type="'danger'" @click="backHome">我还没准备好，返回</el-button>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "QuizExample",
  methods: {
    doQuiz() {
      router.push('/do-quiz/main')
    },
    backHome() {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>