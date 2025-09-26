const allDialogs = document.querySelectorAll("dialog");

// Kapatma için mevcut kod
allDialogs.forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!isInDialog) {
      dialog.close();
    }
  });
  const closeBtn = dialog.querySelector(".closeBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      dialog.close();
      document.querySelector("body").style.overflow = "unset";
    });
  }
});

// Açma için ekleme
document.querySelectorAll("[data-dialog]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const dialogId = btn.getAttribute("data-dialog");
    const dialog = document.getElementById(dialogId);
    if (dialog) {
      dialog.showModal();
      document.querySelector("body").style.overflow = "hidden";
    }
  });
});
