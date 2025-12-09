import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Search, 
  FolderOpen, 
  MessageSquare, 
  FileText, 
  User, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Briefcase
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Briefcase, label: 'Solicitar Serviço' },
  { icon: Search, label: 'Buscar Profissionais' },
  { icon: FolderOpen, label: 'Meus Projetos' },
  { icon: MessageSquare, label: 'Minhas Demandas' },
  { icon: FileText, label: 'Candidaturas Recebidas' },
  { icon: User, label: 'Meu Perfil' },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <motion.div 
      className={`relative h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 shadow-2xl ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
      animate={{ width: isCollapsed ? 80 : 288 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 border border-slate-600 shadow-lg hover:bg-slate-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3 text-slate-300" />
        ) : (
          <ChevronLeft className="h-3 w-3 text-slate-300" />
        )}
      </motion.button>

      {/* Logo Section */}
      <div className="p-6 border-b border-slate-700/50">
        <motion.div 
          className="flex items-center space-x-3"
          animate={{ justifyContent: isCollapsed ? 'center' : 'flex-start' }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  ConectAmb
                </h1>
                <p className="text-xs text-slate-400">Marketplace Ambiental</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            onHoverStart={() => setHoveredItem(index)}
            onHoverEnd={() => setHoveredItem(null)}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={`relative flex items-center space-x-3 rounded-xl px-3 py-3 cursor-pointer transition-all duration-200 ${
                item.active
                  ? 'bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 shadow-lg border border-blue-500/20'
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              {/* Active indicator */}
              {item.active && (
                <motion.div
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-r-full"
                  layoutId="activeIndicator"
                />
              )}
              
              {/* Hover glow effect */}
              {hoveredItem === index && !item.active && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              <item.icon className={`h-5 w-5 ${item.active ? 'text-blue-400' : ''}`} />
              
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <AnimatePresence>
                  {hoveredItem === index && (
                    <motion.div
                      initial={{ opacity: 0, x: -10, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -10, scale: 0.8 }}
                      className="absolute left-16 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-xl border border-slate-600 z-50 whitespace-nowrap"
                    >
                      {item.label}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-600 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="absolute bottom-6 left-4 right-4">
        <motion.button
          className="flex w-full items-center space-x-3 rounded-xl px-3 py-3 text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 border border-transparent hover:border-red-500/20"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="h-5 w-5" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-medium"
              >
                Sair
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  )
}
