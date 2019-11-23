// Unix Epoch - January 1 1970 00:00:00
const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of the Month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Second: ${now.getSeconds()}`);

// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out which is first and print its time (use toString)

const date1 = new Date('July 1 1993 05:32:23');
const date2 = new Date('December 28 1994 10:34:23');

const ts1 = date1.getTime();
const ts2 = date2.getTime();

if (ts1 <= ts2) {
    console.log(date1.toString());
} else {
    console.log(date2.toString());
};