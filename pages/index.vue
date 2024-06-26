<template>
  <div class="wrapper">
    <div class="info px-4 pb-12 text-center w-full lg:w-1/2 lg:border-r relative lg:fixed top-0 left-0 h-full">
      <div class="pt-16 flex flex-col justify-start items-center">
        <p class="mb-16">
          A simple lorem ipsum generator based on <a class="text-red lg:hover:text-black" href="https://www.canopycanopycanopy.com/contents/international_art_english" target="_blank" rel="noreferrer">International Art English</a>.
          <br/>
          <br/>
          Made by <a class="text-red lg:hover:text-black" href="https://mitchellbarton.com" target="_blank" rel="noreferrer">Mitchell Barton</a>
        </p>

        <div class="w-40 border-b"></div>

        <form class="mt-16 flex flex-col items-center">
          <div class="mb-12">
            <div class="quick mb-20">
              <p class="mb-6">Quickly generate and copy a common number of paragraphs:</p>

              <div class="flex justify-center">
                <button 
                  v-for="n in 5"
                  :key="n"
                  @click.prevent="build(n, true)" 
                  class="bg-red text-white py-2 px-5 mx-4 lg:hover:bg-black"
                >{{ n }}</button>
              </div>
            </div>

            <div class="w-40 border-b mx-auto"></div>

            <p class="mt-16 mb-6">Or generate a custom amount:</p>

            <label class="mr-2" htmlfor="paragraphs">Paragraphs:</label>
            <input
              v-model.number="paragraphsNum"
              class="border p-2 text-black mr-4 w-16"
              type="number"
              name="paragraphs"
              v-on:change="check()"
            />
            <button 
              @click.prevent="decrease()" 
              class="bg-red text-white py-2 px-4 lg:hover:bg-black"
            >-</button>
            <button 
              @click.prevent="increase()"
              class="bg-red text-white py-2 px-4 lg:hover:bg-black"
            >+</button>
          </div>
          <div className="form-section flex">
            <button 
              @click.prevent="build()" 
              class="bg-red text-white p-2 lg:hover:bg-black mr-2"
              type="submit"
            >BUILD</button>

            <button 
              @click.prevent="build(false, true)" 
              class="bg-red text-white p-2 lg:hover:bg-black"
              type="submit"
            >BUILD & COPY</button>
          </div>
        </form>
      </div>

      <div class="hidden lg:flex absolute bottom-0 left-0 w-full p-8 justify-center border-t">
        <p>© Copyright {{ new Date().getFullYear() }} Artspeak Ipsum</p>
      </div>
    </div>

    <div class="content flex justify-end">
      <div class="w-full lg:w-1/2 px-6 lg:px-16 pt-16 flex flex-wrap lg:flex-nowrap items-start mb-20 lg:mb-10 relative">
        <div class="w-full order-2 lg:order-1 mb-80">
          <button 
            v-if="result" 
            class="copy-button-container text-center w-full py-6 bg-red text-white lg:hover:bg-black cursor-pointer mb-16"
            @click.prevent="handleCopy()"
          >
            {{ copied ? 'COPIED!' : 'COPY' }}
          </button>

          <p 
            v-if="result" 
            v-html="result"
            class="whitespace-pre-line"
          ></p>
          <p 
            v-else 
            v-html="pretext" 
            class="text-grey whitespace-pre-line"
          ></p>
        </div>
      </div>
    </div>

    <div class="flex lg:hidden w-full p-8 justify-center border-t">
      <p>© Copyright {{ new Date().getFullYear() }} Artspeak Ipsum</p>
    </div>

    <div id="copy-overlay" class="fixed top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
      <div
        v-if="copiedFromBuild"
        @click.prevent="handleCopy()" 
        class="copy-button bg-red text-white p-2"
      >{{ copiedFromBuildText }}</div>
    </div>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard'
import GenerateText from '@/src/js/generateText'

export default {
  name: 'IndexPage',
  data () {
    return {
      paragraphsNum: 1,
      result: null,
      copiedText: 'COPY',
      pretext: 'Text will be generated here...\n\n:)',
      copied: false,
      copiedFromBuild: false,
      copiedFromBuildText: 'COPIED!'
    }
  },
  methods: {
    decrease () {
      this.paragraphsNum > 1
      ? this.paragraphsNum--
      : alert('Sorry! You can\'t have less than 1 paragraph.')
    },
    increase () {
      this.paragraphsNum < 100
      ? this.paragraphsNum++
      : alert('Sorry! 100 paragraphs is the max.')
    },
    check () {
      if (this.paragraphsNum > 100 || this.paragraphsNum < 1) {
        alert('Sorry! You can only generate between 1-100 paragraphs of text.')
        this.paragraphsNum = 1
        return
      }
    },
    build (num = false, shouldCopy = false) {
      if (num) {
        this.result = new GenerateText(num).finalText
      } else {
        this.check()

        this.result = new GenerateText(this.paragraphsNum).finalText
      }

      if (shouldCopy) {
        const number = num ? num : this.paragraphsNum
        this.copiedFromBuildText = `COPIED ${number} ${number > 1 ? 'PARAGRAPHS' : 'PARAGRAPH'} OF TEXT!`
        copy(this.result)
        this.copiedFromBuild = true

        setTimeout(() => {
          this.copiedFromBuild = false
        }, 1500)
      }
    },
    handleCopy () {
      copy(this.result)
      this.copied = true

      setTimeout(() => {
        this.copied = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .info {
    padding-top: 6.3rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    box-shadow: none;
    outline: none;
  }

  .copy-button-container {
    position: sticky;
    top: 63px;
  }

  .copy-enter {
    opacity: 0;
    transform: translateY(10px);
  }

  .copy-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }

  .copy-leave {
    opacity: 1;
    transform: translateY(0px);
  }

  .copy-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  .gradient {
    height: 150px;
    background: linear-gradient(white 30%, transparent 100%);
    position: fixed;
    top: 6.1rem;
    right: 0px;
    width: 50%;
  }
</style>
