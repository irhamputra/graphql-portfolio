import React, {Component} from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql-material-theme';
import './index.css'
import defautlQuery from "./defaultQuery";

class App extends Component {
	state = {
		url: 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr',
		token: ''
	};
	
	graphQLFetcher = body =>
		fetch(this.state.url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.state.token}`
			},
			body: JSON.stringify(body)
		}).then(res => res.json());
	
	render() {
		return (
			<div style={{'height': '100%'}}>
				<GraphiQL query={defautlQuery} editorTheme="material" fetcher={this.graphQLFetcher}>
					<GraphiQL.Logo>
						My CV
					</GraphiQL.Logo>
				</GraphiQL>
			</div>
		)
	}
}

export default App;
