# CSE web page

## General design

The current design is based on the
[previous page](http://blogs.cornell.edu/cseprogram)
with updates to the style and the internal organization.

For content management, I am using [Jekyll][jekyll] a plain-text
static site generator.  The chief goal of using Jekyll is to
separate the content from presentation, making it simpler to apply
general stylistic changes in the future.

The main repository for the sources is on GitHub, but updates to
the GitHub repository automatically trigger a remote script to
rebuild the web pages and push them to the server.

## Data files

The field membership, relevant courses, links to reading, and site
navigation are all [YAML][yaml] files that should be fairly self-explanatory.
These live under the `_data` subdirectory.

## Pages

Pages can be written in HTML or in [Markdown][markdown], based on the extension
(`.html` or `.md`).  Pages that should be linked from the main menu
can be added to the `nav.yml` data file; add a `nav` tag to the page
header information so that it shows as the active page in the menu
when it is being viewed.

## Style

The current site style is built on the Cornell CSS framework, one of the 
[free offerings from the Cornell Custom Development group][cwd-free].

[jekyll]: http://jekyllrb.com/
[markdown]: https://daringfireball.net/projects/markdown/
[yaml]: http://yaml.org/
[cwd-free]: http://www.it.cornell.edu/about/atsus/iws/rates.cfm
