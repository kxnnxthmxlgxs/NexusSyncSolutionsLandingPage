//portfolio card slider javascript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
});




//javascript for scrolling animation

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Stop observing once element is animated
        }
      });
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });



//EmailJS code for contact us section

function sendMail() {
    let parms = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        contact : document.getElementById("contact").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_eyev80b","template_2xaxbq2", parms).then(alert("Your email has been Sent!!!"))
}


// Toggle burger menu
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('show');
}

  