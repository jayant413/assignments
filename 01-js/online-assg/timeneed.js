

function updatedTime(startTime) {

    for (let i = 0; i < 10000000000; i++) { };
    let endTime = new Date();

    console.log('End time : ', endTime.toLocaleString('en-US', { timeZone: 'Asia/kolkata' }));

    console.log((new Date() - startTime) / 1000);
}

setTimeout(function () {
    let startTime = new Date();
    console.log('Start time : ', startTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    updatedTime(startTime);
}, 1000)