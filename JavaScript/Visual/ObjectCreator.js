var SpectrumBarCount = 63
var Bar1080pWidth = 15
var Bar1080pSeperation = 7
var BarHeightToWidthRatio = 22
var LogoSpacing = 25
var LogoSize = (Bar1080pWidth * 8) + (Bar1080pSeperation * 7)
var RelativeVisualizerToScreenSize = 0.9
var CanvasSizeMultiplier = 1.1

var CanvasHeight = Bar1080pWidth * BarHeightToWidthRatio
var TotalHeight = (LogoSize + CanvasHeight + LogoSpacing)
var TotalWidth = (Bar1080pWidth * SpectrumBarCount) + (Bar1080pSeperation * (SpectrumBarCount - 1))
var VisualizerApsectRatio = TotalWidth / TotalHeight

var ShadowMultiplier = 1

function CreateVisualizer(Adorn) {
	var MainDiv = document.createElement("div")
	MainDiv.classList.add("NoClip")
	MainDiv.style.zIndex = "10"
	Adorn.appendChild(MainDiv)

	var Canvas = document.createElement("canvas")
	Canvas.style.zIndex = "10"
	MainDiv.appendChild(Canvas)

	var AlbumImage = document.createElement("img")
	AlbumImage.style.zIndex = "10"
	MainDiv.appendChild(AlbumImage)

	var TextDiv = document.createElement("div")
	TextDiv.style.zIndex = "10"
	MainDiv.appendChild(TextDiv)

	var InnerTextDiv = document.createElement("div")
	InnerTextDiv.style.zIndex = "10"
	TextDiv.appendChild(InnerTextDiv)

	var Text1 = document.createElement("p")
	Text1.style.zIndex = "10"
	Text1.classList.add("BoldText")
	InnerTextDiv.appendChild(Text1)

	var Text2 = document.createElement("p")
	Text2.style.zIndex = "10"
	Text2.classList.add("RegularText")
	InnerTextDiv.appendChild(Text2)

	var Text3 = document.createElement("p")
	Text3.style.zIndex = "10"
	Text3.classList.add("RegularText")
	InnerTextDiv.appendChild(Text3)

	var Text4 = document.createElement("p")
	Text4.style.zIndex = "10"
	Text4.classList.add("RegularText")
	InnerTextDiv.appendChild(Text4)

	var Text5 = document.createElement("p")
	Text5.style.zIndex = "10"
	Text5.classList.add("RegularText")
	InnerTextDiv.appendChild(Text5)



	var LogoMultiplierX = 1
	var TextMultiplierX = 1
	function SetLogoSizeX(NewLogoMultiplierX) {
		var Height = MainDiv.clientHeight
		var NewLogoHeight = (LogoSize/TotalHeight) * Height

		LogoMultiplierX = NewLogoMultiplierX
		AlbumImage.style.width = (LogoMultiplierX * NewLogoHeight) + "px"
		AlbumImage.style.height = NewLogoHeight + "px"
		AlbumImage.style.top = (Height - NewLogoHeight) + "px"
		AlbumImage.style.left = ((NewLogoHeight - (LogoMultiplierX * NewLogoHeight))/2) + "px"

		var ScreenMult = Height/1080
  		var BoxShadow = (4 * ScreenMult * ShadowMultiplier) + "px " +  (4 * ScreenMult * ShadowMultiplier) + "px " +  (8 * ScreenMult * ShadowMultiplier) + "px #000000"
  		AlbumImage.style["box-shadow"] = BoxShadow
	}

	function SetTextSizeX(NewTextMultiplierX) {
		var Height = MainDiv.clientHeight
		var Width = MainDiv.clientWidth
		var NewLogoHeight = (LogoSize/TotalHeight) * Height
		var NewLogoSpacing = (LogoSpacing/TotalHeight) * Height

		TextMultiplierX = NewTextMultiplierX
		TextDiv.style.width = ((Width - (NewLogoHeight + NewLogoSpacing)) * TextMultiplierX) + "px"
		TextDiv.style.height = NewLogoHeight + "px"
		TextDiv.style.top = (Height - NewLogoHeight) + "px"
		TextDiv.style.left = (NewLogoHeight + NewLogoSpacing) + "px"
		InnerTextDiv.style.width = (Width - (NewLogoHeight + NewLogoSpacing)) + "px"
		InnerTextDiv.style.height = NewLogoHeight + "px"
	}

	var TopSpacing = 0
	var TextSize1 = 0.5
	var TextSize2 = 0.5
	var TextSize3 = 0
	var TextSize4 = 0
	var TextSize5 = 0
	function SetTextSizes(NewTopSpacing,NewTextSize1,NewTextSize2,NewTextSize3,NewTextSize4,NewTextSize5) {
		TopSpacing = NewTopSpacing
		TextSize1 = NewTextSize1
		TextSize2 = NewTextSize2
		TextSize3 = NewTextSize3
		TextSize4 = NewTextSize4
		TextSize5 = NewTextSize5

		var Height = InnerTextDiv.clientHeight
		var Width = InnerTextDiv.clientWidth

		Text1.style.width = Width + "px"
		Text2.style.width = Width + "px"
		Text3.style.width = Width + "px"
		Text4.style.width = Width + "px"
		Text5.style.width = Width + "px"
		Text1.style.height = (Height * TextSize1) + "px"
		Text2.style.height = (Height * TextSize2) + "px"
		Text3.style.height = (Height * TextSize3) + "px"
		Text4.style.height = (Height * TextSize4) + "px"
		Text5.style.height = (Height * TextSize5) + "px"

		Text1.style.top = (Height * TopSpacing) + "px"
		Text2.style.top = (Height * (TopSpacing + TextSize1)) + "px"
		Text3.style.top = (Height * (TopSpacing + TextSize1 + TextSize2)) + "px"
		Text4.style.top = (Height * (TopSpacing + TextSize1 + TextSize2 + TextSize3)) + "px"
		Text5.style.top = (Height * (TopSpacing + TextSize1 + TextSize2 + TextSize3 + TextSize4)) + "px"

		Text1.style["font-size"] = (Height * TextSize1) + "px"
		Text2.style["font-size"] = (Height * TextSize2) + "px"
		Text3.style["font-size"] = (Height * TextSize3) + "px"
		Text4.style["font-size"] = (Height * TextSize4) + "px"
		Text5.style["font-size"] = (Height * TextSize5) + "px"

		var TextMult = MainDiv.clientWidth/1920
 		Text1.style["letter-spacing"] = (TextSize1 * TextMult * -5.3) + "px"
  		Text2.style["letter-spacing"] = (TextSize2 * TextMult * -4) + "px"
  		Text3.style["letter-spacing"] = (TextSize3 * TextMult * -4) + "px"
  		Text4.style["letter-spacing"] = (TextSize4 * TextMult * -4) + "px"
  		Text5.style["letter-spacing"] = (TextSize5 * TextMult * -4) + "px"

  		var TextShadow = (2 * TextMult * ShadowMultiplier) + "px " +  (2 * TextMult * ShadowMultiplier) + "px " +  (4 * TextMult * ShadowMultiplier) + "px #000000"
  		Text1.style["text-shadow"] = TextShadow
  		Text2.style["text-shadow"] = TextShadow
  		Text3.style["text-shadow"] = TextShadow
  		Text4.style["text-shadow"] = TextShadow
  		Text5.style["text-shadow"] = TextShadow
	}

	function SetTexts(NewText1,NewText2,NewText3,NewText4,NewText5) {
		Text1.innerHTML = NewText1
		Text2.innerHTML = NewText2
		Text3.innerHTML = NewText3
		Text4.innerHTML = NewText4
		Text5.innerHTML = NewText5
	}

	function SetTextColors(NewColor1,NewColor2,NewColor3,NewColor4,NewColor5) {
		Text1.style.color = NewColor1
		Text2.style.color = NewColor2
		Text3.style.color = NewColor3
		Text4.style.color = NewColor4
		Text5.style.color = NewColor5
	}

	function ResizeToAdorn() {
		var RawWidth = Adorn.clientWidth
		var RawHeight = Adorn.clientHeight
		var Width = RawWidth
		var Height = RawHeight

		if (RawHeight * VisualizerApsectRatio > RawWidth) {
			Width = RawWidth * RelativeVisualizerToScreenSize
			Height = Width / VisualizerApsectRatio
		} else {
			Height = RawHeight * RelativeVisualizerToScreenSize
			Width = Height * VisualizerApsectRatio
		}

		MainDiv.style.width = Width + "px"
		MainDiv.style.height = Height + "px"
		MainDiv.style.left = ((RawWidth - Width)/2) + "px"
		MainDiv.style.top = ((RawHeight - Height)/2) + "px"

		var NewCanvasHeight = (CanvasHeight/TotalHeight) * Height
		var NewLogoHeight = (LogoSize/TotalHeight) * Height
		Canvas.width = Width  * CanvasSizeMultiplier
		Canvas.height = NewCanvasHeight * CanvasSizeMultiplier
		SetLogoSizeX(LogoMultiplierX)
		SetTextSizeX(TextMultiplierX)
		SetTextSizes(TopSpacing,TextSize1,TextSize2,TextSize3,TextSize4,TextSize5)
	}
	ResizeToAdorn()

	function GetMaxTextWidth() {
		return InnerTextDiv.clientWidth
	}

	return [Canvas,AlbumImage,Canvas.getContext('2d'),ResizeToAdorn,SetLogoSizeX,SetTextSizeX,SetTextSizes,SetTexts,SetTextColors,GetMaxTextWidth]
}

var MainVisualizer = CreateVisualizer(MainVisualizerAdorn)
var MainCanvas = MainVisualizer[0]
var MainAlbumImage = MainVisualizer[1]
var MainDrawContext = MainVisualizer[2]
var ResizeMainVisualizer = MainVisualizer[3]
var SetMainLogoSizeX = MainVisualizer[4]
var SetMainTextSizeX = MainVisualizer[5]
var SetMainTextSizes = MainVisualizer[6]
var SetMainTexts = MainVisualizer[7]
var SetMainTextColors = MainVisualizer[8]
var GetMainMaxTextWidth = MainVisualizer[9]