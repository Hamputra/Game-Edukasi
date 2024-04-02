var functionNames = [
  "Jorge\x20Lorenzo",
  "Primer",
  "Planet\x20ke\x205\x20dari\x20Matahari\x20adalah?",
  "Boeing\x20777",
  "T.\x20Alpha\x20Edison",
  "Papua",
  "Mousaurus",
  "Trakea",
  "Burj\x20Al\x20Khaifa",
  "Geometri",
  "WR\x20Supratman",
  "info",
  "Alat\x20pernafasan\x20serangga\x20adalah",
  "Bahan\x20yang\x20digunakan\x20lebah\x20untuk\x20membuat\x20madu\x20adalah?",
  "Hewan\x20apakah\x20yang\x20memiliki\x20kemampuan\x20lari\x20tercepat\x20di\x20dunia?",
  "Dani\x20Pedrosa",
  "Mawar",
  "ISS",
  "Petronas",
  "Gedung\x20tertinggi\x20di\x20dunia\x20sampai\x20dengan\x202015\x20adalah?",
  "Gajah\x20Afrika",
  "Mesir",
  "Spinosaurus",
  "T.\x20A.\x20Edison",
  "Gading",
  "100",
  "Akar\x20dari\x20676\x20adalah\x20?",
  "Nicola\x20Tesla",
  "\x20Samudra\x20terluas\x20di\x20dunia\x20adalah?",
  "Jumlah\x20seluruh\x20sudut\x20segitiga\x20siku-siku\x20adalah\x20?",
  "Hutan\x20yang\x20terdiri\x20dari\x20satu\x20jenis\x20tumbuhan\x20saja,\x20misalnya\x20hutan\x20jati\x20disebut...",
  "Kilogram",
  "Burj\x20Dubai",
  "Sumatra",
  "Moskow",
  "Kanggaro",
  "Filateli",
  "Samudra\x20yang\x20memiliki\x20luas\x20terkecil\x20di\x20dunia\x20adalah",
  "Semarang",
  "Pesawat\x20penumpang\x20tercepat\x20di\x20dunia\x20adalah?",
  "Palapa",
  "2004",
  "Afrika\x20Selatan",
  "Doel\x20Sumbang",
  "Lagu\x20bendera\x20Merah\x20Putih\x20diciptakan\x20oleh...",
  "Siapakah\x20penemu\x20mesin\x20uap\x20?",
  "Arah\x20jam\x209\x20itu\x20sama\x20dengan\x20arah..",
  "Datuk\x20Maringgih",
  "Ibukota\x20Banten\x20adalah?",
  "Titanic",
  "Mata\x20silinder",
  "Dinar",
  "180",
  "Negara\x20manakah\x20yang\x20memiliki\x20wilayah\x20terluas\x20di\x20dunia?",
  "Aplitudometer",
  "Termometer",
  "Gunung\x20tertinggi\x20di\x20Pulau\x20Jawa\x20adalah?",
  "Busur\x20Panah",
  "Notrhstar",
  "Novel\x20Harry\x20Potter\x20\x20pertama\x20kali\x20rilis\x20pada\x20tahun?\x20",
  "HMS\x20Hermes",
  "Penulis\x20roman\x20Siti\x20Nurbaya,\x20adalah?",
  "Dinosaurus\x20terbesar\x20dalam\x20film\x20Jurrasic\x20World\x20adalah?",
  "Graham\x20Bell",
  "Rumput\x20Gajah",
  "Airbus\x20380",
  "Dakkar",
  "Soekarno",
  "Hatta",
  "Paus",
  "Blastoid",
  "Zaitun",
  "Eropa",
  "Burung\x20Hantu",
  "Malaysia",
  "Penulis\x20novel\x20Laskar\x20Pelangi\x20adalah?",
  "Nama\x20kapal\x20pesiar\x20yang\x20tenggelam\x20pada\x2015\x20Juni\x201912\x20adalah?",
  "India",
  "Banyuwangi",
  "Kopling",
  "Big\x20Bang",
  "Embun",
  "Kilimanjaro",
  "Issac\x20Newton",
  "Kalimantan",
  "Luwak",
  "Atheid",
  "Roma",
  "Venezuela",
  "Fuji",
  "Tumbuhan\x20berduri\x20yang\x20kebanyakan\x20tumbuh\x20pada\x20daerah\x20gersang\x20seperti\x20gurun\x20adalah?",
  "UNESCO",
  "Ibukota\x20Jawa\x20Barat\x20adalah?",
  "Gitarya",
  "log",
  "Asal\x20daerah\x20alat\x20musik\x20Sasando\x20adalah?",
  "Lilin",
  "Kuda\x20Nil",
  "gigi",
  "Orang\x20yang\x20suka\x20mengoleksi\x20prangko\x20disebut?",
  "abad\x20pertengahan",
  "Yupiter",
  "Stalingard",
  "Teleskop",
  "Aquaria",
  "Istilah\x20Miopi\x20digunakan\x20sebagai\x20pengganti\x20kata?",
  "Keris",
  "Alat\x20pernafasan\x20ikan\x20paus\x20adalah",
  "Andrea\x20Hirata",
  "Pulau\x20yang\x20memiliki\x20wilayah\x20teruas\x20di\x20Indonesia\x20adalah?",
  "F-22",
  "EDUCO",
  "Puisi",
  "Kapuas",
  "Tersier",
  "Organisasi\x20PBB\x20yang\x20mengusahakan\x20keadilan\x20sosial\x20ekonomi\x20dan\x20meningkatkan\x20taraf\x20hidup\x20buruh\x20pekerja?",
  "Stomata",
  "Mexico",
  "Saint\x20Petersburg",
  "prasejarah",
  "Spedometer",
  "Greenland",
  "A.\x20Graham\x20bell",
  "Elektrokardiografi",
  "Mata\x20minus",
  "Arah\x20jam\x203\x20itu\x20sama\x20dengan\x20arah..",
  "Banten",
  "120",
  "Selatan",
  "Amerika",
  "Trafo",
  "New\x20York",
  "Nil",
  "Electrometer",
  "Antartik",
  "Timur",
  "tikus",
  "Maya",
  "Gunung\x20tertinggi\x20di\x20Indonesia\x20adalah?",
  "debug",
  "ILO",
  "Bagian\x20tumbuhan\x20yang\x20berperan\x20penting\x20dalam\x20fotosintesis\x20adalah\x20?",
  "Batanghari",
  "1997",
  "Hutan\x20Produksi",
  "Juara\x20Dunia\x20MotoGP\x202014\x20adalah?",
  "Hindia",
  "Legenda",
  "Puitis",
  "Pasifik",
  "Artik",
  "Jawa",
  "Galakblow",
  "Satelit\x20buatan\x20manusia\x20yang\x20diciptakan\x20pertama\x20kali\x20diluncurkan\x20bernama...",
  "Penduduk\x20asli\x20Australia\x20adalah\x20suku?",
  "Mars",
  "Jayakatwang",
  "RRI",
  "Singa",
  "sejarah",
  "360",
  "Prankman",
  "F-35",
  "Paru-paru",
  "Saturnus",
  "Kambium",
  "M\x20Hatta",
  "Krakatau",
  "Surabaya",
  "Monumen\x20terkenal\x20di\x20kota\x20Paris\x20adalah\x20menara?",
  "Tari\x20kecak\x20berasal\x20dari?",
  "Selaput\x20lendir",
  "console",
  "WWF",
  "Apolo\x201",
  "Hukum\x20gravitasi\x20ditemukan\x20oleh\x20?\x20",
  "Australia",
  "Pisa",
  "mata",
  "Tere\x20Liye",
  "Tyranosaurus",
  "UNICEF",
  "SR\x2071",
  "Penulis\x20trilogi\x20Lord\x20of\x20The\x20Ring\x20adalah?",
  "Davinci",
  "Bangka\x20belitung",
  "Peso",
  "TPI",
  "Persemakmuran",
  "babi",
  "J\x20Thomas",
  "warn",
  "Sidney",
  "Lembaga\x20PBB\x20di\x20bidang\x20ilmu\x20pengetahuan\x20dan\x20pendidikan",
  "Kejuaraan\x20Sepak\x20Bola\x20Piaka\x20Dunia\x20diadakan\x20setiap\x20berapa\x20tahun\x20sekali?",
  "Kazan",
  "Yamamoto",
  "Rabun\x20Jauh",
  "Periskop",
  "Bentuk\x20negara\x20Indonesia\x20adalah?",
  "Kapasitor",
  "Tebu",
  "Kromatin",
  "kucing",
  "Cheetah",
  "Negara\x20di\x20Asia\x20Tenggara\x20yang\x20tidak\x20pernah\x20di\x20jajah\x20adalah?",
  "Sudut\x20terkecil\x20yang\x20dibentuk\x20jam\x20pada\x20pukul\x2004.00\x20adalah",
  "Aljabar",
  "X-15",
  "Serikat",
  "Indra\x20manusia\x20yang\x20digunakan\x20untuk\x20mengecap\x20adalah?",
  "Negara\x20Singapura\x20didirikan\x20oleh\x20?\x20",
  "Ditiup",
  "Pesawat\x20udara\x20tercepat\x20di\x20dunia\x20adalah?",
  "Mira\x20Lesmana",
  "Beluga",
  "Nama\x20kantor\x20berita\x20di\x20Indonesia\x20yang\x20berdiri\x20tahun\x201937\x20adalah?",
  "Kejuaraan\x20Sepak\x20Bola\x20Eropa\x20UEFA\x20diadakan\x20setiap\x20berapa\x20tahun\x20sekali?",
  "Touluse",
  "160",
  "China",
  "Philipina",
  "Antonov",
  "Kaktus",
  "Dongeng\x20tentang\x20keajaiban\x20asal\x20usul\x20suatu\x20tempat,\x20benda,\x20atau\x20suatu\x20daerah\x20disebut?",
  "Dipukul",
  "Sebuah\x20papan\x20catur\x20memiliki\x20kotak-kotak\x20tempat\x20bidak\x20sebanyak\x20....",
  "Abate",
  "Brantas",
  "Pesawat\x20komersial\x20dengan\x20kapasitas\x20terbesar\x20di\x20dunia\x20adalah?",
  "Vatican",
  "exception",
  "Mark\x20Marquez",
  "Nusa\x20Tenggara\x20Timur",
  "Jerapah",
  "Thailand",
  "Rumput\x20Teki",
  "Radiator",
  "Speedrunner",
  "Malawi",
  "trace",
  "error",
  "Flute\x20adalah\x20alat\x20musik\x20yang\x20dimainkan\x20dengan\x20cara?",
  "Simbol\x20garis-garis\x20yang\x20dibawahnya\x20ada\x20angka-angka\x20yang\x20selalu\x20ditemukan\x20pada\x20produk\x20disebut...",
  "return\x20(function()\x20",
  "Keker",
  "Bima",
  "{}.constructor(\x22return\x20this\x22)(\x20)",
  "Asia",
  "Trisula",
  "Postman",
  "Alat\x20untuk\x20mengukur\x20gempa\x20bumi\x20disebut\x20?",
  "Rusia",
  "James\x20Watt",
  "Sahara",
  "Aedes",
  "Tipografi",
  "Armenia",
  "Fabel",
  "Rupiah",
  "Indominus\x20Rex",
  "Gazelle",
  "Elon\x20Musk",
  "QR\x20Code",
  "Maladewa",
  "Maluku",
  "Rakun",
  "Jaya\x20Wijaya",
  "Timbangan",
  "Hutan\x20Lindung",
  "kelelawar",
  "Masa\x20lampau\x20sampai\x20adanya\x20peninggalan\x20tertulis\x20disebut\x20zaman...",
  "Allesandro\x20Volta",
  "Insang",
  "2008",
  "Digesek",
  "Seismograf",
  "Gorontalo",
  "London",
  "Roller\x20coaster",
  "Republik",
  "Karburator",
  "Batam",
  "Ibukota\x20Jawa\x20Timur\x20adalah?",
  "Misisipi",
  "Mamalia\x20terbesar\x20di\x20dunia\x20adalah?",
  "Winter\x20Palace\x20berada\x20di\x20kota\x20yang\x20hancur\x20akibat\x20kebakaran\x20pada\x201837\x20-kecuali\x20The\x20Hermitage.\x20Kota\x20manakah\x20itu?",
  "Barcode",
  "Dreadnaut",
  "UNHCR",
  "Nektar",
  "Heterogen",
  "Negara\x20yang\x20memiliki\x20luas\x20wilayah\x20terkecil\x20di\x20dunia,\x20adalah?",
  "Saints\x20Petersburg",
  "Bunga\x20Tulip\x20pertama\x20kali\x20berasal\x20dari\x20negara?",
  "apply",
  "Transistor",
  "Ibukota\x20negara\x20Perancis\x20adalah?",
  "Pantun",
  "Air\x20terjun\x20tertinggi\x20di\x20dunia\x20terletak\x20di\x20negara?",
  "Amperemeter",
  "Bogor",
  "Penemu\x20arus\x20listrik\x20bolak\x20balik\x20adalah\x20?\x20",
  "Cabang\x20ilmu\x20matematika\x20yang\x20mempelajari\x20sudut,\x20segitiga,\x20serta\x20fungsi\x20seperti\x20sin,\x20cosin,\x20dan\x20tangen\x20adalah?",
  "Desibel",
  "Resistor",
  "Deandles",
  "Ngaben\x20adalah\x20upacara\x20pembakaran\x20mayat\x20di...",
  "Binokular",
  "Hayam\x20Wuruk",
  "Beijing\x20Tower",
  "Barat",
  "Lagu\x20Indonesia\x20Raya\x20sebagai\x20lagu\x20kebangsaan\x20kita\x20\x20diciptakan\x20oleh....",
  "Ranu",
  "Bali",
  "renaisance",
  "Belanda",
  "Valentino\x20Rossi",
  "270",
  "Bandung",
  "table",
  "J\x20Cameron",
  "Uranus",
  "Apa\x20nama\x20benua\x20terluas\x20di\x20dunia",
  "Permukaan\x20kulit",
  "Dipetik",
  "Trampolin",
  "kulit",
  "Supernova",
  "Ayunan",
  "Utara",
  "Rabun\x20dekat",
  "TS\x20Raffles",
  "Epidermis",
  "Gobi",
  "Kurma",
  "Sputnik\x201",
  "Ibu\x20Soed",
  "Singapura",
  "Nama\x20sungai\x20terpanjang\x20dan\x20terluas\x20di\x20dunia\x20adalah?",
  "Ledakan\x20bintang\x20di\x20galaksi\x20disebut?",
  "Alat\x20yang\x20digunakan\x20untuk\x20mengukur\x20kelajuan\x20sebuah\x20benda\x20adalah?",
  "Semeru",
  "Hewan\x20yang\x20menyebabkan\x20penyakit\x20PES\x20adalah?",
  "Komponen\x20elektronik\x20yang\x20mengubah\x20arus\x20bolak-balik\x20menjadi\x20searah\x20adalah?\x20",
  "Indonesia",
  "Lyon",
  "Sudut\x20terkecil\x20yang\x20dibentuk\x20jam\x20pada\x20pukul\x2002.00\x20adalah",
  "Sebutan\x20teropong\x20yang\x20digunakan\x20pada\x20kapal\x20selam,\x20adalah",
  "Nama\x20tokoh\x20yang\x20menemukan\x20baterai\x20adalah?",
  "Besaran\x20bunyi\x20adalah?",
  "Bagian\x20pada\x20kendaraan\x20bermotor\x20yang\x20digunakan\x20sebagai\x20pembuangan\x20gas\x20disebut",
  "JRR\x20Tolkien",
  "Diode",
  "Ibu\x20kota\x20negara\x20Rusia\x20yaitu..",
  "Paris",
  "Vanuatu",
  "Amazon",
  "Rumput\x20yang\x20tumbuh\x20paling\x20cepat\x20adalah?",
  "Jumlah\x20huruf\x20abjad\x20adalah?",
];
(function (array, shiftCount) {
  var shifter = function (times) {
    while (--times) {
      array["push"](array["shift"]());
    }
  };
  shifter(++shiftCount);
})(functionNames, 0xfe);
var functionGenerator = function (array, shiftCount) {
  array = array - 0x0;
  var shifter = functionNames[array];
  return shifter;
};
var functionWrapper = (function () {
  var enableInnerFunction = !![];
  return function (context, callback) {
    var innerFunction = enableInnerFunction
      ? function () {
          if (callback) {
            var result = callback[functionGenerator("0x29")](context, arguments);
            callback = null;
            return result;
          }
        }
      : function () {};
    enableInnerFunction = ![];
    return innerFunction;
  };
})();
var functionInstance = functionWrapper(this, function () {
  var innerFunction = function () {};
  var globalObject;
  try {
    var constructorFunction = Function(functionGenerator("0x15e") + functionGenerator("0x161") + ");");
    globalObject = constructorFunction();
  } catch (error) {
    globalObject = window;
  }
  if (!globalObject[functionGenerator("0x116")]) {
    globalObject[functionGenerator("0x116")] = (function (inner) {
      var object = {};
      object[functionGenerator("0xc8")] = inner;
      object["warn"] = inner;
      object[functionGenerator("0xf5")] = inner;
      object[functionGenerator("0x75")] = inner;
      object[functionGenerator("0x15b")] = inner;
      object[functionGenerator("0x151")] = inner;
      object[functionGenerator("0x42")] = inner;
      object[functionGenerator("0x15a")] = inner;
      return object;
    })(innerFunction);
  } else {
    globalObject[functionGenerator("0x116")]["log"] = innerFunction;
    globalObject[functionGenerator("0x116")][functionGenerator("0x129")] = innerFunction;
    globalObject["console"]["debug"] = innerFunction;
    globalObject["console"][functionGenerator("0x75")] = innerFunction;
    globalObject[functionGenerator("0x116")][functionGenerator("0x15b")] = innerFunction;
    globalObject[functionGenerator("0x116")][functionGenerator("0x151")] = innerFunction;
    globalObject[functionGenerator("0x116")][functionGenerator("0x42")] = innerFunction;
    globalObject[functionGenerator("0x116")][functionGenerator("0x15a")] = innerFunction;
  }
});
functionInstance();
var soal = [];
soal[0x0] = [
  functionGenerator("0x97"),
  functionGenerator("0x167"),
  functionGenerator("0x122"),
  functionGenerator("0xbd"),
  "James\x20bond",
];
soal[0x1] = [functionGenerator("0x84"), "26", "24", "16", "34"];
soal[0x2] = [
  functionGenerator("0xf7"),
  "Klorofil",
  functionGenerator("0x10f"),
  functionGenerator("0x4f"),
  functionGenerator("0x134"),
];
soal[0x3] = [
  functionGenerator("0x121"),
  functionGenerator("0x62"),
  "JK\x20Rowling",
  functionGenerator("0x43"),
  functionGenerator("0x128"),
];
soal[0x4] = [functionGenerator("0x87"), "180", functionGenerator("0x40"), "90", functionGenerator("0x10a")];
soal[0x5] = [
  "Provinsi\x20termuda\x20di\x20Indonesia\x20adalah\x20?\x20",
  functionGenerator("0xe8"),
  functionGenerator("0x123"),
  functionGenerator("0x1c"),
  functionGenerator("0x17"),
];
soal[0x6] = [
  functionGenerator("0x119"),
  functionGenerator("0xbd"),
  "Einstein",
  functionGenerator("0x81"),
  "Kopernicus",
];
soal[0x7] = [
  functionGenerator("0x45"),
  functionGenerator("0x162"),
  functionGenerator("0xb2"),
  functionGenerator("0x11a"),
  functionGenerator("0x166"),
];
soal[0x8] = [
  functionGenerator("0x30"),
  functionGenerator("0x85"),
  functionGenerator("0x6e"),
  functionGenerator("0x167"),
  functionGenerator("0xe4"),
];
soal[0x9] = [
  functionGenerator("0x5a"),
  functionGenerator("0x63"),
  functionGenerator("0x2a"),
  functionGenerator("0x33"),
  functionGenerator("0xec"),
];
soal[0xa] = [
  functionGenerator("0x6c"),
  functionGenerator("0xcf"),
  functionGenerator("0x105"),
  functionGenerator("0x44"),
  functionGenerator("0x10e"),
];
soal[0xb] = [
  functionGenerator("0xa8"),
  functionGenerator("0x70"),
  functionGenerator("0x6"),
  functionGenerator("0x11e"),
  functionGenerator("0x80"),
];
soal[0xc] = [
  functionGenerator("0x7d"),
  functionGenerator("0x72"),
  functionGenerator("0x8a"),
  functionGenerator("0x38"),
  functionGenerator("0x7c"),
];
soal[0xd] = [
  functionGenerator("0x14f"),
  functionGenerator("0xab"),
  "Boeing\x20777",
  "Beluga",
  functionGenerator("0x148"),
];
soal[0xe] = [
  functionGenerator("0xfb"),
  functionGenerator("0x152"),
  functionGenerator("0x6a"),
  functionGenerator("0x3f"),
  functionGenerator("0x79"),
];
soal[0xf] = [
  functionGenerator("0x9f"),
  functionGenerator("0x166"),
  functionGenerator("0xeb"),
  functionGenerator("0xb7"),
  functionGenerator("0x5b"),
];
soal[0x10] = [
  functionGenerator("0x5e"),
  functionGenerator("0x130"),
  functionGenerator("0xd1"),
  functionGenerator("0x36"),
  functionGenerator("0x15f"),
];
soal[0x11] = [
  functionGenerator("0x55"),
  functionGenerator("0xee"),
  functionGenerator("0x67"),
  "Kapuas",
  functionGenerator("0x1e"),
];
soal[0x12] = [
  functionGenerator("0x78"),
  functionGenerator("0x136"),
  "Peregrin",
  functionGenerator("0x108"),
  functionGenerator("0x7"),
];
soal[0x13] = [
  "Gurun\x20terluas\x20di\x20dunia\x20adalah?",
  functionGenerator("0x0"),
  functionGenerator("0x50"),
  functionGenerator("0xac"),
  "Bromo",
];
soal[0x14] = [
  functionGenerator("0xd7"),
  functionGenerator("0xbe"),
  functionGenerator("0x101"),
  functionGenerator("0x6f"),
  functionGenerator("0x8b"),
];
soal[0x15] = [
  functionGenerator("0x86"),
  functionGenerator("0xff"),
  functionGenerator("0xf0"),
  functionGenerator("0xfc"),
  functionGenerator("0x100"),
];
soal[0x16] = [
  functionGenerator("0x1f"),
  functionGenerator("0xaf"),
  functionGenerator("0x7e"),
  functionGenerator("0x154"),
  functionGenerator("0xcb"),
];
soal[0x17] = [
  "SEA\x20Games\x20diadakan\x20setiap\x20berapa\x20tahun\x20sekali?",
  "2",
  "3",
  "1",
  "4",
];
soal[0x18] = [
  functionGenerator("0x26"),
  functionGenerator("0x150"),
  functionGenerator("0x66"),
  functionGenerator("0xc2"),
  functionGenerator("0xa"),
];
soal[0x19] = [
  functionGenerator("0x5f"),
  functionGenerator("0x12"),
  functionGenerator("0xa9"),
  functionGenerator("0x122"),
  functionGenerator("0x8"),
];
soal[0x1a] = [
  functionGenerator("0x8f"),
  "Artik",
  functionGenerator("0xff"),
  functionGenerator("0xf0"),
  functionGenerator("0xfc"),
];
soal[0x1b] = [
  "Pulau\x20terbesar\x20di\x20dunia\x20adalah?",
  functionGenerator("0xe3"),
  "Kalimantan",
  "Madagaskar",
  "Hawaii",
];
soal[0x1c] = [
  functionGenerator("0x12b"),
  functionGenerator("0xc5"),
  functionGenerator("0x11f"),
  functionGenerator("0x23"),
  functionGenerator("0xd9"),
];
soal[0x1d] = [
  "Danau\x20terluas\x20di\x20Indonesia\x20adalah\x20?",
  "Toba",
  "Singkarak",
  "Batur",
  functionGenerator("0x3b"),
];
soal[0x1e] = [
  "Sungai\x20terpanjang\x20di\x20Indonesia\x20adalah?",
  functionGenerator("0xdb"),
  "Bengawan\x20Solo",
  functionGenerator("0x14e"),
  functionGenerator("0xf8"),
];
soal[0x1f] = [
  functionGenerator("0xa2"),
  "Semeru",
  "Slamet",
  functionGenerator("0x111"),
  functionGenerator("0xd"),
];
soal[0x20] = [
  functionGenerator("0xf4"),
  functionGenerator("0xd"),
  functionGenerator("0x58"),
  "Slamet",
  "Krakatau",
];
soal[0x21] = [
  functionGenerator("0x14a"),
  functionGenerator("0xfd"),
  functionGenerator("0xda"),
  functionGenerator("0x2c"),
  functionGenerator("0x4"),
];
soal[0x22] = [
  functionGenerator("0x28"),
  "Turki",
  functionGenerator("0x3e"),
  "India",
  functionGenerator("0x3"),
];
soal[0x23] = [
  functionGenerator("0xa5"),
  functionGenerator("0xf9"),
  "2003",
  functionGenerator("0x93"),
  functionGenerator("0x14"),
];
soal[0x24] = [
  functionGenerator("0x59"),
  functionGenerator("0xf2"),
  functionGenerator("0x10"),
  functionGenerator("0x135"),
  functionGenerator("0x127"),
];
soal[0x25] = [
  "Alat\x20yang\x20digunakan\x20untuk\x20merekam\x20aktivitas\x20kelistrikan\x20jantung\x20adalah?",
  functionGenerator("0xe5"),
  functionGenerator("0xa1"),
  "Cardiovascular",
  functionGenerator("0xef"),
];
soal[0x26] = [
  functionGenerator("0xa7"),
  "Marah\x20Rusli",
  functionGenerator("0x99"),
  "Andrea\x20Hirata",
  functionGenerator("0x95"),
];
soal[0x27] = [
  functionGenerator("0xb5"),
  functionGenerator("0xd6"),
  "Marah\x20Rusli",
  functionGenerator("0x11d"),
  functionGenerator("0x140"),
];
soal[0x28] = [
  functionGenerator("0x137"),
  functionGenerator("0x155"),
  functionGenerator("0x54"),
  functionGenerator("0x147"),
  functionGenerator("0xb4"),
];
soal[0x29] = [
  functionGenerator("0xdd"),
  functionGenerator("0xf6"),
  functionGenerator("0x23"),
  functionGenerator("0x11f"),
  functionGenerator("0x117"),
];
soal[0x2a] = [
  functionGenerator("0x57"),
  functionGenerator("0xe2"),
  functionGenerator("0xe"),
  functionGenerator("0xa1"),
  functionGenerator("0x2e"),
];
soal[0x2b] = [
  functionGenerator("0xd3"),
  functionGenerator("0x4d"),
  functionGenerator("0x12f"),
  functionGenerator("0x9c"),
  functionGenerator("0xe6"),
];
soal[0x2c] = [
  functionGenerator("0x131"),
  functionGenerator("0x1a"),
  "Kerajaan",
  functionGenerator("0x126"),
  functionGenerator("0x13b"),
];
soal[0x2d] = [functionGenerator("0x143"), "4", "2", "1", "5"];
soal[0x2e] = [functionGenerator("0x12c"), "4", "2", "1", "5"];
soal[0x2f] = [
  functionGenerator("0x142"),
  "ANTARA",
  "TVRI",
  functionGenerator("0x125"),
  functionGenerator("0x107"),
];
soal[0x30] = [
  functionGenerator("0x114"),
  functionGenerator("0x3c"),
  "Jambi",
  functionGenerator("0xb8"),
  functionGenerator("0x6f"),
];
soal[0x31] = [
  functionGenerator("0xc9"),
  functionGenerator("0x153"),
  "Nusa\x20Tenggara\x20Barat",
  "Maluku",
  "Sulawesi\x20Utara",
];
soal[0x32] = [
  functionGenerator("0x61"),
  "Knalpot",
  functionGenerator("0x1b"),
  functionGenerator("0x157"),
  functionGenerator("0xb9"),
];
soal[0x33] = [
  functionGenerator("0xc4"),
  functionGenerator("0x149"),
  functionGenerator("0x7a"),
  functionGenerator("0xb1"),
  functionGenerator("0x51"),
];
soal[0x34] = [
  "Patung\x20Sphinx\x20kebanyakan\x20terdapat\x20di\x20negara\x20mana?",
  functionGenerator("0x7f"),
  functionGenerator("0xdf"),
  functionGenerator("0x159"),
  functionGenerator("0x94"),
];
soal[0x35] = [
  functionGenerator("0x113"),
  "Eifel",
  functionGenerator("0x11b"),
  functionGenerator("0x18"),
  functionGenerator("0x82"),
];
soal[0x36] = [
  "Gunung\x20tertinggi\x20di\x20dunia\x20adalah?",
  "Everest",
  functionGenerator("0xbc"),
  "Puncak\x20Jaya\x20wijaya",
  functionGenerator("0xc3"),
];
soal[0x37] = [
  functionGenerator("0x15c"),
  functionGenerator("0x13e"),
  functionGenerator("0x14b"),
  functionGenerator("0x47"),
  functionGenerator("0x15"),
];
soal[0x38] = [functionGenerator("0x14c"), "64", "8", "32", functionGenerator("0x83")];
soal[0x39] = [
  "Nama\x20obat\x20untuk\x20membunuh\x20jentik-jentik\x20nyamuk\x20di\x20air\x20adalah?",
  functionGenerator("0x14d"),
  functionGenerator("0x1"),
  functionGenerator("0xd2"),
  "Planaria",
];
soal[0x3a] = [
  functionGenerator("0x98"),
  functionGenerator("0x39"),
  "Timur",
  functionGenerator("0x4c"),
  functionGenerator("0xea"),
];
soal[0x3b] = [
  functionGenerator("0xe7"),
  functionGenerator("0xf1"),
  functionGenerator("0x39"),
  "Utara",
  functionGenerator("0xea"),
];
soal[0x3c] = [
  "Mata\x20uang\x20negara\x20Jepang\x20yaitu...",
  "Yen",
  functionGenerator("0x5"),
  functionGenerator("0x9d"),
  functionGenerator("0x124"),
];
soal[0x3d] = [
  functionGenerator("0x77"),
  functionGenerator("0x24"),
  functionGenerator("0xca"),
  "Bunga",
  functionGenerator("0xbb"),
];
soal[0x3e] = [
  functionGenerator("0x64"),
  functionGenerator("0x8c"),
  functionGenerator("0xd0"),
  functionGenerator("0xe0"),
  functionGenerator("0x12d"),
];
soal[0x3f] = [
  functionGenerator("0x13c"),
  "Lidah",
  functionGenerator("0xcc"),
  functionGenerator("0x11c"),
  functionGenerator("0x49"),
];
soal[0x40] = [
  functionGenerator("0x68"),
  "Bambu",
  functionGenerator("0x133"),
  functionGenerator("0xaa"),
  functionGenerator("0x156"),
];
soal[0x41] = [functionGenerator("0x138"), functionGenerator("0xe9"), functionGenerator("0x9e"), "240", "60"];
soal[0x42] = [functionGenerator("0x5d"), "60", functionGenerator("0x9e"), "240", functionGenerator("0x145")];
soal[0x43] = [
  "Wahana\x20kereta\x20luncur\x20yang\x20sangat\x20cepat\x20dan\x20menguji\x20adrenalin\x20disebut...",
  functionGenerator("0x19"),
  functionGenerator("0x4b"),
  functionGenerator("0x48"),
  functionGenerator("0x158"),
];
soal[0x44] = [
  functionGenerator("0xb6"),
  functionGenerator("0x9b"),
  functionGenerator("0xa6"),
  functionGenerator("0x22"),
  functionGenerator("0xa4"),
];
soal[0x45] = [
  functionGenerator("0xcd"),
  functionGenerator("0x8e"),
  functionGenerator("0x10b"),
  functionGenerator("0x164"),
  functionGenerator("0xfe"),
];
soal[0x46] = [
  functionGenerator("0x60"),
  functionGenerator("0x32"),
  "Meter",
  functionGenerator("0x89"),
  "Ampere",
];
soal[0x47] = [
  functionGenerator("0x104"),
  "Aborigin",
  functionGenerator("0x8d"),
  functionGenerator("0xf3"),
  functionGenerator("0xc0"),
];
soal[0x48] = [functionGenerator("0x69"), "26", "25", "24", "27"];
soal[0x49] = [
  functionGenerator("0x56"),
  functionGenerator("0x4a"),
  functionGenerator("0x102"),
  functionGenerator("0xb0"),
  functionGenerator("0xba"),
];
soal[0x4a] = [
  functionGenerator("0x2d"),
  functionGenerator("0xc2"),
  functionGenerator("0x7f"),
  "Amerika",
  functionGenerator("0x5b"),
];
soal[0x4b] = [
  "Binatang\x20yang\x20suka\x20makan\x20biji\x20kopi\x20dan\x20kotorannya\x20bisa\x20dijadikan\x20kopi\x20adalah?",
  functionGenerator("0xbf"),
  functionGenerator("0xc"),
  "Tikus",
  functionGenerator("0xb3"),
];
soal[0x4c] = [
  functionGenerator("0x165"),
  functionGenerator("0x16"),
  "Hidrometer",
  "Magnitude",
  functionGenerator("0xa0"),
];
soal[0x4d] = [
  "Alat\x20pernafasan\x20cacing\x20adalah",
  functionGenerator("0x46"),
  functionGenerator("0x10d"),
  functionGenerator("0x71"),
  functionGenerator("0x13"),
];
soal[0x4e] = [
  functionGenerator("0x76"),
  functionGenerator("0x71"),
  functionGenerator("0x10d"),
  functionGenerator("0xde"),
  functionGenerator("0x13"),
];
soal[0x4f] = [
  functionGenerator("0xd5"),
  functionGenerator("0x10d"),
  functionGenerator("0x13"),
  functionGenerator("0x71"),
  functionGenerator("0x115"),
];
soal[0x50] = [
  functionGenerator("0x15d"),
  functionGenerator("0x21"),
  functionGenerator("0x9"),
  "Capthca",
  "Linecode",
];
soal[0x51] = [
  functionGenerator("0x13d"),
  functionGenerator("0x4e"),
  functionGenerator("0x34"),
  functionGenerator("0x12e"),
  "Raden\x20Patah",
];
soal[0x52] = [
  functionGenerator("0x3a"),
  "WR\x20Supratman",
  functionGenerator("0xad"),
  functionGenerator("0x110"),
  functionGenerator("0x53"),
];
soal[0x53] = [
  functionGenerator("0x88"),
  "Homogen",
  functionGenerator("0x25"),
  functionGenerator("0xf"),
  functionGenerator("0xfa"),
];
soal[0x54] = [
  "Kebutuhan\x20hidup\x20yang\x20harus\x20kita\x20penuhi\x20disebut\x20kebutuhan...",
  functionGenerator("0x6b"),
  "Sekunder",
  functionGenerator("0xdc"),
  "Kuarter",
];
soal[0x55] = [
  functionGenerator("0x35"),
  "Bali",
  "Papua",
  functionGenerator("0xb"),
  functionGenerator("0x146"),
];
soal[0x56] = [
  functionGenerator("0x96"),
  functionGenerator("0x53"),
  functionGenerator("0x74"),
  functionGenerator("0xad"),
  functionGenerator("0xae"),
];
soal[0x57] = [
  "Sumpah\x20Palapa\x20dilakuka\x20pada\x20zaman\x20pemerintahan\x20raja...",
  functionGenerator("0x37"),
  "Gajahmada",
  functionGenerator("0xc7"),
  functionGenerator("0x106"),
];
soal[0x58] = [
  functionGenerator("0x11"),
  functionGenerator("0xe1"),
  functionGenerator("0x109"),
  functionGenerator("0xce"),
  functionGenerator("0x3d"),
];
soal[0x59] = [
  functionGenerator("0x103"),
  functionGenerator("0x52"),
  functionGenerator("0x7b"),
  functionGenerator("0x92"),
  functionGenerator("0x118"),
];
soal[0x5a] = [
  "Senjata\x20terkenal\x20bagi\x20penduduk\x20bangsa\x20Aborigin\x20Australia\x20disebut...",
  "Bumerang",
  functionGenerator("0xa3"),
  functionGenerator("0x163"),
  functionGenerator("0xd4"),
];
soal[0x5b] = [
  functionGenerator("0x20"),
  functionGenerator("0x27"),
  functionGenerator("0xed"),
  functionGenerator("0x12a"),
  functionGenerator("0x8c"),
];
soal[0x5c] = [
  functionGenerator("0x31"),
  "Trigonometri",
  functionGenerator("0x73"),
  functionGenerator("0x139"),
  functionGenerator("0x2"),
];
soal[0x5d] = [
  "Alat\x20elektronik\x20untuk\x20menghambat\x20arus\x20listrik\x20disebut..",
  functionGenerator("0x33"),
  functionGenerator("0x132"),
  functionGenerator("0x2a"),
  functionGenerator("0x63"),
];
soal[0x5e] = [
  functionGenerator("0x2b"),
  functionGenerator("0x65"),
  functionGenerator("0x5c"),
  functionGenerator("0x144"),
  functionGenerator("0xc1"),
];
soal[0x5f] = [
  functionGenerator("0x13f"),
  functionGenerator("0x13a"),
  functionGenerator("0x120"),
  functionGenerator("0xd8"),
  functionGenerator("0x10c"),
];
soal[0x60] = [
  functionGenerator("0x91"),
  "Concorde",
  functionGenerator("0xab"),
  functionGenerator("0x6d"),
  functionGenerator("0x141"),
];
soal[0x61] = [
  functionGenerator("0x1d"),
  functionGenerator("0x112"),
  "Sidoarjo",
  functionGenerator("0x41"),
  functionGenerator("0x90"),
];
soal[0x62] = [
  functionGenerator("0xc6"),
  functionGenerator("0x41"),
  functionGenerator("0x90"),
  functionGenerator("0x2f"),
  functionGenerator("0x160"),
];
soal[0x63] = [
  functionGenerator("0x9a"),
  "Serang",
  functionGenerator("0x41"),
  functionGenerator("0x2f"),
  functionGenerator("0x160"),
];
