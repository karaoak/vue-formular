  module.exports = function (id,content,options, validation) {
    moment = require('moment');
    require('daterangepicker/daterangepicker');
    component = $('<div id="' + id + '"><h1>'+id+'</h1><vf-form action="/send" :validation="validation" :options="options" ajax>' + content + '</vf-form></div>');

    $(document.body).append(component);

    if (!validation) validation = {};
    var Vue = require('vue');

   var VueFormular = require('../../index');
   Vue.use(VueFormular);

    var vm = new Vue({
      el:"#" + id,
      data: {
        options:options,
        validation:validation,
        items: [
        {
            id:'1',
            text:'itemA'
        },
        {
            id:'2',
            text:'itemB'
        },
        {
            id:'3',
            text:'itemC'
        }
        ]
        },

  });

    return vm;
  }
