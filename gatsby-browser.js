/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css';

// to fix error:
// error "window" is not available during server side rendering.
if (typeof window === 'undefined') {
  global.window = {}
}
