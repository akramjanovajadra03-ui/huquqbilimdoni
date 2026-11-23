
const questionBank = [
["Oson","O‘zbekiston Respublikasining davlat tili qaysi?",["Rus tili","O‘zbek tili","Ingliz tili","Tojik tili"],1],
["Oson","O‘zbekiston Respublikasining Konstitutsiyasi qanday hujjat?",["Oddiy qaror","Asosiy qonun","Farmon","Xalqaro shartnoma"],1],
["O‘rta","O‘zbekistonda davlat hokimiyati nechta asosiy tarmoqqa bo‘linadi?",["2 ta","3 ta","4 ta","5 ta"],1],
["Oson","Qonun chiqaruvchi oliy davlat vakillik organi qaysi?",["Oliy Majlis","Vazirlar Mahkamasi","Oliy sud","Prokuratura"],0],
["O‘rta","Fuqarolik huquq layoqati qachondan vujudga keladi?",["18 yoshdan","16 yoshdan","Tug‘ilgan paytdan","Pasport olgandan"],2],
["Oson","O‘zbekiston Respublikasida to‘liq muomala layoqati umumiy qoida bo‘yicha necha yoshdan?",["14","16","17","18"],3],
["O‘rta","Ijro etuvchi hokimiyatni qaysi organ amalga oshiradi?",["Oliy Majlis","Vazirlar Mahkamasi","Oliy sud","Markaziy saylov komissiyasi"],1],
["O‘rta","Odil sudlovni kim amalga oshiradi?",["Prokuratura","Ichki ishlar organlari","Sudlar","Vazirliklar"],2],
["Oson","Aybsizlik prezumpsiyasi nimani anglatadi?",["Har kim aybdor","Shaxs aybi isbotlanmaguncha aybsiz hisoblanadi","Shaxs o‘z aybini tan olishi shart","Guvoh aybdorlikni belgilaydi"],1],
["Oson","O‘zbekiston Respublikasining davlat ramzlari qaysilar?",["Bayroq, gerb, madhiya","Bayroq, pul, pasport","Gerb, pasport, xarita","Madhiya, qonun, farmon"],0],

["O‘rta","Konstitutsiya qanday yuridik kuchga ega?",["Oddiy qonun bilan teng","Oliy yuridik kuchga ega","Faqat tavsiyaviy","Faqat mahalliy kuchga ega"],1],
["Oson","Davlat bayrog‘i nimaning ramzi hisoblanadi?",["Faqat sportning","Davlat suverenitetining","Sud tizimining","Siyosiy partiyaning"],1],
["O‘rta","O‘zbekiston Respublikasida davlat hokimiyatining birdan-bir manbai kim?",["Vazirlar Mahkamasi","Xalq","Sud","Prokuratura"],1],
["O‘rta","Demokratiya tushunchasi nimani anglatadi?",["Bir kishining hokimiyati","Xalq hokimiyati","Harbiy boshqaruv","Sud boshqaruvi"],1],
["Oson","Insonning yashash huquqi qanday huquq?",["Shaxsiy huquq","Faqat iqtisodiy huquq","Faqat siyosiy huquq","Mehnat huquqi"],0],
["O‘rta","Vijdon erkinligi nimani bildiradi?",["Faqat bir fikrga ega bo‘lish","E'tiqod qilish yoki qilmaslik erkinligi","Faqat davlat fikrini qabul qilish","Saylovda qatnashish"],1],
["Oson","Fuqaroning ta'lim olish huquqi qaysi huquqlar turiga kiradi?",["Ijtimoiy huquqlar","Faqat siyosiy huquqlar","Faqat mulkiy huquqlar","Jinoiy huquqlar"],0],
["O‘rta","So‘z erkinligi nimani anglatadi?",["Fikrni qonun doirasida erkin bildirish","Har qanday haqoratni qilish","Boshqalarning huquqlarini buzish","Qonunlarga bo‘ysunmaslik"],0],
["O‘rta","Qonun oldida tenglik prinsipi nimani anglatadi?",["Faqat mansabdorlar teng","Barcha qonun oldida teng","Faqat voyaga yetganlar teng","Faqat davlat xizmatchilari teng"],1],
["Oson","O‘zbekiston Respublikasining poytaxti qaysi?",["Samarqand","Buxoro","Toshkent","Xiva"],2],

["O‘rta","Shartnoma nima?",["Sud hukmi","Ikki yoki undan ortiq shaxsning kelishuvi","Davlat bayrog‘i","Ma'muriy jazo"],1],
["O‘rta","Mulk huquqi nimalarni o‘z ichiga oladi?",["Egalik qilish, foydalanish va tasarruf etish","Faqat sotish","Faqat foydalanish","Faqat hadya qilish"],0],
["Oson","Fuqarolik huquqi asosan qaysi munosabatlarni tartibga soladi?",["Mulkiy va shaxsiy nomulkiy munosabatlarni","Faqat jinoyatlarni","Faqat saylovlarni","Faqat harbiy xizmatni"],0],
["O‘rta","Meros nima?",["Ish haqi","Vafot etgan shaxsning mol-mulkining vorislarga o‘tishi","Davlat mukofoti","Sud jarimasi"],1],
["O‘rta","Mualliflik huquqi nimani himoya qiladi?",["Ijodiy asarlar muallifining huquqlarini","Faqat avtomobilni","Faqat yer maydonini","Faqat davlat mulkini"],0],
["Oson","Iste'molchi kim?",["Tovarni shaxsiy ehtiyoj uchun sotib oluvchi shaxs","Faqat ishlab chiqaruvchi","Faqat sotuvchi","Faqat nazoratchi"],0],
["O‘rta","Zararni qoplash nimani anglatadi?",["Yetkazilgan zararni bartaraf etish yoki uning o‘rnini to‘ldirish","Yangi soliq joriy etish","Shartnomani bekor qilmaslik","Jinoyat sodir etish"],0],
["O‘rta","Ijara shartnomasining mazmuni nima?",["Mol-mulkdan haq evaziga vaqtincha foydalanish","Mol-mulkni majburiy tortib olish","Mulkni meros qilib berish","Sud qarorini chiqarish"],0],
["Oson","Nikoh qaysi organ tomonidan qonuniy tartibda qayd etiladi?",["FHDYO organi","Maktab","Bank","Prokuratura"],0],
["O‘rta","Fuqarolik nizolarini hal qilishda qaysi organ muhim o‘rin tutadi?",["Sud","Sport federatsiyasi","Kutubxona","Savdo markazi"],0],

["Oson","Mehnat shartnomasi kimlar o‘rtasida tuziladi?",["Xodim va ish beruvchi","Ikki o‘quvchi","Ikki xaridor","Faqat davlat organlari"],0],
["O‘rta","Mehnat huquqi nimani tartibga soladi?",["Mehnatga oid munosabatlarni","Faqat jinoyatlarni","Faqat saylovlarni","Faqat merosni"],0],
["Oson","Mehnat ta'tili nima?",["Xodimga beriladigan dam olish vaqti","Ishdan noqonuniy haydash","Sud majlisi","Jarima turi"],0],
["O‘rta","Ish haqi nima?",["Mehnat uchun to‘lanadigan haq","Davlat boji","Sud xarajati","Meros mulki"],0],
["O‘rta","Ish beruvchining vazifalaridan biri qaysi?",["Xavfsiz mehnat sharoitini yaratish","Xodimning huquqlarini bekor qilish","Ish haqini o‘zboshimchalik bilan bermaslik","Majburiy noqonuniy mehnat"],0],
["Oson","Mehnat intizomi nimani anglatadi?",["Ish tartibi va qoidalariga rioya qilish","Ishga kelmaslik","Shartnomani buzish","Boshqalarning mulkini olish"],0],
["O‘rta","Mehnat nizosi nimaga taalluqli?",["Xodim va ish beruvchi o‘rtasidagi mehnatga oid kelishmovchilikka","Sport musobaqasiga","Saylov natijasiga","Meros taqsimotiga"],0],
["Oson","Xodimning asosiy majburiyatlaridan biri qaysi?",["Mehnat vazifalarini bajarish","Ish joyidagi mulkni o‘zlashtirish","Ish tartibini buzish","Hujjatlarni yo‘qotish"],0],
["O‘rta","Mehnat shartnomasini bekor qilish nimani anglatadi?",["Mehnat munosabatlarining qonuniy tugatilishi","Yangi ishga qabul qilish","Ta'tilga chiqish","Ish haqini oshirish"],0],
["Oson","Mehnat muhofazasi nima?",["Xodimlarning hayoti va sog‘lig‘ini mehnat jarayonida himoya qilish","Faqat ish haqini hisoblash","Faqat soliq yig‘ish","Faqat ish vaqtini belgilash"],0],

["Oson","Jinoyat huquqi nimani tartibga soladi?",["Jinoyat va jinoiy javobgarlikka oid munosabatlarni","Faqat mulk ijarasini","Faqat nikohni","Faqat saylovni"],0],
["O‘rta","Jinoyat deb nima e'tirof etiladi?",["Jinoyat qonunida taqiqlangan, aybli ijtimoiy xavfli qilmish","Har qanday xato","Har qanday kelishmovchilik","Faqat odob qoidalarini buzish"],0],
["Oson","Jinoiy javobgarlikning asosiy huquqiy asosi nima?",["Jinoyat tarkibining mavjudligi","Shaxsning boyligi","Shaxsning kasbi","Shaxsning yashash joyi"],0],
["O‘rta","Jazo tayinlashda kim qonunda belgilangan tartibda qaror chiqaradi?",["Sud","Maktab direktori","Bank xodimi","Mahalla do‘koni"],0],
["O‘rta","Zaruriy mudofaa nima?",["Qonun bilan qo‘riqlanadigan manfaatlarni tajovuzdan himoya qilish","Boshqalarga hujum qilish","Mol-mulkni yashirish","Sud qarorini buzish"],0],
["Oson","Guvoh kim?",["Ish uchun ahamiyatli holatlar haqida ma'lumotga ega shaxs","Faqat sudya","Faqat advokat","Faqat ayblanuvchi"],0],
["O‘rta","Dalil nima?",["Ish bo‘yicha holatlarni aniqlashga xizmat qiladigan qonuniy ma'lumot","Oddiy taxmin","Tasodifiy mish-mish","Shaxsiy fikrning o‘zi"],0],
["O‘rta","Jinoyat protsessida himoyachi kim?",["Gumon qilinuvchi yoki ayblanuvchining huquqlarini himoya qiluvchi advokat","Sud kotibi","Guvoh","Ekspert"],0],
["Oson","Jinoyat sodir etganlikda gumon qilinayotgan shaxs qanday ataladi?",["Gumon qilinuvchi","Da'vogar","Guvoh","Ekspert"],0],
["O‘rta","Apellyatsiya shikoyati nima?",["Sud hujjatini yuqori instansiyada qayta ko‘rib chiqishni so‘rash","Yangi qonun yaratish","Davlat ramzini o‘zgartirish","Nikohni qayd etish"],0],

["Oson","Ma'muriy huquq asosan nimani tartibga soladi?",["Davlat boshqaruvi sohasidagi munosabatlarni","Faqat merosni","Faqat nikohni","Faqat mualliflikni"],0],
["O‘rta","Ma'muriy huquqbuzarlik nima?",["Ma'muriy javobgarlik nazarda tutilgan aybli qilmish","Har qanday yaxshi ish","Faqat fuqarolik shartnomasi","Faqat sud qarori"],0],
["Oson","Yo‘l harakati qoidalariga rioya qilish kimning majburiyati?",["Barcha yo‘l harakati ishtirokchilarining","Faqat haydovchilarning","Faqat piyodalarning","Faqat yo‘l nazoratchilarining"],0],
["O‘rta","Davlat organining qarori ustidan qonunda belgilangan tartibda shikoyat qilish mumkinmi?",["Ha","Yo‘q","Faqat ruxsat bilan","Faqat chet el fuqarolari"],0],
["Oson","Prokuratura faoliyatining muhim yo‘nalishlaridan biri qaysi?",["Qonunlarning aniq va bir xilda bajarilishi ustidan nazorat","Davlat budjetini tasdiqlash","Pul chiqarish","Saylov tashkil qilish"],0],
["O‘rta","Advokatning asosiy vazifasi nima?",["Huquqiy yordam ko‘rsatish va himoya qilish","Qonun qabul qilish","Sud hukmini chiqarish","Soliq yig‘ish"],0],
["Oson","Notarius nima bilan shug‘ullanadi?",["Qonunda nazarda tutilgan notarial harakatlarni amalga oshiradi","Jinoyat uchun jazo tayinlaydi","Qonun chiqaradi","Saylov natijasini belgilaydi"],0],
["O‘rta","Sud mustaqilligi nimani anglatadi?",["Sudyalarning odil sudlovni amalga oshirishda qonunga bo‘ysunishi","Sudyaning istalgan shaxsga bo‘ysunishi","Sudning vazirlikka bo‘ysunishi","Sudning qaror chiqarmasligi"],0],
["Oson","Ombudsman qanday faoliyat bilan shug‘ullanadi?",["Inson huquqlari va erkinliklarini himoya qilishga ko‘maklashadi","Soliq yig‘adi","Jinoyat uchun hukm chiqaradi","Davlat bayrog‘ini tasdiqlaydi"],0],
["O‘rta","Konstitutsiyaviy sudning vazifalaridan biri nima?",["Normativ hujjatlarning Konstitutsiyaga muvofiqligini aniqlash","Mehnat shartnomasi tuzish","Nikohni qayd etish","Yo‘l harakatini boshqarish"],0],

["Oson","Saylov nima?",["Fuqarolarning vakillarni saylash jarayoni","Sud majlisi","Mehnat shartnomasi","Meros taqsimoti"],0],
["O‘rta","Referendum nima?",["Muhim davlat va jamiyat masalalari bo‘yicha umumxalq ovoz berishi","Sud hukmi","Vazirlik buyrug‘i","Oddiy so‘rovnoma"],0],
["Oson","Fuqarolik nima?",["Shaxsning davlat bilan barqaror huquqiy aloqasi","Faqat yashash manzili","Kasb turi","Maktab guvohnomasi"],0],
["O‘rta","Davlat suvereniteti nimani bildiradi?",["Davlatning ichki va tashqi mustaqilligi","Faqat iqtisodiy boylik","Faqat harbiy kuch","Faqat hudud kattaligi"],0],
["Oson","Davlat gerbi nima?",["Davlatning rasmiy ramzi","Sud qarori","Xalqaro shartnoma","Pul birligi"],0],
["O‘rta","Davlat madhiyasi nima?",["Davlatning rasmiy musiqiy ramzi","Davlat qonuni","Saylov byulleteni","Sud hujjati"],0],
["Oson","Inson huquqlari kimga tegishli?",["Har bir insonga","Faqat mansabdorlarga","Faqat saylovchilarga","Faqat davlat xizmatchilariga"],0],
["O‘rta","Kamsitish nima?",["Shaxsga asossiz ravishda teng bo‘lmagan munosabatda bo‘lish","Barchaga teng munosabat","Huquqni himoya qilish","Qonunga rioya qilish"],0],
["Oson","Ariza nima?",["Shaxsning huquq yoki manfaatlarini amalga oshirishga ko‘maklashish haqidagi murojaati","Sud hukmi","Jinoyat jazosi","Shartnoma turi"],0],
["O‘rta","Shikoyat nima?",["Buzilgan huquq yoki qonuniy manfaatni tiklash haqidagi murojaat","Tabriknoma","Ish haqi hujjati","Davlat ramzi"],0],

["O‘rta","Konstitutsiyaviy huquq nimani o‘rganadi?",["Davlat tuzumi, hokimiyat va inson huquqlarining asoslarini","Faqat savdo munosabatlarini","Faqat sport qoidalarini","Faqat meros masalalarini"],0],
["Oson","Huquq normasi nima?",["Davlat tomonidan belgilangan yoki tan olingan umummajburiy qoida","Shaxsiy maslahat","Oddiy odat","Reklama matni"],0],
["O‘rta","Huquqiy davlatning muhim belgisi qaysi?",["Qonun ustuvorligi","Bir kishining cheksiz hokimiyati","Sudlarning mavjud emasligi","Huquqlarning bekor qilinishi"],0],
["Oson","Qonun ustuvorligi nimani anglatadi?",["Barcha shaxs va organlarning qonunga rioya qilishi","Faqat fuqarolar qonunga amal qilishi","Mansabdorlar qonundan ustunligi","Qonunlarning ixtiyoriyligi"],0],
["O‘rta","Huquqiy munosabat nima?",["Huquq normalari bilan tartibga solinadigan ijtimoiy munosabat","Faqat do‘stlik aloqasi","Faqat sport musobaqasi","Faqat oilaviy suhbat"],0],
["Oson","Yuridik fakt nima?",["Huquqiy oqibat keltirib chiqaradigan holat yoki hodisa","Oddiy taxmin","Shaxsiy orzu","Reklama"],0],
["O‘rta","Huquqiy javobgarlik nima?",["Huquqbuzarlik uchun qonunda nazarda tutilgan oqibatlar","Mukofot berish","Ta'til tayinlash","Saylov o'tkazish"],0],
["Oson","Huquqbuzarlik nima?",["Huquq normalariga zid aybli qilmish","Qonunga rioya qilish","Yaxshi xulq","Huquqni himoya qilish"],0],
["O‘rta","Qonun loyihasi kim tomonidan qonuniy tartibda qabul qilinadi?",["Vakolatli qonun chiqaruvchi organ tomonidan","Har qanday fuqaro tomonidan yakka tartibda","Faqat maktab tomonidan","Faqat bank tomonidan"],0],
["Oson","Xalqaro shartnoma nima?",["Xalqaro huquq bilan tartibga solinadigan davlatlar yoki boshqa xalqaro huquq subyektlari kelishuvi","Oddiy do‘kon cheki","Mehnat jadvali","Sud bayonnomasi"],0],

["O‘rta","Bola huquqlari nimani himoya qiladi?",["Bolalarning qonuniy huquq va manfaatlarini","Faqat kattalarning mulkini","Faqat davlat tashkilotlarini","Faqat korxonalarni"],0],
["Oson","Ota-onalarning asosiy majburiyatlaridan biri nima?",["Farzandlarini tarbiyalash va ularning manfaatlarini ta'minlash","Farzandlarning huquqlarini bekor qilish","Ularni ta'limdan cheklash","Ularning mulkini noqonuniy olish"],0],
["O‘rta","Vasiylik va homiylikning maqsadi nima?",["Himoyaga muhtoj shaxslarning huquq va manfaatlarini himoya qilish","Soliq yig‘ish","Sud hukmini chiqarish","Saylov o'tkazish"],0],
["Oson","Oila huquqi nimani tartibga soladi?",["Nikoh va oilaviy munosabatlarni","Faqat savdo munosabatlarini","Faqat jinoyatlarni","Faqat davlat boshqaruvini"],0],
["O‘rta","Aliment nima?",["Qonunda belgilangan ta'minot uchun to‘lanadigan mablag‘","Davlat boji","Jarima turi","Meros hujjati"],0],
["Oson","Farzandlarning huquqlari kim tomonidan himoya qilinadi?",["Ota-ona, vakolatli organlar va sudlar tomonidan","Faqat do‘stlari tomonidan","Faqat ish beruvchi tomonidan","Faqat bank tomonidan"],0],
["O‘rta","Nikoh tuzishning muhim shartlaridan biri qaysi?",["Nikohlanuvchilarning o‘zaro roziligi","Majburiy rozilik","Faqat moddiy boylik","Faqat bir tomonning qarori"],0],
["Oson","Oilada teng huquqlilik nimani bildiradi?",["Er va xotinning teng huquq va majburiyatlarga egaligini","Faqat bir tomon qaror qilishini","Bir tomonning huquqsizligini","Barcha majburiyatlarning bekor bo‘lishini"],0],
["O‘rta","Farzandlikka olish qanday amalga oshiriladi?",["Qonunda belgilangan tartibda","Faqat og‘zaki kelishuv bilan","Faqat do‘stlar qarori bilan","Faqat maktab qarori bilan"],0],
["Oson","Oila a'zolarining huquqlari qanday himoyalanishi kerak?",["Qonun asosida","Faqat norasmiy kelishuv bilan","Faqat ijtimoiy tarmoq orqali","Hech qanday tartibsiz"],0],

["O‘rta","Ekologik huquq nimani tartibga soladi?",["Atrof-muhitni muhofaza qilishga oid munosabatlarni","Faqat merosni","Faqat nikohni","Faqat saylovni"],0],
["Oson","Tabiatni muhofaza qilish kimning vazifasi?",["Davlat va jamiyatning, har bir insonning mas'uliyatidir","Faqat ekologlarning","Faqat korxonalarning","Faqat chet el fuqarolarining"],0],
["O‘rta","Davlat budjeti nima?",["Davlatning daromadlari va xarajatlari rejasi","Oddiy xaridlar ro‘yxati","Sud qarorlari to‘plami","Mehnat shartnomasi"],0],
["Oson","Soliq nima?",["Qonunda belgilangan majburiy to‘lov","Ixtiyoriy sovg‘a","Bank krediti","Meros turi"],0],
["O‘rta","Tadbirkorlik faoliyati nima?",["Qonun doirasida mustaqil ravishda amalga oshiriladigan tavakkalchilikka asoslangan faoliyat","Faqat davlat xizmati","Faqat o‘qish jarayoni","Faqat saylov jarayoni"],0],
["Oson","Shaxsiy ma'lumotlar nima?",["Muayyan jismoniy shaxsga taalluqli ma'lumotlar","Faqat davlat bayrog‘i","Faqat umumiy ob-havo ma'lumoti","Faqat reklama"],0],
["O‘rta","Shaxsiy ma'lumotlarni himoya qilishning maqsadi nima?",["Shaxsning daxlsizligi va ma'lumotlari xavfsizligini ta'minlash","Ma'lumotlarni ruxsatsiz tarqatish","Barcha ma'lumotlarni oshkor qilish","Shaxs huquqlarini bekor qilish"],0],
["Oson","Korrupsiya nima?",["Mansab yoki xizmat mavqeidan shaxsiy manfaat yo‘lida noqonuniy foydalanish","Qonuniy mehnat faoliyati","Ko‘ngilli yordam","Ta'lim olish"],0],
["O‘rta","Manfaatlar to‘qnashuvi nima?",["Shaxsiy manfaat xizmat vazifalarini xolis bajarishga ta'sir qilishi mumkin bo‘lgan vaziyat","Oddiy sport bahsi","Oilaviy bayram","Sud binosining joylashuvi"],0],
["Oson","Elektron raqamli imzo nima uchun ishlatiladi?",["Elektron hujjatning muallifini va yaxlitligini tasdiqlash uchun","Faqat rasm chizish uchun","Faqat musiqa tinglash uchun","Faqat telefon qo‘ng‘irog‘i uchun"],0]
];

