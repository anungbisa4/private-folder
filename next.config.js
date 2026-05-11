const fs = require('fs');
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    const privatePath = path.resolve(__dirname, 'builder-core');
    const mockPath = path.resolve(__dirname, 'src/mocks');

    // Cek apakah folder builder-core ada isinya
    const hasPrivate = fs.existsSync(privatePath) && fs.readdirSync(privatePath).length > 0;

    if (!hasPrivate) {
      // Jika kosong, arahkan semua import '@private' ke folder mocks
      config.resolve.alias['@private'] = mockPath;
    } else {
      config.resolve.alias['@private'] = privatePath;
    }

    return config;
  },
};

module.exports = nextConfig;
