import React from 'react'
import { PropsChildrenInterface } from '../types/global-types'

interface SkeletonLoaderProps extends PropsChildrenInterface {
  loading: boolean
}

const SkeletonLoader = (props: SkeletonLoaderProps) => {
  return <div>{props.children}</div>
}

export default SkeletonLoader
