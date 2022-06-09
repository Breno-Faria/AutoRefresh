const cinco = document.getElementById("cinco");
const quinze = document.getElementById("quinze");
const trinta = document.getElementById("trinta");

cinco.addEventListener("click", async () => {

	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: () => {
		sessionStorage.setItem("link", window.location.hostname);
		sessionStorage.setItem("interval", "300000");
	  },
	});
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
});