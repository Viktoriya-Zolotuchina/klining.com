$(document).ready(function() {
    // Плавная прокрутка к якорям
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
    });
    
    // Анимация элементов при прокрутке
    function checkScroll() {
        $('.animate-on-scroll').each(function() {
            const elementTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 50) {
                $(this).addClass('visible');
            }
        });
    }
    
    $(window).on('scroll', checkScroll);
    checkScroll();
    
    // Обработка формы
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const name = $('#name').val();
        const phone = $('#phone').val();
        const city = $('#city').val();
        const service = $('#service').val();
        const message = $('#message').val();
        
        // Валидация
        if (!name || !phone || !city || !service) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        // Здесь можно добавить код для отправки данных на сервер
        // Например, с помощью AJAX
        
        // Показываем сообщение об успехе
        alert('Спасибо, ' + name + '! Ваша заявка принята. Мы свяжемся с вами в ближайшее время по телефону ' + phone);
        
        // Очищаем форму
        $('#contactForm')[0].reset();
    });
    
    // Подсветка активного пункта меню при прокрутке
    $(window).on('scroll', function() {
        const scrollPos = $(document).scrollTop() + 100;
        
        $('nav a').each(function() {
            const currLink = $(this);
            const refElement = $(currLink.attr('href'));
            
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });
    
    // Добавляем класс active к первому пункту меню при загрузке
    $('nav a[href="#home"]').addClass('active');

});
