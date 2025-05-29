(function () {
    const _0x50bc80 = document.createElement("link").relList;
    if (_0x50bc80 && _0x50bc80.supports && _0x50bc80.supports("modulepreload")) {
      return;
    }
    for (const _0x2dac4f of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
      _0x4a54e6(_0x2dac4f);
    }
    new MutationObserver(_0x4e84f9 => {
      for (const _0x203a34 of _0x4e84f9) {
        if (_0x203a34.type === "childList") {
          for (const _0x341845 of _0x203a34.addedNodes) {
            if (_0x341845.tagName === "LINK" && _0x341845.rel === "modulepreload") {
              _0x4a54e6(_0x341845);
            }
          }
        }
      }
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function _0x726d43(_0x13e0e7) {
      const _0x45de13 = {};
      if (_0x13e0e7.integrity) {
        _0x45de13.integrity = _0x13e0e7.integrity;
      }
      if (_0x13e0e7.referrerPolicy) {
        _0x45de13.referrerPolicy = _0x13e0e7.referrerPolicy;
      }
      if (_0x13e0e7.crossOrigin === "use-credentials") {
        _0x45de13.credentials = "include";
      } else if (_0x13e0e7.crossOrigin === "anonymous") {
        _0x45de13.credentials = "omit";
      } else {
        _0x45de13.credentials = "same-origin";
      }
      return _0x45de13;
    }
    function _0x4a54e6(_0xd99b9c) {
      _0x166aa6();
      _0x5d74c2();
      if (_0xd99b9c.ep) {
        return;
      }
      _0xd99b9c.ep = true;
      const _0x1c1d4f = _0x726d43(_0xd99b9c);
      fetch(_0xd99b9c.href, _0x1c1d4f);
    }
  })();
  const ce = (_0x3a2b3f, _0x411d5a) => _0x3a2b3f === _0x411d5a;
  const ue = Symbol("solid-track");
  const O = {
    equals: ce
  };
  let ee = ie;
  const v = 1;
  const U = 2;
  const te = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var p = null;
  let k = null;
  let h = null;
  let d = null;
  let A = null;
  let H = 0;
  function M(_0x39e37e, _0x441c61) {
    const _0x18dd3b = h;
    const _0x498bf4 = p;
    const _0x4148fc = _0x39e37e.length === 0;
    const _0x1130a2 = _0x4148fc ? te : {
      owned: null,
      cleanups: null,
      context: null,
      owner: _0x441c61 === undefined ? _0x498bf4 : _0x441c61
    };
    const _0x43e54d = _0x4148fc ? _0x39e37e : () => _0x39e37e(() => L(() => K(_0x1130a2)));
    p = _0x1130a2;
    h = null;
    try {
      return N(_0x43e54d, true);
    } finally {
      h = _0x18dd3b;
      p = _0x498bf4;
    }
  }
  function se(_0x1e3e90, _0x223cfd) {
    _0x223cfd = _0x223cfd ? Object.assign({}, O, _0x223cfd) : O;
    const _0x18c2ee = {
      value: _0x1e3e90,
      observers: null,
      observerSlots: null,
      comparator: _0x223cfd.equals || undefined
    };
    const _0x49a43b = _0x34d2c2 => {
      if (typeof _0x34d2c2 == "function") {
        _0x34d2c2 = _0x34d2c2(_0x18c2ee.value);
      }
      return le(_0x18c2ee, _0x34d2c2);
    };
    return [ne.bind(_0x18c2ee), _0x49a43b];
  }
  function _(_0x237a8d, _0x457e06, _0x3d599e) {
    const _0x39da50 = Z(_0x237a8d, _0x457e06, false, v);
    T(_0x39da50);
  }
  function ae(_0x1d4301, _0x1c60c3, _0x5150b2) {
    ee = ye;
    const _0x1245d4 = Z(_0x1d4301, _0x1c60c3, false, v);
    if (!_0x5150b2 || !_0x5150b2.render) {
      _0x1245d4.user = true;
    }
    if (A) {
      A.push(_0x1245d4);
    } else {
      T(_0x1245d4);
    }
  }
  function he(_0x44cf9d, _0x2b28b1, _0x9ab84b) {
    _0x9ab84b = _0x9ab84b ? Object.assign({}, O, _0x9ab84b) : O;
    const _0x478fb8 = Z(_0x44cf9d, _0x2b28b1, true, 0);
    _0x478fb8.observers = null;
    _0x478fb8.observerSlots = null;
    _0x478fb8.comparator = _0x9ab84b.equals || undefined;
    T(_0x478fb8);
    return ne.bind(_0x478fb8);
  }
  function L(_0x50b44f) {
    if (h === null) {
      return _0x50b44f();
    }
    const _0x243cdb = h;
    h = null;
    try {
      return _0x50b44f();
    } finally {
      h = _0x243cdb;
    }
  }
  function pe(_0x1bb1bb) {
    ae(() => L(_0x1bb1bb));
  }
  function de(_0x491ce4) {
    if (p !== null) {
      if (p.cleanups === null) {
        p.cleanups = [_0x491ce4];
      } else {
        p.cleanups.push(_0x491ce4);
      }
    }
    return _0x491ce4;
  }
  function ne() {
    if (this.sources && this.state) {
      if (this.state === v) {
        T(this);
      } else {
        const _0x5297ee = d;
        d = null;
        N(() => j(this), false);
        d = _0x5297ee;
      }
    }
    if (h) {
      const _0x106e22 = this.observers ? this.observers.length : 0;
      if (h.sources) {
        h.sources.push(this);
        h.sourceSlots.push(_0x106e22);
      } else {
        h.sources = [this];
        h.sourceSlots = [_0x106e22];
      }
      if (this.observers) {
        this.observers.push(h);
        this.observerSlots.push(h.sources.length - 1);
      } else {
        this.observers = [h];
        this.observerSlots = [h.sources.length - 1];
      }
    }
    return this.value;
  }
  function le(_0x28f295, _0x3c48bc, _0x5394aa) {
    let _0x240874 = _0x28f295.value;
    if (!_0x28f295.comparator || !_0x28f295.comparator(_0x240874, _0x3c48bc)) {
      _0x28f295.value = _0x3c48bc;
      if (_0x28f295.observers && _0x28f295.observers.length) {
        N(() => {
          for (let _0x27ed7b = 0; _0x27ed7b < _0x28f295.observers.length; _0x27ed7b += 1) {
            const _0x1cb505 = _0x28f295.observers[_0x27ed7b];
            const _0xfd4f97 = k && k.running;
            if (_0xfd4f97) {
              k.disposed.has(_0x1cb505);
            }
            if (_0xfd4f97 ? !_0x1cb505.tState : !_0x1cb505.state) {
              if (_0x1cb505.pure) {
                d.push(_0x1cb505);
              } else {
                A.push(_0x1cb505);
              }
              if (_0x1cb505.observers) {
                re(_0x1cb505);
              }
            }
            if (!_0xfd4f97) {
              _0x1cb505.state = v;
            }
          }
          if (d.length > 1000000) {
            d = [];
            throw new Error();
          }
        }, false);
      }
    }
    return _0x3c48bc;
  }
  function T(_0x21ded4) {
    if (!_0x21ded4.fn) {
      return;
    }
    K(_0x21ded4);
    const _0x5b266c = p;
    const _0x1e5280 = h;
    const _0x414fe4 = H;
    h = p = _0x21ded4;
    ge(_0x21ded4, _0x21ded4.value, _0x414fe4);
    h = _0x1e5280;
    p = _0x5b266c;
  }
  function ge(_0x41af7c, _0x447546, _0x397674) {
    let _0x16a0c3;
    try {
      _0x16a0c3 = _0x41af7c.fn(_0x447546);
    } catch (_0x27ead0) {
      if (_0x41af7c.pure) {
        _0x41af7c.state = v;
        if (_0x41af7c.owned) {
          _0x41af7c.owned.forEach(K);
        }
        _0x41af7c.owned = null;
      }
      _0x41af7c.updatedAt = _0x397674 + 1;
      return oe(_0x27ead0);
    }
    if (!_0x41af7c.updatedAt || _0x41af7c.updatedAt <= _0x397674) {
      if (_0x41af7c.updatedAt != null && "observers" in _0x41af7c) {
        le(_0x41af7c, _0x16a0c3);
      } else {
        _0x41af7c.value = _0x16a0c3;
      }
      _0x41af7c.updatedAt = _0x397674;
    }
  }
  function Z(_0x168f6e, _0x1873be, _0x4bf262, _0x45b8cc = v, _0x10de84) {
    const _0x2cf0e4 = {
      fn: _0x168f6e,
      state: _0x45b8cc,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: _0x1873be,
      owner: p,
      context: null,
      pure: _0x4bf262
    };
    if (p !== null) {
      if (p !== te) {
        if (p.owned) {
          p.owned.push(_0x2cf0e4);
        } else {
          p.owned = [_0x2cf0e4];
        }
      }
    }
    return _0x2cf0e4;
  }
  function F(_0x206406) {
    if (_0x206406.state === 0) {
      return;
    }
    if (_0x206406.state === U) {
      return j(_0x206406);
    }
    if (_0x206406.suspense && L(_0x206406.suspense.inFallback)) {
      return _0x206406.suspense.effects.push(_0x206406);
    }
    const _0x420dc3 = [_0x206406];
    while ((_0x206406 = _0x206406.owner) && (!_0x206406.updatedAt || _0x206406.updatedAt < H)) {
      if (_0x206406.state) {
        _0x420dc3.push(_0x206406);
      }
    }
    for (let _0x1f50e9 = _0x420dc3.length - 1; _0x1f50e9 >= 0; _0x1f50e9--) {
      _0x206406 = _0x420dc3[_0x1f50e9];
      if (_0x206406.state === v) {
        T(_0x206406);
      } else if (_0x206406.state === U) {
        const _0x44b6bc = d;
        d = null;
        N(() => j(_0x206406, _0x420dc3[0]), false);
        d = _0x44b6bc;
      }
    }
  }
  function N(_0x2b9ea8, _0x348545) {
    if (d) {
      return _0x2b9ea8();
    }
    let _0x233490 = false;
    if (!_0x348545) {
      d = [];
    }
    if (A) {
      _0x233490 = true;
    } else {
      A = [];
    }
    H++;
    try {
      const _0x12310c = _0x2b9ea8();
      we(_0x233490);
      return _0x12310c;
    } catch (_0x105c16) {
      if (!_0x233490) {
        A = null;
      }
      d = null;
      oe(_0x105c16);
    }
  }
  function we(_0x83c14c) {
    if (d) {
      ie(d);
      d = null;
    }
    if (_0x83c14c) {
      return;
    }
    const _0x1f54e0 = A;
    A = null;
    if (_0x1f54e0.length) {
      N(() => ee(_0x1f54e0), false);
    }
  }
  function ie(_0x1c01ad) {
    for (let _0x58b04c = 0; _0x58b04c < _0x1c01ad.length; _0x58b04c++) {
      F(_0x1c01ad[_0x58b04c]);
    }
  }
  function ye(_0x161858) {
    let _0x1ad83d;
    let _0x1385ea = 0;
    for (_0x1ad83d = 0; _0x1ad83d < _0x161858.length; _0x1ad83d++) {
      const _0x21daf4 = _0x161858[_0x1ad83d];
      if (_0x21daf4.user) {
        _0x161858[_0x1385ea++] = _0x21daf4;
      } else {
        F(_0x21daf4);
      }
    }
    for (_0x1ad83d = 0; _0x1ad83d < _0x1385ea; _0x1ad83d++) {
      F(_0x161858[_0x1ad83d]);
    }
  }
  function j(_0x48ec41, _0x4b0324) {
    _0x48ec41.state = 0;
    for (let _0xc447d8 = 0; _0xc447d8 < _0x48ec41.sources.length; _0xc447d8 += 1) {
      const _0x1dc43b = _0x48ec41.sources[_0xc447d8];
      if (_0x1dc43b.sources) {
        const _0x2dbde2 = _0x1dc43b.state;
        if (_0x2dbde2 === v) {
          if (_0x1dc43b !== _0x4b0324 && (!_0x1dc43b.updatedAt || _0x1dc43b.updatedAt < H)) {
            F(_0x1dc43b);
          }
        } else if (_0x2dbde2 === U) {
          j(_0x1dc43b, _0x4b0324);
        }
      }
    }
  }
  function re(_0x24f449) {
    for (let _0x485bcf = 0; _0x485bcf < _0x24f449.observers.length; _0x485bcf += 1) {
      const _0x1c3b25 = _0x24f449.observers[_0x485bcf];
      if (!_0x1c3b25.state) {
        _0x1c3b25.state = U;
        if (_0x1c3b25.pure) {
          d.push(_0x1c3b25);
        } else {
          A.push(_0x1c3b25);
        }
        if (_0x1c3b25.observers) {
          re(_0x1c3b25);
        }
      }
    }
  }
  function K(_0x4e7c7f) {
    let _0x2afc44;
    if (_0x4e7c7f.sources) {
      while (_0x4e7c7f.sources.length) {
        const _0x2b1703 = _0x4e7c7f.sources.pop();
        const _0x36a86e = _0x4e7c7f.sourceSlots.pop();
        const _0x13f9ab = _0x2b1703.observers;
        if (_0x13f9ab && _0x13f9ab.length) {
          const _0x426426 = _0x13f9ab.pop();
          const _0x1d84c1 = _0x2b1703.observerSlots.pop();
          if (_0x36a86e < _0x13f9ab.length) {
            _0x426426.sourceSlots[_0x1d84c1] = _0x36a86e;
            _0x13f9ab[_0x36a86e] = _0x426426;
            _0x2b1703.observerSlots[_0x36a86e] = _0x1d84c1;
          }
        }
      }
    }
    if (_0x4e7c7f.owned) {
      for (_0x2afc44 = _0x4e7c7f.owned.length - 1; _0x2afc44 >= 0; _0x2afc44--) {
        K(_0x4e7c7f.owned[_0x2afc44]);
      }
      _0x4e7c7f.owned = null;
    }
    if (_0x4e7c7f.cleanups) {
      for (_0x2afc44 = _0x4e7c7f.cleanups.length - 1; _0x2afc44 >= 0; _0x2afc44--) {
        _0x4e7c7f.cleanups[_0x2afc44]();
      }
      _0x4e7c7f.cleanups = null;
    }
    _0x4e7c7f.state = 0;
    _0x4e7c7f.context = null;
  }
  function oe(_0x409d50) {
    throw _0x409d50;
  }
  const me = Symbol("fallback");
  function X(_0x56d719) {
    for (let _0x8e93b0 = 0; _0x8e93b0 < _0x56d719.length; _0x8e93b0++) {
      _0x56d719[_0x8e93b0]();
    }
  }
  function be(_0x44805f, _0xeb7e26, _0x3c4d12 = {}) {
    let _0xdc5208 = [];
    let _0x865c92 = [];
    let _0x4bd8c0 = [];
    let _0xbea79d = 0;
    let _0x188b05 = _0xeb7e26.length > 1 ? [] : null;
    de(() => X(_0x4bd8c0));
    return () => {
      let _0x521dcb = _0x44805f() || [];
      let _0x1d4b57;
      let _0x340a47;
      _0x521dcb[ue];
      return L(() => {
        let _0x426ace = _0x521dcb.length;
        let _0x26baff;
        let _0x5caa83;
        let _0x51f302;
        let _0x5a9f65;
        let _0x2bae95;
        let _0x52d6a2;
        let _0x525cf6;
        let _0x43029f;
        let _0x4feae5;
        if (_0x426ace === 0) {
          if (_0xbea79d !== 0) {
            X(_0x4bd8c0);
            _0x4bd8c0 = [];
            _0xdc5208 = [];
            _0x865c92 = [];
            _0xbea79d = 0;
            _0x188b05 &&= [];
          }
          if (_0x3c4d12.fallback) {
            _0xdc5208 = [me];
            _0x865c92[0] = M(_0x3c0968 => {
              _0x4bd8c0[0] = _0x3c0968;
              return _0x3c4d12.fallback();
            });
            _0xbea79d = 1;
          }
        } else if (_0xbea79d === 0) {
          _0x865c92 = new Array(_0x426ace);
          _0x340a47 = 0;
          for (; _0x340a47 < _0x426ace; _0x340a47++) {
            _0xdc5208[_0x340a47] = _0x521dcb[_0x340a47];
            _0x865c92[_0x340a47] = M(_0x264290);
          }
          _0xbea79d = _0x426ace;
        } else {
          _0x51f302 = new Array(_0x426ace);
          _0x5a9f65 = new Array(_0x426ace);
          if (_0x188b05) {
            _0x2bae95 = new Array(_0x426ace);
          }
          _0x52d6a2 = 0;
          _0x525cf6 = Math.min(_0xbea79d, _0x426ace);
          for (; _0x52d6a2 < _0x525cf6 && _0xdc5208[_0x52d6a2] === _0x521dcb[_0x52d6a2]; _0x52d6a2++);
          _0x525cf6 = _0xbea79d - 1;
          _0x43029f = _0x426ace - 1;
          for (; _0x525cf6 >= _0x52d6a2 && _0x43029f >= _0x52d6a2 && _0xdc5208[_0x525cf6] === _0x521dcb[_0x43029f]; _0x525cf6--, _0x43029f--) {
            _0x51f302[_0x43029f] = _0x865c92[_0x525cf6];
            _0x5a9f65[_0x43029f] = _0x4bd8c0[_0x525cf6];
            if (_0x188b05) {
              _0x2bae95[_0x43029f] = _0x188b05[_0x525cf6];
            }
          }
          _0x26baff = new Map();
          _0x5caa83 = new Array(_0x43029f + 1);
          _0x340a47 = _0x43029f;
          for (; _0x340a47 >= _0x52d6a2; _0x340a47--) {
            _0x4feae5 = _0x521dcb[_0x340a47];
            _0x1d4b57 = _0x26baff.get(_0x4feae5);
            _0x5caa83[_0x340a47] = _0x1d4b57 === undefined ? -1 : _0x1d4b57;
            _0x26baff.set(_0x4feae5, _0x340a47);
          }
          for (_0x1d4b57 = _0x52d6a2; _0x1d4b57 <= _0x525cf6; _0x1d4b57++) {
            _0x4feae5 = _0xdc5208[_0x1d4b57];
            _0x340a47 = _0x26baff.get(_0x4feae5);
            if (_0x340a47 !== undefined && _0x340a47 !== -1) {
              _0x51f302[_0x340a47] = _0x865c92[_0x1d4b57];
              _0x5a9f65[_0x340a47] = _0x4bd8c0[_0x1d4b57];
              if (_0x188b05) {
                _0x2bae95[_0x340a47] = _0x188b05[_0x1d4b57];
              }
              _0x340a47 = _0x5caa83[_0x340a47];
              _0x26baff.set(_0x4feae5, _0x340a47);
            } else {
              _0x4bd8c0[_0x1d4b57]();
            }
          }
          for (_0x340a47 = _0x52d6a2; _0x340a47 < _0x426ace; _0x340a47++) {
            if (_0x340a47 in _0x51f302) {
              _0x865c92[_0x340a47] = _0x51f302[_0x340a47];
              _0x4bd8c0[_0x340a47] = _0x5a9f65[_0x340a47];
              if (_0x188b05) {
                _0x188b05[_0x340a47] = _0x2bae95[_0x340a47];
                _0x188b05[_0x340a47](_0x340a47);
              }
            } else {
              _0x865c92[_0x340a47] = M(_0x264290);
            }
          }
          _0x865c92 = _0x865c92.slice(0, _0xbea79d = _0x426ace);
          _0xdc5208 = _0x521dcb.slice(0);
        }
        return _0x865c92;
      });
      function _0x264290(_0x3e3b25) {
        _0x4bd8c0[_0x340a47] = _0x3e3b25;
        if (_0x188b05) {
          const [_0x519989, _0x5f19df] = se(_0x340a47);
          _0x188b05[_0x340a47] = _0x5f19df;
          return _0xeb7e26(_0x521dcb[_0x340a47], _0x519989);
        }
        return _0xeb7e26(_0x521dcb[_0x340a47]);
      }
    };
  }
  function R(_0x1ee2fe, _0x3f1b71) {
    return L(() => _0x1ee2fe(_0x3f1b71 || {}));
  }
  function Y(_0xc579eb) {
    const _0x1cb36d = "fallback" in _0xc579eb && {
      fallback: () => _0xc579eb.fallback
    };
    return he(be(() => _0xc579eb.each, _0xc579eb.children, _0x1cb36d || undefined));
  }
  function Ae(_0x1ef4f3, _0x2f8b12, _0x4d78d8) {
    let _0xf6491 = _0x4d78d8.length;
    let _0x331cd8 = _0x2f8b12.length;
    let _0x508902 = _0xf6491;
    let _0x44f6a2 = 0;
    let _0x5ea479 = 0;
    let _0xb3c0c1 = _0x2f8b12[_0x331cd8 - 1].nextSibling;
    let _0x59fb61 = null;
    while (_0x44f6a2 < _0x331cd8 || _0x5ea479 < _0x508902) {
      if (_0x2f8b12[_0x44f6a2] === _0x4d78d8[_0x5ea479]) {
        _0x44f6a2++;
        _0x5ea479++;
        continue;
      }
      while (_0x2f8b12[_0x331cd8 - 1] === _0x4d78d8[_0x508902 - 1]) {
        _0x331cd8--;
        _0x508902--;
      }
      if (_0x331cd8 === _0x44f6a2) {
        const _0x54bb3e = _0x508902 < _0xf6491 ? _0x5ea479 ? _0x4d78d8[_0x5ea479 - 1].nextSibling : _0x4d78d8[_0x508902 - _0x5ea479] : _0xb3c0c1;
        while (_0x5ea479 < _0x508902) {
          _0x1ef4f3.insertBefore(_0x4d78d8[_0x5ea479++], _0x54bb3e);
        }
      } else if (_0x508902 === _0x5ea479) {
        while (_0x44f6a2 < _0x331cd8) {
          if (!_0x59fb61 || !_0x59fb61.has(_0x2f8b12[_0x44f6a2])) {
            _0x2f8b12[_0x44f6a2].remove();
          }
          _0x44f6a2++;
        }
      } else if (_0x2f8b12[_0x44f6a2] === _0x4d78d8[_0x508902 - 1] && _0x4d78d8[_0x5ea479] === _0x2f8b12[_0x331cd8 - 1]) {
        const _0x15e4c9 = _0x2f8b12[--_0x331cd8].nextSibling;
        _0x1ef4f3.insertBefore(_0x4d78d8[_0x5ea479++], _0x2f8b12[_0x44f6a2++].nextSibling);
        _0x1ef4f3.insertBefore(_0x4d78d8[--_0x508902], _0x15e4c9);
        _0x2f8b12[_0x331cd8] = _0x4d78d8[_0x508902];
      } else {
        if (!_0x59fb61) {
          _0x59fb61 = new Map();
          let _0x1e1310 = _0x5ea479;
          while (_0x1e1310 < _0x508902) {
            _0x59fb61.set(_0x4d78d8[_0x1e1310], _0x1e1310++);
          }
        }
        const _0x755428 = _0x59fb61.get(_0x2f8b12[_0x44f6a2]);
        if (_0x755428 != null) {
          if (_0x5ea479 < _0x755428 && _0x755428 < _0x508902) {
            let _0xd527fb = _0x44f6a2;
            let _0x10c397 = 1;
            let _0x1ae3fb;
            while (++_0xd527fb < _0x331cd8 && _0xd527fb < _0x508902 && (_0x1ae3fb = _0x59fb61.get(_0x2f8b12[_0xd527fb])) != null && _0x1ae3fb === _0x755428 + _0x10c397) {
              _0x10c397++;
            }
            if (_0x10c397 > _0x755428 - _0x5ea479) {
              const _0x1d7d69 = _0x2f8b12[_0x44f6a2];
              while (_0x5ea479 < _0x755428) {
                _0x1ef4f3.insertBefore(_0x4d78d8[_0x5ea479++], _0x1d7d69);
              }
            } else {
              _0x1ef4f3.replaceChild(_0x4d78d8[_0x5ea479++], _0x2f8b12[_0x44f6a2++]);
            }
          } else {
            _0x44f6a2++;
          }
        } else {
          _0x2f8b12[_0x44f6a2++].remove();
        }
      }
    }
  }
  function ve(_0x148866, _0xf7571b, _0x2a2af2, _0x4695d8 = {}) {
    let _0x13e654;
    M(_0x14aa57 => {
      _0x13e654 = _0x14aa57;
      if (_0xf7571b === document) {
        _0x148866();
      } else {
        E(_0xf7571b, _0x148866(), _0xf7571b.firstChild ? null : undefined, _0x2a2af2);
      }
    }, _0x4695d8.owner);
    return () => {
      _0x13e654();
      _0xf7571b.textContent = "";
    };
  }
  function J(_0xaf60fe, _0x8b75e7, _0x3e2393) {
    let _0x292e56;
    const _0x46eea4 = () => {
      const _0x67ba0e = document.createElement("template");
      _0x67ba0e.innerHTML = _0xaf60fe;
      if (_0x3e2393) {
        return _0x67ba0e.content.firstChild.firstChild;
      } else {
        return _0x67ba0e.content.firstChild;
      }
    };
    const _0xc85f2e = _0x8b75e7 ? () => L(() => document.importNode(_0x292e56 ||= _0x46eea4(), true)) : () => (_0x292e56 ||= _0x46eea4()).cloneNode(true);
    _0xc85f2e.cloneNode = _0xc85f2e;
    return _0xc85f2e;
  }
  function E(_0x557967, _0x95299f, _0x289b6d, _0x439f31) {
    if (_0x289b6d !== undefined && !_0x439f31) {
      _0x439f31 = [];
    }
    if (typeof _0x95299f != "function") {
      return D(_0x557967, _0x95299f, _0x439f31, _0x289b6d);
    }
    _(_0x127905 => D(_0x557967, _0x95299f(), _0x127905, _0x289b6d), _0x439f31);
  }
  function D(_0x2cebad, _0x15092e, _0x3133eb, _0x1186a3, _0x28d8fe) {
    while (typeof _0x3133eb == "function") {
      _0x3133eb = _0x3133eb();
    }
    if (_0x15092e === _0x3133eb) {
      return _0x3133eb;
    }
    const _0x3b37ff = typeof _0x15092e;
    const _0x4bddf6 = _0x1186a3 !== undefined;
    _0x2cebad = _0x4bddf6 && _0x3133eb[0] && _0x3133eb[0].parentNode || _0x2cebad;
    if (_0x3b37ff === "string" || _0x3b37ff === "number") {
      if (_0x3b37ff === "number") {
        _0x15092e = _0x15092e.toString();
      }
      if (_0x4bddf6) {
        let _0x47598b = _0x3133eb[0];
        if (_0x47598b && _0x47598b.nodeType === 3) {
          _0x47598b.data = _0x15092e;
        } else {
          _0x47598b = document.createTextNode(_0x15092e);
        }
        _0x3133eb = x(_0x2cebad, _0x3133eb, _0x1186a3, _0x47598b);
      } else if (_0x3133eb !== "" && typeof _0x3133eb == "string") {
        _0x3133eb = _0x2cebad.firstChild.data = _0x15092e;
      } else {
        _0x3133eb = _0x2cebad.textContent = _0x15092e;
      }
    } else if (_0x15092e == null || _0x3b37ff === "boolean") {
      _0x3133eb = x(_0x2cebad, _0x3133eb, _0x1186a3);
    } else {
      if (_0x3b37ff === "function") {
        _(() => {
          let _0x34edc5 = _0x15092e();
          while (typeof _0x34edc5 == "function") {
            _0x34edc5 = _0x34edc5();
          }
          _0x3133eb = D(_0x2cebad, _0x34edc5, _0x3133eb, _0x1186a3);
        });
        return () => _0x3133eb;
      }
      if (Array.isArray(_0x15092e)) {
        const _0x4a7231 = [];
        const _0x3a7a0a = _0x3133eb && Array.isArray(_0x3133eb);
        if (V(_0x4a7231, _0x15092e, _0x3133eb, _0x28d8fe)) {
          _(() => _0x3133eb = D(_0x2cebad, _0x4a7231, _0x3133eb, _0x1186a3, true));
          return () => _0x3133eb;
        }
        if (_0x4a7231.length === 0) {
          _0x3133eb = x(_0x2cebad, _0x3133eb, _0x1186a3);
          if (_0x4bddf6) {
            return _0x3133eb;
          }
        } else if (_0x3a7a0a) {
          if (_0x3133eb.length === 0) {
            z(_0x2cebad, _0x4a7231, _0x1186a3);
          } else {
            Ae(_0x2cebad, _0x3133eb, _0x4a7231);
          }
        } else {
          if (_0x3133eb) {
            x(_0x2cebad);
          }
          z(_0x2cebad, _0x4a7231);
        }
        _0x3133eb = _0x4a7231;
      } else if (_0x15092e.nodeType) {
        if (Array.isArray(_0x3133eb)) {
          if (_0x4bddf6) {
            return _0x3133eb = x(_0x2cebad, _0x3133eb, _0x1186a3, _0x15092e);
          }
          x(_0x2cebad, _0x3133eb, null, _0x15092e);
        } else if (_0x3133eb == null || _0x3133eb === "" || !_0x2cebad.firstChild) {
          _0x2cebad.appendChild(_0x15092e);
        } else {
          _0x2cebad.replaceChild(_0x15092e, _0x2cebad.firstChild);
        }
        _0x3133eb = _0x15092e;
      } else {
        console.warn("Unrecognized value. Skipped inserting", _0x15092e);
      }
    }
    return _0x3133eb;
  }
  function V(_0x4a83a0, _0x48c5f9, _0x289739, _0x55251c) {
    let _0x1fa8c1 = false;
    for (let _0x3426f4 = 0, _0x1d376c = _0x48c5f9.length; _0x3426f4 < _0x1d376c; _0x3426f4++) {
      let _0x57853d = _0x48c5f9[_0x3426f4];
      let _0x17cc1c = _0x289739 && _0x289739[_0x3426f4];
      let _0x247551;
      if (_0x57853d != null && _0x57853d !== true && _0x57853d !== false) {
        if ((_0x247551 = typeof _0x57853d) == "object" && _0x57853d.nodeType) {
          _0x4a83a0.push(_0x57853d);
        } else if (Array.isArray(_0x57853d)) {
          _0x1fa8c1 = V(_0x4a83a0, _0x57853d, _0x17cc1c) || _0x1fa8c1;
        } else if (_0x247551 === "function") {
          if (_0x55251c) {
            while (typeof _0x57853d == "function") {
              _0x57853d = _0x57853d();
            }
            _0x1fa8c1 = V(_0x4a83a0, Array.isArray(_0x57853d) ? _0x57853d : [_0x57853d], Array.isArray(_0x17cc1c) ? _0x17cc1c : [_0x17cc1c]) || _0x1fa8c1;
          } else {
            _0x4a83a0.push(_0x57853d);
            _0x1fa8c1 = true;
          }
        } else {
          const _0x34ab70 = String(_0x57853d);
          if (_0x17cc1c && _0x17cc1c.nodeType === 3 && _0x17cc1c.data === _0x34ab70) {
            _0x4a83a0.push(_0x17cc1c);
          } else {
            _0x4a83a0.push(document.createTextNode(_0x34ab70));
          }
        }
      }
    }
    return _0x1fa8c1;
  }
  function z(_0x598070, _0x4eea89, _0x83cf3e = null) {
    for (let _0x4abdb9 = 0, _0x58a49a = _0x4eea89.length; _0x4abdb9 < _0x58a49a; _0x4abdb9++) {
      _0x598070.insertBefore(_0x4eea89[_0x4abdb9], _0x83cf3e);
    }
  }
  function x(_0x4bfa62, _0x3c8319, _0x5b7d56, _0x50c394) {
    if (_0x5b7d56 === undefined) {
      return _0x4bfa62.textContent = "";
    }
    const _0x2628a7 = _0x50c394 || document.createTextNode("");
    if (_0x3c8319.length) {
      let _0x4336b6 = false;
      for (let _0x22290e = _0x3c8319.length - 1; _0x22290e >= 0; _0x22290e--) {
        const _0x530d14 = _0x3c8319[_0x22290e];
        if (_0x2628a7 !== _0x530d14) {
          const _0x321968 = _0x530d14.parentNode === _0x4bfa62;
          if (!_0x4336b6 && !_0x22290e) {
            if (_0x321968) {
              _0x4bfa62.replaceChild(_0x2628a7, _0x530d14);
            } else {
              _0x4bfa62.insertBefore(_0x2628a7, _0x5b7d56);
            }
          } else if (_0x321968) {
            _0x530d14.remove();
          }
        } else {
          _0x4336b6 = true;
        }
      }
    } else {
      _0x4bfa62.insertBefore(_0x2628a7, _0x5b7d56);
    }
    return [_0x2628a7];
  }
  const [Q, W] = se([]);
  let P = {};
  const q = (_0x5b54f7, _0x471019) => {
    let _0x2651e5 = 0;
    const _0x148794 = Math.floor(Math.random() * 1000);
    const _0x45267f = new Array(25).fill(false);
    W([...Q(), {
      id: _0x148794,
      title: _0x5b54f7,
      percent: 0,
      prog: []
    }]);
    const _0x3e32e0 = setInterval(() => {
      _0x45267f[_0x2651e5] = true;
      _0x2651e5++;
      const _0x5c819d = Math.round(_0x2651e5 / _0x45267f.length * 100);
      W(_0x2a0e0e => _0x2a0e0e.map(_0x25131e => _0x25131e.id === _0x148794 ? {
        ..._0x25131e,
        percent: _0x5c819d,
        prog: _0x45267f
      } : _0x25131e));
    }, _0x471019 / _0x45267f.length);
    P[_0x148794] = _0x3e32e0;
  };
  const G = () => {
    for (const _0x73d45d in P) {
      clearInterval(P[_0x73d45d]);
    }
    P = {};
    W([]);
  };
  const Se = J("<div class=\"center-column center\"><div class=\"progress-cont\">");
  const Ce = J("<div class=\"progress\"><div class=\"top-line\"><p class=\"gilroy600 p-white\"></p><p class=\"gilroy400 p-white\">%</p></div><div class=\"bottom-line\"><ul class=\"center\">");
  const xe = J("<li class=\"center\"><svg width=\"11\" height=\"8\" viewBox=\"0 0 11 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0H8L10.5 4L8 8H0L2.5 4L0 0Z\" fill=\"rgb(#paint0_linear_75_163)\"></path><defs><linearGradient id=\"paint0_linear_75_163\" x1=\"8\" y1=\"3.99996\" x2=\"-4.38265e-10\" y2=\"3.99996\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#0095FA\"></stop><stop offset=\"1\" stop-color=\"#00428F\">");
  const Le = _0x3f3d80 => (() => {
    const _0x5cabb1 = Se();
    const _0x11a69d = _0x5cabb1.firstChild;
    E(_0x11a69d, R(Y, {
      get each() {
        return Q();
      },
      children: _0x231ce6 => (() => {
        const _0x44df65 = Ce();
        const _0xdf341 = _0x44df65.firstChild;
        const _0x5d2fc1 = _0xdf341.firstChild;
        const _0x4bd39d = _0x5d2fc1.nextSibling;
        const _0x5860b6 = _0x4bd39d.firstChild;
        const _0x3f5ab3 = _0xdf341.nextSibling;
        const _0x1f98a1 = _0x3f5ab3.firstChild;
        E(_0x5d2fc1, () => _0x231ce6.title);
        E(_0x4bd39d, () => _0x231ce6.percent, _0x5860b6);
        E(_0x1f98a1, R(Y, {
          get each() {
            return _0x231ce6.prog;
          },
          children: _0x1a332c => (() => {
            const _0x284c9f = xe();
            _0x284c9f.classList.toggle("active", !!_0x1a332c);
            return _0x284c9f;
          })()
        }));
        _(() => _0x44df65.classList.toggle("removeAnim", _0x231ce6.percent >= 100));
        return _0x44df65;
      })()
    }));
    _(() => _0x5cabb1.classList.toggle("hidden", Q().length <= 0));
    return _0x5cabb1;
  })();
  const Be = () => {
    function _0x119a8d(_0x5b75ba) {
      var _0x364413 = _0x5b75ba.data;
      if (_0x364413.TaskBar) {
        if (_0x364413.TaskBar.display) {
          q(_0x364413.TaskBar.label, _0x364413.TaskBar.duration);
        } else {
          G();
        }
      }
      if (_0x364413.runProgress === true) {
        q(_0x364413.name, 2000);
      }
      if (_0x364413.runUpdate === true) {
        q(_0x364413.name, _0x364413.Length);
      }
      if (_0x364413.closeFail === true) {
        G();
      }
      if (_0x364413.closeProgress === true) {
        G();
      }
    }
    pe(() => {
      window.addEventListener("message", _0x119a8d);
    });
    return R(Le, {});
  };
  const Ee = document.getElementById("root");
  ve(() => R(Be, {}), Ee);