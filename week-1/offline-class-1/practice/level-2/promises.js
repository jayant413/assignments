


function getData() {
    let number = Math.random() * 10;
    let success;

    parseInt(number) % 2 === 0 ? success = true : success = false;

    let p = new Promise((resolve, reject) => {
        console.log(parseInt(number))

        setTimeout(() => {
            if (success) resolve({
                user: "user134", password: "password134"
            })
            else reject("User not found")
        }, 2000);
    })

    return p;
}


getData().then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error);
})