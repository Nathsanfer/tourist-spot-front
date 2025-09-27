/** @type {import('next').NextConfig} */
const nextConfig = {
  // Força o hot reload
  reactStrictMode: true,
  
  // Configurações para Windows
  experimental: {
    // Melhora o hot reload no Windows
    esmExternals: true,
  },
  
  // Configurações de desenvolvimento
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Configura o polling para Windows
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
