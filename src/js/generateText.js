import words from '../data/words'

export default class GenerateText {
  constructor (paragraphs) {
    this.paragraphs       = parseInt(paragraphs)
    this.sentenceLengths  = [4, 14] // arbitrary numbers
    this.paragraphLengths = [5, 7] // arbitrary numbers
    this.finalText        = null
    this.init()
  }

  init () {
    this.finalText = this.createText()
  }

  createSentence () {
    // pick an amount of words to make as the length of the sentence
    const sentenceLength = Math.floor(Math.random() * (this.sentenceLengths[1] - this.sentenceLengths[0] + 1) + this.sentenceLengths[0])
    let sentence = '' // start with empty sentence string

    for (var i = 0; i < sentenceLength; i++) {
      // get a random word and add to sentence
      let word = words[Math.floor(Math.random() * words.length)]

      while (sentence.includes(word)) { // make sure that phrase or word isnt already in the sentence
        word = words[Math.floor(Math.random() * words.length)]
      }

      if (i + 1 === sentenceLength) {
        sentence += ` ${word}.`
      } else if (i === 0) {
        let w = word.charAt(0).toUpperCase() + word.slice(1)
        sentence += w
      } else {
        sentence += ` ${word}`
      }
    }

    return sentence
  }

  createParagraph () {
    const paragraphLength = Math.floor(Math.random() * (this.paragraphLengths[1] - this.paragraphLengths[0] + 1) + this.paragraphLengths[0])
    let paragraph = ''

    for (var i = 0; i < paragraphLength; i++) {
      let sentence = this.createSentence()

      if (i !== 0) {
        paragraph += ` ${sentence}`
      } else {
        paragraph += sentence
      }
    }

    return paragraph
  }

  createText () {
    let text = ''

    for (var i = 0; i < this.paragraphs; i++) {
      let paragraph = this.createParagraph()

      if (i + 1 === this.paragraphs) {
        text += `${paragraph}`
      } else {
        text += `${paragraph}\n\n`
      }
    }

    text.trim()

    return text
  }
}
