// function getSumOfAnArray(numbers){
    
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[i];
//         console.log(index,element);
//     }
// }



// const myNumbers = [12,65,45,78,32,45,91]
//  getSumOfAnArray(myNumbers);

function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        sum = sum + element ;
        console.log(index,element,sum);
        
    }
    return sum;
}

const myNumbers = [12, 15, 25, 30, 49, 52,65];
getSumOfAnArray(myNumbers);