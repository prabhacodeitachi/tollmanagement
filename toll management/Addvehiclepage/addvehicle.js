






$(document).on('click', '#add_entry', function () {

  var field_1 = $('#toll_type').val();
  var field_2 = $('#vehicle_type').val();
  var field_3 = $('#vehicle_no').val();
  var field_4 = $('#tariff').val();
  var session = [];
  var localdata = localStorage.getItem("session");
  if (localdata) {

  var arrayFromStorage = JSON.parse(localStorage.getItem("session"));
   
    var arrayLength = arrayFromStorage.length;
    alert(arrayLength);
    if (arrayLength > 0) {
      var index = arrayLength + 1;
     
      session[index] = {};
      session[index] = {
        "toll_type": field_1,
        "vehicle_type": field_2,
        "vehicle_no": field_3,
        "tariff": field_4
      };
    }
  } else {
    session[0] = {
      "toll_type": field_1,
      "vehicle_type": field_2,
      "vehicle_no": field_3,
      "tariff": field_4
    };
    console.log(session);
    localStorage.setItem('session', JSON.stringify(session));
  }
})