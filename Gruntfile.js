module.exports = function(grunt) {
	grunt.initConfig({
		manifest: {
			generate: {
				options: {

				},
				src: ['staging.html', 'img/*', 'css/*']
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