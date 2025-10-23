'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import products from '@/data/products.json'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]
  const brands = ['All', ...Array.from(new Set(products.map(p => p.name.split(' ')[0])))]
  const priceRanges = [
    'All',
    'Under KSh 5,000',
    'KSh 5,000 - KSh 15,000', 
    'KSh 15,000 - KSh 30,000',
    'KSh 30,000 - KSh 50,000',
    'Above KSh 50,000'
  ]

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      
      const productBrand = product.name.split(' ')[0]
      const matchesBrand = selectedBrand === 'All' || productBrand === selectedBrand
      
      let matchesPrice = true
      if (priceRange !== 'All') {
        switch (priceRange) {
          case 'Under KSh 5,000':
            matchesPrice = product.price < 5000
            break
          case 'KSh 5,000 - KSh 15,000':
            matchesPrice = product.price >= 5000 && product.price <= 15000
            break
          case 'KSh 15,000 - KSh 30,000':
            matchesPrice = product.price >= 15000 && product.price <= 30000
            break
          case 'KSh 30,000 - KSh 50,000':
            matchesPrice = product.price >= 30000 && product.price <= 50000
            break
          case 'Above KSh 50,000':
            matchesPrice = product.price > 50000
            break
        }
      }
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice
    })

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'newest':
          return b.id - a.id
        case 'featured':
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return a.name.localeCompare(b.name)
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })
  }, [searchTerm, selectedCategory, selectedBrand, priceRange, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 text-lg">Discover our wide range of quality electronics</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-card p-6 mb-8 border border-gray-100">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for smartphones, laptops, TVs, accessories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
                <option value="name">Name A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Results Count & Clear */}
            <div className="flex flex-col justify-end">
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">{filteredAndSortedProducts.length}</span> of {products.length} products
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setSelectedBrand('All')
                  setPriceRange('All')
                  setSortBy('featured')
                }}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-soft transition-all duration-300 group border border-gray-100">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      ✓ In Stock
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary-600">
                        KSh {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          KSh {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.674-2.64" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setSelectedBrand('All')
                  setPriceRange('All')
                  setSortBy('featured')
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
