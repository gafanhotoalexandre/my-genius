'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Montserrat } from 'next/font/google'

import { cn } from '@/lib/utils'
import { sidebarRoutes } from '@/constants'

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white">
      <section className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image
              fill
              src="/logo.png"
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="logo do Inspire"
            />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Inspire
          </h1>
        </Link>

        <section className="space-y-1">
          {sidebarRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                pathname === route.href
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400',
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    'h-5 w-5 mr-3 group-hover:scale-125 transition',
                    route.color,
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </section>
      </section>
    </div>
  )
}
