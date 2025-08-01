//역 for 반복문을 실습하는 코드 -> 역 for 문은 배열 반복을 뒤에서부터 수행할 때 사용하는 문법이다!
let array = [1, 2, 3, 4, 5, 6];

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}