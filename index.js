//on Date 24-02-24

//Question 1
function countLovelyNumbers(A, B) {
  let count = 0;
  for (let i = A; i <= B; i++) {
    if (isLovelyNumber(i)) {
      //function isLovelyNumber(num) return เป็น true หมายถึงตัวเลขที่เอามาเช็คเป็น lovely number ดังนั้นก็จะ count จำนวนตัวเลข lovely number โดยจะวนเช็คตัวเลขทุกตัวไปเรื่อยๆจากเลข A ไปจนถึง B
      count++;
    }
  }
  return count; //ถ้า function isLovelyNumber(num) return เป็น false หมายถึงตัวเลขที่เอามาเช็คไม่ได้เป็น lovely ก็จะ return ค่าจำนวน  ของ lovely number อันเดิมกลับไป
}

function isLovelyNumber(num) {
  const digitCount = new Array(10).fill(0); //สร้าง Array มาใหม่เป็น [0,0,0,0,0,0,0,0,0,0]
  while (num > 0) {
    // ใช้ % Modulus หารเอาเศษใน digit หลักขวาสุด(หลักหน่วย) เช่นถ้า num = 11333 >>> 11333 % 10 = 3 (11333 หาร 10 จะเหลือเศษ 3) โดยเลข 3 จะไปเก็บใส่ตัวแปรชื่อ digit
    const digit = num % 10;

    // ที่ใช้ตัวแปร digit มาใส่เป็น index ของ Array digitCount [0,0,0,0,0,0,0,0,0,0]
    // เช่น ถ้า digit เป็น 3 จะเป็น digitCount[3] = digitCount[3] + 1 หรือ 0 + 1 = 1 จะทำให้ได้ Array digitCount = [0,0,0,1,0,0,0,0,0,0] ที่ทำแบบนี้เพราะจะเอา
    // digit แต่ละตัวของตัวเลข 1 1 3 3 ที่ยกตัวอย่างไว้ข้างบนมาเช็คว่ามีเลขซ้ำกันมั้ย ผ่านการบวกค่าที่อยู่ใน index เดียวกันของ array digitCount ถ้าลองทำรอบต่อไปตัวเลขจะเป็น 113
    // ทีนี้หลักขวาสุดเป็นเลข 3 แล้วเอามาใส่เป็น index ก็จะได้ digitCount[3] = digitCount[3] + 1 หรือ 1 + 1 = 2
    // จะทำให้ได้ Array digitCount = [0,0,0,2,0,0,0,0,0,0] ก็คือจะวนเช็คแบบนี้ไปเรื่อยๆ
    digitCount[digit] = digitCount[digit] + 1;

    // เช็ค digitCount[3] ใน Array digitCount = [0,0,0,2,0,0,0,0,0,0] หรือก็คือเลข 2 มาเช็คว่าซ้ำกัน 3 ตัวรึยัง โดยถ้าซ้ำแล้วก็ return false ไป
    if (digitCount[digit] >= 3) {
      return false;
    }

    // อย่างที่ยกตัวอย่างตัวเลข num = 11333 รอบแรกจะเช็คแค่ digit ขวาสุด(เลข 3) ทีนี้ถ้าเราอยากเช็ค digit ถัดมาทางซ้ายตัวถัดไป ในที่นี้คือเลข 3 (หลักสิบ)
    //ก็ต้องเอาเลข 11333 มาหาร 10 = 1133.3 ตัดทศนิยมทิ้งใช้ Math.floor ทำให้เหลือ 1133 เพื่อเอาไปวนลูป while ไปเรื่อยๆเช็คค่า digit แบบด้านบน จะวนไปจนกว่า num น้อยวกว่า 0 ถึงจะหยุดลูป
    num = Math.floor(num / 10);
  }

  // ถ้าวนลูปจน num ไม่เข้าเงื่อนไข num > 0 แล้วไม่มีการ return false ไปก่อน (return false line 27) ก็จะ return true เพื่อบอกว่าตัวเลขที่เอามาเช็คในฟังก์ชั่น isLovelyNumber(num) เป็นเลข lovely number
  return true;
}

// ลองสมมุติค่า test ดูว่าฟังก์ชั่นทำงานถูก
const A = 1;
const B = 111;
console.log(countLovelyNumbers(A, B));
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// Question 2
function countArrayNumber(num) {
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    let position = i + 1;

    if (position % 4 === 1) {
      if (num[i] < 0) {
        count++;
      } else if (num[i] === 0) {
        count = -1;
        return count;
      }
    }

    if (position % 4 === 2 || position % 4 === 0) {
      if (num[i] < 0 || num[i] > 0) {
        count++;
      }
    }

    if (position % 4 === 3) {
      if (num[i] > 0) {
        count++;
      } else if (num[i] === 0) {
        count = -1;
        return count;
      }
    }
  }
  return count;
}

