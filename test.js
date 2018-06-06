import test from 'ava';
import m from '.';

test('random()', async t => {
	const data = await m();

	t.is(data, data);
});

test('currency', async t => {
	const data = await m('usd');

	t.is(data, data);
});
