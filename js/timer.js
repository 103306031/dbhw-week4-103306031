var time_out;

function time_outF(){
  time_out = setTimeout(minus, 1000);
}

function minus() {
  if (document.getElementById("num")) {
    var curr = parseInt(document.getElementById("num").innerHTML);
  }

  if (curr && curr <= 60) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("num").innerHTML = curr - 1;
    }
  } else {
    document.getElementById("num").innerHTML = 60;
  }

  time_outF();  
}

  $(document).ready(function() {
    $("button").click(function() {
      if ($(this).text() == "start") {
        $(this).text("pause").attr("style","margin-left: -62px;");
        time_outF();

      } else {
        $(this).text("start").attr("style","margin-left: -55px;");
        clearTimeout(time_out);
        $("li").stop();
      }
    });
  });