/*=================================================
demo code
=================================================*/
var _0x5825 = ["\x2E\x70\x61\x6E\x65\x6C\x2D\x64\x65\x6D\x6F", "\x23\x6F\x70\x61\x63\x69\x74\x79\x2D\x73\x6C\x69\x64\x65\x72", "\x6F\x70\x61\x63\x69\x74\x79", "\x63\x73\x73", "\x23\x6F\x76\x65\x72\x6C\x61\x79", "\x61\x5B\x64\x61\x74\x61\x2D\x63\x6F\x6C\x6F\x72\x5D", "\x63\x6F\x6C\x6F\x72", "\x64\x61\x74\x61", "\x63\x6C\x69\x63\x6B", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x68\x74\x6D\x6C", "\x6F\x6E", "\x65\x61\x63\x68", "\x6C\x6F\x77\x65\x72", "\x6E\x6F\x55\x69\x53\x6C\x69\x64\x65\x72", "\x23\x6F\x70\x61\x63\x69\x74\x79\x2D\x73\x6C\x69\x64\x65\x72\x2D\x76\x61\x6C\x75\x65", "\x74\x6F", "\x76\x61\x6C", "\x6C\x6F\x61\x64", "\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68", "\x6C\x65\x66\x74", "\x70\x78", "\x69\x6E", "\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73", "\x68\x61\x73\x43\x6C\x61\x73\x73", "\x2E\x70\x61\x6E\x65\x6C\x2D\x74\x6F\x67\x67\x6C\x65"];
var $panelDemo = $(_0x5825[0]);
var $opacitySlider = $(_0x5825[1]);
var currectOpcity = $(_0x5825[4])[_0x5825[3]](_0x5825[2]);
var $dataColorLink = $(_0x5825[5]);
$dataColorLink[_0x5825[13]](function() {
    var _0x7268x5 = $(this)[_0x5825[7]](_0x5825[6]);
    $dataColorLink[_0x5825[12]](_0x5825[8], function() {
        $(_0x5825[11])[_0x5825[10]](_0x7268x5)[_0x5825[9]]($(this)[_0x5825[7]](_0x5825[6]))
    });
});
$(_0x5825[5]);
$opacitySlider[_0x5825[15]]({
    start: currectOpcity,
    step: 0.05,
    connect: _0x5825[14],
    range: {
        "\x6D\x69\x6E": 0,
        "\x6D\x61\x78": 1
    }
});
$opacitySlider.Link(_0x5825[14])[_0x5825[17]]($(_0x5825[16]));
$opacitySlider[_0x5825[12]]({
    slide: function() {
        currectOpcity = $opacitySlider[_0x5825[18]]();
        var _0x7268x6 = $(_0x5825[4]);
        _0x7268x6[_0x5825[3]](_0x5825[2], currectOpcity);
    }
});
$(window)[_0x5825[12]](_0x5825[19], function() {
    var _0x7268x7 = $panelDemo[_0x5825[20]]();
    $panelDemo[_0x5825[3]](_0x5825[21], -_0x7268x7 + _0x5825[22]);
    $(_0x5825[26])[_0x5825[12]](_0x5825[8], function() {
        $panelDemo[_0x5825[24]](_0x5825[23]);
        if ($panelDemo[_0x5825[25]](_0x5825[23])) {
            $panelDemo[_0x5825[3]](_0x5825[21], 0)
        } else {
            $panelDemo[_0x5825[3]](_0x5825[21], -_0x7268x7 + _0x5825[22])
        };
    });
});
