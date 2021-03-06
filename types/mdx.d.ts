// Taken from MDX v2
// Remove once NextJS MDX upgrades to v2
declare module '@mdx-js/react' {
  // TypeScript Version: 3.4

  import {
    Context,
    Consumer,
    ComponentType,
    FunctionComponent,
    ReactElement,
    createElement,
  } from 'react';

  /**
   * Mapping of names for JSX components to React components
   */
  interface ComponentDictionary {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [name: string]: ComponentType<any>;
  }

  /**
   * Prop type that includes a component dictionary
   */
  interface ComponentsProp {
    /**
     * Mapping of names for JSX components to React components
     */
    components: ComponentDictionary;
  }

  /**
   * Direct access to the MDX React Context
   */
  declare const MDXContext: Context<ComponentsProp>;

  /**
   * Provider for MDX context
   */
  declare const MDXProvider: FunctionComponent<ComponentsProp>;

  /**
   * Gets components from the MDX Context
   *
   * @param components additional components to include
   * @returns all components from context with overrides from components parameter
   */
  declare function useMDXComponents(
    components: ComponentDictionary | (() => ComponentDictionary)
  ): ComponentDictionary;

  /**
   * High order component that passes components prop to child
   *
   * @param child Component being wrapped
   */
  declare function withMDXComponents(
    child: ComponentType<ComponentsProp>
  ): ReactElement | null;

  /**
   * React createElement function wrapped with handler for MDX content
   */
  declare const mdx: typeof createElement;

  export {
    ComponentDictionary,
    ComponentsProp,
    MDXContext,
    MDXProvider,
    useMDXComponents,
    withMDXComponents,
    mdx,
  };
}
