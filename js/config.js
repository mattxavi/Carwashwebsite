window.onload = () => {
	const nome = document.getElementById('inputNome')
	const email = document.getElementById('inputEmail')
	const tel = document.getElementById('inputTelefone')
	const msg = document.getElementById('inputMensagem')
	const btn = document.getElementsByTagName('button')
	const span = document.getElementsByClassName("isValid")

	let asterisco = document.getElementsByClassName("asterisco")
	let cont = null

	email.onblur = () => {
		user = email.value.substring(0, email.value.indexOf("@"))
		dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length)

		if ((user.length >=1) && (dominio.length >=3) && (user.search("@") ==-1) && (dominio.search("@") ==-1) && (user.search(" ") ==-1) && (dominio.search(" ") ==-1) && (user.search(".") !=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
			span[0].innerHTML = "<font color = 'green'> E-mail válido!</font>"
		}
		else {
			span[0].innerHTML = "<font color = 'red'> Formato de e-mail inválido</font>"
			cont++
		}
	}

	nome.onchange = () => {
		if (nome.value.length === 0) {
			asterisco[0].style.display = 'inline'
			cont++
		} else {
			asterisco[0].style.display = 'none'
		}
	}

	email.onchange = () => {
		if (email.value.length === 0) {
			asterisco[1].style.display = 'inline'
			cont++
		} else {
			asterisco[1].style.display = 'none'
		}
	}

	tel.onchange = () => {
		if (tel.value.length === 0) {
			asterisco[2].style.display = 'inline'
			cont++
		} else {
			asterisco[2].style.display = 'none'
		}
	}

	msg.onchange = () => {
		if (msg.value.length === 0) {
			asterisco[3].style.display = 'inline'
			cont++
		} else {
			asterisco[3].style.display = 'none'
		}
	}

	btn[1].onclick = () => {
		if (nome.value.length === 0) {
			asterisco[0].style.display = 'inline'
			cont++
		} else {
			asterisco[0].style.display = 'none'
		}
		
		if (email.value.length === 0) {
			asterisco[1].style.display = 'inline'
			cont++
		} else {
			asterisco[1].style.display = 'none'
		}
			
		if (tel.value.length === 0) {
			asterisco[2].style.display = 'inline'
			cont++
		} else {
			asterisco[2].style.display = 'none'
		}
			
		if (msg.value.length === 0) {
			asterisco[3].style.display = 'inline'
			cont++
		} else {
			asterisco[3].style.display = 'none'
		}
		
		if (cont === null) {
			alert("Sua mensagem foi enviada com sucesso. Obrigado!")
			return true
		} else {
			alert("Preencha todos os campos!")
			cont = null
			return false
		}
	}
}