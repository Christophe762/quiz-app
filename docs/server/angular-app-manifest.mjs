
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/results"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 491, hash: 'fe01b8a0dca7fccbb1fbaa78defe9943afb54e87fe97b9c0336554a55495addf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '827d30af00eedd0a42c909652dc16f2fbe11093727f9bff4370e71efaa918fb4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'results/index.html': {size: 2305, hash: '14c5313c1fbd800de4b5d88d1d05d5afd1482e25e82830696cf347b458a87947', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7985, hash: 'e9a0c7f9ed21cdc8e87dfb382f12415e9e40b15fd7358e1730fb63c006ea88ba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
