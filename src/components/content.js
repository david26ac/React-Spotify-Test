import Axios from 'axios';
import React from 'react';
import Bar from './bar';
import Main from './main';
import Carousel from 'react-bootstrap/Carousel';

import '../css/content.scss'
import key from '../key/key'
class content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            artist : '',
            album_img : '',
            datos: [],
            token: '',
            search : [],
            bg: '',
            albums: [],
            recomended: '',
            id_artist: ''
        }
    }
    componentDidMount(){
        let token = '';
        let embed_state = this
        //Get Token
        Axios('https://accounts.spotify.com/api/token',{
            headers : {
                'Authorization' : 'Basic ' + btoa(key),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : 'grant_type=client_credentials',
            method: 'POST'
        })
        .then(function (response) {
            // handle success
            console.log(response);
            embed_state.setState({
                token: response.data.access_token
            })
            embed_state.setState({
                datos: response
            })
            Axios('https://api.spotify.com/v1/tracks/2N0volXQpwsvjDorTTxBAU',{
                headers : {
                    'Authorization' : 'Bearer ' + response.data.access_token
                },
                method: 'GET'
            })
            .then(function (response) {
                // handle success
                let artist = response.data.artists[0].name;
                let album_img = response.data.album.images[1].url;
                embed_state.setState({
                    artist :  artist,
                    album_img : album_img
                })
                console.log(response)
            })
            .catch(function (error) {
            // handle error
                console.log('TOKEN ERROR ----- ' + error);
            })
    
        })
        .catch(function (error) {
        // handle error
            console.log(error);
        })
        .then(function (error) {
        // always executed
            //console.log(error)
        });

        // Ask for track or Playlist

    }
    async get_search(val){
        let data = val
        console.log(data)

        let img_bg = val.data.artists.items[0].images[0].url
        data = JSON.stringify(val)
        this.setState({
            search : data,
            bg : `url(${img_bg})`,
            artist:  val.data.artists.items[0].name,
            id_artist : val.data.artists.items[0].id
        })
        console.log(this.state.id_artist)
        let respuesta = await Axios('https://api.spotify.com/v1/artists/' + this.state.id_artist + '/albums',{
            headers : {
                'Authorization' : 'Bearer ' + this.state.token
            },
            params : {
                id : ''
            },
            method: 'GET'
        })
        console.log(respuesta)
        await this.setState({
            recomended : JSON.stringify(respuesta.data.items)
        })
    }
    get_albums(val){
        let data = val
        data = JSON.stringify(val)
        this.setState({
            albums : data
        })
        console.log(this.state.albums)
    }

    render(){
        return (
            <div className='container'>
                <Bar datos={this.state.datos} token={this.state.token} albums={this.get_albums.bind(this)} search_found={this.get_search.bind(this)}/>
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className='bg' style={{'background-image' : this.state.bg}}>   
                            <div className="screen"></div>
                            <h2>{this.state.artist}</h2>
                        </div>
                    </div>
                    <div className="col-3">
                        <h3 className='recomended_h3'>Recomended Albums</h3>
                        <Carousel>
                            {this.state.recomended != '' ? 
                                JSON.parse(this.state.recomended).map(
                                        album =>  {
                                            return(
                                                <Carousel.Item>
                                                    <div className="recomended">
                                                        <a href={album.external_urls.spotify} target='_blank'>
                                                            <img src={album.images[1].url} class='img-fluid' alt=""/>
                                                            <p>{album.name}</p>
                                                        </a>
                                                        <p class='tracks'>Tracks : <span>{album.total_tracks}</span></p>
                                                        <span>{album.release_date}</span>
                                                    </div>
                                                </Carousel.Item>
                                            )
                                        } 
                                    )
                                : ''}
                        </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-3 col-9">
                        <Main found_data = {this.state.search} albums={this.state.albums} token={this.state.token}/>
                    </div>
                </div>
            </div>
        )
        
    }
}




export default content;