import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

// if (capitalize('hello') !== 'Hello') {
// 	throw new Error('Функция работает не верно');
// }
assert.strictEqual(capitalize('hello'), 'Hello')
assert.strictEqual(capitalize(''), '');

// if (capitalize('') !== '') {
// 	throw new Error('Функция работает не верно');
// };

console.log('Все тесты пройдены успешно!');
