'use client'

import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { dashboardTools } from '@/constants'

export function DashboardTools() {
  const router = useRouter()
  return (
    <>
      {dashboardTools.map((tool) => (
        <Card
          key={tool.href}
          onClick={() => router.push(tool.href)}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
        >
          <section className="flex items-center gap-x-4">
            <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
              <tool.icon className={cn('w-6 h-6', tool.color)} />
            </div>

            <div className="font-semibold">{tool.label}</div>
          </section>

          <ArrowRight className="w-5 h-5" />
        </Card>
      ))}
    </>
  )
}
