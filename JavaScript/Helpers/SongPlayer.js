var Dev_TimeOffset = 0

var Context = new AudioContext()
var SampleRate = Context.sampleRate
var Source
var Analyser = Context.createAnalyser()
var GainNode = Context.createGain()
var AudioNode = Context.createScriptProcessor(BufferInterval, 1, 1)
UpdateVolume()

var AristName = ""
var SongName = ""
var AlbumSongs = []
var AlbumName = ""
var LineTextColor = "#FFFFFF"
var OriginalGenreColor = "#FFFFFF"



var PreloadedImages = []
function Preload(ImageUrl) {
	if (PreloadedImages[ImageUrl] == null) {
		PreloadedImages[ImageUrl] = true
		var Img = new Image()
 		Img.src = ImageUrl
	}
}

var CachedAudio = []
var MaxCachedURLs = 5
var LastCachedURLs = []
function PushValues(NewValue) {
	var FirstValue = LastCachedURLs [0]
	for (var i = 0; i < MaxCachedURLs - 1; i++) {
		LastCachedURLs[i] = LastCachedURLs[i + 1]
	}
	LastCachedURLs[MaxCachedURLs - 1] = NewValue
	return FirstValue
}

function GetAudioSource(Url,Callback) {
  var ExistingResponse = CachedAudio[Url]
  if (ExistingResponse) {
    if (Callback) {
      Callback(ExistingResponse)
    }
  } else {
    var Request = new XMLHttpRequest()
    Request.open("GET", Url, true)
    Request.responseType = 'arraybuffer'

    Request.onload = () => {
      Context.decodeAudioData(Request.response, function(Buffer) {
        CachedAudio[Url] = Buffer
        var CacheToClear = PushValues(Url)
        if (CacheToClear) {
          CachedAudio[CacheToClear] = null
        }

        if (Callback) {
          Callback(Buffer)
        }
      },function(Message){
        console.log(Message)
      })
    }

    Request.send()
  }
}

var LastBuffer
function CreateSourceBuffer(Buffer) {
	Source = Context.createBufferSource()
	Source.connect(GainNode)
	Source.connect(Analyser)
	if (Buffer == null) {
		Buffer = LastBuffer
	}
	Source.buffer = Buffer
	Source.connect(Context.destination)
	LastBuffer = Buffer
}

function InitializeSpectrumHandler() {
	Analyser.fftSize = FFTSize
	Analyser.smoothingTimeConstant = SmoothingConstant
	GainNode.connect(Context.destination)
	AudioNode.connect(Context.destination)
	Analyser.connect(AudioNode)
}

function LoadSong(URL) {
	function PlaySong(Buffer) {
		CreateSourceBuffer(Buffer)
	    InitializeSpectrumHandler()

	    TextStates = []
		NextState = []
		CurState = -1
		NextStateTime = -1
		NextIncrementTime = 0
		TextChangeState = -1

	    StartTime = Date.now() - (1000 * Dev_TimeOffset)
	    TimeLength = Math.round(Buffer.duration * 1000)



	    var FinalSongData = GetSongNameLinesAndSizes(ArtistName,SongName)
	    var SongNameFinal = FinalSongData[0]
	    var SongSizeFinal = FinalSongData[1]

		function InsertState(State) {
			TextStates[TextStates.length] = State
		}

		InsertState(["Open",500,1000,SongNameFinal,SongSizeFinal,[LineTextColor,LineTextColor,LineTextColor,LineTextColor,LineTextColor]])
		var UsableTime = TimeLength - OutroTime
		if (AlbumSongs != null) {
			var Length = AlbumSongs.length
			if (Length % 4 == 0 || Length % 3 == 1) {
				var BaseInterval = UsableTime/(1 + Math.ceil(Length/4))
				for (var i = 0; i < Math.ceil(Length/4); i++) {
					var BasePosition = i * 4
					var AlbumSectionSongs = []
					var Colors = [LineTextColor]
					AlbumSectionSongs[0] = AlbumName

					function AddSong(Index,Position) {
						var Song = AlbumSongs[Position]
						if (Song) {
							AlbumSectionSongs[Index] = (Position + 1) + ". " + Song
							if (Song.substr(0,SongName.length).toLowerCase() == SongName.toLowerCase()) {
								Colors[Index] = GenreColor
							} else {
								Colors[Index] = LineTextColor
							}
						} else {
							AlbumSectionSongs[Index] = ""
							Colors[Index] = LineTextColor
						}
					}

					AddSong(1,BasePosition)
					AddSong(2,BasePosition + 1)
					AddSong(3,BasePosition + 2)
					AddSong(4,BasePosition + 3)

					var Time = BaseInterval * (i + 1)
					InsertState(["Close",Time - 500,Time])
					InsertState(["Open",Time,Time + 500,AlbumSectionSongs,[0,0.2,0.2,0.2,0.2,0.2],Colors])
				}
			} else {
				var BaseInterval = UsableTime/(1 + Math.ceil(Length/3))
				for (var i = 0; i < Math.ceil(Length/3); i++) {
					var BasePosition = i * 3
					var AlbumSectionSongs = []
					var Colors = [LineTextColor]
					AlbumSectionSongs[0] = AlbumName

					function AddSong(Index,Position) {
						var Song = AlbumSongs[Position]
						if (Song) {
							AlbumSectionSongs[Index] = (Position + 1) + ". " + Song
							if (Song.substr(0,SongName.length).toLowerCase() == SongName.toLowerCase()) {
								Colors[Index] = GenreColor
							} else {
								Colors[Index] = LineTextColor
							}
						} else {
							AlbumSectionSongs[Index] = ""
							Colors[Index] = LineTextColor
						}
					}

					AddSong(1,BasePosition)
					AddSong(2,BasePosition + 1)
					AddSong(3,BasePosition + 2)
					Colors[4] = LineTextColor

					var Time = BaseInterval * (i + 1)
					InsertState(["Close",Time - 500,Time])
					InsertState(["Open",Time,Time + 500,AlbumSectionSongs,[0.1,0.2,0.2,0.2,0.2,0],Colors])
				}
			}

		}
		InsertState(["Close",UsableTime - 500,TimeLength - OutroTime])

    	Source.start(0,Dev_TimeOffset)
    	SetMainBackgroundPlaying(true,Dev_TimeOffset)
    	GetAudioSource(GetNextSong(true)[3],function() {})
		Paused = false
		Skipped = false
	}

	GetAudioSource(URL,PlaySong)
}



