import React from 'react'
import { PropsChildrenInterface } from 'types/global-types'

const TextError = (props: PropsChildrenInterface) => {
  return <small className="error">{props.children}</small>
}

export default TextError
