import { z } from "zod";
import { productSchema } from "./product.schema";

export const productOrderSchema = z.object({
  productId: z.string(),
  product: productSchema,
  size: z.string(),
  color: z.string(),
  count: z.number().positive(),
});
