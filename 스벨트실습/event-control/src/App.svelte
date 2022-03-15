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