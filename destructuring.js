// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const object = { name: 'mim', age: 25, job: 'bekar', kam: 'khali ghumai' };

const { name } = object;

console.log(name);