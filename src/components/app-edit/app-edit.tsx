import { Component, Prop, State } from "@stencil/core";
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-edit',
  styleUrl: 'app-edit.css',
})
export class AppEdit{

  @State() data: any = [];
  @Prop() match: MatchResults;
  @Prop() history : RouterHistory;

  title: HTMLInputElement;
  article: HTMLTextAreaElement;
  author: HTMLInputElement;


  componentWillLoad() {
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+this.match.params.idd)
     .then(res => res.json())
     .then(res => this.data = res);
    
    }

  
  back(){
     this.history.goBack();
    }

  modifydata(){
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/', {
           method: 'PUT',
           headers: {
                    Accept: 'application/json',
                   'Content-Type': 'application/json',
                    },
           body: JSON.stringify({  
                   _id: this.match.params.idd,
                   title:  this.title.value,
                   article: this.article.value,
                   autor: this.author.value,
                   creationDate: this.data.creationDate
                                }),
           }).then((response) => response.json())
             .then((responseJson) => {
                  alert('The article is modified!');
                  return responseJson.articles;
              })
             .catch((error) => {
                  alert('Please retry again!!');
                  console.error(error);
             });
    }

  handleSubmit = (ev: Event) => {
    ev.preventDefault(); 
    this.modifydata();
    this.back();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label> <b>Title: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.title = e} placeholder="Title" value={this.data.title} required/>      
      <label> <b>Article: </b> </label><textarea ref={(e: HTMLTextAreaElement) => this.article = e} placeholder="Article"  value={this.data.article} required/>
      <label> <b>Author:</b>  </label><input type="text" ref={(e: HTMLInputElement) => this.author = e}  placeholder="Author" value={this.data.autor} required/>
      <input type="submit" value="Modify" />
      <stencil-route-link url={`/`}>
                              <button >
                                   Cancel
                              </button>
       </stencil-route-link>
    </form>
    );
  }
}
