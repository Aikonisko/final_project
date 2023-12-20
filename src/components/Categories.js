import React from 'react'
import { UseGetTopAnime } from './getTopAnimeQuery';
function Categories() {
	const {data, isLoading} = UseGetTopAnime();
	return (
		<div className="categoryTitle">
				<h3>Popular Animes</h3>
			<div className="categories">
					{isLoading ? (<a href='/' target='_blank' rel='noreferrer'>Loading </a>) 
						: data ? 
						(data.data.map((anime, key) => {
								return(
									<div className="main-categories">
										<a href={anime.url} target='_blank' key={anime.mal_id} rel='noreferrer'>
											<img src={anime.images.jpg.image_url} alt="" />
										</a>
										<a href={anime.url} target='_blank' key={anime.mal_id} rel='noreferrer'><h1>{anime.title}</h1></a>
									</div>
								)
							})
						) : (
								<a href='/' target='_blank' rel='noreferrer'>No Data Available </a>
							)
					}
			</div>
		</div>
	)
}
export default Categories;