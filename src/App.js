import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
	const [posts, setPosts] = useState([
		{
			username: "suyanksaraswat",
			caption: "WOW its workss!!!",
			imageUrl: "https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
		},
		{
			username: "suyanksaraswat",
			caption: "WOW its workss!!!",
			imageUrl: "https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" 
		}
	]);

	return (
    <div className="app">
		<div className="app__header">
			<img
				className="app__headerImage"
				src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
				alt=""
			/>
		</div>
		<h1>Hello Instagram!!!</h1>

		{
			posts.map(post => {
				return (<Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />);	
			})
		}

		<Post username="mayanks" caption="en mina dopee" imageUrl="https://miro.medium.com/max/1250/1*qgJBwd6ZV4pY0uNvm_GMUQ.jpeg" />
		<Post username="qazi" caption="love" imageUrl="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
	</div>
  );
}

export default App;
