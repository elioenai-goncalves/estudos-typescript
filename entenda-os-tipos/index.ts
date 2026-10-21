// let nome: string = "Elioenai";   TS

// let idade: number = 36;          TS

// let mandouEmail: boolean = true; TS

// const nome = "Elioenai";         JS
let nome: string = "Elioenai";      /*TS*/

// let idade = 36;                  JS
let idade: number = 36;             /*TS*/

// const mandouEmail = true;        JS
let mandouEmail: boolean = true;    /*TS*/


// let idades: number[] = [ 11, 22, 44];

let idades: Array<number> = [ 11, 22 , 44 ]; 

let nomes: string[] = [ "Elioenai", "Chaiene", "Benjamin", "Isis"];

let obj: any = {x:0};

function imprimirCordenadas(pt: { x: number, y: number }) {
    console.log("The coordinate's x value is" + pt.x);
    console.log("The coordinate's y value is" + pt.y);
}

imprimirCordenadas({ x: 3, y: 7});

let objs: { x: number, y: number } = { x: 3, y: 7 };