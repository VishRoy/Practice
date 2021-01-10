Swap given two numbers and print them. (Try to do it without a temporary variable.)

Input:
First line contains an integer, the number of test cases 'T'. Each test case should contain two positive numbers a and b.


Output:
Print the 2 numbers after swapping.


function swap(n1, n2){
    if(n1 === null || n2 === null){
        console.log('')
    }
    [n1,n2] = [n2,n1]
    console.log(n1,n2)
}
