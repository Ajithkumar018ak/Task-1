/*1

console.log("Order placed");

setTimeout(() => {
    console.log("Preparing food");
}, 2000);

setTimeout(() => {
    console.log("Food ready");
}, 4000);

setTimeout(() => {
    console.log("Delivered");
}, 5000);

// 2

let count = 0;

let clock = setInterval(() => {
    let time = new Date().toLocaleTimeString();
    console.log(time);

    count++;

    if (count === 10) {
        clearInterval(clock);
        console.log("Clock stopped");
    }
}, 1000);

//3


function loginUser(callback) {
    setTimeout(() => {
        console.log("User Logged In");
        callback();
    }, 1000);
}

function getUserData(callback) {
    setTimeout(() => {
        console.log("User Data Fetched");
        callback();
    }, 2000);
}

function getUserPosts() {
    setTimeout(() => {
        console.log("User Posts Fetched");
    }, 3000);
}


loginUser(() => {
    getUserData(() => {
        getUserPosts();
    });
});


//4


function getProducts() {
    return new Promise((resolve, reject) => {

        let success = true; // change false to test error

        setTimeout(() => {
            if (success) {
                resolve(["Mobile", "Laptop", "TV"]);
            } else {
                reject("API Failed");
            }
        }, 2000);

    });
}

getProducts()
    .then((data) => {
        console.log("Products:", data);
    })
    .catch((err) => {
        console.log("Error:", err);
    })
    .finally(() => {
        console.log("API Call Completed");
    }); */