(function () {
  const vueApp = new Vue({
    el: '#vueApp',
    data: function () {
      return {
        number: 5,
      };
    },
    mounted: function () {
      alert('app mount');
    },
    methods: {
    }
  })
})();