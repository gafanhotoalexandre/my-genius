'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { OpenAI } from 'openai'
import axios from 'axios'

import { Heading } from '@/components/Heading'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Empty } from '@/components/Empty'
import { Loader } from '@/components/Loader'

import { ConversationValidation } from '@/lib/validations/conversation'
import { cn } from '@/lib/utils'

export default function ConversationPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessage[]>(
    [],
  )

  const form = useForm({
    resolver: zodResolver(ConversationValidation),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  async function onSubmit(values: z.infer<typeof ConversationValidation>) {
    try {
      const userMessage: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [{ role: 'user', content: values.prompt }],
        model: 'gpt-3.5-turbo',
      }
      const newMessages = [...messages, userMessage.messages[0]]

      const response = await axios.post('/api/conversation', {
        messages: newMessages,
      })

      setMessages((current) => [
        ...current,
        userMessage.messages[0],
        response.data,
      ])

      form.reset()
    } catch (error) {
      // TODO: Open Pro Modal
      console.log(error)
    } finally {
      router.refresh()
    }
    console.log(values)
  }

  return (
    <div>
      <Heading
        title="Conversação"
        description="Nosso modelo de conversação mais sofisticado."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <section className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full py-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Como eu posso calcular o raio de um círculo?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Gerar
              </Button>
            </form>
          </Form>
        </div>

        <section className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          {messages.length === 0 && !isLoading && (
            <Empty label="Nenhuma conversa iniciada." />
          )}

          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  'p-8 w-full flex items-start gap-x-8 rounded-lg',
                  message.role === 'assistant'
                    ? 'bg-muted'
                    : 'bg-white border border-black/10',
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
