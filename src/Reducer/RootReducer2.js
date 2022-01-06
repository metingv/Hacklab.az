import image1 from "../assets/Frame 11.png";
import image2 from "../assets/Frame 12.png";
import image3 from "../assets/Frame 13.png";
import image4 from "../assets/Frame 14.png";
import image4a from "../assets/Frame 14a.png";
import image5 from "../assets/s.jpg";


const initialState = { 
  search: [], 
  search1: [], 
  displaymode: "absolute",
  displaymode1: "initial",
  text1: [
    {
      image: image1,
      title: "title1",
      content: "content1",
      a:"a1",
      b:"b1",
      c:"c1",
      d:"d1"
     
    },
    {
      image: image2,
      title: "title2",
      content: "content2",
      a:"a2",
      b:"b2",
      c:"c2",
      d:"d2"
    
    },
    {
      image: image3,
      title: "title3",
      content: "content3",
      a:"a3",
      b:"b3",
      c:"c3",
      d:"d3"
    },
    {
      image: image4a,
      title: "title4",
      content: "content4",
      a:"a4",
      b:"b4",
      c:"c4",
      d:"d4"
    }
  ],
  text2: [
    {
      link: "/faq",
      l: "l1",
      t: "t1",
      s: "span1",
      i: "i1",
      title: "Bizim Cəmiyyət nədir? ",
      content:
  "Bizim Cəmiyyət məqsədyönlü tədqiqatçılar üçün nəzərdə tutulub və onların yalnız xüsusi dəvət əsasında üzvlüyə qəbul edilməsinə söykənir. Elə bu səbəbdən də, burada əslində 'nə' sualı 'kim' sualı kimi qəbul edilir. Cəmiyyətimizin üzvləri bir-birinə meydan oxuyan, bir-birini cəsarətləndirən, ideyalarının formalaşdırılmasında və test edilməsində bir-birinə dəstək olan təsisçilər, mütəfəkkirlər və sahə mütəxəssisləridir. Biz yaxşı fikirlərin çox nadir hallarda təkbaşına ortaya çıxdığını düşünürük. Biz yeni təklif və fikirlərin inkişaf etdirilməsini dəstəkləyən təhlükəsiz zona və antiinkubatoruq", },    
{
      link: "/faq", 
      l: "l2",
      t: "t2",
      s: "span2",
      i: "i2",
      title: "Üzvlərimiz kimlərdir?",
      content:
     "Üzvlərimiz təcrübəli və eqosuz, həmçinin iddialı və təşəbbüskar olmağa meyllidirlər. Üzvlərimizin təxminən yarısı öz işinə başlamağa can atan sahibkarlar (məsələn, təsis edilmiş şirkətlər, kiçik müəssisələr, fondlar və s.), digər yarısı isə yeni sahələrdə inkişaf etməyə can atan sahə mütəxəssisləridir. Üzvlərimizin əksəriyyəti texniki və ya texnoloji sahələr ilə əlaqəli olsalar da, istisna sahə mütəxəssislərimiz də var. Həmçinin çox xoşbəxtik ki, Cəmiyyətin müxtəlif istiqamətlərdəki fəaliyyətini 4 ay boyunca könüllü olaraq həyata keçirəcək xüsusi üzv bazamız da mövcuddur." },
 {
      link: "/faq",
      l: "l3",
      t: "t3",
      s: "span3",
      i: "i3",
      title: "Xərclərimizi necə qarşılayırıq?",
      content:
"Cəmiyyətimizin maddi olaraq özünü təmin etməsi üçün kiçik toxum sərmayə fondu mövcuddur. Fond Cəmiyyət tərəfindən yaradılır və Cəmiyyətin əməlliyyat xərclərinin qarşılanmasına dəstək olur.",    },
    {
      link: "/faq",
      l: "l4",
      t: "t4",
      s: "span4",
      i: "i4",
      title: "Üzvlərdən gözləntilər nələrdir?",
      content: (
        <>
          Ümumi mənada üzvlərimizdən yalnız bir gözləntimiz var: onların “görünmələri”. “Görünmək” dedikdə, Cəmiyyətin bir üzvü kimi tam hazır olmağı nəzərdə tuturuq.
          <br />
          <br /> Daha konkret olaraq “görünmək” nədir? – Tədbirlərimizə gəlmək, aylıq görüşlərimizdə iştirak etmək və məzunlarımızın xoşbəxt anlarını paylaşmaq, digər üzvlərlə dərin əlaqələr qurmaq, heyətə qatılmaq və həftəlik iclaslarda iştirak etmək, fərdi inkişaf sahələrinə töhfə vermək və Cəmiyyət içində liderlik rollarını almaq.
          <br />
          <br /> Üzvlərimizdən dəstəkləmələrini gözlədiyimiz dəyərlər:
          <br />
          <br />  <strong>Özünüzü tərbiyə edin: </strong> Ən yaxşı iş özünə qulluq təməli üzərində qurulur. Ehtiyaclarınızı ödəməkdən qorxmayın.
          <br />
          <br />  <strong>Sərhədlərinizi aşın: </strong> Bir-birimizə çətin suallar verərək şəxsi inkişafımızın qarşısına çıxan maneələri aşırıq.
          <br />
          <br />  <strong>İnkişafınıza yatırım edin: </strong> Öz şəxsi və peşəkar keyfiyyətlərinizi göstərərək Cəmiyyətin digər üzvləri ilə dərin münasibətlər qurmaqla Cəmiyyətdəki vaxtınızdan gələcəyə sərmayə qoyun.
          <br />
          <br /> <strong> İz buraxın: </strong> Addımlarınızla sizdən sonra addımlayacaqlara miras qoyun. Layihələrdə təşəbbüs göstərərək Cəmiyyətimizdə özünüzdən iz saxlayın. Cəmiyyət indi sizindir – icazə istəməyinizə ehtiyac yoxdur!
        </>
      )
    },
    {
      link: "/faq",
      l: "l5",
      t: "t5",
      s: "span5",
      i: "i5",
      title:
        "Cəmiyyətimizi birgə iş sahələrindən (kovorkinqlərdən) fərqləndirən nədir?",
      content: (
        <>
Cəmiyyətimiz yeni fikirləri sərbəst öyrənmək və araşdırmaq üçün bir araya gələn üzvlərdən ibarətdir. Üzvlərimiz fərqli fəaliyyətlər ilə məşğul olur – şirkət təsis edir, açıq mənbəli layihələr üzərində işləyir, yeni sahələr öyrənir, kitab yazır – və digər araşdırmalar aparırlar. Sahibkarlar konsepsiya və ideya mərhələsində olduqları zaman Cəmiyyətə qoşulurlar. Akseleratorlardan fərqli olaraq, Cəmiyyətə qoşulmaq üçün şirkət açmağa və hər hansı bir müddətdə maliyyələşdirməni gözləməyə ehtiyac yoxdur. Üzvlərimizi həqiqətən özləri üçün əhəmiyyətli bir sahə tapmağa, növbəti 5 il və daha çox müddətə bu sahəyə vaxt həsr etmək fikrinə hazır olmağa çağırırıq. Cəmiyyət üzvlərimizin yarısı öz təcrübəsini artırmaq, yeni imkanlar və ya yeni sahələri öyrənmək istəyən sahə mütəxəssisləridir. Onların bir çoxu açıq mənbəli layihələrə töhfə verir, kitab yazır və ya ixtira axtarışındadır. Cəmiyyətdən məzun olduqda karyeralarını davam etdirmək üçün tədqiqat qurumlarına, xeyriyyəçiliyə, akademik müəssisələrə və ya digər şirkətlərə qoşulurlar.
          <br />
          <br /> Cəmiyyəti hər şeydən üstün tuturuq. Üzvlərimiz bir-birlərinə kömək etmək, gələcək üzvlərə miras qoymaq, Cəmiyyətə töhfə vermək üçün müxtəlif fəaliyyətlər gerçəkləşdirirlər. Birgə iş yerlərindən fərqli olaraq fiziki məkanımızda hər masaya görə ödəniş almırıq, lakin bir çox imkan, mənbə və insan resursuna sahibik. “eWork”un imkanlarına və ya mənbələrinə sahib deyilik. Resurslarımız Cəmiyyətə xidmət edir və Cəmiyyət tərəfindən idarə olunur.

        </>
      )
    },

    {
      link: "/faq",
      l: "l6",
      t: "t6",
      s: "span6",
      i: "i6",
      title:
        "Cəmiyyətimizin icması sahə mütəxəssislərinə və ya mütəxəssis olmaq istəyənlərə necə kömək edir? ",
      content: (
        <>
          Davamlı olaraq özümüzü inkişaf etdirərək günümüzün ən yeni sahələri ilə uyğunlaşırıq. Bizim seminarlarda təkcə spikerlər öz sahələrinin mütəxəssisləri deyillər, həmçinin seminar iştirakçıları da bu sahədə kifayət qədər biliyə sahibdirlər. Bu isə öz növbəsində diskussiyanın daha dərin və öyrədici olması ilə nəticələnir. Üzvlərimiz elmi işləri birlikdə oxuyur, müzakirələr aparır və bir-birlərinə kömək edirlər.
          <br /> <br /> 
        Cəmiyyətimizin ən ilkin faydalarından biri üzvlərimizin bir-birlərinə göstərdikləri dəstək azadlığı və dərinliyidir.

          <br />
          <br /> Üzvləri seçərkən nəzərə aldığımız cəhətlərdən biri də sahə mütəxəssisləri və təsisçilərin kollektiv tərkibimizə uyğun olmasıdır. Müəyyən bir sahədəki kritik üzvlər orqanik impuls yaradır və bu, digər üzvlərin bilik və bacarıqlarını real dünyada tətbiq etmələrinə, bununla da qarşılıqlı öyrənmələrinə və böyümələrinə imkan verir.
        </>
      )
    },
    {
      link: "/faq",      
      l: "l7",
      t: "t7",
      s: "span7",
      i: "i7",

      title: "Kimlər üzv ola bilər?",
      content: (
        <>
         Aşağıdakı kateqoriyalar üzrə müraciət edən, peşəkar və ya peşəkar həyata keçid mərhələsində olan şəxslər üzv ola bilərlər:
          <br />
          <br />
          &#9679; &nbsp;Proqram mühəndisləri; <br />
          <br /> &#9679; &nbsp;Texniki təcrübəyə malik dizaynerlər, məhsul menecerləri və ya marketinq mütəxəssisləri; <br />
          <br /> &#9679;&nbsp;Texniki təşəbbüskarlar; <br />
          <br />
          &#9679;&nbsp; Texniki keçmişə sahib olan və ya texniki sahələrə keçən sahə mütəxəssisləri (idmançılar, müəllimlər, cəmiyyət idarəçiləri və s.); <br />
          <br /> &#9679;&nbsp; Texnologiya dünyası ilə əlaqəsi olan digər şəxslər.
          <br />
          <br />
          Yuxarıdakı kateqoriyalardan heç birinə uyğun gəlmirsinizsə, lakin cəmiyyətimizə dəyərli töhfə verəcəyinizi düşünürsünüzsə, zəhmət olmasa, info@hacklab.az e-poçt ünvanı ilə bizimlə əlaqə yaradın.
        </>
      )
    },
    {
      link: "/faq",
      l: "l8",
      t: "t8",
      s: "span8",
      i: "i8",
      title: "Hansı hallarda üzv ola bilərəm?",
      content: (
        <>    
          “Tam iş günü çalışaramsa?”, “Şirkətim varsa?”, “Şirkət qurmaq istəmirəmsə?”, “Oxuyuramsa?”, “Texniki sahədə deyiləmsə?” kimi suallar sizi narahat edirsə, bu halların heç biri üzv olmağınıza mane olmur.
        </>
      )
    },
    {
      link: "/faq",
      l: "l9",
      t: "t9",
      s: "span9",
      i: "i9",
      title: "Hansı daxili tədbirlərimiz var?",
      content: (
        <>
          Daxili tədbirlərimiz və fəaliyyətlərimiz əsasən Cəmiyyət tərəfindən idarə olunur və beləliklə hər bir fəaliyyət Cəmiyyətin maraqlarını əks etdirir.
          <br />
          <br /> Onlar 5 yerə ayrılır:
          <br />
          <br />
          &#9679;&nbsp;Mühazirələr <br />
          <br />
          &#9679;&nbsp;Kurslar <br />
          <br />
          &#9679;&nbsp;Araşdırmalar <br />
          <br />
          &#9679;&nbsp;“Workshop”lar <br />
          <br />
          &#9679;&nbsp;Əyləncəli və sosial tədbirlər
        </>
      )
    },
    {
      link: "/faq",
      l: "l10",
      t: "t10",
      s: "span10",
      i: "i10",
      title: "Nə vaxt məzun olmaq olar?",
      content: (
        <>
          Məzun olmağın xüsusi qaydası yoxdur. Bunun əvəzinə, əsas prinsip ondan ibarətdir ki, artıq Cəmiyyətdə tam iştirak etmək öhdəliyini götürə bilmirsinizsə, məzun olmalısınız. Məzun olma vaxtının gəldiyini göstərə biləcək müsbət göstəricilər: <br /> <br />
          &#9679;&nbsp;Tam gün işləyəcəyiniz iş <br />
          &#9679;&nbsp;Şirkətiniz üçün 1 milyon dollardan çox sərmayə toplamağınız;<br />
          &#9679;&nbsp;Komandanızın 4 və ya daha çox əməkdaş ilə böyüməsi.<br />

          
         
        </>
      )
    },
    {
      link: "/faq",
      l: "l11",
      t: "t11",
      s: "span11",
      i: "i11",
      title: "Fond nə üçün yaradılır?",
      content: (
        <>
          Toxum fondumuz Cəmiyyətdə fəaliyyətə başlayan şirkətlərə və Cəmiyyətdən kənarda bizə yönəldilən şirkətlərə investisiya yatırmaq üçün yaradılır. Fond tərəfindən yaradılan idarəetmə haqları Cəmiyyətin əməliyyat xərclərini qarşılayır.
          <br />
          <br />Nəticədə uzun illər fəaliyyət göstərə biləcək davamlı bir Cəmiyyət qurmaq istəyirik. Bu məqsədlə fondun son mənfəətinin bir hissəsi daim Cəmiyyət üçün ianə edilir.
        </>
      )
    },
    {
      link: "/faq",
      l: "l12",
      t: "t12",
      s: "span12",
      i: "i12",
      title: "Yalnız Cəmiyyət üzvlərinin şirkətlərinə investisiya edilirmi?",
      content: (
        <>
         Fondla Cəmiyyət arasında simbiotik əlaqə mövcuddur: fond Cəmiyyəti dəstəkləmək üçün mövcuddur və Cəmiyyətimiz də fondu dəstəkləyir. Bununla birlikdə, Cəmiyyət əsas götürülür. Fond öz xeyrinə mənfəət güdmür, yəni, Cəmiyyəti maddi cəhətdən təmin edə bilmək üçün mövcuddur.
          <br /> <br /> Simbiotik münasibət özünü bir neçə yolla göstərir:
          <br /> <br /> (1) Üzvlər fond komandasını şirkətlərə təqdim edərək və ilk maliyyələşdirmə mərhələsinə investisiya cəlb edərək fondu dəstəkləyir;
          <br /> <br /> (2) Fond idarəetmə haqqını istifadə etməklə Cəmiyyət üçün əməliyyat büdcəsini təmin edərək Cəmiyyəti dəstəkləyir;
          <br /> <br /> (3) Fondun son mənfəətinin bir hissəsi Cəmiyyət üçün daimi ianə olur;
          <br /> <br /> (4) Cəmiyyət üzvləri minimum öhdəlik ölçüsü olmadan fonda investor olmaq imkanına malikdirlər.
        </>
      )
    },
    {
      link: "/faq",
      l: "l13",
      t: "t13",
      s: "span13",
      i: "i13",
      title:
        "Yeni şirkət açıldıqda Cəmiyyət hansı investisiya hüquqlarına malikdir?",
      content: (
        <div>
         Cəmiyyətə üzv olmaqla Cəmiyyətin fonduna mövcud şirkətinizin və ya üzv olduğunuz zaman fəaliyyətə başlayan şirkətinizin sonrakı ilk maliyyə toplanışına 1 milyon ABŞ dollarına qədər investisiya qoymaq imkanı verirsiniz. Cəmiyyət aparıcı investor kimi şərtlər təklif edərsə, endirim istənilmir. Başqa bir fond şərtləri təyin edərsə, Cəmiyyətin fondu lider şərtlərinə 20% endirimlə davam etməyi və ya birlikdə rəhbərlik etməyi təklif edir.
          <br />
          <br /> Sahibkarlarla səyahətlərinin əvvəlində ortaq olmağı və ilk maliyyələşməyə investisiya qoymağı sevirik. Özümüz sahibkarıq, buna görə təsisçilərin keçdiyi yolları (səyahətləri) başa düşürük. Məqsədimiz şirkətlərimizə öz səyahətlərində mümkün olan hər cür kömək üçün kollektiv təcrübəmizi istifadə etməkdir.
          <br />
          <br /> Cəmiyyətimiz dünya miqyasında müraciət qəbul edir!
          <br />
          <br /> Səmimi şəkildə ifadə etsək, Cəmiyyət bundan sonra nə edəcəyini fəal şəkildə araşdıran və ya növbəti 6 ayda tam işini tərk edə biləcək insanlar üçündür.<br /> <br />
        </div>
      )
    }
  ],
   text3: [
    {
      link: "/blog",
      image: image5,
      title: (
       
          "Netlify Prime Video app introduces a new clip-sharing feature a"
       
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
        
          "Netlify Prime Video app introduces a new clip-sharing feature 2"
       
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
        
         "Google Prime Video app introduces a new clip-sharing feature 3"
        
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
      
          "Yandex Prime Video app introduces a new clip-sharing feature 4"
      
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
          
          "Safari Prime Video app introduces a new clip-sharing feature 5"
       
      )
    },
    {
      link: "/blog",
      image: image5,
      title: (
          "Edge Prime Video  a new clip-sharing feature 6"
      )
    }
  ],
  text4: [
    {
      link: "/meeting",
      title: "NFT Bazarında nələri bilmək lazımdır?"
    },
    {
      link: "/meeting",
      title: "Crypto-Valyuta nədir?"
    },
    {
      link: "/meeting",
      title: "NFT Bazarında nələri bilmək lazımdır?"
    },
    {
      link: "/meeting",
      title: "Crypto-Valyuta nədir?"
    },
    {
      link: "/meeting",
      title: "NFT Bazarında nələri bilmək lazımdır?"
    },
    {
        link: "/meeting",
      title: "Crypto-Valyuta nədir?"
    }
    
  ],
  text5: [
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
        "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    },
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
       "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    },
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
       "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    },
    {
      link:"/",
      hash:"#Section5",
      image: image5,
      title: (
       "Amazon Prime Video app introduces a new clip-sharing feature"
      )
    }
  ]
};

const RootReducer2 = (state = initialState, action) => {
  console.log("action.id " +  action.id)
  console.log("state.search " + state.search)
  switch (action.type) {
    default:
      return state;
  }
};

export default RootReducer2;
