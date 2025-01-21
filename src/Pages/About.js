import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = {
    'Returns': [
      { title: "What is Nike's return policy?", link: "#" },
      { title: "How do I return my Nike order?", link: "#" },
      { title: "Where is my refund?", link: "#" }
    ],
    'Shipping & Delivery': [
      { title: "What are Nike's shipping options?", link: "#" },
      { title: "Can I buy online and pick up at a Nike store?", link: "#" },
      { title: "How do I get free shipping on Nike orders?", link: "#" }
    ],
    'Orders & Payment': [
      { title: "Where is my Nike order?", link: "#" },
      { title: "Can I cancel or change my Nike order?", link: "#" },
      { title: "What are Nike's payment options?", link: "#" }
    ],
    'Shopping': [
      { title: "How do I find the right size and fit?", link: "#" },
      { title: "How can I get Nike's best deals?", link: "#" },
      { title: "Does Nike offer product advice?", link: "#" }
    ],
    'Nike Membership & Apps': [
      { title: "What is Nike Membership?", link: "#" },
      { title: "What is Nike SNKRS Pass?", link: "#" },
      { title: "How can I join a SNKRS Draw?", link: "#" }
    ],
    'Company Info': [
      { title: "Do Nike shoes have a warranty?", link: "#" },
      { title: "Can I recycle my Nike shoes?", link: "#" },
      { title: "Does Nike offer grants or donations?", link: "#" }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <motion.div 
      className="help-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="help-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>GET HELP</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="What can we help you with?"
            value={searchQuery}
            onChange={handleSearch}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-search"></i>
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        className="sign-in-section"
        variants={itemVariants}
      >
        <h2>Get a personalized Help experience.</h2>
        <motion.button
          className="sign-in-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
        <p>Not a member, yet? <a href="#" className="join-link">Join Us</a></p>
      </motion.div>

      <motion.div 
        className="quick-assists"
        variants={itemVariants}
      >
        <h3>Quick Assists</h3>
        <p>Answers to our most frequently asked questions are just one click away.</p>
      </motion.div>

      <motion.div 
        className="categories-grid"
        variants={containerVariants}
      >
        {Object.entries(categories).map(([category, items], index) => (
          <motion.div
            key={category}
            className="category-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 onClick={() => handleCategoryClick(category)}>{category}</h3>
            <motion.div
              className="category-items"
              initial="collapsed"
              animate={selectedCategory === category ? "expanded" : "collapsed"}
              variants={{
                expanded: { height: "auto", opacity: 1 },
                collapsed: { height: 0, opacity: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {items.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.a>
              ))}
            </motion.div>
            <motion.button
              className="view-all-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="contact-section"
        variants={itemVariants}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <div className="contact-grid">
          <motion.div 
            className="contact-card"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          >
            <motion.div 
              className="icon-container"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="currentColor"/>
              </svg>
            </motion.div>
            <h3>Chat with us</h3>
            <p>Products & Orders: 4 am - 11 pm PT</p>
            <p>7 days a week</p>
            <motion.button
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Chat
            </motion.button>
          </motion.div>

          <motion.div 
            className="contact-card"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          >
            <motion.div 
              className="icon-container"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
              </svg>
            </motion.div>
            <h3>Call us</h3>
            <p className="phone-number">1-800-806-6453</p>
            <p>Products & Orders: 4 am - 11 pm PT, 7 days a week</p>
            <p>NRC, NTC & .SWOOSH: 8 am - 5 pm PT, Mon - Fri</p>
            <p>Company Info & Inquiries: 7 am - 4 pm PT, Mon - Fri</p>
            <motion.button
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.button>
          </motion.div>

          <motion.div 
            className="contact-card"
            whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
          >
            <motion.div 
              className="icon-container"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </motion.div>
            <h3>Find a Store</h3>
            <p>Locate your nearest Nike store</p>
            <motion.button
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Store
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;