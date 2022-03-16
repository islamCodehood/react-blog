import {Card, Button} from "react-bootstrap";
const Post = ({ post, posts, setPosts }) => {
    const handleDelete = () => {
        const filteredPosts = posts.filter(p => p.id !== post.id)
        setPosts(filteredPosts)
    }
	return (
		<div className="post m-2">
			<Card>
				<Card.Header>{post.author}</Card.Header>
				<Card.Body>
					<Card.Title>{post.title}</Card.Title>
					<Card.Text>{post.text}</Card.Text>
					<Button className="m-1" variant="danger" onClick={handleDelete}>delete</Button>
					<Button variant="primary">read more</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Post;
