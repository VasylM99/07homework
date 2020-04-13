const ukraine = { tax: 0.195,
middleSalary: 1789,
vacancies: 11476 };

const latvia = { tax: 0.25,
middleSalary: 1586,
vacancies: 3921 };

const litva = { tax: 0.15,
middleSalary: 1509,
vacancies: 1114 };


let getMyTaxes = function (salary) {
    let taxes = this.tax*salary;
    return taxes;
}

console.log('getMyTaxes: ', getMyTaxes.call(latvia,1500));

let getMiddleTaxes = function () {
    let middleTaxes = this.tax*this.middleSalary;
    return middleTaxes;
}

console.log('getMiddleTaxes: ', getMiddleTaxes.call(latvia));

let getTotalTaxes = function () {
    let totalTaxes = this.tax*this.middleSalary*this.vacancies;
    return totalTaxes;
}

console.log('getTotalTaxes: ', getTotalTaxes.call(latvia));

let getMySalary = function () {
    let mySalary = {};
    let salary = Math.floor((1500 + Math.random()*(2000+1-1500)));
    mySalary.salary = salary;
    mySalary.taxes = this.tax*mySalary.salary;
    mySalary.profit = (mySalary.salary-mySalary.taxes);
    
    return mySalary;
}
setInterval(() => console.log('getMySalary: ', getMySalary.call(latvia)),10000);
