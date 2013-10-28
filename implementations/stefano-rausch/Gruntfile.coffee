module.exports = ->
    @initConfig

        watch :
            literateCode :

                files : [
                    '**/*.haml.md', '**/*.html.md', '**/*.jade.md',
                    '**/*.css.md', '**/*.less.md', '**/*.rool.md', '**/*.sass.md', '**/*.scss.md', '**/*.stylus.md',
                    '**/*.coffee.md', '**/*.js.md', '**/*.php.md',
                    '**/*.ini.md', '**/*.json.md'
                ]

    @loadNpmTasks 'grunt-contrib-watch'

    @event.on 'watch', ( event, literateCode ) ->
        executableCode = literateCode.replace /(.+?)\.md$/g, '$1'

        if event is 'added' or event is 'changed'
            content = @file.read literateCode

            content = content.replace /^(\t|\S)+.*?$/mg, ''
            content = content.replace /\n+([ \t]*\n){2,}/g, '\n\n'
            content = content.replace /^(\n*[ \t]*\n)+/, ''
            content = content.replace /(\n*[ \t]*\n)+$/, '\n'
            content = content.replace /^ {4}/mg, ''

            @file.write executableCode, content

        else
            try
                @file.delete executableCode
            catch exception
                # file does not exist ...

    @registerTask 'default', [ 'watch' ]
