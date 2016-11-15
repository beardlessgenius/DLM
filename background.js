function alertlol() {

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
suggest({filename: "mysubdirectory/" + item.filename});
});
 
}
chrome.browserAction.onClicked.addListener(alertlol);
alertlol();

