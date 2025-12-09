import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  trendValue, 
  color = 'blue',
  delay = 0 
}) {
  const colorClasses = {
    blue: {
      bg: 'from-blue-500/10 to-blue-600/5',
      border: 'border-blue-500/20',
      icon: 'text-blue-500',
      accent: 'bg-blue-500/10'
    },
    emerald: {
      bg: 'from-emerald-500/10 to-emerald-600/5',
      border: 'border-emerald-500/20',
      icon: 'text-emerald-500',
      accent: 'bg-emerald-500/10'
    },
    amber: {
      bg: 'from-amber-500/10 to-amber-600/5',
      border: 'border-amber-500/20',
      icon: 'text-amber-500',
      accent: 'bg-amber-500/10'
    },
    purple: {
      bg: 'from-purple-500/10 to-purple-600/5',
      border: 'border-purple-500/20',
      icon: 'text-purple-500',
      accent: 'bg-purple-500/10'
    }
  }

  const colors = colorClasses[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className={`relative bg-white/80 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${colors.accent}`}>
            <Icon className={`h-6 w-6 ${colors.icon}`} />
          </div>
          
          {trend && (
            <motion.div 
              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                trend === 'up' 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'bg-red-100 text-red-700'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.3 }}
            >
              {trend === 'up' ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              <span>{trendValue}</span>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <motion.h3 
            className="text-sm font-medium text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.div 
            className="text-3xl font-bold text-slate-900"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: delay + 0.2,
              type: "spring",
              stiffness: 200
            }}
          >
            {value}
          </motion.div>
          
          {subtitle && (
            <motion.p 
              className="text-sm text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}
