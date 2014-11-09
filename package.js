Package.describe({
  summary: 'Login service for Last.FM accounts',
  version: '1.0.0',
  name: 'danopia:accounts-lastfm',
  git: 'https://github.com/danopia/meteor-accounts-lastfm.git',
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('danopia:lastfm@1.0.0', ['client', 'server']);

  api.add_files('lastfm_login_button.css', 'client');
  api.add_files('lastfm.js');
});
