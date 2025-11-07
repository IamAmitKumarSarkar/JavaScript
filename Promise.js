
/* promise is a  solution which is arise from callback hell...

 -> It is an Object of Javascript

 -> It is for eventual complition of Task..it has 2 handler (Response,reject)which is basically a callback function provide by js...

 -> and it has three state pending , full_filled and reject
 */

function getUserId(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId){
                console.log("UserID:", userId);
                resolve("User Found");
            } else {
                reject("User Not Found");
            }
        }, 3000);
    });
}

function getPassword(password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password){
                console.log("Password:", password);
                resolve("Password Verified");
            } else {
                reject("Invalid Password");
            }
        }, 2000);
    });
}

console.log("Fetching User...");
getUserId("amit@gmail.com")
.then((res) => {
    console.log(res);
    console.log("Fetching Password...");
    return getPassword("Amit@2004");
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log("Error:", err);
});
