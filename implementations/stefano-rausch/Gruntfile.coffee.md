# Gruntfile

The `Gruntfile` is a valid CoffeeScript file that belongs in the root directory of your project, next to the `package.json` file, and should be committed with your project source. It is used to configure or define tasks and load [Grunt][] plugins.

> Wrapper function for extracting source code from the documentation file.
>
> version : 1.0.0+20131028  
> license : The MIT License &copy; 2013 Stefano F. Rausch \< stefano@rausch-e.net >  
> see : [Literate Source Code][] — [Gruntfile.js][] and [package.json][]

    module.exports = ->
        @initConfig

The [grunt-contrib-watch][] plugin ensures that the process of filtering out the executable code will happen on the fly, if the `Grunt` command has been issued with the `watch` option. We only need to declare the watch `literateCode` task.

            watch :
                literateCode :

Following the file extension convention suggested by [Literate CoffeeScript][], some of the popular configuration, mark up / pre-processor / scripting languages for web development have been marked as literate by appending `.md` [^MD] to the original file extension. The [Minimal Matching Utility][] directives are used for folder independent watching. Just work with the LSC [^LSC] files as you would do with traditional files.

                    files : [
                        '**/*.haml.md', '**/*.html.md', '**/*.jade.md',
                        '**/*.css.md', '**/*.less.md', '**/*.rool.md', '**/*.sass.md', '**/*.scss.md', '**/*.stylus.md',
                        '**/*.coffee.md', '**/*.js.md', '**/*.php.md',
                        '**/*.ini.md', '**/*.json.md'
                    ]

Once the plugin has been installed, it should be enabled :)

        @loadNpmTasks 'grunt-contrib-watch'

Every time a file ( extension ) being watched is `added` or `changed` the watch task triggers the respective event. This is the hook used to extract the executable code and to write the target file — by removing the file extension `.md`.

        @event.on 'watch', ( event, literateCode ) ->
            executableCode = literateCode.replace /(.+?)\.md$/g, '$1'

            if event is 'added' or event is 'changed'
                content = @file.read literateCode

Regular expressions are used to remove documentation lines, multiple empty lines, empty lines at the beginning of the file and empty lines at the end of the file, except the last one. And just for layout reasons a one level de-indentation of the executable code is performed.

                content = content.replace /^(\t|\S)+.*?$/mg, ''
                content = content.replace /\n+([ \t]*\n){2,}/g, '\n\n'
                content = content.replace /^(\n*[ \t]*\n)+/, ''
                content = content.replace /(\n*[ \t]*\n)+$/, '\n'
                content = content.replace /^ {4}/mg, ''

                @file.write executableCode, content

In addition to the above stated the `deleted` event is catched to clean up any orphaned target files as well.

            else
                try
                    @file.delete executableCode
                catch exception
                    # file does not exist ...

The final step for Grunt to successfully being able to process the watch task and the respective events is to register the task — for easy invocation purposes as the default.

        @registerTask 'default', [ 'watch' ]

## Source Code

Have a look at [Gruntfile.coffee][], which has been extracted from this LSC file.

Happy literate source coding!

[^LSC]: Literate Source Code
[^MD]: [Markdown](http://daringfireball.net/projects/markdown " John Gruber ")

[Grunt]: http://gruntjs.com " The JavaScript Task Runner "
[grunt-contrib-watch]: https://github.com/gruntjs/grunt-contrib-watch " Kyle R. Young "
[Gruntfile.coffee]: Gruntfile.coffee
[Gruntfile.js]: Gruntfile.js.md
[Literate CoffeeScript]: http://coffeescript.org/#literate " Jeremy Ashkenas "
[Literate Source Code]: https://github.com/StefanoRausch/Literate-Source-Code " Stefano F. Rausch "
[Minimal Matching Utility]: https://github.com/isaacs/minimatch " Isaac Z. Schlueter "
[package.json]: package.json.md
