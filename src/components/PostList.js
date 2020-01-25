import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1, 
        author: {
          name: 'Neil Cook',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '04 de Jul 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat esta contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=8'
            },
            date: '04 Jul 2019',
            content: 'Esta sempre em busca de novos membros para o time'
          }
        ]
      }
    ]
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;