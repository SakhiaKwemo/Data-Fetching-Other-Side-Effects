import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
import '../App.css';

function Fetch() {
  const [artist, setArtist] = useState([]);

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4bfe67a554mshceb15b64d35113cp194d42jsnb609fe1b4d16',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

  useEffect(() => {
    fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/artists/?time_period=week&per_page=10&page=1', options)
	.then(response => response.json())
	.then(response => {
        console.log(response.chart_items)
        const artistItem = response.chart_items.map((e) => {
            return e.item
        })
        let artistList = artistItem.map((e) => {
            return {image: e.image_url, name: e.name}
        })
        const newArtistList = artistList.filter((e, index) => {
            // console.log(index)
            // console.log(index!== 0)
            // console.log(index!== 1)
            return index!== 0 && index!== 1
        })
        console.log(newArtistList)
        setArtist(newArtistList)

    })
	.catch(err => console.error(err));
  }, []);

  return (
    <div className='container'>
        {artist && artist.map((e, index) => {
            return (
                <div key = {index} className ='artistBox'>
                    <img src={e.image}/>
                    <h1>{e.name}</h1>
                </div>
            )
        })}
    </div>
  );
}
export default Fetch;
