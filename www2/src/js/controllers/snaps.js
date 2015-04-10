var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Radio = require('backbone.radio');
var SnapLayoutView = require('../views/snap-layout.js');
var Snap = require('../models/snap.js');

module.exports = {
  snap: function(name) {
    var chan = Radio.channel('root');
    var snap = new Snap({id: name});

    snap.fetch({
      success: function(snap) {
        var view =  new SnapLayoutView({
          model: snap
        });
        chan.command('set:content', view);
      },
      error: function() {
        // TODO ui error messaging
        // chan.command('show:error', msg);
        alert('Model.fetch() failed. :(');
      }
    });
  },
  section: function(name, section) {
    console.log(name, section);
  }
};
