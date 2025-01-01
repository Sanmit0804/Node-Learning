const promise = new Promise((resolve, reject) => {
    console.log("Async task execution....")
    // throw "error re baba";
    if (true) {
        const person = {
            name: "Sanmit"
        }
        resolve(person);
    } else {
        const error = {
            errCode: "1001"
        }
        reject(error);
    }
})

promise.then(
    (val) => { console.log(val) },
    (err) => { console.log(err) }
).catch(() => console.log("Failed..!")).finally(() => console.log("cleanup"))