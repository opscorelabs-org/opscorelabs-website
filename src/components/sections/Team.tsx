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
            Core Team
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto px-4">
            Our talented team of experts is ready to bring your vision to life with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Team Grid - Fixed 3 columns with fixed height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto px-4">
          {[...TEAM_PLACEHOLDERS].sort(() => Math.random() - 0.5).map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-56"
            >
              <GlowEffect intensity="medium">
                <Card className="text-center group h-full flex flex-col">
                  {/* Avatar */}
                  <motion.div
                    className="relative mb-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full overflow-hidden shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log('Team photo failed to load for', member.name, 'from path:', member.image);
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                        onLoad={() => {
                          console.log('Team photo loaded successfully for', member.name);
                        }}
                      />
                      <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-bg-primary bg-glow-primary/20" style={{ display: 'none' }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xs sm:text-sm font-bold text-text-primary mb-0.5 group-hover:text-glow-primary transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <div className="text-glow-primary font-semibold mb-0.5 text-xs">
                    {member.role}
                  </div>

                  {/* Bio */}
                  <p className="text-text-secondary leading-tight flex-grow text-xs">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-1 mt-1 relative z-40">
                    <a
                      href={member.social?.linkedin || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!member.social?.linkedin) e.preventDefault();
                        console.log('LinkedIn clicked for', member.name);
                      }}
                      className="w-4 h-4 sm:w-5 sm:h-5 glass-light rounded-lg flex items-center justify-center text-text-secondary hover:text-glow-primary hover:bg-glow-primary/10 transition-all duration-300 cursor-pointer relative z-50"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="text-xs">in</span>
                    </a>
                    <a
                      href={member.social?.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!member.social?.github) e.preventDefault();
                        console.log('GitHub clicked for', member.name);
                      }}
                      className="w-4 h-4 sm:w-5 sm:h-5 glass-light rounded-lg flex items-center justify-center text-text-secondary hover:text-glow-primary hover:bg-glow-primary/10 transition-all duration-300 cursor-pointer relative z-50"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="text-xs">gh</span>
                    </a>
                    <a
                      href={member.social?.twitter || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!member.social?.twitter) e.preventDefault();
                        console.log('Twitter clicked for', member.name);
                      }}
                      className="w-4 h-4 sm:w-5 sm:h-5 glass-light rounded-lg flex items-center justify-center text-text-secondary hover:text-glow-primary hover:bg-glow-primary/10 transition-all duration-300 cursor-pointer relative z-50"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <span className="text-xs">tw</span>
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
