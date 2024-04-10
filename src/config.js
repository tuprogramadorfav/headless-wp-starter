// graphql api url
let url = 'https://techmanager.io/graphql';

// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
  url = 'https://techmanager.io/graphql';
}
const Config = {
  gqlUrl: url,
};

export default Config;
