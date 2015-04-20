

/*
document.addEventListener('DOMContentLoaded', function() {
	//query current tab for page content
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {request: "pageContent"}, function(page) {
			var body = page.body;
			var tokens = body.split(" ");
			var sum = 0;
			var i;
			for(i = 0; i < tokens.length; i++) {
				var j;
				for(j = 0; j < tokens[i].length; j++) {
					sum += tokens[i].charCodeAt(j);
				}
			}
			console.log("Sum: " + sum);
		});
		console.log("Sent message");
	});
});
*/