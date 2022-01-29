const WebFont = require('webfontloader');
// doing all fonts cause a big delay in active. need to do only what is in the CSS
// families: ['Karla:n4', 'Roboto:n4', 'Volkhov:n4', 'Montserrat:n4,n5', 'Open+Sans:n4,n7', 'Source Sans Pro:n4'],
WebFont.load({
    custom: {
        families: ['Volkhov:n4', 'Montserrat:n4,n5', 'Source Sans Pro:n4'],
    },
  //  loading: function () { console.log('loading'); },
  //  active: function () { console.log('active'); },
 //   fontloading: function (familyName, fvd) { console.log('fontloading', familyName, fvd); },
 //   fontactive: function (familyName, fvd) { console.log('fontactive', familyName, fvd); },
    classes: true,
});