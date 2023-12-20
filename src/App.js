import { useState } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import MainContent from './components/MainContent';
import About from './pages/About';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [search, SetSearch] = useState("");

	
	const handleSearch = e => {
		e.preventDefault();
		
		fetchAnime(search)
	}

	const fetchAnime = async (query) => {
		const temp = await fetch (`https://api.jikan.moe/v4/anime?q=${query}&oreder_by=title&sort=asc&limit=17`);
		// convert into json file
		const resulteData = await temp.json();
		
		console.log(resulteData.data);
		// store it in AnimeList
		SetAnimeList(resulteData.data);
	}

	return (
		<div className="App">
			<Header handleSearch={handleSearch} search={search} SetSearch = {SetSearch}/>
			<Routes className="content-wrap">
				<Route index element={<Categories />}/> 
				<Route path='/Categories' element={<Categories />}/>  
				<Route path='/About' element={<About />}/> 
			</Routes>
			<div className="content-wrap">
				<MainContent animeList={animeList} />
			</div>
		</div>
	);
}

export default App;