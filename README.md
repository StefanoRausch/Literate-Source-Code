# Literate Source Code

**Explain and Code.**

To document single source code units `files` can be a daunting task — at least it has been for me. On the one hand there are well established ( strict ) standards following for example the DocBlock Guidelines, such as [Javadoc Comment][Javadoc], [PHPDoc][PHPDoc] et al., and on the other side of the spectrum there is no [software documentation][] at all — the latter not being the choice of the day.

The question to be answered is what, how ( much ) and to whom exactly a project wants to deliver documentation-wise. Is there possibly a [KISS][] all-encompassing way to satisfactorily address all stakeholders? Maybe ...

LSC ( Literate Source Code ) might be a good concept to implement. It is flexible enough to mimic — literally to the dot — the strict way as well as to accommodate a very informal and / or minimalistic writing style.

## The Concept

Food for thought :

> Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do. — Donald E. Knuth in his article [Literate Programming][] submitted to [The Computer Journal][]

LSC is a spin-off of [Literate Programming][LP] in that respect that it embraces the weave ( documentation ) part of that approach and leaves the tangle ( programming ) aspect to be implemented by the project wanting to use the concept.

Taking the idea of using [Markdown][] for writing documentation — and ease of publishing — to a new level, attribution for the inspiration is given to [Literate CoffeeScript][], LSC can be applied to any chosen programming language :

- **Documentation starts at the beginning of a line**.
- **Code is indented ( at least and per additional level ) with exact 4 spaces and spaces only**.  

    The reason for this restriction is simple : to be able to use tabulators for adding paragraphs to list items as well as to have code blocks not recognised by the extraction tool.

That's it — apart from the implementation for extracting the source code.

## Implementations

List of contributions :

- Stefano F. Rausch :
    1. A simple [Grunt][] [File](implementations/stefano-rausch/Gruntfile.js.md) and the accompanying ( essential ) [package.json](implementations/stefano-rausch/package.json.md) file.
    2. The [Editorial][] [Workflow][LSC Editorial Workflow]!

Pull requests ( PR ) are more than welcome. Every contributor is attributed for and retains the copyright of the implementation PR published.

Happy literate source coding!

## Acknowledgements

Listed ( in no specific order ;) are the applications and technologies I use in the context of LSC :

- [CodeKit][] : Bryan Jones
- [Draft Control][] : Stephen Lind
- [One place for all your stuff, wherever you are][Dropbox] : Dropbox
- [Editorial][] : Ole Zorn
- [Build software better, together][GitHub] : GitHub
- [The JavaScript Task Runner][Grunt] : Grunt
- [Jade][] : TJ Holowaychuk, Forbes Lindesay and contributors
- [Literate][Literate CoffeeScript] [CoffeeScript][] : Jeremy Ashkenas
- [Markdown][] : John Gruber
- [MarkdownEditing][] a Sublime Text plugin : Brett Terpstra
- [Marked][] : Brett Terpstra
- [MultiMarkdown][] :  Fletcher T. Penny
- [MultiMarkdown Composer][] :  Fletcher T. Penny
- [Python][] : Python Software Foundation
- [Pythonista][] : Ole Zorn
- [Sass][] : Hampton Catlin, Nathan Weizenbaum, Chris Eppstein, and numerous contributors
- [Sublime Text][] : Jon Skinner

Thanks guys, you are awesome!

## License

Except where explicitly stated otherwise, all documents / documentation and ( future ) translations in this repository are licensed under the <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_GB">Creative Commons Attribution 3.0 Unported License</a>. ( Source ) Code is licensed under [The MIT License](LICENSE.md).

Based on a work at <https://github.com/StefanoRausch/Literate-Source-Code>.

## Changelog

1.0.1 : 2018-11-24

> Corrected misspelling.

1.0.0 : 2013-10-28

> Initial commit.

[CodeKit]: http://incident57.com/codekit
[CoffeeScript]: http://coffeescript.org
[Draft Control]: http://www.draftcontrol.com
[Dropbox]: http://www.dropbox.com
[Editorial]: http://omz-software.com/editorial
[GitHub]: http://github.com
[Grunt]: http://gruntjs.com
[Jade]: https://github.com/visionmedia/jade
[Javadoc]: http://en.wikipedia.org/wiki/Javadoc
[KISS]: http://en.wikipedia.org/wiki/KISS_principle
[Literate CoffeeScript]: http://coffeescript.org/#literate
[Literate Programming]: http://www.literateprogramming.com/knuthweb.pdf
[LP]: http://en.wikipedia.org/wiki/Literate_programming
[LSC Editorial Workflow]: http://editorial-app.appspot.com/workflow/6403405396312064/tV42vb3ZIGE
[Marked]: http://marked2app.com
[Markdown]: http://daringfireball.net/projects/markdown
[MarkdownEditing]: https://github.com/ttscoff/MarkdownEditing
[MultiMarkdown]: http://fletcherpenney.net/multimarkdown
[MultiMarkdown Composer]: http://multimarkdown.com
[PHPDoc]: http://en.wikipedia.org/wiki/PHPDoc
[Python]: http://python.org
[Pythonista]: http://omz-software.com/pythonista
[Sass]: http://sass-lang.com
[software documentation]: http://en.wikipedia.org/wiki/Software_documentation
[Sublime Text]: http://www.sublimetext.com
[The Computer Journal]: http://comjnl.oxfordjournals.org
