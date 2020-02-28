import chalk from "chalk";
import { cosmiconfigSync } from "cosmiconfig";

import getFilePaths from "./index/getFilePaths";
import logger from "./shared/logger";
import { formatFileStructure } from "./index/formatFileStructure";
import { version } from "../package.json";

const { argv } = process;

export type Options = {
  help: boolean;
  version: boolean;
};

const defaultOptions: Options = {
  help: false,
  version: false,
};

export const run = async (args: string[]) => {
  const config: Partial<Options> =
    cosmiconfigSync("destiny").search()?.config ?? {};
  const { options, paths } = parseArgs(args);

  const mergedOptions: Options = {
    ...defaultOptions,
    ...config,
    ...options,
  };

  if (mergedOptions.help) return printHelp(0);
  if (mergedOptions.version) return printVersion();
  if (paths.length === 0) return printHelp(1);

  logger.info("Resolving files.");

  const filesToRestructure = getFilePaths(paths);
  const filesToEdit = filesToRestructure.flat();

  if (filesToRestructure.length === 0) {
    logger.error("Could not find any files to restructure", 1);
    return;
  }

  await formatFileStructure(filesToRestructure, filesToEdit);
};

if (process.env.NODE_ENV !== "test") {
  run(argv.slice(2, argv.length));
}

type ParsedArgs = {
  options: {
    help: boolean;
    version: boolean;
    detectRoots: boolean;
  };
  paths: string[];
};

const defaultArgs: ParsedArgs = {
  options: {
    help: false,
    version: false,
    detectRoots: false,
  },
  paths: [],
};

function parseArgs(args: any[]): ParsedArgs {
  return args.reduce((acc, arg) => {
    switch (arg) {
      case "-h":
      case "--help":
        acc.options.help = true;
        break;
      case "-V":
      case "--version":
        acc.options.version = true;
        break;
      case "-dr":
      case "--detect-roots":
        acc.options.detectRoots = true;
        break;
      default:
        acc.paths.push(arg);
    }
    return acc;
  }, defaultArgs);
}

function printVersion() {
  return console.log("v" + version);
}

function printHelp(exitCode = 0) {
  console.log(
    chalk`{blue destiny} - Prettier for file structures.

{bold USAGE}

  {blue destiny} [option...] [{underline path}]

  The {underline path} argument can consist of either a {bold file path} or a {bold glob}.

{bold OPTIONS}

  -V, --version            output version number
  -h, --help               output usage information
  -dr, --detect-roots      structure after the first level
  `
  );

  return process.exit(exitCode);
}
