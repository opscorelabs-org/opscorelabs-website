import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/utils/constants';
import { Logo } from '@/components/ui';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-dark border-t border-bg-tertiary">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Logo size="sm" />
              <span className="text-xl font-bold text-gradient">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-text-secondary mb-4">
              {SITE_CONFIG.description}
            </p>
            <p className="text-text-muted text-sm">
              © {currentYear} {SITE_CONFIG.fullName}. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-glow-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <p className="text-text-secondary">
                <span className="text-text-muted">Email:</span>{' '}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-glow-primary transition-colors duration-300"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p className="text-text-secondary">
                <span className="text-text-muted">Company:</span>{' '}
                {SITE_CONFIG.fullName}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-8 pt-8 border-t border-bg-tertiary text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-text-muted text-sm">
            © {currentYear} {SITE_CONFIG.fullName}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
