/*jslint indent: 2, plusplus: false, browser: true*/
function assert(message, expr) {
  if (!expr) {
    throw new Error(message);
  }

  assert.count++;

  return true;
}

assert.count = 0;
