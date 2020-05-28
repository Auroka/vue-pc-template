<template>
  <div id="document">
    <nav>
      <h1>头部内容</h1>
    </nav>
    <main>
      <p>可以添加更多内容看看底部的变化哦！</p>
    </main>
    <footer>
      <h1>底部内容</h1>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss">
#document {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #202020;
  font-family: microsoft yahei, wenquanyi micro hei, sans-serif !important;
}

nav,
footer {
  background: #494949;
  /* display: flex; */
  /* justify-content: center; */
}

main {
  color: #bdbdbd;
  flex: auto;
}

footer {
  flex-shrink: 0;
}

* {
  margin: 0;
}

h1,
p {
  padding: 15px;
}

nav > h1 {
  color: #82fcfd;
  text-shadow: 1px 1px 4px #00000080;
}

footer > h1 {
  color: #82fcfd;
  text-shadow: 1px 1px 4px #00000080;
}
</style>
