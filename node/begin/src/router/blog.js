const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    // 共同的id
    const id = req.query.id
    // 获取blog列表
    if (req.method === "GET" && req.url.split("?")[0] === "/blog/list") {
        // 解构
        const [author, keyword] = [req.query.author, req.query.keyword]
        // 得到数据
        const data = getList(author, keyword)
        // 返回处理过的数据
        // return new SuccessModel(listData, "success")
        return data.then(listData => {
            return new SuccessModel(listData, "success")
        })

    }
    // 获取blog详情
    if (req.method === "GET" && req.url.split("?")[0] === "/blog/detail") {
        return getDetail(id).then(data => {
            // 返回处理过的数据
            return new SuccessModel(data, "success")
        })

    }
    // 新建blog
    if (req.method === "POST" && req.url.split("?")[0] === "/blog/new") {
        const data = newBlog(req.body)
        return data.then(newdata => {
            return new SuccessModel(newdata, "success")
        })
    }
    // 更新blog
    if (req.method === "POST" && req.url.split("?")[0] === "/blog/update") {
        const data = updateBlog(id, req.body)
        return data.then(updateData => {
            if (updateData) {
                return new SuccessModel("success")
            } else {
                return new ErrorModel("参数 error")
            }
        })

    }
    // 删除blog
    if (req.method === "POST" && req.url.split("?")[0] === "/blog/delete") {
        return delBlog(id).then(delData => {
            if (delData) {
                return new SuccessModel("success")
            } else {
                return new ErrorModel("参数 error")
            }
        })

    }
}
module.exports = handleBlogRouter