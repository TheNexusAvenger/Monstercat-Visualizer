//Colors from https://github.com/caseif/vis.js/blob/gh-pages/js/util/helper/genre_helper.js
var GenreNamesToColors = {
  "#820028": "Trap",
  "#E20386": "Drumstep",
  "#E10304": "Drum & Bass",
  "#0584E3": "Trance",
  "#C2C1C2": "EDM",
  "#E2D904": "Electro",
  "#E28C06": "House",
  "#0DB104": "Hard Dance",
  "#19925B": "Glitch Hop / 110 BPM",
  "#29B8B2": "Indie Dance / Nu Disco",
  "#8D03E2": "Dubstep",
  "#9999FB": "Futrure Bass",
}

var MainColors = {
  "Trap": "#820028",
  "Drumstep": "#E20386",
  "Drum & Bass": "#E10304",
  "Trance": "#0584E3",
  "Electronic": "#C2C1C2",
  "Electro": "#E2D904",
  "House": "#E28C06",
  "Hardcore": "#0DB104",
  "Glitch Hop": "#19925B",
  "Post Disco": "#29B8B2",
  "Dubstep": "#8D03E2",
  "Future Bass": "#9999FB",
};

var OtherColors = {
    "Trip Hop": "Trap",

    "Neurofunk": "Drum & Bass",
    "Techstep": "Drum & Bass",
    "DnB": "Drum & Bass",

    "Bass House": "Electro",
    "Big Room House": "Electro",
    "Bounce": "Electro",
    "Complextro": "Electro",
    "Outrun": "Electro",

    "Bounce": "Electro",

    "Electro Swing": "House",

    "Freeform": "Hardcore",
    "Hard Dance": "Hardcore",
    "Hands Up": "Hardcore",

    "Moombah": "Glitch Hop",
    "Neurohop": "Glitch Hop",

    "Hardstyle": "Trance",
    "Nu Style": "Trance",

    "Electro Soul": "Post Disco",
    "Indie Dance": "Post Disco",
    "Nu Disco": "Post Disco",
    "Synthwave": "Post Disco",

    "Brostep": "Dubstep",
    "Garage": "Dubstep",
    "Neurostep": "Dubstep",
    "Riddim": "Dubstep",

    "Nu Funk": "Breaks",

    "Downtempo": "Chillout",

    "Neofolk": "Rock",

    "Industrial": "Electronic",
    "Breaks": "Electronic",
};

for (var Key in OtherColors) {
  MainColors[Key] = MainColors[OtherColors[Key]]
}

function GetColorFromGenre(Genre) {
  if (Genre != null) {
    var Color = MainColors[Genre]
    if (Color != null) {
      return Color
    }

    Genre = Genre.toLowerCase()
    for (var Key in MainColors) {
      if (Genre.indexOf(Key.toLowerCase()) != -1) {
        return MainColors[Key]
      }
    }
  }

  return MainColors["Electronic"]
}

function GetGenreFromColor(Genre) {
  return GenreNamesToColors[Genre]
}
