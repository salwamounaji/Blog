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


  normalize(contenu: string): string {   //to make sure showing just the first 140 caracters from the article's content
     if (contenu) {
           return contenu.substring(0,140);
                  }
    return "Content not found for this box! ";
  }


 render() {
  return (
    <div id="global">
       {    
            this.data.map((item) => {
               return (<section>
                           <h1>{this.normalize(item.title)}</h1>
                           <div>{this.normalize(item.article)}...</div> 
                           <p><b>Created By : </b>{this.normalize(item.autor)} <b>AT</b> {item.creationDate}</p>
                           <p>
                              <stencil-route-link url={`/details/${item._id}`}>
                                <button>
                                     For more details
                                </button>
                              </stencil-route-link>
                            </p>
                            <br></br>
                       </section>
                      
        )}
        )
      }
    </div>
);
}

}
