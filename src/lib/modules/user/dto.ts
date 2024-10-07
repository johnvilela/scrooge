import { z } from 'zod';

export const UserCreateSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type UserCreateDTO = z.infer<typeof UserCreateSchema>;
