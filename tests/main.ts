import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as main from '../src/main';

test('run', () => {
    assert.type(main.run, 'function');
});
