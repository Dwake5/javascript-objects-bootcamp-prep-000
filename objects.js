let playlist = {
  artistName: "song titles"
}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}