const TOTAL_QUESTIONS = 10;
const QUESTION_TIME = 15;

let questions = [];
let currentQuestion = 0;
let userAnswers = [];
let timeLeft = QUESTION_TIME;
let timerInterval = null;
let testFinished = false;

// Elementlarni olish
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");

const timeElement = document.getElementById("time");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");

function showScreen(screen) {
    startScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    screen.classList.add("active");
}

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// Savollar va javob variantlarini tasodifiy tanlash
function generateQuestions() {
    const selected = shuffle(questionBank).slice(0, TOTAL_QUESTIONS);

    questions = selected.map(item => {
        const [level, question, answers, correct] = item;

        const mixedAnswers = shuffle(
            answers.map((answer, index) => ({
                text: answer,
                isCorrect: index === correct
            }))
        );

        return {
            level,
            question,
            answers: mixedAnswers.map(a => a.text),
            correct: mixedAnswers.findIndex(a => a.isCorrect)
        };
    });
}

function startNewTest() {
    clearInterval(timerInterval);

    generateQuestions();

    currentQuestion = 0;
    userAnswers = Array(TOTAL_QUESTIONS).fill(null);
    testFinished = false;

    showScreen(quizScreen);
    renderQuestion();
}

// Savolni chiqarish
function renderQuestion() {
    clearInterval(timerInterval);

    const item = questions[currentQuestion];

    document.getElementById("currentNumber").textContent =
        currentQuestion + 1;

    document.getElementById("level").textContent =
        item.level.toUpperCase() + " DARAJA";

    questionElement.textContent = item.question;

    progressBar.style.width =
        ((currentQuestion + 1) / TOTAL_QUESTIONS * 100) + "%";

    answersElement.innerHTML = "";
    feedbackElement.textContent = "";
    feedbackElement.className = "feedback";

    const savedAnswer = userAnswers[currentQuestion];

    item.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent =
            String.fromCharCode(65 + index) + ". " + answer;

        if (savedAnswer !== null) {
            button.disabled = true;

            if (index === item.correct) {
                button.classList.add("correct");
            }

            if (index === savedAnswer && savedAnswer !== item.correct) {
                button.classList.add("wrong");
            }
        } else {
            button.addEventListener("click", () => selectAnswer(index));
        }

        answersElement.appendChild(button);
    });

    if (savedAnswer !== null) {
        showFeedback(savedAnswer);
        nextBtn.disabled = false;
        timeElement.textContent = "0";
        timerElement.classList.remove("danger");
    } else {
        nextBtn.disabled = true;
        startTimer();
    }

    prevBtn.disabled = currentQuestion === 0;

    updateAnsweredCount();
}

