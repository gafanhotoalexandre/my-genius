import Image from 'next/image'

export function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="Logo do Inspire"
          src="/logo.png"
        />
      </div>

      <p className="text-sm text-muted-foreground">
        Uma fagulha de inspiração...
      </p>
    </div>
  )
}
