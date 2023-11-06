import { MessageSquare } from 'lucide-react'
import { Heading } from '@/components/Heading'

export default function ConversationPage() {
  return (
    <div>
      <Heading
        title="Conversação"
        description="Nosso modelo de conversação mais sofisticado."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  )
}
