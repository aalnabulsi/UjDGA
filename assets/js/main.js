
  // نحدد كل الروابط داخل الـ offcanvas
  document.querySelectorAll('#offcanvasRight a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      let offcanvasElement = document.getElementById('offcanvasRight');
      let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);

      if (bsOffcanvas) {
        bsOffcanvas.hide(); // يغلق القائمة
      }

      // تمرير سلس للقسم المطلوب
      const targetId = this.getAttribute('href').substring(1); // يحذف #
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault(); // يمنع القفز المفاجئ
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
