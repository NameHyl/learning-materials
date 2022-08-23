const { exec } = require("../db/mysql")
// 得到数据数组
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) { sql += ` and author="${author}" ` }
    if (keyword) { sql += `and title like '%${keyword}%' ` }
    sql += `order by createTime desc;`
    return exec(sql)
    // return [
    //     {
    //         id: 1,
    //         title: "最好的你",
    //         content: "内容加载中",
    //         createTime: 1111,
    //         authors: "hyla"
    //     },
    //     {
    //         id: 2,
    //         title: "最好的我",
    //         content: "内容加载中",
    //         createTime: 2222,
    //         authors: "hyl"
    //     },
    // ]
}
// 根据id查询
const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
    // return [
    //     {
    //         id: 1,
    //         title: "最好的你",
    //         content: "内容加载中",
    //         createTime: 1111,
    //         authors: "hyla"
    //     },
    // ]
}
// 新建
const newBlog = (blogData = {}) => {
    const { title, content, createTime, author } = blogData
    const sql = `insert into blogs (title,content,createTime,author)
    values ("${title}",'${content}','${createTime}','${author}')
    `

    return exec(sql).then(rows => {
        // rows的数据
        // {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 2,
        //     serverStatus: 2,
        //     warningCount: 0,
        //     message: '',
        //     protocol41: true,
        //     changedRows: 0
        //   }
        return {
            id: rows.insertId,
        }
    })
}
// 更新
const updateBlog = (id, blogData = {}) => {
    // blogData应该包括标题和内容
    const { title, content } = blogData
    const sql = `update blogs set title='${title}', content='${content}' where id='${id}'`
    return exec(sql).then(result => {
        if (result.affectedRows > 0) {
            return true
        }
        return false;
    })
}
// 删除
const delBlog = (id) => {
    // 这里没有做伪删除
    const sql = `delete from blogs where id='${id}'`
    return exec(sql).then(result => {
        if (result.affectedRows > 0) {
            return true
        }
        return false;
    })
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}
