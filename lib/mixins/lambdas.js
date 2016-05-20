'use strict';

module.exports = function lambdas(req, res) {
  Object.assign(res.locals, {
    renderField() {
      return function renderFieldMixin() {
        const mixin = this.mixin;
        if (mixin && res.locals[mixin] && typeof res.locals[mixin] === 'function') {
          return res.locals[mixin]().call(this, this.key);
        }
      };
    }
  });
};