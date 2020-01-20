//기본 타입들
let num : number;
num = 3;
let str : string = 'hello';
let arr: (string | 3 | boolean)[] = [true, 3 ,'hello'];

const obj: {a:string, b?:number} = {a:'b'};

//enum의 활용
enum Color {red,green,blue}
let c: Color =Color.green;
Color[0] === 'Red';
Color['red'] === 0;

function add(a:number, b:number): void { //리턴값이 없는 함수
    console.log(a+b)
}

function add2(a:number, b:number): (c: string) => number {
    return (c: string) => {
        return 3;
    }
}

const obj2: {a:(b?:number) => string} = {
    a(b?:number){
        return 'hi'
    }
}

//d.ts
const hello: number;

(hello as unknown as string).substr(1,2)

(<string><unknown>hello).substr(1,2)

const div = document.createElement('div');
const a = div as HTMLElement