import React from "react";

const tagToFontWeight = {
  h1: 'font-bold',
  h2: 'font-bold',
  h3: 'font-bold',
  h4: 'font-medium',
  h5: 'font-medium',
  h6: 'font-medium',
  p: 'font-regular'
}

type TextProps = {
  id?: string;
  children?: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
};

export default function Text(props: TextProps) {
  const { id, tag = 'p', children } = props;
  const className = `${tagToFontWeight[tag]} ${props.className}`

  return React.createElement(tag, { id, className }, children);

}
