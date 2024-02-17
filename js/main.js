    /*
  B1: xác định đầu vào  (input)
  wordDay : số tiền công; 
  
  */
  document.getElementById("handleTinhTienLuong").onclick = function () {
    var soNgayCong  = +document.getElementById("soNgayCong").value;
    const salary1Ngay = 100000;
    /*
  B2: xử lý 
  lương = salary1Ngay * soNgayCong
  */
    var luong = salary1Ngay * soNgayCong;
   
    // B3: in kết quả ra màn hình
    document.getElementById("result").innerHTML = `Tiền lương của bạn là: ${luong}`;
  };

      /*
  B2: xác định đầu vào  (input)
  soThuc1,--5 : số thực 1-5; 
  
  */
  document.getElementById("handleTinhTrungBinh").onclick = function () {
    var soThuc1  = +document.getElementById("soThuc1").value;
    var soThuc2  = +document.getElementById("soThuc2").value;
    var soThuc3  = +document.getElementById("soThuc3").value;
    var soThuc4  = +document.getElementById("soThuc4").value;
    var soThuc5  = +document.getElementById("soThuc5").value;
    /*
  B2: xử lý 
  trungBinh = tông 5 số /5
  */
    var trungBinh = +(soThuc1 +soThuc2+soThuc3+soThuc4+soThuc5)/5;
   
    // B3: in kết quả ra màn hình
    document.getElementById("result2").innerHTML = `Giá trị trung bình của 5 số thực trên là: ${trungBinh}`;
  };

  /*
  B3: xác định đầu vào  (input)
  soTienUSD ; tyGia 23500; 
  
  */
  document.getElementById("handleQuyDoiUSD").onclick = function () {
    var soUSD  = +document.getElementById("soUSD").value;
    const RATE = 23500;
    /*
  B2: xử lý 
  tienQuyDoi = soUSD *RATE;
  */
    var tienQuyDoi = +(soUSD * RATE);
   
    // B3: in kết quả ra màn hình
    document.getElementById("result3").innerHTML = `Số tiền quy đổi là: ${tienQuyDoi} VND`;
  };

  /*
  B4: xác định đầu vào  (input)
  chieuDai; 
  chieuRong;
  
  */
  document.getElementById("handleTinhToan").onclick = function () {
    var chieuDai  = +document.getElementById("chieuDai").value;
    var chieuRong  = +document.getElementById("chieuRong").value;
    /*
  B2: xử lý 
  chuVi = 2*(chieuDai + chieuRong);
  dienTich = chieuDai * chieuRong;
  */
    var chuVi = +2*(chieuDai * chieuRong);
    var dienTich = +chieuDai * chieuRong;

    // B3: in kết quả ra màn hình
    document.getElementById("result4").innerHTML = `Chu vi hình chữ nhật là: ${chuVi}`;
    document.getElementById("result5").innerHTML = `Diện tích hình chữ nhật là: ${dienTich}`;
  };

      /*
  B5: xác định đầu vào  (input)
  soHaiChuSo; 
  
  */
  document.getElementById("handleTinhTong").onclick = function () {
    var soHaiChuSo  = +document.getElementById("soHaiChuSo").value;
    
    /*
  B2: xử lý 
  soHangDonVi = soHaiChuSo %10;
  soHangChuc = soHaiChuSo/10;
  */
    var soHangDonVi = +(soHaiChuSo %10);
    var soHangChuc = +Math.floor(soHaiChuSo /10);
    var tong = soHangDonVi + soHangChuc;
    // B3: in kết quả ra màn hình
    document.getElementById("result6").innerHTML = `Tổng 2 ký số vừa nhập là: ${tong}`;
  };
