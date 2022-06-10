// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  
  const fs = require('fs');
  let baca   = [];
  let hasilBaca = [];

  fs.readFile(file1,"utf-8",(err,data) => {

    if(err){
      return console.log('Error Data 1 ' + err)
    }
    baca = JSON.parse(data);
    hasilBaca.push(baca.message.split(" ")[1]);

    fs.readFile(file2,"utf-8",(err,data) => {

      if(err){
        return console.log('Error Data 2 ' + err)
      }
      baca = JSON.parse(data);
      hasilBaca.push(baca[0].message.split(" ")[1]);
      
      fs.readFile(file3,"utf-8",(err,data) => {

        if(err){
          return console.log('Error Data 3 ' + err)
        }
        baca = JSON.parse(data);
        hasilBaca.push(baca[0].data.message.split(" ")[1]);

        //tampilkan hasil
        fnCallback(err, hasilBaca);
      });

    });

  });
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
