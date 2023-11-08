import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    if (!userId) {
      return new NextResponse('Não autorizado', { status: 401 })
    }

    if (!openai.apiKey) {
      return new NextResponse('Chave de API da OPENAI não foi configurada.', {
        status: 500,
      })
    }

    if (!messages) {
      return new NextResponse('As mensagens são requeridas.', { status: 400 })
    }

    const reponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    })

    return NextResponse.json(reponse.choices[0].message)
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
