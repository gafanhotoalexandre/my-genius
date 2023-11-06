import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="m-5 text-2xl">
      LandingPage &#40;Unprotected&#41;
      <div className="mt-3 space-x-5">
        <Link href="/sign-in">
          <Button>Entrar</Button>
        </Link>

        <Link href="/sign-up">
          <Button>Cadastrar</Button>
        </Link>
      </div>
    </div>
  )
}
