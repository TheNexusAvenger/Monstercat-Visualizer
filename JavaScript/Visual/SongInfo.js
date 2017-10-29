var TimeLength = 0
var StartTime = 0
var TimeOffset = 0
var HeightMultiplier = 1
var LogoTurnTime = 100
var OutroTime = 20000
var SongNameHeightRelative = 0.6
var ArtistNameData = []
var SongNameData = []

function EaseSineOut(Number) {
	return Math.sin(Number * 3.1415/2 )
}

var TextWidthP = document.createElement("p")
TextWidthP.classList.add("BoldText")
TextWidthP.style.visibility = "hidden"
TextWidthP.style.height = "auto"
TextWidthP.style.width = "auto"
MainVisualizerAdorn.appendChild(TextWidthP)

function GetTextAspectRatio(Text,FontSize,MaxWidth,FullWidth,IsBold,HeightMultiplier) {
	var Spacing = -4
	if (IsBold) {
		Spacing = -5.3
	}

	TextWidthP.innerHTML = Text
	TextWidthP.style["font-size"] = FontSize + "px"
  	TextWidthP.style["letter-spacing"] = ((FullWidth/1920) * Spacing * HeightMultiplier) + "px"
	return MaxWidth/(TextWidthP.clientWidth + 1)
}

function GetSongNameLinesAndSizes(ArtistName,SongName) {
	var ArtistNameData = [ArtistName]
	var SongNameData = []

	var NewLineStart = 0
	var NewLineEnd = 0
	for (var i = SongName.length - 1; i > 0; i--) {
		var Character = SongName[i]
		if (Character == ")" && NewLineEnd == 0 ) {
			NewLineEnd = i
		} else if (Character == "(" && NewLineStart == 0) {
			NewLineStart = i
		}
	} 

	if (NewLineStart != 0 && NewLineEnd != 0) {
		SongNameData = [SongName.substr(0,NewLineStart - 1),SongName.substr(NewLineStart,SongName.length - 1)]
	} else {
		SongNameData = [SongName]
	}



	var DivHeight = MainAlbumImage.clientHeight
	var DivWidth = GetMainMaxTextWidth()
	var FullWidth = MainCanvas.clientWidth/CanvasSizeMultiplier

	var ArtistNameHeight = ArtistNameData.length
	var SongNameHeight = SongNameData.length * SongNameHeightRelative
	var TotalHeight = ArtistNameHeight + SongNameHeight

	var ArtistNameString = ""
	for (var i = 0; i < ArtistNameData.length; i++) {
		ArtistNameString = ArtistNameString + ArtistNameData[i]
	}

	var FinalArtistHeight = ArtistNameHeight/TotalHeight
	var FinalSongHeight = SongNameHeightRelative/TotalHeight
	var LowestScaler = Math.min(1,GetTextAspectRatio(ArtistNameString,FinalArtistHeight * DivHeight,DivWidth,FullWidth,true,1/TotalHeight) * 0.99)
	for (var i = 0; i < SongNameData.length; i++) {
		var NewScalar = GetTextAspectRatio(SongNameData[i],FinalSongHeight * DivHeight,DivWidth,FullWidth,false,SongNameHeightRelative/TotalHeight) * 0.99
		if (NewScalar < LowestScaler) {
			LowestScaler = NewScalar
		}
	}

	FinalArtistHeight = FinalArtistHeight * LowestScaler
	FinalSongHeight = FinalSongHeight * LowestScaler
	var TopSpacing = (1 - LowestScaler)/2
	var SongSizeFinal = []
	var SongNameFinal = []
	if (SongNameData.length == 1) {
		SongSizeFinal = [TopSpacing,FinalArtistHeight,FinalSongHeight,0,0,0]
		SongNameFinal = [ArtistNameString,SongNameData[0],"","",""]
	} else {
		SongSizeFinal = [TopSpacing,FinalArtistHeight,FinalSongHeight,FinalSongHeight,0,0]
		SongNameFinal = [ArtistNameString,SongNameData[0],SongNameData[1],"",""]
	}

	return [SongNameFinal,SongSizeFinal]
}



var TextStates = []
var NextState = []
var CurState = -1
var NextStateTime = -1
var TextChangeState = -1
var NextIncrementTime = 0
function UpdateText(CurTime) {
	if (CurTime >= TimeLength) {
		Skip()
		return
	}
	
	if (CurTime >= NextStateTime && CurTime < NextIncrementTime && NextState) {
		var Move = NextState[0]
		var Ratio = (CurTime - NextStateTime)/(NextIncrementTime - NextStateTime)
		if (Move == "Open") {
			SetMainTextSizeX(Ratio)

			if (TextChangeState != CurState) {
				TextChangeState = CurState

				var NewText = NextState[3]
				var NewTextSizes = NextState[4]
				var NewTextColors = NextState[5]
				SetMainTextSizes(NewTextSizes[0],NewTextSizes[1],NewTextSizes[2],NewTextSizes[3],NewTextSizes[4],NewTextSizes[5])
				SetMainTexts(NewText[0],NewText[1],NewText[2],NewText[3],NewText[4],NewTextSizes[5])
				
				if (NewTextColors != null) {
					SetMainTextColors(NewTextColors[0],NewTextColors[1],NewTextColors[2],NewTextColors[3],NewTextColors[4])
				}
			}
		} else if (Move == "Close") {
			SetMainTextSizeX(1 - Ratio)
		}
	} else if (StartTime != 0 && CurTime > NextIncrementTime) {
		if (NextState && CurState != -1) {
			var Move = NextState[0]
			if (Move == "Open") {
				SetMainTextSizeX(1)

				var NewText = NextState[3]
				var NewTextSizes = NextState[4]
				var NewTextColors = NextState[5]

				if (NewText != null){
					SetMainTexts(NewText[0],NewText[1],NewText[2],NewText[3],NewText[4],NewTextSizes[5])
				}
				if (NewTextSizes != null){
					SetMainTextSizes(NewTextSizes[0],NewTextSizes[1],NewTextSizes[2],NewTextSizes[3],NewTextSizes[4],NewTextSizes[5])
				}
				if (NewTextColors != null){
					SetMainTextColors(NewTextColors[0],NewTextColors[1],NewTextColors[2],NewTextColors[3],NewTextColors[4])
				}
			} else if (Move == "Close") {
				SetMainTextSizeX(0)
			}
		}

		if (TextStates[CurState + 1]) {
			NextState = TextStates[CurState + 1]
			NextStateTime = NextState[1]
			NextIncrementTime = NextState[2]
			CurState = CurState + 1
		} else {
			NextState = []
			NextIncrementTime = 10 ^ 99
			CurState = CurState + 1
		}
	}
}



