Bài thực hành 1:
<img width="1897" height="982" alt="image" src="https://github.com/user-attachments/assets/20fc25e2-3bac-4a41-a92f-bb9a0669cfab" />

Bài thực hành 2:
1. GIỚI THIỆU BÀI TOÁN
Chương trình bao gồm các chức năng chính: -Đếm số sinh viên đạt loại Giỏi -Tính điểm trung bình của các điểm hợp lệ -Viết kiểm thử đơn vị bằng JUnit để đảm bảo tính đúng đắn của chương trình -Quản lý mã nguồn và quy trình làm việc bằng GitHub

Mục tiêu của bài tập là giúp sinh viên làm quen với Unit Testing, JUnit và quy trình phát triển phần mềm chuyên nghiệp.

2. PHÂN TÍCH YÊU CẦU
2.1 Yêu cầu chức năng

Lớp StudentAnalyzer gồm 2 phương thức: countExcellentStudents(List scores) Đếm số sinh viên có điểm ≥ 8.0 Bỏ qua các điểm < 0 hoặc > 10 Nếu danh sách rỗng, trả về 0 calculateValidAverage(List scores) Tính điểm trung bình của các điểm hợp lệ (0–10) Nếu không có điểm hợp lệ, trả về 0

2.2 Yêu cầu kỹ thuật

Sử dụng Java Áp dụng vòng lặp để duyệt danh sách điểm Kiểm tra dữ liệu đầu vào (validate) Viết kiểm thử đơn vị bằng JUnit 5

3. CÀI ĐẶT CHƯƠNG TRÌNH
3.1 Cấu trúc thư mục

unit-test/ src/ StudentAnalyzer.java
unit-test/test/StudentAnalyzerTest.java unit-test/README.md

3.2 Cài đặt lớp StudentAnalyzer

Lớp StudentAnalyzer được xây dựng để xử lý dữ liệu điểm số. Trong quá trình cài đặt: -Sử dụng vòng lặp for để duyệt danh sách -Áp dụng điều kiện kiểm tra để loại bỏ dữ liệu không hợp lệ -Đảm bảo chương trình không phát sinh lỗi khi danh sách rỗng
<img width="608" height="597" alt="image" src="https://github.com/user-attachments/assets/847452ae-e6c6-4807-a4a8-a9222f29433d" />

4. KIỂM THỬ ĐƠN VỊ VỚI JUNIT
4.1 Giới thiệu JUnit

JUnit là một framework phổ biến dùng để kiểm thử đơn vị trong Java, giúp phát hiện lỗi sớm và đảm bảo chất lượng phần mềm.

4.2 Các trường hợp kiểm thử

-Các ca kiểm thử được xây dựng bao gồm: -Trường hợp bình thường -Danh sách có điểm hợp lệ và không hợp lệ -Trường hợp biên -Danh sách rỗng -Danh sách chỉ chứa 0 hoặc 10 -Trường hợp ngoại lệ -Điểm âm hoặc lớn hơn 10

4.3 Kết quả kiểm thử

-Kết quả chạy kiểm thử: -Tất cả các test case đều PASS -Chương trình hoạt động đúng theo yêu cầu đề bài
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/13c8c5d8-43df-4c10-bac8-4e0f7e3bf7b3" />

5. QUẢN LÝ MÃ NGUỒN VỚI GITHUB
5.1 Sử dụng Issue

Đã tạo các Issue để quản lý công việc: -Issue #1: Viết hàm countExcellentStudents -Issue #2: Viết hàm calculateValidAverage -Issue #3: Viết kiểm thử đơn vị -Issue #4: Viết README

5.2 Gắn commit với Issue

Trong quá trình commit, sinh viên sử dụng cú pháp #issue_number, fixes, closes để liên kết commit với Issue tương ứng. Ví dụ: "feat: implement calculateValidAverage() closes #2"
