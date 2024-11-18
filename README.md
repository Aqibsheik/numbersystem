Description of project : To find prime number, sum, maximum, minimum.

Anser of the code:

even,odd numbers:

const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];


let even=[]
let odd=[]

for(let i=0;i<numbers.length;i++)
{
  
    if(numbers[i]%2==0)
    {
        even.push(numbers[i])
        
    }
    else{
        odd.push(numbers[i])
    }
}
console.log(`Even numbers: ${even}`)
console.log(`Odd numbers:  ${odd}`)


max,min,sum:
const primeArray = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  

let max=primeArray[0]
for(let k=0;k<primeArray.length;k++)
{
  if(max<primeArray[k])
  {
    max=primeArray[k]
    
  }
  
}
console.log(`Maximum: ${max}`)

let min=primeArray[0]
for(let k=0;k<primeArray.length;k++)
{
  if(min>primeArray[k])
  {
    min=primeArray[k]
    
  }
  
}
console.log(`Minimum: ${min}`)

let sum=0
for(let k=0;k<primeArray.length;k++)
{
 sum=sum+k
  
}
console.log(`Total: ${sum}`)









expected output:


Even numbers: 2,20,14,12,8,6,4,10,16,18
Odd numbers:  3,7,15,9,5,1,11,19,17,13
Maximum: 35
Minimum: 2
Total: 190

