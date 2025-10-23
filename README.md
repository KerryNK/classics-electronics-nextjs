# Classics Electronics - Next.js Store

A modern, responsive e-commerce website for Classics Electronics, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with mobile-first responsive design
- **Product Catalog**: Browse products by category with search and filtering
- **WhatsApp Integration**: Direct customer communication and order placement
- **Fast Performance**: Static site generation for optimal loading speeds
- **SEO Optimized**: Built-in SEO features for better search visibility
- **Easy Deployment**: One-click deployment to Netlify or Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image Optimization
- **Deployment**: Static Export (Netlify/Vercel ready)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd classics-electronics-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `out`
5. Deploy!

### Deploy to Vercel
```bash
npx vercel
```

## 📱 Pages

- **Home** (`/`) - Hero section, featured products, categories
- **Products** (`/products`) - Product listing with search and filters
- **Product Detail** (`/products/[id]`) - Individual product pages
- **About** (`/about`) - Company information and story
- **Contact** (`/contact`) - Contact form with WhatsApp integration

## 🎨 Customization

### Update Business Information
Edit the contact details in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`

### Add/Edit Products
Update `src/data/products.json` with your product information.

### Modify Categories
Update `src/data/categories.json` with your categories.

### Change Colors
Edit `tailwind.config.js` to customize the color scheme.

## 📞 WhatsApp Integration

The site includes WhatsApp integration for:
- Product inquiries
- Order placement
- Customer support
- Contact form submissions

Update the phone number in all WhatsApp links:
- Replace `254700000000` with your actual WhatsApp number
- Format: Country code + number (without + or spaces)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific settings:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
NEXT_PUBLIC_BUSINESS_EMAIL=info@classicselectronics.co.ke
```

## 📈 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data for products
- Sitemap generation
- Image optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, contact us at:
- WhatsApp: +254 700 000 000
- Email: info@classicselectronics.co.ke
- Location: Eldoret, Kenya
