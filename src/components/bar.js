import React from 'react';
import Axios from 'axios';

import '../css/bar_css.scss';
import logo from'../img/logo.png'

class Bar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : ''
        }
    }
    get_search(event){
        this.setState({
            search : event.target.value
        })
    }
    search(e){
        let temp_this = this
        Axios('https://api.spotify.com/v1/search',{
            headers : {
                'Authorization' : 'Bearer ' + this.props.token
            },
            params : {
                q : this.state.search,
                type: 'artist'
            },
            method: 'GET'
        })
        .then(function (response) {
            // handle success
            temp_this.props.search_found(response)
            console.log(temp_this.props.token)
            let artista = response.data.artists.items[0].id
            console.log(artista)

            Axios('https://api.spotify.com/v1/artists/' + artista + '/related-artists',{
                headers : {
                    'Authorization' : 'Bearer ' + temp_this.props.token
                },
                params : {
                    id : artista
                },
                method: 'GET'
            })
            .then(function (response) {
                // handle success
                console.log(response)
            })
            .catch(function (error) {
                // handle success
                console.log(error)
            })
        })


    }

    render(){
        return(
            <div className="parent">
                <div className="bar">
                    <img src={logo} alt=""/>
                    <div className="content_bar">
                        <a href="" className='inicio'>Inicio</a>
                        <input className='boton_input' onChange={this.get_search.bind(this)} type="text"/>
                        <button className='buscar' onClick={this.search.bind(this)}>buscar</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bar;
