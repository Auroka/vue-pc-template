<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="item in items" :key="item.id">
      姓名:{{ item.cname }}英文名:{{ item.name }}年龄:{{ item.age }}
    </p>
  </div>
</template>
<script>
import { getList } from '@/api/example'
export default {
  data() {
    return {
      items: [],
      datt: {}
    }
  },
  mounted() {
    if (1) {
      console.log('1')
    }
    const Mock = require('mockjs')
    Mock.mock('http://192.168.1.43:8061/user-api/users/ncovActWorks/list', {
      code: 0,
      message: 'success',
      data: {
        'records|20': [
          {
            'id|+1': 1,
            cname: '@cname',
            name: '@name',
            'age|20-28': 21
          }
        ],
        'total|100': 1
      }
    })
    getList().then(res => {
      console.log(res)
      this.items = res.data.records
    })
  }
}
</script>
