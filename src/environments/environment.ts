// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: 'AIzaSyAZHC7MfFuamiyWUiUn6hyuFlyTH2OqPLk',
    authDomain: 'eightdyanchou.firebaseapp.com',
    databaseURL: 'https://eightdyanchou.firebaseio.com',
    projectId: 'eightdyanchou',
    storageBucket: 'gs://eightdyanchou.appspot.com',
    messagingSenderId: '87081529885'
  }
};
