const { exec } = require("../db/mysql")
const xss = require("xss");
// 得到数据数组
const getList = async (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) { sql += ` and author="${author}" ` }
    if (keyword) { sql += `and title like '%${keyword}%' ` }
    sql += `order by createTime desc;`
    return await exec(sql)
}
// 根据id查询
const getDetail = async (id) => {
    const sql = `select * from blogs where id='${id}'`
    const rows = await exec(sql)
    return rows[0]
}
// 新建
const newBlog = async (blogData = {}) => {
    const { title, content, author } = blogData
    const createTime = Date.now()
    const sql = `insert into blogs (title,content,createTime,author)
    values ("${title}",'${content}','${createTime}','${author}')
    `
    const rows = await exec(sql)
    return {
        id: rows.insertId,
    }
}
// 更新
const updateBlog = async (id, blogData = {}) => {
    // blogData应该包括标题和内容
    const { title, content } = blogData
    const sql = `update blogs set title='${title}', content='${content}' where id='${id}'`
    const result = await exec(sql)
    if (result.affectedRows > 0) {
        return true
    }
    return false;
}
// 删除
const delBlog = async (id, author) => {
    // 这里没有做伪删除
    const sql = `delete from blogs where id='${id}' and author="${author}";`
    const result = await exec(sql)
    if (result.affectedRows > 0) {
        return true
    }
    return false;
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}
