import * as zod from 'zod';

const schema = zod.object({
	environment: zod.enum(['local', 'production']),
	version: zod.string().nonempty(),
});

const env = schema.parse(process.env);

export default env;
