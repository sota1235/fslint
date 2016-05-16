fslint
====

[![npm version](https://badge.fury.io/js/fslint.svg)](https://badge.fury.io/js/fslint)

Lint for checking size of file.

### Description

If you want to check file size, use this package.

### Demo

![](https://i.gyazo.com/5168d4433fe35b09fddeb7ca7a1f3cb9.gif)

### Requirement

- npm
- node.js

### Usage

You can specify file patter and limit of file size.

For example, if you want to check whether `assets/js/**/*.js` exceeds the 1024Byte,
enter this.

```shell
$ fslint --files=assets/js/**/*.js --limit=1024
```

Then the result displayed on display.

```shell
[OK] assets/js/hoge/fuga.js 500 B
[NG] assets/js/moge.js 2020 MB
...etc
```

### Options

```
  Usage: file-size-checker [options]

  Options:

    --help                output usage information
    --files <target>      target files for lint
    -l, --limit <Byte>    limit size
```

### Install

```shell
$ npm i -S file-size-lint
```

### Contribution

Bug reports and pull requests are welcome on GitHub at https://github.com/sota1235/file-size-lint. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

### Licence

This software is released under the MIT License, see LICENSE.txt.

## Author

[@sota1235](https://github.com/sota1235)
