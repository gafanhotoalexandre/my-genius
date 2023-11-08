import { z } from 'zod'

export const ConversationValidation = z.object({
  prompt: z
    .string({
      required_error: 'Nada foi digitado no prompt.',
    })
    .min(1, 'O prompt deve ser preenchido.'),
})
