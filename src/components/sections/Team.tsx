import React from 'react';
import { motion } from 'framer-motion';
import { Card, GlowEffect, Button } from '@/components/ui';
import { TEAM_PLACEHOLDERS } from '@/utils/constants';
import { useIntersectionObserver } from '@/hooks';

export const Team: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id="team"
      ref={ref}
      className="section-padding relative"
    >
      
      <div className="container-custom relative z-30">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            Our talented team of experts is ready to bring your vision to life with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          {TEAM_PLACEHOLDERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlowEffect intensity="medium">
                <Card className="text-center group">
                  {/* Avatar */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-32 h-32 mx-auto glass-glow rounded-lg flex items-center justify-center text-4xl font-bold text-bg-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute inset-0 rounded-lg border-2 border-glow-primary/30 group-hover:border-glow-primary transition-colors duration-300" />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-glow-primary transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <div className="text-glow-primary font-semibold mb-4">
                    {member.role}
                  </div>

                  {/* Bio */}
                  <p className="text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links Placeholder */}
                  <div className="flex justify-center space-x-4 mt-6 relative z-40">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('LinkedIn clicked');
                      }}
                      className="w-10 h-10 glass-light rounded-lg flex items-center justify-center text-text-secondary hover:text-glow-primary hover:bg-glow-primary/10 transition-all duration-300 cursor-pointer relative z-50"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="text-sm">in</span>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('GitHub clicked');
                      }}
                      className="w-10 h-10 glass-light rounded-lg flex items-center justify-center text-text-secondary hover:text-glow-primary hover:bg-glow-primary/10 transition-all duration-300 cursor-pointer relative z-50"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="text-sm">gh</span>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log('Twitter clicked');
                      }}
                      className="w-10 h-10 glass-light rounded-lg flex items-center justify-center text-text-secondary hover:text-glow-primary hover:bg-glow-primary/10 transition-all duration-300 cursor-pointer relative z-50"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="text-sm">tw</span>
                    </a>
                  </div>
                </Card>
              </GlowEffect>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-text-secondary mb-6">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Get In Touch clicked');
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="secondary"
              size="lg"
              className="relative z-50 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
