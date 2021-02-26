const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://youwebsite.com';

// change to the https://youwebsite.com to your website url in production server