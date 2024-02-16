function addNumbers(a:number,b:number) {
    return a+b;
}

const addNumbersArrow = (a:number , b:number):string =>{
    return `${a+b}`; // Inyeccion de valores de una expresion
}


function multiply(firstNumber: number, secondNumber?: number, base: number = 2):number {
    return firstNumber * base;
}

// const result = addNumbers(1,2);
// const resul2 = addNumbersArrow(1,2);
// const multiplyResult: number  = multiply(5);
// console.log({result, resul2, multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = (character: Character, amount: number) =>{
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}
healCharacter(strider, 10);
strider.showHp();
export{}