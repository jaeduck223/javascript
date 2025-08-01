//if - else - if 조건문
let date = new Date();    //현재 날짜와 시간 정보를 가진 객체 생성 -> Date 객체 : 시간 관련 작업을 도와주는 도구
let hours = date.getHours(); // .getHours() Date 객체에서 시간 정보만 뽑아와서 변수에 넣어주는 함수
//if-else-if 조건문은 중복되지 않는 세가지 이상의 조건을 구분할 때 사용하는 문법이다!
if (hours < 11) {
    console.log("아침 먹을 시간입니다.");
} else if (hours < 15) {
    console.log("점심 먹을 시간입니다.");
} else {
    console.log("저녁 먹을 시간입니다.");
}