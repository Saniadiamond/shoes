import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import './Footer.css';

function Footer() {
  const [selectedRegion, setSelectedRegion] = useState('United States');
  const { theme } = useContext(ThemeContext);

  const footerLinks = {
    Resources: [
      { name: 'Gift Cards', url: '#' },
      { name: 'Find a Store', url: '#' },
      { name: 'Membership', url: '#' },
      { name: 'Nike Journal', url: '#' },
      { name: 'Site Feedback', url: '#' }
    ],
    Help: [
      { name: 'Get Help', url: '#' },
      { name: 'Order Status', url: '#' },
      { name: 'Shipping and Delivery', url: '#' },
      { name: 'Returns', url: '#' },
      { name: 'Order Cancellation', url: '#' },
      { name: 'Payment Options', url: '#' },
      { name: 'Gift Card Balance', url: '#' },
      { name: 'Contact Us', url: '#' }
    ],
    Company: [
      { name: 'About Nike', url: '#' },
      { name: 'News', url: '#' },
      { name: 'Careers', url: '#' },
      { name: 'Investors', url: '#' },
      { name: 'Purpose', url: '#' },
      { name: 'Sustainability', url: '#' }
    ],
    'Promotions & Discounts': [
      { name: 'Student', url: '#' },
      { name: 'Military', url: '#' },
      { name: 'Teacher', url: '#' },
      { name: 'First Responders & Medical Professionals', url: '#' },
      { name: 'Birthday', url: '#' }
    ]
  };

  const bottomLinks = [
    { name: 'Guides', url: '#', hasDropdown: true },
    { name: 'Terms of Sale', url: '#' },
    { name: 'Terms of Use', url: '#' },
    { name: 'Nike Privacy Policy', url: '#' },
    { name: 'Your Privacy Choices', url: '#', hasIcon: true },
    { name: 'CA Supply Chains Act', url: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer
      className={`footer ${theme}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="footer-content">
        <motion.div className="footer-links" variants={containerVariants}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div 
              key={category} 
              className="footer-column"
              variants={itemVariants}
            >
              <h3>{category}</h3>
              <ul>
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to={link.url}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="region-selector"
          variants={itemVariants}
        >
          <div className="globe-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" fill="currentColor"/>
            </svg>
          </div>
          <span>{selectedRegion}</span>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
      >
        <div className="copyright">
          {new Date().getFullYear()} Nike, Inc. All Rights Reserved
        </div>
        <div className="bottom-links">
          {bottomLinks.map((link, index) => (
            <motion.div
              key={index}
              className="bottom-link"
              whileHover={{ color: '#757575' }}
            >
              <Link to={link.url}>
                {link.name}
                {link.hasDropdown && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10L12 15L17 10H7Z" fill="currentColor"/>
                  </svg>
                )}
                {link.hasIcon && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  </svg>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
