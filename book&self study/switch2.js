//switch 조건문에서 break 없는 경우 실습
let date = new Date();

switch (date.getMonth() + 1) {
    case 12:
    case 1:
    case 2:
        console.log("겨울");
        break;
    case 3:
    case 4:
    case 5:
        console.log("봄");
        break;
    case 6:
    case 7:
    case 8:
        console.log("여름");
        break;
    case 9:
    case 10:
    case 11:
        console.log("가을");
        break;
    default:
        console.log("????");
        break;
}
