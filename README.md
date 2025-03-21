## Overview

StreamFlix is a modern Netflix clone built with Next.js, featuring a sleek UI, robust authentication, and seamless video streaming capabilities. This project demonstrates best practices in frontend development with React, TypeScript, and Tailwind CSS.

## Features

- **User Authentication**: Secure login/signup with NextAuth
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern UI**: Sleek, Netflix-inspired interface with fluid animations
- **Video Streaming**: Stream trailers and video content
- **Content Browsing**: Browse movies and shows by category
- **User Profiles**: Support for multiple user profiles
- **Search Functionality**: Find content quickly with the search feature
- **Watchlist Management**: Add/remove content to personal watchlists

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **Fonts**: Geist & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/boythedream/StreamFlix.git
   cd streamflix
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:

   ```
   # Create a .env.local file with the following:
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key

   # Add your API keys for movie data (if applicable)
   TMDB_API_KEY=your_tmdb_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── app/
│   ├── components/        # Reusable UI components
│   ├── api/               # API routes
│   └── pages/             # Page components
├── public/                # Static assets
├── styles/                # Global styles
├── lib/                   # Utility functions
└── types/                 # TypeScript types
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

```bash
npm install -g vercel
vercel
```

### Other Platforms

This application can also be deployed on any platform that supports Next.js applications, such as Netlify, AWS Amplify, or traditional hosting with a proper Node.js environment.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by Netflix's UI/UX
- Built with the amazing Next.js framework
- UI components powered by shadcn/ui
- Icons from Lucide React
