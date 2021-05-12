import React, {useContext, useEffect, useRef, useState} from 'react';
import Plot from '../../node_modules/react-plotly.js/react-plotly';
import axios from 'axios';
import {Context} from "../index";

const Music = () => {

    const {user} = useContext(Context);

    const artistQRef = useRef(null);
    const audioQRef = useRef(null);

    const [token, setToken] = useState('');
    const [artist, setArtist] = useState('');
    const [plotData, setPlotData] = useState({names:[], popularity:[]});
    const [plotAudioData, setPlotAudioData] = useState();

    const market = 'KR';
    const search_type = 'artist';
    const trackReqParams = ["acousticness", "danceability", "energy", "speechiness", "valence"];

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type':'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + (new Buffer(process.env.REACT_APP_SPOTIFY_TOKEN + ':' +
                    process.env.REACT_APP_SPOTIFY_KEY).toString('base64')),
            },
            data: 'grant_type=client_credentials'
        }).then(tokenResponse => {
            console.log(tokenResponse.data.access_token);
            setToken(tokenResponse.data.access_token);
        }).catch(error => console.log(error));
    }, []);

    async function sendQHandler() {
        const q = artistQRef.current.value;

        const artistData = await getArtist(q);
        setArtist(artistData);

        const tracks = await getArtistsTracks(artistData.id);
        let names = [], popularity = [];

        tracks.map(each => {
            names.push(each.name);
            popularity.push(each.popularity);
        });

        setPlotData({names, popularity})
    }
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

    async function getArtistsTracks(id) {
        const {data} = await axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,{
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        return data.tracks
    }

    async function getTracksFeatures(tracksIdsString) {
        const {data} = await axios(`https://api.spotify.com/v1/audio-features?ids=${tracksIdsString}`,{
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        return data.audio_features
    }
    async function getTracksFeaturesHandler() {
        const artistsNames = audioQRef.current.value.split(', ');
        const artists = await Promise.all(artistsNames.map(async (item) => {
            return await getArtist(item.trim())
        }));

        const artistsTracksFeatures = await Promise.all(artists.map(async (item) => {
            const tracks = await getArtistsTracks(item.id);
            const audioFeatures = await getTracksFeatures(tracks.map(track => track.id).join(','));
            console.log(audioFeatures);

            let trackReqParamsValues = {};
            audioFeatures.forEach((track, index) => {
                trackReqParams.forEach(param => {
                    trackReqParamsValues[param] = (trackReqParamsValues[param] || 0) + track[param];
                    if(index === audioFeatures.length - 1)
                    {
                        trackReqParamsValues[param] = trackReqParamsValues[param] / audioFeatures.length;
                        if(param === "speechiness")
                            trackReqParamsValues[param] = trackReqParamsValues[param] * 10;
                    }

                })
            });
            console.log(trackReqParamsValues);

            return {artist: item.name, tracks_features: Object.values(trackReqParamsValues)}
        }));

        setPlotAudioData(artistsTracksFeatures.map(item => {
            return {
                r: item.tracks_features,
                theta: trackReqParams,
                name: item.artist,
                marker: {color: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}, //цвет
                type: "scatterpolar",
                fill: "toself",
                font: {family: "Montserrat"}
            }
        }))

    }

    return(
        <div className="flex container mx-auto flex-col items-center font-montserrat font-normal text-black text-md">
            <div className="flex flex-col">
                <div className="flex flex-col w-1/2 mt-4">
                    <label htmlFor="" className="block">Исполнитель:</label>
                    <input type="text" ref={artistQRef} className="p-2 rounded-md"/>
                    <div className="py-3">
                        <button onClick={sendQHandler} className="py-2 px-4 bg-pink rounded-md">Построить</button>
                    </div>
                </div>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: plotData['popularity'],
                            y: plotData['names'],
                            marker: {color:'#FFC1F1'},
                            orientation: 'h'
                        }
                    ]}
                    layout={{
                        width: 800,
                        height: 500,
                        title: `<b>Топ 10 треков ${artist.name || ''}</b>`,
                        //pad:{l: 100, r: 100, b: 140, t: 120},
                        paper_bgcolor: '#FFFFE1',
                        plot_bgcolor: '#FFFFE1',
                        font: {family: 'Montserrat', size: 16},
                        xaxis: {
                            automargin: true,
                            title: {
                                text:'Popularity',
                                standoff:20
                            },
                            titlefont: {
                                family: 'Montserrat',
                                size: 14
                            },
                            showticklabels: true,
                            tickfont:{
                                family: 'Montserrat',
                                size: 12
                            }
                        },
                        yaxis: {
                            automargin: true,

                            showticklabels: true,
                            tickfont: {
                                family: 'Montserrat',
                                size: 12
                            }
                        },
                        hovermode: 'closest'
                    }}
                />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col w-1/2 mt-4">
                    <label htmlFor="" className="block">Исполнители:</label>
                    <input type="text" ref={audioQRef} className="p-2 rounded-md"/>
                    <div className="py-3">
                        <button onClick={getTracksFeaturesHandler} className="py-2 px-4 bg-pink rounded-md">Построить</button>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col w-1/4">
                        <div className="text-wrap bg-pink p-3 rounded-md"><p className="font-medium">Valence (Валентность):</p> мера от 0.0 до 1.0, описывающая музыкальную позитивность,
                            передаваемую треком. Треки с высокой валентностью звучат
                            более позитивно, а треки с низкой валентностью - более негативные.
                        </div>
                        <div className="text-wrap bg-pink my-4 p-3 rounded-md"><p className="font-medium">SpeecHiness (Речивость):</p> определяет количество произнесенных слов в дорожке».
                            Если речивость песен выше 0.66, они, вероятно, состоят из произнесенных слов, оценка от 0.33 до 0.66 означает,
                            что песни содержать как музыку, так и слова, а оценка ниже 0.33 означает, что в песнях нет слов.
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Plot
                            data = {plotAudioData}
                            layout = {{
                                width: 800,
                                height: 500,
                                title: `<b>Характеристика музыки исполнителей</b>`,
                                margin:{l: 100, r: 100, b: 140, t: 120, pad: 4},
                                font: {size: 16, family: "Montserrat"},
                                legend: {font: {size: 16, family: "Montserrat"} },
                                polar: {
                                    barmode: "group",
                                    bargap: 0.05,
                                    radialaxis: {ticksuffix: "%", angle: 45, dtick: 20},
                                    angularaxis: {direction: "clockwise"},
                                },
                                paper_bgcolor: '#FFFFE1',
                                plot_bgcolor: '#FFFFE1',

                            }}
                        />
                        <div className="flex">
                            <div className="text-wrap bg-pink p-3 rounded-md my-4"><p className="font-medium">Acousticness (Акустичность):</p> значение описывает, насколько акустичны песни.
                                Оценка 1.0 означает, что песни, скорее всего, акустические.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/4">
                        <div className="text-wrap bg-pink p-3 rounded-md"> <p className="font-medium">Danceability (Танцевальность):</p> описывает, насколько песни подходят
                            для танцев на основе комбинации музыкальных элементов, включая темп, стабильность ритма, силу удара и общую частотность.
                            Значение 0.0 наименее танцевальные, а 1.0 - наиболее танцевальные.
                        </div>
                        <div className="text-wrap bg-pink my-4 p-3 rounded-md"><p className="font-medium">Energy (Энергичность):</p> представляет собой перцептивную меру интенсивности и активности.
                            Обычно энергичные песни кажутся быстрыми, громкими и шумными.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Music;