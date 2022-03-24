<script>
    /*
    svelte 컴포넌트의 라이프사이클 함수 4종
    onMount: 컴포넌트 인스턴스가 생성되고 DOM에 추가될 때
    beforeUpdate: 컴포넌트가 DOM에 업데이트되기 직전
    afterUpdate: 컴포넌트가 DOM에 업데이트된 직후
    onDestroy: 컴포넌트가 DOM에서 제거될 때
    tick: nextTick과 동일한 의미이며 DOM에 컴포넌트 동작이 반영된 이후에 동작하는 것을 보장함
    */
        
    // 테스트용 input 박스에 포커스 주기
    // document.getElementById("text01").focus();
    // Uncaught (in promise) TypeError: Cannot read properties of null (reading 'focus')
    // 이 시점에는 아직 DOM에 id="text01"인 input 박스가 추가되지 않았다.
    
    let txt; // input 박스 위치 저장용 전역 변수 설정
    let x = 0; // 바인딩 변수 x를 선언

    // svelte 컴포넌트 임포트, 라이프사이클 함수 4종 꺼내기 + tick
    import { onMount, beforeUpdate, afterUpdate, onDestroy, tick } from "svelte";

    // onMount 예제 코드
    onMount(() => {
        // onMount의 콜백함수는 모든 엘리먼트가 준비된 이후에 호출됨
        txt = document.getElementById("text01"); // DOM에서 엘리먼트 찾기
        txt.focus(); // 포커스 주기
        console.log("Child onMount 호출됨");
        
        // onDestroy와 같은 동작
        return ()=>{ console.log("Child가 파괴되었습니다."); }
    });

    // onDestroy 예제 코드
    onDestroy(() => {
        // onDestroy의 콜백함수는 DOM에서 컴포넌트가 파괴될 때 호출됨
        console.log("Child onDestroy 호출됨");
    });

    // beforeUpdate 예제 코드
    beforeUpdate(() => {
        // beforeUpdate의 콜백함수는 onMount 호출 이전에 호출됨
        console.log(`Child beforeUpdate 호출됨. x is ${x}`); // 바인딩 변수 x의 변화 확인
        // console.log(`Child beforeUpdate 호출됨. txt.value is ${txt.value}`) // 바뀌기 이전 값 확인
        // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'value')
        if (txt) console.log(`Child beforeUpdate 호출됨. txt.value is ${txt.value}`) // 바뀌기 이전 값 확인 (예외처리)
    });

    // afterUpdate 예제 코드
    afterUpdate(() => {
        // afterUpdate의 콜백함수는 onMount 호출 이후에 호출됨
        console.log(`Child afterUpdate 호출됨. x is ${x}`); // 바인딩 변수 x의 변화 확인
        console.log(`Child afterUpdate 호출됨. txt.value is ${txt.value}`) // 바뀐 값 확인
    });
</script>

<h1>Child</h1>
<input type="text" id="text01" bind:value={x}/> <!-- 테스트용 input 박스 -->

<button on:click={() => {
    x = x + 1; // 클릭할 때마다 x값이 1씩 증가함
    console.log(`* x값: ${x}`); // 스크립트 블록의 x값 출력
    console.log(`* DOM: ${document.getElementById("text01").value}`); // DOM의 x값 출력
}}>add</button>

<!-- async 함수로 만들기 -->
<button on:click={async () => {
    x = x + 1; // 클릭할 때마다 x값이 1씩 증가함
    await tick(); // DOM 업데이트가 끝나고 afterUpdate 이후까지 대기
    console.log(`* async x값: ${x}`); // 스크립트 블록의 x값 출력
    console.log(`* async DOM: ${document.getElementById("text01").value}`); // DOM의 x값 출력
}}>add async</button>