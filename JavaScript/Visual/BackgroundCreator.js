var StarCountFor1080p = 1000
var MinParticleDepth = 0
var MaxParticleDepth = 0.9
var ParticleSize1080p = 12
var ParticleSpeed1080p = 0.003

var SmokeCountFor1080p = 100
var SmokeSize1080p = 500
var SmokeSpeed1080p = 0.0005

var FleckCountFor1080p = 20
var FleckSize1080p = 6
var FleckSpeed1080p = 0.005



function CreateBackground(Adorn) {
	var BackgroundClip = document.createElement("div")
	Adorn.appendChild(BackgroundClip)

	var ImageBackground = document.createElement("img")
	ImageBackground.style.visibility = "hidden"
	BackgroundClip.appendChild(ImageBackground)

	var Video = document.createElement("video")
	Video.style.visibility = "hidden"
	Video.loop = true
	BackgroundClip.appendChild(Video)

	var Source = document.createElement("source")
	Video.appendChild(Source)

	var StarCanvas = document.createElement("canvas")
	BackgroundClip.appendChild(StarCanvas)
	var StarCanvasDrawer = StarCanvas.getContext('2d')

	var FleckCanvas = document.createElement("canvas")
	BackgroundClip.appendChild(FleckCanvas)
	var FleckCanvasDrawer = FleckCanvas.getContext('2d')

	var Particle = document.createElement("img")
	Particle.src = "Images/Particle.png"

	var Smoke = document.createElement("img")
	Smoke.src = "Images/Smoke.png"
	
	function Random(Start,End) {
		return Start + ((End - Start) * Math.random())
	}

	function rad(Angle) {
		return Angle * (Math.PI / 180);
	}

	var StarsVisible = true
	var StarParticles = []
	var SmokeParticles = []
	var FlecksParticles = []
	var Height = Adorn.clientHeight
	var Width = Adorn.clientWidth
	for (var i = 0; i < StarCountFor1080p * (Adorn.clientHeight/1080); i++) {
		var WidthMult = Random(MinParticleDepth,MaxParticleDepth)
		var Angle = Random(rad(45),rad(-45))
		var GeneralSpeed = WidthMult * ((ParticleSpeed1080p * (Height/1080))/Width)
		var PosX = Math.random()
		var Deviation = Math.sin(Angle) * PosX
		StarParticles[i] = [PosX,Random(0.2 + Deviation,0.8 + Deviation),WidthMult,GeneralSpeed * Math.cos(Angle),GeneralSpeed * Math.sin(Angle)]
	}
	for (var i = 0; i < SmokeCountFor1080p * (Adorn.clientHeight/1080); i++) {
		var GeneralSpeed = ((SmokeSpeed1080p * (Height/1080))/Width)
		SmokeParticles[i] = [Random(-0.2,1.2),Random(0.1,0.9),GeneralSpeed]
	}
	for (var i = 0; i < FleckCountFor1080p * (Adorn.clientHeight/1080); i++) {
		var WidthMult = FleckSize1080p/1080
		var Angle = Random(rad(30),rad(-30))
		var PosX = Math.random()
		var Deviation = Math.sin(Angle) * PosX
		var GeneralSpeed =  (FleckSpeed1080p * (Height/1080))/Width
		FlecksParticles[i] = [PosX,Random(0.2 + Deviation,0.8 + Deviation),WidthMult,GeneralSpeed * Math.cos(Angle),GeneralSpeed * Math.sin(Angle),Angle]
	}


	var Color = "#FFFFFF"
	function RenderStars() {
		if (StarsVisible == false){
			return
		}
		
		var Width = StarCanvas.clientWidth
		var Height = StarCanvas.clientHeight
		StarCanvasDrawer.clearRect(0,0,Width,Height)
		FleckCanvasDrawer.clearRect(0,0,Width,Height)
		var HeightMultiplier = Height/1080


		for (var i = 0; i < SmokeParticles.length; i++) {
			var StarData = SmokeParticles[i]
			var PosX = StarData[0] * Width
			var PosY = StarData[1] * Height
			var Size = SmokeSize1080p * HeightMultiplier
			StarCanvasDrawer.drawImage(Smoke,PosX - (Size/2),PosY - (Size/2),Size,Size)
		}

		for (var i = 0; i < StarParticles.length; i++) {
			var SmokeData = StarParticles[i]
			var PosX = SmokeData[0] * Width
			var PosY = SmokeData[1] * Height
			var Size = SmokeData[2] * ParticleSize1080p * HeightMultiplier
			StarCanvasDrawer.drawImage(Particle,PosX - (Size/2),PosY - (Size/2),Size,Size)
		}

		var DrawSpecks = []
		for (var i = 0; i < FlecksParticles.length; i++) {
			var FleckData = FlecksParticles[i]
			var PosX = FleckData[0] * Width
			var PosY = FleckData[1] * Height
			var Size = FleckSize1080p * HeightMultiplier
			DrawSpecks[i] = [PosX - (Size/2),PosY - (Size/2),Size,Size,FleckData[5]]
		}


		FleckCanvasDrawer.globalAlpha = 0.5
		for (var i = 0; i < DrawSpecks.length; i++) {
			var FleckData = DrawSpecks[i]
			
			FleckCanvasDrawer.beginPath()
			FleckCanvasDrawer.ellipse(FleckData[0],FleckData[1],FleckData[2],FleckData[3] * 0.2,FleckData[4],0,2 * Math.PI,false)
			FleckCanvasDrawer.fillStyle = Color
			FleckCanvasDrawer.fill()
		}
	}
	Particle.onload = RenderStars
	Smoke.onload = RenderStars

	function ChangeFleckColors(Hex) {
		Color = Hex
	}

	function MoveStars(Multiplier) {
		if (Paused == false) {
			for (var i = 0; i < StarParticles.length; i++) {
				var StarData = StarParticles[i]
				var PosX = StarData[0]
				var PosY = StarData[1]
				var SpeedX = StarData[3] * Multiplier
				var SpeedY = StarData[4] * Multiplier

				PosX = PosX + (SpeedX * Multiplier)
				PosY = PosY + (SpeedY * Multiplier)
				if (PosX >= 1){
					PosX = 0
					PosY = Random(0.2,0.8)
				}

				StarData[0] = PosX
				StarData[1] = PosY
			}

			for (var i = 0; i < SmokeParticles.length; i++) {
				SmokeData = SmokeParticles[i]
				var PosX = SmokeData[0]
				var SpeedX = SmokeData[2] * Multiplier

				PosX = PosX + (SpeedX * Multiplier)
				if (PosX >= 1.2){
					PosX = -0.2
					PosY = Random(0.2,0.8)
				}

				SmokeData[0] = PosX
			}

			for (var i = 0; i < FlecksParticles.length; i++) {
				var FleckData = FlecksParticles[i]
				var PosX = FleckData[0]
				var PosY = FleckData[1]
				var SpeedX = FleckData[3] * Multiplier
				var SpeedY = FleckData[4] * Multiplier

				PosX = PosX + (SpeedX * Multiplier)
				PosY = PosY + (SpeedY * Multiplier)
				if (PosX >= 1){
					PosX = 0
					PosY = Random(0.2,0.8)
				}

				FleckData[0] = PosX
				FleckData[1] = PosY
			}
		}
		
		RenderStars()
	}



	var AspectRatio = 1920/1080
	function Resize() {
		var RawWidth = Adorn.clientWidth
		var RawHeight = Adorn.clientHeight
		var Width = RawWidth
		var Height = RawHeight

		if (RawHeight * AspectRatio < RawWidth) {
			Height = Width / AspectRatio
		} else {
			Width = Height * AspectRatio
		}

		BackgroundClip.style.width = RawWidth + "px"
		BackgroundClip.style.height = RawHeight + "px"
		ImageBackground.style.width = Width + "px"
		ImageBackground.style.height = Height + "px"
		ImageBackground.style.left = ((RawWidth - Width)/2) + "px"
		ImageBackground.style.top = ((RawHeight - Height)/2) + "px"
		Video.style.width = Width + "px"
		Video.style.height = Height + "px"
		Video.style.left = ((RawWidth - Width)/2) + "px"
		Video.style.top = ((RawHeight - Height)/2) + "px"
		StarCanvas.width = RawWidth 
		StarCanvas.height = RawHeight
		FleckCanvas.width = RawWidth 
		FleckCanvas.height = RawHeight
		RenderStars()
	}
	Resize()

	var PlayBackgroundFunction
	var BackgroundType
	function SetBackground(URL,Format,NewAspectRatio) {
		AspectRatio = NewAspectRatio || 1920/1080
		BackgroundType = Format
		Resize()

		if (Format == "Image") {
			ImageBackground.style.visibility = "visible"
			Video.style.visibility = "hidden"
			ImageBackground.src = URL
			StarCanvas.style.visibility = "hidden"
			FleckCanvas.style.visibility = "hidden"
			StarsVisible = false
		} else if (Format == "MP4") {
			ImageBackground.style.visibility = "hidden"
			Video.style.visibility = "visible"
			Source.type = type="video/mp4"
			Source.src = URL
			StarCanvas.style.visibility = "hidden"
			FleckCanvas.style.visibility = "hidden"
			StarsVisible = false
			Video.load()
		} else {
			ImageBackground.style.visibility = "hidden"
			Video.style.visibility = "hidden"
			StarCanvas.style.visibility = "visible"
			FleckCanvas.style.visibility = "visible"
			StarsVisible = true
		}
	}

	function SetBackgroundPlaying(Playing,StartTime) {
		if (BackgroundType == "MP4") {
			if (Playing == true) {
				Video.currentTime = StartTime
				Video.play()
			} else  {
				Video.pause()
			}
		}
	}

	function HasBackground() {
		return !StarsVisible
	}

	return [Resize,SetBackground,SetBackgroundPlaying,Video,MoveStars,ChangeFleckColors,HasBackground]
}

var MainBackground = CreateBackground(MainVisualizerAdorn)
var ResizeMainBackground = MainBackground[0]
var SetMainBackground = MainBackground[1]
var SetMainBackgroundPlaying = MainBackground[2]
var MainVideo = MainBackground[3]
var MainMoveStars = MainBackground[4]
var MainChangeFleckColors = MainBackground[5]
var MainHasBackground = MainBackground[6]

Body.onresize = function() {
	ResizeMainVisualizer()
	ResizeMainBackground()
	ResizeNextReleaseInfo()
	RenderMain()
	UpdateBottomText()
}
