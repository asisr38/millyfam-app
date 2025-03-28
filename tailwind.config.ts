import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '375px',      // Small mobile
      sm: '640px',      // Mobile
      md: '768px',      // Tablet
      lg: '1024px',     // Desktop
      xl: '1280px',     // Large desktop
      '2xl': '1536px',  // Extra large desktop
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
      },
    },
  	extend: {
      fontSize: {
        '2xs': '0.625rem', // 10px
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
      },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'float': {
				'0%': {
					transform: 'translateY(0) rotate(0deg)',
					opacity: '0'
				},
				'10%': {
					opacity: 'var(--opacity, 0.3)'
				},
				'90%': {
					opacity: 'var(--opacity, 0.3)',
					transform: 'translateY(110vh) rotate(360deg)'
				},
				'100%': {
					transform: 'translateY(120vh) rotate(720deg)',
					opacity: '0'
				}
			},
      'pulse-slow': {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.8' },
      }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			  'float': 'float 10s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
  		},
  		backgroundImage: {
  			'grid-pattern': '',
  			'grid-pattern-light': ''
  		},
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '84': '21rem',
        '88': '22rem',
        '128': '32rem',
      },
      lineHeight: {
        'tighter': '1.1',
      },
  	}
  },
} satisfies Config;
