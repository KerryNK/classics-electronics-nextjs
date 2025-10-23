import Link from 'next/link'
import Image from 'next/image'
import products from '@/data/products.json'
import categories from '@/data/categories.json'

export default function Home() {
  const featuredProducts = products.filter(product => product.featured)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] py-12">
            <div>
              <div className="inline-flex items-center bg-primary-500 bg-opacity-20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🔥 Hot Deals Available</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Quality Electronics at 
                <span className="text-primary-200"> Unbeatable Prices</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed">
                Shop the latest smartphones, laptops, TVs & electronics in Eldoret. 
                Samsung, Tecno, HP & more with genuine warranty and fast delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products"
                  className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Shop Now
                </Link>
                <a
                  href="https://wa.me/254799245140?text=Hi, I'm interested in your products from Classics Electronics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                  </svg>
                  WhatsApp Order
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-primary-200">Happy Customers</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-primary-200">WhatsApp Support</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">Same Day</div>
                    <div className="text-sm text-primary-200">Delivery</div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">7 Days</div>
                    <div className="text-sm text-primary-200">Return Policy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.name}`}
                className="group bg-gradient-to-br from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 p-6 rounded-xl shadow-card hover:shadow-soft transition-all duration-300 text-center border border-primary-200"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{category.description}</p>
                <div className="mt-4 text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Browse Products →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Hand-picked deals you don't want to miss</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-soft transition-all duration-300 group border border-gray-100">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
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
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
              </svg>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Local Trust Banner */}
      <section className="bg-primary-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                📍 Located in Eldoret - Walk-in Showroom Available
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span>💳 M-Pesa • Card • Cash on Delivery</span>
              <span>🚚 Delivery across Kenya</span>
              <a href="https://wa.me/254799245140" className="bg-accent hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition-colors">
                WhatsApp: +254 799 245 140
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Classics Electronics?</h2>
            <div className="inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ⭐ 15+ Happy Customers This Week • 4.8/5 Rating
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-card transition-shadow">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-semibold text-gray-900 mb-2">Physical Store in Eldoret</h3>
              <p className="text-gray-600 text-sm">Visit our showroom at Eldoret town center. See, touch, and test products before buying.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-card transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible Payment Options</h3>
              <p className="text-gray-600 text-sm">M-Pesa, Airtel Money, bank transfer, cash on delivery - choose what works for you.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-card transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Local Delivery</h3>
              <p className="text-gray-600 text-sm">Same-day delivery within Eldoret (KSh 200), next-day to Nakuru, Kisumu, Nairobi.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-card transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Genuine Warranty</h3>
              <p className="text-gray-600 text-sm">All products come with manufacturer warranty, 7-day returns, and our technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real reviews from satisfied customers in Eldoret and beyond</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-card border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 mb-4">"Bought a Samsung phone from Classics Electronics. Great price, genuine product, and fast delivery to my home in Eldoret. Highly recommend!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">MK</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Mary K.</p>
                  <p className="text-sm text-gray-600">Eldoret Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-card border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 mb-4">"Excellent service! Visited their store, tested the laptop, and got a great deal. The staff is knowledgeable and helpful."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">JM</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">John M.</p>
                  <p className="text-sm text-gray-600">University Student</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-card border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="ml-2 text-sm text-gray-600">5/5</span>
              </div>
              <p className="text-gray-700 mb-4">"Fast WhatsApp response, competitive prices, and genuine products. My go-to electronics store in Eldoret!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">SK</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah K.</p>
                  <p className="text-sm text-gray-600">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get instant quotes, check availability, or place your order via WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254799245140?text=Hi, I'm ready to shop at Classics Electronics!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
              </svg>
              Order via WhatsApp
            </a>
            <a
              href="tel:+254799245140"
              className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +254 799 245 140
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            💬 Fast response guaranteed • 🏪 Visit our Eldoret store • 🚚 Free delivery on orders over KSh 20,000
          </p>
        </div>
      </section>
    </div>
  )
}