function showFeedback(answer) {
    const item = questions[currentQuestion];

    if (answer === -1) {
        feedbackElement.textContent =
            "⏰ Vaqt tugadi! To‘g‘ri javob: " +
            item.answers[item.correct];

        feedbackElement.className = "feedback error";

    } else if (answer === item.correct) {
        feedbackElement.textContent =
            "✓ To‘g‘ri javob! Barakalla!";

        feedbackElement.className = "feedback success";

    } else {
        feedbackElement.textContent =
            "✕ Noto‘g‘ri javob! To‘g‘ri javob: " +
            item.answers[item.correct];

        feedbackElement.className = "feedback error";
    }
}

// Javobni tanlash
function selectAnswer(index) {
    if (userAnswers[currentQuestion] !== null) return;

    clearInterval(timerInterval);

    userAnswers[currentQuestion] = index;

    renderQuestion();
}

// Vaqt hisoblagichi
function startTimer() {
    timeLeft = QUESTION_TIME;
    timeElement.textContent = timeLeft;
    timerElement.classList.remove("danger");

    timerInterval = setInterval(() => {
        timeLeft--;

        timeElement.textContent = timeLeft;

        if (timeLeft <= 5) {
            timerElement.classList.add("danger");
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            userAnswers[currentQuestion] = -1;

            renderQuestion();
        }
    }, 1000);
}

