import React from 'react'

export interface ISimpleTextProps {
  title: string
  contents: string | React.ReactNode
}

export default function SimpleText ({ title, contents }: ISimpleTextProps) {
  return <div>
    <h1>{title}</h1>
    <p>{contents}</p>
  </div>
}
