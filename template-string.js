//২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

const array = [1, 2, 3, 4, 5];

let a = 5;

const student = { id: 1, name: 'abul', age: 23 };


const string = `in the ${[array]} there are ${a} numbers.
student object er moddhe ${student.name} hocche student er naam,${student.age} hocche tar boyosh`;

console.log(string);