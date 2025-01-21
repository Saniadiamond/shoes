import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Menu.css'

function Menu() {
  // State for banner messages
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerMessages = [
    "Members: Free Shipping on Orders $50+",
    "New Arrivals: Check out latest Jordan collection",
    "Special Offer: 20% off on selected items"
  ];

  // State for filters and sorting
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState('newest');
  const [pickupOnly, setPickupOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Banner navigation
  const nextBanner = () => {
    setCurrentBannerIndex((prev) => (prev + 1) % bannerMessages.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prev) => 
      prev === 0 ? bannerMessages.length - 1 : prev - 1
    );
  };

  // Sorting options
  const sortOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low-High' },
    { value: 'price-desc', label: 'Price: High-Low' },
    { value: 'featured', label: 'Featured' }
  ];

  // Categories with counts
  const categories = [
    { name: 'Shoes', count: 458 },
    { name: 'Tops & T-Shirts', count: 223 },
    { name: 'Shorts', count: 124 },
    { name: 'Sports Bras', count: 89 },
    { name: 'Hoodies & Pullovers', count: 167 },
    { name: 'Jackets & Vests', count: 92 },
    { name: 'Pants & Tights', count: 145 },
    { name: 'Compression & Baselayer', count: 78 }
  ];

  // Toggle sort dropdown
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <div className="menu-container">
      <div className="top-banner">
        <button className="banner-nav prev" onClick={prevBanner}>‹</button>
        <motion.span 
          key={currentBannerIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="banner-text"
        >
          {bannerMessages[currentBannerIndex]}
        </motion.span>
        <button className="banner-nav next" onClick={nextBanner}>›</button>
      </div>

      <div className="menu-content">
        <div className="Mheader">
          <h1>Our Products (1227)</h1>
          <div className="Mheader-controls">
            <button 
              className="filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'} <span>⚡</span>
            </button>
            <div className="sort-container">
              <button 
                className="sort-btn"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                Sort By: {sortOptions.find(opt => opt.value === sortBy)?.label} <span>▼</span>
              </button>
              {showSortDropdown && (
                <motion.div 
                  className="sort-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {sortOptions.map(option => (
                    <div 
                      key={option.value}
                      className="sort-option"
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="content-layout">
          {showFilters && (
            <motion.aside 
              className="sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="pickup-toggle">
                <span>Pick Up Today</span>
                <label className="switch">
                  <input 
                    type="checkbox"
                    checked={pickupOnly}
                    onChange={(e) => setPickupOnly(e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <nav className="category-nav">
                <ul>
                  {categories.map(category => (
                    <motion.li 
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={selectedCategory === category.name ? 'active' : ''}
                      whileHover={{ x: 5 }}
                    >
                      {category.name} ({category.count})
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          )}

          <main className={`product-grid ${!showFilters ? 'full-width' : ''}`}>
            <motion.div 
              className="product-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/Image/1 shoe.png" alt="Tatum 3" />
              <div className="product-info">
                <span className="tag">Just In</span>
                <h3>Tatum 3</h3>
                <p className="price">$120.00</p>
              </div>
            </motion.div>

            <motion.div 
              className="product-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/Image/2 shoe.png" alt="Air Jordan 3 Retro Black Cat" />
              <div className="product-info">
                <span className="tag">Just In</span>
                <h3>Air Jordan 3 Retro "Black Cat"</h3>
                <p className="price">$200.00</p>
              </div>
            </motion.div>

            <motion.div 
              className="product-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/Image/3 shoe.png" alt="Jordan 3 Retro Black Cat" />
              <div className="product-info">
                <span className="tag">Just In</span>
                <h3>Jordan 3 Retro "Black Cat"</h3>
                <p className="price">$190.00</p>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Menu
