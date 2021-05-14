# LodashGS

Lodash for Google Apps Script is a library that enables the use of the [lodash.js](https://lodash.com) library in [Google Apps Script](https://developers.google.com/apps-script/).
API docs are available [here](https://script.google.com/macros/library/versions/d/1SQ0PlSMwndIuOAgtVJdjxsuXueECtY9OGejVDS37ckSVbMll73EXf2PW).

## Adding the library to your project

Lodash for Google Apps Script is made available as a script library. This is how you add it to your project:

1. Select "Resources" > "Libraries..." in the Google Apps Script editor.
2. Enter the project key (`1SQ0PlSMwndIuOAgtVJdjxsuXueECtY9OGejVDS37ckSVbMll73EXf2PW`) in the "Find a Library" field, and choose "Select". (If you have copied the library, enter instead the project key of your copy.)
3. Select the highest version number, and choose Lodash as the identifier. (Do not turn on Development Mode unless you know what you are doing. The development version may not work.)
4. Press Save. You can now use the Lodash library in your code.

### Custom copying

You can find the current build for the Apps Script platform in the [build](./master/build) folder.

## Versions

- The `6` version (full description `v1.0.2-1 (4.17.21)`) of the LodashGS corresponds to the `4.17.21` version of the Lodash.

## Loading the library

To load LodashGS:

```js
var _ = LodashGS.load();
```

Same for v8:

```js
const _ = LodashGS.load();
```

## Copying the library

A Google Apps Script project for Lodash is available [here](https://script.google.com/d/1SQ0PlSMwndIuOAgtVJdjxsuXueECtY9OGejVDS37ckSVbMll73EXf2PW/edit?usp=sharing).

To copy the library, Select "File" > "Make a copy..." in the Google
Apps Script editor.

## Testing the library

{TO DO}

## Links

- [Underscore for Google Apps Script](https://github.com/simula-innovation/gas-underscore)
- [Differences between lodash and underscore](http://stackoverflow.com/questions/13789618)

## License

Lodash for Google Apps Script is released under the MIT license.
