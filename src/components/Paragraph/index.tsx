import { TextColor, textColorToClassName } from '@/utils/colors';
import React from 'react';

const variantToClassNameMap = {
  subtitle: 'text-[1rem] font-medium',
  'body-sm': 'text-sm font-regular',
  'body-md': 'text-base font-regular',
  'body-lg': ' text-lg font-regular',
  'button-sm': 'text-[0.875rem]/[1.125rem] font-bold',
  'button-md': 'text-[1rem]/[1.25rem] font-bold',
  'button-lg': 'text-[1.125rem]/[1.5rem] font-bold',
  'caption': 'text-[0.75rem]/[1rem] font-regular',
}


type ParagraphProps = {
  children?: React.ReactNode;
  variant?: keyof typeof variantToClassNameMap;
  color?: TextColor;
  className?: string;
};

export default function Paragraph(props: ParagraphProps) {
  const { children, variant = 'body-md', color = 'default' } = props;

  const className = `${variantToClassNameMap[variant]} ${textColorToClassName[color]} ${props.className}`;

  return React.createElement('p', { className }, children);

}
