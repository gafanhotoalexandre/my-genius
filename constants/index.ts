import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from 'lucide-react'

export const sidebarRoutes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversação',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Geração de Imagens',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
  },
  {
    label: 'Geração de Vídeos',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
  },
  {
    label: 'Geração de Músicas',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Geração de Código',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
  },
  {
    label: 'Configurações',
    icon: Settings,
    href: '/settings',
  },
]
