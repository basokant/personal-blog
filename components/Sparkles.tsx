import { useState } from "react";
import styled, { keyframes } from "styled-components";
import generateSparkle from "../helpers/generateSparkle";
import useRandomInterval from "../hooks/useRandomInterval";
import SparkleInstance from "./SparkleInstance";

type SparklesProps = {
    children: React.ReactNode;
}

type Sparkle = {
    id: string;
    createdAt: number;
    color: string;
    size: number;
    style: {
        top: string;
        left: string;
        zIndex: number;
    }
}

function Sparkles({ children }: SparklesProps) {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useRandomInterval(() => {
        const now = Date.now();

        // Create a new sparkle
        const sparkle = generateSparkle();

        // Clean up any "expired" sparkles
        const nextSparkles = sparkles.filter(sparkle => {
            const delta = now - sparkle.createdAt;
            return delta < 1000;
        });

        // Include out new sparkle
        nextSparkles.push(sparkle);

        // Make it so!
        setSparkles(nextSparkles);
    }, 50, 500);

    return (
        <Wrapper >
            {sparkles.map(sparkle => (
                <Sparkle
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            <ChildWrapper>{children}</ChildWrapper>
        </Wrapper>
    )
}

type SparkleProps = {
    size: number;
    color: string;
    style: React.CSSProperties;
}

const Sparkle = ({ size, color, style }: SparkleProps) => {
    const path = 
        "M129.5 0C129.5 0 137.561 66.585 165.488 94.5118C193.415 122.439 260 130.5 260 130.5C260 130.5 193.415 138.561 165.488 166.488C137.561 194.415 129.5 261 129.5 261C129.5 261 121.439 194.415 93.5118 166.488C65.585 138.561 -1 130.5 -1 130.5C-1 130.5 65.585 122.439 93.5118 94.5118C121.439 66.585 129.5 0 129.5 0Z"

    return (
        <SparkleWrapper style={style}>
            <SparkleSvg width={size} height={size} viewBox="0 0 260 260" fill="none">
                <path d={path} fill={color} />
            </SparkleSvg>
        </SparkleWrapper>
    )
}

const comeInOut = keyframes`
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`;
const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`;

const Wrapper = styled.span`
    position: relative;
    display: inline-block;
`;

const ChildWrapper = styled.strong`
    position: relative;
    z-index: 1;
    font-weight: bold;
`

export default Sparkles;