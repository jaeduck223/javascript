//boolean 함수에서 false 값을 반환하는 경우 실습
let nan  = Number("안녕하세요"); // 변수 선언
let undefinedVariable;
//5가지 경우 다 false 값을 반환함.
console.log(Boolean(0));
console.log(Boolean(nan));
console.log(Boolean(""));
console.log(Boolean(undefinedVariable));
console.log(Boolean(null));