//nan 값에 대한 성질 실습
let nan = Number("안녕하세요");  //nan 변수 생성

console.log(nan == nan);        // nan 끼리 비교
console.log(nan != nan);

console.log(isNaN(nan));       //nan 값인지를 확인 -> isNan()

//실행 결과 : ReferenceError: isNan is not defined -> 대소문자 구분의 중요성!