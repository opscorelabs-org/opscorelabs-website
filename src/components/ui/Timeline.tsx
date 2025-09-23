import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: readonly string[];
  features: readonly string[];
}

interface TimelineProps {
  items: readonly TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={cn('relative', className)}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-glow-primary via-glow-secondary to-glow-accent" />
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start space-x-8"
          >
            {/* Timeline Node */}
            <div className="relative z-10 flex-shrink-0">
              <motion.div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold glass-glow bg-gradient-to-br from-glow-primary/20 to-glow-secondary/20 border-2 border-glow-primary/50"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>
            </div>
            
            {/* Content Card */}
            <div className="flex-1 glass-card p-8 rounded-lg">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gradient mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-glow-primary mb-4">
                  Technologies & Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-glow-primary/15 text-glow-primary text-sm rounded-lg border border-glow-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-glow-secondary mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 text-text-secondary"
                    >
                      <div className="w-2 h-2 bg-glow-secondary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
