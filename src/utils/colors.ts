export const textColorToClassName = {
  'black': 'text-black',
  'white': 'text-white',
  'neutral': 'text-neutral',
  'primary': 'text-primary',
  default: 'text-background'
};

export type TextColor = keyof typeof textColorToClassName;
