```js
//得到项目
git push 地址 
// ls是查看当前目录文件
// cd是进入某一文件
// touch是创建文件
// code . 是使用文本编辑器打开这个文件
// git add  :提交某一文件
git add index.html
// 提交到本地仓库 并且标识信息
git commit -m "Add messge"
// git status:查看当前的状态
git status
// 推送到远程仓库
git push
// 拉取最新的代码到自己的电脑 测试是否覆盖
git pull
```

```js

/**
	移除node_modules文件夹
*/
//清除缓存
git rm -r --cached .
git commit -m ''
git push/或者/git push origin master
```

```js
/*
	重置reset
*/
// 回到commit哈希的那个位置
git reset --hard <commit>
// 回到仓库的最初版本
git reset --hard origin/master
```

```js
//补充！！！
    前置条件
        清楚缓存在git中的用户名和密码(可能之前有人用过这台电脑，会留下用户名和密码)
            git credent-manager unintall

        记住自己的用户名和密码
            git config --global credential.helper store

        仓库地址
            https://gitee.com/zl2644657635/fitness-demo.git

    
    第一次下载(克隆)代码
            git clone 仓库地址 //列如：git clone https://gitee.com/zl2644657635/fitness-demo.git

    第二次以后下载(拉取)代码
            git pull 仓库地址 分支名 //列如：git pull origin develop

    提交代码步骤
            git add .  //纳入到版本控制

            git commit -m"描述信息" //暂存到本地
            commit一般是一个功能一次 push是一天一次 一般都是下班之前push

            git push 仓库地址 分支名 //推送到远程服务器仓库 列如：git push origin develop

    commit规范
            feat:新功能(feature) //git commit -m"feat:注册功能完成"

            fix:修补bug // git commit -m"fix:修复登录表单验证bug"

            docs:文档(documentation) //git commit -m"docs:新增功能文档"
            不常用：
                style: 格式(不影响代码运行的变动)
                refactor: 重构(既不是新增功能，也不是修改bug的代码变动)
                test:增加测试
                chore: 构建过程或辅助工具的变动

    git 其他命令
            git status //查看仓库状态

            git branch //查看当前有哪些分支
            git branch 分支名 //创建分支
            git checkout 分支名  //切换分支

            git merge 分支名 //合并分支

            git config --global user.name "hyla" //配置用户名
            git config --global user.email 邮箱 //配置邮箱

            git tag -a v1.1 -m "test_tag";  //打标签
```

```js
//查看当前分支
git branch
//创建新的分支
git checkout -b 新的分支名
// 切换分支
git checkout 切换分支名
// 合并分支 ==>会自动合并分支，可能会出现分支合并冲突，改改代码就好
git merge 分支名
```

```js
/*
	Git同时配置Gitee和GitHub
*/
//可以通过git config --global --list来查看是否设置过。
git config --global --unset user.name "你的名字"
git config --global --unset user.email "你的邮箱"
//生成新的 SSH keys (疯狂回车即可。两个邮箱不要相同就行了。完成后会在~/.ssh / 目录下生成以下文件。)
//GitHub 的钥匙
ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C "lx@qq.com"
//Gitee 的钥匙
ssh-keygen -t rsa -f ~/.ssh/id_rsa.gitee -C "lx@vip.qq.com"
//识别 SSH keys 新的私钥
ssh-agent bash
ssh-add ~/.ssh/id_rsa.github
ssh-add ~/.ssh/id_rsa.gitee
//多账号配置 config 文件
//创建config文件
touch ~/.ssh/config 
//config 中填写的内容
#Default gitHub user Self
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa.github

# gitee
Host gitee.com
    Port 22
    HostName gitee.com
    User git
    IdentityFile ~/.ssh/id_rsa.gitee
//添加 ssh
https://github.com/settings/keys
将 id_rsa.github.pub 中的内容填进去，起名的话随意。
https://gitee.com/profile/sshkeys
将 id_rsa.gitee.pub 中的内容填进去，起名的话随意。
//测试成功(第一次会连接让你输入yes/no ，输入yes，就能看到Hi了。)
ssh -T git@gitee.com
ssh -T git@github.com
```
···
```git
    git branch -D  要删除的分支
    git push origin --delete  要删除的分支
```
