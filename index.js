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
    // ใช้ % Module หารเอาเศษใน digit หลักขวาสุด(หลักหน่วย) เช่นถ้า num = 11333 >>> 11333 % 10 = 3 (11333 หาร 10 จะเหลือเศษ 3) โดยเลข 3 จะไปเก็บใส่ตัวแปรชื่อ digit
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
