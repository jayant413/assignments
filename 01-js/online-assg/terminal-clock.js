

function displayTime() {
    let date = new Date();

    const options = { timeZone: 'Asia/Kolkata' }

    const optionsTime = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const optionsDate = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };

    const indiaTimeString = date.toLocaleString('en-US', options);
    // console.log('\x1Bc')
    console.clear();
    console.log(indiaTimeString);
}

setInterval(displayTime, 1000);

