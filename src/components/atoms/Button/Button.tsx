import { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react';

interface ButtonProps {
  /**
   * What style button has?
   */
  variant?: 'contained' | 'outlined' | 'text';

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional start icon
   */
  starticon?: any

  /**
   * Optional end icon
   */
  endicon?: any

  /**
   * Optional disabled
   */
  disabled?: boolean

  /**
   * Optional open link in new tab
   */
  newtab?: boolean

  /**
   * Optional link target
   */
  targeturl?: string

}

const button_base = css`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  align-items: center;
  line-height: 2em;
  padding: 0.25em 1em;
  border-style: solid;
  border-width: 2px;
  text-decoration: none;
  font-family: var(--font-base);

  span + svg {
    margin-right: -0.25em;
    margin-left: 0;
  }
  
  svg{
    margin-left: -0.25em;
    line-height: inherit;
    vertical-align: top;
    font-size: 2em;
    line-height: 1.5em;
  }
`
const button_contained = css`
  color:var(--paper);
  background-color: var(--primary);
  border-color: var(--primary);

&:hover{
  background-color: var(--paper);
  color: var(--primary);
  border-color: var(--primary);
}`
const button_contained_disabled = css`
  pointer-events: none;
  background-color: var(--disabled);
  border-color: var(--disabled);

`
const button_outlined = css`
  color: var(--primary);
  background-color: transparent;
  border-color: var(--primary);

&:hover{
  background-color: var(--primary);
  color: var(--paper);
  border-color: var(--primary);
}
`
const button_outlined_disabled = css`
  pointer-events: none;
  border-color: var(--disabled);
  color: var(--disabled);
`

const button_text = css`
  border-color: transparent;
  color: var(--primary);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-position: under;
  padding-left: 0.2em;
  padding-right: 0.1em;
  background-color: var(--paper);

&:hover{
  text-decoration: none;
}
`
const button_text_disabled = css`
  pointer-events: none;
  color: var(--disabled);
`

const button_variant_style = (variant:string='text', disabled:boolean=false) => {
  switch(variant) { 
    case 'outlined': { 
      return [button_outlined, disabled?button_outlined_disabled:null]
    } 
    case 'contained': { 
      return [button_contained, disabled?button_contained_disabled:null]
    } 
    default: { 
      return [button_text, disabled?button_text_disabled:null]
    } 
 } 
}
/**
 * Primary UI component for user interaction
 */
const StyledButton: FC<ButtonProps> = ({
  variant = 'contained',
  label,
  onClick,
  starticon,
  endicon,
  newtab,
  targeturl,
  ...props
}: ButtonProps) => {
 
  return (
    <>
      {!onClick?
      <a  onClick={onClick}
          target = {newtab? "_blank": ""}
          href={targeturl? targeturl: undefined}
          {...props}
          >
          {starticon}
          <span>{label}</span>
          {endicon}
        </a>:
        <button
          onClick={onClick}
          {...props}
            >
          {starticon}
          <span>{label}</span>
          {endicon}
        </button>
      }
 </>
  )
}
export const Button = styled(StyledButton)`
  ${button_base}
  ${(props:ButtonProps) => (button_variant_style(props.variant, props.disabled))};
`
