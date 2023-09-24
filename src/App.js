import { Component } from 'react';
class App extends Component {

  state = {
    posts:[
      {
        id: 1,
        title: 'Titulo1',
        body: 'corpo1'
      },
      
      {
        id: 2,
        title: 'Titulo2',
        body: 'corpo2'
      },
      {
        id: 1,
        title: 'Titulo3',
        body: 'corpo3'
      },

    ]
  };
  componentDidMount(){  }
  componentDidUpdate(){  }
  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
    }
  handleTimeout = () =>{
    const {posts, counter } = this.state;
    posts[0].title = 'O titulo mudou'
    
    this.timeoutUpdate = setTimeout(() =>{
    this.setState({posts, counter: counter+1});
  }, 1000);
  
  }
  render(){
    const { posts } = this.state;
    return(
      <div className='App'>
      {posts.map(post =>(
        <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      )
      )}
       </div>
    )
  }
}

export default App;
