import { UserButton } from '@clerk/nextjs'

import { MobileSidebar } from '@/components/MobileSidebar'

export function Navbar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      <section className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </section>
    </div>
  )
}
