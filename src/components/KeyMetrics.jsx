import { motion } from 'framer-motion';
import { itemVariants } from '../constants/animations';
import { getIcon } from '../utils/iconMap';
import portfolioData from '../data/portfolio.json';

export default function KeyMetrics({ side = 'left' }) {
  const metricsData = side === 'left' ? portfolioData.hero.metrics.left : portfolioData.hero.metrics.right;
  
  const metrics = metricsData.map(metric => ({
    ...metric,
    icon: getIcon(metric.icon)
  }));

  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col gap-4 md:gap-6"
    >
      {metrics.map((metric, index) => (
        <div 
          key={index}
          className="flex flex-col items-center text-center p-4 border border-black bg-white hover:bg-gray-50 transition-colors"
        >
          <metric.icon className="w-5 h-5 md:w-6 md:h-6 mb-2 text-black" strokeWidth={1.5} />
          <div className="font-['Manrope'] text-lg md:text-xl font-bold text-black mb-1">
            {metric.value}
          </div>
          <div className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-gray-500 leading-tight">
            {metric.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
