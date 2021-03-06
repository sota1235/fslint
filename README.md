fslint
====

[![npm version](https://badge.fury.io/js/fslint.svg)](https://badge.fury.io/js/fslint) [![Build Status](https://travis-ci.org/sota1235/fslint.svg?branch=master)](https://travis-ci.org/sota1235/fslint) [![Dependency Status](https://david-dm.org/sota1235/fslint.svg)](https://david-dm.org/sota1235/fslint) [![devDependency Status](https://david-dm.org/sota1235/fslint/dev-status.svg)](https://david-dm.org/sota1235/fslint#info=devDependencies)

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
  Usage: fslint [options]

  Options:

    --help                  output usage information
    --files <target>        target files for lint
    --limit <Byte>          limit size
    --limit-kb <Kilo Byte>  limit size, specify with kilo byte
    --limit-mb <Mega Byte>  limit size, specify with mega byte
```

### Install

```shell
$ npm i -S fslint
```

### Contribution

Bug reports and pull requests are welcome on GitHub at https://github.com/sota1235/fslint. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

### Licence

This software is released under the MIT License, see LICENSE.txt.

## Author

[@sota1235](https://github.com/sota1235)
