import test from 'node:test';
import assert from 'node:assert/strict';
import { beta } from '../src/beta.js';

test('beta returns its expected value', () => assert.equal(beta(), 7));
