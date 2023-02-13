import React from 'react'

export function If({ condition, children }) {
  return <>{Boolean(condition) && children}</>
}