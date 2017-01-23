$('#feedbackForm').submit(function(e) {
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