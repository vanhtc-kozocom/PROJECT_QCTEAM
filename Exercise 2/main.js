/* 1.Bài toán: Tạo object car có thể thực hiện 1 số yêu cầu dưới đây
Yêu cầu:
1. Tạo object car có thuộc tính: 
brand, model, year, color.
2. Các method:
getAge() → trả về tuổi xe
getInfo() → trả về chuỗi mô tả xe.
paint(newColor) → đổi màu xe.
isOld() → trả về true/false nếu tuổi xe > 10 năm. */

// Tạo object car
let car = {
  brand: "Honda",
  model: "H1",
  year: 2020,
  color: "White"
};

// Function: tính tuổi xe
function getAge(car) {
  let currentYear = new Date().getFullYear();
  return currentYear - car.year;
}

// Function: mô tả xe
function getInfo(car) {
  return `${car.brand} ${car.model}, sản xuất năm ${car.year}, màu ${car.color}`;
}

// Function: đổi màu xe
function paint(car, newColor) {
  car.color = newColor;
  return `Xe đã được đổi màu thành ${car.color}`;
}

console.log(getInfo(car));        
console.log("Tuổi xe:", getAge(car));
console.log(paint(car, "red"));  
console.log(getInfo(car)); 

/* 2. Bài toán: Cho một mảng  [3, 7, 2, 9, 8, 10];
Yêu cầu:
Tính tổng các phần tử trong mảng
Tìm số lớn nhất, số nhỏ nhất trong mảng
Đếm xem có bao nhiêu số chẵn trong mảng
Tính giá trị trung bình của mảng
Tạo mảng mới chỉ chứa số lẻ */
// Bài toán: Làm việc với mảng [3, 7, 2, 9, 8, 10]

let arr = [3, 7, 2, 9, 8, 10];

// 1. Tính tổng các phần tử trong mảng
function getSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// 2. Tìm số lớn nhất
function getMax(array) {
  return Math.max(...array);
}

// 3. Tìm số nhỏ nhất
function getMin(array) {
  return Math.min(...array);
}

// 4. Đếm xem có bao nhiêu số chẵn
function countEven(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

// 5. Tính giá trị trung bình
function getAverage(array) {
  return getSum(array) / array.length;
}

// 6. Tạo mảng mới chỉ chứa số lẻ
function getOddArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log("Mảng gốc:", arr);
console.log("Tổng:", getSum(arr));
console.log("Số lớn nhất:", getMax(arr));
console.log("Số nhỏ nhất:", getMin(arr));
console.log("Số chẵn:", countEven(arr));
console.log("Trung bình:", getAverage(arr));
console.log("Mảng số lẻ:", getOddArray(arr));