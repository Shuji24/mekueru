const words = [
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "角度を正しく表現した地図投影法",
        hintImage: "images/mercator.png",
        hintText: "",
        answer: "メルカトル図法"
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "面積を正しく表現した地図投影法",
        hintImage: "images/mollweide.png",
        hintText: "",
        answer: "モルワイデ図法"
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "距離・方位を正しく表現した地図投影法",
        hintImage: "images/azimuthal equidistant.png",
        hintText: "",
        answer: "正距方位図法"
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "バビロニアの世界地図のうち、<br>①中央に南流する川の名前は？<br>②中央の円盤、③周囲の帯が意味するものは？",
        hintImage: "images/babylonia.jpg",
        hintText: "",
        answer: "①ユーフラテス川<br>②大地<br>③環海",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "地球球体説が広まった後、プトレマイオスの世界地図にあった、当時初めての物は？",
        hintImage: "images/ptolemy.jpg",
        hintText: "",
        answer: "緯線・経線",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "大地はノアの子孫が３分割したとされるTOマップは、何の世界観が反映された地図？",
        hintImage: "images/to.jpg",
        hintText: "",
        answer: "キリスト教",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 3,
        desc: "メルカトルの世界地図は、どのような時代にどのような目的で作られた？",
        hintImage: "",
        hintText: "角度が正しい",
        answer: "大航海時代に、航海用の、角度が正確な地図を作るため。",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "孝徳天皇が、国郡の境界の確定を命じたのは何の時？",
        hintImage: "",
        hintText: "646年",
        answer: "大化の改新"
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "東大寺の建設に尽力した行基が作成した地図",
        hintImage: "images/gyouki.jpg",
        hintText: "江戸期まで全国地図の範とされた地図",
        answer: "行基図"
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "17世紀末に活躍した浮世絵師の石川流宣が作成した地図",
        hintImage: "images/ryuusenzu.png",
        hintText: "色彩豊か、各国の記事内容も豊かで民間に広く流布した地図",
        answer: "流宣図"
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "長久保赤水が作成した地図",
        hintImage: "images/sekisuizu.png",
        hintText: "日本地図として初めて経緯線が入った地図",
        answer: "改正日本輿地路程全図"
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "伊能忠敬が中心となって作った日本地図",
        hintImage: "",
        hintText: "",
        answer: "大日本沿海輿地全図<br>(だいにっぽんえんかいよちぜんず)",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "WW2中、日本が行った、地図上の軍事施設の抹消による攻撃目標の攪乱",
        hintImage: "",
        hintText: "",
        answer: "戦時改描",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "巨大な塔から電波を受信し、自分の位置を計測するシステム",
        hintImage: "images/loranc.avif",
        hintText: "航空機や船舶が利用した、自分の位置を把握できるシステム",
        answer: "ロランC",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "米国が運用する、衛星から信号を受け取り自分の位置を把握するシステム",
        hintImage: "",
        hintText: "カーナビやスマフォの地図アプリに活用される、自分の位置を把握できるシステム",
        answer: "GPS",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "地理的位置を手掛かりに、地理情報を総合的に管理・加工し、視覚的に表示し、高度な分析や判断を可能にするシステム",
        hintImage: "images/gis.png",
        hintText: "",
        answer: "地理情報システム(GIS)",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 3,
        desc: "GISの活用例",
        hintImage: "images/gis2.png",
        hintText: "",
        answer: "都市計画・防災・商圏分析・観光・交通",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "国土地理院が整備する総合的な地図情報",
        hintImage: "",
        hintText: "ネット上では地理院地図として利用可能",
        answer: "数値地図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "様々な地理情報をまとめて記載した地図",
        hintImage: "images/general.png",
        hintText: "例) 地理院地図・地形図",
        answer: "一般図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "特定の地理情報に注目して表現した地図",
        hintImage: "images/thematic.png",
        hintText: "活断層図・色別標高図",
        answer: "主題図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 1,
        desc: "主題図のうち、測地データや統計データを可視化したもの",
        hintImage: "",
        hintText: "ドットマップ・等値線図・流線図・図形表現図・カルトグラム・階級区分図・メッシュマップ",
        answer: "統計地図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "数量を点で表し、分布状況を示した統計地図",
        hintImage: "images/dot.jpg",
        hintText: "",
        answer: "ドットマップ",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "等しい数位の地点を線で結んだ統計地図",
        hintImage: "images/isopleth.jpg",
        hintText: "",
        answer: "等値線図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "物や人の移動を矢印で示し、量を太さで表した統計地図",
        hintImage: "images/flow.jpg",
        hintText: "",
        answer: "流線図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "円や棒などの図形の大きさで数量を表した統計地図",
        hintImage: "images/geometric-symbol.jpg",
        hintText: "",
        answer: "図形表現図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "地域を変形させて数量を表した統計地図",
        hintImage: "images/cartogram.jpg",
        hintText: "",
        answer: "カルトグラム",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "地域ごとの数値を複数の階級に区分し、濃淡などで表した統計地図",
        hintImage: "images/choropleth.jpg",
        hintText: "",
        answer: "階級区分図",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 2,
        desc: "地域を当面積の区画に分け、各メッシュを単位として数量を表した地図",
        hintImage: "images/mesh.png",
        hintText: "相対分布図の1つ",
        answer: "メッシュマップ",
    },
    {
        category: "地図",
        category_eng: "map",
        level: 3,
        desc: "階級区分図はどのような物の表現には適さないか",
        hintImage: "images/choropleth.jpg",
        hintText: "",
        answer: "統計数値の実数の表現には適さず、相対分布図として用いる。",
    },

    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "小縮尺の地図で表現される地形",
        hintImage: "",
        hintText: "例) 大陸・大洋・大山脈・海溝",
        answer: "大地形"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "地球内部から生み出される、大地形を形成する力",
        hintImage: "",
        hintText: "",
        answer: "内的営力"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "地殻に褶曲が生じ、土砂が堆積された後、隆起によって山脈が形成されたという説(現在では否定)",
        hintImage: "images/tikosya.jpg",
        hintText: "アパラチア山脈での研究から構築された説",
        answer: "地向斜説"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "ウェゲナーが提唱した大陸移動説では、現在の大陸は昔はどうだった？",
        hintImage: "",
        hintText: "大西洋を挟む大陸の海岸線・化石の分布などから提唱",
        answer: "超大陸パンゲア"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "精密な海底探査をおこなう装置<br>これにより海嶺・海溝が発見された。",
        hintImage: "images/stripe.jpg",
        hintText: "これにより同年代の海洋底が海嶺から等距離に分布していることも判明",
        answer: "SONAR"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "マントル対流によって中央海嶺で高温物質が湧き出し、新しい海底となって海嶺の両側に広がってゆくとする学説",
        hintImage: "images/stripe.jpg",
        hintText: "",
        answer: "海洋底拡大説"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "地球表面は、十数枚のプレートに覆われており、それらが移動する結果として多様な地形の形成が生じるとする考え方",
        hintImage: "images/plate_tectonics.png",
        hintText: "",
        answer: "プレートテクトニクス"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "移動方向・速度の異なるプレートの境界で、地殻変動が盛んな所",
        hintImage: "images/plate_tectonics.png",
        hintText: "例) アルプス・ヒマラヤ造山帯、環太平洋造山帯",
        answer: "変動帯(新規造山帯)"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "海嶺で、マントル由来の高温物質が沸き上がり、プレートが発散してできる変動帯",
        hintImage: "images/spread.avif",
        hintText: "例) アイスランド、アフリカ大地溝帯",
        answer: "広がる境界"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "海溝で、重くなった海洋プレートが大陸プレートに沈み込んでできる変動帯",
        hintImage: "images/narrow.jpg",
        hintText: "例) ヒマラヤ山脈、熱海",
        answer: "狭まる境界"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "狭まる境界のうち、①大陸と海洋の境界は？②大陸と大陸の境界は？",
        hintImage: "",
        hintText: "",
        answer: "①沈み込み帯<br>②衝突帯"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "プレート同士が左右にずれてすれ違う変動帯",
        hintImage: "images/transform.jpg",
        hintText: "例) サンアンドレアス断層",
        answer: "すれ違う境界<br>(トランスフォーム断層)"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "プレート移動の原動力であるマントルの、どの部分に流動性があるのか。",
        hintImage: "images/asenos.webp",
        hintText: "マントル上部",
        answer: "アセノスフェア"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "地殻に引っ張る力が働いて形成される断層",
        hintImage: "images/normal_fault",
        hintText: "",
        answer: "正断層"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "地殻に押し潰す力が働いて形成される断層",
        hintImage: "images/reverse_fault",
        hintText: "",
        answer: "逆断層"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "引っ張る力と押し潰す力が反対のときに形成される断層",
        hintImage: "images/slip_fault",
        hintText: "",
        answer: "横ずれ断層"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "過去200万年に繰り返し活動し、将来も活動が推定される断層",
        hintImage: "",
        hintText: "",
        answer: "活断層"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "大陸プレート内で活断層が起こす地震",
        hintImage: "images/inland_earthquake.jpg",
        hintText: "例) 阪神淡路大震災、熊本地震",
        answer: "直下型地震"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "沈み込み帯で起こる地震",
        hintImage: "images/subduction.gif",
        hintText: "",
        answer: "海溝型地震"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "沈み込み帯の地上部に火山が生成され、海溝から一定の距離に火山が列をなして分布",
        hintImage: "images/volcano_front.jpg",
        hintText: "",
        answer: "火山前線"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "マントル内に存在するマグマの供給源",
        hintImage: "images/hotspot.jpg",
        hintText: "例) ハワイ-天皇海山列",
        answer: "ホットスポット"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "現在は地殻変動が落ち着いている地域",
        hintImage: "",
        hintText: "↔変動帯(新期造山帯)",
        answer: "安定地域"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "安定地域の内、古生代に造山運動が生じた地帯",
        hintImage: "",
        hintText: "例) アパラチア山脈、スカンディナビア山脈",
        answer: "古期造山帯"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "安定地域の内、先カンブリア時代に形成され、その後地殻変動を経なかった陸地",
        hintImage: "",
        hintText: "",
        answer: "安定陸塊"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "安定陸塊のうち、<br>楯のような形状で、<br>先カンブリア時代の地層が露出",
        hintImage: "images/shield_table.jpg",
        hintText: "",
        answer: "楯状地"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "安定陸塊のうち、<br>卓のような形状で、<br>先カンブリア時代の地層の上に、古生代以降の地層が堆積",
        hintImage: "images/shield_table.jpg",
        hintText: "",
        answer: "卓状地"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "長期間の浸食(浸食輪廻)によって形成された大陸内部の緩やかな地形",
        hintImage: "images/peneplain.webp",
        hintText: "",
        answer: "準平原"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "海中に没した後、基盤の上に何層も地層が堆積した地形",
        hintImage: "images/structural_plain.webp",
        hintText: "",
        answer: "構造平野"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 3,
        desc: "浸食輪廻とは何か？",
        hintImage: "images/erosion_cycle.webp",
        hintText: "原地形 → 幼年期 → 壮年期 → 老年期 → 準平原",
        answer: "河川の浸食・風化<br>→ 谷深く・尾根鋭く<br>→ 河川の浸食・風化<br>→ 谷広く・尾根鈍く<br>→ 準平原"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "新規鉱山帯では、原油・天然ガスはどこから取れるか",
        hintImage: "images/oil_field.gif",
        hintText: "褶曲の○○の油田・ガス田",
        answer: "褶曲の背斜"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "古期鉱山帯には何の鉱山資源が堆積している？",
        hintImage: "",
        hintText: "",
        answer: "石炭"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "安定陸塊には何の鉱山資源が堆積している？",
        hintImage: "",
        hintText: "O₂濃度up → 海水中の鉄イオンが○○に",
        answer: "O₂濃度up → 海水中のFe²⁺が酸化鉄に → 海底に堆積"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "沈み込み帯で形成される弓なりの列島<br>(海溝の大陸側)",
        hintImage: "images/arc.png",
        hintText: "例) 日本列島",
        answer: "島弧"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "日本列島形成史①<br>ユーラシアプレートの下にイザナギプレートが沈み込んで出来たものは？",
        hintImage: "images/median_tectonic.jpg",
        hintText: "ユーラシアプレートに横ずれの力が働いて出来た",
        answer: "中央構造線"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "日本列島形成史②<br>イザナギプレートの沈み込みにより、イザナギプレート上にあった堆積物が大陸側についたものを何というか。",
        hintImage: "images/adduct.png",
        hintText: "例) 四万十帯",
        answer: "付加体"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "日本列島形成史③<br>大陸の縁で地溝帯が形成され、海水が侵入してできた海",
        hintImage: "",
        hintText: "",
        answer: "日本海"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 1,
        desc: "日本列島形成史④<br>日本海の拡大 → 東日本は反時計、西日本は時計回りに回転 → 何ができた？",
        hintImage: "images/fossamagna.jpg",
        hintText: "",
        answer: "フォッサマグナ"
    },
    {
        category: "大地形",
        category_eng: "l_terrain",
        level: 2,
        desc: "日本列島形成史<br>①②③④以降の流れは？",
        hintImage: "",
        hintText: "",
        answer: "イザナギ → 太平洋&フィリピン海<br>フィリピン海プレート上の伊豆が衝突 → 沈み込めず半島に"
    },

    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "浸食輪廻における河川の役割は？",
        hintImage: "images/erosion_cycle.webp",
        hintText: "",
        answer: "山地を浸食する ＆ 下流に土砂を運搬・堆積することで大地をならす"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "河川が降水を集める範囲",
        hintImage: "",
        hintText: "学院は石神井川(荒川)",
        answer: "流域"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 2,
        desc: "日本一の流域面積をほこる川は？",
        hintImage: "",
        hintText: "流域面積2位：信濃川",
        answer: "利根川"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "山地において、河川の浸食作用が強いときに出来る地形(谷)",
        hintImage: "images/v_shaped_valley.jpg",
        hintText: "",
        answer: "V字谷"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "山地において、河川の堆積作用が強いときに出来る地形",
        hintImage: "images/valley_plain.png",
        hintText: "",
        answer: "谷底平野・河岸段丘"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "河岸段丘が出来る経緯は？",
        hintImage: "images/river_terrace.png",
        hintText: "",
        answer: "↓浸食<br>V字谷<br>↓堆積<br>谷底平野<br>↓浸食"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "河川が山地から平野へ流れ出す部分",
        hintImage: "",
        hintText: "",
        answer: "谷口"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "扇状地が出来る経緯は？",
        hintImage: "",
        hintText: "谷口…傾斜緩やか・水深浅い",
        answer: "谷口で傾斜緩やかに、水深浅くなり、<br>運搬作用が減り、堆積作用が強くなって出来る"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "扇状地のうち、地下水位が浅く、河川に近い部分",
        hintImage: "images/alluvial_fan.png",
        hintText: "",
        answer: "扇頂"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "扇状地のうち、堆積が厚く、地下水位が深い部分",
        hintImage: "images/alluvial_fan.png",
        hintText: "",
        answer: "扇央"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "扇状地のうち、地下水位が浅く、湧き水が豊富な部分",
        hintImage: "images/alluvial_fan.png",
        hintText: "",
        answer: "扇端"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 2,
        desc: "扇状地において、河川が扇央に達すると水が流れてなくなることがある。",
        hintImage: "images/alluvial_fan.png",
        hintText: "",
        answer: "水無川"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "扇央ではどのような土地利用がされているか",
        hintImage: "images/alluvial_fan.png",
        hintText: "地下水位深い",
        answer: "地下水位が深く、水はけが良い<br>↓<br>果樹園 / 集落少ない"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "河川が扇状地を通過した後に形成され、傾斜が緩やかで平坦な地形",
        hintImage: "images/flood_plain.png",
        hintText: "人が手を加えなければ、洪水時に冠水する地帯",
        answer: "氾濫原"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "氾濫原において、自由蛇行が大きくなって生じる湖",
        hintImage: "images/flood_plain.png",
        hintText: "",
        answer: "三日月湖"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "氾濫原において、洪水時に運搬された土砂によって河川の脇に出来た微高地",
        hintImage: "images/flood_plain.png",
        hintText: "",
        answer: "自然堤防"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "氾濫原において、自然堤防の後側にある、洪水時の水が溜まって出来た低湿地",
        hintImage: "images/flood_plain.png",
        hintText: "",
        answer: "後背湿地"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "稲作の開始後、人々は氾濫原をどのように耕地として利用した？",
        hintImage: "images/flood_plain.png",
        hintText: "集落…高い所　水田…水が豊富な所",
        answer: "自然堤防上に集落を作り、後輩湿地に水田を作った。"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "堤防で囲まれた集落<br>(堤防の「中」の集落)",
        hintImage: "images/ring_levee.jpg",
        hintText: "例) 濃尾平野",
        answer: "輪中"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "河口において、運搬作用が弱まることで形成される地形",
        hintImage: "images/flood_plain.png",
        hintText: "",
        answer: "三角州"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "<三角州の分類>勾配が急で堆積作用が弱いもの",
        hintImage: "images/cuspate.png",
        hintText: "突き出た三角形",
        answer: "カスプ状"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "<三角州の分類>勾配も堆積作用も中くらいのもの",
        hintImage: "images/arcuate.png",
        hintText: "扇形",
        answer: "円弧状"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "<三角州の分類>勾配が緩やかで堆積作用が強いもの",
        hintImage: "images/digitate.png",
        hintText: "川に沿って土砂が長く突き出している",
        answer: "鳥趾状"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "静岡県大井川は勾配が緩く堆積作用が強いのに、カスプ状なのは何故か。",
        hintImage: "",
        hintText: "カスプ状は本来は勾配が急で堆積作用が強い",
        answer: "ユーラシアとフィリピン海の境界の海溝にあり、堆積しても沈んでいくから。"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "三角州は、細かい砂や泥が堆積しており水持ちが良く、地下水位も浅いため、古くから水田として利用されていた。<br>現在ではどのようになっており、どのような問題が発生しているか。",
        hintImage: "",
        hintText: "",
        answer: "都市化・工業化が進み、地下水の過剰なくみ上げによる地盤沈下が起こり、海抜0m地帯になってしまう。"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "三角州における災害の危険性",
        hintImage: "",
        hintText: "①標高の低さによるもの<br>②地盤の弱さによるもの",
        answer: "①津波・高潮・洪水<br>②地盤沈下・液状化"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 2,
        desc: "堆積平野のうち、谷底平野・扇状地・氾濫原・三角州など、1万年以内に作られたもの",
        hintImage: "images/.png",
        hintText: "水が豊富",
        answer: "沖野平野"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 2,
        desc: "堆積平野のうち、河岸段丘などの、1万年以上前に形成されたもの",
        hintImage: "images/.png",
        hintText: "水が少ない → 畑・果樹園",
        answer: "台地"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 1,
        desc: "河川の堆積作用が強い場合に扇状地周辺でみられる、河床が堤内地よりも高い河川",
        hintImage: "images/ceiling.png",
        hintText: "",
        answer: "天井川"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "天井川はどのように形成されるか",
        hintImage: "images/ceiling_process.png",
        hintText: "",
        answer: "河川の隣に堤防を立てる<br>↓<br>堆積して川の水位あがる<br>↓<br>堤防高くする<br>"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 2,
        desc: "関西に多い土壌",
        hintImage: "images/masado.png",
        hintText: "花崗岩が風化いてできた土壌<br>河川の浸食作用に弱い",
        answer: "真砂土"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "天井川が関西に多い理由2つ",
        hintImage: "images/ceiling.png",
        hintText: "",
        answer: "①真砂土は浸食に弱→上流からの土砂が多→土砂堆積が多<br>②稲作の歴史古→水利の整備進んでた→昔から河道が固定"
    },
    {
        category: "河川地形",
        category_eng: "r_terrain",
        level: 3,
        desc: "近年天井川が付け替えられているのは何故？",
        hintImage: "images/ceiling.png",
        hintText: "メリット < デメリット&不必要性",
        answer: "メリット(生活用水を得やすい)<br>^<br>デメリット(水害)&<br>不必要性(既に用水整備)"
    },

    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "波の浸食作用によって出来る海岸",
        hintImage: "images/rocky_coast.png",
        hintText: "岩盤が露出している海岸",
        answer: "岩石海岸"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "波の堆積作用によって出来る海岸",
        hintImage: "images/sandy_coast.jpg",
        hintText: "砂礫が堆積している海岸",
        answer: "砂浜海岸"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "岩石海岸において、波の浸食作用によって作られる崖状の地形",
        hintImage: "images/sea_cliff.png",
        hintText: "例) 浄土ヶ浜",
        answer: "海食崖"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "岩石海岸において、海食崖が後退して満潮位スレスレに作られる棚状の地形",
        hintImage: "images/wave_cut.jpeg",
        hintText: "例) 鬼の洗濯板",
        answer: "波食棚"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "砂浜海岸において、<br>堆積した砂が内陸に飛ばされて出来た丘",
        hintImage: "images/coastal_dune.png",
        hintText: "例) 鳥取砂丘",
        answer: "海岸砂丘"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "砂浜海岸において、<br>波によって運搬されて砂礫が、細長くくるっと突き出すように堆積した地形",
        hintImage: "images/sand_spit.png",
        hintText: "例) 野付半島",
        answer: "砂嘴"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "砂浜海岸において、<br>波によって運搬されて砂礫が、細長く真っ直ぐ突き出すように堆積した地形",
        hintImage: "images/reef.png",
        hintText: "例) 天橋立",
        answer: "砂州"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "砂浜海岸において、<br>海岸と接することなく形成された砂州",
        hintImage: "images/coastal_state.png",
        hintText: "例) ニューヨーク",
        answer: "沿岸州"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "砂浜海岸において、<br>砂州によって外海と切り離されてできた湖",
        hintImage: "images/reef.png",
        hintText: "例) 天橋立",
        answer: "潟湖(ラグーン)"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "砂浜海岸において、<br>海岸 と 沖合の島 の間にできた砂州",
        hintImage: "images/tombolo.png",
        hintText: "例) 函館",
        answer: "陸繋砂州"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 3,
        desc: "日本の砂浜海岸の多くは浸食されて縮小しつつあるが、どのような整備が原因となっているか。",
        hintImage: "images/.png",
        hintText: "現状：①河川によって運搬された砂礫<br>②岩石海岸が浸食されて出てきた砂礫<br>どっちも減ってる",
        answer: "堤防ダム→運搬される砂礫が止められる→海岸まで来ない<br>消波ブロック→岩石海岸の浸食減→堆積減"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "土地の隆起や海水面の低下により、かつでの海底が陸地になること",
        hintImage: "images/emergent.png",
        hintText: "",
        answer: "離水"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "土地の沈降や海水面の上昇により、かつでの陸地が海底になること",
        hintImage: "images/.png",
        hintText: "",
        answer: "沈水"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "岩石海岸が離水してできた段丘",
        hintImage: "images/coastal_terrace.jpg",
        hintText: "海食崖と波食棚が連続",
        answer: "海岸段丘"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "浅く平らな海底が離水して形成される平野",
        hintImage: "images/coastal_plain.png",
        hintText: "例) 九十九里浜",
        answer: "海岸平野"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "海岸線と平行に並ぶ、波の打ち上げた砂礫が列状に堆積した地形",
        hintImage: "images/.png",
        hintText: "",
        answer: "浜堤"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "河川の浸食作用によるV字谷が沈水してできた鋸歯状の海岸",
        hintImage: "images/rias.jpg",
        hintText: "↔フィヨルド(U字谷)",
        answer: "リアス海岸"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "山地の沈水が進み、山頂部が島として多く残っている海域",
        hintImage: "images/archipelago.png",
        hintText: "",
        answer: "多島海"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 3,
        desc: "リアス海岸の内湾はどのように利用されているか？",
        hintImage: "images/rias.jpg",
        hintText: "例) 八幡浜",
        answer: "内湾では養殖・陸ではみかんの段々畑"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "氷河が衰退を繰り返すサイクルを何というか。",
        hintImage: "images/glacial_cycle.webp",
        hintText: "氷期・間氷期",
        answer: "氷期・間氷期サイクル"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "現在(完新世)は氷期か、間氷期か",
        hintImage: "images/glacial_cycle.webp",
        hintText: "",
        answer: "間氷期"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 2,
        desc: "氷期・間氷期サイクルの要因4つ",
        hintImage: "images/",
        hintText: "",
        answer: "①地球の周期的運動<br>②海洋の深層循環<br>③太陽活動<br>④火山活動"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 3,
        desc: "昔の海の証拠(沼サンゴ)が、現在の海面より高位置にある理由<br>||<br>海水準変動にはどのような物があるか",
        hintImage: "images/",
        hintText: "",
        answer: "海面の低下<br>＆<br>土地の隆起<br>(海溝に近い程隆起)"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "広大な陸地を厚く覆う大規模な氷河",
        hintImage: "images/ice_shhet.gif",
        hintText: "例) 何極大陸・グリーンランド",
        answer: "氷床<br>(大陸氷河)"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "雪線より高い山岳を源として谷を流下する氷河",
        hintImage: "images/mountain_glacier.png",
        hintText: "別名：谷氷河",
        answer: "山岳氷河"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "氷河によって山頂が浸食されてできた半円型の窪地",
        hintImage: "images/glacial_landform.webp",
        hintText: "別名：圏谷",
        answer: "カール"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "氷河によって山頂が鋭く浸食されてできた岩峰",
        hintImage: "images/glacial_landform.webp",
        hintText: "別名：尖峰",
        answer: "ホルン"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "流下する氷河によって浸食された谷",
        hintImage: "images/glacial_landform.webp",
        hintText: "沈水→フィヨルド",
        answer: "U字谷"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "氷河によって浸食・運搬されてきた土砂が末端部に堆積してできた丘",
        hintImage: "images/glacial_landform.webp",
        hintText: "別名：堆石",
        answer: "モレーン"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "モレーンによって水がせき止められて出来た湖",
        hintImage: "images/glacial_landform.webp",
        hintText: "例) 五大湖",
        answer: "氷河湖"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 3,
        desc: "氷河周辺で懸念される災害",
        hintImage: "images/glacial_landform.webp",
        hintText: "",
        answer: "カールの崩壊<br>↓<br>村のあるU字谷に氷河が流下"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "温かく浅く澄んだ海に生息する造礁サンゴが作る「地形」",
        hintImage: "images/",
        hintText: "1年間に約10cm成長",
        answer: "サンゴ礁"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "サンゴや有孔虫などの遺骸が固まってできた堆積岩",
        hintImage: "images/coral.jpg",
        hintText: "サンゴ礁の中身の岩",
        answer: "石灰岩"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "中央の陸地の裾を取り囲むように発達したサンゴ礁",
        hintImage: "images/coral1.png",
        hintText: "例) ジョン万次郎上陸の地",
        answer: "裾礁"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "中央の築地との間が離れたサンゴ礁(バリアリーフ)",
        hintImage: "images/coral2.png",
        hintText: "例) グレートバリアリーフ",
        answer: "堡礁"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "中央に陸地がなく、輪のようになっているサンゴ礁",
        hintImage: "images/coral3.png",
        hintText: "例) ビキニ島",
        answer: "環礁"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 2,
        desc: "サンゴ礁によって外界と切り離された水域",
        hintImage: "images/",
        hintText: "似：潟湖(ラグーン)…砂州によって外界と切り離された水域",
        answer: "礁湖(ラグーン)"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 3,
        desc: "赤道付近には環礁や堡礁が多く、緯度30度周辺では裾礁が多い理由は？",
        hintImage: "images/coral4",
        hintText: "赤道付近…氷期に形成<br>30度付近…間氷期に形成",
        answer: "赤道付近…氷期に形成→海水準上昇→陸なし<br>(サンゴ礁は成長するからなくならない)<br>30度付近…間氷期に形成<br>(海水準上昇後に形成されたから陸残る)"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 2,
        desc: "日本列島において、石灰岩はどのあたりに分布している？",
        hintImage: "images/",
        hintText: "",
        answer: "全国各地(内陸も)"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 3,
        desc: "日本列島において、石灰岩が内陸部にも分布しているのは何故？",
        hintImage: "images/limestone.gif",
        hintText: "",
        answer: "海洋のサンゴ礁で形成された石灰岩が、プレート移動によって日本列島に付加したから。"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 1,
        desc: "地下に石灰岩が存在するとき、雨水の溶食作用によって形成された地形",
        hintImage: "images/karst.jpg",
        hintText: "例) 秋吉台",
        answer: "カルスト地形"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 2,
        desc: "雨水が岩表面の割れ目に浸透し、溶食されてできた窪地",
        hintImage: "images/polje.png",
        hintText: "3段階",
        answer: "ドリーネ<br>↓<br>ウバーレ<br>↓<br>ポリエ(溶食盆地)"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 2,
        desc: "石灰岩が高温多雨な環境下で激しく溶食を受けて、岩峰が林立する地形",
        hintImage: "images/towerkarst.png",
        hintText: "例) 大堂(うふどう)",
        answer: "タワーカルスト"
    },
    {
        category: "その他の地形",
        category_eng: "o_terrain",
        level: 2,
        desc: "地中の石灰岩が溶食されてできて地下の空洞",
        hintImage: "images/cave.jpg",
        hintText: "沖縄ではガマと呼ばれている。",
        answer: "鍾乳洞"
    },

    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "熱・光・動力などの源になるエネルギー供給する資源",
        hintImage: "",
        hintText: "",
        answer: "エネルギー資源"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "天然のままの物質を形を変えずに利用するエネルギー資源",
        hintImage: "images/p_energy.jpg",
        hintText: "薪・石炭・石油",
        answer: "一次エネルギー"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "一次エネルギーを加工して扱いやすくしたエネルギー資源",
        hintImage: "",
        hintText: "木炭・電力",
        answer: "ニ次エネルギー"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "生物の遺骸が長い時間をかけて変成してできたエネルギー源",
        hintImage: "",
        hintText: "",
        answer: "化石燃料"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "太古の植物の遺骸が体積・埋没し、変成して可燃性の固体になった化石燃料",
        hintImage: "images/coal.jpg",
        hintText: "",
        answer: "石炭"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "太古の動植物の遺骸が体積・埋没し、変成して可燃性の液体になった化石燃料",
        hintImage: "",
        hintText: "",
        answer: "石油"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "石炭の近くで多く産出する、可燃性の気体の化石燃料",
        hintImage: "",
        hintText: "",
        answer: "天然ガス"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "利用するエネルギー源の、需要上の大きな変革",
        hintImage: "images/energy_rev.gif",
        hintText: "1960年代：石炭 → 石油・天然ガス",
        answer: "エネルギー革命"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 3,
        desc: "エネルギー革命の原因は？",
        hintImage: "images/tram.gif",
        hintText: "路面電車→○○<br>○○の増加",
        answer: "車や飛行機の増加による石油利用料の増加"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "自然現象を利用したエネルギー",
        hintImage: "",
        hintText: "主に電力源として利用されるエネルギー",
        answer: "自然エネルギー(再生利用エネルギー)"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "水の落下エネルギーによってタービンを回転させる発電方法",
        hintImage: "images/water.jpg",
        hintText: "",
        answer: "水力発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "太陽電池を用い、太陽エネルギーから発電する方法",
        hintImage: "images/solar.jpg",
        hintText: "",
        answer: "太陽光発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "風の力で風車を回転させる発電方法",
        hintImage: "images/wind.jg",
        hintText: "",
        answer: "風力発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 1,
        desc: "地下の熱水から得た水蒸気でタービンを回転させる発電方法",
        hintImage: "images/geothermal.jpg",
        hintText: "",
        answer: "地熱発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 3,
        desc: "地熱発電の環境問題に関する問題点は？",
        hintImage: "images/geothermal.jpg",
        hintText: "地熱発電の適地 ≒ 国立公園",
        answer: "地熱発電は火山の近くに多く、国立公園とかぶることが多いため、森林伐採などの制限を受けることが多い。"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 2,
        desc: "生物資源を燃料とした発電方法",
        hintImage: "images/biomass.jpg",
        hintText: "",
        answer: "バイオマス発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 2,
        desc: "人為的に制御した核分裂反応の熱で発生する水蒸気でタービンを回転させる発電方法",
        hintImage: "images/nuclear.jpg",
        hintText: "",
        answer: "原子力発電"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 2,
        desc: "旧来の石炭の採掘方法",
        hintImage: "images/mine.png",
        hintText: "",
        answer: "坑道掘り"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 2,
        desc: "現在主流の石炭の採掘方法",
        hintImage: "images/open_cut.png",
        hintText: "",
        answer: "露天掘り"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 3,
        desc: "近年、石油生産量が停滞しているのは何故？",
        hintImage: "images/co2.png",
        hintText: "",
        answer: "石油・天然ガスに比べてCO₂排出量が多いから。"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 2,
        desc: "巨大な資本と高度な技術を併せ持ち、採掘・輸送・精製・販売を担う国際的な石油会社",
        hintImage: "images/major_oil.png",
        hintText: "別名：石油メジャー",
        answer: "国際石油資本"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 2,
        desc: "新興国の資源に対する主権を確立し、経済開発を目指す働き",
        hintImage: "",
        hintText: "新興国…経済成長してる国",
        answer: "資本ナショナリズム"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 3,
        desc: "現在日本の石油の輸入先は中東に頼っているが、どのようなリスクがあり、リスク軽減のためにはどうすれば良いか。",
        hintImage: "",
        hintText: "リスク：中東では紛争の恐れが高く、値上げされてしまう。",
        answer: "策：石油の代わりに、バイオマスエネルギーといったSAF(持続可能な航空燃料)を用いる。"
    },
    {
        category: "エネルギー",
        category_eng: "energy",
        level: 3,
        desc: "バイオエネルギーにはどのような物があるか",
        hintImage: "",
        hintText: "①サトウキビやトウモロコシが原料<br>②植物油が原料",
        answer: "①バイオエタノール(原料は日本ではあまりとれない)<br>②バイオディーゼル(植物油は日本でとれる)"
    },
];