//for in 반복문과 for of 반복문을 실습하는 코드 -> 아직 이해가 안 되었음!
let array = ["apple", "mango", "banana", "kiwi", "orange"];

for (let i in array) {
    console.log(`${i}번쨰 요소: ${array[i]}`);

}
console.log("---------구분선-------");

for (let item of array) {
    console.log(item);
}