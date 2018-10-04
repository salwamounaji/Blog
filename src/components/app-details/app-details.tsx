import { Component, State, Prop} from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-details',
  styleUrl: 'app-details.css',
  shadow: true
})

export class AppDetails {

 @State() data: any = [];
 @Prop() match: MatchResults;
 
  componentWillLoad() {
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+this.match.params.idd)
    .then(res => res.json())
    .then(res => this.data = res);
    
  }

 render() {
  return (
    <table>
      <tr>
           <th>Title</th>   
           <th>Article</th> 
           <th>Author</th> 
           <th>Date</th>     
      </tr> 
      <tr>
                           <td>{this.data.title}</td>
                           <td> {this.data.article}</td> 
                           <td>{this.data.autor}</td>
                           <td>{this.data.creationDate}</td>
       
                       </tr>
       
  </table>
);
}

}
