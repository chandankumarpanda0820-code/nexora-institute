
// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".nexora-navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


// CLOSE MOBILE MENU AFTER CLICK

const navLinks = document.querySelectorAll(".nexora-navbar .nav-link");

const navCollapse = document.querySelector("#nexoraNav");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth < 992) {

      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);

      bsCollapse.hide();

    }

  });

});


// NEXORA — INTERACTIVE HERO PARALLAX

const abstractStage = document.querySelector(".abstract-stage");

if (abstractStage) {

  abstractStage.addEventListener("mousemove", (event) => {

    if (window.innerWidth <= 991) return;

    const rect = abstractStage.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const moveX = ((x / rect.width) - 0.5) * 12;
    const moveY = ((y / rect.height) - 0.5) * 12;

    abstractStage.style.setProperty("--move-x", `${moveX}px`);
    abstractStage.style.setProperty("--move-y", `${moveY}px`);

  });

  abstractStage.addEventListener("mouseleave", () => {
    abstractStage.style.setProperty("--move-x", "0px");
    abstractStage.style.setProperty("--move-y", "0px");
  });

}


// NEXORA — NAVBAR ACTIVE SECTION DETECTION

const pageSections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(
  'nav a[href^="#"]'
);

function updateActiveNavigation() {

  let currentSection = "";

  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 180 &&
      window.scrollY < sectionTop + sectionHeight - 180) {
      currentSection = section.getAttribute("id");
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigation);
window.addEventListener("load", updateActiveNavigation);


/* NEXORA — WHY US SCROLL REVEAL */

const whyCards = document.querySelectorAll(".why-card");

if ("IntersectionObserver" in window) {

  const whyObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("why-visible");
        whyObserver.unobserve(entry.target);
      }

    });

  }, {
    threshold: 0.15
  });

  whyCards.forEach((card) => {
    whyObserver.observe(card);
  });

}


/* =====================================
   NEXORA — DIRECTOR SCROLL ANIMATION
===================================== */

const directorElements = document.querySelectorAll(
  ".director-main, .director-philosophy"
);

if ("IntersectionObserver" in window) {

  const directorObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("director-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );

  directorElements.forEach((element) => {
    directorObserver.observe(element);
  });

} else {

  directorElements.forEach((element) => {
    element.classList.add("director-visible");
  });

}



/* =========================================
   NEXORA — WHATSAPP ADMISSION SUBMISSION
========================================= */

const admissionForm = document.getElementById(
  "nexoraAdmissionForm"
);

if (admissionForm) {

  admissionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!admissionForm.reportValidity()) {
      return;
    }

    const studentName = document
      .getElementById("studentName").value.trim();

    const studentEmail = document
      .getElementById("studentEmail").value.trim();

    const studentPhone = document
      .getElementById("studentPhone").value.trim();

    const fatherName = document
      .getElementById("fatherName").value.trim();

    const qualification = document
      .getElementById("qualification").value;

    const selectedCourse = document
      .getElementById("selectedCourse").value;


    // PROFESSIONAL WHATSAPP MESSAGE

    const message = `
*🎓 NEXORA INSTITUTE*
*NEW ADMISSION ENQUIRY*

━━━━━━━━━━━━━━━━━━━━

*👤 STUDENT DETAILS*

▪️ Name: ${studentName}
▪️ Email: ${studentEmail}
▪️ Phone: ${studentPhone}
▪️ Father's Name: ${fatherName}

━━━━━━━━━━━━━━━━━━━━

*📚 ACADEMIC DETAILS*

▪️ Last Qualification: ${qualification}
▪️ Interested Course: ${selectedCourse}

━━━━━━━━━━━━━━━━━━━━

*📩 APPLICATION STATUS*

New Admission Enquiry
Source: NEXORA Official Website

━━━━━━━━━━━━━━━━━━━━
Thank you!
*NEXORA INSTITUTE*
Build Skills. Shape Your Future.
        `.trim();


    const whatsappNumber = "918984240820";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    // OPEN WHATSAPP

    const whatsappWindow = window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    const status = document.getElementById("admissionStatus");

    if (whatsappWindow) {
      status.textContent =
        "Your application message is ready! Please press Send in WhatsApp to complete your enquiry.";
    } else {
      status.textContent =
        "WhatsApp popup was blocked. Please allow popups and submit again.";
    }

    status.classList.add("show");

  });

}


/* NEXORA — AUTOMATIC COPYRIGHT YEAR */

const footerYear = document.getElementById("footerYear");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}