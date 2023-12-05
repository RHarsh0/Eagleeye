window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.eagle__nav');
    if (window.scrollY > 100) { // Adjust the scroll position at which the navbar becomes smaller
      navbar.classList.add('small');
    } else {
      navbar.classList.remove('small');
    }
  });

  var ham = document.querySelector(".eagle__nav-ham");
  ham.addEventListener('click',function(){
      var menu = document.querySelector(".eagle__nav-ham_menu");

      menu.classList.toggle('active');

  });

  document.getElementById('callBtn').addEventListener('click', function() {
    window.location.href = 'tel:+91 9027999315'; // Replace with your phone number
  });

  document.getElementById('whatsapp').addEventListener('click', function() {
    var phoneNumber = '9027999315'; // Replace with your phone number
    var message = 'Hello!'; // Replace with your message (optional)

    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.location.href = url;
  });
  // console.log("nav is get here");