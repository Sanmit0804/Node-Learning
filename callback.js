console.log("taks start....")

function asyncTask(cb) {
    console.log("taks running....")
    cb();
}

const name = "Sanmit";
asyncTask(() => console.log(name))

console.log("taks end....")