function updateAnsweredCount() {
    const count = userAnswers.filter(a => a !== null).length;

    document.getElementById("answeredCount").textContent =
        "Javoblar: " + count + "/" + TOTAL_QUESTIONS;
}

// Keyingi savol
function nextQuestion() {
    if (userAnswers[currentQuestion] === null) return;

    if (currentQuestion < TOTAL_QUESTIONS - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        finishTest();
    }
}

// Oldingi savol
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// Test natijasi
function finishTest() {
    if (testFinished) return;

    clearInterval(timerInterval);
    testFinished = true;

    let correct = 0;
    let wrong = 0;

    questions.forEach((item, index) => {
        if (userAnswers[index] === item.correct) {
            correct++;
        } else {
            wrong++;
        }
    });

    const score = correct * 10;
    const percent = score;

    document.getElementById("score").textContent = score;
    document.getElementById("correctCount").textContent = correct;
    document.getElementById("wrongCount").textContent = wrong;
    document.getElementById("percent").textContent = percent + "%";

    let message = "";
    let icon = "";

    if (score >= 90) {
        message = "Ajoyib! Siz huquqshunoslik bo‘yicha juda yaxshi bilimga egasiz!";
        icon = "🏆";
    } else if (score >= 70) {
        message = "Juda yaxshi! Bilimingiz yuqori darajada!";
        icon = "🥇";
    } else if (score >= 50) {
        message = "Yaxshi! Yana biroz mashq qiling!";
        icon = "🥈";
    } else if (score >= 30) {
        message = "Yomon emas! Huquqiy bilimlaringizni oshiring!";
        icon = "📚";
    } else {
        message = "Ko‘proq o‘rganing! Keyingi safar yaxshiroq natija ko‘rsating!";
        icon = "💪";
    }

    document.getElementById("resultMessage").textContent = message;
    document.getElementById("resultIcon").textContent = icon;

    renderReview();

    showScreen(resultScreen);
}

// Javoblar tahlili
function renderReview() {
    const reviewList = document.getElementById("reviewList");

    reviewList.innerHTML = "";

    questions.forEach((item, index) => {
        const userAnswer = userAnswers[index];

        const isCorrect = userAnswer === item.correct;

        const review = document.createElement("div");
        review.className = "review-item";

        const title = document.createElement("p");
        title.textContent =
            (index + 1) + ". " + item.question;

        const right = document.createElement("p");
        right.className = "right-answer";
        right.textContent =
            "✓ To‘g‘ri javob: " + item.answers[item.correct];

        const yours = document.createElement("p");
        yours.className = isCorrect ? "your-answer" : "wrong-answer";

        yours.textContent = userAnswer === -1
            ? "⏰ Siz javob bermadingiz"
            : "Sizning javobingiz: " + item.answers[userAnswer];

        review.appendChild(title);
        review.appendChild(right);
        review.appendChild(yours);

        reviewList.appendChild(review);
    });
}

// Tugmalar
startBtn.addEventListener("click", startNewTest);
restartBtn.addEventListener("click", startNewTest);
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", previousQuestion);
