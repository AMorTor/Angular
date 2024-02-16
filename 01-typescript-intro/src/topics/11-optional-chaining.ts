
export interface Passanger {
    name: string,
    children?: string[];
}

const passanger1: Passanger = {
    name: 'Alejandro',
}

const passanger2: Passanger = {
    name: 'Moriss',
    children: ['Denny', 'Pao']
}

const printChildren = (passanger: Passanger)=> {
    const howManyChildren = passanger.children?.length || 0;
    console.log(howManyChildren)
}

printChildren(passanger2);