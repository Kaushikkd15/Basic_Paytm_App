import zod from 'zod';

export const userAuth= zod.object({
    userName: zod.string().email(),
    firstName : zod.string(),
    lastName  : zod.string(),
    password  : zod.string()
});
