let isDone: boolean = false

let decLiteral: number = 20
let hexLiteral:number = 0x14
let binaryLiteral:number = 0b10100
let octalLiteral: number = 0o24

let str:string = 'bob'
str = 'smith'


// let list: number[] = [1,2]
// let list: Array<number> = [1, 2, 3]


enum Color {
    Red = 1,
    Green,
    Blue
}
let colorName:string = Color[2]
console.log(colorName)

let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false
let list: any[] = [1, true, 'free']
list[1] = 100

function warnUser(): void {
    console.log('This i my waring message')
}
let unusable: void = null


function error(message: string): never {
    throw new Error(message)
}
function fail() {
    return error('somthing failed')
}
function inifiniteLoop():never {
    while (true) {

    }
}

declare function create(o:object | null): void;

create({prop:0})
create(null)
// create(42)
// create('string')
// create(false)
// create(undefined)
