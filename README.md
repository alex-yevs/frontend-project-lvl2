## frontend-project-lvl2

This repository is the [Hexlet](https://ru.hexlet.io/professions/frontend/projects/46)'s training project of the frontend-developer profession.

# Difference Calculator
Compares two configuration files and shows a difference

![gendiff](https://github.com/alex-yevs/frontend-project-lvl2/workflows/gendiff/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/f499ef83c81c2b9b70ac/maintainability)](https://codeclimate.com/github/alex-yevs/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f499ef83c81c2b9b70ac/test_coverage)](https://codeclimate.com/github/alex-yevs/frontend-project-lvl2/test_coverage)

## Setup

```sh
$ make install
$ sudo npm link
```

## Run

```sh
$ gendiff [options] <filepath1> <filepath2>
```
```sh
Options:
  -V, --version        output the version number
  -f, --format [type]  output format: [stylish, plain, json] (default: "stylish")
  -h, --help           display help for command
```
## Example of the working with nested JSON, YAML, INI files
[![asciicast](https://asciinema.org/a/ulu6sF8JWj894mRb0TFxQNwBT.svg)](https://asciinema.org/a/ulu6sF8JWj894mRb0TFxQNwBT)

## Example of the working with flat JSON files
[![asciicast](https://asciinema.org/a/qQK3qArtIRdCA1kvDbkmNBvg7.svg)](https://asciinema.org/a/qQK3qArtIRdCA1kvDbkmNBvg7)

## Example of the working with flat YAML files
[![asciicast](https://asciinema.org/a/U2CR0X4LjKs6i3mqLE9rrHLzB.svg)](https://asciinema.org/a/U2CR0X4LjKs6i3mqLE9rrHLzB)

## Example of the working with flat INI files
[![asciicast](https://asciinema.org/a/9KPb42OfOxS3o3n4VYjpWwL65.svg)](https://asciinema.org/a/9KPb42OfOxS3o3n4VYjpWwL65)
