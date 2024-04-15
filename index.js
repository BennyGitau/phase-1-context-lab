/* Your Code Here */
function createEmployeeRecord(string){
    return {
        firstName: string[0],
        familyName: string[1],
        title: string[2],
        payPerHour: string[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (array){
    return array.map(array => {
        return  createEmployeeRecord(array)
    });
}

function createTimeInEvent(datestamp){
    const [date,hour] = datestamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(hour),
        date
    })
    return this
    
}
function createTimeOutEvent(datestamp){
    const [date,hour] = datestamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(hour),
        date
    })
    return this
}
function hoursWorkedOnDate (date){
    const timeIn = this.timeInEvents.find(day=>day.date === date)
    const timeOut = this.timeOutEvents.find(day =>day.date === date)
    return (timeOut.hour - timeIn.hour) / 100;

}
function wagesEarnedOnDate (date){
    const payOwed = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return payOwed;

}
//find employee by firstname 
function findEmployeeByFirstName(collection, firstNameString){
    const employee = collection.find((record) => (record.firstName === firstNameString))
    
    return employee
    
}
//full payroll cost
function  calculatePayroll(employees){
    return employees.reduce((function(acc,payroll){
        return acc + allWagesFor.apply(payroll)
    }),0)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

