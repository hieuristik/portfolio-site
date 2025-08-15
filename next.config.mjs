// next.config.mjs
import withMDX from '@next/mdx' // import MDX plugin
import remarkGfm from 'remark-gfm'

const config = {
  pageExtensions: ['js', 'jsx', 'mdx'],
}

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
})(config)
