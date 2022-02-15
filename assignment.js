//problem-1:
function anaToVori(ana) {
    const vori = ana / 16;
    if (typeof ana != 'number') {
        return 'Please input a number';
    }
    else if (ana <= 0) {
        return 'plese input a valid number';
    }
    else {
        return vori;
    }
}


//problem-2:
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    let totalSingaraPrice = singaraQuantity * 7;
    let totalSomuchaPrice = somuchaQuantity * 10;
    let totalJilapiPrice = jilapiQuantity * 15;
    const totalPrice = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
    if (typeof singaraQuantity != 'number' || typeof somuchaQuantity != 'number' || typeof jilapiQuantity != 'number') {
        return 'please input a number';
    }
    else if (singaraQuantity <= 0 || somuchaQuantity <= 0 || jilapiQuantity <= 0) {
        return 'please input a valid number';
    }
    else {
        return totalPrice;
    }
}

//problem-3:
function picnicBudget(number) {
    if (typeof number != 'number') {
        return 'please input a number';
    }
    else if (number <= 0) {
        return 'please input a valid number';
    }
    else if (number <= 100) {
        let budget = number * 5000;
        return budget;
    }
    else if (number <= 200) {
        let firstbudget = 100 * 5000;
        let remainingPeople = number - 100;
        let remainingPeopleBudget = remainingPeople * 4000;
        let budget = firstbudget + remainingPeopleBudget;
        return budget;
    }
    else if (number > 200) {
        let firstbudget = 100 * 5000;
        let secondBudget = 100 * 4000;
        let remainingPeople = number - 200;
        let remainingPeopleBudget = remainingPeople * 3000;
        let budget = firstbudget + secondBudget + remainingPeopleBudget;
        return budget;
    }
}

//problem-04:
function oddFriend(names) {
    let odd = names[0];
    if (Array.isArray(names) != true) {
        return 'please enter an array';
    }
    for (let i = 0; i < names.length; i++) {
        let element = names[i];
        if (element.length % 2 != 0) {
            odd = element;
            break;
        }
        else {
            continue;
        }
    }
    return odd;
}



