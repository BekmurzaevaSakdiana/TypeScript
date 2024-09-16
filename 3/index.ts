// let arr :string[]=['a','b','c']
// arr.push('adfsfd')

// const arr1:Array<number>=[1,1,1,1,1,1,11,1,1,1,111,1,1,1,1,1]
// console.log(arr);

// const arr2 :string[][]=[]

// OBJECT

// type MyObj = {
//   a: number;
//   b: number;
//   c: string;
// };

// const obj:MyObj={a:1,b:2,c:'asdasdasd'}
// const obj1:object={}

// interface MyOb2j {
//   name: string;
//   age: number;
//   isHeDumb?: boolean;
// }

// const obj12: MyOb2j = {
//   name: "Travis",
//   age: 30,
//   isHeDumb: false,
// };

// console.log(obj12);

// че то связанное с interface

interface IPerson {
  age: number;
}

interface IAccount {
  email: string;
  login: string | number;
  active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
  skills: string[];
  level?: string;
}

const john2: IDeveloper = {
  age: 30,
  email: "trav@gmail.com",
  login: "1212sas",
  active: true,
  skills: ["pinat hui"],
}
;

console.log(john2);

