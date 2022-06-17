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
		window.location.reload();
	},
	});

	if (message.textContent != `AutoRefresher com intervalo de 5 minutos foi criado com sucesso.`)
	{
		message.textContent = `AutoRefresher com intervalo de 5 minutos foi criado com sucesso.`
	}
});

quinze.addEventListener("click", async () => {

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		sessionStorage.setItem("link", window.location.hostname);
		sessionStorage.setItem("interval", "900000");
		window.location.reload();
	  },
	});

	if (message.textContent != `AutoRefresher com intervalo de 15 minutos foi criado com sucesso.`)
	{
		message.textContent = `AutoRefresher com intervalo de 15 minutos foi criado com sucesso.`
	}
});

trinta.addEventListener("click", async () => {

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		sessionStorage.setItem("link", window.location.hostname);
		sessionStorage.setItem("interval", "900000");
		window.location.reload();
	  },
	});

	if (message.textContent != `AutoRefresher com intervalo de 30 minutos foi criado com sucesso.`)
	{
		message.textContent = `AutoRefresher com intervalo de 30 minutos foi criado com sucesso.`
	}
});



//clear sessionStorage
const stopRefresh = document.getElementById("stopRefresh");
stopRefresh.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		  sessionStorage.removeItem("link");
		  sessionStorage.removeItem("interval");
	  },
	});

	if (message.textContent != `AutoRefresher removido com sucesso.`)
	{
		message.textContent = `AutoRefresher removido com sucesso.`
	}
});
