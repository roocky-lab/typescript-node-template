/* eslint-env mocha */
import add from './add'
import assert = require('assert')

describe('app/add.ts', function () {
  it('1 + 1 = 2', () => {
    assert(add(1, 1) === 2)
  })
})