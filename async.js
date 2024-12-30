console.log("Start Operation");

function sleep(miliseconds) {
  let startTime = new Date().getTime();
  console.log("Operation is running");
  while (new Date().getTime() < startTime + miliseconds) {
    console.log("in process");
  }
  console.log("Operation done");
}

sleep(1000);

console.log("do something else...")