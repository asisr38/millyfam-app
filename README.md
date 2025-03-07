# MillyFam - Official Website

This is the official website for MillyFam, built with Next.js 15 and modern web technologies. The website includes information about services, pricing, team members, and contact information.

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Dark/Light Mode**: Theme switching with system preference detection
- **Interactive UI**: Modern animations and interactive elements using Framer Motion
- **Contact Form**: Server-side email functionality with Nodemailer
- **Sections**: Hero, Pricing, Win Showcase, Team, FAQ, and Contact sections
- **Optimized Performance**: Fast loading with Next.js App Router

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom configuration
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/) primitives
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod) validation
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **Email**: [Nodemailer](https://nodemailer.com/) for server-side email sending
- **Analytics**: Vercel Analytics and Speed Insights
- **Icons**: Lucide React and Tabler Icons

## 📁 Project Structure

```
millyfam-app/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── contact/          # Contact form API
│   ├── components/           # Page-specific components
│   │   ├── About.tsx         # About section
│   │   ├── Contact.tsx       # Contact form section
│   │   ├── FAQ.tsx           # FAQ accordion section
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero/banner section
│   │   ├── Pricing.tsx       # Pricing section
│   │   ├── SocialLinks.tsx   # Social media links
│   │   ├── TeamSection.tsx   # Team members display
│   │   └── WinShowcase.tsx   # Success stories showcase
│   ├── email-templates/      # Email templates
│   │   ├── confirmation-template.ts  # User confirmation emails
│   │   └── notification-template.ts  # Admin notification emails
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Home page
├── components/               # Shared components
│   └── ui/                   # UI components (buttons, forms, etc.)
├── hooks/                    # Custom React hooks
│   └── useMediaQuery.ts      # Media query hook for responsive design
├── lib/                      # Utility functions
│   └── utils.ts              # Utility functions
├── public/                   # Static assets (images, fonts)
│   └── logo/                 # Logo images
└── styles/                   # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/millyfam-app.git
   cd millyfam-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # Email Configuration
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-specific-password
   
   # Contact Form Settings
   RECIPIENT_EMAIL=recipient@example.com
   CC_EMAIL=optional-cc@example.com
   BCC_EMAIL=optional-bcc@example.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Configuration

The contact form uses Nodemailer with Gmail SMTP for sending emails. To set this up:

1. Create an App Password in your Google Account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled
   - Create an App Password for "Mail" and "Other (Custom name)"
   - Use this password as your `SMTP_PASS` in the `.env.local` file

2. Configure recipients:
   - `RECIPIENT_EMAIL`: Main recipient of contact form submissions
   - `CC_EMAIL`: Optional carbon copy recipient(s)
   - `BCC_EMAIL`: Optional blind carbon copy recipient(s)

## 🎨 Customization

### Themes

The website supports light and dark themes. The theme toggle is implemented using `next-themes`. You can customize theme colors in:
- `tailwind.config.ts` - For Tailwind colors
- `app/globals.css` - For CSS variables

### Components

UI components are built with a combination of Radix UI primitives and custom styling. Most components follow a simple pattern:
- Radix UI for accessibility and functionality
- Tailwind CSS for styling
- Optional Framer Motion for animations

## 🚢 Deployment

The site is deployed on Vercel. To deploy your own instance:

1. Push your code to a GitHub repository
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables in the Vercel project settings
4. Deploy!

## 📝 License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## 👥 Contact

For any inquiries, please contact us through the website's contact form or at [contact@millyfam.com](mailto:contact@millyfam.com).
