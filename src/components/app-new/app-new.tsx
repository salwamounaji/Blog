import { Component } from "@stencil/core";

@Component({
  tag: 'app-new',
  styleUrl: 'app-new.css',
})
export class AppNew{
  
  
  title: HTMLInputElement;
  article: HTMLInputElement;
  author: HTMLInputElement;
  
  

  handleSubmit = (ev: Event) => {
    ev.preventDefault();
    this.Senddata();
    
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
            return responseJson.articles;
          })
          .catch((error) => {
            console.error(error);
          });
}
  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label> Title: </label><input type="text" ref={(e: HTMLInputElement) => this.title = e} placeholder="Title" required/>      
        <label> Article: </label><input type="text" ref={(e: HTMLInputElement) => this.article = e} placeholder="Article" required/>
        <label> Author:   </label><input type="text" ref={(e: HTMLInputElement) => this.author = e}  placeholder="Author" required/>
        <input type="submit" value="Add" />
      </form>
      </div>
    );
  }
}
