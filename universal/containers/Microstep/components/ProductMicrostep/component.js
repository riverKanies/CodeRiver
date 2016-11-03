/* @flow */
import React from 'react'

type Props = {
  microstep: {
    title: string,
    body_html: string,
    link: string,
    price: string,
    image: {
      src: string
    }
  }
};

const ProductMicrostep = ({ microstep }: Props) => {
  return (
    <div>
      <h1>
        {microstep.title}
      </h1>
      <img src={microstep.image.src} />
      <p>{microstep.price}</p>
      <div dangerouslySetInnerHTML={{__html: microstep.body_html}} />
      <a href={microstep.link} rel='nofollow' target='_blank'>View in Store</a>
    </div>
  )
}

ProductMicrostep.defaultProps = {
  microstep: {
    title: 'Product',
    body_html: 'Stuff',
    link: 'link/to/store',
    price: '$0.00',
    image: {
      src: '/path/to/image'
    }
  }
}

export default ProductMicrostep
