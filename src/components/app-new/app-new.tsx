import { Component } from "@stencil/core";

@Component({
  tag: 'app-new',
  styleUrl: 'app-new.css',
})
export class AppNew{
  
  
  title: HTMLInputElement;
  article: HTMLTextAreaElement;
  author: HTMLInputElement;
  

  back(){
       alert('The article is added!');
       window.location.replace("/"); // or we can use RouterHistory
       }

  Senddata () {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/', {
             method: 'POST',
             headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
                      },
            body: JSON.stringify({  
                  title:  this.title.value,
                  article: this.article.value,
                  autor: this.author.value
                                }),
         }).then((response) => response.json())
           .then((responseJson) => {
                  this.back();
                  return responseJson.articles;
            })
           .catch((error) => {
                  console.error(error);
            });
      }

handleSubmit = (ev: Event) => {
     ev.preventDefault();
     this.Senddata();  
      }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> <b>Title: </b> </label><input type="text" ref={(e: HTMLInputElement) => this.title = e} placeholder="Title" required/>      
        <label> <b>Article: </b> </label><textarea ref={(e: HTMLTextAreaElement) => this.article = e} placeholder="Article" required/>
        <label> <b>Author:</b>  </label><input type="text" ref={(e: HTMLInputElement) => this.author = e}  placeholder="Author" required/>
        <input type="submit" value="Add" />
        <stencil-route-link url={`/`}>
                                <button >
                                     Cancel
                                </button>
         </stencil-route-link>
      </form>
    );
  }
}
