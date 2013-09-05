module.exports = function(grunt) {
	grunt.initConfig({
		smushit: {
			mygroup: {
				src: ['img/*.png']
			}
		}
	});

	grunt.loadNpmTasks('grunt-smushit');

	grunt.registerTask('default', ['smushit']);
};