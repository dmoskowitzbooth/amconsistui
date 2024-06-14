<template>
  <div id="app">
    <nav>
      <router-link to="/daily_usages">Daily Usages</router-link>
      <router-link to="/daily_usages/new">New Daily Usage</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  padding: 15px;
}
nav a {
  margin-right: 10px;
}
</style>
