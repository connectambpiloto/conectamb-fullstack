import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, CheckCircle, AlertCircle, Info } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Proposta Aceita!',
    message: 'Sua proposta para o projeto de Licenciamento foi aceita.',
    time: '2 min atrás'
  },
  {
    id: 2,
    type: 'info',
    title: 'Novo Projeto Disponível',
    message: 'Um projeto de CAR está disponível na sua área.',
    time: '5 min atrás'
  },
  {
    id: 3,
    type: 'warning',
    title: 'Prazo Próximo',
    message: 'O projeto "Análise de Solo" vence em 2 dias.',
    time: '10 min atrás'
  }
]

export default function FloatingNotifications() {
  const [isOpen, setIsOpen] = useState(false)
  const [notificationList, setNotificationList] = useState(notifications)
  const [unreadCount, setUnreadCount] = useState(notifications.length)

  const removeNotification = (id) => {
    setNotificationList(prev => prev.filter(notif => notif.id !== id))
    setUnreadCount(prev => Math.max(0, prev - 1))
  }

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return CheckCircle
      case 'warning':
        return AlertCircle
      default:
        return Info
    }
  }

  const getColors = (type) => {
    switch (type) {
      case 'success':
        return {
          bg: 'from-emerald-500 to-emerald-600',
          text: 'text-emerald-600',
          bgLight: 'bg-emerald-50'
        }
      case 'warning':
        return {
          bg: 'from-amber-500 to-amber-600',
          text: 'text-amber-600',
          bgLight: 'bg-amber-50'
        }
      default:
        return {
          bg: 'from-blue-500 to-blue-600',
          text: 'text-blue-600',
          bgLight: 'bg-blue-50'
        }
    }
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Notification Bell */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bell className="h-6 w-6 text-slate-600" />
        
        {unreadCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold"
          >
            {unreadCount}
          </motion.div>
        )}
      </motion.button>

      {/* Notifications Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Notificações</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-96 overflow-y-auto">
              {notificationList.length > 0 ? (
                <div className="p-2">
                  {notificationList.map((notification, index) => {
                    const Icon = getIcon(notification.type)
                    const colors = getColors(notification.type)
                    
                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${colors.bgLight}`}>
                            <Icon className={`h-4 w-4 ${colors.text}`} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 text-sm">
                              {notification.title}
                            </h4>
                            <p className="text-sm text-slate-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-slate-400 mt-2">
                              {notification.time}
                            </p>
                          </div>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              removeNotification(notification.id)
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-200 rounded-lg transition-all"
                          >
                            <X className="h-3 w-3 text-slate-400" />
                          </button>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Bell className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-500">Nenhuma notificação</p>
                </div>
              )}
            </div>

            {/* Footer */}
            {notificationList.length > 0 && (
              <div className="p-3 border-t border-slate-100 bg-slate-50">
                <button
                  onClick={() => {
                    setNotificationList([])
                    setUnreadCount(0)
                  }}
                  className="w-full text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Marcar todas como lidas
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
