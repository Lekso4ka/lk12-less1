console.log("Async");

/*
    tom1(cb => {
        tom2(cb => {
            tom3(cb => {
                tom4(cb => {
                    "Lucky me!"
                })
            })
        })
    })
*/

/* Promise */

/*
    Мама готовит ужин и попросила дочь порезать хлеб. Также мама попросила сына купить хлеб.

    Брат пошел за хлебом.
    ? Брат может не дойти до магазина.
    ? Брат не смог купить хлеб
    В этот момент сестра берет нож и ждет у двери пока вернется брат
    ! Сестра может заняться чем-то еще!
    Брат приносит хлеб ?
    Сестра режет хлеб к ужину
*/
let promise1 = new Promise(function(resolve, reject) {
    // resolve - успех (обещание выполнено)
    // reject - поражение (обещание не выполнено)
    // setTimeout(function() {
        let n = Math.random(); // 0.0000001 - 0.9999999
        if (n > 0.5) {
            resolve("Хлеб был куплен");
        } else {
            reject("Хлеба на ужин не будет")
        }
    // }, 5000)
});
let promise2 = new Promise(function(resolve, reject) {
    let n = Math.random();
    if (n > 0.3) {
        resolve("Хлеб нарезан");
    } else {
        reject("Что-то пошло не так");
    }
})

// tag.addEventListenner("click", a => {
//     console.log(a);
// })

// console.log(promise);
/*
promise1
    .then(data => {
        console.log(data);
        return promise2;
    })
    .then(data => {
        console.log(data);
    })
    .catch(data => {
        console.log(data);
    })
*/

console.log(promise1)

promise1
    .then(bread => {
        console.log(bread);
        return promise2;
    })
    .then(dinner => {
        console.log(dinner);
    })
    .catch(err => {
        console.log(err);
    })