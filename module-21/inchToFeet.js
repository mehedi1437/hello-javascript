function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInch = 144;
const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet);

const nanaInch = 168;
const nanFeet = inchToFeet(nanaInch);
console.log(nanFeet)