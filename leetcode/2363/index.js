var mergeSimilarItems = function(items1, items2) {
    const cnt = Array(1001).fill(0)
    for (const [v, w] of items1) {
        cnt[v] += w
    }
    for (const [v, w] of items2) {
        cnt[v] += w
    }
    const ans = []
    for (let i = 1; i < 1001; ++i) {
        if (cnt[i] > 0) {
            ans.push([i, cnt[i]])
        }
    }
    return ans
};

const case1 = mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]])
console.log(JSON.stringify(case1) === '[[1,6],[3,9],[4,5]]', case1)

const case2 = mergeSimilarItems([[1,1],[3,2],[2,3]], [[2,1],[3,2],[1,3]])
console.log(JSON.stringify(case2) === '[[1,4],[2,4],[3,4]]', case2)

const case3 = mergeSimilarItems([[1,3],[2,2]], [[7,1],[2,2],[1,4]])
console.log(JSON.stringify(case3) === '[[1,7],[2,4],[7,1]]', case3)