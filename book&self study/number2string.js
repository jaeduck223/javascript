//숫자  + 문자열 시, 숫자가 문자열로 변환되어 적용
//+를 제외한 연산 시, 문자열이 숫자로 변환되어 적용

console.log(52 + 273);
console.log("52" + 273);
console.log("52" * 273);
console.log("52" + "273");

//불 자료형 자동변환 -> 조건문의 조건 표현식에 표현식과 !을 넣을 때, 불 자료형으로 자동 변환됨.
let nan = Number("안녕하세요");
let undefinedVariable;

console.log(!!0);
console.log(!!nan);
console.log(!!"");

//== -> 자료형과 값이 같은지를 비교하는 연산자
//!== -> 자료형과 값이 다른지를 비교하는 연산자
console.log(`52 == "52": ${52 == "52"}`);
console.log(`52 == "52": ${52 === "52"}`);
console.log();