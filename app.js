const words = [
  "BOA",
  "BOB",
  "BOF",
  "BOG",
  "BOL",
  "BON",
  "BOP",
  "BOT",
  "BOX",
  "BOY",
  "BOAS",
  "BOBO",
  "BOBS",
  "BOCK",
  "BODY",
  "BOER",
  "BOGE",
  "BOGS",
  "BOIS",
  "BOIT",
  "BOLO",
  "BOLS",
  "BOME",
  "BOND",
  "BONI",
  "BONS",
  "BOOK",
  "BOOM",
  "BOOT",
  "BOPS",
  "BORA",
  "BORD",
  "BORE",
  "BORT",
  "BOSS",
  "BOTE",
  "BOTO",
  "BOTS",
  "BOUC",
  "BOUE",
  "BOUH",
  "BOUM",
  "BOUR",
  "BOUS",
  "BOUT",
  "BOXA",
  "BOXE",
  "BOYS",
  "BOBBY",
  "BOBET",
  "BOBOS",
  "BOBUN",
  "BOCAL",
  "BOCHE",
  "BOCKS",
  "BODHI",
  "BODYS",
  "BOERS",
  "BOETE",
  "BOEUF",
  "BOGES",
  "BOGEY",
  "BOGIE",
  "BOGUA",
  "BOGUE",
  "BOIAR",
  "BOIDE",
  "BOIRA",
  "BOIRE",
  "BOISA",
  "BOISE",
  "BOITA",
  "BOITE",
  "BOIVE",
  "BOKIT",
  "BOLAS",
  "BOLDO",
  "BOLEE",
  "BOLET",
  "BOLOS",
  "BOLUS",
  "BOMBA",
  "BOMBE",
  "BOMEE",
  "BOMES",
  "BOMME",
  "BONDA",
  "BONDE",
  "BONDI",
  "BONDS",
  "BONGO",
  "BONIF",
  "BONIS",
  "BONNE",
  "BONTE",
  "BONUS",
  "BONZE",
  "BOOKS",
  "BOOMS",
  "BOOST",
  "BOOTS",
  "BORAS",
  "BORAX",
  "BORDA",
  "BORDE",
  "BORDJ",
  "BORDS",
  "BOREE",
  "BORES",
  "BORIE",
  "BORIN",
  "BORNA",
  "BORNE",
  "BORTS",
  "BOSCO",
  "BOSON",
  "BOSSA",
  "BOSSE",
  "BOSSU",
  "BOTES",
  "BOTOS",
  "BOTOX",
  "BOTTA",
  "BOTTE",
  "BOUCS",
  "BOUDA",
  "BOUDE",
  "BOUDI",
  "BOUDU",
  "BOUEE",
  "BOUES",
  "BOUGE",
  "BOUIF",
  "BOULA",
  "BOULE",
  "BOUMA",
  "BOUME",
  "BOUMS",
  "BOURE",
  "BOURG",
  "BOURS",
  "BOUSA",
  "BOUSE",
  "BOUTA",
  "BOUTE",
  "BOUTS",
  "BOUZY",
  "BOVIN",
  "BOWAL",
  "BOXAI",
  "BOXAS",
  "BOXAT",
  "BOXEE",
  "BOXER",
  "BOXES",
  "BOXEZ",
  "BOXON",
  "BOYAU",
  "BOBARD",
  "BOBBYS",
  "BOBETS",
  "BOBEUR",
  "BOBINA",
  "BOBINE",
  "BOBUNS",
  "BOCAGE",
  "BOCAIN",
  "BOCARD",
  "BOCAUX",
  "BOCCIA",
  "BOCHES",
  "BODEGA",
  "BODHIS",
  "BODIES",
  "BOEING",
  "BOESSE",
  "BOETES",
  "BOETTE",
  "BOEUFS",
  "BOGEYS",
  "BOGGIE",
  "BOGHEI",
  "BOGHEY",
  "BOGIES",
  "BOGUAI",
  "BOGUAS",
  "BOGUAT",
  "BOGUEE",
  "BOGUER",
  "BOGUES",
  "BOGUET",
  "BOGUEZ",
  "BOHEME",
  "BOIARS",
  "BOIDES",
  "BOILER",
  "BOILLE",
  "BOIRAI",
  "BOIRAS",
  "BOIRES",
  "BOIREZ",
  "BOISAI",
  "BOISAS",
  "BOISAT",
  "BOISEE",
  "BOISER",
  "BOISES",
  "BOISEZ",
  "BOITAI",
  "BOITAS",
  "BOITAT",
  "BOITER",
  "BOITES",
  "BOITEZ",
  "BOITON",
  "BOITTE",
  "BOIVES",
  "BOKITS",
  "BOLCHO",
  "BOLDOS",
  "BOLDUC",
  "BOLEES",
  "BOLERO",
  "BOLETS",
  "BOLEUX",
  "BOLIDE",
  "BOLIER",
  "BOLOSS",
  "BOMBAI",
  "BOMBAS",
  "BOMBAT",
  "BOMBEE",
  "BOMBER",
  "BOMBES",
  "BOMBEZ",
  "BOMBYX",
  "BOMEES",
  "BOMMES",
  "BONACE",
  "BONARD",
  "BONBEC",
  "BONBON",
  "BONDAI",
  "BONDAS",
  "BONDAT",
  "BONDEE",
  "BONDER",
  "BONDES",
  "BONDEZ",
  "BONDIR",
  "BONDIS",
  "BONDIT",
  "BONDON",
  "BONGOS",
  "BONIFS",
  "BONITE",
  "BONNES",
  "BONNET",
  "BONOBO",
  "BONSAI",
  "BONTES",
  "BONZAI",
  "BONZES",
  "BOOGIE",
  "BOOMER",
  "BOOSTA",
  "BOOSTE",
  "BOOSTS",
  "BORAIN",
  "BORANE",
  "BORATE",
  "BORDAI",
  "BORDAS",
  "BORDAT",
  "BORDEE",
  "BORDEL",
  "BORDER",
  "BORDES",
  "BORDEZ",
  "BORDJS",
  "BOREAL",
  "BOREES",
  "BORGNE",
  "BORIES",
  "BORINE",
  "BORINS",
  "BORNAI",
  "BORNAS",
  "BORNAT",
  "BORNEE",
  "BORNER",
  "BORNES",
  "BORNEZ",
  "BORORO",
  "BORTCH",
  "BORURE",
  "BOSCOS",
  "BOSCOT",
  "BOSONS",
  "BOSSAI",
  "BOSSAS",
  "BOSSAT",
  "BOSSEE",
  "BOSSER",
  "BOSSES",
  "BOSSEZ",
  "BOSSUA",
  "BOSSUE",
  "BOSSUS",
  "BOSTON",
  "BOTTAI",
  "BOTTAS",
  "BOTTAT",
  "BOTTEE",
  "BOTTER",
  "BOTTES",
  "BOTTEZ",
  "BOTTIN",
  "BOUBOU",
  "BOUCAN",
  "BOUCAU",
  "BOUCHA",
  "BOUCHE",
  "BOUCLA",
  "BOUCLE",
  "BOUCOT",
  "BOUDAI",
  "BOUDAS",
  "BOUDAT",
  "BOUDEE",
  "BOUDER",
  "BOUDES",
  "BOUDEZ",
  "BOUDIN",
  "BOUEBE",
  "BOUEES",
  "BOUELA",
  "BOUELE",
  "BOUEUR",
  "BOUEUX",
  "BOUFFA",
  "BOUFFE",
  "BOUFFI",
  "BOUGEA",
  "BOUGEE",
  "BOUGER",
  "BOUGES",
  "BOUGEZ",
  "BOUGIE",
  "BOUGNA",
  "BOUGON",
  "BOUGRE",
  "BOUIFS",
  "BOUINA",
  "BOUINE",
  "BOUJOU",
  "BOUKHA",
  "BOULAI",
  "BOULAS",
  "BOULAT",
  "BOULEE",
  "BOULER",
  "BOULES",
  "BOULET",
  "BOULEZ",
  "BOULIN",
  "BOULLE",
  "BOULON",
  "BOULOT",
  "BOUMAT",
  "BOUMER",
  "BOURBE",
  "BOURDE",
  "BOUREK",
  "BOURES",
  "BOURGE",
  "BOURGS",
  "BOURRA",
  "BOURRE",
  "BOURRU",
  "BOURSE",
  "BOUSAI",
  "BOUSAS",
  "BOUSAT",
  "BOUSEE",
  "BOUSER",
  "BOUSES",
  "BOUSEZ",
  "BOUSIN",
  "BOUTAI",
  "BOUTAS",
  "BOUTAT",
  "BOUTEE",
  "BOUTER",
  "BOUTES",
  "BOUTEZ",
  "BOUTIS",
  "BOUTON",
  "BOUTRE",
  "BOUVET",
  "BOUZYS",
  "BOVIDE",
  "BOVINE",
  "BOVINS",
  "BOWALS",
  "BOXAIS",
  "BOXAIT",
  "BOXANT",
  "BOXEES",
  "BOXENT",
  "BOXERA",
  "BOXERS",
  "BOXEUR",
  "BOXIEZ",
  "BOXONS",
  "BOYARD",
  "BOYAUX",
  "BOBARDS",
  "BOBBIES",
  "BOBECHE",
  "BOBETTE",
  "BOBEURS",
  "BOBEUSE",
  "BOBINAI",
  "BOBINAS",
  "BOBINAT",
  "BOBINEE",
  "BOBINER",
  "BOBINES",
  "BOBINEZ",
  "BOBINOT",
  "BOBOISA",
  "BOBOISE",
  "BOBONNE",
  "BOBTAIL",
  "BOCAGER",
  "BOCAGES",
  "BOCAINE",
  "BOCAINS",
  "BOCARDA",
  "BOCARDE",
  "BOCARDS",
  "BOCCIAS",
  "BODEGAS",
  "BODEGON",
  "BOEINGS",
  "BOESSES",
  "BOETTES",
  "BOFIAUD",
  "BOGGIES",
  "BOGHEAD",
  "BOGHEIS",
  "BOGHEYS",
  "BOGOLAN",
  "BOGUAIS",
  "BOGUAIT",
  "BOGUANT",
  "BOGUEES",
  "BOGUENT",
  "BOGUERA",
  "BOGUETS",
  "BOGUIEZ",
  "BOGUONS",
  "BOHEMES",
  "BOHRIUM",
  "BOILERS",
  "BOILLES",
  "BOIRAIS",
  "BOIRAIT",
  "BOIRIEZ",
  "BOIRONS",
  "BOIRONT",
  "BOISAGE",
  "BOISAIS",
  "BOISAIT",
  "BOISANT",
  "BOISEES",
  "BOISENT",
  "BOISERA",
  "BOISEUR",
  "BOISIEZ",
  "BOISONS",
  "BOISSON",
  "BOITAGE",
  "BOITAIS",
  "BOITAIT",
  "BOITANT",
  "BOITENT",
  "BOITERA",
  "BOITEUX",
  "BOITIER",
  "BOITIEZ",
  "BOITONS",
  "BOITTES",
  "BOIVENT",
  "BOLCHOS",
  "BOLDUCS",
  "BOLEROS",
  "BOLEUSE",
  "BOLIDES",
  "BOLIERS",
  "BOLIVAR",
  "BOLLARD",
  "BOMBAGE",
  "BOMBAIS",
  "BOMBAIT",
  "BOMBANT",
  "BOMBEES",
  "BOMBENT",
  "BOMBERA",
  "BOMBERS",
  "BOMBEUR",
  "BOMBIEZ",
  "BOMBONS",
  "BONACES",
  "BONAMIA",
  "BONARDE",
  "BONARDS",
  "BONASSE",
  "BONBECS",
  "BONBONS",
  "BONDAGE",
  "BONDAIS",
  "BONDAIT",
  "BONDANT",
  "BONDEES",
  "BONDENT",
  "BONDERA",
  "BONDIEZ",
  "BONDIRA",
  "BONDONS",
  "BONDREE",
  "BONGARE",
  "BONHEUR",
  "BONICHE",
  "BONIFIA",
  "BONIFIE",
  "BONITES",
  "BONJOUR",
  "BONNARD",
  "BONNETS",
  "BONNOIS",
  "BONOBOS",
  "BONSAIS",
  "BONSOIR",
  "BONZAIS",
  "BOOGIES",
  "BOOLEEN",
  "BOOLIEN",
  "BOOMERS",
  "BOOSTAI",
  "BOOSTAS",
  "BOOSTAT",
  "BOOSTEE",
  "BOOSTER",
  "BOOSTES",
  "BOOSTEZ",
  "BORAINE",
  "BORAINS",
  "BORANES",
  "BORASSE",
  "BORATEE",
  "BORATES",
  "BORAZON",
  "BORDAGE",
  "BORDAIS",
  "BORDAIT",
  "BORDANT",
  "BORDEES",
  "BORDELS",
  "BORDENT",
  "BORDERA",
  "BORDIER",
  "BORDIEZ",
  "BORDONS",
  "BORDURA",
  "BORDURE",
  "BOREALE",
  "BOREALS",
  "BOREAUX",
  "BORGNES",
  "BORINES",
  "BORIQUE",
  "BORNAGE",
  "BORNAIS",
  "BORNAIT",
  "BORNANT",
  "BORNEES",
  "BORNENT",
  "BORNERA",
  "BORNIER",
  "BORNIEZ",
  "BORNOIE",
  "BORNONS",
  "BORNOYA",
  "BORNOYE",
  "BOROROS",
  "BOROUGH",
  "BORTCHS",
  "BORTSCH",
  "BORURES",
  "BOSCOTS",
  "BOSCOYO",
  "BOSKOOP",
  "BOSNIEN",
  "BOSQUET",
  "BOSSAGE",
  "BOSSAIS",
  "BOSSAIT",
  "BOSSANT",
  "BOSSEES",
  "BOSSELA",
  "BOSSELE",
  "BOSSENT",
  "BOSSERA",
  "BOSSEUR",
  "BOSSIEZ",
  "BOSSOIR",
  "BOSSONS",
  "BOSSUAI",
  "BOSSUAS",
  "BOSSUAT",
  "BOSSUEE",
  "BOSSUER",
  "BOSSUES",
  "BOSSUEZ",
  "BOSTONS",
  "BOTSARD",
  "BOTTAIS",
  "BOTTAIT",
  "BOTTANT",
  "BOTTEES",
  "BOTTELA",
  "BOTTELE",
  "BOTTENT",
  "BOTTERA",
  "BOTTEUR",
  "BOTTIER",
  "BOTTIEZ",
  "BOTTINE",
  "BOTTINS",
  "BOTTONS",
  "BOUBOUS",
  "BOUCAGE",
  "BOUCANA",
  "BOUCANE",
  "BOUCANS",
  "BOUCAUD",
  "BOUCAUT",
  "BOUCAUX",
  "BOUCHAI",
  "BOUCHAS",
  "BOUCHAT",
  "BOUCHEE",
  "BOUCHER",
  "BOUCHES",
  "BOUCHEZ",
  "BOUCHON",
  "BOUCHOT",
  "BOUCLAI",
  "BOUCLAS",
  "BOUCLAT",
  "BOUCLEE",
  "BOUCLER",
  "BOUCLES",
  "BOUCLEZ",
  "BOUCOTS",
  "BOUDAIS",
  "BOUDAIT",
  "BOUDANT",
  "BOUDDHA",
  "BOUDEES",
  "BOUDENT",
  "BOUDERA",
  "BOUDEUR",
  "BOUDIEZ",
  "BOUDINA",
  "BOUDINE",
  "BOUDINS",
  "BOUDIOU",
  "BOUDOIR",
  "BOUDONS",
  "BOUEBES",
  "BOUELAI",
  "BOUELAS",
  "BOUELAT",
  "BOUELEE",
  "BOUELER",
  "BOUELES",
  "BOUELEZ",
  "BOUETTE",
  "BOUEURS",
  "BOUEUSE",
  "BOUFFAI",
  "BOUFFAS",
  "BOUFFAT",
  "BOUFFEE",
  "BOUFFER",
  "BOUFFES",
  "BOUFFEZ",
  "BOUFFIE",
  "BOUFFIR",
  "BOUFFIS",
  "BOUFFIT",
  "BOUFFON"
].map((x) => x.toLowerCase());

const SearchComponent = {
  data() {
    return {
      words: words,
      search: "",
      suggestions: [],
      result: "",
    }
  },
  methods: {
    findSuggestionsFromSearch: function (event) {
      this.search = event.target.value;
      const searchValue = event.target.value.toLowerCase();
      if (searchValue.length <= 2) {
        this.suggestions = [];
        return;
      }
      if (searchValue.startsWith("bo")) {
        this.suggestions = this.words.filter(word => word.startsWith(searchValue));
      }
    },
    selectSuggestion: function (suggestion) {
      this.result = suggestion;
    }
  },
};
Vue.createApp(SearchComponent).mount("#root");