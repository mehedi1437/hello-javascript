function isEven(number){
      const remainder = number % 2;
    //   console.log(reminder);
      if(remainder === 0){
        return true;
      }
      else{
        return false;
      }
}

const myNumberIsEven = isEven(1236);
console.log(myNumberIsEven)
const herNumberIsEven = isEven(1935);
console.log(herNumberIsEven);
