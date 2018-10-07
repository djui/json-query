# json-query

A commandline tool (CLI) written in JS for Node.js that evaluates a given query on a given JSON string or the standard input.

The idea came from repetitive tasks on the shell to use *curl*/*wget* to retrieve JSON objects and evaluate them using a query. 

There is another implementation called [jsawk](http://github.com/micha/jsawk) that uses *awk*, *SpiderMonkey*, and your temp directory.

Maybe a Node.js project will make its way out of this to consolidate *curl*/*wget* and the JSON query part to something similar to [hTTY](http://github.com/htty/htty) or [resty](http://github.com/micha/resty) (but purely Node.js, no ruby).

## Examples

JSON string given:

    $ json-query 'foo' '{"foo": "bar"}'
    bar

Read from standard input:

    $ echo '{"foo": "bar"}' | json-query 'foo'
    bar

## Requirements

- Node.js (>= 0.1.100)

## Install

If you have no instance of Node.js installed, install it first:

    $ sudo apt-get install nodejs
  
or 

    % brew install node

Then download this script, make it executable and move it in a path your OS will find it:

    $ curl https://raw.githubusercontent.com/djui/json-query/master/json-query > json-query
    $ chmod u+x json-query && mv json-query /usr/local/bin/

## Usage

    Usage: json-query [OPTION]... QUERY [JSON]
    Evaluate the QUERY on a JSON object or standard input.
    Example: json-query 'foo' '{"foo": "bar"}'
  
      -h, --help     Shows this usage screen

## Authors

- Uwe Dauernheim

## Copyrights & Credits

```
Copyright (c) 2012 Uwe Dauernheim.  All Rights Reserved.

This file is provided to you under the Apache License,
Version 2.0 (the "License"); you may not use this file
except in compliance with the License.  You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
```

- Jason E. Smith 2008 APL
- Kris Zyp from SitePen for the dojox.json.query module
