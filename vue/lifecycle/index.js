const vm = new Vue({
  el: '#app', 
  data: {
    message: 'HELLO WORLD!'
  },
  beforeCreate() {
    console.log('before-create');
    console.log(this.$data);
    console.log(this.$el);
  },
  created() {
    console.log('created');
    console.log(this.$data);
    console.log(this.$el);
    
  },
  beforeMount() {
    console.log('before-mounte');
    console.log(this.$data);
    console.log(this.$el);    
  },
  mounted() {
    console.log('mounted');
    console.log(this.$data);
    console.log(this.$el);    
  }
})