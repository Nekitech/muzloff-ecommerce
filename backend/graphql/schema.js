import {buildSchema} from "graphql/utilities/index.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'

const pathScheme = dirname(fileURLToPath(import.meta.url)) + '\\user.graphql';

export const schema = buildSchema(fs.readFileSync(pathScheme, {encoding: 'utf8'}))