const cinco = document.getElementById("cinco");
const quinze = document.getElementById("quinze");
const trinta = document.getElementById("trinta");
const message = document.getElementById("logs");

cinco.addEventListener("click", async () => {

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		sessionStorage.setItem("link", window.location.hostname);
		sessionStorage.setItem("interval", "300000");
	},
	});

	if (message.textContent != `AutoRefresher com intervalo de 5 minutos foi criado. Recarregue a página para que ele seja ativado.`)
	{
		message.textContent = `AutoRefresher com intervalo de 5 minutos foi criado. Recarregue a página para que ele seja ativado.`
	}
});

quinze.addEventListener("click", async () => {

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		sessionStorage.setItem("link", window.location.hostname);
		sessionStorage.setItem("interval", "900000");
	  },
	});

	if (message.textContent != `AutoRefresher com intervalo de 15 minutos foi criado. Recarregue a página para que ele seja ativado.`)
	{
		message.textContent = `AutoRefresher com intervalo de 15 minutos foi criado. Recarregue a página para que ele seja ativado.`
	}
});

trinta.addEventListener("click", async () => {

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		sessionStorage.setItem("link", window.location.hostname);
		sessionStorage.setItem("interval", "900000");
	  },
	});

	if (message.textContent != `AutoRefresher com intervalo de 30 minutos foi criado. Recarregue a página para que ele seja ativado.`)
	{
		message.textContent = `AutoRefresher com intervalo de 30 minutos foi criado. Recarregue a página para que ele seja ativado.`
	}
});



//clear sessionStorage
const stopRefresh = document.getElementById("stopRefresh");
stopRefresh.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		  sessionStorage.clear();
	  },
	});

	if (message.textContent != `AutoRefresher removido com sucesso.`)
	{
		message.textContent = `AutoRefresher removido com sucesso.`
	}
});