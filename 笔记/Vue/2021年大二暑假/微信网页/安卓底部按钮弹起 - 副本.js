v-show="judge"

mounted() {
    this.out = document.documentElement.clientHeight
    window.onresize = () =>
      this.judge = document.documentElement.clientHeight >= this.out
    this.judge = true
},

data() {
    return {
        judge:true,
    }
},