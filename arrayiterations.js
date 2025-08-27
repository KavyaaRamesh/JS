// let colours = ["red", "Blue", "Green"]
// colours.forEach(function(col){
//     console.log("colour :",col);
    
// })

// let numbers = [1, 2, 3]
// let array = numbers.map(function(num){
//     return(num * 2)
    
// })
//  console.log(array)

// let products = [500, 1000, 1500]
// let discount = 0.1;
// let finalprice = products.map(function(product){
//     return (product - product * discount )
// })
// console.log(finalprice);


// let ages = [12, 25, 17, 30, 15, 19];
// let array = ages.filter(function(ages){
//     return(ages > 18);
    
// })
// console.log(array);


let salaries = [20000, 30000, 25000, 40000];
let average = salaries.reduce(function(total,salaries){
    return (total + salaries)
}) / salaries.length
console.log(average);
