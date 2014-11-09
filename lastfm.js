Accounts.oauth.registerService('lastfm');

if (Meteor.isClient) {
  Meteor.loginWithLastfm = function (options, callback) {
    // support a callback without options
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    var cb = Accounts.oauth.credentialRequestCompleteHandler(callback);
    LastFM.requestCredential(options, cb);
  };
} else {
  var autopublishedFields =
    ['image', 'country', 'name', 'realname', 'url'].map(function (subfield) {
      return 'services.lastfm.' + subfield;
    });

  Accounts.addAutopublishFields({
    forLoggedInUser: autopublishedFields,
    forOtherUsers: autopublishedFields
  });
}
