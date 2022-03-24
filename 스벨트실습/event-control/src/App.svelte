<script>
	// 클릭 횟수 저장 변수
	let count = 0;
	// 버튼 이벤트 처리 함수
	const search = (event) => {
		// console.log(`search: 조회 버튼 클릭!`);
		console.log(event.target); // 이벤트 대상 출력
		count = count + 1;
	}
	/*
	// 버튼 이벤트 처리 함수 2
	const increase = () => {
		console.log(`increase: 조회 버튼 클릭!`);
		count = count + 1;
	}
	*/
</script>

<!-- button on:click={search} on:click={increase} --><!-- 버튼의 클릭 이벤트 처리를 search, increase 함수와 연결 -->
<button on:click={search}>
	Search ({count}) <!-- 클릭 횟수를 버튼에 표시 -->
</button>

<!-- 인라인으로 이벤트 처리하기 -->
<button on:click={(event) => {
	console.log(event.target);
	count = count + 1;
}}>
	Search Inline ({count})
</button>

<!-- 이벤트 제한자 사용하기 -->
<button on:click|once={search}> <!-- 한 번만 호출되는 once 제한자 -->
	Search Once ({count})
</button>

<!-- 이벤트 제한자 목록 -->
<!--
	* preventDefault: event.preventDefault()를 호출. 엘리먼트의 기본 이벤트 동작을 무시한다.
	* stopPropagation: event.stopPropagation()를 호출. 상위 엘리먼트로 이벤트를 전달하지 않는다.
	* passive: touch/wheel 이벤트의 속도를 향상시킨다. (스벨트는 자동으로 passive)
	* nonpassive: 명시적으로 passive: false를 준다.
	* capture: 하위에서 발생하는 이벤트를 캡처하여(감지하여) 동작한다.
	* once: 이벤트 처리를 한 번만 한다. 한 번 수행 후 함수 연결을 제거한다.
	* self: event.target이 자신인 경우에만 동작한다.
-->