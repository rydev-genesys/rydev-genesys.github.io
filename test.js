$('document').ready(function () {
   $('#file-input').change(function (event) {
       uploadDNCLists(event.target.files[0]);
   });
});

function uploadDNCLists(file) {
   var data = new FormData();
   data.append('id', '001');
   data.append('file', 'test_upload.csv');
   data.append('fileType', 'dnclist');
   data.append('phoneColumns', 'PhoneColumnName');
   data.append('emailColumns', 'EmailColumnName');

   $.ajax({
       url: 'https://apps.usw2.pure.cloud/uploads/v2/contactlist',
       type: 'POST',
       headers: {
           Authorization: 'bearer ' + "eq-hD9nGp_NwJU_rQ1bCVmh0kutu5bKvoSlEbVgSR7q8FBquZSza7M3JeX_GK9b3AB3m0oJLVln04ZL680brkg"
       },
       data: data,
       processData: false,
       contentType: false
   });
}
