# Destiny

<h2 align="center">Prettier for File Structures</h2>

<p align="center">
  <a href="https://www.npmjs.com/package/destiny">
    <img alt="npm version" src="https://badge.fury.io/js/destiny.svg">
  </a>

  <a href="https://github.com/benawad/destiny/issues">
    <img alt="contributions welcome" src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat">
  </a>

  <a href="https://github.com/benawad/destiny/actions?query=workflow%3Aci">
    <img alt="ci workflow" src="https://github.com/benawad/destiny/workflows/ci/badge.svg">
  </a>

  <a href="https://gitter.im/destiny-dev/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img alt="Join the chat at https://gitter.im/destiny-dev/community" src="https://badges.gitter.im/destiny-dev/community.svg">
  </a>

  <a href="https://github.com/benawad/destiny">
    <img alt="file structure: destiny" src="https://img.shields.io/badge/file%20structure-destiny-7a49ff?style=flat">
  </a>
</p>

---

Motivation: https://www.youtube.com/watch?v=rGYbrIf-y58

![example transformation](https://github.com/benawad/destiny/blob/master/assets/example.png)

## What does this do?

1. Scans a folder for all the files in it
2. Creates a directed graph based on how the JavaScript/TypeScript files import each other
   ![example directed graph](https://github.com/benawad/destiny/blob/master/assets/graph.png)
3. Creates a fractal representation of the graph (following similar rules outlined here: https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af)
4. Moves existing files into the fractal structure
5. Fixes imports
6. Removes all empty folders
7. Prints files that are "unused" (not imported by anyone and doesn't import anything)

The end result is a "prettified" file structure.

## Disclaimer

- This is a work in progress and 100% has bugs of some kind in it
- BEFORE running this tool on your codebase, make sure you have commited to git or made a backup (I don't expect the tool to destroy your work (although it's possible), but just in case you don't like the results)
- Snapshot tests don't format correctly
- Only works on JavaScript/TypeScript codebases (althought this concept could probably be extended to any language)

## Dependencies required for installing

Destiny uses NPX, node package binary executor, to install and run. More details about NPX [here](https://www.npmjs.com/package/npx).

## How to run Destiny

`npx destiny` is used to both install the project if it's currently missing, and then run it, if it's already installed.

Dry run which will output what the resulting file structure will look like:
```
npx destiny "src/**/*.*"
```
This will actually move files around and fix imports:
```
npx destiny -w "src/**/*.*"
```

## This tool might be useless

It might be better to just name your folders.

## Why did you name it destiny?

![The name could be "Destiny" maybe. Like the file was meant to be there.](https://github.com/benawad/destiny/blob/master/assets/name.png)

## Contributing

pull requests are welcome :)

## Badge

[![file structure: destiny](https://img.shields.io/badge/file%20structure-destiny-7a49ff?style=flat)](https://github.com/benawad/destiny)

```
[![file structure: destiny](https://img.shields.io/badge/file%20structure-destiny-7a49ff?style=flat)](https://github.com/benawad/destiny)
```
