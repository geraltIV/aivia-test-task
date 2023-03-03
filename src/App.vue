<template>
  <template v-if="!$route.path.includes('login')">
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Some awesome products</v-toolbar-title>
      <v-btn @click="logout()">Logout</v-btn>
    </v-toolbar>
  </template>
  <v-content>
    <keep-alive :include="['Login']">
      <router-view></router-view>
    </keep-alive>
  </v-content>
</template>

<script>
import router from "@/router";

export default {
  name: "App",
  methods: {
    logout() {
      sessionStorage.removeItem("token");
      router.push("/login");
    },
  },
};
</script>
