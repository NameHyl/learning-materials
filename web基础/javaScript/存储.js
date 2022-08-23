// 1.cookie <4kb
// 为了避免服务器收到不可预知的请求，对任何用户输入的作为 URI 部分的内容你都需要用 encodeURIComponent 进行转义。
let value = encodeURIComponent("镇阿斯顿");
let name = "username"
function addCookie(name, value) {
    document.cookie = `${name}="${value}"`
    // 解码
    console.log(decodeURIComponent(value));
}
addCookie(name, value)
function addStorage() {
    console.log(1);
    // 2. localStorage:本地存储，任何窗口都适用，10mb
    window.localStorage.setItem("name", "hyl")
    // 3. sessionStorage:本地存储，当前窗口适用，5mb
    window.sessionStorage.setItem("age", "22")
}
