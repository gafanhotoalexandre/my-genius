import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div>
      <p>DashboardPage</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
