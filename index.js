function calculateTax(income, expenses) {

    if (income <= 0 || expenses <= 0 || income < expenses) {

        return "Invalid Input";

    }

    let incomeDif = income - expenses;

    let tax = incomeDif * .20;

    return tax;

}

function sendNotification(email) {

    if (email.includes('@') === false) {

        return "Invalid Email"

    }

    let arr = email.split('@');

    let lastIndex = arr.slice(-1)

    let gamil = arr[0] + ' sent you an email from '.concat(lastIndex);

    return gamil;

}

function checkDigitsInName(name) {

    if (typeof name !== 'string') {

        return "Invalid Input";

    }

    let digitCheck = /\d/.test(name);

    if (digitCheck) {

        return true;

    }

    else {

        return false;

    }

}

function calculateFinalScore(obj) {

    if (typeof obj !== 'object') {

        return "Invalid Input";

    }

    let finaScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {

        finaScore = obj.testScore + obj.schoolGrade + 20;

    }

    if (finaScore >= 80) {

        return true;

    }

    else {

        return false;

    }

}

function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {

        return "Invalid Input";

    }

    let sum = 0;

    let len = waitingTimes.length;

    for (let number of waitingTimes) {

        sum = Math.round(sum + number / len);

    }

    let serials = serialNumber - 1;

    let serial = serials - waitingTimes.length;

    let waitTime = sum * serial;

    return Math.round(waitTime);

}