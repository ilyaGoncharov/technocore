$('#feedbackForm').submit(function(e) {
	var name = document.getElementById('name'),
		email = document.getElementById('email'),
		corporation = document.getElementById('corp'),
		message = document.getElementById('textarea');

	if (!name.value || !email.value || !message.value) {
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