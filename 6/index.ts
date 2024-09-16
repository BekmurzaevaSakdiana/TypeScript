// const valueFactoy=(x:number)=>x;
// const myValue=valueFactoy(11)

// type TypeFactory<X>=X;
// type MyType=TypeFactory<string>

// interface IValueContainer<Value>{
//     value:Value;
// }

// type StringContainer=IValueContainer<string>
// const x:StringContainer={
//     value:'xxxtentacion'
// }

// class ArrayOfAnything<Type> {
//   constructor(public collection: Type[]) {}

//   get(index: number): Type {
//     return this.collection[index];
//   }
// }

// new ArrayOfAnything<string>(['1','2','3'])
// new ArrayOfAnything<number>([1,2,3,4])

// function printAnything<T>(arr: T[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr);
//   }
// }

// printAnything<number>([1,2,34])

function fillArray<T>(len:number,elem:T):T[]{
    return new Array<T>(len).fill(elem)
}

const arr1=fillArray<string>(10,'*')
