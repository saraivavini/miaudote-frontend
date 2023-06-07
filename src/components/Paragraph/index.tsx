import { TextColor, textColorToClassName } from '@/utils/colors';
import React from 'react';

const variantToClassNameMap = {
  subtitle: 'text-[16px] font-medium',
  'body-sm': 'text-[14px]/[20px] font-regular',
  'body-md': 'text-[16px]/[24px] font-regular',
  'body-lg': 'text-[18px]/[28px] font-regular',
  'button-sm': 'text-[14px]/[18px] font-bold',
  'button-md': 'text-[16px]/[20px] font-bold',
  'button-lg': 'text-[18px]/[24px] font-bold',
  'caption': 'text-[12px]/[16px] font-regular',
}


type ParagraphProps = {
  children?: React.ReactNode;
  variant?: keyof typeof variantToClassNameMap;
  color?: TextColor;
};

export default function Paragraph(props: ParagraphProps) {
  const { children, variant = 'body-md', color = 'black' } = props;

  const className = `${variantToClassNameMap[variant]} ${textColorToClassName[color]}`;

  return React.createElement('p', { className }, children);

}
