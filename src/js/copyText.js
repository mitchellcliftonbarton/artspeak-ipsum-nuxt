const copyText = text => {
  let textArea = document.createElement("textarea")
  textArea.style.opacity = '0'
  textArea.style.pointerEvents = 'none'
  textArea.style.position = 'fixed'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  try {
      var successful = document.execCommand('copy')
      var msg = successful ? 'successful' : 'unsuccessful'
      console.log('Copying text command was ' + msg)
  } catch (err) {
      console.log('Oops, unable to copy')
  }

  document.body.removeChild(textArea)
}

export default copyText
