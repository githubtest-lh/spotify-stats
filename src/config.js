//trigger redeploy
const BACKEND_URL = process.env.BACKEND_URL
const config = {
	backendUrl:
		process.env.NODE_ENV === 'development'
			? 'http://localhost:9000/.netlify/functions/app'
			:  BACKEND_URL,
//			: 'https://spotify-stats-server.netlify.com/.netlify/functions/app',
	repoUrl: 'https://github.com/sorxrob/spotify-stats',
};

export default config;
