module.exports = function(grunt) {
	grunt.initConfig({
		manifest: {
			generate: {
				src: ['staging.html', 'img/*', 'css/*', 'js/*']
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