'use client'
import React from "react";
import Paragraph from "../Paragraph";

const variantToClassNameMap = {
  primary: 'bg-primary rounded-full py-4 px-8'
}

type ButtonProps = {
  children?: React.ReactNode;
  variant?: keyof typeof variantToClassNameMap;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', onClick = () => null } = props;

  return (
    <button type="button" className={`${variantToClassNameMap[variant]} w-fit h-fit`} onClick={onClick}>
      <Paragraph variant="button-md" color="white">
        {children}
      </Paragraph>
    </button>
  )

}
