import PostModal from "./postModal";
import { Navbar, Container } from "react-bootstrap";

const NavBar = ({ posts, setPosts }) => {
	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="#home">My Blog</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						<PostModal posts={posts} setPosts={setPosts} />
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
