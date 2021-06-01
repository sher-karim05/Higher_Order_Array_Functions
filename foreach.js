const companies = [
    {name: "Dot Austere", started: 2011, progress:"Better", end: 2041},
    {name: "Core Cloud", started: 2016, end: 2026, progress: "Good"},
    {name: "Tech Space", started: 2015, end: 2025, progress: "very good"},
    {name: "Taqpa", started: 2013, end: 2023, progress: "Better"},
    {name: "U Connect", started: 2012, end: 2022, progress: "Better"},
    {name: "Calibron", started: 2017, end: 2027, progress: "Excellent"},
    {name: "She Dev", started: 2019, end: 2029,progress: "Better"},
]

const ages = [20,37,32,45,76,98,78,56,65,87]



//Higer Order functions Defination
 
// A function that accepts another function is called higer order function.

/**
 * 1. Simple and Elegant Code
 * 2.Fewer Bugs 
 * 3.Easy to Test and Debug
 */

//for loop
for(let i = 0; i < companies.length; i++){
    // console.log(companies[i])
}

//forEach

companies.forEach((company)=>console.log(company.name))

// let canDrink = [];
// for(let i = 0; i < ages.length; i ++){
//     if(ages[i] >=21){
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink)

//the above and below code are same but arrow function is prettier then local function.


const canDrink = ages.filter((age)=> age >= 21);
console.log(canDrink)

//Get companies above 2010 

const companiesTen = companies.filter(company => company.started >= 2010);
console.log(companiesTen)

//Map array method
/**
 * Map is a collection of elements where each element is stored as a Key, value pair.
 * 
 * Map Object can hold both object and primitive value as either key or value. 
 * 
 * in return the key value pair in the same order as inserted */



//Create an array of company names

const companyPerformance = companies.map((performnace)=> {
    return performnace.progress;
})

console.log(`The Progress is ${companyPerformance}`)

//create names and year of creation and extention

const testMap = companies.map((company)=>{
    return `${company.name} [${company.started} - ${company.end}]`
})

console.log(testMap);

// take square root of ages

const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)

const ageMap = ages.map(age=> age * 2);
console.log(ageMap)

//Sort
/**
 * Sorting companies by start years
 */

//Normal function syntax
const sortedCompanies = companies.sort (function company(a,b){
    return a.started > b.started
})
console.log(sortedCompanies)

//ES6 syntax
// const sortedCompanies = companies.sort((a,b) => (a.started > b.started ? 1 : -1))
// // console.log(sortedCompanies)

//sort company names 

const sortCompanyName = companies.sort ((a,b)=> (a.name > b.name ? 1 : -1))
console.log(sortCompanyName)

//reduce 

// reduce through for loop
// let ageSum1 = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum1 += ages[i]
// }

const ageSum = ages.reduce((total,age) => total + age, 0)
console.log(ageSum)