//สมมุติค่า Test ดูฟังก์ชั่นว่า Count ถูกต้อง
const C = [1, 2, 3, 4, 5, 6];
const D = [1, 0, -2, 0];
const E = [1, 1, 0, 3, -1];
console.log(countArrayNumber(C));
console.log(countArrayNumber(D));
console.log(countArrayNumber(E));

//Step การคิดคร่าวๆ
// - ใช้การ Modulus % หารเอาเศษ สังเกตจาก Pattern ตัวเลขคือ [+,0,-,0,+,0,-,0,...] จะเห็นว่า Pattern ถูกวนทุก 4 ตัว
// ดังนั้น ถ้า position ของตัวเลขหาร 4 เหลือเศษ 1 จะตรงกับ +
//      ถ้า position ของตัวเลขหาร 4 เหลือเศษ 2 หรือ ไม่เหลือเศษ(เศษ 0) จะตรงกับ 0
//      ถ้า position ของตัวเลขหาร 4 เหลือเศษ 3 จะตรงกับ -
// - ถ้า postition เข้า case ใดแล้ว ก็จะเช็คต่อว่าเลขนั้นๆตรงกับ condition ใน array [+,0,-,0,+,0,-,0,...] ไหม
// เช่น ยกตัวอย่าง num = const C = [1, 2, 3, 4, 5,]; จะต้อง return 3 ตามขั้นตอนการเช็คดังนี้
//            วนลูปรอบแรก ที่ index 0 (position = 1) ใน array C คือ เลข 1 โดยตัวเลข 1 ตรงกับเงื่อนไข pattern เพราะเป็น positive number เลยไม่ต้อง count++; ทำให้ count ยัง = 0
//            วนลูปรอบสอง ที่ index 1 (position = 2) ใน array C คือ เลข 2 โดยตัวเลข 2 ไม่ตรงกับเงื่อนไข pattern เพราะเป็น positive number แต่ใน pattern ต้องเป็น 0 ดังนั้น จึงต้องไปคูณ 0 จึงจะได้เป็น 0 ทำให้ต้อง count++ (count = count + 1 >> 0 + 1 = 1) จึงทำให้ count = 1
//            วนลูปรอบสาม ที่ index 2 (position = 3) ใน array C คือ เลข 3 โดยตัวเลข 3 ไม่ตรงกับเงื่อนไข pattern เพราะเป็น positive number แต่ใน pattern ต้องเป็น - ดังนั้น จึงต้องไปคูณ negative number ทำให้ต้อง count++ (count = count + 1 >> 1 + 1 = 2) จึงทำให้ count = 2
// ........ วนลูปเช็คเลขที่เหลือ 4 กับ 5 ก็จะได้สุดท้าย count = 3
// Note: กรณีที่เช็คเลขแล้วทำตามเงื่อนไขไม่ได้ เช่น num คือ const E = [1, 1, 0, 3, -1];
//   if (position % 4 === 1) {
//   if (num[i] < 0) {
//     count++;
//   } else if (num[i] === 0) {
//     count = -1;
//     return count;
//   }
// }
//   จากตัวอย่างนี้
//   ตำแหน่งที่ index 2 คือเลข 0 โดยถ้าตาม pattern ต้องทำให้เป็น - (negative number) ซึ่งตัวเลข 0 คูณอะไรก็จะได้ 0 ดังนั้น จึงทำให้เป็นไปตาม pattern ไม่ได้ เลยทำให้จาก if condition ข้างบนต้องให้ค่า count = -1 แล้ว return count ทันที ทำให้การ return นี้ นอกจากจะออกจากลูป for แล้วยังเป็นการ return ค่า count ของ function countArrayNumber
//
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
// Question 3

function printPowerOfTwo(num) {
  for (let i = 1; i <= num; i++) {
    if (Math.log2(i) % 1 === 0) {
      console.log("POWER");
    } else {
      console.log(i);
    }
  }
}

// เรียกฟังก์ชั่น Test ค่า
printPowerOfTwo(12);
//ข้อนี้ search google หาฟังก์ชั่น Math.log2 เอามาเช็คว่าค่าเป็น log 2 มั้ย แล้วเอาไป Modulus 1 เพื่อจะเช็คว่าเป็นจำนวนเต็มไหม เพราะถ้าจำนวนเต็มเศษที่ % 1 ต้องเป็น 0
