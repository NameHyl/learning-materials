const router = require('koa-router')()
// 引入文件
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require("../middleware/loginCheck")

router.prefix('/blog')
// 查看列表
router.get('/list', async function (ctx, next) {
    let author = ctx.query.author || ""
    let keyword = ctx.query.keyword || ""

    if (ctx.query.isadmin) { //是否为admin
        if (ctx.session.username === nill) { //未登录
            ctx.body = new ErrorModel("没有登录")
            return
        }
        // 强制查询自己的博客
        author = ctx.session.username
    }
    const result = await getList(author, keyword)
    ctx.body = new SuccessModel(result)
})
// 获取详情
router.get('/detail', async function (ctx, next) {
    const data = await getDetail(ctx.query.id)
    return new SuccessModel(data, "success")
})
// 新建
router.post('/new', loginCheck, async function (ctx, next) {
    const body = ctx.request.body
    body.author = ctx.session.username
    const data = await newBlog(body)
    ctx.body = new SuccessModel(data, "success")
})
// 更新
router.post('/update', loginCheck, async function (ctx, next) {
    const updateData = await updateBlog(ctx.query.id, ctx.request.body)
    if (updateData) {
        ctx.body = new SuccessModel("更新 success")
    } else {
        ctx.body = new ErrorModel("参数 error")
    }

})
// 删除
router.post('/del', loginCheck, async function (ctx, next) {
    const author = ctx.session.username;
    const delData = await delBlog(ctx.query.id, author)
    if (delData) {
        ctx.body = new SuccessModel("delData success")
    } else {
        ctx.body = new ErrorModel("参数 error")
    }
})
module.exports = router
