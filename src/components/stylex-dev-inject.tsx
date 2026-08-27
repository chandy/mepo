import * as React from 'react'

export function StyleXDevInject() {
  React.useEffect(() => {
    if (import.meta.env.DEV) {
      void import('virtual:stylex:runtime')
    }
  }, [])

  if (!import.meta.env.DEV) {
    return null
  }

  return <link rel="stylesheet" href="/virtual:stylex.css" />
}
