// 1. 스토어 패키지를 임포트 합니다.
// 2-1. readable은 사실 read-only이다.
// 3-1. derived 꺼내기
import { writable, readable, derived } from "svelte/store";

// 2. count 변수를 writable로 적용하고 10으로 설정합니다.
export const count = writable(10);

//3. 로그를 찍어 봅니다.
console.log(`스토어 count:`, count);

// 2-2. readable 스토어인 time을 생성
// redable(초기값, 구독 발생 시 호출될 콜백 함수)
export const time = readable(new Date(), function start(set) { // 무기명 함수 (set) => 으로도 가능
    console.log(`구독이 시작되었습니다.`);
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);
    return function stop() { // 무기명 함수 () => 으로도 가능
        console.log(`모든 구독이 종료되었습니다.`);
        clearInterval(interval);
    }
});

// 3-2. derived 함수로 power 스토어와 elapsed 스토어 만들기
// derived(원본 스토어, 무기명 함수 형태의 원본 스토어 변경 시 호출될 콜백 함수)
export const power = derived(count, $count => $count * $count);

const start = new Date(); // 페이지 접속 시간
export const elapsed = derived(time, ($time, set) => {
    set(Math.round(($time - start) / 1000));
    return () => {
        // 실행이 종료되었을 때 구문
    }
});