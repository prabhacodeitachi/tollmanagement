$(document).on('click', '#add_details', function () {

    var field_1 = $('#toll_name').val();
    var field_2 = $('#sv_type1','sjny','rjny').val();
    var field_3 = $('#sv_type2','sjny','rjny').val();
    var field_4 = $('#sv_type3','sjny','rjny').val();
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
          "toll_name": field_1,
          "sv_type1": field_2,
          "sv_type2": field_3,
          "sv_type3": field_4
        };
      }
    } else {
      session[0] = {
        "toll_name": field_1,
          "sv_type1": field_2,
          "sv_type2": field_3,
          "sv_type3": field_4
      };
      console.log(session);
      localStorage.setItem('session', JSON.stringify(session));
    }
  })