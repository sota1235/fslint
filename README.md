fslint
====

Lint for checking size of file.

### Description

If you want to check file size, use this package.

### Demo

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
name: assets/js/hoge/fuga.js size: 500 B [OK]
name: assets/js/moge.js size: 2020 B [NG]
...etc
```

### Options

```
  Usage: file-size-checker [options]

  Options:

    -h, --help            output usage information
    -f, --files <target>  target files for lint
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
