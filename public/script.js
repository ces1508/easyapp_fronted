

$('[data-toggle=confirmation]').confirmation({
  rootSelector: '[data-toggle=confirmation]',
  // other options
});
  $('.delete').click(function (e) {
    e.preventDefault()
    $.post(this.href)
    window.location.reload()
  })



// document.getElementById('iconapp').onchange = handleChangeIconApp

function handleChangeIconApp(event) {
  let image = new Image()
  let iconPreview = document.getElementById('iconPreview')
  if (event.target.files.length > 0) {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = function (result) {
      iconPreview.src = reader.result
      image.src = reader.result
    }
    image.onload = function () {
      let { width, height } = this
      if (height < 104 || width < 1024) {
        alert('la imagen debe contener una medida de 1024x 1024')
      }
    }
    reader.readAsDataURL(file)
  }

}