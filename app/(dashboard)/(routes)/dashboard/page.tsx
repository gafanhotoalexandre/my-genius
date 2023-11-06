import { DashboardTools } from '@/components/DashboardTools'

export default function DashboardPage() {
  return (
    <div>
      <section className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore o poder da IA
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Converse com a IA mais inteligente - Descubra o potencial da IA
        </p>
      </section>

      <section className="px-4 md:px-20 lg:px-32 space-y-4">
        <DashboardTools />
      </section>
    </div>
  )
}
