# package

The `package.json` file belongs in the root directory of your project, next to the `Gruntfile` — see <http://gruntjs.com/getting-started>, and should be committed with your project source. It stores metadata for projects published as [npm][] modules. Running `npm install` in the same folder will install the correct version of each [dependency][] listed therein.

> Barebone configuration.
>
> see : [Literate Source Code][] — [Gruntfile.coffee][] and [Gruntfile.js][]

    {
        "name": "Literate-Source-Code",
        "description": "Write and Code.",
        "version": "1.0.0",
        "devDependencies": {
            "grunt": "~0.4.1",
            "grunt-contrib-watch": "~0.5.3"
        }
    }

Happy literate source coding!

[dependency]: https://npmjs.org/doc/json.html#devDependencies " Specifics of npm's package.json Handling "
[Gruntfile.coffee]: Gruntfile.coffee.md
[Gruntfile.js]: Gruntfile.js.md
[Literate Source Code]: https://github.com/StefanoRausch/Literate-Source-Code " Stefano F. Rausch "
[npm]: https://npmjs.org " Node Packaged Modules "
