// const valueFactory=(x:number)=>x;
// const myValue=valueFactory(11)

// // console.log(myValue);

// type TypeFactory<X>=X;
// type MyType=TypeFactory<number>

// interface ValueContainer<Value> {
//   value: Value;
// }

// type StringContainer = ValueContainer<string>;

// const x: StringContainer = {
//   value: "asdasdasdasdasd",
// };

class ArrayOfNumbers {
  constructor(private collection: number) {}

  get(index: number): number{
    return this.collection[index]
  }
}
