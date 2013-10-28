module.exports = function( grunt )
{
    grunt.initConfig({

        watch : {
            literateCode : {

                files : [
                    '**/*.haml.md', '**/*.html.md', '**/*.jade.md',
                    '**/*.css.md', '**/*.less.md', '**/*.rool.md', '**/*.sass.md', '**/*.scss.md', '**/*.stylus.md',
                    '**/*.coffee.md', '**/*.js.md', '**/*.php.md',
                    '**/*.ini.md', '**/*.json.md'
                ]
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    grunt.event.on( 'watch', function( event, literateCode ) {
        var executableCode = literateCode.replace( /(.+?)\.md$/g, '$1' );

        if( event === 'added' || event === 'changed' ) {
            var content = grunt.file.read( literateCode );

            content = content.replace( /^(\t|\S)+.*?$/mg, '' );
            content = content.replace( /\n+([ \t]*\n){2,}/g, '\n\n' );
            content = content.replace( /^(\n*[ \t]*\n)+/, '' );
            content = content.replace( /(\n*[ \t]*\n)+$/, '\n' );
            content = content.replace( /^ {4}/mg, '' );

            grunt.file.write( executableCode, content );

        } else try {
            grunt.file.delete( executableCode );
        } catch ( exception ) {
            // file does not exist ...
        }
    });

    grunt.registerTask( 'default', [ 'watch' ] );
};
