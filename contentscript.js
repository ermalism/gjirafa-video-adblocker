var div = document.createElement('script');
div.innerHTML=`
function removeAd() {
    typeof gjanout != "undefined" && gjanout.stopVideoAd && gjanout.stopVideoAd("vad");
    adPlatformEvents.holder.style.display = "none";
    adPlatformEvents.requesting = !1;
    adPlatformEvents.active = !1;
    document.querySelector("#play-embed") && (document.querySelector("#play-embed").style.display = "block");
    unmuteOverlay.style.visibility = "visible";
    videoEvents.loadAjaxComponents()
    videoEvents.play()
}

function checkForAdRemoval() {
	if(adPlatformEvents.active || adPlatformEvents.requesting) {
        console.log("remove ad");
		removeAd();
	}
}
var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
		checkForAdRemoval();
    });
  });
  
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
`;
document.body.appendChild(div);
