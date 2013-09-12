module.exports = function(grunt) {
	grunt.initConfig({
		manifest: {
			generate: {
				src: ['index.html', 'img/*.png', 'css/*.css', 'css/Default/*', 'js/*.js']
			}
		},
		smushit: {
			mygroup: {
				src: ['img/*.png']
			}
		}
	});

	grunt.loadNpmTasks('grunt-manifest');
	grunt.loadNpmTasks('grunt-smushit');

	grunt.registerTask('default', ['manifest', 'smushit']);
};