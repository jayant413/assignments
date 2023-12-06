let counter = 30;

function displayCounter() {
    console.clear();
    console.log(counter)
    counter -= 1;
    if (counter == -1) clearInterval(counterInterval);
}

const counterInterval = setInterval(displayCounter, 1000)

