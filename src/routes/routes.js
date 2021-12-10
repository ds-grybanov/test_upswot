export default [
  {
    path: '*',
    redirect: '/todo',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/Login.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../pages/todo/Todo.vue'),
    beforeEnter: (from, to, next) => {
      if(localStorage.getItem('admin')) {
        next()
      } else {
        next('/login')    
      } 
    }
  }
]