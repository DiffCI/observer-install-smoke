import test from 'node:test';
import assert from 'node:assert/strict';
import { alpha } from '../src/alpha.js';

test('alpha returns its expected value', () => assert.equal(alpha(), 42));
