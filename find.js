// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const array = [{ id: 1, name: 'laptop', price: 80000 },
{ id: 2, name: 'mobile', price: 20000 },
{ id: 1, name: 'tv', price: 5000 },
{ id: 1, name: 'watch', price: 5000 }];


const cheap = array.find(array => array.price === 5000);
console.log(cheap);