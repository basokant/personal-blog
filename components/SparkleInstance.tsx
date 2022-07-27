import styled, { keyframes } from "styled-components"

type SparkleInstanceProps = {
    color: string,
    size: number,
    style: React.CSSProperties
}

const SparkleInstance = ({ color, size, style }: SparkleInstanceProps) => {
    return (
        <Wrapper>
            <svg 
                style={{...style, position: 'absolute', pointerEvents: 'none', zIndex: 2}}
                width={size}
                height={size}
                viewBox="0 0 260 260"
                fill="none"
            >
                <path 
                    d="M129.5 0C129.5 0 137.561 66.585 165.488 94.5118C193.415 122.439 260 130.5 260 130.5C260 130.5 193.415 138.561 165.488 166.488C137.561 194.415 129.5 261 129.5 261C129.5 261 121.439 194.415 93.5118 166.488C65.585 138.561 -1 130.5 -1 130.5C-1 130.5 65.585 122.439 93.5118 94.5118C121.439 66.585 129.5 0 129.5 0Z"
                    fill={color}
                />
            </svg>
        </Wrapper>
    )
}

const growAndShrink = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`

const Wrapper = styled.div`
    position: absolute;
    pointer-events: none;
    animation: ${growAndShrink} 600ms ease-in-out forwards;
`

const Svg = styled.svg`
    animation: ${spin} 600ms linear forwards;
`

export default SparkleInstance;