var UsableSongs = []
var Songs = []
var AvaliableSlots = []
var CurrentSong = 0
function GetNextRandomSlot() {
	if (AvaliableSlots.length == 1) {
		var ReturnVariable = AvaliableSlots[0]
		AvaliableSlots[0] = null
		return ReturnVariable
	} else {
		var Slot = Math.floor(Math.random() * AvaliableSlots.length)
		var ReturnVariable = AvaliableSlots[Slot]

		for (var i = Slot + 1; i < AvaliableSlots.length; i++) {
			AvaliableSlots[i - 1] = AvaliableSlots[i]
		}
		AvaliableSlots.splice(-1,1)
		return ReturnVariable
	}
}

var CurrentSongToAdd = 0
for (var i = 0; i < Raw_Songs.length; i++) {
	var SongData = Raw_Songs[i]
	var ArtistName = SongData[0].toLowerCase()
	var SongName = SongData[1].toLowerCase()
	var Genre = SongData[2].toLowerCase()

	if (ArtistName.match(ArtistNameSearch) != null && SongName.match(SongNameSearch) != null && Genre.match(GenreNameSearch) != null) {
		AvaliableSlots[CurrentSongToAdd] = CurrentSongToAdd
		UsableSongs[CurrentSongToAdd] = SongData
		CurrentSongToAdd++
	}
}

for (var i = 0; i < UsableSongs.length; i++) {
	Songs[GetNextRandomSlot()] = UsableSongs[i]
}

 function GetNextSong(DontIncrement) {
 	if (DontIncrement) {
 		var CurSong = CurrentSong
	 	CurSong = CurSong + 1
	 	if (CurSong >= Songs.length) {
	 		CurSong = 0
	 	}
	 	return Songs[CurSong]
	} else {
	 	CurrentSong = CurrentSong + 1
	 	if (CurrentSong >= Songs.length) {
	 		CurrentSong = 0
	 	}
	 	return Songs[CurrentSong]
	}
}



var GenreColor = "#FFFFFF"
function PlayNextSong() {
	SetNextReleaseActive(false)

	var SongData = GetNextSong()
	var Genre = SongData[2]
	GenreColor = GetColorFromGenre(Genre)
	OriginalGenreColor = GenreColor
	ArtistLogo = SongData[5].Logo
	AlbumCover = SongData[4].AlbumCover

	ArtistName = SongData[0]
	SongName = SongData[1]
	var AlbumData = SongData[4]
	var Overrides = SongData[6]

	var AlbumBackground = AlbumData.Background
	var AlbumBackgroundFormat = AlbumData.BackgroundFormat
	var AlbumBackgroundCoverAspectRatio = AlbumData.BackgroundCoverAspectRatio
	AlbumSongs = AlbumData.AlbumSongs
	AlbumName = AlbumData.Artist + " - " + AlbumData.AlbumName

	LineTextColor = "#FFFFFF"
	ShadowMultiplier = 1
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
			LineTextColor = OverrideLineTextColor
		}
		if (OverrideShadowMultiplier != null) {
			ShadowMultiplier = OverrideShadowMultiplier
		}
	}
	if (AlbumBackground != null && ColorOverrided == false) {
		GenreColor = "#FFFFFF"
	}

	if (GenreColor == "#FFFFFF") {
		MainLogo = MonstercatLogoInverted
	} else {
		MainLogo = MonstercatLogo
	}

	document.title = "[" + Genre + "] " + ArtistName + " - " + SongName

	MainChangeFleckColors(GenreColor)
	ResizeMainVisualizer()
	Preload(ArtistLogo)
	Preload(AlbumCover)
	SetMainBackground(AlbumBackground,AlbumBackgroundFormat,AlbumBackgroundCoverAspectRatio)
	LoadSong(SongData[3])



	var NextSongData = GetNextSong(true)
	Preload(SongData[5].Logo)
	Preload(SongData[4].AlbumCover)
}
PlayNextSong()