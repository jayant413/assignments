
try {
    let result = eval('10 / 0')
    console.log(result)
} catch (error) {
    console.log(error.message)
}