$('#feedbackForm').submit(function(e) {
	var name = document.getElementById('feedbackName'),
		email = document.getElementById('feedbackMail'),
		corporation = document.getElementById('feedbackCorp'),
		message = document.getElementById('feedbackTextarea');

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