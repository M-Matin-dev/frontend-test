export enum ButtonContentTypes {
  text = 'text',
  matIcon = 'matIcon',
}

export interface IButtonStateProps {
  type: ButtonContentTypes;
  contents: string;
}
