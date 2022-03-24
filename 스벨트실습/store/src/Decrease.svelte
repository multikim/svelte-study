<script>
    // 1. 파일 임포트, count 꺼내기
    import { count } from "./store.js";

    // 2. 버튼 활성/비활성 값 선언
    let disabled = false;

    // 3. count 구독이 아닌 반응상태(reactive statement) 사용
    $: disabled = $count <= 1 ? true : false; // 스토어도 감지가 된다! (스토어 바인딩)
</script>

<!-- 4. count 감소 버튼 구현 -->
<button {disabled}
    on:click={() => {
        $count = $count - 1; // 스토어 바인딩
    }}
>count 감소</button>