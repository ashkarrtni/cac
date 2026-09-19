var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle) {
    toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); });
    });
  }

  var form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('fname').value;
      var email = document.getElementById('femail').value;
      var phone = document.getElementById('fphone').value;
      var cls = document.getElementById('fclass').value;
      var subject = encodeURIComponent('Class enquiry: ' + cls);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n' +
        'Class of interest: ' + cls
      );
      window.location.href = 'mailto:cochinartsandcommunications@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
