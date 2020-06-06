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
  -f, --format [type]  output format
  -h, --help           display help for command
```
## Example of the working on flat JSON files
[![asciicast](https://asciinema.org/a/qQK3qArtIRdCA1kvDbkmNBvg7.svg)](https://asciinema.org/a/qQK3qArtIRdCA1kvDbkmNBvg7)

## Example of the working on flat YAML files
[![asciicast](https://asciinema.org/a/AByaWzRpHPhUVdkom2HEmvqAY.svg)](https://asciinema.org/a/AByaWzRpHPhUVdkom2HEmvqAY)