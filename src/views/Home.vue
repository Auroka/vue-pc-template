<template>
  <div class="home-warpper">
    <header class="header">
      <div>头部内容</div>
    </header>
    <main class="main">
      <p v-for="item in data.list" :key="item.id">
        <span>{{item.cname}}</span>
        <span>{{item.age}}</span>
        <span>{{item.name}}</span>
      </p>
    </main>
    <footer class="footer">
      <div>底部内容</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    const Mock = require("mockjs");
    this.data = Mock.mock({
      "list|20": [
        {
          "id|+1": 1,
          cname: "@cname",
          name: "@name",
          "age|20-28": 21
        }
      ]
    });
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
}
.home-warpper {
  padding-top: 80px;
  background: #202020;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .header,
  .footer {
    height: 80px;
    line-height: 80px;
    background: #494949;
    & > div {
      font-size: 22px;
      color: #82fcfd;
      text-shadow: 1px 1px 4px #ccffff;
    }
  }
  .main {
    color: #bdbdbd;
    flex: auto;
    p {
      padding: 15px;
      span {
        display: inline-block;
        width: 200px;
      }
    }
  }
}
</style>
