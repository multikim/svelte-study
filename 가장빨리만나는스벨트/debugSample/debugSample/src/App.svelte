<script>
	export let name = "world";

	console.log(`normal debug: ${name}`); // 1. 일반 디버깅 코드

	$:console.log(`reactive debug: ${name}`); // 2. 리액티브 디버깅 코드
</script>

<input text=text bind:value={name}>

<!-- {@debug name} --> <!-- name 값 확인 -->

<h1>Hello, {name}!</h1>