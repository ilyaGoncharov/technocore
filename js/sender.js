/*$('#feedbackForm').submit(function(e) {
	var name = document.getElementById('ffname'),
		email = document.getElementById('ffmail'),
		corporation = document.getElementById('ffcorp'),
		message = document.getElementById('fftext');

	if (!name.value || !email.value || !message.value || !corporation) {
		alertify.error('Проверьте введенные данные!')
	}	else {
		$.ajax({
		    url: "https://formspree.io/karnebero@gmail.com", 
		    method: "POST",
		    data: $(this).serialize(),
		    dataType: "json"
		});
		e.preventDefault()
		$(this).get(0).reset() 
		alertify.alert('Сообщение отправленно!')
	}
});
*/
var $contactForm = $('#ff');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'https://formspree.io/info@texnokor.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {

			$contactForm.append('<div class="alert alert--loading">Отправляю… [Sending...]</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Cообщение отправлено! [Message sent!]</div>');
			$('#feedbackContainer').modal('hide');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Произошла ошибка [ There was an error.]</div>');
		}
	});
});