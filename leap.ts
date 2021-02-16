
// dynamic entry of value
let year: number;
year=prompt("enter a value");
let checkyear1 = (year) : boolean =>
{
    return (year%4===0?true:false)
}
console.log(checkyear1(year));

// 2.reversing string 

let str:string;
let reversedstr = (str) : string =>
{
    let newstring="";
    for(var i=str.length-1;i>=0;i--)
    {
        newstring+=str[i];
    }
    return newstring;

}
console.log(reversedstr("hello"));