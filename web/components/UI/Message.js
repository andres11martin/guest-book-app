import styled from '@emotion/styled';

const Message = styled.li`
    font-size: 12px;
    border: 2px solid #939384;
    list-style-type: none;
    margin-bottom: 5vh;
    background: white;
    padding: 2px 15px 2px 25px;
    width: 60vw;
    @media (min-width: 800px) {
        font-size: 18px;
        width: 40vw;
    }
`;

export default Message