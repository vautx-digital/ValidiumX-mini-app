# Validium Mini App

## Overview
Validium Mini App is a web-based cryptocurrency application that provides users with a simple interface to interact with the Validium-X ecosystem. The app focuses on daily rewards, referrals, and promoting the VIX token.

## Features
- **World ID Authentication**: Secure user verification
- **Daily Rewards**: Claim 1 VIX token every 24 hours
- **Referral System**: Earn 50 VIX for each friend you invite
- **Promotional Content**: Information about upcoming Validium-X projects
- **Mobile-Friendly Design**: Optimized for all device sizes

## Deployment Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Vercel CLI (optional for Vercel deployment)

### Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/validium-mini-app.git
   cd validium-mini-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the app running locally.

### Deployment to Vercel

1. **Install Vercel CLI (if not already installed)**
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. **Login to Vercel**
   \`\`\`bash
   vercel login
   \`\`\`

3. **Deploy the app**
   \`\`\`bash
   vercel
   \`\`\`

4. **For production deployment**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Deployment to Other Platforms

The app is built with Next.js, so it can be deployed to any platform that supports Next.js applications:

- **Netlify**: Connect your GitHub repository and deploy
- **AWS Amplify**: Connect your repository and deploy
- **GitHub Pages**: Use the GitHub Actions workflow for deployment

## Configuration

### Environment Variables
No environment variables are required for basic functionality. For advanced features:

- `NEXT_PUBLIC_APP_URL`: Your app's public URL (for sharing)
- `WORLD_ID_APP_ID`: Your World ID App ID (for real World ID integration)

### Customization
- Update images in the `public/images` directory
- Modify styles in the HTML file for visual changes
- Update links and text content as needed

## File Structure
- `app/page.js` - Main entry point for the Next.js app
- `app/layout.js` - Root layout component
- `public/page.html` - The main HTML file containing the app
- `public/images/` - Directory containing all images used in the app

## Technical Details
- Built with Next.js
- Uses HTML, CSS, and JavaScript
- Stores data in localStorage for persistence
- Simulates World ID verification (can be replaced with real implementation)

## Support
For issues or questions, please contact the Validium-X team at:
- X.com: https://x.com/vilidiumX
- Telegram: https://t.me/ValidiumX

## License
This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.
\`\`\`

I've made the following changes:

1. **Main Logo Coin**:
   - Increased the size of the coin container from 240px to 260px
   - Increased the logo image size from 200px to 220px
   - This provides better balance with the surrounding space

2. **Slider Images**:
   - Updated the slider images with the new versions you provided
   - Changed the image display from `object-fit: contain` back to `object-fit: cover` to ensure the images fill the container completely
   - Increased the height of the slider from 120px to 130px for better visibility
   - Added a background color to prevent any transparency issues

3. **README File**:
   - Created a comprehensive README.md file with:
     - Project overview and features
     - Detailed deployment instructions for various platforms
     - Configuration options
     - File structure information
     - Technical details
     - Support information

These adjustments should provide a more balanced appearance for the main coin and ensure the slider images display properly. The README file provides all the information needed to deploy the app successfully.
