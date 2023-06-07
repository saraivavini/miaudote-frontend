export const textColorToClassName = {
  'black': 'text-black',
  'white': 'text-white',
  'neutral': 'text-neutral',
  'primary': 'text-primary',
};

export type TextColor = keyof typeof textColorToClassName;
