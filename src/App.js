import React, {Component} from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import 'graphiql-material-theme';
import './index.css'
import defaultQuery from "./defaultQuery";

class App extends Component {
	state = {
		url: 'http://localhost:4000/',
	};
	
	graphQLFetcher = async body => {
		const option = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		};
		
		const res = await fetch(this.state.url, option);
		
		return await res.json()
	};
	
	render() {
		return (
			<div style={{'height': '100%'}}>
				<GraphiQL query={defaultQuery} editorTheme="material" fetcher={this.graphQLFetcher}>
					<GraphiQL.Logo>
						Muhamad Irham Prasetyo
					</GraphiQL.Logo>
				</GraphiQL>
			</div>
		)
	}
}

export default App;
