import styled from '@emotion/styled'
import { css } from '@emotion/react';
import Image from 'next/image'

const Figure_styles = (width:string, height:string) => css`
    border: solid thin black;
    width: ${width};
    height: ${height};
`
interface FigureProps{
    src: string
    alt: string
    width?: string
    height?: string
    className?:string
    figcaption?:string
}
 
export const StyledFigure = ({src, alt, width= '100%', height='auto', figcaption, className}:FigureProps) => {

    return (
        <figure>
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="100vw"
                className={className}
            />
            {figcaption && <figcaption>{figcaption}</figcaption>}
        </figure>
    )
   
}
export const Figure = styled(StyledFigure)`
${(props:FigureProps) => (Figure_styles(props.width? props.width : '100%', props.height?props.height:'auto'))};
`