//await --> await basically paused the surrounding async function execution and wait for the current function promise status

//Async function always return a promise...code in async await is much more understandable and managible

function passwordVerification(password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching Password...");
            if (password === "Amit@2004") {
                console.log(" Password Verified");
                resolve("Password OK");
            } else {
                reject(" Wrong Password");
            }
        }, 2000);
    });
}

function userIdVerification(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching UserId...");
            if (userId === "amit@gmail.com") {
                console.log(" User Found");
                resolve("User OK");
            } else {
                reject(" User Not Found");
            }
        }, 2000);
    });
}

async function loginUser() {
    try {
        await userIdVerification("amit@gmail.com");
        await passwordVerification("Amit@2004");
        console.log("🎉 Login Successful!");
    } catch (err) {
        console.log("🚫 Login Failed:", err);
    }
}

loginUser();
