fetch("navbar.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("navbar-input").innerHTML = html;
  });
