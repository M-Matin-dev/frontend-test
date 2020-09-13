import {IModuleVars, ModuleNames} from '../models/general';

export const MODULE_CONSTANTS: Readonly<Partial<Record<ModuleNames, IModuleVars>>> = Object.freeze({
  [ModuleNames.Post]: {
    basePath: 'posts',
    storeName: 'posts',
  }
});
