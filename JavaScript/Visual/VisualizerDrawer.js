function DrawBarsOnCanvas(Canvas,CanvasContext,SoundData,Color,MoveStars,TimeUpdated,CurTime,HeightMultiplier,ShadowMultiplier) {
	var FullBarData = GetBarData(SoundData)
	var RawBarData = FullBarData[0]
	var BarData = FullBarData[1]
	CanvasContext.fillStyle = Color

	var Width = Canvas.width/CanvasSizeMultiplier
	var Height = Canvas.height/CanvasSizeMultiplier
	var BlurSize = (Width/1920) * 4 * ShadowMultiplier
	
  	CanvasContext.shadowBlur = BlurSize
  	CanvasContext.shadowOffsetX = BlurSize/2
  	CanvasContext.shadowOffsetY = BlurSize/2
 	CanvasContext.shadowColor = "#000000"
	CanvasContext.clearRect(0,0,Width * CanvasSizeMultiplier,Height * CanvasSizeMultiplier)

	var AverageMove = RawBarData[0]
	for (var i = 1; i < RawBarData.length; i++) {
		AverageMove = (AverageMove + RawBarData[i])
	}
	MoveStars(AverageMove/255)



	if (TimeLength != 0) {
		if (CurTime < 500) {
			var BarHeight = (2/255) * Height
			var BarWidth = (Width/2) * (CurTime/500)
			if (BarWidth < 0) { BarWidth = 0 }
			CanvasContext.fillRect(0,Height - BarHeight,BarWidth,BarHeight)
			CanvasContext.fillRect(Width - BarWidth,Height - BarHeight,BarWidth,BarHeight)
		} else if (TimeLength - CurTime - OutroTime < 500) {
			var BarHeight = (2/255) * Height
			var BarWidth = (Width/2) * ((TimeLength - CurTime - OutroTime)/500)
			if (BarWidth < 0) { BarWidth = 0 }
			CanvasContext.fillRect(0,Height - BarHeight,BarWidth,BarHeight)
			CanvasContext.fillRect(Width - BarWidth,Height - BarHeight,BarWidth,BarHeight)
		} else {
			var BarWidth = (Bar1080pWidth/TotalWidth) * Width
			var BarSeperation = (Bar1080pSeperation/TotalWidth) *  Width
			for (var i = 0; i < SpectrumBarCount; i++) {
				var BarValue = BarData[i] * HeightMultiplier
				if (BarValue < 2) {
					BarValue = 2
				}

				var PosX = (BarWidth + BarSeperation) * i
				var BarHeight = BarValue/255 * Height
				var PosY = Height - BarHeight
				CanvasContext.fillRect(PosX,PosY,BarWidth,BarHeight)
			}
		}
	}
	TimeUpdated(CurTime)
}

var SoundData = []
for (var i = 0; i < 2000; i++) {
	SoundData[i] = 255 - (i/4)
}

var LastTime = 0
var RefreshRate = 1/60 * 1000
var LastSoundData
function RenderMain() {
	if (typeof(Analyser) != "undefined") {
		var SoundData
		if (Paused == true) {
			SoundData = LastSoundData
		} else {
			SoundData = new Uint8Array(Analyser.frequencyBinCount)
	  		Analyser.getByteFrequencyData(SoundData)
	  		LastSoundData = SoundData
	  	}
	  	var CurTime = (Paused && TimeOffset || TimeOffset + (Date.now() - StartTime))
	  	DrawBarsOnCanvas(MainCanvas,MainDrawContext,SoundData,GenreColor,MainMoveStars,TimeUpdated,CurTime,HeightMultiplier,ShadowMultiplier)
	}

	UpdateBottomText()
}

function Refresh() {
	RenderMain()
	setTimeout(Refresh,RefreshRate)
}
Refresh()