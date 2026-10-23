const {test}=require('node:test'); const assert=require('node:assert/strict');
const {summarize}=require('../src/index'); const _=require('lodash');
test('groups invoices by customer',()=>assert.deepEqual(summarize([{customer:'Ada',amount:4},{customer:'Ada',amount:6},{customer:'Lin',amount:3}]),{Ada:10,Lin:3}));
test('empty invoices',()=>assert.deepEqual(summarize([]),{}));
test('invalid amount rejected',()=>assert.throws(()=>summarize([{customer:'Ada',amount:-1}]),/amount/));
test('test boundary uses pinned dependency',()=>assert.deepEqual(_.sortBy([2,1]),[1,2]));
