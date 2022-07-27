import styled from "styled-components";
import { Info } from "react-feather";

type InfoProps = {
    children?: React.ReactNode;
}

const InfoWrapper = ( {children}: InfoProps ) => {
    return (
        <>
        <Wrapper>
            <Info style={{color: "#5D81AB", margin: "10px 0px", marginBottom: "0px", strokeWidth: "2.5px"}}/>
            {children}
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    background-color: #E5E9EF;
    padding: 15px 30px;
    border-radius: 8px;
    box-shadow: -5px 0px 0px 0px #5D81AB;
    margin: 30px 0px;
`

export default InfoWrapper;