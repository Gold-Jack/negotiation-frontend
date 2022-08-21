<template>
  <div style="padding: 20px">
    <!-- 搜索框 -->
    <div style="margin: 10px 0; padding-left: 20px; height: 8%">
      <el-input v-model="quizSearch" placeholder="您想进行哪方面的测试呢？" style="width: 200px" clearable></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="loadQuiz">搜索</el-button>
    </div>

    <!-- 测验展示 -->
    <div style="padding-top: 20px; padding-left: 20px; height: 80%">
      <el-space wrap >
        <el-card v-for="(tableData, i) in quizData" :key="i"
                 class="box-card quiz-card"
                 :shadow="'hover'"
                 @click="doQuiz"
                 style="width: 350px; height: 200px">
          <template #header >
            <div class="card-header" style="font-weight: bolder; font-family: 微软雅黑">
              <span >{{ tableData.quizname }}</span>
            </div>
          </template>
          <div class="card-body">
            <span>简介：{{ tableData.description }}</span><br>
            <span>发布日期：{{ tableData.gmtPublish.slice(0, 10) }}</span><br>
            <span>发布人：{{ tableData.publisher }}</span><br>
            <span>测验人数：{{ tableData.quizDoneNumber }}</span><br>
            <span>预计测验时间：{{ tableData.estimatedTimeCost }}分钟</span><br>
          </div>
        </el-card>
      </el-space>
    </div>

    <!-- 分页 -->
    <div class="example-pagination-block" style="height: 12%; padding-left: 10px">
      <el-pagination layout="prev, pager, next"
                     v-model:total="total"
                     v-model:page-size="pageSize"
                     v-model:current-page="currentPage"
      />
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import router from "@/router";

import { ref } from 'vue'
import {ElMessage} from "element-plus";
const currentDate = ref(new Date())   // 前端获取当前日期样例

export default {
  name: "Home",
  data() {
    return {
      form: '',
      quizData: '',   // 当前页面中所有的quiz信息列表
      quizSearch: '', // 按quizname搜索
      currentPage: 1,   // 当前页码
      total: 6,   // 共有多少条记录
      pageSize: 6,    // 每页有多少条记录
      tableData: {
        quizId: '',
        quizname: '',
        description: '',
        gmtPublish: '',
        publisher: '',
        quizDoneNumber: '',
        estimatedTimeCost: ''
      },
    }
  },
  created() {
    this.loadQuiz()
  },
  mounted() {
  },
  methods: {
    loadQuiz() {
      request.get("/quiz-service/quiz/get-page", {
        params: {
          pageNumber: this.currentPage,
          pageSize: this.pageSize,
          search: this.quizSearch
        }
      }).then(res => {
        if (res.code === 'CODE_200') {
          this.quizData = res.data.records;
          this.total = res.data.total;
        }
      })
    },
    doQuiz(quizId) {
      router.push('/do-quiz/example')
    },
    refreshPage() {

    }
  }
}
</script>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.quiz-card {
  background-image: linear-gradient(to bottom right, #faecd8, #ecf5ff);
  overflow: hidden;
}

.card-body {
  font-size: small;
  color: #8c939d;
}
</style>