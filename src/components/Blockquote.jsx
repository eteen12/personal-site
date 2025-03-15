import Image from 'next/image'
import clsx from 'clsx'

import { Border } from './Border'

function BlockquoteWithImage({ author, children, className, image }) {
  return (
    <div className="pt-24">
      <Image alt="" {...image} sizes="" className="object-cover" />
    </div>
  )
}

export function Blockquote(props) {
  if (props.image) {
    return <BlockquoteWithImage {...props} />
  }
}
