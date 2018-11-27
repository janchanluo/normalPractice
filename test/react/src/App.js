import React, { Component } from 'react';
import {BrowserRouter as Router,Link,HashRouter,Route} from 'react-router-dom';
import './App.css';
import Info from './components/info';


/*
       改变路由：
       	1. 通过hahs
       	      127.0.0.1:3000#/index
       	
       	2. 通过历史记录
       				127.0.0.1:3000/index
       				
       				
       	
       	react-router-dom : 里面有改变路由的各种组件
       		 
 * 
*/


//hashHistory.push('/index');
class App extends Component {
  render() {
    return (
    	<HashRouter>
	      <div className="App">
	      	<ul className="barNav">
	      			<li>
	      					<Link to="/index" >首页</Link>
	      			</li>
	      			<li>
	      					<Link to="/info">详情</Link>
	      			</li>
	      			<li>
	      					<Link to="/my">我的</Link>
	      			</li>
	      	</ul>
	        <Route path="/index" render={()=>{
	              return(
	              	<div>我是首页</div>
	              )
	        }}></Route>
	        <Route path="/info" component={Info}></Route>
	        <Route path="/my"></Route>
	        
	      </div>
      </HashRouter>
    );
  }
  
  
}

export default App;
