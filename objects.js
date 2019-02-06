let playlist = {
  artistName: "song titles"
}

function updatePlaylist(playlist, artistName, songTitle){
  let playlist2 = Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist2
}
