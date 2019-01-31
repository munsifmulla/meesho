import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const navItems = ['alternativeart', 'pics', 'gifs', 'adviceanimals', 'cats', 'images', 'photoshopbattles', 'hmmm', 'all', 'aww']

class Nav extends Component{

  constructor(props){
    super(props)
    this.scrollNav()
    this.state={
      scrollLock:false
    }
  }

  scrollNav(){
    document.addEventListener("scroll", (e)=>{
      if(window.pageYOffset >= 62){
        this.setState({
          scrollLock:true
        })
      }else{
        this.setState({
          scrollLock:false
        })
      }
    })
  }

    render(){
        let activeClassName = this.props.active;
        return(
            <div>
              <nav >
                <ul className={(this.state.scrollLock)?'scrollLock':null}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {
                  navItems.map(item=>{
                      return (
                        <li key={item}>
                        <Link to={"/"+item} className={(activeClassName === item)?'active':null}>{item}</Link>
                        </li>
                      )
                  })
                }
                </ul>
              </nav>
            </div>
        )
    }
}

export default Nav