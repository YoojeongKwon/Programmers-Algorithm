function solution(age) {
    // 문자열에도 인덱스가 있으니 아래처럼 작성 가능
    return age.toString().split("").map(num => "abcdefghij"[num]).join("");
}