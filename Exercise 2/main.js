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
  color: "White",

 // Method: trả về tuổi xe
  getAge: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  },

  // Method: trả về chuỗi mô tả xe
  getInfo: function () {
    return `${this.brand} ${this.model} (${this.year}), màu ${this.color}`;
  },

  // Method: đổi màu xe
  paint: function (newColor) {
    this.color = newColor;
    return `Xe đã được sơn lại thành màu ${this.color}`;
  },

  // Method: kiểm tra xe cũ hay không
  isOld: function () {
    return this.getAge() > 10;
  }
};

console.log(car.getInfo());       
console.log("Tuổi xe:", car.getAge());  
console.log("Xe cũ không?", car.isOld()); 
console.log(car.paint("red"));   
console.log(car.getInfo());      

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