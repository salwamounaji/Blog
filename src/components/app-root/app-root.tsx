import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
        <ul>
              <li><a class="active" href="/" >Home</a></li>
              <li><a href="/new">New Article</a></li>
       </ul>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/new' component='app-new' />
              <stencil-route url='/details/:idd' component='app-details' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
