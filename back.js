function alertlol1() {

chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
suggest({filename: "mydir/" + item.filename});
});
 
}
chrome.browserAction.onClicked.addListener(alertlol1);
alertlol1();
