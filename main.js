const MAX_DISP = 2

Vue.component('graph-div', {
  props: ['grp'],
  template: '<div class="graph-div"><p>{{ grp.name }}</p><button type="button" name="button" @click="removeButtonClicked">x</button></div>',
  methods: {
    removeButtonClicked: function () {
      this.$emit('remove', this)
    }
  }

})

Vue.component('nav-button', {
    props: ['btn'],
    template: '<li class="nav-list"><button class="nav-button" type="button" @click="buttonClicked">{{ btn.name }}</button></li>', methods: {
      buttonClicked: function () {
        this.$emit('call', this)
      }
    }
})

var app = new Vue({
  el: '#app',
  data: {
    buttons: [
      { name: 'buttonA' },
      { name: 'buttonB' },
      { name: 'buttonC' },
      { name: 'buttonD' }
    ],
    divs: []
  },
  methods: {
    buttonClick: function (button) {
      if (!this.isOverMaxDisp()) {
        this.divs.push(button)
      }
    },
    isOverMaxDisp: function () {
      if (this.divs.length >= MAX_DISP) {
        return true
      } else {
        return false
      }
    },
    removeButtonClick: function (graph) {
      i = this.divs.indexOf(graph)
      this.divs.splice(i, 1)
    }
  }
})
