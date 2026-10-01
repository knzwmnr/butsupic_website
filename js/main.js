(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var type = (form.querySelector('[name="type"]') || {}).value || "";
    var name = (form.querySelector('[name="name"]') || {}).value || "";
    var body = (form.querySelector('[name="body"]') || {}).value || "";
    var subject = encodeURIComponent("[仏ピク] " + type + (name ? " / " + name : ""));
    var mailBody = encodeURIComponent(
      "種別: " + type + "\nお名前: " + name + "\n\n" + body
    );
    window.location.href =
      "mailto:hello@butsupic.com?subject=" + subject + "&body=" + mailBody;
  });
})();
