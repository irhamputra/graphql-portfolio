import React, {Component} from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

import 'graphiql-material-theme';
import './index.css'
import defautlQuery from "./defaultQuery";

class App extends Component {
	state = {
		url: 'http://localhost:4000/',
	};
	
	graphQLFetcher = body =>
		fetch(this.state.url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body)
		}).then(res => res.json());
	
	render() {
		return (
			<div style={{'height': '100%'}}>
				<GraphiQL query={defautlQuery} editorTheme="material" fetcher={this.graphQLFetcher}>
					<GraphiQL.Logo>
						Muhamad Irham Prasetyo
					</GraphiQL.Logo>
				</GraphiQL>
			</div>
		)
	}
}

export default App;
