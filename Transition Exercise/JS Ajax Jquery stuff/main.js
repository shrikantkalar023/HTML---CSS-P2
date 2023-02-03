$(function () {
  $.ajax({
    url: "https://randomuser.me/api/?inc=name,picture",
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
  });
});
