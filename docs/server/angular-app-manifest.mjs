
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/quiz-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/quiz-app"
  },
  {
    "renderMode": 2,
    "route": "/quiz-app/results"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 500, hash: 'af7ce85010d140bb4a8c1fb3c3ba4bab3b0d757dc799e9e830e9f2adc5655404', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '4254f7d60ff51f4b3cd475a3b89fd6654a55b4efeeb51bc5dd4de803180f45ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'results/index.html': {size: 2314, hash: '1600e61e8e1842da72183ce9cb14b101db27649526bf0c23e7ba7f52be527ca8', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8249, hash: '6586f77b692d302da23091bd442b6383aa395982ccbccac2430c2ef97b7904c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
