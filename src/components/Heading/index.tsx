import { TextColor, textColorToClassName } from '@/utils/colors';
import React from 'react';

const levelToClassNameMap = {
  h1: 'text-[3.5rem]/[4rem] font-bold',
  h2: 'text-[3rem]/[3.5rem] font-bold',
  h3: 'text-[2.5rem]/[3rem] font-bold',
  h4: 'text-[2rem]/[2.5rem] font-medium',
  h5: 'text-[1.5rem]/[2rem] font-medium',
  h6: 'text-[1.25rem]/[1.5rem] font-medium',
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
