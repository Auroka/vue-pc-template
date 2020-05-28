<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="item in items" :key="item.id">姓名:{{ item.cname }}英文名:{{ item.name }}年龄:{{ item.age }}</p>
  </div>
</template>
<script>
import { getList } from "@/api/example";
export default {};
</script>
