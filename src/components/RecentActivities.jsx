import { motion } from 'framer-motion'
import { Clock, FileText, MessageSquare, User, Briefcase, Star } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'project',
    icon: Briefcase,
    title: 'Novo projeto criado',
    description: 'Licenciamento Ambiental para Indústria XYZ',
    time: '2 horas atrás',
    color: 'blue'
  },
  {
    id: 2,
    type: 'proposal',
    icon: FileText,
    title: 'Proposta recebida',
    description: 'João Silva enviou uma proposta para seu projeto',
    time: '4 horas atrás',
    color: 'emerald'
  },
  {
    id: 3,
    type: 'message',
    icon: MessageSquare,
    title: 'Nova mensagem',
    description: 'Consultor respondeu sua dúvida sobre CAR',
    time: '1 dia atrás',
    color: 'purple'
  },
  {
    id: 4,
    type: 'review',
    icon: Star,
    title: 'Avaliação recebida',
    description: 'Cliente avaliou seu trabalho com 5 estrelas',
    time: '2 dias atrás',
    color: 'amber'
  }
]

export default function RecentActivities() {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.div 
            className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <Clock className="h-6 w-6 text-slate-600" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Atividades Recentes</h2>
            <p className="text-slate-600">Acompanhe suas últimas interações</p>
          </div>
        </div>
      </div>

      {/* Activities List */}
      {activities.length > 0 ? (
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="group relative flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 cursor-pointer"
            >
              {/* Timeline line */}
              {index < activities.length - 1 && (
                <div className="absolute left-8 top-16 w-px h-12 bg-gradient-to-b from-slate-200 to-transparent" />
              )}

              {/* Icon */}
              <motion.div 
                className={`relative flex-shrink-0 p-3 bg-gradient-to-br ${colorClasses[activity.color]} rounded-xl shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <activity.icon className="h-5 w-5 text-white" />
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[activity.color]} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </motion.div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <motion.h3 
                      className="font-semibold text-slate-900 group-hover:text-slate-700 transition-colors"
                      layoutId={`title-${activity.id}`}
                    >
                      {activity.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-slate-600 mt-1 group-hover:text-slate-500 transition-colors"
                      layoutId={`description-${activity.id}`}
                    >
                      {activity.description}
                    </motion.p>
                  </div>
                  
                  <motion.span 
                    className="text-xs text-slate-400 whitespace-nowrap ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    {activity.time}
                  </motion.span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
            <Clock className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">Nenhuma atividade recente</h3>
          <p className="text-slate-600">Suas atividades aparecerão aqui quando você começar a usar a plataforma.</p>
        </motion.div>
      )}

      {/* View All Button */}
      {activities.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-300"
          >
            Ver todas as atividades
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}
