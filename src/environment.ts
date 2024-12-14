import * as zod from 'zod';

const schema = zod.object({
	environment: zod.enum(['local', 'production']),
	version: zod.string().nonempty(),
});

console.log(process.env);

const env = schema.parse(process.env);

export default env;
