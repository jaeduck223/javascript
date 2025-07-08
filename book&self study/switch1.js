//switch 조건문 실습
let input = 32;

switch (input % 2) {
    case 0:               //switch 오른쪽의 괄호 속 값에 해당하는 숫자가 케이스이면 case 속 문장 실행
        console.log("짝수입니다.");
        break;            //break는 switch문을 빠져나가는 역할. 사용하지 않으면, 아래의 문장으로 계속 내려감.
    case 1:
        console.log("홀수입니다.");
        break;
}