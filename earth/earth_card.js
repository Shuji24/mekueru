const words = [
    {
        id: 1,
        category: "地球の形",
        category_eng: "",
        level: e1,
        desc: "エラトステネスはどうやって地球の大きさを測定した？",
        hintImage: "images/",
        hintText: "太陽高度",
        answer: "同時刻に2か所で太陽高度"
    },
    {
        id: e2,
        category: "地球の形",
        category_eng: "",
        level: 3,
        desc: "アレキサンドリア↔シエネ<br>900km<br>シエネ南中高度<br>90°<br>アレキサンドリア南中高度<br>82.8°<br>地球全周の長さは？",
        hintImage: "images/eratosthenes.png",
        hintText: "錯角とか使う",
        answer: "45000km"
    },
    {
        id: e3,
        category: "地球の形",
        category_eng: "",
        level: 1,
        desc: "地球はどんな形？",
        hintImage: "images/",
        hintText: "完全な球体ではない。",
        answer: "横長の楕円体"
    },
    {
        id: e4,
        category: "地球の形",
        category_eng: "",
        level: 3,
        desc: "ニュートンはどうやって地球の形を証明した？",
        hintImage: "images/oval.gif",
        hintText: "北極星高度",
        answer: "北極星高度が1°変わるためにどのくらい動けばよいか<br>北極付近：1°が長い<br>赤道付近：1°が短い"
    },
    {
        id: e5,
        category: "地球の形",
        category_eng: "",
        level: 3,
        desc: "地球の縦横比が297:298とすると、地球の扁平率は？",
        hintImage: "images/",
        hintText: "(横-縦) / 横",
        answer: "1 / 298"
    },
    {
        id: e6,
        category: "地球の形",
        category_eng: "",
        level: 1,
        desc: "地球の平均高度のピークは何個ある？",
        hintImage: "images/",
        hintText: "火星とか金星は1つ",
        answer: "2"
    },
    {
        id: e7,
        category: "地球の形",
        category_eng: "",
        level: 2,
        desc: "万有引力の公式",
        hintImage: "images/universal.png",
        hintText: "質量に比例 / 半径²に反比例<br>G…万有引力定数",
        answer: "F = G × <math><mfrac><mn>mM</mn><mn>r²</mn></mfrac></math>"
    },
    {
        id: e8,
        category: "地球の形",
        category_eng: "",
        level: 2,
        desc: "遠心力の公式",
        hintImage: "images/centrifugal.png",
        hintText: "質量に比例 / 回転半径に比例",
        answer: "F = mrω²"
    },
    {
        id: e9,
        category: "地球の形",
        category_eng: "",
        level: 1,
        desc: "重力とは",
        hintImage: "images/gravity.png",
        hintText: "",
        answer: "万有引力と遠心力の合力<br>(平均約9.8m/s²)"
    },
    {
        id: e10,
        category: "地球の形",
        category_eng: "",
        level: 1,
        desc: "<重力の補正①><br>フリーエア補正とは",
        hintImage: "images/free_air_c.png",
        hintText: "図った数値g+βh<br>βは定数",
        answer: "高い場所で測った数値<br>↓補正<br>0m地点で測った場合の数値に"
    },
    {
        id: e11,
        category: "地球の形",
        category_eng: "",
        level: 1,
        desc: "<重力の補正②><br>地形補正とは",
        hintImage: "images/terrain_c.png",
        hintText: "山からの万有引力",
        answer: "測定した数値…周りの山からの万有引力も含まれる<br>↓補正<br>地球が平らだった場合の数値に"
    },
    {
        id: e12,
        category: "地球の形",
        category_eng: "",
        level: 1,
        desc: "<重力の補正③><br>ブーゲー補正とは",
        hintImage: "images/bouguer_c.png",
        hintText: "土等からの万有引力",
        answer: "測定した数値…0mから測定地点までの間にある土等からの万有引力も含まれる<br>↓<br>補正"
    },
    {
        id: e13,
        category: "地球の形",
        category_eng: "",
        level: 2,
        desc: "ブーゲー補正の公式",
        hintImage: "images/bouguer_c_f.png",
        hintText: "測定値-土等からの万有引力",
        answer: "g-2πGρh"
    },
    {
        id: e14,
        category: "地球の形",
        category_eng: "",
        level: 3,
        desc: "フリーエア異常の値が0より大きい場合、どのようなことが分かるか。",
        hintImage: "images/free_air_a.png",
        hintText: "フリーエア異常…フリーエア補正を行った値が標準重力とどの位ずれているか",
        answer: "何かが土地を持ち上げている！"
    },
    {
        id: e15,
        category: "地球の形",
        category_eng: "",
        level: 3,
        desc: "ブーゲー異常の値が0より大きい場合、どのようなことが分かるか。",
        hintImage: "images/bouguer_a.png",
        hintText: "ブーゲー異常…補正①②③を行った値が標準重力とどの位ずれているか",
        answer: "高密度物質が眠っている！"
    },
    {
        id: e16,
        category: "地球の形",
        category_eng: "",
        level: 3,
        desc: "海底の一部に高密度物質が眠っている場合、<b>①平均海面・②標高・③水の流れ</b>はどうなるか",
        hintImage: "images/geoid.png",
        hintText: "",
        answer: "<高密度物質の真上><br>①高い②低い<br><それ以外><br>①低い②高い<br><③><br>標高高→低"
    },
    {
        id: e17,
        category: "地球の形",
        category_eng: "",
        level: 1,
        desc: "標高はどのように求めるか",
        hintImage: "images/elevation.png",
        hintText: "ジオイド…平均海面",
        answer: "楕円体高-ジオイド高=標高"
    },
];
