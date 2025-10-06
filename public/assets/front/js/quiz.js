document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".quizForm .formStep");
  const progress = document.querySelector(".progressbar span");
  const quizForm = document.querySelector(".quizForm");
  const quizFormWrapper = document.querySelector(".quizFormWrapper");
  const resultStep = document.querySelector(".resultStep");
  const quizResult = document.querySelector(".quizResult");
  const resultContent = document.querySelector(".resultContent");
  const againButton = document.querySelector(".againButton");

  let currentStep = 0;
  const totalSteps = steps.length;
  const userAnswers = [];

  progress.textContent = `1 / ${totalSteps}`;

  // === PROGRESS BAR GÜNCELLEME ===
  function updateProgress() {
    progress.textContent = `${Math.min(
      currentStep + 1,
      totalSteps
    )}/${totalSteps}`;
  }

  // === ADIM GÖSTERME ===
  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
    updateProgress();
  }

  // === HER SORUDA CEVAP SEÇİMİ ===
  steps.forEach((step, stepIndex) => {
    const options = step.querySelectorAll(".option input[type='radio']");
    options.forEach((input) => {
      input.addEventListener("change", function () {
        // Label görsel seçimi
        step
          .querySelectorAll(".option")
          .forEach((opt) => opt.classList.remove("selected"));
        this.closest(".option").classList.add("selected");
        step.classList.add("answered");

        // Cevabı kaydet
        userAnswers[stepIndex] = {
          question: step.querySelector(".question").textContent.trim(),
          answer: this.parentElement.textContent.trim(),
        };

        // Son sorudan sonra formu gizle
        if (stepIndex + 1 < steps.length) {
          currentStep = stepIndex + 1;
          showStep(currentStep);
        } else {
          // Quiz tamamlandığında form kapanır, sonuç adımı görünür
          quizForm.style.display = "none";
          quizFormWrapper.classList.add("disabled");
          resultStep.classList.remove("disabled");
          // resultStep.style.display = "block";
          document.querySelector(".progressbar").style.display = "none";

        const testResultButton = document.querySelector(".testResultButton");
        if (testResultButton) {
          // Diğer butonların aktifliklerini kaldır
          document
            .querySelectorAll(".testResultButton, .showAnswersButton, .sendEmailButton")
            .forEach((btn) => btn.classList.remove("active"));

          // İlgili tüm içerikleri gizle
          quizResult.querySelectorAll(".resultText, .resultAnswer, .resultEPosta").forEach((sec) => {
            sec.style.display = "none";
          });

          // Test sonucu butonunu ve içeriğini aktif yap
          testResultButton.classList.add("active");
          const target = quizResult.querySelector(".resultText");
          quizResult.classList.remove("disabled");
          quizResult.style.display = "block";
          if (target) target.style.display = "block";
        }
        }
      });
    });
  });

  // === TEST SONUCU GÖSTER ===
  document
    .querySelector(".testResultButton")
    .addEventListener("click", function (e) {
      e.preventDefault();
      showResultSection("resultText", this);
    });

  // === CEVAPLARIMI GÖSTER ===
  document
    .querySelector(".showAnswersButton")
    .addEventListener("click", function (e) {
      e.preventDefault();
      showResultSection("resultAnswer", this);
      renderUserAnswers();
    });

  // === SONUÇ E-POSTA İLE GÖNDER ===
  document
    .querySelector(".sendEmailButton")
    .addEventListener("click", function (e) {
      e.preventDefault();
      showResultSection("resultEPosta", this);
    });

  // === SONUÇ BÖLÜMÜ GÖSTERME ===
  function showResultSection(sectionClass, button) {
    // Eğer quizResult disabled ise kaldır
    if (quizResult.classList.contains("disabled")) {
      quizResult.classList.remove("disabled");
    }

    quizResult.style.display = "block";

    const target = quizResult.querySelector(`.${sectionClass}`);
    const isActive = button.classList.contains("active");

    // Eğer buton zaten aktifse (2. tıklama) -> kapat
    if (isActive) {
      button.classList.remove("active");
      if (target) target.style.display = "none";
    } else {
      // Butonu aktif yap
      button.classList.add("active");
      // İlgili alanı göster
      if (target) target.style.display = "block";
    }
  }

  // === CEVAPLARI LİSTELE ===
  function renderUserAnswers() {
    const container = quizResult.querySelector(".resultAnswer .bg-white");
    container.innerHTML = "";

    if (userAnswers.length === 0) {
      container.innerHTML = "<p>Henüz cevaplanmış soru bulunmamaktadır.</p>";
      return;
    }

    const list = document.createElement("ol");
    list.classList.add("answersList");

    userAnswers.forEach((item, index) => {
      const qDiv = document.createElement("li");
      qDiv.classList.add("userAnswerItem");
      qDiv.innerHTML = `
      <div class="desc">
        <div class="question">${item.question}</div>
        <div class="answer">${item.answer}</div>
      </div>
      `;
      list.appendChild(qDiv);
    });

    container.appendChild(list);
  }

  // === TEKRAR BAŞLAT ===
  againButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Sonuç ekranını kapat
    quizResult.style.display = "none";
    quizResult.classList.add("disabled");

    // Formu yeniden aç
    quizForm.style.display = "block";
    quizFormWrapper.classList.remove("disabled");
    resultStep.classList.add("disabled");
    // resultStep.style.display = "none";

    // Progress bar sıfırla
    const progressbar = document.querySelector(".progressbar");
    progressbar.style.display = "block";

    // Cevapları temizle
    userAnswers.length = 0;
    steps.forEach((step) => {
      step.classList.remove("answered");
      step.querySelectorAll("input[type='radio']").forEach((input) => {
        input.checked = false;
      });
      step
        .querySelectorAll(".option")
        .forEach((opt) => opt.classList.remove("selected"));
    });

    // İlk adıma dön
    currentStep = 0;
    showStep(currentStep);
  });

  // === TESTİ BAŞLAT ===
  const getTestButton = document.querySelector(".getTestButton");
  if (getTestButton) {
    getTestButton.addEventListener("click", function (e) {
      e.preventDefault();
      const quizWrapper = document.querySelector(".quizFormWrapper");
      const elementY = quizWrapper.getBoundingClientRect().top + window.scrollY;
      const targetY = elementY - 220;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    });
  }

  // Başlangıç
  showStep(currentStep);
});
