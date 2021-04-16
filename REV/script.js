const getCount = (str) => {
    let vowelsCount = 0;
    let vowels = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'u' ||
            str[i] === 'o' ||
            str[i] === 'i'
        ) {
            vowelsCount++
        }
    }
    return vowelsCount;
}


const even_or_odd = (number) => {
    let mod = number % 2;
    if (mod === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}
const even_or_odd = (number) => {
    return number % 2 === 0 ? 'Even' : 'Odd';
}


const getMiddle = (s) => {
    const mod = s.length % 2
    const midle = Math.floor(s.length / 2)
    if (mod === 0) {
        return s[midle - 1] + s[midle]
    } else {
        return s[midle]
    }
}


const accum = (s) => {
    let resultat = ''
    for (let i = 0; i < s.length; i++) {
        resultat += s[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            resultat += s[i].toLowerCase()
        }
        if (i != s.length - 1) resultat += '-'
    }
    return resultat
}

const password = ':ljlkhlhkjh';

const l = password.length;

const basicOp = (operation, value1, value2) => {
    switch (operation) {
        case '+' :
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
        default :
            return 0
    }
}


const countSheeps = (arrayOfSheep) => {
    let cpt = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) cpt++
    }
    return cpt
}
const countSheeps = (arrayOfSheep) => {
    return arrayOfSheep.filter(el => el === true).length
}





















