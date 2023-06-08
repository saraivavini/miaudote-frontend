import { TextColor, textColorToClassName } from '@/utils/colors';
import React from 'react';

const levelToClassNameMap = {
  h1: 'text-[56px]/[64px] font-bold',
  h2: 'text-[48px]/[56px] font-bold',
  h3: 'text-[40px]/[48px] font-bold',
  h4: 'text-[32px]/[40px] font-medium',
  h5: 'text-[24px]/[32px] font-medium',
  h6: 'text-[20px]/[24px] font-medium',
}

type HeadingProps = {
  children?: React.ReactNode;
  level?: keyof typeof levelToClassNameMap;
  color?: TextColor;
  className?: string;
};

export default function Heading(props: HeadingProps) {
  const { children, level = 'h1', color = 'default' } = props;

  const tag = level;
  const className = `${levelToClassNameMap[level]} ${textColorToClassName[color]} ${props.className}`;

  return React.createElement(tag, { className }, children);

}
