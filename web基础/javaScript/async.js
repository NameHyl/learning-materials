async function abc() {
    console.log("1");
    const two = await Promise.resolve("2")
    console.log(two);
    console.log("3");
    return Promise.resolve("永远返回一个成功的Promise")
}
abc().then((value) => {
    console.log(value);
})