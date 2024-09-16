// function sum(...numbers: number[]): number {
//    let allSum=numbers.reduce((acc,curr)=>acc+curr,0);
//    return allSum;
// }

// let smth=sum(1,2)
// console.log(smth);


// function toUpperCase(str:string):string{
//     let sb=str.toUpperCase()
//     return sb;
// }


// console.log(toUpperCase('sdadad'));


// function filterNumbers(numbers: number[]): number[] {
//     let a = numbers.filter(item => item >= 10); 

//     return a; 
// }

// let all = filterNumbers([1, 2, 3, 4, 56]);
// console.log(all); 


// function reverseString(str:string):string{
//     let a=str.split('')
//     let b=a.reverse()

//     return b.join('')
// }


// console.log(reverseString('sakdiana'));




function mergeObjects(obj1:{},obj2:{},allObj:{}){
    allObj={...obj1,...obj2}
    return allObj
}