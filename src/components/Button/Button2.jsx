import React from 'react'
import { Link } from 'react-router-dom'
import { If } from '../If/If'

function Button({ text, children, linkTo }) {
  return (
    <>
      <If condition={linkTo}>
        <Link to={linkTo}>
          <button type="button">{text ? text : children}</button>
        </Link>
      </If>
      <If condition={!linkTo}>
        <button type="button">{text ? text : children}</button>
      </If>
    </>
  )
}

export default Button