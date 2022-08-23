const router = require('koa-router')()
const { login } = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")
router.prefix('/users')

router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.body
  console.log(ctx.body);
  const userData = await login(username, password)
  if (userData.username) {
    // 设置session
    ctx.session.username = userData.username
    ctx.session.password = userData.password
    ctx.body = new SuccessModel(userData, "success")
  }
  ctx.body = new ErrorModel("登录失败")
})

// router.get('/test', async function (ctx, next) {
//   if (ctx.session.viewCount === null) {
//     ctx.session.viewCount = 0
//   }
//   ctx.session.viewCount++
//   ctx.body = {
//     msg: "success",
//     viewCount: ctx.session.viewCount
//   }
// })
module.exports = router
