import React, { Component } from 'react';
import axios from 'axios'

import Card from './card'

const imgregex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
class Posts extends Component {

    constructor(props){
        super(props)
        this.state={
            tag: this.props.tag,
            items:[]
        }

      this.getData()
    }

  getPosts(){
   return axios({
        method:'get',
        url:`https://www.reddit.com/r/${this.state.tag}.json`
      })
        .then(function(response) {
            console.log("===",response)
           return response
      });
}
    async getData(){
        var a = await this.getPosts()
        this.setState({
            items: a.data.data.children
        })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.tag !== nextProps.tag){
            this.setState({
                tag: nextProps.tag
            },()=>{
                this.getData()
            })
            
        }
    }

  render() {
      return(
        <div className="posts">
              {
                this.state.items &&
                this.state.items.map((item, id)=>{
                    
                    if(item.data.thumbnail!=="" && imgregex.test(item.data.thumbnail)){
                        return <Card key={id} data={item.data}/>
                    }
                })
              }
          </div>
      )
  }
}

export default Posts;
