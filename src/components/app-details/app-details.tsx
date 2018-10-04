import { Component, State, Prop} from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-details',
  styleUrl: 'app-details.css',
  shadow: true
})

export class AppDetails {

 @State() data: any = [];
 @Prop() match: MatchResults;
 @Prop() history : RouterHistory;


 
  componentWillLoad() {
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+this.match.params.idd)
    .then(res => res.json())
    .then(res => this.data = res);
    
    }

  back(){
      alert("The article is deleted!");
      this.history.goBack();
     }

  deletearticle() {
      return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+this.match.params.idd, {
        method: 'delete'
      }).then(response =>
        response.json().then(json => {
          return JSON.parse(json);
        })
      );
    }
    

  handleClick = (ev: Event) => {
      ev.preventDefault();
      this.deletearticle();
      this.back();

    }

 render() {
  return (
    <div>
         <h1>{this.data.title}</h1>
         <p>{this.data.article} </p>
         <span id="auth"><b>Author: </b>{this.data.autor}</span>
         <span id="date"><b>Creation Date: </b>{this.data.creationDate}</span><br></br>
         <button id="delete" onClick={ (ev: UIEvent) => this.handleClick(ev)}>DELETE</button>
         <stencil-route-link url={`/edit/${this.data._id}`}>
                                <button id="edit">
                                     EDIT
                                </button>
         </stencil-route-link>
  
    </div>
 
);
}

}
