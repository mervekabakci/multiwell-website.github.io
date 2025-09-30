document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".quizForm .formStep");
  const progress = document.querySelector(".progressbar span");
  const quizForm = document.querySelector(".quizForm");
  const quizResult = document.querySelector(".quizResult");
  const resultContent = document.querySelector(".resultContent");
  const againButton = document.querySelector(".againButton");

  let currentStep = 0;
  const totalSteps = steps.length; // Sonuç butonu dahil
  const userAnswers = [];

  progress.innerHTML = "1 / " + totalSteps;
  function updateProgress() {
    // Son adım (result button) hariç soruların sayısı için
    const visibleTotal = totalSteps - 1;
    progress.textContent = `${Math.min(
      currentStep + 1,
      visibleTotal
    )}/${visibleTotal}`;
  }

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
    updateProgress();
  }

  steps.forEach((step, stepIndex) => {
    // Cevap seçenekleri
    const options = step.querySelectorAll(".option input[type='radio']");
    options.forEach((input) => {
      input.addEventListener("change", function () {
        // label'a selected ekle
        step
          .querySelectorAll(".option")
          .forEach((l) => l.classList.remove("selected"));
        this.closest(".option").classList.add("selected");
        step.classList.add("answered");

        // Seçimi kaydet
        userAnswers[stepIndex] = this.value;

        // Eğer bu son soruysa progressbar'ı gizle
        const progressbar = document.querySelector(".progressbar");
        if (stepIndex === steps.length - 2) {
          // -2 çünkü son step sonuç butonu
          progressbar.style.display = "none";
        }

        // Bir sonraki adım
        if (stepIndex + 1 < steps.length) {
          currentStep = stepIndex + 1;
          showStep(currentStep);
        }
      });
    });
  });

  // Sonuç butonuna tıklama
  document.querySelector(".formButton").addEventListener("click", function (e) {
    e.preventDefault();
    quizForm.style.display = "none";
    quizResult.style.display = "block";

    // Kullanıcı cevaplarını örnek biçimde yazdır
    resultContent.style.display = "block";
  });

  // Başlangıç
  showStep(currentStep);

  // Tekrar başlat butonuna tıklama
  againButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Sonuç ekranını gizle, formu göster
    quizResult.style.display = "none";
    quizForm.style.display = "block";

    // Progress bar tekrar gözüksün
    const progressbar = document.querySelector(".progressbar");
    progressbar.style.display = "block";

    // Cevapları temizle
    userAnswers.length = 0;
    steps.forEach((step) => {
      step.classList.remove("answered");
      step.querySelectorAll("input[type='radio']").forEach((input) => {
        input.checked = false;
        step
          .querySelectorAll(".option")
          .forEach((opt) => opt.classList.remove("selected"));
      });
    });

    // İlk adıma dön
    currentStep = 0;
    showStep(currentStep);
  });
  // Testi Başlat butonu
  const getTestButton = document.querySelector(".getTestButton");

  getTestButton.addEventListener("click", function (e) {
    e.preventDefault();

    const quizWrapper = document.querySelector(".quizFormWrapper");
    const elementY = quizWrapper.getBoundingClientRect().top + window.scrollY;
    const targetY = elementY - 220; // header varsa ayarlayabilirsin

    // Yumuşak kaydırma
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  });
});
