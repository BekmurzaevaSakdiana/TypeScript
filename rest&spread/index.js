// spread оператор (...) для объединения двух массивов

// const num1 = [1, 2, 3, 4, 5, 6];
// const num2 = [7, 8, 9, 10];

// const allNums = [...num1, ...num2];
// console.log(allNums);

// let obj1 = {
//   name: "Alla",
//   age: 66,
// };

// let obj2 = {
//   name: "Galkin",
// };

// let allObj = { ...obj1, ...obj2 };

// console.log(allObj);

// const fruits = ["apple", "banana", "cherry"];
// const vegetables = ["carrot", "broccoli", "spinach"];
// const food = [...fruits, ...vegetables, "grape", "potato"];
// console.log(food);

// const user = {
//   name: "Alice",
//   age: 25,
//   city: "New York",
// };

// const additionalInfo = {
//   occupation: "Engineer",
//   hobby: "Photography",
// };

// const info = { ...user, ...additionalInfo };
// console.log(info);

// function profession(teacher,firstblockStudent,secondblockStudent,...otherStudents){
//     return{
//         teacher,
//         otherStudents
//     }
// }

// const result=profession('Тыны','Фбубакир','Диана','Jonny','Dior')
// console.log(result);

function mergeAndFilter(nums1, nums2, ...additionalNums) {
    // Объединяем все массивы в один с помощью spread оператора
    const allNums = [...nums1, ...nums2, ...additionalNums];
  
    // Фильтруем числа, оставляя только те, которые больше 10
    return allNums.filter(num => num > 10);
  }
  
  const result = mergeAndFilter([1, 15, 3], [8, 25, 10], 12, 5, 18);
  console.log(result);

  
