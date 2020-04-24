import Link from 'next/link';
import styled from "@emotion/styled";

const HeaderDiv = styled.div`
    border: 1px solid black;
    padding: 4px 10px 4px 10px;
    font-size: 14px;
    margin: 3% 4% -5% 4%;
    @media (min-width: 800px) {
        margin: 1% 15% 0% 15%;
    }
`;

const Header = () => {
    return (
        <HeaderDiv>
            <Link href="/"><a>Home</a></Link>
        </HeaderDiv>
    )

}

export default Header