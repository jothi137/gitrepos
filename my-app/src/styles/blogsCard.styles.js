import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const StyledCardContainer = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around; 
`;

export const StyledCard = styled(Card)`
    margin: 20px;
    width: 250px;
`