import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: require('./App.html'),
  props: {
    propMessage: {
      type: String,
      default: 'prop default message',
    },
  },
})
export default class App extends Vue {
  // initial data

  // use prop values for initial data
  helloMsg = `Hello, ${this.propMessage}`

  // computed
  get computedMsg() {
    return `computed ${this.helloMsg}`;
  }
}
