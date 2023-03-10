const daysm = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
$(function () {
  var dt = new Date();
  // var dt = new Date("2023/09/23");
  var start = new Date("2016/09/23");
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  var h = ("00" + dt.getHours()).slice(-2);
  var mi = ("00" + dt.getMinutes()).slice(-2);

  const y1 = 2016;
  const m1 = 9;
  const d1 = 23;

  var dy = Number(y) - y1;
  var dm = Number(m) - m1;
  var dd = Number(d) - d1;
  if (dd < 0) {
    dd = daysm[(((Number(m) - 2) % 12) + 12) % 12] - d1 + Number(d);
    if (Number(y) % 4 == 0 && Number(m) == 3) {
      dd == dd + 1;
    }
    dm = dm - 1;
  }
  if (dm < 0) {
    dm = dm + 12;
    dy = dy - 1;
  }
  $(".year_1").text(dy);
  $(".month_1").text(dm);
  $(".day_1").text(dd);
  $(".month_2").text(dy * 12 + dm);

  var termday = dt - start;
  $(".day_2").text(Math.floor(termday / 86400000));

  $(".nowtime").text(y + "/" + m + "/" + d + "/" + h + ":" + mi + " 更新");
});
