import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
            url:''
        }

        this.showLightBox = this.showLightBox.bind(this)
        this.hideLightBox = this.hideLightBox.bind(this)
    }

    showLightBox(e){
        this.setState({
            show: !this.state.show,
            url: e.target.src
        })
    }

    hideLightBox(e){
        this.setState({
            show: !this.state.show,
            url: ''
        })
    }

    largeImage(url){
        var a 
        url.map(item=>{
            a = item.resolutions[item.resolutions.length-1].url
        })
        return a;
    }

    componentDidMount(){
        document.addEventListener("keydown", (e)=>{
            e.stopImmediatePropagation()
            if(e.keyCode === 27){
                this.hideLightBox()
            }
        })
    }

  render() {
    return (
      <div className="card">
        <img className="thumbImage" 
            src={this.props.data.thumbnail}
            data-url={this.largeImage(this.props.data.preview.images)}
            onClick={this.showLightBox}/>
            <div className="metaData">
                <div className="votes">
                    <div className="ups"><span>&#x2764;</span>{this.props.data.ups}</div>
                    <div className="downs"><span>&#x2764;</span>{this.props.data.downs}</div>
                </div>
                <div className="title">
                    { this.props.data.title }
                </div>
            </div>

        {
            this.state.show &&
            <div className="lightbox" onClick={this.hideLightBox}>
                <img src = {this.state.url} />
                
                <div className="metaData">
                    <div className="votes">
                        <div className="ups"><span>&#x2764;</span>{this.props.data.ups}</div>
                        <div className="downs"><span>&#x2764;</span>{this.props.data.downs}</div>
                    </div>
                    <div className="title">
                        { this.props.data.title }
                    </div>
                </div>
                
            </div>
        }
      </div>
    );
  }
}

export default Card;
