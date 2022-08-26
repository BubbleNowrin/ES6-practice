// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
const student = {
    name: 'dim',
    id: '23',
    section: 'A',
    address: {
        road: 'kochukhet lane', vill: 'dhaka', postOffice: {
            post: 'sadar',
            code: 7400
        }
    },
    subjects: ['physics', 'chemistry', 'biology'],
    marks: { phy: 30, che: 40, bio: 50 }
}

const check = student.address?.postOffice?.code;
console.log(check);