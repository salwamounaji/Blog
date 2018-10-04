import { Component, State} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

 @State() data: any = [];

  componentWillLoad() {
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost')
    .then(res => res.json())
    .then(res => this.data = res);
  }

  normalize(contenu: string): string {
    if (contenu) {
      return contenu.substring(0,140);
    }
    return 'null';
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
       {    
            this.data.map((item) => {
               return (<tr>
                           <td>{this.normalize(item.title)}</td>
                           <td id="tdarticle">{this.normalize(item.article)} <a>...</a></td> 
                           <td>{this.normalize(item.autor)}</td>
                           <td>{item.creationDate}</td>
                           <td>
                              <stencil-route-link url={`/details/${item._id}`}>
                                <button>
                                     For more details
                                </button>
                              </stencil-route-link>
                           </td>
                       </tr>
        )}
        )
      }
  </table>
);
}

}
