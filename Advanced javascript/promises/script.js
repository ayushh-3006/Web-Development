function getData(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID === 3) {
        reject("ID not Found");
      } else {
        console.log("Data", ID);
        resolve("Task Done");
      }
    }, 2000);
  });
}

// const abc = getData(3);

getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(4);
  })
  .catch((rej) => {
    console.log(rej);
  });


  function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

getData().then((data) => {
    console.log(data);
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);

  function add(num) {
    return new Promise((resolve) => {
        resolve(num + 50);
    });
}

add(5)
    .then((result) => {
        console.log(result); 
        return result * 3;
    })
    .then((result) => {
        console.log(result); 
    })
