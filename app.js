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