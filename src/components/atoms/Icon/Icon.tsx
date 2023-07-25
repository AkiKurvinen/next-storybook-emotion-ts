
import React, { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import {KeyboardArrowRight, QuestionMark} from '@mui/icons-material';
import StorybookIcon from '../../../../public/storybook.svg'

const icon_base = (fill:string, stroke:string, size:string) => css`
    display: inline-block;
    width: ${size};
    height: ${size};
    text-align: center;
    object-fit: contain;
    fill: ${fill}; 
    stroke: ${stroke};
`

function getIcon(icon:string, className:string):React.ReactNode{
    switch(true) {
        case icon=='arrowright': return <KeyboardArrowRight className={className}/>
        case icon=='storybook': return <StorybookIcon className={className}/>
        case icon=='heroicons': return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        ) 
    }
    return <QuestionMark className={className}/>
}

interface IconProps {
    /**
     * Icon name
     */
    icon: string
    /**
     * Optional icon fill color
     */
    fill?:string
    /**
     * Optional icon stroke color
     */
    stroke?:string
    /**
     * Optional bounding box size
     */
    size?:string
    /**
     * Just because Emotion
     */
    className?:string
}

const StyledIcon: FC<IconProps> = ({className='icon', icon}:IconProps) => {
    return getIcon(icon, className)
}

export const Icon = styled(StyledIcon)`
${(props:IconProps) => (icon_base(
    props.fill ? `${props.fill}` : 'currentColor',
    props.stroke ?`${props.stroke}` : 'none',
    props.size ? props.size : '32px'))};
` 
