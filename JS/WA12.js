
// Problem 1
let employees = [
    {"firstname": "Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raiseEligible":true},
    {"firstname": "Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raiseEligible":true},
    {"firstname": "Bill", "department":"HR", "designation":"Executive", "salary":21200, "raiseEligible":false}
]

// Problem 2
let companyInfo = { "company":
    {"company name": "Tech Stars", "website": "www.techstars.site", "employees": employees}
}
console.log("Problem 1: ")
console.log(employees)
console.log("Problem 2: ")
console.log(companyInfo.company)

// Problem 3
employees.push({"first name": "Anna", "department":"Tech", "designation":"Executive", "salary":25600, "raiseEligible":false})
console.log("Problem 3: ")
console.log(employees)

// Problem 4
console.log("Problem 4: ")
let total = 0
for(let i = 0; i < 4; i++) {
    // console.log(employees[i].salary)
    total += employees[i].salary
}
console.log(total)

// Problem 5
console.log("Problem 5: ")
for(let i = 0; i < 4; i++) {
    if (employees[i].raiseEligible === true){
        employees[i].salary = employees[i].salary * 1.1
    }
}
console.log(employees)

// Problem 6
console.log("Problem 6: ")
for(let i = 0; i < 4; i++) {
    if (employees[i].firstname === "Anna" || employees[i].firstname === "Sam") {
        employees[i].wfh = true
    } else {
        employees[i].wfh = false
    }
}
console.log(employees)

