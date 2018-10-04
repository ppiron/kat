exports.onCreateWebpackConfig = ({ stage, actions }) => {
	if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'cheap-module-source-map'
		});
	}
};