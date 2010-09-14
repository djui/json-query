# json-query

A command-line tool (CLI) written in JS for Node.js that evaluates a given query on a given JSON string or the standard input.

The idea came from repetitive tasks on the shell to use *curl*/*wget* to retrieve JSON objects and evaluate them using a query. 

There is another implementation called [jsawk](http://github.com/micha/jsawk) that uses the *awk*, *SpiderMonkey*, and your temp directory.

Maybe a Node.js project will make its way out of this to consolidate *curl*/*wget* and the JSON query part to something similar to [hTTY](http://github.com/htty/htty) or [resty](http://github.com/micha/resty) (but purely Node.js, no ruby).

## Examples

JSON string given:

    $ json-query 'foo' '{"foo": "bar"}'
    bar

Read from standard input:

    $ echo '{"foo": "bar"}' | json-query 'foo'
    bar

## Requirements

- Node.js (>= 2.0.0)

## Install

If you have no instance of Node.js installed, install it first:

    $ sudo apt-get install nodejs
  
or 

    % brew install node

Then download this script, make it executable and move it in a path your OS will find it:

    $ curl http://github.com/djui/json-query/raw/master/json-query > json-query
    $ chmod u+x json-query && mv json-query /usr/local/bin/

## Usage

    Usage: json-query [OPTION]... QUERY [JSON]
    Evaluate the QUERY on a JSON object or standard input.
    Example: json-query 'foo' '{"foo": "bar"}'
  
      -h, --help     Shows this usage screen

## Authors

- Uwe Dauernheim, @uwe_ uwe@dauernheim.net http://djui.de

## Copyrights & Credits

- Jason E. Smith 2008 Licensed under the Apache License, Version 2.0 (the "License")
- Kris Zyp from SitePen for the dojox.json.query module
