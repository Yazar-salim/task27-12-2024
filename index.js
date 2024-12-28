//Square Each Element using array

// let array=[1,2,3,4],out=[],square;
// for (item of array){
//     square=item**2;
//     out.push(square)
// }
// console.log(out);

//Count Positive and Negative Numbers
// let arr=[1,-1,-3,5,32],pcount=0,ncount=0;
// for(i of arr){
//     if(i>0){
//         pcount++;
//     }
//     else {
//         ncount++;
//     }
// }
// console.log(`Count of Positive Number ${pcount}`);
// console.log(`Count of Negative Number ${ncount}`);

//Given an array input = [3, 7, 2], create a new array where each element is the cumulative sum of elements up to that index in the original array

// let ar=[3,7,2,5],output=[],sum=0;
// for (i=0;i<ar.length;i++){
//     sum=sum+ar[i];
//     output.push(sum)
// }
// console.log(output);

//Write a program to move all zeros in an array to the end while maintaining the relative order of other elements

// let zero=[1,2,0,4,5,6,0,7,8],outzero=[],c=0;
// for (t of zero){
//     if(t==0){
//         c++
//         continue
//     }
//     else{
//         outzero.push(t)
//     }
// }
// if(c>0){
//     for(i=0;i<=c;i++)
//     {
//         outzero.push(0)
//     }
// }
// console.log(outzero);


// let arrr=[1,0,1] ,revarr=[];
// for(i=arrr.length-1;i>=0;i--){
//     revarr.push(arrr[i]);
// }

// if(arrr == revarr){
//     console.log(`array is same`);
    
// }
// else{
//     console.log(`array not same`);
    
// }

//write a program to Count the number of even and odd numbers
// let arr=[1,-1,-3,5,32],pcount=0,ncount=0;
// for(i of arr){
//     if(i%2==0){
//         pcount++;
//     }
//     else {
//         ncount++;
//     }
// }
// console.log(`Count of Even Number ${pcount}`);
// console.log(`Count of Odd Number ${ncount}`);

//write a program to Remove the first element from an array
// let arr=[1,2,3];
// arr.shift(0);
// console.log(arr);

//,You are given an object salaries where the keys are employee names and the values are their respective salaries. Write a code snippet that will increase each employee's salary by 10% and then print the updated salary of each employee.
// const salaries = {
//     Alice: 50000,
//     Bob: 60000,
//     Charlie: 70000
// };

// for (let employee in salaries) {
//     salaries[employee] *= 1.10;  
// }

// for (let employee in salaries) {
//     console.log(`${employee}'s updated salary: $${salaries[employee]}`);
// }

//Write a program that prints the multiplication table for numbers 1 through 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`Multiplication Table for ${i}:`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }

//     console.log(""); 
// }

// Check if All Elements in an Array are Unique
// let arr=[1,2,3,4,1],flag=true;
// for (i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             flag=false;
            
//         }
//     }
// }
// if(!flag){
//     console.log(`Not Unique`);
    
// }
// else{
//     console.log(`Unique`);
    
// }

//Create an array of natural number upto 10  and manipulate the array with its each element multiplied by the total product of array.

// let arr=[1,2,3,4,5,6,7,8,9,10],sum=0,ot=[];
// for(num of arr){
//     sum+=num;
// }
// for(i=0;i<arr.length;i++){
//     let mul=sum*arr[i];
//     ot.push(mul)
// }
// console.log(ot);

//create a array of natural numbers upto 10 and create a new array having elements sum, product, avg of existing array

// let arr=[1,2,3,4,5,6,7,8,9,10],sum=0,mul=1,avg,ot=[];
// for(num of arr){
//     sum+=num;
//     mul*=num;
//     avg=Math.floor(sum/arr.length)
// }
// ot.push(sum,mul,avg)
// console.log(ot);

//.Write a program to replace all odd numbers with ‘*’.

// let arr=[5,6,7,8,9,10];
// for (i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         arr[i]='*';
//     }
// }
// console.log(arr);

//Write a program to find the sum of all the odd numbers in an array
// let arr=[5,6,7,8,9,10],sum=0;
// for (i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         sum+=arr[i];
//     }
// }
// console.log(sum);

//To create a new array where each element is double the value of the original array's elements
// let arr=[5,6,7,8,9,10],dble,ot=[];
// for (i=0;i<arr.length;i++){
//     dble=arr[i]*2;
//     ot.push(dble);
// }
// console.log(ot);

//to create a new array by replacing all negative numbers with zero
// let arr=[5,6,-7,8,-9,10],sum=0;
// for (i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         arr[i]=0;
//     }
// }
// console.log(arr);