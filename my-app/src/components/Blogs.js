
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { StyledCardContainer, StyledCard } from '../styles/blogsCard.styles';

export default function Blogs ({ blogs }) {
    return <StyledCardContainer>
        {
            blogs.map((blog) => (
                <StyledCard>
                    <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>{blog.body}</Card.Text>
                        <Button variant="primary">Show Comments</Button>
                    </Card.Body>
                </StyledCard>
            ))
        }
    </StyledCardContainer>
}