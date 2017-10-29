var DoStartupTest = false

if (DoStartupTest) {
	console.log("Starting starup test")

	for (var i = 0; i < Raw_Songs.length; i++) {
		var CheckSongData = Raw_Songs[i]

		var CheckArtistName = CheckSongData[0]
		var CheckSongName = CheckSongData[1]
		var CheckGenre = CheckSongData[2]
		var CheckFileLocation = CheckSongData[3]
		var CheckAlbumData = CheckSongData[4]
		var CheckArtistData = CheckSongData[5]



		function DataError(String) {
			console.log((CheckArtistName || "") + " - " + (CheckSongName || "") + ": " + String)
		}

		if (CheckArtistName == null || CheckArtistName == "") {
			DataError("Artist name is missing")
		}
		if (CheckSongName == null || CheckSongName == "") {
			DataError("Song name is missing")
		}
		if (CheckGenre == null || CheckGenre == "") {
			DataError("Genre is missing")
		}

		if (CheckAlbumData == null) {
			DataError("Album data is missing")
		} else {
			var CheckAlbumCover = CheckAlbumData.AlbumCover
			var CheckAlbumArtist = CheckAlbumData.Artist
			var CheckAlbumName = CheckAlbumData.AlbumName
			
			if (CheckAlbumCover == null || CheckAlbumCover == "") {
				DataError("Album cover is missing")
			}
			if (CheckAlbumArtist == null || CheckAlbumArtist == "") {
				DataError("Album artist is missing")
			}
			if (CheckAlbumName == null || CheckAlbumName == "") {
				DataError("Album name is missing")
			}
		}

		if (CheckArtistData == null) {
			DataError("Artist data is missing")
		} else {
			var CheckArtistLogo = CheckArtistData.Logo

			if (CheckArtistLogo == null || CheckArtistLogo == "") {
				DataError("Artist logo is missing")
			}
		}



		var Request = new XMLHttpRequest()
	    Request.open("HEAD",CheckFileLocation,true)
	    Request.onerror = function() {
	    	DataError("File not found")
	    }
	    Request.send()
	}
}