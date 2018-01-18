const source = document.getElementById('audioSource')

document.getElementById('playSong').addEventListener('click', function () {
  source.play()
  let songDuration = document.getElementById('songDuration')
  let len = Math.floor(document.getElementById('audioSource').duration)  
  document.getElementById('songDuration').setAttribute('max', len)
  setInterval(function () {
    document.getElementById('songDuration').stepUp(1)
  }, 1000)    
})

document.getElementById('pauseSong').addEventListener('click', function () {
  source.pause()
})

document.getElementById('stopSong').addEventListener('click', function () {
  source.load()
  document.getElementById('songDuration').setAttribute('value', 0)
})

document.getElementById('testButton').addEventListener('click', function () {

})
