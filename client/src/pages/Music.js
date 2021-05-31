import React, {useContext, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Music = observer(() => {

    const {user} = useContext(Context);

    const [token, setToken] = useState();
    const [newReleases, setNewReleases] = useState();
    const [artistAlbums, setArtistAlbums] = useState();
    const [albumTracks, setAlbumTracks] = useState();
    const artistQRef = useRef(null);

    const market = 'KR';
    const search_type = 'artist';
    const [artist, setArtist] = useState('');

    useEffect(async () => {
        const {data} = await axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type':'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer(process.env.REACT_APP_SPOTIFY_TOKEN + ':' +
                    process.env.REACT_APP_SPOTIFY_KEY).toString('base64')),
            },
            data: 'grant_type=client_credentials'
        });
        setToken(data.access_token);

        const {data:albumsData} = await axios(`https://api.spotify.com/v1/browse/new-releases?country=${market}&offset=0`,{
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        let idsArtists =  albumsData.albums.items.map(item => item.artists.map(artist=>artist.id));
        idsArtists = [].concat.apply([], idsArtists).filter((v, i, a) => a.indexOf(v) === i);

        let artistsGenres = {};
        let albums = albumsData.albums.items;
        for (const element of idsArtists) {
            const {data:artistData} = await axios(`https://api.spotify.com/v1/artists/${element}`,{
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });
            artistsGenres[element] = artistData.genres;
        }

        albums = albums.filter(value => {
            const access_artist = value.artists.filter(artist => {
                if(artistsGenres[artist.id].includes("k-pop") || artistsGenres[artist.id].includes("korean pop")
                || artistsGenres[artist.id].includes("k-rap") || artistsGenres[artist.id].includes("k-indie"))
                    return artist
            });
            if(access_artist.length > 0)
                return value
        });
        setNewReleases(albums);
    }, []);

    async function getArtist(q) {
        const {data} = await axios(`https://api.spotify.com/v1/search?query=${q}&type=${search_type}&limit=1`,{
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        return data.artists.items[0]
    }

    async function getArtistAlbums(id) {
        const {data} = await axios(`https://api.spotify.com/v1/artists/${id}/albums`,{
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        return data.items
    }

    async function sendQHandler() {
        const q = artistQRef.current.value;

        const artistData = await getArtist(q);
        setArtist(artistData);

        let albums = await getArtistAlbums(artistData.id);
        albums = albums.filter(item => !item.available_markets.includes('JP'));
        setArtistAlbums(albums)
    }

    async function getAlbumTracks(id) {
        const {data} = await axios(`https://api.spotify.com/v1/albums/${id}/tracks`,{
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        setAlbumTracks(data.items)
    }


    return(
        <div className="flex flex-col container mx-auto font-montserrat font-normal text-black text-md">
            <div className="w-1/2 mt-4">
                <label htmlFor="" className="block">Исполнитель:</label>
                <input type="text" ref={artistQRef} className="p-2 rounded-md"/>
                <div className="py-3">
                    <button  onClick={sendQHandler} className="py-2 px-4 bg-pink rounded-md">Построить</button>
                </div>
            </div>
            <div className="flex">
                {artistAlbums && artistAlbums.map((item, index) => {
                    return <div className="bg-yellow rounded-md mx-2" key={'album_' + index}>
                        <div>
                            <img src={item.images[0].url} alt="" className="h-4/5 w-full rounded-t-md"/>
                        </div>
                        <div className="p-2">
                            <p  onClick={()=> getAlbumTracks(item.id)} className="font-bold hover:text-pink">{item.name}</p>
                            <p>{item.artists.map(artist => artist.name).join(", ")}</p>
                            <p className="bg-blue-dark rounded-md text-center">{item.release_date}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="flex bg-pink">
                {albumTracks && albumTracks.map((item, index) => {
                    return <div className="flex bg-yellow rounded-md mx-2" key={'album_' + index}>
                        <div className="flex flex-col p-2">
                            <p className="font-bold">{item.name}</p>
                            <p className="">№ {item.track_number}</p>
                            <p className="">{Math.round((item.duration_ms / 60000)* 100) / 100} 🕙︎</p>
                        </div>
                    </div>
                })}
            </div>
            <div className="flex">
                {newReleases && newReleases.map((item, index) => {
                    return <div className="bg-yellow rounded-md mx-2" key={'album_' + index}>
                        <div>
                            <img src={item.images[0].url} alt="" className="h-4/5 w-full rounded-t-md"/>
                        </div>
                        <div className="p-2">
                            <p className="font-bold">{item.name}</p>
                            <p>{item.artists.map(artist => artist.name).join(", ")}</p>
                            <p className="bg-blue-dark rounded-md text-center">{item.release_date}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
});

export default Music;