function generateCode(length, includeLowercase, includeUppercase, includeNumber ) {
    const lowercaseChar = "abcdef";
    const uppercaseChar = "ABCDEF";
    const numberChar = "1234567890";

    let allowedChar = "";
    let Code = "";

    allowedChar += includeLowercase ? lowercaseChar : "";
    allowedChar += includeUppercase ? uppercaseChar : "";
    allowedChar += includeNumber ? numberChar : "";

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        Code += allowedChar[randomIndex];
    }

    return Code;
}

const length = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;

const RandomCode = generateCode(length, includeLowercase, includeUppercase, includeNumber);

console.log(RandomCode);