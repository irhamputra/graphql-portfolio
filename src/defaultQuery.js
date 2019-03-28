const defautlQuery = `
	# Hi!👋🏼 My name is Muhamad Irham Prasetyo
	# I am a Front-end Developer from Indonesia 🇮🇩 based in Leipzig 🇩🇪
	# I made this GraphQL IDE as my CV because everyone loves GraphQL
	# Also GraphQL is more way easier to make REST
	# You can fetch, which data do you want to know about me
	# Check out the docs which information do you want to know
	# Here is the sample data and click play
	
	{
		me {
			name
			age
			email
			employed
		}
		job {
			previous {
				name
				city
				country
				duration
			}
			now {
				name
				city
				country
				duration
			}
		}
	}
`

export default defautlQuery;
