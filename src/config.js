const config = {
	backendUrl:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:9000/.netlify/functions/app'
			// Naming of the ENV-Variable: https://create-react-app.dev/docs/adding-custom-environment-variables
			:  process.env.REACT_APP_BACKEND_URL,
	repoUrl: 'https://github.com/sorxrob/spotify-stats',
};

export default config;
