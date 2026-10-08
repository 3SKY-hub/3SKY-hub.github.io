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
`).map(e=>{let[t,n,r]=e.trim().split(/\s+/);return{name:t,lat:Number(n),lon:Number(r)}}),t=e[0],n=e=>e.name,r={甲:`wood`,乙:`wood`,丙:`fire`,丁:`fire`,戊:`earth`,己:`earth`,庚:`metal`,辛:`metal`,壬:`water`,癸:`water`},i={寅:`wood`,卯:`wood`,巳:`fire`,午:`fire`,辰:`earth`,戌:`earth`,丑:`earth`,未:`earth`,申:`metal`,酉:`metal`,亥:`water`,子:`water`},a=[`wood`,`fire`,`earth`,`metal`,`water`],o={wood:`fire`,fire:`earth`,earth:`metal`,metal:`water`,water:`wood`},s={wood:`earth`,earth:`water`,water:`fire`,fire:`metal`,metal:`wood`},c={甲:{image:`큰 나무`,core:`곧게 위로 자라려는 사람. 원칙이 분명하고, 한번 정한 방향은 쉽게 꺾지 않습니다. 사람들 사이에서 자연스럽게 기둥 역할을 맡아요.`,love:`상대를 품어주고 이끌어주려 합니다. 다만 자기 방식이 옳다고 믿는 순간이 많아, 상대에게 숨 쉴 틈을 주는 연습이 필요해요.`},乙:{image:`풀과 덩굴`,core:`부드럽게 휘어지되 끝내 살아남는 사람. 눈치가 빠르고 관계 속에서 길을 찾는 능력이 탁월합니다.`,love:`상대에게 맞춰주는 섬세함이 있어요. 대신 기댈 수 있는 단단한 사람을 만났을 때 가장 빛납니다.`},丙:{image:`한낮의 태양`,core:`밝고 숨김없는 사람. 있는 그대로 드러내고, 주변을 환하게 만드는 에너지가 있습니다. 공정함에 민감해요.`,love:`표현이 시원하고 따뜻합니다. 관심이 식으면 금방 티가 나는 편이라, 꾸준함이 관계의 열쇠예요.`},丁:{image:`밤의 등불`,core:`조용히 한 곳을 비추는 사람. 집중력과 섬세한 감각이 있고, 가까운 사람에게 깊이 헌신합니다.`,love:`소수에게 깊게 마음을 줍니다. 겉은 담담해도 속의 온도가 높아서, 그 온도를 알아봐주는 사람과 맞아요.`},戊:{image:`큰 산`,core:`묵직하고 믿음직한 사람. 쉽게 흔들리지 않고, 맡은 건 끝까지 지킵니다. 대신 한번 굳은 생각은 잘 안 바뀌어요.`,love:`말보다 존재로 곁을 지키는 타입입니다. 표현이 적어 오해받기 쉬우니, 작은 말 한마디가 큰 차이를 만들어요.`},己:{image:`기름진 논밭`,core:`무엇이든 키워내는 사람. 실용적이고 꼼꼼하며, 사람과 일을 정성껏 가꿉니다. 속으로 생각이 많아요.`,love:`상대를 챙기고 돌보는 데 능합니다. 자기 마음은 뒤로 미루는 버릇이 있어, 받는 연습도 필요해요.`},庚:{image:`바위와 원석`,core:`결단력 있고 의리 있는 사람. 옳고 그름이 분명하고, 일을 맺고 끊는 힘이 강합니다.`,love:`한번 내 사람이면 끝까지 갑니다. 표현이 직선적이라, 부드러움을 아는 상대와 균형이 맞아요.`},辛:{image:`다듬어진 보석`,core:`예민하고 정교한 사람. 미적 감각과 기준이 높고, 자기만의 결이 뚜렷합니다. 상처도 오래 기억해요.`,love:`섬세한 배려를 알아보고, 또 그만큼을 원합니다. 거친 말에 쉽게 닫히니 말의 온도가 맞는 사람이 좋아요.`},壬:{image:`큰 강과 바다`,core:`넓고 깊게 흐르는 사람. 지혜롭고 포용력이 크며, 한곳에 머물기보다 움직이며 넓어집니다.`,love:`자유로운 관계를 선호합니다. 구속보다 신뢰로 묶일 때 오래 가요.`},癸:{image:`봄비와 이슬`,core:`스며드는 사람. 직관이 뛰어나고 감수성이 깊으며, 보이지 않는 곳에서 사람을 살립니다.`,love:`조용히 상대를 적셔주는 사랑을 합니다. 마음을 말로 꺼내기 어려워해서, 먼저 물어봐주는 사람과 잘 맞아요.`}},l={寅:`이른 봄`,卯:`한봄`,辰:`늦봄`,巳:`초여름`,午:`한여름`,未:`늦여름`,申:`초가을`,酉:`한가을`,戌:`늦가을`,亥:`초겨울`,子:`한겨울`,丑:`늦겨울`},u={比肩:`self`,劫財:`self`,食神:`output`,傷官:`output`,偏財:`wealth`,正財:`wealth`,偏官:`officer`,正官:`officer`,偏印:`resource`,正印:`resource`},d={子:`丑`,丑:`子`,寅:`亥`,亥:`寅`,卯:`戌`,戌:`卯`,辰:`酉`,酉:`辰`,巳:`申`,申:`巳`,午:`未`,未:`午`},f={子:`午`,午:`子`,丑:`未`,未:`丑`,寅:`申`,申:`寅`,卯:`酉`,酉:`卯`,辰:`戌`,戌:`辰`,巳:`亥`,亥:`巳`},p=[[`申`,`子`,`辰`],[`亥`,`卯`,`未`],[`寅`,`午`,`戌`],[`巳`,`酉`,`丑`]],m={命宮:{ko:`명궁`,area:`나 자신`},兄弟:{ko:`형제궁`,area:`형제·동료`},夫妻:{ko:`부처궁`,area:`배우자·연인`},子女:{ko:`자녀궁`,area:`자녀·후배`},財帛:{ko:`재백궁`,area:`돈 버는 방식`},疾厄:{ko:`질액궁`,area:`몸과 건강`},遷移:{ko:`천이궁`,area:`바깥·이동`},交友:{ko:`교우궁`,area:`사람들·인맥`},官祿:{ko:`관록궁`,area:`일·커리어`},田宅:{ko:`전택궁`,area:`집·자산`},福德:{ko:`복덕궁`,area:`마음·즐거움`},父母:{ko:`부모궁`,area:`부모·윗사람`}},h={命宮:`遷移`,遷移:`命宮`,兄弟:`交友`,交友:`兄弟`,夫妻:`官祿`,官祿:`夫妻`,子女:`田宅`,田宅:`子女`,財帛:`福德`,福德:`財帛`,疾厄:`父母`,父母:`疾厄`},g={紫微:{ko:`자미`,title:`제왕의 별`,mine:`자존감이 높고 품위가 있습니다. 사람들이 자연스럽게 따르고, 스스로도 무대 가운데를 원해요.`,partner:`격이 있고 자기 세계가 뚜렷한 사람`,tags:[`lead`,`stable`]},天機:{ko:`천기`,title:`지혜의 별`,mine:`머리 회전이 빠르고 기획력이 좋습니다. 변화를 먼저 감지하지만, 생각이 많아 결정이 늦어지기도 해요.`,partner:`머리 좋고 대화가 통하는 사람`,tags:[`mind`,`free`]},太陽:{ko:`태양`,title:`태양의 별`,mine:`베풀고 드러내는 사람. 공적인 자리에서 빛나고, 명예와 평판을 중요하게 여깁니다.`,partner:`밝고 사회적으로 활발한 사람`,tags:[`express`,`lead`]},武曲:{ko:`무곡`,title:`재물과 결단의 별`,mine:`실행력과 돈 감각이 있습니다. 강단 있게 밀어붙이지만, 표현은 무뚝뚝한 편이에요.`,partner:`능력 있고 결단력 있는 사람`,tags:[`wealth`,`lead`]},天同:{ko:`천동`,title:`복의 별`,mine:`온화하고 여유가 있습니다. 즐거움을 찾을 줄 알고, 사람을 편하게 해줘요.`,partner:`다정하고 편안한 사람`,tags:[`heart`,`feel`]},廉貞:{ko:`염정`,title:`원칙과 열정의 별`,mine:`복잡한 매력을 가진 사람. 규칙을 중시하면서도 감정의 온도가 높습니다.`,partner:`강렬하고 매력이 분명한 사람`,tags:[`lead`,`heart`]},天府:{ko:`천부`,title:`창고의 별`,mine:`안정적이고 관리 능력이 뛰어납니다. 포용력이 크고, 지키는 데 강해요.`,partner:`안정감 있고 든든한 사람`,tags:[`stable`,`wealth`]},太陰:{ko:`태음`,title:`달의 별`,mine:`섬세하고 감성적입니다. 조용히 모으고 쌓는 힘이 있어요.`,partner:`섬세하고 조용한 사람`,tags:[`feel`,`wealth`]},貪狼:{ko:`탐랑`,title:`욕망과 재주의 별`,mine:`다재다능하고 사교적입니다. 매력이 있고 하고 싶은 게 많아요.`,partner:`재미있고 매력적인 사람`,tags:[`express`,`heart`]},巨門:{ko:`거문`,title:`말과 분석의 별`,mine:`언변과 분석력이 좋습니다. 날카롭게 꿰뚫어 보지만, 말이 구설이 되기도 해요.`,partner:`말이 잘 통하고 깊이 있는 사람`,tags:[`mind`,`express`]},天相:{ko:`천상`,title:`도장의 별`,mine:`성실하고 조율에 능합니다. 사람 사이를 이어주고 신뢰를 쌓아요.`,partner:`성실하고 믿을 수 있는 사람`,tags:[`stable`,`heart`]},天梁:{ko:`천량`,title:`어른의 별`,mine:`보호하고 조언하는 사람. 원칙이 있고, 나이보다 성숙합니다.`,partner:`어른스럽고 나를 보살펴주는 사람`,tags:[`stable`,`mind`]},七殺:{ko:`칠살`,title:`장군의 별`,mine:`돌파력과 독립심이 강합니다. 승부를 즐기고, 남의 밑에 오래 있지 못해요.`,partner:`독립적이고 추진력 있는 사람`,tags:[`lead`,`free`]},破軍:{ko:`파군`,title:`개척의 별`,mine:`부수고 새로 짓는 사람. 변화를 두려워하지 않고, 익숙한 것을 깨며 성장합니다.`,partner:`변화를 즐기고 모험적인 사람`,tags:[`free`,`lead`]}},_={文昌:[`mind`,`express`],文曲:[`express`,`feel`],天馬:[`free`],祿存:[`wealth`],左輔:[`heart`],右弼:[`heart`],天魁:[`lead`],天鉞:[`heart`]},v={Aries:{el:`fire`,sun:`먼저 시작하는 사람. 직진하고, 도전 앞에서 살아납니다`,moon:`마음이 빠르게 끓고 빠르게 식어요. 솔직한 감정 표현이 편합니다`,asc:`활기차고 시원시원한 첫인상`,venus:`설렘과 직진을 사랑합니다`,tags:[`lead`,`free`]},Taurus:{el:`earth`,sun:`천천히, 확실하게 쌓는 사람. 감각이 좋고 안정을 지킵니다`,moon:`익숙함과 몸의 편안함에서 안정을 느껴요`,asc:`온화하고 느긋한 첫인상`,venus:`변치 않는 꾸준함을 사랑합니다`,tags:[`stable`,`wealth`]},Gemini:{el:`air`,sun:`호기심으로 사는 사람. 말과 정보, 연결에 강합니다`,moon:`대화하고 생각을 나눌 때 마음이 풀려요`,asc:`재치 있고 가벼운 첫인상`,venus:`대화가 통하는 사람에게 빠집니다`,tags:[`mind`,`express`]},Cancer:{el:`water`,sun:`지키고 돌보는 사람. 가족과 내 사람이 중심입니다`,moon:`안전한 울타리 안에서 마음이 놓여요`,asc:`부드럽고 다정한 첫인상`,venus:`보살핌과 정서적 안정을 사랑합니다`,tags:[`feel`,`heart`]},Leo:{el:`fire`,sun:`빛나고 싶은 사람. 당당하고 너그러우며 무대를 압니다`,moon:`인정받고 사랑받는다고 느낄 때 편해요`,asc:`존재감 있고 화사한 첫인상`,venus:`특별하게 대우받는 사랑을 원합니다`,tags:[`express`,`lead`]},Virgo:{el:`earth`,sun:`정리하고 다듬는 사람. 꼼꼼하고 쓸모 있는 것을 만듭니다`,moon:`해야 할 일이 정돈되어 있을 때 마음이 편해요`,asc:`단정하고 신중한 첫인상`,venus:`작은 배려와 실질적인 도움으로 사랑을 느낍니다`,tags:[`mind`,`stable`]},Libra:{el:`air`,sun:`균형을 맞추는 사람. 관계와 조화, 아름다움을 중시합니다`,moon:`갈등 없이 조화로울 때 마음이 놓여요`,asc:`세련되고 친절한 첫인상`,venus:`대등하고 우아한 관계를 사랑합니다`,tags:[`heart`,`express`]},Scorpio:{el:`water`,sun:`깊이 파고드는 사람. 강렬하고, 한번 정하면 끝까지 갑니다`,moon:`깊게 신뢰할 수 있는 소수 앞에서만 마음을 열어요`,asc:`조용하지만 강렬한 첫인상`,venus:`전부를 거는 깊은 사랑을 원합니다`,tags:[`mind`,`feel`]},Sagittarius:{el:`fire`,sun:`멀리 보는 사람. 자유와 의미, 넓은 세계를 찾습니다`,moon:`구속 없이 움직일 수 있을 때 마음이 편해요`,asc:`밝고 개방적인 첫인상`,venus:`함께 모험하는 친구 같은 사랑을 원합니다`,tags:[`free`,`express`]},Capricorn:{el:`earth`,sun:`오래 올라가는 사람. 책임감 있고 결과로 증명합니다`,moon:`통제할 수 있고 계획대로일 때 안정을 느껴요`,asc:`차분하고 어른스러운 첫인상`,venus:`믿을 수 있고 미래가 보이는 관계를 사랑합니다`,tags:[`stable`,`wealth`]},Aquarius:{el:`air`,sun:`자기만의 길을 가는 사람. 독립적이고 새로운 생각을 합니다`,moon:`혼자만의 공간이 보장될 때 마음이 편해요`,asc:`독특하고 쿨한 첫인상`,venus:`친구처럼 자유로운 사랑을 원합니다`,tags:[`free`,`mind`]},Pisces:{el:`water`,sun:`느끼고 스며드는 사람. 공감력과 상상력이 깊습니다`,moon:`감정을 있는 그대로 받아줄 때 마음이 놓여요`,asc:`몽환적이고 부드러운 첫인상`,venus:`헌신적이고 낭만적인 사랑을 원합니다`,tags:[`feel`,`heart`]}},y={lead:{ko:`리더십·추진`,desc:`앞에서 판을 이끌고 밀어붙이는 힘`},express:{ko:`표현·창작`,desc:`드러내고 말하고 만들어내는 힘`},mind:{ko:`분석·탐구`,desc:`꿰뚫어 보고 깊이 생각하는 힘`},stable:{ko:`안정·신뢰`,desc:`지키고 쌓고 믿음을 주는 힘`},heart:{ko:`관계·공감`,desc:`사람을 잇고 마음을 읽는 힘`},feel:{ko:`감성·직관`,desc:`보이지 않는 것을 느끼는 힘`},free:{ko:`자유·이동`,desc:`움직이고 넓어지며 바뀌는 힘`},wealth:{ko:`현실·재물`,desc:`현실을 다루고 결실을 거두는 힘`}},b={self:[`lead`,`free`],output:[`express`,`heart`],wealth:[`wealth`,`stable`],officer:[`stable`,`lead`],resource:[`mind`,`feel`]},x=`modulepreload`,S=function(e,t){return new URL(e,t).href},C={},w=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=S(t,n),t=s(t),t in C)return;C[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:x,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},T=()=>w(()=>import(`./analyze-CgDPPflD.js`),[],import.meta.url),E=(e,t=document)=>t.querySelector(e),D=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),O={get(e){try{return JSON.parse(localStorage.getItem(e))}catch{return null}},set(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},k=null,A=new Map(e.map(e=>[n(e),e]));function j(e,n){let r=e.elements;if(!r.date.value)return n.textContent=`생년월일을 입력해주세요.`,r.date.focus(),null;let[i,a,o]=r.date.value.split(`-`).map(Number);if(i<1920||i>2026)return n.textContent=`1920년~2026년 사이로 입력해주세요.`,null;let s=r.unknownTime.checked,[c,l]=s?[12,0]:(r.time.value||`12:00`).split(`:`).map(Number),u=r.city.value.trim(),d=A.get(u)||(u===``||u===`서울`?t:null);return d?{input:{year:i,month:a,day:o,hour:c,minute:l,gender:e.querySelector(`input[name=gender]:checked`).value,unknownTime:s,latitude:d.lat,longitude:d.lon,timezone:`Asia/Seoul`},city:d,name:r.name.value.trim()}:(n.textContent=`목록에 있는 국내 도시를 선택해주세요.`,r.city.focus(),null)}function M(){E(`#city-list`).innerHTML=[...A.keys()].map(e=>`<option value="${D(e)}"></option>`).join(``);let e=E(`#birth-form`),t=e.elements.unknownTime;t.addEventListener(`change`,()=>{e.elements.time.disabled=t.checked});let r=O.get(`ts:last`);if(r){for(let t of[`name`,`date`,`time`,`city`])r[t]&&(e.elements[t].value=r[t]);t.checked=!!r.unknownTime,e.elements.time.disabled=t.checked,r.gender&&(e.querySelector(`input[name=gender][value=${r.gender}]`).checked=!0)}e.addEventListener(`submit`,async t=>{t.preventDefault();let r=E(`#form-error`);r.textContent=``;let i=e.elements,a=j(e,r);if(!a)return;let{input:o,city:s}=a,c=a.name||`당신`,{unknownTime:l,gender:u}=o,d=e.querySelector(`button[type=submit]`);d.disabled=!0,d.textContent=`계산 중…`;try{let{analyze:e,composeReport:t}=await T(),r=await e(o);r.name=c,r.cityName=n(s),r.reportHtml=t(r),r.form={name:i.name.value.trim(),date:i.date.value,time:i.time.value,unknownTime:l,gender:u,city:i.city.value.trim()||`서울`},k=r,O.set(`ts:last`,r.form),N(r)}catch(e){console.error(e),r.textContent=`계산 중 문제가 생겼어요. 입력값을 확인하고 다시 시도해주세요.`}finally{d.disabled=!1,d.textContent=`결과 보기`}})}function N(e){let t=E(`#result`),n=c[e.saju.dayStem],r=n.image.includes(`의 `)?`${l[e.saju.monthBranch]}에 태어난 ${n.image}`:`${l[e.saju.monthBranch]}의 ${n.image}`,i=e.cross.shared,a=i.length?`여러 각도에서 공통으로 보이는 건 <b>${i.slice(0,2).map(e=>D(e.ko)).join(`</b>과 <b>`)}</b>입니다.`:`보는 각도마다 다른 면이 드러나는 입체적인 사람입니다.`,o=e.input,s=new Date,u=e.name&&e.name!==`당신`?`${D(e.name)}님의`:`나의`;t.innerHTML=`
    <div class="print-only print-head"><strong>사-자-서로 보는 운명</strong><span>${s.getFullYear()}.${s.getMonth()+1}.${s.getDate()} 작성</span></div>
    <div class="result-head">
      <p class="eyebrow">${u} 삶 읽기</p>
      <p class="identity">${D(r)} 같은 사람</p>
      <p class="prose">${a}</p>
      <p class="meta">${o.year}.${o.month}.${o.day} ${o.unknownTime?`시각 모름`:`${String(o.hour).padStart(2,`0`)}:${String(o.minute).padStart(2,`0`)}`} · ${o.gender===`M`?`남`:`여`} · ${D(e.cityName)}</p>
    </div>
    <article class="card report">${e.reportHtml}</article>
    <div class="actions">
      <button class="btn" id="pdf-btn" type="button">PDF로 저장</button>
      <button class="btn btn-line" id="share-btn" type="button">친구에게 공유하기</button>
      <a class="btn btn-line" href="#start">다른 생년월일로 보기</a>
    </div>`,t.hidden=!1,P(`main`),E(`#compat-cta`).hidden=!1;let d=E(`#compat-form`);d.querySelector(`input[name=gender][value=${o.gender===`M`?`F`:`M`}]`).checked=!0,E(`#share-btn`).onclick=V,E(`#pdf-btn`).onclick=()=>L(e),t.scrollIntoView({behavior:`smooth`,block:`start`})}function P(e){document.body.dataset.view=e,E(`#compat`).hidden=e!==`compat`}addEventListener(`popstate`,()=>{location.hash===`#compat`&&E(`#compat`).innerHTML.trim()?(P(`compat`),window.scrollTo({top:0})):(P(`main`),E(`#result`).hidden||E(`#result`).scrollIntoView({block:`start`}))});function F(){let e=E(`#compat-form`),t=e.elements.unknownTime;t.addEventListener(`change`,()=>{e.elements.time.disabled=t.checked}),E(`#compat-open`).addEventListener(`click`,()=>{e.hidden=!1,E(`#compat-open`).hidden=!0,e.elements.date.focus()}),e.addEventListener(`submit`,async t=>{t.preventDefault();let r=E(`#compat-error`);if(r.textContent=``,!k){r.textContent=`먼저 내 결과를 확인해주세요.`;return}let i=j(e,r);if(!i)return;let a=e.querySelector(`input[name=mode]:checked`).value,o=e.querySelector(`button[type=submit]`);o.disabled=!0,o.textContent=`계산 중…`;try{let{analyze:e,compatibility:t}=await T(),r=await e(i.input);r.name=i.name||``,r.cityName=n(i.city);let o=t(k,r,a);I(k,r,o,a)}catch(e){console.error(e),r.textContent=`계산 중 문제가 생겼어요. 입력값을 확인하고 다시 시도해주세요.`}finally{o.disabled=!1,o.textContent=`궁합 결과 보기`}})}function I(e,t,n,r){let i=E(`#compat`),a=e.name&&e.name!==`당신`?`${e.name}님`:`나`,o=t.name?`${t.name}님`:`상대`,s=new Date,c=e=>`${e.input.year}.${e.input.month}.${e.input.day} ${e.input.unknownTime?`시각 모름`:`${String(e.input.hour).padStart(2,`0`)}:${String(e.input.minute).padStart(2,`0`)}`} · ${e.input.gender===`M`?`남`:`여`}`;i.innerHTML=`
    <div class="print-only print-head"><strong>사-자-서로 보는 운명 · 궁합</strong><span>${s.getFullYear()}.${s.getMonth()+1}.${s.getDate()} 작성</span></div>
    <button class="back-link" id="compat-back" type="button">← 내 결과로 돌아가기</button>
    <div class="result-head">
      <p class="eyebrow">${r===`love`?`연인·배우자 궁합`:`친구·동료 궁합`}</p>
      <p class="identity">${D(a)} × ${D(o)}</p>
      <p class="meta">${D(a)} ${c(e)} · ${D(o)} ${c(t)}</p>
    </div>
    <article class="card report">${n.html}</article>
    <div class="actions">
      <button class="btn" id="compat-pdf" type="button">PDF로 저장</button>
      <button class="btn btn-line" id="compat-again" type="button">다른 사람과 궁합 보기</button>
      <button class="btn btn-line" id="compat-share" type="button">친구에게 공유하기</button>
    </div>`,location.hash!==`#compat`&&history.pushState(null,``,`#compat`),P(`compat`),window.scrollTo({top:0});let l=()=>{location.hash===`#compat`?history.back():(P(`main`),E(`#result`).scrollIntoView({block:`start`}))};E(`#compat-back`).onclick=l,E(`#compat-again`).onclick=()=>{l();let t=E(`#compat-form`);t.reset(),t.elements.time.disabled=!1,t.querySelector(`input[name=gender][value=${e.input.gender===`M`?`F`:`M`}]`).checked=!0,setTimeout(()=>{E(`#compat-cta`).scrollIntoView({block:`start`}),t.elements.date.focus()},50)},E(`#compat-share`).onclick=V,E(`#compat-pdf`).onclick=()=>R(`궁합_${e.name===`당신`?`나`:e.name}_${t.name||`상대`}`)}function L(e){let t=e.input;R(`${e.name===`당신`?``:`${e.name}_`}사자서_${t.year}${String(t.month).padStart(2,`0`)}${String(t.day).padStart(2,`0`)}`)}function R(e){let t=document.title;document.title=e;let n=()=>{document.title=t,removeEventListener(`afterprint`,n)};addEventListener(`afterprint`,n),window.print()}function z(e){let t=E(`.toast`);t||(t=document.createElement(`div`),t.className=`toast`,document.body.appendChild(t)),t.textContent=e,t.classList.add(`show`),clearTimeout(t._t),t._t=setTimeout(()=>t.classList.remove(`show`),1800)}async function B(e,t){try{await navigator.clipboard.writeText(e),z(t)}catch{let n=document.createElement(`textarea`);n.value=e,document.body.appendChild(n),n.select();try{document.execCommand(`copy`),z(t)}catch{z(`복사에 실패했어요`)}n.remove()}}async function V(){let e={title:`사-자-서로 보는 운명`,text:`사주·자미두수·점성술 세 가지로 함께 보는 내 성향과 앞으로의 흐름, 그리고 궁합 →`,url:`${location.origin}${location.pathname}`};if(navigator.share)try{await navigator.share(e);return}catch{}B(`${e.text} ${e.url}`,`공유 링크를 복사했어요`)}M(),F(),location.hash===`#compat`&&history.replaceState(null,``,location.pathname),(window.requestIdleCallback||(e=>setTimeout(e,1500)))(()=>T());export{r as _,c as a,b as c,h as d,p as f,g,u as h,s as i,d as l,v as m,i as n,a as o,l as p,f as r,o as s,_ as t,m as u,y as v};