import { MDXComponents } from './src/components/MDXComponents'

export function useMDXComponents(components) {
  return {
    ...components,
    ...MDXComponents,
  }
}
