const path = require('path');

module.exports = {
  mode: 'production', // เปลี่ยนเป็น production สำหรับการ build แบบ production
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js', // ตั้งชื่อไฟล์ให้เป็น .min.js เพื่อแสดงว่าเป็นไฟล์ที่บีบอัดแล้ว
  },
};
