var MainVisualizerAdorn = document.getElementById("VisualizerAdorn")





var Paused = false
var Skipped = false
var Volume = 50
var LastDisplayed = 0

var LowerTextVisibleTime = 0.5 * 1000
var LowerTextFadeTime = 0.5 * 1000

var LowerTextDiv = document.createElement("div")
LowerTextDiv.style.height = "5%"
LowerTextDiv.style.top = "94%"
LowerTextDiv.style.width = "100%"
MainVisualizerAdorn.appendChild(LowerTextDiv)

var VolumeText = document.createElement("p")
VolumeText.style.zIndex = "10"
VolumeText.classList.add("RegularText")
VolumeText.style.width = "100%"
VolumeText.style.height = "50%"
LowerTextDiv.appendChild(VolumeText)

var ControlsText = document.createElement("p")
ControlsText.style.zIndex = "10"
ControlsText.classList.add("RegularText")
ControlsText.style.width = "100%"
ControlsText.style.height = "50%"
ControlsText.style.top = "50%"
ControlsText.innerHTML = "&nbsp;Press P to pause. Press O to skip."
LowerTextDiv.appendChild(ControlsText)

var GithubText = document.createElement("p")
GithubText.style.zIndex = "10"
GithubText.classList.add("RegularText")
GithubText.style.height = "50%"
GithubText.style.top = "50%"
GithubText.style["text-align"] = "right"
GithubText.innerHTML = ""
LowerTextDiv.appendChild(GithubText)

var GithubClickableText = document.createElement("a")
GithubClickableText.style.zIndex = "10"
GithubClickableText.classList.add("RegularText")
GithubClickableText.style.height = "100%"
GithubClickableText.style.width = "100%"
GithubClickableText.style["text-align"] = "right"
GithubClickableText.href = "https://github.com/TheNexusAvenger/Monstercat-Visualizer"
GithubClickableText.target = "_blank"
GithubClickableText.innerHTML = "Github&nbsp;"
GithubText.appendChild(GithubClickableText)




function UpdateVolume() {
	GainNode.gain.value = -(1 - (Volume/100))
}

function Pause() {
	if (Source != null) {
		Paused = true
		TimeOffset = TimeOffset + Date.now() - StartTime
		Source.stop()
		SetMainBackgroundPlaying(false)
		UpdateNextReleasePaused()
	}
}

function Resume() {
	Paused = false
	SetMainBackgroundPlaying(true,TimeOffset/1000)
	StartTime = Date.now()

	CreateSourceBuffer()
	Source.start(0,TimeOffset/1000)
	UpdateNextReleasePaused()
}
 
function Skip() {
	if (Source != null && StartTime != 0) {
		Skipped = true

		SetMainBackgroundPlaying(false)
		StartTime = 0
		TimeLength = 0
		TimeOffset = 0
		SetNextReleaseInfoHeight(0)

		Source.stop()
		SetMainLogoSizeX(0)
		SetMainTextSizeX(0)
		PlayNextSong()
	}
}

function UpdateBottomText() {
	var CurrentTime = Date.now()
	if (CurrentTime - LastDisplayed < LowerTextVisibleTime) {
		LowerTextDiv.style.opacity = 1
	} else if (CurrentTime - LastDisplayed > LowerTextVisibleTime + LowerTextFadeTime) {
		LowerTextDiv.style.opacity = 0
	} else {
		LowerTextDiv.style.opacity = 1 - ((CurrentTime - LastDisplayed - LowerTextVisibleTime)/LowerTextFadeTime)
	}
	
	VolumeText.innerHTML = "&nbsp;Volume: " + Volume + "%"

	VolumeText.style["font-size"] = (VolumeText.clientHeight) + "px"
	ControlsText.style["font-size"] = (ControlsText.clientHeight) + "px"
	GithubText.style["font-size"] = (GithubText.clientHeight) + "px"

	VolumeText.style["letter-spacing"] = ((VolumeText.clientHeight/1080)* -4) + "px"
	ControlsText.style["letter-spacing"] = ((ControlsText.clientHeight/1080) * -4) + "px"
	GithubText.style["letter-spacing"] = ((GithubText.clientHeight/1080) * -4) + "px"

	GithubButtonWidth = GithubText.clientHeight * 5
	GithubText.style.width = GithubButtonWidth + "px"
	GithubText.style.left = (LowerTextDiv.clientWidth - GithubButtonWidth) + "px"
}
UpdateBottomText()



MainVisualizerAdorn.addEventListener("mousemove", function(Key) {
	LastDisplayed = Date.now()
	UpdateBottomText()
})

MainVisualizerAdorn.addEventListener("keydown", function(Key) {
	if (StartTime != 0) {
		var KeyCode = Key.code
		if (KeyCode == "KeyP") {
			if (Paused == true) {
				Resume()
			} else {
				Pause()
			}
		} else if (KeyCode == "ArrowUp") {
			LastDisplayed = Date.now()
			Volume = Volume + 5
			if (Volume > 100) {
				Volume = 100
			}
			UpdateVolume()
			UpdateBottomText()
		} else if (KeyCode == "ArrowDown") {
			LastDisplayed = Date.now()
			Volume = Volume - 5
			if (Volume < 0) {
				Volume = 0
			}
			UpdateVolume()
			UpdateBottomText()
		} else if (KeyCode == "KeyO") {
			if (Skipped == false) {
				Skip()
			}
		}
	}
})