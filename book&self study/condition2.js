let date = new Date();  // 현재 시간,날짜 정보를 가져옴.

console.log(date.getFullYear()); //현재 연도
console.log(date.getMonth());    // 현재 월(0부터 이므로, 1을 뺀 값이 나옴)
console.log(date.getDay());      // 현재 날짜 -> 30일은 왜 그대로 출력이 안 됨??
console.log(date.getHours());    // 현재 시각
console.log(date.getMinutes());  // 현재 분

//if (date.getHours() < 12) {
    //console.log("오전입니다.");
//}

//if (date.getHours() >= 12) {
    //console.log("오후입니다.");
//}
if (date.getHours() < 12) {
    console.log("오전입니다.");
} else{
    console.log("오후입니다.");
}