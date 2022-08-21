<template>
  <div class="universal_bg_color">
    <!--    头部-->
    <Header :user="user"/>
    <!--    主体-->
    <div style="display: flex">
      <!--      侧边栏-->
      <Aside />
      <!--      内容区域-->
      <router-view style="flex: 1; height: calc(100vh - 50px)" @layoutInfo="refreshLayout" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import request from "@/utils/request";

export default {
  name: 'Layout',
  components: {
    Header,
    Aside,
  },
  data() {
    return {
      user: {},
    }
  },
  created() {
    this.refreshLayout();
  },
  methods: {
    refreshLayout() {
      let loginUser = JSON.parse(sessionStorage.getItem("loginUser")) || {};
      request.get("/user-service/user/get/" + loginUser.userId).then(res => {
        this.user = res.data;
      })
    }
  }
}
</script>

<style scoped>
.universal_bg_color {
  background-color: #FAFCFF;
}
</style>