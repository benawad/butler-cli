# butler-cli

Prettier for File Structures

Video explanation: https://www.youtube.com/watch?v=rGYbrIf-y58

## What does this do?

1. Scans a folder for all the files in it
2. Creates a directed graph based on how the JavaScript/TypeScript files import each other
3. Creates a fractal representation of the graph
4. Moves existing files into the fractal structure
5. Fixes imports
6. Removes all empty folders
7. Prints files that are "unused" (not imported by anyone and doesn't import anything)

The end result is a "prettified" file structure.

## Disclaimer

- This is a work in progress and 100% has bugs of some kind in it
- BEFORE running this tool on your codebase, make sure you have commited to git or made a backup (I don't expect the tool to destroy your work (although it's possible), but just in case you don't like the results)
- Haven't tested this on Windows so idk if it'll work, but I'm using the `path` module so it might.
- Snapshot tests don't format correctly

## How to run it

```
npx butler-cli path/to/src
```

## This tool might be useless

It might be better to just name your folders.

## Contributing

pull requests are welcome :)
