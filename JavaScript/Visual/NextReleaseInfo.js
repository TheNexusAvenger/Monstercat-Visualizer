var LatestAlbumImage = "https://assets.monstercat.com/releases/covers/b2e5df08750e4cc10effe77acba2ac27.jpeg?image_width=512"
var LatestAlbumMix1 = "Overture Mix"
var LatestAlbumMix2 = "Finale Mix"

var SubscribeSizeX1080p = 490
var SubscribeSizeY1080p = 75
var SubscribePosX1080p = 100
var SubscribePosY1080p = 130

var PanelSizeX1080p = 480
var PanelSizeY1080p = 200
var PanelPosX1080p = 100

var LatestAlbumSizeY1080p = 250
var LatestAlbumPosY1080p = 280
var GenrePlaylistPosY1080p = 545
var GenericPosY1080p = 760

var NextReleaseSizeX1080p = 1200
var NextReleaseSizeY1080p = 680
var NextReleasePosX1080p = 600
var NextReleasePosY1080p = 280

var BufferInterval = 1024

function CreateNextReleaseInfo(Adorn) {
	var MainDiv = document.createElement("div")
	MainDiv.style.zIndex = "10"
	Adorn.appendChild(MainDiv)

	var SubscribeDiv = document.createElement("div")
	SubscribeDiv.classList = "NoClip"
	SubscribeDiv.style.background = "rgba(0,0,0,1)"
	SubscribeDiv.style.zIndex = "10"
	MainDiv.appendChild(SubscribeDiv)

	var SubsribeButton = document.createElement("img")
	SubsribeButton.src = "Images/SubscribeButton.png"
	SubsribeButton.style.zIndex = "10"
	SubsribeButton.style.width = "100%"
	SubsribeButton.style.height = "100%"
	SubscribeDiv.appendChild(SubsribeButton)

	var SubsribeText = document.createElement("p")
	SubsribeText.classList.add("BoldText")
	SubsribeText.style.zIndex = "10"
	SubsribeText.style.width = "50%"
	SubsribeText.style.height = "57%"
	SubsribeText.style.left = "34%"
	SubsribeText.style.top = "21.5%"
	SubsribeText.innerHTML = "Subscribe"
	SubsribeText.style.color = "#000000"
	SubscribeDiv.appendChild(SubsribeText)

	var ReleaseTimesText = document.createElement("p")
	ReleaseTimesText.classList.add("BoldText")
	ReleaseTimesText.style.zIndex = "10"
	ReleaseTimesText.style.width = "200%"
	ReleaseTimesText.style.height = "57%"
	ReleaseTimesText.style.left = "105%"
	ReleaseTimesText.style.top = "21.5%"
	ReleaseTimesText.innerHTML = "New Releases Every Monday, Wednesday, Friday"
	SubscribeDiv.appendChild(ReleaseTimesText)

	var LatestReleaseDiv = document.createElement("div")
	LatestReleaseDiv.style.background = "rgba(0,0,0,1)"
	LatestReleaseDiv.style.zIndex = "10"
	MainDiv.appendChild(LatestReleaseDiv)

	var LatestAlbumMixesText = document.createElement("p")
	LatestAlbumMixesText.classList.add("RegularText")
	LatestAlbumMixesText.style.zIndex = "10"
	LatestAlbumMixesText.style.width = "90%"
	LatestAlbumMixesText.style.height = "9.5%"
	LatestAlbumMixesText.style.left = "3%"
	LatestAlbumMixesText.style.top = "8%"
	LatestAlbumMixesText.innerHTML = "Check Out The Latest Album Mixes"
	LatestReleaseDiv.appendChild(LatestAlbumMixesText)

	var LatestAlbumArtwork = document.createElement("img")
	LatestAlbumArtwork.src = LatestAlbumImage
	LatestAlbumArtwork.style.zIndex = "10"
	LatestAlbumArtwork.style.width = "40%"
	LatestAlbumArtwork.style.height = "75%"
	LatestAlbumArtwork.style.top = "25%"
	LatestReleaseDiv.appendChild(LatestAlbumArtwork)

	var Mix1Div = document.createElement("div")
	Mix1Div.style.background = "rgba(255,255,255,1)"
	Mix1Div.style.zIndex = "10"
	Mix1Div.style.width = "59%"
	Mix1Div.style.height = "36%"
	Mix1Div.style.left = "41%"
	Mix1Div.style.top = "25%"
	LatestReleaseDiv.appendChild(Mix1Div)

	var Mix1Arrow = document.createElement("img")
	Mix1Arrow.src = "Images/AlbumMixArrow.png"
	Mix1Arrow.style.zIndex = "10"
	Mix1Arrow.style.width = "4%"
	Mix1Arrow.style.height = "22%"
	Mix1Arrow.style.left = "2%"
	Mix1Arrow.style.top = "39%"
	Mix1Div.appendChild(Mix1Arrow)

	var Mix1Text = document.createElement("p")
	Mix1Text.classList.add("BoldText")
	Mix1Text.style.zIndex = "10"
	Mix1Text.style.width = "90%"
	Mix1Text.style.height = "25%"
	Mix1Text.style.left = "10%"
	Mix1Text.style.top = "37.5%"
	Mix1Text.innerHTML = LatestAlbumMix1
	Mix1Text.style.color = "#000000"
	Mix1Div.appendChild(Mix1Text)

	var Mix2Div = document.createElement("div")
	Mix2Div.style.background = "rgba(255,255,255,1)"
	Mix2Div.style.zIndex = "10"
	Mix2Div.style.width = "59%"
	Mix2Div.style.height = "36%"
	Mix2Div.style.left = "41%"
	Mix2Div.style.top = "64%"
	LatestReleaseDiv.appendChild(Mix2Div)

	var Mix2Arrow = document.createElement("img")
	Mix2Arrow.src = "Images/AlbumMixArrow.png"
	Mix2Arrow.style.zIndex = "10"
	Mix2Arrow.style.width = "4%"
	Mix2Arrow.style.height = "22%"
	Mix2Arrow.style.left = "2%"
	Mix2Arrow.style.top = "39%"
	Mix2Div.appendChild(Mix2Arrow)

	var Mix2Text = document.createElement("p")
	Mix2Text.classList.add("BoldText")
	Mix2Text.style.zIndex = "10"
	Mix2Text.style.width = "90%"
	Mix2Text.style.height = "25%"
	Mix2Text.style.left = "10%"
	Mix2Text.style.top = "37.5%"
	Mix2Text.innerHTML = LatestAlbumMix2
	Mix2Text.style.color = "#000000"
	Mix2Div.appendChild(Mix2Text)

	var PlaylistDiv = document.createElement("div")
	PlaylistDiv.style.background = "rgba(0,0,0,1)"
	PlaylistDiv.style.zIndex = "10"
	MainDiv.appendChild(PlaylistDiv)

	var ListenToMoreText = document.createElement("p")
	ListenToMoreText.classList.add("RegularText")
	ListenToMoreText.style.zIndex = "10"
	ListenToMoreText.style.width = "90%"
	ListenToMoreText.style.height = "12%"
	ListenToMoreText.style.left = "3%"
	ListenToMoreText.style.top = "6%"
	ListenToMoreText.innerHTML = "Listen to more from the"
	PlaylistDiv.appendChild(ListenToMoreText)

	var PlaylistBackground = document.createElement("img")
	PlaylistBackground.src = "Images/PlaylistBackground.png"
	PlaylistBackground.style.zIndex = "15"
	PlaylistBackground.style.width = "100%"
	PlaylistBackground.style.height = "73%"
	PlaylistBackground.style.top = "25%"
	PlaylistDiv.appendChild(PlaylistBackground)

	var PlaylistGenreColorBar = document.createElement("div")
	PlaylistGenreColorBar.style.zIndex = "10"
	PlaylistGenreColorBar.style.width = "100%"
	PlaylistGenreColorBar.style.height = "2%"
	PlaylistGenreColorBar.style.top = "98%"
	PlaylistDiv.appendChild(PlaylistGenreColorBar)

	var PlaylistGenreText = document.createElement("p")
	PlaylistGenreText.classList.add("BoldText")
	PlaylistGenreText.style.zIndex = "15"
	PlaylistGenreText.style.width = "80%"
	PlaylistGenreText.style.height = "18%"
	PlaylistGenreText.style.left = "8%"
	PlaylistGenreText.style.top = "50%"
	PlaylistGenreText.style.color = "#000000"
	PlaylistDiv.appendChild(PlaylistGenreText)

	var PlaylistText = document.createElement("p")
	PlaylistText.classList.add("RegularText")
	PlaylistText.style.zIndex = "15"
	PlaylistText.style.width = "80%"
	PlaylistText.style.height = "12%"
	PlaylistText.style.left = "8%"
	PlaylistText.style.top = "68%"
	PlaylistText.innerHTML = "Playlist"
	PlaylistText.style.color = "#000000"
	PlaylistDiv.appendChild(PlaylistText) 

	var GenericDiv = document.createElement("div")
	GenericDiv.style.background = "rgba(0,0,0,1)"
	GenericDiv.style.zIndex = "10"
	MainDiv.appendChild(GenericDiv)

	var GenericText = document.createElement("p")
	GenericText.classList.add("RegularText")
	GenericText.style.zIndex = "10"
	GenericText.style.width = "90%"
	GenericText.style.height = "12%"
	GenericText.style.left = "3%"
	GenericText.style.top = "6%"
	GenericText.innerHTML = "Browse The Monstercat Shop"
	GenericDiv.appendChild(GenericText)

	var GenericImage = document.createElement("img")
	GenericImage.src = "Images/MonstercatShop.png"
	GenericImage.style.zIndex = "15"
	GenericImage.style.width = "100%"
	GenericImage.style.height = "75%"
	GenericImage.style.top = "25%"
	GenericDiv.appendChild(GenericImage)
	
	var NextReleaseDiv = document.createElement("div")
	NextReleaseDiv.style.background = "rgba(0,0,0,1)"
	NextReleaseDiv.style.zIndex = "10"
	MainDiv.appendChild(NextReleaseDiv)

	var NextReleaseInnerDiv = document.createElement("div")
	NextReleaseInnerDiv.style.background = "rgba(0,0,0,1)"
	NextReleaseInnerDiv.style.zIndex = "10"
	NextReleaseDiv.appendChild(NextReleaseInnerDiv)

	var NextReleaseText = document.createElement("p")
	NextReleaseText.classList.add("RegularText")
	NextReleaseText.style.zIndex = "10"
	NextReleaseText.style.width = "1.5%"
	NextReleaseText.style.height = "3%"
	NextReleaseText.style.left = "2%"
	NextReleaseText.style.top = "2%"
	NextReleaseText.innerHTML = "Next Release:"
	NextReleaseInnerDiv.appendChild(NextReleaseText)



	var Mult = Adorn.clientHeight/1080
	NextReleaseInnerDiv.style.width = (NextReleaseSizeX1080p * Mult) + "px"
	NextReleaseInnerDiv.style.height = (NextReleaseSizeY1080p * Mult) + "px" 
	NextReleaseInnerDiv.style.left = "0px"
	NextReleaseInnerDiv.style.top = (-((NextReleaseSizeY1080p * (1/2)) * Mult)) + "px"

	var NextReleaseVisualizer = CreateVisualizer(NextReleaseInnerDiv)
	var NextReleaseCanvas = NextReleaseVisualizer[0]
	var NextReleaseAlbumImage = NextReleaseVisualizer[1]
	var NextReleaseDrawContext = NextReleaseVisualizer[2]
	var ResizeNextReleaseVisualizer = NextReleaseVisualizer[3]
	var SetNextReleaseLogoSizeX = NextReleaseVisualizer[4]
	var SetNextReleaseTextSizeX = NextReleaseVisualizer[5]
	var SetNextReleaseTextSizes = NextReleaseVisualizer[6]
	var SetNextReleaseTexts = NextReleaseVisualizer[7]
	var SetNextReleaseTextColors = NextReleaseVisualizer[8]
	var GetNextReleaseMaxTextWidth = MainVisualizer[9]
	SetNextReleaseLogoSizeX(1)
	SetNextReleaseTextSizeX(1)

	var NextReleaseBackground = CreateBackground(NextReleaseInnerDiv)
	var ResizeNextReleaseBackground = NextReleaseBackground[0]
	var SetNextReleaseBackground = NextReleaseBackground[1]
	var SetNextReleaseBackgroundPlaying = NextReleaseBackground[2]
	var NextReleaseVideo = NextReleaseBackground[3]
	var NextReleaseMoveStars = NextReleaseBackground[4]
	var NextReleaseChangeFleckColors = NextReleaseBackground[5]



	var SilentContext = new AudioContext()
	var SilentSampleRate = SilentContext.sampleRate
	var SilentSource
	var SilentAnalyser = SilentContext.createAnalyser()
	var SilentGainNode = SilentContext.createGain()
	var SilentAudioNode = SilentContext.createScriptProcessor(BufferInterval, 1, 1)
	var LastBuffer
	function CreateNewSilentSource(Buffer) {
		if (Buffer == null) {
			Buffer = LastBuffer
		} else {
			LastBuffer = Buffer
		}
		SilentSource = SilentContext.createBufferSource()
	    SilentSource.buffer = Buffer
	    SilentSource.connect(SilentContext.destination)
		SilentSource.connect(SilentGainNode)
		SilentSource.connect(SilentAnalyser)
	}

	function InitializeSilentSpectrumHandler() {
		SilentAnalyser.fftSize = FFTSize
		SilentAnalyser.smoothingTimeConstant = SmoothingConstant
		SilentGainNode.connect(SilentContext.destination)
		SilentAudioNode.connect(SilentContext.destination)
		SilentAnalyser.connect(SilentAudioNode)
		SilentGainNode.gain.value = -1
	}



	var MainMultY = 0
	var RefreshVisualizer
	function ResizeDiv() {
		var RawWidth = Adorn.clientWidth
		var RawHeight = Adorn.clientHeight

		var Width = RawWidth
		var Height = RawHeight

		if (RawHeight * (1920/1080) > RawWidth) {
			Width = RawWidth
			Height = Width / (1920/1080)
		} else {
			Height = RawHeight
			Width = Height * (1920/1080)
		}

		MainDiv.style.width = Width + "px"
		MainDiv.style.height = Height + "px"
		MainDiv.style.left = ((RawWidth - Width)/2) + "px"
		MainDiv.style.top = ((RawHeight - Height)/2) + "px"



		var Mult = Height/1080
		SubscribeDiv.style.width = (SubscribeSizeX1080p * Mult) + "px"
		SubscribeDiv.style.height = ((SubscribeSizeY1080p * MainMultY) * Mult) + "px"
		SubscribeDiv.style.left = (SubscribePosX1080p * Mult) + "px"
		SubscribeDiv.style.top = ((SubscribePosY1080p + (SubscribeSizeY1080p * (1 - MainMultY)/2)) * Mult) + "px"

		LatestReleaseDiv.style.width = (PanelSizeX1080p * Mult) + "px"
		LatestReleaseDiv.style.height = (LatestAlbumSizeY1080p * MainMultY * Mult) + "px"
		LatestReleaseDiv.style.left = (PanelPosX1080p * Mult) + "px"
		LatestReleaseDiv.style.top = ((LatestAlbumPosY1080p + (LatestAlbumSizeY1080p * (1 - MainMultY)/2)) * Mult) + "px"

		PlaylistDiv.style.width = (PanelSizeX1080p * Mult) + "px"
		PlaylistDiv.style.height = (PanelSizeY1080p * MainMultY * Mult) + "px"
		PlaylistDiv.style.left = (PanelPosX1080p * Mult) + "px"
		PlaylistDiv.style.top = ((GenrePlaylistPosY1080p + (PanelSizeY1080p * (1 - MainMultY)/2)) * Mult) + "px"

		GenericDiv.style.width = (PanelSizeX1080p * Mult) + "px"
		GenericDiv.style.height = (PanelSizeY1080p * MainMultY * Mult) + "px"
		GenericDiv.style.left = (PanelPosX1080p * Mult) + "px"
		GenericDiv.style.top = ((GenericPosY1080p + (PanelSizeY1080p * (1 - MainMultY)/2)) * Mult) + "px"

		NextReleaseDiv.style.width = (NextReleaseSizeX1080p * Mult) + "px"
		NextReleaseDiv.style.height = (NextReleaseSizeY1080p * MainMultY * Mult) + "px"
		NextReleaseDiv.style.left = (NextReleasePosX1080p * Mult) + "px"
		NextReleaseDiv.style.top = ((NextReleasePosY1080p + (NextReleaseSizeY1080p * (1 - MainMultY)/2)) * Mult) + "px"

		NextReleaseInnerDiv.style.width = (NextReleaseSizeX1080p * Mult) + "px"
		NextReleaseInnerDiv.style.height = (NextReleaseSizeY1080p * Mult) + "px" 
		NextReleaseInnerDiv.style.left = "0px"
		NextReleaseInnerDiv.style.top = (-((NextReleaseSizeY1080p * (1 - MainMultY)/2)) * Mult) + "px"

 		SubsribeText.style["letter-spacing"] = (0.3 * Mult * -5.3) + "px"
 		ReleaseTimesText.style["letter-spacing"] = (0.3 * Mult * -5.3) + "px"
 		NextReleaseText.style["letter-spacing"] = (0.3 * Mult * -4) + "px"
 		LatestAlbumMixesText.style["letter-spacing"] = (0.3 * Mult * -4) + "px"
 		Mix1Text.style["letter-spacing"] = (0.2 * Mult * -5.3) + "px"
 		Mix2Text.style["letter-spacing"] = (0.2 * Mult * -5.3) + "px"
 		ListenToMoreText.style["letter-spacing"] = (0.3 * Mult * -4) + "px"
 		PlaylistGenreText.style["letter-spacing"] = (0.5 * Mult * -5.3) + "px"
 		PlaylistText.style["letter-spacing"] = (0.4 * Mult * -4) + "px"
 		GenericText.style["letter-spacing"] = (0.3 * Mult * -4) + "px"

		SubsribeText.style["font-size"] = SubsribeText.clientHeight + "px"
		ReleaseTimesText.style["font-size"] = ReleaseTimesText.clientHeight + "px"
		NextReleaseText.style["font-size"] = NextReleaseText.clientHeight + "px"
		LatestAlbumMixesText.style["font-size"] = LatestAlbumMixesText.clientHeight + "px"
		Mix1Text.style["font-size"] = Mix1Text.clientHeight + "px"
		Mix2Text.style["font-size"] = Mix2Text.clientHeight + "px"
		ListenToMoreText.style["font-size"] = ListenToMoreText.clientHeight + "px"
		PlaylistGenreText.style["font-size"] = PlaylistGenreText.clientHeight + "px"
		PlaylistText.style["font-size"] = PlaylistText.clientHeight + "px"
		GenericText.style["font-size"] = GenericText.clientHeight + "px"

		var TextShadow = (2 * Mult * ShadowMultiplier) + "px " +  (2 * Mult * ShadowMultiplier) + "px " +  (4 * Mult * ShadowMultiplier) + "px #000000"
  		var BoxShadow = (4 * Mult * ShadowMultiplier) + "px " +  (4 * Mult * ShadowMultiplier) + "px " +  (8 * Mult * ShadowMultiplier) + "px #000000"
  		ReleaseTimesText.style["text-shadow"] = TextShadow
  		ReleaseTimesText.style["text-shadow"] = TextShadow
  		NextReleaseText.style["text-shadow"] = TextShadow
  		SubscribeDiv.style["box-shadow"] = BoxShadow
  		LatestReleaseDiv.style["box-shadow"] = BoxShadow
  		PlaylistDiv.style["box-shadow"] = BoxShadow
  		GenericDiv.style["box-shadow"] = BoxShadow
  		NextReleaseDiv.style["box-shadow"] = BoxShadow



		ResizeNextReleaseVisualizer()
		ResizeNextReleaseBackground()

		if (typeof(RefreshVisualizer) != "undefined") {
			RefreshVisualizer()
		}
	}
	ResizeDiv()

	function SetNextReleaseInfoHeight(NewRatio) {
		MainMultY = NewRatio
		SubscribeDiv.style.opacity = NewRatio
		LatestReleaseDiv.style.opacity = NewRatio
		PlaylistDiv.style.opacity = NewRatio
		GenericDiv.style.opacity = NewRatio
		NextReleaseDiv.style.opacity = NewRatio

		ResizeDiv()
	}

	var LastState = false
	var NextReleaseSongStart = 0
	var NextReleaseStart = 0
	function StartNextRelease() {
		var SongData = GetNextSong(true)
		var Genre = SongData[2]
		var GenreColor = GetColorFromGenre(Genre)
		var AlbumCover = SongData[4].AlbumCover

		var ArtistName = SongData[0]
		var SongName = SongData[1]
		var AlbumData = SongData[4]
		var Overrides = SongData[6]
		var ArtistNameData = [ArtistName]

		var AlbumBackground = AlbumData.Background
		var AlbumBackgroundFormat = AlbumData.BackgroundFormat
		var AlbumBackgroundCoverAspectRatio = AlbumData.BackgroundCoverAspectRatio
		NextReleaseAlbumImage.src = AlbumCover
		NextReleaseAlbumImage.innerHTML = ""

		var NewLineTextColor = "#FFFFFF"
		var ShadowMultiplier = 1
		var ColorOverrided = false	
		if (Overrides) {
			var OverrideGenreColor = Overrides.GenreColor
			var OverrideBackground = Overrides.Background
			var OverrideBackgroundFormat = Overrides.BackgroundFormat
			var OverrideBackgroundCoverAspectRatio = Overrides.BackgroundCoverAspectRatio
			var OverrideLineTextColor = Overrides.LineTextColor
			var OverrideShadowMultiplier = Overrides.ShadowMultiplier

			if (OverrideGenreColor != null) {
				ColorOverrided = true
				GenreColor = OverrideGenreColor
			}
			if (OverrideBackground != null) {
				AlbumBackground = OverrideBackground
			}
			if (OverrideBackgroundFormat != null) {
				AlbumBackgroundFormat = OverrideBackgroundFormat
			}
			if (OverrideBackgroundCoverAspectRatio != null) {
				AlbumBackgroundCoverAspectRatio = OverrideBackgroundCoverAspectRatio
			}
			if (OverrideLineTextColor != null) {
				NewLineTextColor = OverrideLineTextColor
			}
			if (OverrideShadowMultiplier != null) {
				ShadowMultiplier = OverrideShadowMultiplier
			}
		}
		if (AlbumBackground != null && ColorOverrided == false) {
			GenreColor = "#FFFFFF"
		}
		ReleaseTimesText.style.color = LineTextColor
		NextReleaseText.style.color = LineTextColor

		if (MainHasBackground() == true) {
			PlaylistBackground.style.height = "73%"
			PlaylistBackground.src = "Images/PlaylistBackground.png"
			PlaylistGenreColorBar.style.background = OriginalGenreColor
			PlaylistGenreText.innerHTML = GetGenreFromColor(OriginalGenreColor)
			PlaylistGenreText.style.color = "#000000"
			PlaylistText.style.color = "#000000"
		} else {
			PlaylistBackground.style.height = "75%"
			PlaylistBackground.src = "Images/PlaylistBackgroundTransparent.png"
			PlaylistBackground.style["background-color"] = OriginalGenreColor
			PlaylistGenreColorBar.style.background = "#000000"
			PlaylistGenreText.innerHTML = GetGenreFromColor(OriginalGenreColor)
			PlaylistGenreText.style.color = "#FFFFFF"
			PlaylistText.style.color = "#FFFFFF"
		}

		NextReleaseChangeFleckColors(GenreColor)
		ResizeNextReleaseVisualizer()
		SetNextReleaseBackground(AlbumBackground,AlbumBackgroundFormat,AlbumBackgroundCoverAspectRatio)

		var LastBuffer
		function Refresh() {
			var SoundData
			if (Paused == true) {
				SoundData = LastBuffer
			} else {
				SoundData = new Uint8Array(SilentAnalyser.frequencyBinCount)
		  		SilentAnalyser.getByteFrequencyData(SoundData)
		  		LastBuffer = SoundData
		  	}

		  	DrawBarsOnCanvas(NextReleaseCanvas,NextReleaseDrawContext,SoundData,GenreColor,NextReleaseMoveStars,function() {},1000,1,ShadowMultiplier)
		}
		RefreshVisualizer = Refresh

		function Render() {
			Refresh()
			if (LastState == true) {
				setTimeout(Render,RefreshRate)
			}
		}
		Render()



		function PlaySong(Buffer) {
			CreateNewSilentSource(Buffer)
		    InitializeSilentSpectrumHandler()

			var FinalSongData = GetSongNameLinesAndSizes(ArtistName,SongName)
	   		var SongNameFinal = FinalSongData[0]
	    	var SongSizeFinal = FinalSongData[1]


			var NewText = SongNameFinal
			var NewTextSizes = SongSizeFinal
			var NewTextColors = [NewLineTextColor,NewLineTextColor,NewLineTextColor,NewLineTextColor,NewLineTextColor]

			SetNextReleaseTextSizes(NewTextSizes[0],NewTextSizes[1],NewTextSizes[2],NewTextSizes[3],NewTextSizes[4],NewTextSizes[5])
			SetNextReleaseTexts(NewText[0],NewText[1],NewText[2],NewText[3],NewText[4],NewTextSizes[5])
			SetNextReleaseTextColors(NewTextColors[0],NewTextColors[1],NewTextColors[2],NewTextColors[3],NewTextColors[4])
			

			NextReleaseStart = Date.now()
			NextReleaseSongStart = Buffer.duration/4
	    	SilentSource.start(0,NextReleaseSongStart)
	    	SetNextReleaseBackgroundPlaying(true,NextReleaseSongStart)
	    	GetAudioSource(GetNextSong(true)[3],function() {})
		}

		GetAudioSource(SongData[3],PlaySong)
	}

	function EndNextRelease() {
		NextReleaseStart = 0
		SilentSource.stop()
	}

	function SetNextReleaseActive(Active) {
		if (Active == true && LastState == false) {
			LastState = true
			StartNextRelease()
		} else if (Active == false && LastState == true) {
			LastState = false
			EndNextRelease()
		}
	}

	function UpdateNextReleasePaused() {
		if (NextReleaseStart != 0) {
			if (Paused == true) {
				SilentSource.stop()
				SetNextReleaseBackgroundPlaying(false)
				NextReleaseSongStart = NextReleaseSongStart + ((Date.now() - NextReleaseStart)/1000)
			} else {
				NextReleaseStart = Date.now()
				SetNextReleaseBackgroundPlaying(true,NextReleaseSongStart)

				CreateNewSilentSource()
				SilentSource.start(0,NextReleaseSongStart)
			}
		}
	}

	return [ResizeDiv,SetNextReleaseInfoHeight,SetNextReleaseActive,UpdateNextReleasePaused]
}

var NextReleaseInfo = CreateNextReleaseInfo(MainVisualizerAdorn)
var ResizeNextReleaseInfo = NextReleaseInfo[0]
var SetNextReleaseInfoHeight = NextReleaseInfo[1]
var SetNextReleaseActive = NextReleaseInfo[2]
var UpdateNextReleasePaused = NextReleaseInfo[3]
