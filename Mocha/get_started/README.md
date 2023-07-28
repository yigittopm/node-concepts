# BAŞLARKEN

```bash
$ npm install mocha
$ mkdir test
$ $EDITOR test/test.js # veya favori editörünüzle açın
```

Editörünüzde:
```js
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('Değer mevcut değilse -1 döndürmelidir', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

Terminale geri dönün:
```bash
$ ./node_modules/mocha/bin/mocha

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (9ms)
```

Package.json dosyanızda bir test betiği oluşturun:

```json
"script": {
    "test": "mocha"
}
```

Ardından testleri çalıştırın:
```bash
$ npm test
```