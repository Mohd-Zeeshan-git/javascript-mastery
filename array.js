myarray=[]
%DebugPrint(myarray)

//continous holey

//SMI small integer
// Packed element
// packed doble Element
const Arr =[1,2,3,4,5]
//pached SMI ELEMENT
Arr.push(6.0)
//packed double element
Arr.push('7')
//packed element
Arr[10]=11
//holey element
console.log(Arr);
console.log(Arr.length);
console.log(Arr[9]);

//bound check
// hasOwnProperty(Arr,9)
// hasOwnProperty(Arr.prototype,9)
// hasOwnProperty(Object.prototype,9)
//heles are very expensive checks


//SMI>Double>Packed
//H_SMI>H_DOUBLE>H_PACKED

const myArr = new Array(3);
//just 3 holes Holey_SMI element
myArr[0]='1'//HOLEY_ELEMENT
myArr[1]='2';
myArr[2]='1'//HOLEY_ELEMENT

const MyARRAY =[]
//SMI_PACKED ELEMENT
MyARRAY.push('1')//PACKED ELEMENT
