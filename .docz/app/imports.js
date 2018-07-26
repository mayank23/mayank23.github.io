export const imports = {
  'Welcome.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "welcome" */ 'Welcome.mdx'),
}
