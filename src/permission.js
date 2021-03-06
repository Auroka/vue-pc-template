import router from './router'
import { getToken } from '@/utils/cache' // get token from cookie

const whiteList = ['/', '/login', '/about'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  const token = getToken()

  if (token) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
    }
  }
})

router.afterEach(() => {})
