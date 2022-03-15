<!-- 스크립트 블록 -->
<script>
    const list = [
        { code: "apple", desc: "사과"},
        { code: "kiwi", desc: "키위" },
        { code: "mango", desc: "망고" },
        { code: "strawberry", desc: "딸기" }
    ];
</script>
<!-- HTML 블록 -->
<main>
    <select> <!-- 과일 select 박스 -->
        <option value="">선택하세요</option>
        {#each list as item}
    </select>
</main>
<!-- 스타일 블록 -->
<style>
</style>