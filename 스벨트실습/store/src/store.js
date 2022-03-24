// 1. 스토어 패키지를 임포트 합니다.
import { writable, readable } from "svelte/store"; // 2-1. readable은 사실 read-only이다.

// 2. count 변수를 writable로 적용하고 10으로 설정합니다.
export const count = writable(10);

//3. 로그를 찍어 봅니다.
console.log(`스토어 count:`, count);

// 2-2. readable 스토어인 time을 생성
// redable(초기값, 구독 발생 시 호출될 콜백 함수)
export const time = readable(new Date(), function start(set) {
    console.log(`구독이 시작되었습니다.`);
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);
    return function stop() {
        console.log(`모든 구독이 종료되었습니다.`);
        clearInterval(interval);
    };
});