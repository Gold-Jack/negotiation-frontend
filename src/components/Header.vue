<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color: dodgerblue;">谈判能力系统-demo</div>
    <div style="flex: 1"></div>
    <div style="min-width: 12%;">
      <el-dropdown style="color: midnightblue; ">
        <span class="el-dropdown-link" style="display: flex">
          <div style="padding-top: 10px; padding-right: 10px;">
            <el-avatar :size="30" :src="user.avatarUrl" style="position: relative" />
          </div>
          <div style="flex: 1; padding-top: 17px">
            {{ user.username }}
          </div>
          <el-icon class="el-icon--right" style="width: 10%; padding-top: 24px">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/person')">个人信息</el-dropdown-item>
            <el-dropdown-item @click="exitSystem">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<script>
import router from "@/router";

export default {
  name: "Header",
  props: ["user"],
  data() {
    return {

    }
  },
  created() {
  },
  methods: {
    exitSystem() {
      sessionStorage.clear();
      router.push('/user/login');
    }
  }
}
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>