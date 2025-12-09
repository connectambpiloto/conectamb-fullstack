import { motion } from 'framer-motion'
import { Crown, Calendar, DollarSign, CheckCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SubscriptionPlan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 rounded-3xl p-8 border border-slate-200/60 shadow-xl overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.div 
            className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Crown className="h-6 w-6 text-white" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Plano de Assinatura</h2>
            <p className="text-slate-600">Gerencie sua conta e benefícios</p>
          </div>
        </div>
        
        <motion.div 
          className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center space-x-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <CheckCircle className="h-4 w-4" />
          <span>Ativo</span>
        </motion.div>
      </div>

      {/* Plan Details Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-sm font-medium text-slate-600">Plano Atual</p>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
            <span className="text-xl font-bold text-slate-900">Trial</span>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm font-medium text-slate-600">Valor Mensal</p>
          <div className="flex items-center space-x-1">
            <DollarSign className="h-5 w-5 text-emerald-600" />
            <span className="text-xl font-bold text-slate-900">R$ 0,00</span>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm font-medium text-slate-600">Status</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xl font-bold text-emerald-600">Ativo</span>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm font-medium text-slate-600">Próximo Pagamento</p>
          <div className="flex items-center space-x-1">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">13/10/2025</span>
          </div>
        </motion.div>
      </div>

      {/* Additional Info */}
      <motion.div 
        className="relative mb-8 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-200/50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-slate-700">Projetos Disponíveis:</span>
            <span className="ml-2 text-slate-600">Ilimitados</span>
          </div>
          <div>
            <span className="font-medium text-slate-700">Propostas Disponíveis:</span>
            <span className="ml-2 text-slate-600">Ilimitadas</span>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="relative flex flex-col sm:flex-row gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            <Crown className="h-4 w-4 mr-2" />
            Gerenciar Assinatura
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Button 
            variant="outline" 
            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            <X className="h-4 w-4 mr-2" />
            Cancelar Assinatura
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
    </motion.div>
  )
}
