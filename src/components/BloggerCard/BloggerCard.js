import React from 'react';
import './BloggerCard.css';

function BloggerCard({ bloggers }) {
	// console.log(bloggers);

	return (
		<div className="overflow-auto myHeight">
			{bloggers.map(blogger => {
				return (
					<div className="card mb-3" key={blogger.id}>
						<img src={blogger.avatar} className="card-img-top" alt="" />
						<div className="card-body">
							<h5 className="card-title">{blogger.lastname}</h5>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default BloggerCard
