//조건 연산자를 실습하는 부분
//조건 연산자 : 자바스크립트에서 유일하게 피연산자를 3개 가지는 연산자임!(삼항 연산자)
let test;

test = typeof(test) != 'undefined' ? test : "초기화_1"; //삼항 연산자를 이용해서 변수가 undefined인지 확인하고 초기화함
console.log(test)

test = typeof(test) != 'undefined' ? test : "초기화_2";
console.log(test)

//위의 코드를 일반 조건문으로 다시 작성한 버전
let test1;

if (typeof(test1) != 'undefined') {
    test1 = "초기화_1"
}
console.log(test1)

if (typeof(test1) != 'undefined') {
    test1 = "초기화_2"
}
console.log(test1)