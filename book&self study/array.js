//반복문을 공부하기 위해 배열을 실습하는 코드
let array = [52, 273, '아침밥', '점심밥', true, false]  //배열을 선언함
//배열 속 첫번째 요소의 값을 변경
array[0] = 0
//배열 내부의 요소들을 차례로 출력하는 부분
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
// 배열의 크기보다 큰 값의 인덱스를 출력하면 'false' 값이 출력
//length 속성 -> 배열에 요소가 몇 개 들어 있는지를 출력하는 기능 담당
let array1 = [52, 273, 32, 65, 103];

console.log(array1);         //배열 그대로 출력
console.log(array1.length);  //배열의 크기를 출력