var MonstercatLogo = "Images/MonstercatLogo.png"
var MonstercatLogoInverted = "Images/MonstercatLogoInverted.png"
var MainLogo = MonstercatLogo
var ArtistLogo = ""
var AlbumCover = ""
function TimeUpdated(CurTime) {
	if (TimeLength != 0) {
		if (CurTime <= 500) {
			SetMainLogoSizeX(0)
		} else if (CurTime > 500 && CurTime <= 500 + LogoTurnTime) {
			var Ratio = (CurTime - 500)/LogoTurnTime
			MainAlbumImage.src = MainLogo
			MainAlbumImage.style.backgroundColor = GenreColor
			HeightMultiplier = Ratio
			SetMainLogoSizeX(EaseSineOut(Ratio))
		} else if (CurTime > 15000 - LogoTurnTime && CurTime <= 15000) {
			var Ratio = (CurTime - (15000 - LogoTurnTime))/LogoTurnTime
			SetMainLogoSizeX(EaseSineOut(1 - Ratio))
		} else if (CurTime > 15000 && CurTime <= 15000 + LogoTurnTime) {
			var Ratio = (CurTime - 15000)/LogoTurnTime
			MainAlbumImage.src = ArtistLogo
			SetMainLogoSizeX(EaseSineOut(Ratio))
		} else if (CurTime > 30000 - LogoTurnTime && CurTime <= 30000) {
			var Ratio = (CurTime - (30000 - LogoTurnTime))/LogoTurnTime
			SetMainLogoSizeX(EaseSineOut(1 - Ratio))
		} else if (CurTime > 30000 && CurTime <= 30000 + LogoTurnTime) {
			var Ratio = (CurTime - 30000)/LogoTurnTime
			MainAlbumImage.src = AlbumCover
			SetMainLogoSizeX(EaseSineOut(Ratio))
		} else {
			var TimeRemaining = TimeLength - CurTime - OutroTime
			if (TimeRemaining < -LogoTurnTime) {
				SetNextReleaseInfoHeight(1)
				SetNextReleaseActive(true)
			} else if (TimeRemaining > -LogoTurnTime && TimeRemaining <= 0) {
				var Ratio = -TimeRemaining/LogoTurnTime
				SetNextReleaseInfoHeight(EaseSineOut(Ratio))
				SetNextReleaseActive(true)
			} else if (TimeRemaining < 500) {
				SetMainLogoSizeX(0)
			} else if (TimeRemaining > 500 && TimeRemaining <= 500 + LogoTurnTime) {
				var Ratio = (TimeRemaining - 500)/LogoTurnTime
				MainAlbumImage.style.backgroundColor = GenreColor
				HeightMultiplier = Ratio
				SetMainLogoSizeX(EaseSineOut(Ratio))
			} else if (TimeRemaining > 15000 - LogoTurnTime && TimeRemaining <= 15000) {
				MainAlbumImage.src = ArtistLogo
				var Ratio = (TimeRemaining - (15000 - LogoTurnTime))/LogoTurnTime
				SetMainLogoSizeX(EaseSineOut(1 - Ratio))
			} else if (TimeRemaining > 15000 && TimeRemaining <= 15000 + LogoTurnTime) {
				var Ratio = (TimeRemaining - 15000)/LogoTurnTime
				SetMainLogoSizeX(EaseSineOut(Ratio))
			} else if (TimeRemaining > 30000 - LogoTurnTime && TimeRemaining <= 30000) {
				MainAlbumImage.src = MainLogo
				var Ratio = (TimeRemaining - (30000 - LogoTurnTime))/LogoTurnTime
				SetMainLogoSizeX(EaseSineOut(1 - Ratio))
			} else if (TimeRemaining > 30000 && TimeRemaining <= 30000 + LogoTurnTime) {
				var Ratio = (TimeRemaining - 30000)/LogoTurnTime
				SetMainLogoSizeX(EaseSineOut(Ratio))
			} else {
				SetMainLogoSizeX(1)
			}
		}
	} else {
		SetMainLogoSizeX(0)
	}

	if (TimeLength != 0) {
		if (CurTime <= 500) {
			HeightMultiplier = 0
		} else if (CurTime > 500 && CurTime <= 1000) {
			var Ratio = (CurTime - 500)/500
			HeightMultiplier = Ratio
		} else {
			var TimeRemaining = TimeLength - CurTime - OutroTime
			if (TimeRemaining > 500 && TimeRemaining <= 1000) {
				var Ratio = (TimeRemaining - 500)/500
				HeightMultiplier = Ratio
			} else {
				HeightMultiplier = 1
			}
		}
	} else {
		HeightMultiplier = 0
	}

	UpdateText(CurTime)
}