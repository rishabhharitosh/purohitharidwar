/* Purohit Haridwar — shared site script (no dependencies) */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "918679636172";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Highlight current page in nav */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) {
      a.setAttribute("aria-current", "page");
    }
  });

  /* Generic WhatsApp booking form handler.
     Add data-service="Pind Daan" on any <form data-wa-form> to reuse. */
  document.querySelectorAll("form[data-wa-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var service = form.getAttribute("data-service") || "Booking";
      var lines = [service + " Booking Request:"];
      form.querySelectorAll("[data-wa-field]").forEach(function (field) {
        var label = field.getAttribute("data-wa-field");
        var value = field.value.trim();
        if (value) lines.push(label + ": " + value);
      });
      var text = encodeURIComponent(lines.join("\n"));
      window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank");
    });
  });
})();
