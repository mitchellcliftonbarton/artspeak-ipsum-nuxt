<template>
  <div class="wrapper">
    <div class="py-12 max-w-7xl mx-auto text-center">
      <h1 class="mb-16">Book Generator</h1>

      <p class="mb-16">Generate an Artspeak Ipsum book:</p>

      <button
        @click.prevent="generate()"
        class="bg-red text-white p-2 lg:hover:bg-black"
      >GENERATE</button>

      <iframe v-if="pdf" :src="pdf" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
// import PDFDocument from 'pdfkit'
// import blobStream from 'blob-stream'

export default {
  data() {
    return {
      pageCount: 5,
      pdf: false
    }
  },
  methods: {
    generate() {
      const doc = new PDFDocument()
      console.log(doc)
      // const stream = doc.pipe(blobStream())

      // console.log(doc, stream)

      // draw some text
      // doc.fontSize(25).text('Here is some vector graphics...', 100, 80);

      // // end and display the document in the iframe to the right
      // doc.end();
      // stream.on('finish', function() {
      //   this.pdf = stream.toBlobURL('application/pdf');
      //   console.log('finish')
      //   console.log(this.pdf)
      // });
    }
  }
}
</script>