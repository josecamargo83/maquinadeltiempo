document.querySelectorAll(".menu .ul_links .il_links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu_resp").checked = false;
  });
});
  


