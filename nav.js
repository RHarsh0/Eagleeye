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
  