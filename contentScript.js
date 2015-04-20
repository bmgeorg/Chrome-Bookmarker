console.log("Started content script");

function getCurrentPage() {
	var page = {};
	page.body = document.documentElement.innerText;
	return page;
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		sendResponse(getCurrentPage());
	});