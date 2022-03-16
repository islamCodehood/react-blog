import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const PostModal = ({ posts, setPosts }) => {
	const [show, setShow] = useState(false);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [text, setText] = useState("");
	const handleClose = () => {
		setShow(false);
		const newPost = {
			title,
			author,
			text,
			id: Date.now(),
		};
		console.log(posts);
		setPosts([...posts, newPost]);
	};
	const handleShow = () => setShow(true);
	return (
		<>
			<Button variant="outlined" onClick={handleShow}>
				+ New Post
			</Button>
			<Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">Your Next Post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <form>
						<input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="write title" />
						<input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
						<textarea id="post" value={text} onChange={(e) => setText(e.target.value)} placeholder="write post" />
					</form> */}
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="write title.."
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Author</Form.Label>
							<Form.Control type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
						</Form.Group>
						
					</Form>
				</Modal.Body>
				<Modal.Footer>
                <Form.Control as="textarea" id="post"  value={text} onChange={(e) => setText(e.target.value)}  placeholder="write post.." style={{ height: "100px" }} />
						<Button onClick={handleClose} variant="primary">
							Publish
						</Button>
					
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default PostModal;
