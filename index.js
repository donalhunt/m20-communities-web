(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.oci = {}));
}(this, (function (exports) { 'use strict';

  var features = [{type:"Feature",id:"ie-cork-ballygibbon.geojson",properties:{"@id":"relation/5486531",admin_level:"10",boundary:"administrative",locality:"townland",name:"Ballygibbon",place:"locality",type:"boundary"},geometry:{type:"Polygon",coordinates:[[[-8.57688,51.96026],[-8.57725,51.96076],[-8.57729,51.96084],[-8.57738,51.96105],[-8.57737,51.96121],[-8.57729,51.96137],[-8.5767,51.9619],[-8.57669,51.96202],[-8.5767,51.96213],[-8.57693,51.96214],[-8.5774,51.96219],[-8.5775,51.96232],[-8.57738,51.96248],[-8.57696,51.96261],[-8.57662,51.96283],[-8.57641,51.9631],[-8.57636,51.96325],[-8.57651,51.96341],[-8.57662,51.96347],[-8.57701,51.96333],[-8.57726,51.96331],[-8.57732,51.9634],[-8.57726,51.96351],[-8.5768,51.96379],[-8.57666,51.96398],[-8.57664,51.96427],[-8.57659,51.96457],[-8.5766,51.96502],[-8.57673,51.96532],[-8.57684,51.96571],[-8.57678,51.96593],[-8.57662,51.96608],[-8.57633,51.96625],[-8.5762,51.96632],[-8.57595,51.96644],[-8.57572,51.96652],[-8.5755,51.96658],[-8.57481,51.96668],[-8.57447,51.96676],[-8.57412,51.96677],[-8.57375,51.96679],[-8.57321,51.96678],[-8.57256,51.96678],[-8.5723,51.96678],[-8.57171,51.96679],[-8.57078,51.96675],[-8.57019,51.96669],[-8.56974,51.96659],[-8.56925,51.96644],[-8.56878,51.9663],[-8.56825,51.96623],[-8.56717,51.96614],[-8.56666,51.96611],[-8.56626,51.96605],[-8.56577,51.96599],[-8.56546,51.96592],[-8.56514,51.96588],[-8.56456,51.96584],[-8.56431,51.96584],[-8.56407,51.96587],[-8.56376,51.9659],[-8.56354,51.96614],[-8.56319,51.96659],[-8.56283,51.96697],[-8.56261,51.96714],[-8.56254,51.96736],[-8.56254,51.96764],[-8.56247,51.96768],[-8.56211,51.96783],[-8.56172,51.96797],[-8.56129,51.96806],[-8.56109,51.96807],[-8.56092,51.96801],[-8.56037,51.96777],[-8.55948,51.96737],[-8.55869,51.9669],[-8.55856,51.96651],[-8.55794,51.96585],[-8.55782,51.96562],[-8.55763,51.96524],[-8.5575,51.96482],[-8.55736,51.96414],[-8.55732,51.9638],[-8.55725,51.96346],[-8.55734,51.96282],[-8.55717,51.96209],[-8.55691,51.96121],[-8.55685,51.96105],[-8.55658,51.96019],[-8.55607,51.95919],[-8.5562,51.95842],[-8.55634,51.95799],[-8.55658,51.95756],[-8.55687,51.95714],[-8.55744,51.95648],[-8.55775,51.95608],[-8.55833,51.95539],[-8.55862,51.95537],[-8.55956,51.95538],[-8.56003,51.95538],[-8.56051,51.95546],[-8.56067,51.95548],[-8.56144,51.95512],[-8.56193,51.955],[-8.56214,51.95487],[-8.56231,51.95465],[-8.56249,51.95445],[-8.56267,51.9543],[-8.56292,51.95421],[-8.56324,51.95421],[-8.56342,51.95426],[-8.56402,51.95424],[-8.56474,51.95432],[-8.56528,51.95424],[-8.56606,51.95422],[-8.56673,51.95423],[-8.5672,51.95426],[-8.56806,51.9544],[-8.56883,51.95448],[-8.56921,51.95448],[-8.56962,51.95445],[-8.57071,51.95437],[-8.57165,51.9541],[-8.5722,51.95409],[-8.57278,51.95393],[-8.57319,51.95389],[-8.57331,51.95401],[-8.57349,51.95409],[-8.5738,51.95412],[-8.57416,51.9541],[-8.57451,51.95412],[-8.57495,51.95412],[-8.57569,51.9541],[-8.5759,51.95436],[-8.57607,51.95457],[-8.57614,51.95473],[-8.57623,51.95485],[-8.57645,51.95492],[-8.57661,51.95491],[-8.57683,51.9549],[-8.57701,51.95493],[-8.57712,51.95505],[-8.57711,51.9552],[-8.57705,51.95527],[-8.5767,51.95538],[-8.57649,51.95551],[-8.57627,51.95558],[-8.57606,51.95561],[-8.57579,51.9557],[-8.5757,51.95578],[-8.57579,51.95586],[-8.57596,51.95601],[-8.57613,51.9561],[-8.57629,51.95631],[-8.57652,51.95655],[-8.5766,51.95678],[-8.5766,51.957],[-8.57644,51.95724],[-8.57644,51.95736],[-8.57656,51.95755],[-8.57657,51.95764],[-8.57656,51.95775],[-8.57654,51.95787],[-8.57648,51.95799],[-8.57649,51.95835],[-8.57659,51.95868],[-8.57684,51.95889],[-8.57705,51.95913],[-8.57713,51.95926],[-8.57716,51.9595],[-8.57712,51.9596],[-8.57694,51.95976],[-8.57692,51.96],[-8.57688,51.96026]]]}},{type:"Feature",id:"ie-cork-coolowen.geojson",properties:{"@id":"relation/5688488",admin_level:"10",boundary:"administrative",locality:"townland",name:"Coolowen",place:"locality",type:"boundary"},geometry:{type:"Polygon",coordinates:[[[-8.5445,51.95771],[-8.54567,51.95802],[-8.5462,51.95812],[-8.54721,51.95819],[-8.5478,51.95831],[-8.54875,51.95846],[-8.55014,51.95871],[-8.55124,51.95891],[-8.55225,51.9591],[-8.55251,51.95911],[-8.55304,51.9591],[-8.55385,51.95917],[-8.55452,51.95922],[-8.55541,51.95924],[-8.55607,51.95919],[-8.55658,51.96019],[-8.55685,51.96105],[-8.55691,51.96121],[-8.55717,51.96209],[-8.55734,51.96282],[-8.55725,51.96346],[-8.55732,51.9638],[-8.55736,51.96414],[-8.5575,51.96482],[-8.55763,51.96524],[-8.55782,51.96562],[-8.55794,51.96585],[-8.55856,51.96651],[-8.55869,51.9669],[-8.55948,51.96737],[-8.56037,51.96777],[-8.55769,51.97042],[-8.55715,51.97099],[-8.55679,51.971],[-8.5569,51.9712],[-8.5569,51.9713],[-8.55686,51.97142],[-8.55677,51.9715],[-8.55673,51.97159],[-8.55677,51.97191],[-8.55701,51.97279],[-8.55685,51.97284],[-8.55665,51.97286],[-8.5567,51.97304],[-8.55674,51.97314],[-8.55664,51.97323],[-8.55636,51.97336],[-8.55605,51.97354],[-8.55538,51.97391],[-8.55512,51.97406],[-8.55437,51.97382],[-8.55388,51.97361],[-8.55355,51.97346],[-8.55333,51.97333],[-8.55232,51.97262],[-8.55177,51.97226],[-8.55097,51.97174],[-8.55075,51.9716],[-8.5505,51.97148],[-8.55016,51.97136],[-8.54972,51.97123],[-8.54878,51.97105],[-8.54794,51.97088],[-8.54743,51.97074],[-8.54694,51.97055],[-8.54606,51.9702],[-8.54448,51.96937],[-8.54382,51.96899],[-8.54311,51.96858],[-8.54175,51.96789],[-8.54008,51.96707],[-8.53842,51.96622],[-8.53745,51.9657],[-8.53652,51.96526],[-8.53427,51.96432],[-8.53279,51.9637],[-8.53256,51.96361],[-8.53121,51.96291],[-8.53095,51.96277],[-8.53003,51.9622],[-8.52949,51.96193],[-8.52888,51.96157],[-8.52815,51.96122],[-8.52776,51.96101],[-8.5274,51.96087],[-8.52657,51.96053],[-8.52618,51.96035],[-8.52603,51.96027],[-8.5259,51.96017],[-8.52601,51.96015],[-8.52621,51.96005],[-8.52624,51.95966],[-8.52619,51.95939],[-8.52609,51.95919],[-8.52594,51.95911],[-8.52584,51.95877],[-8.52564,51.95833],[-8.52522,51.95754],[-8.52523,51.95725],[-8.52512,51.95698],[-8.52503,51.9567],[-8.52514,51.95658],[-8.52539,51.95629],[-8.52546,51.95617],[-8.52556,51.95608],[-8.52566,51.95581],[-8.52581,51.95551],[-8.52579,51.95538],[-8.52572,51.95521],[-8.52566,51.95471],[-8.52555,51.95432],[-8.52555,51.95412],[-8.52565,51.95396],[-8.52568,51.95378],[-8.52549,51.95338],[-8.52538,51.95323],[-8.52515,51.95312],[-8.52498,51.9529],[-8.52476,51.95259],[-8.52443,51.95238],[-8.52401,51.95215],[-8.52377,51.95201],[-8.5236,51.95177],[-8.52345,51.95144],[-8.52331,51.95139],[-8.5233,51.95118],[-8.52347,51.95108],[-8.52355,51.95088],[-8.52343,51.95076],[-8.5233,51.95041],[-8.52328,51.95003],[-8.5236,51.94997],[-8.52374,51.94987],[-8.52382,51.94965],[-8.52413,51.94937],[-8.52442,51.94919],[-8.52452,51.94894],[-8.52466,51.94892],[-8.52493,51.94878],[-8.52524,51.94851],[-8.52549,51.94819],[-8.52552,51.94805],[-8.52564,51.9478],[-8.52596,51.94744],[-8.52612,51.94706],[-8.5261,51.94687],[-8.52603,51.94662],[-8.5259,51.94647],[-8.52532,51.94504],[-8.5255,51.94459],[-8.52546,51.94444],[-8.52529,51.94388],[-8.52539,51.94344],[-8.52528,51.94331],[-8.52557,51.94313],[-8.52592,51.94298],[-8.52601,51.94264],[-8.52656,51.94213],[-8.52701,51.94176],[-8.52715,51.94165],[-8.52736,51.94149],[-8.52714,51.94114],[-8.52708,51.94068],[-8.52697,51.94045],[-8.52663,51.93977],[-8.52656,51.93899],[-8.52663,51.93872],[-8.5266,51.93861],[-8.5269,51.93806],[-8.52715,51.93801],[-8.52723,51.93781],[-8.52716,51.93765],[-8.52702,51.93731],[-8.52687,51.93712],[-8.52665,51.93698],[-8.52618,51.93672],[-8.52568,51.93649],[-8.5252,51.93642],[-8.52493,51.93639],[-8.52483,51.93637],[-8.52476,51.93595],[-8.5246,51.93548],[-8.52457,51.93539],[-8.52467,51.93543],[-8.52491,51.93543],[-8.52507,51.93543],[-8.52514,51.93543],[-8.52526,51.93544],[-8.5254,51.93545],[-8.52545,51.93546],[-8.5255,51.93546],[-8.52552,51.93547],[-8.52557,51.93548],[-8.5256,51.93549],[-8.52563,51.9355],[-8.52567,51.93552],[-8.52572,51.93554],[-8.52588,51.93564],[-8.52602,51.93575],[-8.52615,51.93586],[-8.5264,51.93611],[-8.52664,51.9363],[-8.52705,51.93663],[-8.52748,51.93696],[-8.52774,51.93723],[-8.52781,51.93731],[-8.52798,51.9376],[-8.52863,51.93864],[-8.52876,51.93885],[-8.5289,51.93906],[-8.52904,51.9393],[-8.52927,51.93976],[-8.52937,51.93994],[-8.52955,51.94026],[-8.52975,51.94056],[-8.52982,51.94065],[-8.53001,51.94086],[-8.53009,51.94095],[-8.53049,51.94137],[-8.5307,51.9416],[-8.53082,51.94173],[-8.53118,51.94204],[-8.53133,51.94218],[-8.53168,51.94253],[-8.53199,51.94297],[-8.53267,51.94377],[-8.53322,51.9443],[-8.53348,51.94451],[-8.53373,51.94466],[-8.53427,51.94486],[-8.53497,51.94505],[-8.53498,51.94505],[-8.53518,51.94515],[-8.53535,51.94523],[-8.53555,51.94537],[-8.53563,51.94544],[-8.53576,51.94551],[-8.53599,51.94564],[-8.53621,51.94577],[-8.53629,51.94581],[-8.53646,51.94587],[-8.53699,51.94598],[-8.53745,51.94613],[-8.53773,51.94625],[-8.53782,51.94629],[-8.53814,51.94644],[-8.53841,51.94662],[-8.53891,51.947],[-8.53916,51.94728],[-8.53934,51.94763],[-8.53947,51.94783],[-8.53962,51.94805],[-8.53993,51.94839],[-8.54,51.94848],[-8.54032,51.94879],[-8.5404,51.94887],[-8.54086,51.94924],[-8.54108,51.94944],[-8.54122,51.94966],[-8.54125,51.94972],[-8.54147,51.9501],[-8.54182,51.95062],[-8.54199,51.95086],[-8.54204,51.95091],[-8.54222,51.95109],[-8.54225,51.95115],[-8.54248,51.95155],[-8.54268,51.952],[-8.54277,51.95224],[-8.54288,51.95257],[-8.54291,51.95263],[-8.54295,51.95282],[-8.54296,51.95287],[-8.54305,51.95317],[-8.54318,51.95345],[-8.54342,51.95379],[-8.5435,51.9539],[-8.54373,51.95421],[-8.54375,51.95425],[-8.54392,51.95458],[-8.54401,51.95483],[-8.54404,51.955],[-8.54404,51.95504],[-8.54404,51.95524],[-8.54401,51.95556],[-8.54398,51.95583],[-8.54403,51.95607],[-8.54404,51.95613],[-8.54408,51.95632],[-8.54415,51.95662],[-8.54422,51.95687],[-8.54442,51.95754],[-8.54443,51.95758],[-8.54443,51.95759],[-8.5445,51.95771]]]}}];

  var resources = {"ie-cork-ballygibbon":{id:"ie-cork-ballygibbon",type:"osm-lc",locationSet:{include:["ie-cork-ballygibbon.geojson"]},languageCodes:["en"],name:"M20 maps (zoomed to Ballygibbon)",description:"M20 route options map: {url}",url:"https://mouchel.maps.arcgis.com/apps/webappviewer/index.html?id=4efb31504b094067a2f66768cb02ae0e&center=-8.5568,51.9547&level=7",contacts:[{name:"Donal Hunt",email:"donal.hunt@gmail.com"}],order:4},"ie-cork-coolowen":{id:"ie-cork-coolowen",type:"osm-lc",locationSet:{include:["ie-cork-coolowen.geojson"]},languageCodes:["en"],name:"M20 maps (zoomed to Coolowen)",description:"M20 route options map: {url}",url:"https://mouchel.maps.arcgis.com/apps/webappviewer/index.html?id=4efb31504b094067a2f66768cb02ae0e&center=-8.5568,51.9547&level=7",contacts:[{name:"Donal Hunt",email:"donal.hunt@gmail.com"}],order:1},"ie-cork-coolowen-cllrs":{id:"ie-cork-coolowen-cllrs",type:"group",locationSet:{include:["ie-cork-coolowen.geojson"]},languageCodes:["en"],name:"Cork Co. Co. Cllrs - Cobh MD",description:"Councillors for Coolowen: {url}",url:"https://www.corkcoco.ie/en/your-county-council/electedmembers?field_municipal_district_target_id=215",order:3},"ie-cork-coolowen-email":{id:"ie-cork-coolowen-email",type:"mailinglist",locationSet:{include:["ie-cork-coolowen.geojson"]},languageCodes:["en"],name:"Local contact",description:"email address for local contact",url:"mailto:donal.hunt@gmail.com",contacts:[{name:"Donal Hunt",email:"donal.hunt@gmail.com"}],order:10},"ie-cork-coolowen-tds":{id:"ie-cork-coolowen-tds",type:"group",locationSet:{include:["ie-cork-coolowen.geojson"]},languageCodes:["en"],name:"Cork North-Central TDs",description:"TDs",url:"https://www.oireachtas.ie/en/members/tds/?tab=constituency&constituency=%2Fie%2Foireachtas%2Fhouse%2Fdail%2F33%2Fconstituency%2FCork-North-Central",order:2}};

  exports.features = features;
  exports.resources = resources;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
