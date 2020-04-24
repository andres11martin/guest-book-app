import styled from '@emotion/styled';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 70vw;
    font-size: 14px;
    margin: 10% 5% 0px 9%;
    @media (min-width: 800px) {
        padding: 1%;
        height: 96%;
        width: 40vw;
        margin: 0% 13% 5% 2%;
        font-size: 18px;
      }
`;

export default Form