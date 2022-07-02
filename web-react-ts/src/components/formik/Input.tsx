import React from 'react'
import { Field, ErrorMessage } from 'formik'
import './Input.css'
import './Formik.css'
import { useAuth0 } from '@auth0/auth0-react'
import SkeletonLoader from '../SkeletonLoader'

function Input(props: { [x: string]: any; label: string; name: string }) {
  const { label, name, ...rest } = props
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      {label ? (
        <SkeletonLoader loading={!isAuthenticated}>
          <label className="label" htmlFor={name}>
            {label}
          </label>
        </SkeletonLoader>
      ) : null}
      <Field id={name} name={name} className="form-control" {...rest} />
      <ErrorMessage name={name} />
    </div>
  )
}

export default Input
