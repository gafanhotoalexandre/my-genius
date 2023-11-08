import { useUser } from '@clerk/nextjs'

export function UserAvatar() {
  const { user } = useUser()
  return <div>{user?.fullName}</div>
}
