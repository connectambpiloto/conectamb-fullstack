import { motion } from 'framer-motion'
import { 
  FolderOpen, 
  Clock, 
  Star, 
  TrendingUp,
  Users,
  Briefcase,
  MessageSquare
} from 'lucide-react'
import Sidebar from './components/Sidebar'
import StatsCard from './components/StatsCard'
import SubscriptionPlan from './components/SubscriptionPlan'
import RecentActivities from './components/RecentActivities'
import FloatingNotifications from './components/FloatingNotifications'
import './App.css'

function App() {
  const statsData = [
    {
      title: 'Projetos Ativos',
      value: '0',
      subtitle: 'Em andamento',
      icon: FolderOpen,
      color: 'blue',
      trend: null,
      delay: 0.1
    },
    {
      title: 'Orçamentos Pendentes',
      value: '1',
      subtitle: 'Aguardando profissionais',
      icon: Clock,
      color: 'amber',
      trend: 'up',
      trendValue: '+1',
      delay: 0.2
    },
    {
      title: 'Avaliações',
      value: '0.0',
      subtitle: '0 avaliação(ões)',
      icon: Star,
      color: 'emerald',
      trend: null,
      delay: 0.3
    },
    {
      title: 'Propostas Recebidas',
      value: '3',
      subtitle: 'Esta semana',
      icon: MessageSquare,
      color: 'purple',
      trend: 'up',
      trendValue: '+2',
      delay: 0.4
    }
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.05),transparent_50%)]" />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Floating Notifications */}
      <FloatingNotifications />
      
      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Header */}
        <motion.header 
          className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-slate-200/60 px-8 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <motion.h1 
                className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Dashboard
              </motion.h1>
              <motion.p 
                className="text-slate-600 mt-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Bem-vindo de volta! Aqui está um resumo das suas atividades.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">João Silva</p>
                <p className="text-xs text-slate-500">Consultor Ambiental</p>
              </div>
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="h-5 w-5 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.header>

        {/* Content */}
        <main className="p-8 space-y-8">
          {/* Subscription Plan */}
          <SubscriptionPlan />

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
          >
            {statsData.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </motion.div>

          {/* Recent Activities */}
          <RecentActivities />

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)]" />
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Explore nossa plataforma e conecte-se com os melhores profissionais ambientais do Brasil. 
                Crie seu primeiro projeto ou encontre oportunidades de trabalho.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Briefcase className="h-4 w-4 inline mr-2" />
                  Criar Projeto
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <Users className="h-4 w-4 inline mr-2" />
                  Buscar Profissionais
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default App
