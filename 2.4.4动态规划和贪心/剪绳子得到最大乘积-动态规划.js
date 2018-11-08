/**
 * 问题描述：
 *     给你一根长度为n的绳子，把绳子剪成m段，（m>1  n>1都是整数），每根绳子计作（k[0],k[1],.....）,
 *     求k[0] * k[1] * k[2] * ..... 可能的最大值是多少？ 并且输出最大值。
 *
 * 例如，输入8， 剪成3，3，2  得到18， 输出18
 * @param n
 */

//动态规划
function maxProductAfterCutting(n){
    if(n < 2){
        return 0;
    }else if(n === 2){
        return 1;
    }else if(n === 3){
        return 2;
    }

    var k = [0, 1, 2, 3],  //存储问题的最优解的数组，k[i]表示把长度为i的绳子剪成若干段的各段乘积的最大值，也就是maxProductAfterCutting(i)
        max = 0;

    for(var i = 4; i <= n; ++i){  //从下往上求解
        max = 0;
        for(var j = 0; j <= i/2; ++j){  //求解子问题的最优解，需要将每种情况进行比较，保存最大值存下来得到最优解
            var product = k[j] * k[i-j];
            if(max < product){
                max = product;
            }
            k[i] = max;
        }
    }
    max = k[n];
    k = [];

    return max;
}

console.log(maxProductAfterCutting(8));
