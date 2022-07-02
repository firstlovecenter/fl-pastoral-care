import React from 'react'
import { Field, ErrorMessage } from 'formik'
import {
  Avatar,
  Checkbox,
  Flex,
  Spacer,
  StackDivider,
  VStack,
} from '@chakra-ui/react'
// import TextError from './TextError'

function MemberCheckboxGroup(props: any) {
  const { label, name, options, ...rest } = props

  return (
    <div>
      {label ? (
        <>
          <label className="checkbox-label" htmlFor={name}>
            {label}
          </label>
          <br />
        </>
      ) : null}
      <Field name={name} {...rest}>
        {({ field }: { field: any }) => (
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={3}
            align="stretch"
          >
            {options.map((option: any, index: any) => (
              <Flex key={option.key}>
                <Avatar size={'xs'} marginRight="10px" /> {option.key}
                <Spacer />
                <Checkbox
                  alignSelf={'end'}
                  size="lg"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
              </Flex>
            ))}
          </VStack>
        )}
      </Field>
      <ErrorMessage name={name} />
    </div>
  )
}

export default MemberCheckboxGroup
