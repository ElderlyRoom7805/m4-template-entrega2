import { z } from "zod";

export const allSchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  pages: z.number().min(1),
  category: z.optional(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createSchemaBody = allSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const updateSchemaBody = allSchema.omit({ id: true, createdAt: true, updatedAt: true }).partial();