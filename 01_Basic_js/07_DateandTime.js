const date=new Date();
console.log("Current Date and Time: ",date.toString());
console.log("JSON representation: ",date.toJSON());
console.log("ISO String: ",date.toISOString());
console.log("Locale Date String: ",date.toLocaleDateString());
console.log("Locale Time String: ",date.toLocaleTimeString());
console.log("Locale String: ",date.toLocaleString());
console.log("UTC String: ",date.toUTCString());

console.log("Year: ",date.getFullYear());
console.log("Month (0-11): ",date.getMonth());
console.log("Date: ",date.getDate());
console.log("Day of the week (0-6): ",date.getDay());
console.log("Hours: ",date.getHours());
console.log("Minutes: ",date.getMinutes());
console.log("Seconds: ",date.getSeconds());
console.log("Milliseconds: ",date.getMilliseconds());
console.log("Time in milliseconds since Jan 1, 1970: ",date.getTime());

const specificDate=new Date(2022,0,1,10,30,0); // January 1, 2022, 10:30:00
console.log("Specific Date: ",specificDate.toString());

specificDate.setFullYear(2023);
specificDate.setMonth(11); // December
specificDate.setDate(25);
specificDate.setHours(15);
specificDate.setMinutes(45);
specificDate.setSeconds(30);
console.log("Updated Specific Date: ",specificDate.toString());

const timestamp=Date.now();
console.log("Current Timestamp (ms since Jan 1, 1970): ",timestamp);

const parsedDate=new Date("2023-12-25T15:45:30Z");
console.log("Parsed Date from String: ",parsedDate.toString());

const dateDifference=(date1,date2)=>{
    const diffMs=Math.abs(date2-date1);
    const diffDays=Math.floor(diffMs/(1000*60*60*24));
    const diffHours=Math.floor((diffMs/(1000*60*60))%24);
    const diffMinutes=Math.floor((diffMs/(1000*60))%60);
    const diffSeconds=Math.floor((diffMs/1000)%60);
    return {diffDays,diffHours,diffMinutes,diffSeconds};
};

const date1=new Date(2023,0,1);
const date2=new Date(2023,11,31);
const difference=dateDifference(date1,date2);
console.log(`Difference between ${date1.toDateString()} and ${date2.toDateString()}: `+
            `${difference.diffDays} days, ${difference.diffHours} hours, `+
            `${difference.diffMinutes} minutes, ${difference.diffSeconds} seconds.`);       
// Note: Months are 0-indexed in JavaScript Date (0 = January, 11 = December)       
// Note: Days of the week are 0-indexed (0 = Sunday, 6 = Saturday)
// Note: Date and time are based on local timezone unless specified otherwise
console.log("5" - null); // 5 (null is converted to 0)
console.log("5" - undefined); // NaN (undefined is not a number)
console.log("5" + null);

// "5null" (null is converted to "null")
console.log("5" + undefined); // "5undefined" (undefined is converted to "undefined")   
