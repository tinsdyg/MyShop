<template>

  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o" @click="this.$router.push('/')">首页</TabbarItem>
    <TabbarItem name="search" icon="qr" @click="this.$router.push('/classify')">分类</TabbarItem>
    <TabbarItem name="friends" icon="cart-o" @click="this.$router.push('/cart')">购物车</TabbarItem>
    <TabbarItem name="setting" icon="user-circle-o" @click="this.$router.push('/')">我的</TabbarItem>
  </Tabbar>


</template>

<script setup>
import {Tabbar, TabbarItem} from 'vant';</script>

<script>
export default {
  name: "IndexView",
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>