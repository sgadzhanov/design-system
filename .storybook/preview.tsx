import type { Preview, Decorator } from '@storybook/react-vite'
import '../src/components/button/Button.css'
import '../src/index.css'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global components theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', icon: 'sun', title: 'Light' },
        { value: 'dark', icon: 'moon', title: 'Dark' },
      ],
      showName: true,
    },
  },
}

const storybookWithTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme
  document.documentElement.dataset.theme = theme
  localStorage.setItem('theme', theme)

  return (
    <div
      data-theme={theme}
      style={{
        padding: '2rem',
      }}
    >
      <Story />
    </div>
  )
}

export const decorators = [storybookWithTheme]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
