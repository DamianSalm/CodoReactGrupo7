import {z} from 'zod'

export const createItemSchema = z.object({
  iid: z.string({required_error: "iid is required"}),
  sku: z.string().optional(),
  name: z.string({required_error: "Name is required"}),
  description: z.string().optional(),
  img_front: z.string().optional(),
  img_back: z.string().optional(),
  category: z.string().optional(),
  licence: z.string().optional(),
  price: z.string().optional(),
  stock: z.string().optional(),
  discout: z.string().optional(),
  dues: z.string().optional(),
})

export const updateItemSchema = z.object({
  iid: z.string().optional(),
  sku: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  img_front: z.string().optional(),
  img_back: z.string().optional(),
  category: z.string().optional(),
  licence: z.string().optional(),
  price: z.string().optional(),
  stock: z.string().optional(),
  discout: z.string().optional(),
  dues: z.string().optional(),
})

