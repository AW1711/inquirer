// // let myPosts = ["post1", "post2", "post3"];

// // // const allPosts = () => {
// // //     setTimeout(() => {
// // //         myPosts.map((post)=> console.log(post))
// // // }, 1000);
// // //     };
// // // const createPost = (post, callback)=> {
// // //     setTimeout(()=>{
// // //         myPosts.push(`${post}`);
// // //         callback();
// // //     },2000);
// // //     };

// // // createPost(`post4`, allPosts);

// // let users = ['Dave', 'Gary', 'Steve']

// // const addUser = (username) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             users.push(username)
// //             const error = false
// //             if(!error) {
// //                 resolve()
// //             } else {
// //                 reject('oops there has been an error')
// //             }
// //         }, 2000)
// //     })
// // }
// // const getUsers = () => {
// //     setTimeout(() => {
// //         console.log(users)
// //     }, 1000)
// // }

// // let init = async()=> {
// //     await addUser("charlie")
// //     getUsers()

// // }
// // init()
// // addUser('Charlie')
// //     .then(getUsers)
// //     .catch((err) => {
// //         console.log(err)
// //     })

// const myAsyncFunction = ()=> {
//     return new Promise ((resolve, reject)=> {
//         let a = 2+1 
//         if (a ==2){
//             resolve("my promise has resolved")
//         } else {
//             reject("my promise has rejected")
//         }
//     })
// }
// const init = async () => {
//     try {
//         let response = await myAsyncFunction()
//         console.log(response)
// } catch(error) {
//     console.log(error)
// }
// }
// init()

let getAdvice = async()=> {
    let response = await fetch("http://api.adviceslip.com/advice")
    let data = await response.json()
    console.log(data)
}
getAdvice()