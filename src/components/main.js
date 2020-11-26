import Axios from 'axios';
import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';
import '../css/main.scss'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            artist : '',
            albums : false,
            content_albums : [],
            id : '',
            albumnes: []
        }
    }
    async albums(e){
        console.log(e.currentTarget)
        let temp_state = this
        let artist_id = e.currentTarget.id
        await this.setState({
            albums : true,
            id : artist_id
        })
        console.log(this.state.id)
        let respuesta = await Axios('https://api.spotify.com/v1/artists/' + this.state.id + '/albums',{
            headers : {
                'Authorization' : 'Bearer ' + this.props.token
            },
            params : {
                id : artist_id
            },
            method: 'GET'
        })
        console.log(this)
        let albums = respuesta.data.items
        console.log(respuesta.data.items)
        await this.setState({
            albumnes: JSON.stringify(respuesta.data.items)
        })

    }
    
    render(){
        let artists = ''
        let albums =''
        if(this.props.found_data != ''){
            artists = JSON.parse(this.props.found_data)
            artists = artists.data.artists.items
            console.log(artists)
        }
        return (
            <div>
                <main>
                    {artists ? artists.map(
                        (artist, key) => {
                            return(
                                <div>
                                    <Accordion>
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey={artist.id}>
                                                    <div class='row content_artist' onClick={this.albums.bind(this)} id={artist.id}>
                                                        <div className="col-1">
                                                            <div className="cont_img">
                                                                <img className='img-fluid' src={ artist.images[2] ? (artist.images[2].url) : ''} alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="info_artist">
                                                                <h3 class='artist'>{artist.name}</h3>
                                                                <p>followers {artist.followers.total}</p>
                                                                <a href={'https://open.spotify.com/artist/' + artist.id} className='ver_artist' target='_blank'>Ver artista</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className='generos'>
                                                                <p>
                                                                {artist.genres.map(
                                                                    (genero,index) => {
                                                                        return(
                                                                            <span className='genero'>{genero} </span>
                                                                        )
                                                                    }
                                                                )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey={artist.id}>
                                                <Card.Body>
                                                    <div className="row albums">
                                                        {this.state.albumnes != '' && artist.id == this.state.id? 
                                                            JSON.parse(this.state.albumnes).map(
                                                                album => {
                                                                    return (
                                                                        <div className="col-2">
                                                                            <div className="album">
                                                                                <a href={album.external_urls.spotify} target='_blank'>
                                                                                    <img src={album.images[1].url} class='img-fluid' alt=""/>
                                                                                    <p>{album.name}</p>
                                                                                </a>
                                                                                <p class='tracks'>Tracks : <span>{album.total_tracks}</span></p>
                                                                                <span>{album.release_date}</span>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            )
                                                        : ''}
                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            )
                        }) 
                    : ''}
                </main>
            </div>
        )
        
    }
}




export default Main;