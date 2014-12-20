# danopia:accounts-lastfm

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/danopia/meteor-accounts-lastfm?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Last.fm oauth-style account login for your Meteor app. Integrates via the `accounts-oauth` package, like the default auth providers.

## Usage
Just adding this package with `accounts-ui` installed provides your app with LastFM login. The first user will be able to configure the server with credentials, just like every other oauth package.

## Calling Last.FM APIs
You can access any authenticated LastFM APIs on the Meteor server (like subscriptions and method calls) like so:
```js
  var opts = { album: 'Discovery', artist: 'Daft Punk' };
  var album = LastFM.request('album.getinfo', opts, this.userId).album;
```

Please refer to the [Last.FM API documentation](http://www.last.fm/api) for the full method list.

## License
`accounts-lastfm` and `lastfm` are published under the MIT license. See `LICENSE` for details.
