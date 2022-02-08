<template>
  <v-app>
    <v-app-bar
      app
      class="d-flex justify-center"
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title v-text="title" style="width:200px;"/>
      <v-app-bar-nav-icon />
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      fixed: false,
      title: 'Green Light Bento'
    }
  }
};
</script>
