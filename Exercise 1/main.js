// 1. Bài toán: Tính diện tích & chu vi hình chữ nhật
function dienTich(cd,cr) {
    return cd*cr;
};
function chuVi(cd,cr){
    return (cd+cr)*2;
}
// console.log("1.1. Diện tích hình chữ nhật: ", dienTich(10,5));
// console.log("1.2. Chu vi hình chữ nhật: ",chuVi(10,5));
console.log(
`1. Kết quả
Diện tích hình chữ nhật: ${dienTich(10,5)}
Chu vi hình chữ nhật: ${chuVi(10,5)} 
`
);

/* 2. Bài toán: Xếp loại học sinh:
Yêu cầu:
 1. Nhập vào điểm 3 môn: Toán, Lý, Hóa (thang điểm 0–10).
 2. Tính điểm trung bình 3 môn.
 3. Xếp loại học sinh theo quy tắc:
Giỏi: trung bình ≥ 8
Khá: 6.5 ≤ trung bình < 8
Trung bình: 5 ≤ trung bình < 6.5
Yếu: trung bình < 5 */
const toan = 10;
const ly = 9;
const hoa = 8;
function tinhDtb(toan,ly,hoa){
    return (toan+ly+hoa)/3;
}
function xepLoai(dtb){
    if (dtb >= 8){
        return console.log("Xếp loại giỏi", dtb);
    }else if (dtb >= 6.5 && dtb < 8){
        return console.log("Xếp loại khá", dtb);
    }else if (dtb >= 5 && dtb <6.5){
        return console.log("Xếp loại trung bình", dtb);
    }else{
        return console.log("Xếp loại yếu", dtb);
    }
}
const diemTrungBinh = tinhDtb(toan, ly, hoa);
xepLoai(diemTrungBinh);

/* 3. Bài toán: Xử lý họ tên
Yêu cầu: 
1. Nhập vào một chuỗi họ tên (ví dụ: " nguyen van an ").
2. Thực hiện các bước:
a. Xóa khoảng trắng thừa ở đầu và cuối.
b. Mỗi từ chỉ viết hoa chữ cái đầu, còn lại viết thường.
c. In ra số lượng từ trong tên.
3. Ví dụ:
Nhập tên: nguyen van an
Kết quả:
Tên: Nguyen Van An
Số từ: 3 */
const hoTen = " hoang thi cam van ";
const hoTenTrim = hoTen.trim();
let words = hoTenTrim.split(" ");
let ketQua = "";
for (let i = 0; i < words.length; i++) {
  if (words[i] === "") continue; 
  let tu = words[i].toLowerCase(); 
  let vietHoa = tu[0].toUpperCase() + tu.slice(1); 
  ketQua += vietHoa + " ";
};
ketQua = ketQua.trim();
let soTu = words.length;
console.log(`
Tên: ${ketQua}
Số từ: ${soTu}
`);









