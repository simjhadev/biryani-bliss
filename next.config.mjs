/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { NEXT_PUBLIC_API_URL: "http://localhost:3000"},
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.cloudinary.com',
              port:'',
              pathname: '**',
            },
          ],
    },
}; 

export default nextConfig;
