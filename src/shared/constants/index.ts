// ================================
// SHARED CONSTANTS
// ================================

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.VITE_API_BASE_URL || '/api',
  TIMEOUT: 10000,
}

// Application Constants
export const APP_NAME = 'Scandicart'
export const APP_VERSION = '1.0.0'

// Product Categories
export const CATEGORIES = [
  'All',
  'Fashion',
  'Electronics',
  'Home & Garden',
  'Jewelry',
  'Crafts',
  'Collectibles',
]

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
}

// Authentication
export const AUTH_CONFIG = {
  TOKEN_KEY: 'auth_token',
  USER_KEY: 'user',
  TOKEN_EXPIRY: '7d',
}

// Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme',
  WISHLIST: 'wishlist',
  USER: 'user',
  AUTH_TOKEN: 'auth_token',
}
