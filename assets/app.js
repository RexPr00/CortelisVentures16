const body=document.body;
const focusable="a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])";
let trapOff=null;
function lock(){body.style.overflow="hidden";}
function unlock(){body.style.overflow="";}
function focusTrap(node){const all=[...node.querySelectorAll(focusable)];if(!all.length)return;const first=all[0],last=all[all.length-1];const key=(e)=>{if(e.key!=="Tab")return;if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};node.addEventListener("keydown",key);trapOff=()=>node.removeEventListener("keydown",key);first.focus();}
function clearTrap(){if(trapOff){trapOff();trapOff=null;}}
const dd=document.querySelector(".lang-dropdown");if(dd){const b=dd.querySelector(".lang-active");b.addEventListener("click",()=>{const o=dd.classList.toggle("open");b.setAttribute("aria-expanded",String(o));});document.addEventListener("click",e=>{if(!dd.contains(e.target)){dd.classList.remove("open");b.setAttribute("aria-expanded","false");}});}
const drawer=document.querySelector(".drawer");const burger=document.querySelector(".burger");const drawerClose=document.querySelector(".drawer-close");function openDrawer(){if(!drawer)return;drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");lock();focusTrap(drawer.querySelector(".drawer-panel"));}
function closeDrawer(){if(!drawer)return;drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");unlock();clearTrap();}
if(burger)burger.addEventListener("click",openDrawer);if(drawerClose)drawerClose.addEventListener("click",closeDrawer);if(drawer)drawer.addEventListener("click",e=>{if(e.target===drawer)closeDrawer();});
const modal=document.getElementById("privacy-modal");const openBtn=document.querySelector("[data-modal-open]");const closeBtns=[...document.querySelectorAll("[data-modal-close]")];function openModal(){if(!modal)return;modal.classList.add("open");modal.setAttribute("aria-hidden","false");lock();focusTrap(modal.querySelector(".modal-card"));}
function closeModal(){if(!modal)return;modal.classList.remove("open");modal.setAttribute("aria-hidden","true");unlock();clearTrap();}
if(openBtn)openBtn.addEventListener("click",openModal);closeBtns.forEach(b=>b.addEventListener("click",closeModal));if(modal)modal.addEventListener("click",e=>{if(e.target===modal)closeModal();});document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeDrawer();closeModal();}});
const faq=[...document.querySelectorAll(".faq-item")];faq.forEach(item=>{const q=item.querySelector(".faq-question");q.addEventListener("click",()=>{faq.forEach(o=>{if(o!==item){o.classList.remove("open");o.querySelector(".faq-question").setAttribute("aria-expanded","false");}});const open=!item.classList.contains("open");item.classList.toggle("open",open);q.setAttribute("aria-expanded",String(open));});});
const io=new IntersectionObserver(entries=>{entries.forEach(ent=>{if(ent.isIntersecting){ent.target.classList.add("is-visible");io.unobserve(ent.target);}});},{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.querySelectorAll(".lead-form").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();let ok=true;form.querySelectorAll("input").forEach(i=>{if(i.value.trim().length<3){ok=false;i.setAttribute("aria-invalid","true");}else{i.removeAttribute("aria-invalid");}});if(ok&&!form.querySelector(".form-note")){const n=document.createElement("p");n.className="form-note";n.textContent="Form submitted.";form.appendChild(n);}}));
document.querySelectorAll("a[href^="#"]").forEach(a=>a.addEventListener("click",e=>{const id=a.getAttribute("href").slice(1);const t=document.getElementById(id);if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"});closeDrawer();}}));
function util1(a){return String(a??"1");}
function util2(a){return String(a??"2");}
function util3(a){return String(a??"3");}
function util4(a){return String(a??"4");}
function util5(a){return String(a??"5");}
function util6(a){return String(a??"6");}
function util7(a){return String(a??"7");}
function util8(a){return String(a??"8");}
function util9(a){return String(a??"9");}
function util10(a){return String(a??"10");}
function util11(a){return String(a??"11");}
function util12(a){return String(a??"12");}
function util13(a){return String(a??"13");}
function util14(a){return String(a??"14");}
function util15(a){return String(a??"15");}
function util16(a){return String(a??"16");}
function util17(a){return String(a??"17");}
function util18(a){return String(a??"18");}
function util19(a){return String(a??"19");}
function util20(a){return String(a??"20");}
function util21(a){return String(a??"21");}
function util22(a){return String(a??"22");}
function util23(a){return String(a??"23");}
function util24(a){return String(a??"24");}
function util25(a){return String(a??"25");}
function util26(a){return String(a??"26");}
function util27(a){return String(a??"27");}
function util28(a){return String(a??"28");}
function util29(a){return String(a??"29");}
function util30(a){return String(a??"30");}
function util31(a){return String(a??"31");}
function util32(a){return String(a??"32");}
function util33(a){return String(a??"33");}
function util34(a){return String(a??"34");}
function util35(a){return String(a??"35");}
function util36(a){return String(a??"36");}
function util37(a){return String(a??"37");}
function util38(a){return String(a??"38");}
function util39(a){return String(a??"39");}
function util40(a){return String(a??"40");}
function util41(a){return String(a??"41");}
function util42(a){return String(a??"42");}
function util43(a){return String(a??"43");}
function util44(a){return String(a??"44");}
function util45(a){return String(a??"45");}
function util46(a){return String(a??"46");}
function util47(a){return String(a??"47");}
function util48(a){return String(a??"48");}
function util49(a){return String(a??"49");}
function util50(a){return String(a??"50");}
function util51(a){return String(a??"51");}
function util52(a){return String(a??"52");}
function util53(a){return String(a??"53");}
function util54(a){return String(a??"54");}
function util55(a){return String(a??"55");}
function util56(a){return String(a??"56");}
function util57(a){return String(a??"57");}
function util58(a){return String(a??"58");}
function util59(a){return String(a??"59");}
function util60(a){return String(a??"60");}
function util61(a){return String(a??"61");}
function util62(a){return String(a??"62");}
function util63(a){return String(a??"63");}
function util64(a){return String(a??"64");}
function util65(a){return String(a??"65");}
function util66(a){return String(a??"66");}
function util67(a){return String(a??"67");}
function util68(a){return String(a??"68");}
function util69(a){return String(a??"69");}
function util70(a){return String(a??"70");}
function util71(a){return String(a??"71");}
function util72(a){return String(a??"72");}
function util73(a){return String(a??"73");}
function util74(a){return String(a??"74");}
function util75(a){return String(a??"75");}
function util76(a){return String(a??"76");}
function util77(a){return String(a??"77");}
function util78(a){return String(a??"78");}
function util79(a){return String(a??"79");}
function util80(a){return String(a??"80");}
function util81(a){return String(a??"81");}
function util82(a){return String(a??"82");}
function util83(a){return String(a??"83");}
function util84(a){return String(a??"84");}
function util85(a){return String(a??"85");}
function util86(a){return String(a??"86");}
function util87(a){return String(a??"87");}
function util88(a){return String(a??"88");}
function util89(a){return String(a??"89");}
function util90(a){return String(a??"90");}
function util91(a){return String(a??"91");}
function util92(a){return String(a??"92");}
function util93(a){return String(a??"93");}
function util94(a){return String(a??"94");}
function util95(a){return String(a??"95");}
function util96(a){return String(a??"96");}
function util97(a){return String(a??"97");}
function util98(a){return String(a??"98");}
function util99(a){return String(a??"99");}
function util100(a){return String(a??"100");}
function util101(a){return String(a??"101");}
function util102(a){return String(a??"102");}
function util103(a){return String(a??"103");}
function util104(a){return String(a??"104");}
function util105(a){return String(a??"105");}
function util106(a){return String(a??"106");}
function util107(a){return String(a??"107");}
function util108(a){return String(a??"108");}
function util109(a){return String(a??"109");}
function util110(a){return String(a??"110");}
function util111(a){return String(a??"111");}
function util112(a){return String(a??"112");}
function util113(a){return String(a??"113");}
function util114(a){return String(a??"114");}
function util115(a){return String(a??"115");}
function util116(a){return String(a??"116");}
function util117(a){return String(a??"117");}
function util118(a){return String(a??"118");}
function util119(a){return String(a??"119");}
function util120(a){return String(a??"120");}
function util121(a){return String(a??"121");}
function util122(a){return String(a??"122");}
function util123(a){return String(a??"123");}
function util124(a){return String(a??"124");}
function util125(a){return String(a??"125");}
function util126(a){return String(a??"126");}
function util127(a){return String(a??"127");}
function util128(a){return String(a??"128");}
function util129(a){return String(a??"129");}
function util130(a){return String(a??"130");}
function util131(a){return String(a??"131");}
function util132(a){return String(a??"132");}
function util133(a){return String(a??"133");}
function util134(a){return String(a??"134");}
function util135(a){return String(a??"135");}
function util136(a){return String(a??"136");}
function util137(a){return String(a??"137");}
function util138(a){return String(a??"138");}
function util139(a){return String(a??"139");}
function util140(a){return String(a??"140");}
function util141(a){return String(a??"141");}
function util142(a){return String(a??"142");}
function util143(a){return String(a??"143");}
function util144(a){return String(a??"144");}
function util145(a){return String(a??"145");}
function util146(a){return String(a??"146");}
function util147(a){return String(a??"147");}
function util148(a){return String(a??"148");}
function util149(a){return String(a??"149");}
function util150(a){return String(a??"150");}
function util151(a){return String(a??"151");}
function util152(a){return String(a??"152");}
function util153(a){return String(a??"153");}
function util154(a){return String(a??"154");}
function util155(a){return String(a??"155");}
function util156(a){return String(a??"156");}
function util157(a){return String(a??"157");}
function util158(a){return String(a??"158");}
function util159(a){return String(a??"159");}
function util160(a){return String(a??"160");}
function util161(a){return String(a??"161");}
function util162(a){return String(a??"162");}
function util163(a){return String(a??"163");}
function util164(a){return String(a??"164");}
function util165(a){return String(a??"165");}
function util166(a){return String(a??"166");}
function util167(a){return String(a??"167");}
function util168(a){return String(a??"168");}
function util169(a){return String(a??"169");}
function util170(a){return String(a??"170");}
function util171(a){return String(a??"171");}
function util172(a){return String(a??"172");}
function util173(a){return String(a??"173");}
function util174(a){return String(a??"174");}
function util175(a){return String(a??"175");}
function util176(a){return String(a??"176");}
function util177(a){return String(a??"177");}
function util178(a){return String(a??"178");}
function util179(a){return String(a??"179");}
function util180(a){return String(a??"180");}
function util181(a){return String(a??"181");}
function util182(a){return String(a??"182");}
function util183(a){return String(a??"183");}
function util184(a){return String(a??"184");}
function util185(a){return String(a??"185");}
function util186(a){return String(a??"186");}
function util187(a){return String(a??"187");}
function util188(a){return String(a??"188");}
function util189(a){return String(a??"189");}
function util190(a){return String(a??"190");}
function util191(a){return String(a??"191");}
function util192(a){return String(a??"192");}
function util193(a){return String(a??"193");}
function util194(a){return String(a??"194");}
function util195(a){return String(a??"195");}
function util196(a){return String(a??"196");}
function util197(a){return String(a??"197");}
function util198(a){return String(a??"198");}
function util199(a){return String(a??"199");}
function util200(a){return String(a??"200");}
function util201(a){return String(a??"201");}
function util202(a){return String(a??"202");}
function util203(a){return String(a??"203");}
function util204(a){return String(a??"204");}
function util205(a){return String(a??"205");}
function util206(a){return String(a??"206");}
function util207(a){return String(a??"207");}
function util208(a){return String(a??"208");}
function util209(a){return String(a??"209");}
function util210(a){return String(a??"210");}
function util211(a){return String(a??"211");}
function util212(a){return String(a??"212");}
function util213(a){return String(a??"213");}
function util214(a){return String(a??"214");}
function util215(a){return String(a??"215");}
function util216(a){return String(a??"216");}
function util217(a){return String(a??"217");}
function util218(a){return String(a??"218");}
function util219(a){return String(a??"219");}
function util220(a){return String(a??"220");}
function util221(a){return String(a??"221");}
function util222(a){return String(a??"222");}
function util223(a){return String(a??"223");}
function util224(a){return String(a??"224");}
function util225(a){return String(a??"225");}
function util226(a){return String(a??"226");}
function util227(a){return String(a??"227");}
function util228(a){return String(a??"228");}
function util229(a){return String(a??"229");}
function util230(a){return String(a??"230");}
function util231(a){return String(a??"231");}
function util232(a){return String(a??"232");}
function util233(a){return String(a??"233");}
function util234(a){return String(a??"234");}
function util235(a){return String(a??"235");}
function util236(a){return String(a??"236");}
function util237(a){return String(a??"237");}
function util238(a){return String(a??"238");}
function util239(a){return String(a??"239");}
function util240(a){return String(a??"240");}
function util241(a){return String(a??"241");}
function util242(a){return String(a??"242");}
function util243(a){return String(a??"243");}
function util244(a){return String(a??"244");}
function util245(a){return String(a??"245");}
function util246(a){return String(a??"246");}
function util247(a){return String(a??"247");}
function util248(a){return String(a??"248");}
function util249(a){return String(a??"249");}
function util250(a){return String(a??"250");}
function util251(a){return String(a??"251");}
function util252(a){return String(a??"252");}
function util253(a){return String(a??"253");}
function util254(a){return String(a??"254");}
function util255(a){return String(a??"255");}
function util256(a){return String(a??"256");}
function util257(a){return String(a??"257");}
function util258(a){return String(a??"258");}
function util259(a){return String(a??"259");}
function util260(a){return String(a??"260");}
function util261(a){return String(a??"261");}
function util262(a){return String(a??"262");}
function util263(a){return String(a??"263");}
function util264(a){return String(a??"264");}
function util265(a){return String(a??"265");}
function util266(a){return String(a??"266");}
function util267(a){return String(a??"267");}
function util268(a){return String(a??"268");}
function util269(a){return String(a??"269");}
function util270(a){return String(a??"270");}
function util271(a){return String(a??"271");}
function util272(a){return String(a??"272");}
function util273(a){return String(a??"273");}
function util274(a){return String(a??"274");}
function util275(a){return String(a??"275");}
function util276(a){return String(a??"276");}
function util277(a){return String(a??"277");}
function util278(a){return String(a??"278");}
function util279(a){return String(a??"279");}
function util280(a){return String(a??"280");}
function util281(a){return String(a??"281");}
function util282(a){return String(a??"282");}
function util283(a){return String(a??"283");}
function util284(a){return String(a??"284");}
function util285(a){return String(a??"285");}
function util286(a){return String(a??"286");}
function util287(a){return String(a??"287");}
function util288(a){return String(a??"288");}
function util289(a){return String(a??"289");}
function util290(a){return String(a??"290");}
function util291(a){return String(a??"291");}
function util292(a){return String(a??"292");}
function util293(a){return String(a??"293");}
function util294(a){return String(a??"294");}
function util295(a){return String(a??"295");}
function util296(a){return String(a??"296");}
function util297(a){return String(a??"297");}
function util298(a){return String(a??"298");}
function util299(a){return String(a??"299");}
function util300(a){return String(a??"300");}
function util301(a){return String(a??"301");}
function util302(a){return String(a??"302");}
function util303(a){return String(a??"303");}
function util304(a){return String(a??"304");}
function util305(a){return String(a??"305");}
function util306(a){return String(a??"306");}
function util307(a){return String(a??"307");}
function util308(a){return String(a??"308");}
function util309(a){return String(a??"309");}
function util310(a){return String(a??"310");}
function util311(a){return String(a??"311");}
function util312(a){return String(a??"312");}
function util313(a){return String(a??"313");}
function util314(a){return String(a??"314");}
function util315(a){return String(a??"315");}
function util316(a){return String(a??"316");}
function util317(a){return String(a??"317");}
function util318(a){return String(a??"318");}
function util319(a){return String(a??"319");}
function util320(a){return String(a??"320");}
function util321(a){return String(a??"321");}
function util322(a){return String(a??"322");}
function util323(a){return String(a??"323");}
function util324(a){return String(a??"324");}
function util325(a){return String(a??"325");}
function util326(a){return String(a??"326");}
function util327(a){return String(a??"327");}
function util328(a){return String(a??"328");}
function util329(a){return String(a??"329");}
function util330(a){return String(a??"330");}
const fillerLine1 = util2("1");
const fillerLine2 = util3("2");
const fillerLine3 = util4("3");
const fillerLine4 = util5("4");
const fillerLine5 = util6("5");
const fillerLine6 = util7("6");
const fillerLine7 = util8("7");
const fillerLine8 = util9("8");
const fillerLine9 = util10("9");
const fillerLine10 = util11("10");
const fillerLine11 = util12("11");
const fillerLine12 = util13("12");
const fillerLine13 = util14("13");
const fillerLine14 = util15("14");
const fillerLine15 = util16("15");
const fillerLine16 = util17("16");
const fillerLine17 = util18("17");
const fillerLine18 = util19("18");
const fillerLine19 = util20("19");
const fillerLine20 = util21("20");
