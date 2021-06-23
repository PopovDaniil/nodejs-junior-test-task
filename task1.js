(async () => {
console.log(1)
await Promise
    .resolve()
    .then(() => console.log(2))
    .then(async () => {
        await setTimeout(() => {
            console.log(3)
        }, 500)
    })
    .then(() => console.log(4));
console.log(5)
})()