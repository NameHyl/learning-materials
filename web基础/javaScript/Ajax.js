// 基本使用
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'text.txt', true);
// xhr.onreadystatechange = () => {
//     if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//             console.log(xhr.responseText);
//         }
//     }
// }
// xhr.send(null);

// Promise封装Ajax
function Ajax_promise() {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // 当前目录下的image/pen.gif
        xhr.open('GET', 'image/pen.gif', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    resolve(xhr.responseURL);
                } else {
                    reject(new Error(xhr.statusText));
                }
            }
        }
        xhr.send(null);
    })
    return promise;
}

// 调用
const img = document.createElement('img');
Ajax_promise().then(responseURL => {
    console.log("responseURL:" + responseURL);
    img.src = responseURL
    document.body.appendChild(img);
}).catch(statusText => {
    console.log("statusText:" + statusText);
})