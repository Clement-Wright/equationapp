// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Equation, Note } = initSchema(schema);

export {
  Equation,
  Note
};