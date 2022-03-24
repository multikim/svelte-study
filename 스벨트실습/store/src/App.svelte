<script>
	let rangeValue = 50; // range 초기값

	// 1. 파일 임포트 (store.js에서 count를 꺼낸다)
	// 3-2. power, elapsed 꺼내기
	import { count, power, elapsed } from "./store.js";
	// 자동구독(auto-subscription)으로 간단하게 사용하기
	/*
	// svelte 임포트, 라이프사이클 함수 onDestroy 꺼내기
	import { onDestroy } from "svelte";

	// 2. 구독(count 값 변경 시 rangeValue 업데이트 하기)
	const unsubscribe = count.subscribe((v) => {
		rangeValue = v;
		console.log("count 변경 감지!");
	});

	// 3. 구독 종료하기
	// subscribe 함수의 반환값을 호출하면 구독해제된다.
	onDestroy(unsubscribe); // 컴포넌트 소멸 시점에 구독해제하기

	// 4. 스토어 값 변경하기(rangeValue 값 변경 시 count도 업데이트 하기)
	$:count.set(rangeValue);
	*/

	// 다른 컴포넌트 추가하기
	import Increase from "./Increase.svelte"; // count 증가 기능 컴포넌트
	import Decrease from "./Decrease.svelte"; // count 감소 기능 컴포넌트

	// 시간 표시하기
	// 2-5. time 추가
	import Time from "./Time.svelte";

	// 2-6. flag 변수 생성: 하위 템플릿 생성을 결정함
	let flag1 = false;
	let flag2 = false;
</script>

<main>
	<section>
		<!-- h2>count는 {rangeValue} 입니다.</h2 -->
		<!-- input type="range" bind:value={rangeValue} step=1 min=1 max=100 -->
		<!-- 자동구독 사용하기 -->
		<h2>count는 {$count} 입니다.</h2>
		<input type="range" bind:value={$count} step=1 min=1 max=100>
	</section>
	<section> <!-- 감소/증가 버튼 인스턴스 생성 -->
		<Decrease/><Increase/>
	</section>

	<!-- 2-7. time 표시하기 -->
	<section>
		<br>
		<!-- 2-8. 템플릿 생성 결정 -->
		<input type="checkbox" bind:checked={flag1}> 시간 표시 1
		{#if flag1} <!-- 체크 여부에 따라 Time 컴포넌트 토글 -->
			<Time/>
		{/if}
		<br>
		<input type="checkbox" bind:checked={flag2}> 시간 표시 2
		{#if flag2} <!-- 체크 여부에 따라 Time 컴포넌트 토글 -->
			<Time/>
		{/if}
	</section>

	<!-- 3-3. derived로 만든 power 스토어와 elapsed 스토어 사용하기 -->
	<section>
		<br>
		<h1>{$count}^2 = {$power} 입니다</h1>
		<h1>접속 후 {$elapsed} 초가 지났습니다</h1>
	</section>
</main>