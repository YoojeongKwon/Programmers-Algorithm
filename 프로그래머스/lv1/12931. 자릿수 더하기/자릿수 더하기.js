function solution(n)
{
    return 0 < n && n < 10 ? n : String(n).split('').reduce((acc, curr) => Number(acc) + Number(curr))
}