<template>
  <div>
    <el-menu
        style="min-width: 200px; min-height: calc(100vh - 50px); background-color: #FAFCFF"
        default-active="/home"
        router
        class="el-menu-vertical-demo">
      <el-menu-item index="/home">
        <el-icon><Crop /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <!--    <el-sub-menu index="2">-->
      <!--      <template #title>-->
      <!--        <el-icon><Platform /></el-icon>-->
      <!--        <span>管理</span>-->
      <!--      </template>-->
      <!--      <el-menu-item index="/employee/management" >-->
      <!--&lt;!&ndash;        <el-icon><UserFilled /></el-icon>&ndash;&gt;-->
      <!--        <span>用户管理</span>-->
      <!--      </el-menu-item>-->
      <!--      <el-menu-item index="/plane/management" >-->
      <!--&lt;!&ndash;        <el-icon><WindPower /></el-icon>&ndash;&gt;-->
      <!--        <span>飞机管理</span>-->
      <!--      </el-menu-item>-->
      <!--      <el-menu-item index="/track/management" >-->
      <!--&lt;!&ndash;        <el-icon><Operation /></el-icon>&ndash;&gt;-->
      <!--        <span>跑道管理</span>-->
      <!--      </el-menu-item>-->
      <!--    </el-sub-menu>-->
      <!--    <el-menu-item index="/person">-->
      <!--      <el-icon><Discount /></el-icon>-->
      <!--      <span>个人信息</span>-->
      <!--    </el-menu-item>-->
    </el-menu>
  </div>
</template>

<script setup>
import {
  Platform,
  Discount,
  Crop,
  UserFilled,
  WindPower,
  Operation,
} from '@element-plus/icons-vue'
</script>

<script>
export default {
  name: "Aside",
}
</script>

<style scoped>

</style>