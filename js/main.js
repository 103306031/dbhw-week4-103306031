var API_PATH = "http://opendata.khcc.gov.tw/public/OD_culturalbus_busscene.ashx";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}

