(this.webpackJsonpspotify_test=this.webpackJsonpspotify_test||[]).push([[0],{44:function(t,e,s){},45:function(t,e,s){},65:function(t,e,s){},66:function(t,e,s){},69:function(t,e,s){},70:function(t,e,s){"use strict";s.r(e);var a=s(1),c=s(0),i=s.n(c),n=s(16),r=s.n(n),o=(s(44),s(45),s(46),s(17)),l=s.n(o),h=s(20),d=s(12),j=s(13),u=s(15),b=s(14),m=s(9),p=s.n(m),A=(s(65),function(t){Object(u.a)(s,t);var e=Object(b.a)(s);function s(t){var a;return Object(d.a)(this,s),(a=e.call(this,t)).state={search:""},a}return Object(j.a)(s,[{key:"get_search",value:function(t){this.setState({search:t.target.value})}},{key:"search",value:function(t){var e=this;p()("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer "+this.props.token},params:{q:this.state.search,type:"artist"},method:"GET"}).then((function(t){e.props.search_found(t),console.log(e.props.token);var s=t.data.artists.items[0].id;console.log(s),p()("https://api.spotify.com/v1/artists/"+s+"/related-artists",{headers:{Authorization:"Bearer "+e.props.token},params:{id:s},method:"GET"}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"parent",children:Object(a.jsxs)("div",{className:"bar",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(a.jsxs)("div",{className:"content_bar",children:[Object(a.jsx)("a",{href:"",className:"inicio",children:"Inicio"}),Object(a.jsx)("input",{className:"boton_input",onChange:this.get_search.bind(this),type:"text"}),Object(a.jsx)("button",{className:"buscar",onClick:this.search.bind(this),children:"buscar"})]})]})})}}]),s}(i.a.Component)),x=s(26),g=s(38),O=s(27),v=(s(66),function(t){Object(u.a)(s,t);var e=Object(b.a)(s);function s(t){var a;return Object(d.a)(this,s),(a=e.call(this,t)).state={artist:"",albums:!1,content_albums:[],id:"",albumnes:[]},a}return Object(j.a)(s,[{key:"albums",value:function(){var t=Object(h.a)(l.a.mark((function t(e){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.currentTarget),this,s=e.currentTarget.id,t.next=5,this.setState({albums:!0,id:s});case 5:return console.log(this.state.id),t.next=8,p()("https://api.spotify.com/v1/artists/"+this.state.id+"/albums",{headers:{Authorization:"Bearer "+this.props.token},params:{id:s},method:"GET"});case 8:return a=t.sent,console.log(this),a.data.items,console.log(a.data.items),t.next=14,this.setState({albumnes:JSON.stringify(a.data.items)});case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e="";return""!=this.props.found_data&&(e=(e=JSON.parse(this.props.found_data)).data.artists.items,console.log(e)),Object(a.jsx)("div",{children:Object(a.jsx)("main",{children:e?e.map((function(e,s){return Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(O.a.Header,{children:Object(a.jsx)(x.a.Toggle,{as:g.a,variant:"link",eventKey:e.id,children:Object(a.jsxs)("div",{class:"row content_artist",onClick:t.albums.bind(t),id:e.id,children:[Object(a.jsx)("div",{className:"col-1",children:Object(a.jsx)("div",{className:"cont_img",children:Object(a.jsx)("img",{className:"img-fluid",src:e.images[2]?e.images[2].url:"",alt:""})})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsxs)("div",{className:"info_artist",children:[Object(a.jsx)("h3",{class:"artist",children:e.name}),Object(a.jsxs)("p",{children:["followers ",e.followers.total]}),Object(a.jsx)("a",{href:"https://open.spotify.com/artist/"+e.id,className:"ver_artist",target:"_blank",children:"Ver artista"})]})}),Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)("div",{className:"generos",children:Object(a.jsx)("p",{children:e.genres.map((function(t,e){return Object(a.jsxs)("span",{className:"genero",children:[t," "]})}))})})})]})})}),Object(a.jsx)(x.a.Collapse,{eventKey:e.id,children:Object(a.jsx)(O.a.Body,{children:Object(a.jsx)("div",{className:"row albums",children:""!=t.state.albumnes&&e.id==t.state.id?JSON.parse(t.state.albumnes).map((function(t){return Object(a.jsx)("div",{className:"col-2",children:Object(a.jsxs)("div",{className:"album",children:[Object(a.jsxs)("a",{href:t.external_urls.spotify,target:"_blank",children:[Object(a.jsx)("img",{src:t.images[1].url,class:"img-fluid",alt:""}),Object(a.jsx)("p",{children:t.name})]}),Object(a.jsxs)("p",{class:"tracks",children:["Tracks : ",Object(a.jsx)("span",{children:t.total_tracks})]}),Object(a.jsx)("span",{children:t.release_date})]})})})):""})})})]})})})})):""})})}}]),s}(i.a.Component)),B=s(23),f=(s(69),function(t){Object(u.a)(s,t);var e=Object(b.a)(s);function s(t){var a;return Object(d.a)(this,s),(a=e.call(this,t)).state={artist:"",album_img:"",datos:[],token:"",search:[],bg:"",albums:[],recomended:"",id_artist:""},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var t=this;p()("https://accounts.spotify.com/api/token",{headers:{Authorization:"Basic "+btoa("8968861e742a4d3abd77147e67371983:6c5757156c9b430aae5d0f9998b054be"),"Content-Type":"application/x-www-form-urlencoded"},data:"grant_type=client_credentials",method:"POST"}).then((function(e){console.log(e),t.setState({token:e.data.access_token}),t.setState({datos:e}),p()("https://api.spotify.com/v1/tracks/2N0volXQpwsvjDorTTxBAU",{headers:{Authorization:"Bearer "+e.data.access_token},method:"GET"}).then((function(e){var s=e.data.artists[0].name,a=e.data.album.images[1].url;t.setState({artist:s,album_img:a}),console.log(e)})).catch((function(t){console.log("TOKEN ERROR ----- "+t)}))})).catch((function(t){console.log(t)})).then((function(t){}))}},{key:"get_search",value:function(){var t=Object(h.a)(l.a.mark((function t(e){var s,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e,console.log(s),a=e.data.artists.items[0].images[0].url,s=JSON.stringify(e),this.setState({search:s,bg:"url(".concat(a,")"),artist:e.data.artists.items[0].name,id_artist:e.data.artists.items[0].id}),console.log(this.state.id_artist),t.next=8,p()("https://api.spotify.com/v1/artists/"+this.state.id_artist+"/albums",{headers:{Authorization:"Bearer "+this.state.token},params:{id:""},method:"GET"});case 8:return c=t.sent,console.log(c),t.next=12,this.setState({recomended:JSON.stringify(c.data.items)});case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get_albums",value:function(t){var e;e=JSON.stringify(t),this.setState({albums:e}),console.log(this.state.albums)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(A,{datos:this.state.datos,token:this.state.token,albums:this.get_albums.bind(this),search_found:this.get_search.bind(this)}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"offset-3 col-6",children:Object(a.jsxs)("div",{className:"bg",style:{"background-image":this.state.bg},children:[Object(a.jsx)("div",{className:"screen"}),Object(a.jsx)("h2",{children:this.state.artist})]})}),Object(a.jsxs)("div",{className:"col-3",children:[Object(a.jsx)("h3",{className:"recomended_h3",children:"Recomended Albums"}),Object(a.jsx)(B.a,{children:""!=this.state.recomended?JSON.parse(this.state.recomended).map((function(t){return Object(a.jsx)(B.a.Item,{children:Object(a.jsxs)("div",{className:"recomended",children:[Object(a.jsxs)("a",{href:t.external_urls.spotify,target:"_blank",children:[Object(a.jsx)("img",{src:t.images[1].url,class:"img-fluid",alt:""}),Object(a.jsx)("p",{children:t.name})]}),Object(a.jsxs)("p",{class:"tracks",children:["Tracks : ",Object(a.jsx)("span",{children:t.total_tracks})]}),Object(a.jsx)("span",{children:t.release_date})]})})})):""})]})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"offset-3 col-9",children:Object(a.jsx)(v,{found_data:this.state.search,albums:this.state.albums,token:this.state.token})})})]})}}]),s}(i.a.Component));var k=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{}),Object(a.jsx)(f,{})]})},E=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(e){var s=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,n=e.getTTFB;s(t),a(t),c(t),i(t),n(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),E()}},[[70,1,2]]]);
//# sourceMappingURL=main.9100bd5f.chunk.js.map