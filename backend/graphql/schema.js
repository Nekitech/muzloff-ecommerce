import {buildSchema} from "graphql/utilities/index.js"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'

const pathScheme = (pathScheme) => dirname(fileURLToPath(import.meta.url)) + `\\${pathScheme}`;

export const schema = buildSchema(fs.readFileSync(pathScheme('entity.graphql'), {encoding: 'utf8'}))