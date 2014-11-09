# danopia:accounts-lastfm
Last.fm oauth-style account login for Meteor apps, integrates via `accounts-oauth` package

## Usage
Just adding this package with an `accounts-ui` installed provides the app with LastFM login. The first user will be able to configure the server with credentials, just like every other oauth package.

## Using Last.FM APIs
You can access any authenticated LastFM APIs on the Meteor server (subscriptions, methods) like so:
```js
  var opts = { album: 'Discovery', artist: 'Daft Punk' };
  var album = LastFM.request('album.getinfo', opts, this.userId).album;
```
