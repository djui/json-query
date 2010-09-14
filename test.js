var assert = require("assert")
var exec = require("child_process").exec

const EXIT_SUCCESS = 0
const EXIT_NOTFOUND = 1
const EXIT_USAGE = 2
const EXIT_PARSE = 3
const EXIT_QUERY = 4

exec("json-query", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_USAGE)
})

exec("json-query -h", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_USAGE)
})

exec("json-query --help", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_USAGE)
})

exec("json-query -x", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_USAGE)
})

exec("json-query --foo", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_USAGE)
})

exec("json-query -n", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_USAGE)
})

exec("json-query --no-escape", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_USAGE)
})

exec("json-query foo '[]'", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_NOTFOUND)
  assert.strictEqual(stdout, "undefined\n")
})

exec("json-query foo [bar]", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_PARSE)
})

exec("json-query ! '[]'", function (err, stdout, stderr) {
  assert.strictEqual(err.code, EXIT_QUERY)
})

exec("json-query -n foo '{\"foo\": \"bar\"}'", function (err, stdout, stderr) {
  assert.strictEqual(stdout, "bar\n")
})

exec("json-query foo '{\"foo\": \"bar\"}'", function (err, stdout, stderr) {
  assert.strictEqual(stdout, "\"bar\"\n")
})

exec("json-query '?foo=\"bar\"&rating>3' '[{\"foo\":\"bar\",\"rating\":4}, {\"foo\":\"baz\",\"rating\":2}]'", function (err, stdout, stderr) {
  assert.strictEqual(stdout, "[{\"foo\":\"bar\",\"rating\":4}]\n")
})

exec("json-query '$[?price<15.00][\\rating][0:10]' '[{\"price\":12.25,\"rating\":4},{\"price\":17.75,\"rating\":2}]'", function (err, stdout, stderr) {
  assert.strictEqual(stdout, "[{\"price\":12.25,\"rating\":4}]\n")
})

exec("json-query '$.customers[?purchases > 21 & name=\"Jake\"][\\purchases]' '{\"customers\":[{\"name\":\"Susan\",\"purchases\":29}, {\"name\":\"Kim\",\"purchases\":150}, {\"name\":\"Jake\",\"purchases\":27}]}'", function (err, stdout, stderr) {
  assert.strictEqual(stdout, "[{\"name\":\"Jake\",\"purchases\":27}]\n")
})
