(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`서울 37.5665 126.9780
부산 35.1796 129.0756
대구 35.8714 128.6014
인천 37.4563 126.7052
광주 35.1595 126.8526
대전 36.3504 127.3845
울산 35.5384 129.3114
세종 36.4800 127.2890
수원 37.2636 127.0286
성남 37.4201 127.1265
고양 37.6584 126.8320
용인 37.2411 127.1776
부천 37.5034 126.7660
안산 37.3219 126.8309
안양 37.3943 126.9568
남양주 37.6360 127.2165
화성 37.1995 126.8312
평택 36.9921 127.1129
의정부 37.7381 127.0337
시흥 37.3800 126.8029
파주 37.7600 126.7800
김포 37.6153 126.7156
광명 37.4786 126.8646
광주(경기) 37.4295 127.2550
군포 37.3616 126.9352
하남 37.5393 127.2148
오산 37.1499 127.0770
이천 37.2724 127.4350
안성 37.0080 127.2797
구리 37.5943 127.1296
양주 37.7853 127.0458
포천 37.8949 127.2003
여주 37.2984 127.6370
동두천 37.9036 127.0606
과천 37.4292 126.9876
춘천 37.8813 127.7298
원주 37.3422 127.9202
강릉 37.7519 128.8761
동해 37.5247 129.1143
속초 38.2070 128.5918
삼척 37.4500 129.1650
태백 37.1640 128.9856
청주 36.6424 127.4890
충주 36.9910 127.9259
제천 37.1326 128.1910
천안 36.8151 127.1139
아산 36.7898 127.0019
공주 36.4465 127.1190
보령 36.3334 126.6127
서산 36.7848 126.4503
논산 36.1872 127.0988
당진 36.8898 126.6459
전주 35.8242 127.1480
군산 35.9676 126.7366
익산 35.9483 126.9576
정읍 35.5699 126.8560
남원 35.4164 127.3904
김제 35.8036 126.8809
목포 34.8118 126.3922
여수 34.7604 127.6622
순천 34.9507 127.4872
나주 35.0159 126.7108
광양 34.9407 127.6959
포항 36.0190 129.3435
경주 35.8562 129.2247
김천 36.1398 128.1136
안동 36.5684 128.7294
구미 36.1195 128.3446
영주 36.8057 128.6241
영천 35.9733 128.9386
상주 36.4108 128.1590
문경 36.5865 128.1867
경산 35.8251 128.7415
창원 35.2281 128.6811
마산 35.2140 128.5810
진해 35.1330 128.7100
진주 35.1800 128.1076
통영 34.8544 128.4332
사천 35.0037 128.0642
김해 35.2285 128.8894
밀양 35.5038 128.7467
거제 34.8806 128.6211
양산 35.3350 129.0372
제주 33.4996 126.5312
서귀포 33.2541 126.5600`.split(`
`).map(e=>{let[t,n,r]=e.trim().split(/\s+/);return{name:t,lat:Number(n),lon:Number(r)}}),t=e[0],n=e=>e.name,r={甲:`wood`,乙:`wood`,丙:`fire`,丁:`fire`,戊:`earth`,己:`earth`,庚:`metal`,辛:`metal`,壬:`water`,癸:`water`},i={寅:`wood`,卯:`wood`,巳:`fire`,午:`fire`,辰:`earth`,戌:`earth`,丑:`earth`,未:`earth`,申:`metal`,酉:`metal`,亥:`water`,子:`water`},a={甲:`갑`,乙:`을`,丙:`병`,丁:`정`,戊:`무`,己:`기`,庚:`경`,辛:`신`,壬:`임`,癸:`계`},o={子:`자`,丑:`축`,寅:`인`,卯:`묘`,辰:`진`,巳:`사`,午:`오`,未:`미`,申:`신`,酉:`유`,戌:`술`,亥:`해`},s={wood:{ko:`나무`,hanja:`木`,color:`var(--el-wood)`},fire:{ko:`불`,hanja:`火`,color:`var(--el-fire)`},earth:{ko:`흙`,hanja:`土`,color:`var(--el-earth)`},metal:{ko:`쇠`,hanja:`金`,color:`var(--el-metal)`},water:{ko:`물`,hanja:`水`,color:`var(--el-water)`}},c=[`wood`,`fire`,`earth`,`metal`,`water`],l={wood:`fire`,fire:`earth`,earth:`metal`,metal:`water`,water:`wood`},u={wood:`earth`,earth:`water`,water:`fire`,fire:`metal`,metal:`wood`},d={甲:{image:`큰 나무`,core:`곧게 위로 자라려는 사람. 원칙이 분명하고, 한번 정한 방향은 쉽게 꺾지 않습니다. 사람들 사이에서 자연스럽게 기둥 역할을 맡아요.`,love:`상대를 품어주고 이끌어주려 합니다. 다만 자기 방식이 옳다고 믿는 순간이 많아, 상대에게 숨 쉴 틈을 주는 연습이 필요해요.`},乙:{image:`풀과 덩굴`,core:`부드럽게 휘어지되 끝내 살아남는 사람. 눈치가 빠르고 관계 속에서 길을 찾는 능력이 탁월합니다.`,love:`상대에게 맞춰주는 섬세함이 있어요. 대신 기댈 수 있는 단단한 사람을 만났을 때 가장 빛납니다.`},丙:{image:`한낮의 태양`,core:`밝고 숨김없는 사람. 있는 그대로 드러내고, 주변을 환하게 만드는 에너지가 있습니다. 공정함에 민감해요.`,love:`표현이 시원하고 따뜻합니다. 관심이 식으면 금방 티가 나는 편이라, 꾸준함이 관계의 열쇠예요.`},丁:{image:`밤의 등불`,core:`조용히 한 곳을 비추는 사람. 집중력과 섬세한 감각이 있고, 가까운 사람에게 깊이 헌신합니다.`,love:`소수에게 깊게 마음을 줍니다. 겉은 담담해도 속의 온도가 높아서, 그 온도를 알아봐주는 사람과 맞아요.`},戊:{image:`큰 산`,core:`묵직하고 믿음직한 사람. 쉽게 흔들리지 않고, 맡은 건 끝까지 지킵니다. 대신 한번 굳은 생각은 잘 안 바뀌어요.`,love:`말보다 존재로 곁을 지키는 타입입니다. 표현이 적어 오해받기 쉬우니, 작은 말 한마디가 큰 차이를 만들어요.`},己:{image:`기름진 논밭`,core:`무엇이든 키워내는 사람. 실용적이고 꼼꼼하며, 사람과 일을 정성껏 가꿉니다. 속으로 생각이 많아요.`,love:`상대를 챙기고 돌보는 데 능합니다. 자기 마음은 뒤로 미루는 버릇이 있어, 받는 연습도 필요해요.`},庚:{image:`바위와 원석`,core:`결단력 있고 의리 있는 사람. 옳고 그름이 분명하고, 일을 맺고 끊는 힘이 강합니다.`,love:`한번 내 사람이면 끝까지 갑니다. 표현이 직선적이라, 부드러움을 아는 상대와 균형이 맞아요.`},辛:{image:`다듬어진 보석`,core:`예민하고 정교한 사람. 미적 감각과 기준이 높고, 자기만의 결이 뚜렷합니다. 상처도 오래 기억해요.`,love:`섬세한 배려를 알아보고, 또 그만큼을 원합니다. 거친 말에 쉽게 닫히니 말의 온도가 맞는 사람이 좋아요.`},壬:{image:`큰 강과 바다`,core:`넓고 깊게 흐르는 사람. 지혜롭고 포용력이 크며, 한곳에 머물기보다 움직이며 넓어집니다.`,love:`자유로운 관계를 선호합니다. 구속보다 신뢰로 묶일 때 오래 가요.`},癸:{image:`봄비와 이슬`,core:`스며드는 사람. 직관이 뛰어나고 감수성이 깊으며, 보이지 않는 곳에서 사람을 살립니다.`,love:`조용히 상대를 적셔주는 사랑을 합니다. 마음을 말로 꺼내기 어려워해서, 먼저 물어봐주는 사람과 잘 맞아요.`}},f={寅:`이른 봄`,卯:`한봄`,辰:`늦봄`,巳:`초여름`,午:`한여름`,未:`늦여름`,申:`초가을`,酉:`한가을`,戌:`늦가을`,亥:`초겨울`,子:`한겨울`,丑:`늦겨울`},p={比肩:`self`,劫財:`self`,食神:`output`,傷官:`output`,偏財:`wealth`,正財:`wealth`,偏官:`officer`,正官:`officer`,偏印:`resource`,正印:`resource`},m={比肩:`비견`,劫財:`겁재`,食神:`식신`,傷官:`상관`,偏財:`편재`,正財:`정재`,偏官:`편관`,正官:`정관`,偏印:`편인`,正印:`정인`,本元:`본원`},h={self:{name:`나·동료`,theme:`자립과 경쟁`},output:{name:`표현·재능`,theme:`표현과 재능 발휘`},wealth:{name:`돈·현실`,theme:`현실 감각과 재물`},officer:{name:`일·책임`,theme:`일과 책임, 지위`},resource:{name:`배움·보호`,theme:`배움과 보호, 문서`}},g={子:`丑`,丑:`子`,寅:`亥`,亥:`寅`,卯:`戌`,戌:`卯`,辰:`酉`,酉:`辰`,巳:`申`,申:`巳`,午:`未`,未:`午`},_={子:`午`,午:`子`,丑:`未`,未:`丑`,寅:`申`,申:`寅`,卯:`酉`,酉:`卯`,辰:`戌`,戌:`辰`,巳:`亥`,亥:`巳`},v=[[`申`,`子`,`辰`],[`亥`,`卯`,`未`],[`寅`,`午`,`戌`],[`巳`,`酉`,`丑`]],y={命宮:{ko:`명궁`,area:`나 자신`},兄弟:{ko:`형제궁`,area:`형제·동료`},夫妻:{ko:`부처궁`,area:`배우자·연인`},子女:{ko:`자녀궁`,area:`자녀·후배`},財帛:{ko:`재백궁`,area:`돈 버는 방식`},疾厄:{ko:`질액궁`,area:`몸과 건강`},遷移:{ko:`천이궁`,area:`바깥·이동`},交友:{ko:`교우궁`,area:`사람들·인맥`},官祿:{ko:`관록궁`,area:`일·커리어`},田宅:{ko:`전택궁`,area:`집·자산`},福德:{ko:`복덕궁`,area:`마음·즐거움`},父母:{ko:`부모궁`,area:`부모·윗사람`}},b={命宮:`遷移`,遷移:`命宮`,兄弟:`交友`,交友:`兄弟`,夫妻:`官祿`,官祿:`夫妻`,子女:`田宅`,田宅:`子女`,財帛:`福德`,福德:`財帛`,疾厄:`父母`,父母:`疾厄`},x={命宮:`나 자신이 무대 한가운데 서는 10년. 정체성과 방향을 세우는 시기`,兄弟:`동료·형제·파트너와의 관계가 판을 좌우하는 10년`,夫妻:`배우자·연인 관계가 삶의 전면에 나오는 10년`,子女:`자녀·후배·창작물처럼 내가 키우는 것이 중심이 되는 10년`,財帛:`돈을 버는 방식과 현금 흐름이 주제가 되는 10년`,疾厄:`몸과 마음의 컨디션, 일하는 방식 자체를 다듬는 10년`,遷移:`바깥·이동·해외에서 기회가 열리는 10년`,交友:`사람과 네트워크가 자산이 되는 10년`,官祿:`일과 커리어가 인생의 중심이 되는 10년`,田宅:`집·자산·뿌리를 다지는 10년`,福德:`내면의 만족과 가치관을 다시 세우는 10년`,父母:`윗사람·문서·제도와의 관계가 중요해지는 10년`},S={紫微:{ko:`자미`,title:`제왕의 별`,mine:`자존감이 높고 품위가 있습니다. 사람들이 자연스럽게 따르고, 스스로도 무대 가운데를 원해요.`,partner:`격이 있고 자기 세계가 뚜렷한 사람`,tags:[`lead`,`stable`]},天機:{ko:`천기`,title:`지혜의 별`,mine:`머리 회전이 빠르고 기획력이 좋습니다. 변화를 먼저 감지하지만, 생각이 많아 결정이 늦어지기도 해요.`,partner:`머리 좋고 대화가 통하는 사람`,tags:[`mind`,`free`]},太陽:{ko:`태양`,title:`태양의 별`,mine:`베풀고 드러내는 사람. 공적인 자리에서 빛나고, 명예와 평판을 중요하게 여깁니다.`,partner:`밝고 사회적으로 활발한 사람`,tags:[`express`,`lead`]},武曲:{ko:`무곡`,title:`재물과 결단의 별`,mine:`실행력과 돈 감각이 있습니다. 강단 있게 밀어붙이지만, 표현은 무뚝뚝한 편이에요.`,partner:`능력 있고 결단력 있는 사람`,tags:[`wealth`,`lead`]},天同:{ko:`천동`,title:`복의 별`,mine:`온화하고 여유가 있습니다. 즐거움을 찾을 줄 알고, 사람을 편하게 해줘요.`,partner:`다정하고 편안한 사람`,tags:[`heart`,`feel`]},廉貞:{ko:`염정`,title:`원칙과 열정의 별`,mine:`복잡한 매력을 가진 사람. 규칙을 중시하면서도 감정의 온도가 높습니다.`,partner:`강렬하고 매력이 분명한 사람`,tags:[`lead`,`heart`]},天府:{ko:`천부`,title:`창고의 별`,mine:`안정적이고 관리 능력이 뛰어납니다. 포용력이 크고, 지키는 데 강해요.`,partner:`안정감 있고 든든한 사람`,tags:[`stable`,`wealth`]},太陰:{ko:`태음`,title:`달의 별`,mine:`섬세하고 감성적입니다. 조용히 모으고 쌓는 힘이 있어요.`,partner:`섬세하고 조용한 사람`,tags:[`feel`,`wealth`]},貪狼:{ko:`탐랑`,title:`욕망과 재주의 별`,mine:`다재다능하고 사교적입니다. 매력이 있고 하고 싶은 게 많아요.`,partner:`재미있고 매력적인 사람`,tags:[`express`,`heart`]},巨門:{ko:`거문`,title:`말과 분석의 별`,mine:`언변과 분석력이 좋습니다. 날카롭게 꿰뚫어 보지만, 말이 구설이 되기도 해요.`,partner:`말이 잘 통하고 깊이 있는 사람`,tags:[`mind`,`express`]},天相:{ko:`천상`,title:`도장의 별`,mine:`성실하고 조율에 능합니다. 사람 사이를 이어주고 신뢰를 쌓아요.`,partner:`성실하고 믿을 수 있는 사람`,tags:[`stable`,`heart`]},天梁:{ko:`천량`,title:`어른의 별`,mine:`보호하고 조언하는 사람. 원칙이 있고, 나이보다 성숙합니다.`,partner:`어른스럽고 나를 보살펴주는 사람`,tags:[`stable`,`mind`]},七殺:{ko:`칠살`,title:`장군의 별`,mine:`돌파력과 독립심이 강합니다. 승부를 즐기고, 남의 밑에 오래 있지 못해요.`,partner:`독립적이고 추진력 있는 사람`,tags:[`lead`,`free`]},破軍:{ko:`파군`,title:`개척의 별`,mine:`부수고 새로 짓는 사람. 변화를 두려워하지 않고, 익숙한 것을 깨며 성장합니다.`,partner:`변화를 즐기고 모험적인 사람`,tags:[`free`,`lead`]}},C={文昌:[`mind`,`express`],文曲:[`express`,`feel`],天馬:[`free`],祿存:[`wealth`],左輔:[`heart`],右弼:[`heart`],天魁:[`lead`],天鉞:[`heart`]},ee={化祿:`화록(풍요)`,化權:`화권(주도권)`,化科:`화과(명성)`,化忌:`화기(결핍·집착)`},w={廟:`가장 강함`,旺:`강함`,得:`좋음`,利:`무난`,平:`보통`,陷:`약함`},T={Aries:{el:`fire`,sun:`먼저 시작하는 사람. 직진하고, 도전 앞에서 살아납니다`,moon:`마음이 빠르게 끓고 빠르게 식어요. 솔직한 감정 표현이 편합니다`,asc:`활기차고 시원시원한 첫인상`,venus:`설렘과 직진을 사랑합니다`,tags:[`lead`,`free`]},Taurus:{el:`earth`,sun:`천천히, 확실하게 쌓는 사람. 감각이 좋고 안정을 지킵니다`,moon:`익숙함과 몸의 편안함에서 안정을 느껴요`,asc:`온화하고 느긋한 첫인상`,venus:`변치 않는 꾸준함을 사랑합니다`,tags:[`stable`,`wealth`]},Gemini:{el:`air`,sun:`호기심으로 사는 사람. 말과 정보, 연결에 강합니다`,moon:`대화하고 생각을 나눌 때 마음이 풀려요`,asc:`재치 있고 가벼운 첫인상`,venus:`대화가 통하는 사람에게 빠집니다`,tags:[`mind`,`express`]},Cancer:{el:`water`,sun:`지키고 돌보는 사람. 가족과 내 사람이 중심입니다`,moon:`안전한 울타리 안에서 마음이 놓여요`,asc:`부드럽고 다정한 첫인상`,venus:`보살핌과 정서적 안정을 사랑합니다`,tags:[`feel`,`heart`]},Leo:{el:`fire`,sun:`빛나고 싶은 사람. 당당하고 너그러우며 무대를 압니다`,moon:`인정받고 사랑받는다고 느낄 때 편해요`,asc:`존재감 있고 화사한 첫인상`,venus:`특별하게 대우받는 사랑을 원합니다`,tags:[`express`,`lead`]},Virgo:{el:`earth`,sun:`정리하고 다듬는 사람. 꼼꼼하고 쓸모 있는 것을 만듭니다`,moon:`해야 할 일이 정돈되어 있을 때 마음이 편해요`,asc:`단정하고 신중한 첫인상`,venus:`작은 배려와 실질적인 도움으로 사랑을 느낍니다`,tags:[`mind`,`stable`]},Libra:{el:`air`,sun:`균형을 맞추는 사람. 관계와 조화, 아름다움을 중시합니다`,moon:`갈등 없이 조화로울 때 마음이 놓여요`,asc:`세련되고 친절한 첫인상`,venus:`대등하고 우아한 관계를 사랑합니다`,tags:[`heart`,`express`]},Scorpio:{el:`water`,sun:`깊이 파고드는 사람. 강렬하고, 한번 정하면 끝까지 갑니다`,moon:`깊게 신뢰할 수 있는 소수 앞에서만 마음을 열어요`,asc:`조용하지만 강렬한 첫인상`,venus:`전부를 거는 깊은 사랑을 원합니다`,tags:[`mind`,`feel`]},Sagittarius:{el:`fire`,sun:`멀리 보는 사람. 자유와 의미, 넓은 세계를 찾습니다`,moon:`구속 없이 움직일 수 있을 때 마음이 편해요`,asc:`밝고 개방적인 첫인상`,venus:`함께 모험하는 친구 같은 사랑을 원합니다`,tags:[`free`,`express`]},Capricorn:{el:`earth`,sun:`오래 올라가는 사람. 책임감 있고 결과로 증명합니다`,moon:`통제할 수 있고 계획대로일 때 안정을 느껴요`,asc:`차분하고 어른스러운 첫인상`,venus:`믿을 수 있고 미래가 보이는 관계를 사랑합니다`,tags:[`stable`,`wealth`]},Aquarius:{el:`air`,sun:`자기만의 길을 가는 사람. 독립적이고 새로운 생각을 합니다`,moon:`혼자만의 공간이 보장될 때 마음이 편해요`,asc:`독특하고 쿨한 첫인상`,venus:`친구처럼 자유로운 사랑을 원합니다`,tags:[`free`,`mind`]},Pisces:{el:`water`,sun:`느끼고 스며드는 사람. 공감력과 상상력이 깊습니다`,moon:`감정을 있는 그대로 받아줄 때 마음이 놓여요`,asc:`몽환적이고 부드러운 첫인상`,venus:`헌신적이고 낭만적인 사랑을 원합니다`,tags:[`feel`,`heart`]}},E={fire:`불`,earth:`흙`,air:`공기`,water:`물`},D=[``,`나 자신`,`돈·가치`,`말·배움`,`집·뿌리`,`연애·창작`,`일상·건강`,`파트너`,`타인의 자원·변화`,`해외·철학`,`커리어`,`친구·공동체`,`내면·무의식`],O={lead:{ko:`리더십·추진`,desc:`앞에서 판을 이끌고 밀어붙이는 힘`},express:{ko:`표현·창작`,desc:`드러내고 말하고 만들어내는 힘`},mind:{ko:`분석·탐구`,desc:`꿰뚫어 보고 깊이 생각하는 힘`},stable:{ko:`안정·신뢰`,desc:`지키고 쌓고 믿음을 주는 힘`},heart:{ko:`관계·공감`,desc:`사람을 잇고 마음을 읽는 힘`},feel:{ko:`감성·직관`,desc:`보이지 않는 것을 느끼는 힘`},free:{ko:`자유·이동`,desc:`움직이고 넓어지며 바뀌는 힘`},wealth:{ko:`현실·재물`,desc:`현실을 다루고 결실을 거두는 힘`}},k={self:[`lead`,`free`],output:[`express`,`heart`],wealth:[`wealth`,`stable`],officer:[`stable`,`lead`],resource:[`mind`,`feel`]},A={Aries:`양자리`,Taurus:`황소자리`,Gemini:`쌍둥이자리`,Cancer:`게자리`,Leo:`사자자리`,Virgo:`처녀자리`,Libra:`천칭자리`,Scorpio:`전갈자리`,Sagittarius:`궁수자리`,Capricorn:`염소자리`,Aquarius:`물병자리`,Pisces:`물고기자리`},j={Sun:`태양`,Moon:`달`,Mercury:`수성`,Venus:`금성`,Mars:`화성`,Jupiter:`목성`,Saturn:`토성`,Uranus:`천왕성`,Neptune:`해왕성`,Pluto:`명왕성`,Chiron:`키론`,NorthNode:`북교점`,SouthNode:`남교점`,Fortuna:`행운점`},M=`modulepreload`,N=function(e,t){return new URL(e,t).href},P={},F=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=N(t,n),t=s(t),t in P)return;P[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:M,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},I=()=>F(()=>import(`./analyze-SKiSKRXj.js`),[],import.meta.url),L=(e,t=document)=>t.querySelector(e),R=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),z={get(e){try{return JSON.parse(localStorage.getItem(e))}catch{return null}},set(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},B=new Map(e.map(e=>[n(e),e]));function V(){L(`#city-list`).innerHTML=[...B.keys()].map(e=>`<option value="${R(e)}"></option>`).join(``);let e=L(`#birth-form`),r=e.elements.unknownTime;r.addEventListener(`change`,()=>{e.elements.time.disabled=r.checked});let i=z.get(`ts:last`);if(i){for(let t of[`name`,`date`,`time`,`city`])i[t]&&(e.elements[t].value=i[t]);r.checked=!!i.unknownTime,e.elements.time.disabled=r.checked,i.gender&&(e.querySelector(`input[name=gender][value=${i.gender}]`).checked=!0)}e.addEventListener(`submit`,async r=>{r.preventDefault();let i=L(`#form-error`);i.textContent=``;let a=e.elements;if(!a.date.value){i.textContent=`생년월일을 입력해주세요.`,a.date.focus();return}let[o,s,c]=a.date.value.split(`-`).map(Number);if(o<1920||o>2026){i.textContent=`1920년~2026년 사이로 입력해주세요.`;return}let l=a.unknownTime.checked,[u,d]=l?[12,0]:(a.time.value||`12:00`).split(`:`).map(Number),f=B.get(a.city.value.trim())||(a.city.value.trim()===``||a.city.value.trim()===`서울`?t:null);if(!f){i.textContent=`목록에 있는 국내 도시를 선택해주세요.`,a.city.focus();return}let p=e.querySelector(`input[name=gender]:checked`).value,m=a.name.value.trim()||`당신`,h=e.querySelector(`button[type=submit]`);h.disabled=!0,h.textContent=`계산 중…`;try{let e={year:o,month:s,day:c,hour:u,minute:d,gender:p,unknownTime:l,latitude:f.lat,longitude:f.lon,timezone:`Asia/Seoul`},{analyze:t,composeReport:r}=await I(),i=await t(e);i.name=m,i.cityName=n(f),i.reportHtml=r(i),i.form={name:a.name.value.trim(),date:a.date.value,time:a.time.value,unknownTime:l,gender:p,city:a.city.value.trim()||`서울`},z.set(`ts:last`,i.form),re(i)}catch(e){console.error(e),i.textContent=`계산 중 문제가 생겼어요. 입력값을 확인하고 다시 시도해주세요.`}finally{h.disabled=!1,h.textContent=`결과 보기`}})}var H={wood:`성장과 시작의 기운`,fire:`표현과 열정의 기운`,earth:`안정과 중재의 기운`,metal:`결단과 정리의 기운`,water:`지혜와 유연함의 기운`},U=[`시주`,`일주`,`월주`,`연주`],W=(e,t,n)=>{let r=e.charCodeAt(e.length-1);return r>=44032&&r<=55203&&(r-44032)%28?t:n},G=e=>`${s[e].ko}(${s[e].hanja})`,K={tree:`木`,wood:`木`,fire:`火`,earth:`土`,metal:`金`,water:`水`},q=e=>String(e).replace(/\b(tree|wood|fire|earth|metal|water)\b/g,e=>K[e]);function J(e){return e.split(``).map(e=>a[e]||o[e]||e).join(``)}function Y(e){return e.split(``).map(e=>{let t=r[e]||i[e];return t?`<span style="color:${s[t].color}">${e}</span>`:`<span class="unk">${R(e)}</span>`}).join(``)}function X(e){let t=d[e.saju.dayStem],n=[`${f[e.saju.monthBranch]}에 태어난 ${t.image}`];return e.ziwei?.mingStars.length&&n.push(S[e.ziwei.mingStars[0].name].title),n.push(`${A[e.natal.sun.sign]}의 태양`),n}function Z(e){let t=e.saju,n=d[t.dayStem],o=e.input.unknownTime,l=t.pillars.map((e,t)=>{let n=o&&t===0;return`<div class="pillar ${t===1?`day`:``}">
      <div class="lbl">${U[t]}</div>
      <div class="ss">${n?`—`:R(m[e.stemSipsin]||e.stemSipsin)}</div>
      <div class="gz">${n?`<span class="unk">??</span>`:Y(e.pillar.ganzi)}</div>
      <div class="ss">${n?`—`:R(m[e.branchSipsin]||e.branchSipsin)}</div>
    </div>`}).join(``),u=Math.max(...Object.values(t.counts),1),g=c.map(e=>`<div class="el-bar"><span>${s[e].ko} ${s[e].hanja}</span><div class="track"><div class="fill" style="width:${t.counts[e]/u*100}%;background:${s[e].color}"></div></div><span>${t.counts[e]}</span></div>`).join(``),_=c.filter(e=>t.counts[e]===0),v={strong:`나를 돕는 기운이 많은 <b>신강(身強)</b> 명식입니다. 에너지가 넘치는 만큼, 그 힘을 밖으로 써야 풀립니다. 가만히 있으면 답답해지는 타입이에요.`,weak:`나를 돕는 기운이 적은 <b>신약(身弱)</b> 명식입니다. 감각이 예민하고 주변의 영향을 잘 받아요. 나를 받쳐주는 사람과 환경을 고르는 것이 중요합니다.`,balanced:`나를 돕는 기운과 쓰는 기운이 비슷한 <b>중화(中和)</b>에 가까운 명식입니다. 어느 한쪽으로 치우치지 않아 상황 적응력이 좋아요.`}[t.strength],y=new Map;for(let e of t.relations){let t=`${e.a},${e.b},${e.chars}`;y.has(t)||y.set(t,{...e,types:[]}),y.get(t).types.push(e.type+(e.detail?`(${q(e.detail)})`:``))}let b=[...y.values()].map(e=>{let t=e.types.every(e=>e.includes(`合`)),n=`${U[e.a].slice(0,1)}·${U[e.b].slice(0,1)}`;return`<span class="chip ${t?`good`:`warn`}">${R(e.chars)} ${R(e.types.join(`·`))} <small>${n}</small></span>`});for(let e of[...t.triple,...t.directional])b.push(`<span class="chip good">${R(e.type)}${e.detail?` ${R(q(e.detail))}`:``}</span>`);let x=``;if(t.current){let e=p[t.current.stemSipsin],n=r[t.current.ganzi[0]],a=i[t.current.ganzi[1]],o=n===t.yongsin||a===t.yongsin?`명식에 가장 필요한 기운이 들어와 있어 <b>순풍</b>에 가까운 시기예요.`:`필요한 기운과는 결이 달라, 크게 벌리기보다 다지는 쪽이 유리한 시기예요.`,s=new Date(t.current.startDate).getFullYear();x=`<p><b>지금의 10년</b> — ${t.current.ganzi}(${J(t.current.ganzi)}) 대운, ${s}년부터. ${h[e].theme}${W(h[e].theme,`이`,`가`)} 주제가 되는 흐름입니다. ${o}</p>`}return`<div class="card block">
    <h3><span class="sys-tag">四柱</span> 사주팔자 <small>${t.dayStem}${a[t.dayStem]} 일간</small></h3>
    <div class="pillars">${l}</div>
    <div class="el-bars">${g}</div>
    <div class="prose">
      <p><b>${f[t.monthBranch]}에 태어난 ${n.image}</b> — ${n.core}</p>
      <p>${v}</p>
      <p>이 명식에 가장 필요한 기운은 <b>${G(t.yongsin)}</b>, ${H[t.yongsin]}입니다.${t.johu&&t.johu!==t.yongsin?` 계절의 온도를 맞추는 ${G(t.johu)}도 보조로 필요해요.`:``}${_.length?` 명식에 ${_.map(e=>s[e].ko).join(`·`)}${W(s[_[_.length-1]].ko,`이`,`가`)} 없어서, 그 기운을 가진 사람과 환경에서 채우게 됩니다.`:` 다섯 기운이 모두 갖춰진 오행구전(五行俱全) 명식이에요.`}</p>
      ${x}
    </div>
    ${b.length?`<div class="chips">${b.join(``)}</div>`:``}
    <p class="fine">신강·용신은 간이 판정입니다. 정밀 분석은 매칭 베타에서 제공됩니다.</p>
  </div>`}var Q=[[`巳`,`午`,`未`,`申`],[`辰`,null,null,`酉`],[`卯`,null,null,`戌`],[`寅`,`丑`,`子`,`亥`]];function te(e){if(!e.ziwei)return`<div class="card block"><h3><span class="sys-tag">紫微</span> 자미두수</h3><p class="prose">자미두수는 태어난 시각(시진)으로 명궁을 정하기 때문에, 시각을 모르면 명반을 세울 수 없어요. 대략적인 시간대라도 알게 되면 다시 계산해보세요.</p></div>`;let t=e.ziwei,n=Object.fromEntries(Object.values(t.raw.palaces).map(e=>[e.zhi,e])),r=e=>{let t=n[e],r=t.stars.filter(e=>S[e.name]),i=t.stars.filter(e=>!S[e.name]),a=e=>e.siHua?`<span class="hua ${e.siHua===`化祿`?`lu`:``}">${e.siHua.slice(1)}</span>`:``;return`<div class="palace ${t.name===`命宮`?`ming`:``} ${t.isShenGong?`shen`:``}">
      <div class="pn">${y[t.name].ko.replace(`궁`,``)}${t.isShenGong?`·身`:``}<i>${t.ganZhi}</i></div>
      <div class="main">${r.length?r.map(e=>`${e.name}<small>${e.brightness||``}</small>${a(e)}`).join(`<br>`):`<span style="color:var(--muted)">공궁</span>`}</div>
      <div class="aux">${i.map(e=>e.name+(e.siHua?a(e):``)).join(` `)}</div>
    </div>`},i=``;for(let e=0;e<4;e++)for(let n=0;n<4;n++){let a=Q[e][n];a?i+=r(a):e===1&&n===1&&(i+=`<div class="mp-center"><strong>${t.raw.wuXingJu.name}</strong><span>음력 ${t.raw.lunarYear}.${t.raw.lunarMonth}.${t.raw.lunarDay}${t.raw.isLeapMonth?`(윤)`:``}</span><span>명궁 ${t.raw.mingGongZhi} · 신궁 ${t.raw.shenGongZhi}</span></div>`)}let a=t.mingStars.map(e=>`<b>${e.name}(${S[e.name].ko}) — ${S[e.name].title}</b>${e.brightness?` · ${w[e.brightness]||e.brightness}`:``}. ${S[e.name].mine}`).join(`</p><p>`),o=t.borrowed?`<p>명궁이 비어 있는 <b>공궁</b>이라, 맞은편 천이궁(바깥·이동)의 별을 빌려옵니다. 한자리에 머물기보다 <b>밖으로 나가고 사람을 만나며 정체성이 완성</b>되는 사람이에요.</p>`:``,s=t.shen?`<p>인생의 무게중심인 <b>신궁(身宮)이 ${y[t.shen.name].ko}</b>에 있습니다. 나이가 들수록 <b>${y[t.shen.name].area}</b> 쪽이 삶의 중심이 돼요.</p>`:``,c=t.sihua.map(e=>`<span class="chip ${e.hua===`化忌`?`warn`:`good`}">${e.star} ${ee[e.hua]} → ${y[e.palace].area}</span>`).join(``),l=t.currentDaxian?`<p><b>지금의 10년</b> — ${t.currentDaxian.ageStart}~${t.currentDaxian.ageEnd}세, ${y[t.currentDaxian.palaceName].ko} 대한. ${x[t.currentDaxian.palaceName]}입니다.</p>`:``;return`<div class="card block">
    <h3><span class="sys-tag">紫微</span> 자미두수 <small>${t.raw.wuXingJu.name}</small></h3>
    <div class="mingpan">${i}</div>
    <div class="prose" style="margin-top:16px">
      ${o}<p>${a}</p>${s}${l}
    </div>
    <div class="chips">${c}</div>
  </div>`}function ne(e){let t=e.natal,n=e.input.unknownTime,r=T[t.sun.sign],i=T[t.moon.sign],a=`<div class="big3">
    <div><div class="sym">☉</div><div class="sg">태양 ${A[t.sun.sign]}</div><p>${r.sun}</p></div>
    <div><div class="sym">☽</div><div class="sg">달 ${A[t.moon.sign]}${n?` <small style="color:var(--muted)">(추정)</small>`:``}</div><p>${i.moon}</p></div>
    <div><div class="sym">ASC</div><div class="sg">${t.asc?`상승궁 ${A[t.asc.sign]}`:`상승궁 —`}</div><p>${t.asc?T[t.asc.sign].asc:`태어난 시각이 있어야 계산됩니다`}</p></div>
  </div>`,o=Object.entries(t.elCount).sort((e,t)=>t[1]-e[1]),s=o.filter(([,e])=>e===0).map(([e])=>E[e]),c=`개인 행성 7개 중 <b>${E[o[0][0]]}</b> 원소가 ${o[0][1]}개로 가장 많${s.length?`고, <b>${s.join(`·`)}</b> 원소는 없어요.`:`아요.`}`,l=t.soft>t.hard?`좋은 각도 ${t.soft}개, 거친 각도 ${t.hard}개. 전체적으로 <b>잘 흐르는 차트</b>예요. 재능이 비교적 자연스럽게 발휘됩니다.`:t.soft===0?`좋은 각도 0개, 거친 각도 ${t.hard}개. <b>거저 얻는 것이 없는 차트</b>입니다. 대신 힘을 줘서 얻은 것은 단단하게 내 것이 돼요.`:`좋은 각도 ${t.soft}개, 거친 각도 ${t.hard}개. <b>긴장이 동력이 되는 차트</b>예요. 부딪히면서 성장하는 타입입니다.`,u=t.stellium.map(e=>`<p><b>${e.house}하우스(${D[e.house]})에 행성 ${e.count}개</b>가 모여 있습니다. 이 영역이 인생의 큰 주제예요.</p>`).join(``),d=t.raw.planets.filter(e=>![`SouthNode`,`Fortuna`].includes(e.id)).map(e=>`<tr><td>${j[e.id]}</td><td>${A[e.sign]} ${e.degreeInSign.toFixed(1)}°${e.isRetrograde?` ℞`:``}</td><td>${!n&&e.house?`${e.house}하우스`:``}</td></tr>`).join(``);return`<div class="card block">
    <h3><span class="sys-tag">☉☽</span> 서양점성술 <small>Placidus</small></h3>
    ${a}
    <div class="prose"><p>${c} ${l}</p>${u}<p><b>금성 ${A[t.venus.sign]}</b> — ${T[t.venus.sign].venus}.</p></div>
    <details><summary class="fine" style="cursor:pointer">행성 위치 전체 보기</summary><table class="planet-table">${d}</table></details>
  </div>`}function re(e){let t=L(`#result`),n=X(e),r=e.cross.shared,i=r.length?`세 체계가 공통으로 가리키는 건 <b>${r.slice(0,2).map(e=>e.ko).join(`</b>과 <b>`)}</b>입니다.`:`세 체계가 서로 다른 면을 비추는, 입체적인 명식입니다.`,a=e.input,o=new Date,s=e.name&&e.name!==`당신`?`${R(e.name)}님의`:`나의`;t.innerHTML=`
    <div class="print-only print-head"><strong>사-자-서로 보는 운명</strong><span>${o.getFullYear()}.${o.getMonth()+1}.${o.getDate()} 작성</span></div>
    <div class="result-head">
      <p class="eyebrow">${s} 명식으로 읽는 삶</p>
      <p class="identity">${n.map(R).join(` · `)}</p>
      <p class="prose">${i}</p>
      <p class="meta">${a.year}.${a.month}.${a.day} ${a.unknownTime?`시각 모름`:`${String(a.hour).padStart(2,`0`)}:${String(a.minute).padStart(2,`0`)}`} · ${a.gender===`M`?`남`:`여`} · ${R(e.cityName)}</p>
    </div>
    <article class="card report">${e.reportHtml}</article>
    <details class="raw">
      <summary>명식 원자료 보기 — 사주 기둥 · 자미두수 명반 · 행성 위치</summary>
      ${Z(e)}
      ${te(e)}
      ${ne(e)}
    </details>
    <div class="actions">
      <button class="btn" id="pdf-btn" type="button">PDF로 저장</button>
      <button class="btn btn-line" id="share-btn" type="button">친구에게 공유하기</button>
      <a class="btn btn-line" href="#start">다른 생년월일로 보기</a>
    </div>`,t.hidden=!1,L(`#share-btn`).onclick=oe,L(`#pdf-btn`).onclick=()=>ie(e),t.scrollIntoView({behavior:`smooth`,block:`start`})}function ie(e){let t=document.title,n=e.input;document.title=`${e.name===`당신`?``:`${e.name}_`}사자서_${n.year}${String(n.month).padStart(2,`0`)}${String(n.day).padStart(2,`0`)}`;let r=[...document.querySelectorAll(`#result details`)],i=r.map(e=>e.open);r.forEach(e=>{e.open=!0});let a=()=>{document.title=t,r.forEach((e,t)=>{e.open=i[t]}),removeEventListener(`afterprint`,a)};addEventListener(`afterprint`,a),window.print()}function $(e){let t=L(`.toast`);t||(t=document.createElement(`div`),t.className=`toast`,document.body.appendChild(t)),t.textContent=e,t.classList.add(`show`),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove(`show`),1800)}async function ae(e,t){try{await navigator.clipboard.writeText(e),$(t)}catch{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),$(t)}catch{$(`복사에 실패했어요`)}n.remove()}}async function oe(){let e={title:`사-자-서로 보는 운명`,text:`사주·자미두수·점성술 세 가지로 함께 보는 내 성향과 5년 흐름 →`,url:`${location.origin}${location.pathname}`};if(navigator.share)try{await navigator.share(e);return}catch{}ae(`${e.text} ${e.url}`,`공유 링크를 복사했어요`)}V(),(window.requestIdleCallback||(e=>setTimeout(e,1500)))(()=>I());export{S as _,u as a,O as b,l as c,y as d,b as f,p as g,T as h,_ as i,k as l,f as m,i as n,d as o,v as p,o as r,c as s,C as t,g as u,r as v,a as y};