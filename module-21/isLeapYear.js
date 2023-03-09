// kono ekta bochor ke jodi 4 diye vag kora jai tahole seta leap year 

function isLeapYear(year){
        const remainder = year % 4;
        if(remainder === 0){
            return true;
        }
        else{
            return false;
        }
}

const isMyYear = isLeapYear(2020);
console.log(isMyYear);
const isHerYear = isLeapYear(2033);
console.log(isHerYear);
