Given a number N. The task is to print Floyd's triangle with N lines.

Input:
The first line of input contains an integer T, denoting the number of testcases. Then T test cases follow. Each testcase contains an integer N.

Output:
Print the Floyd's triangle with N lines.

function floyd(rows){
    let n =1
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=i;j++, n++){
            process.stdout.write(n + ' ')
        }
         process.stdout.write('\n')
    }   
}

floyd(5)

Output: 

1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
