async function myAsyncFunction() {
    return 'Hello';
}

myAsyncFunction().then(
    function(value) {
        console.log(value);
    }
)

function myTimedFunction() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Async Hello!'), 3000);
    })
}

async function promiseInAction() {
    const result = await myTimedFunction();
    console.log(result); 
}

promiseInAction();

let myErrorPromise = new Promise(function(resolve, reject) {
   reject('От халепа');
})

myErrorPromise.then(
    function(error) {
        console.log(error.message);
    }
)

myErrorPromise.catch(
    function(error) {
        console.log(error.message);
    }
)
