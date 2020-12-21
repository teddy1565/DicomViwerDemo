var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CornerStoneDemo' });
});
router.get('/images',(req,res,next)=>{
  let {Study,series,num} = req.query;
  //let data=fs.readFileSync("D:\\TeddyXiong\\Emecca\\example_DICOM_image\\DICOM_IMAGE\\20500999\\SDY00000\\SRS00000\\IMG00049.DCM");
  //let data=fs.readFileSync("D:\\TeddyXiong\\Emecca\\example_DICOM_image\\DICOM_IMAGE\\41386161\\SDY00000\\SRS00000\\IMG00000.DCM");
  let data=fs.readFileSync(`/Users/zhenkaixiong/Emecca/DicomDEMO/DicomViwerDemo/DICOM/${Study}/SDY00000/SRS${series}/IMG${num}.DCM`);
  //let data=fs.readFileSync("/Users/zhenkaixiong/Emecca/DicomDEMO/DicomViwerDemo/DICOM/41386161/SDY00000/SRS00000/IMG00000.DCM");
  res.send(data);
});

module.exports = router;
