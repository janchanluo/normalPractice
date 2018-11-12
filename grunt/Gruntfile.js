module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
		    grunt: {
		      files: {
		        'dist/basic.js': ['src/js/main.js','src/js/control.js','src/js/sollor.js']
		      }
		    }
	  },
	  uglify: {
	    grunt: {
	      files: {
	        'dest/main.min.js': ['dist/basic.js']
	      }
	    }
},
   
    cssmin: {
		  grunt: {
      files: [{
      expand: true,
      cwd: 'src/css',
      src: ['*.css', '!*.min.css'],
      dest: 'src/css',
      ext: 'main.min.css'
      }]
	 }
		  },
		  

     transport: {
				options: {
				    handlebars: {
				        id: 'handlebars'
				    }
							},
			    grunt: {
			    	files: [{
                expand: true,
                cwd: 'src/js',
                src: '**/*',
                dest: 'dist',
//              ext: '.min.js'
                
            }]
			      // Target-specific file lists and/or options go here.
			    },
			  },
    
    
    
  });
//   加载包含 "uglify" 任务的插件。
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-cmd-transport');
  
  

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['transport','cssmin','uglify','concat']);

};