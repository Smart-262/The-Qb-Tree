let modInfo = {
	name:"摇钱树",
	id: "Qb",
	author: "Smart-262",
	pointsName:"Q币",
	modFiles: ["layers.js", "tree.js"],
	discordName: "导师的b站",
	discordLink: "https://b23.tv/ALvJ9Im",
	initialStartPoints: n(10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}
// Set your version in num and name
let VERSION = {
	num: "0.00",
	name: "II",
}

let winText = `这8个小孩各有神通
大娃カ大无穷
二娃千里眼顺风耳
三娃刀枪不λ
四娃移动打人机
五娃移动水龙头
六娃隐身
七娃他可有——个万物都可以收进去的宝葫芦
而八娃更加厉害 他可以随时随地做出美味的忄汉堡 俗称老八[doge][doge][doge][dog][doge][doge][doge][doge]
对了你看到这和重写前的有什么不同吗`

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte('1.213e7')
	//return false
}

// Display extra things at the top of the page
var displayThings = [
  /*function() {
   let b=""
   if(gcs('t',31)) b=b+"<br>存档长度: "+JSON.stringify(player).length+"<br>编码后存档长度: "+formatsave.encode(JSON.stringify(player)).length
   if(gcs('S',11)) b=b+"<br>PTT: "+format(player.a.ptt)
   if(gcs('S',12)) b=b+"<br>RKS: "+format(player.p.rks)
   if(gcs('S',13)) b=b+"<br>Cytus力量: "+format(player.c.power)
   if(gcs('S',14)) b=b+"<br>课题力量: "+format(player.ch.enp)
   if(gcs('S',15)) b=b+"<br>填充Notes: "+format(player.r.notes)
   if(gcs('S',16)) b=b+"<br>游玩时长: "+formatTime(player.timeplayed)
   let a= "v0.59游戏结局: e1.213e7 Notes！"
   if(inChallenge('r',12)&&player.devSpeed.eq(0)) a=a+"<br>你需要在Rot升级树里选择升级，并且点击升级12确定以开始挑战！"
  if(isEndgame()) a=a+"<br>已达到该版本结局！"
  if(getPointGen().gte(player.pointSoftcapStart.pow(0.9))) a=a+"<br>Notes获取量在"+format(player.pointSoftcapStart)+"达到软上限！<br>软上限效果:超过部分^"+format(player.pointSoftcapPower,3)
  a=a+"<br>音乐游戏树一周年快乐！"
   return a+b
  }*/
  你充Q币嘛
]

let changelog = `konodioda`//changelog

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return n(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
return !player.points.gte('e1.213e7')
//return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return n(0)
	let gain = n(1)
	if (hasUpgrade('o', 11)) gain = gain.times(upgradeEffect('o', 11))
	if (hasUpgrade('o', 12)) gain = gain.times(upgradeEffect('o', 12))
	if (hasUpgrade('o', 13)) gain = gain.times(upgradeEffect('o', 13))
	if (hasUpgrade('o', 14)) gain = gain.times(upgradeEffect('o', 14))
	//if (hasAchievement('A', 13)) gain = gain.times(1e50)
	if (hasUpgrade('p', 11)) gain = gain.times(upgradeEffect('p', 11))
	/*if (hasUpgrade('a', 16)) gain = gain.times(1e30)
	if (inChallenge('a', 12)) gain = gain.times('1e-500')
	if (inChallenge('a', 13)) gain = gain.times('1e-500')
	if(buyableEffect('s',12).gte(1)) gain = gain.times(buyableEffect('s',12))
	if (inChallenge('a', 14)) gain = gain.times('1.919e-810')
	if (hasUpgrade('p', 14)) gain = gain.times(upgradeEffect('p', 14))
	if (inChallenge('p', 13)) gain = gain.times(1e-55)
	if (hasUpgrade('p', 25)) gain = gain.times(1e308)
	if(buyableEffect('c',11)>1) gain = gain.times(buyableEffect('c',11))
	if (hasUpgrade('s', 31)) gain = gain.times(upgradeEffect('s', 31))
	if (hasUpgrade('a', 41)) gain = gain.times(upgradeEffect('a',41))
if (hasUpgrade('a', 42)) gain = gain.times(upgradeEffect('a',42))
if (hasUpgrade('s', 34)) gain = gain.times(upgradeEffect('s', 34))
if (hasUpgrade('l', 16)) gain = gain.times(upgradeEffect('l', 16))
if (hasUpgrade('l', 17)) gain = gain.times(upgradeEffect('l', 17))
if (hasUpgrade('a', 45)) gain = gain.times(upgradeEffect('a', 45))
if (hasMilestone('ch', 0)) gain = gain.times('1e960')
if (hasMilestone('ch', 1)) gain = gain.times('1e1145')
if (hasMilestone('ri', 9)) gain = gain.times('1e1000')
if (hasMilestone('e', 1)) gain = gain.times('1e1000')
	if (hasUpgrade('ch', 13)) gain = gain.times(upgradeEffect('ch', 13))
	if (hasUpgrade('a', 46)) gain = gain.times(upgradeEffect('a',46))
	if (hasUpgrade('ch', 35)) gain = gain.times(upgradeEffect('ch', 35))
	if (hasUpgrade('a', 47)) gain = gain.times(upgradeEffect('a',47))
	if (hasUpgrade('ch', 36)) gain = gain.times(upgradeEffect('ch', 36))
	if (hasUpgrade('ch', 37)) gain = gain.times(upgradeEffect('ch', 37))
	if (hasUpgrade('ch', 43)) gain = gain.times(upgradeEffect('ch', 43))
	if(tmp.a.snEff4.gte(1)) gain=gain.times(tmp.a.snEff4)
if (hasUpgrade('sp', 21)) gain = gain.times(upgradeEffect('sp', 21))
if (hasUpgrade('j', 21)) gain = gain.times(upgradeEffect('j', 21))
if (hasUpgrade('j', 37)) gain = gain.times(upgradeEffect('j', 37))
if (gcs("r",21)==1) gain = gain.times(clickableEffect("r", 21))


	if (hasUpgrade('l', 12)) gain = gain.pow(upgradeEffect('l', 12))
	if (hasUpgrade('l', 14)) gain = gain.pow(upgradeEffect('l', 14))
	if (hasUpgrade('ch', 21)) gain = gain.pow(1.01)
 if(tmp.ch.dragEff>1) gain = gain.pow(tmp.ch.dragEff)
 if (hasUpgrade('ch', 26)) gain = gain.pow(1.02)
if (hasUpgrade('ch', 27)) gain = gain.pow(1.05)
if (hasUpgrade('sp', 27)) gain = gain.pow(1.001)
if (hasAchievement('A', 65)) gain = gain.pow(1.0101)
if(tmp.a.drEff4.gte(1)) gain=gain.pow(tmp.a.drEff4)

if(inChallenge('p',12)){gain= gain.pow(0.1)}
	if(hasChallenge('p',13)){gain = gain.pow(challengeEffect('p',13))}
	if(inChallenge('p',15)){gain= gain.pow(0.3)}
	if(inChallenge('c',11))gain= gain.pow(0.1)
	if(inChallenge('c',12))gain= gain.pow(0.01)
	if(inChallenge('c',12))gain= gain.div(5e7)
	if(inChallenge('c',13))gain= gain.pow(n(0.9).pow(player.c.challengeTime))

	
	if(inChallenge('r',14)) gain=gain.max(10).log10()
	if(inChallenge('c',14))gain= gain.max(10).log(1.0001)
if(inChallenge('c',14)&&!hasMilestone('r',0))gain= gain.pow(0.05)
if(inChallenge('r',11))gain= gain.pow(0.1)
if(gcs('j',11)==1) gain=gain.pow(tmp.j.pdqj1)
if(inChallenge('ri',12)) gain=n(10).pow(gain.max(10).log10().pow(n(0.1).pow(clickableEffect('e',15)).min(0.4)))

if(gain.gte(player.pointSoftcapStart)) gain=gain.div(player.pointSoftcapStart).pow(player.pointSoftcapPower).mul(player.pointSoftcapStart)


if(player.devSpeed.neq(0)) gain=gain.min(n('e1.213e7').div(player.devSpeed))
if(inChallenge('r',13))gain= gain.min(player.mi.points)
*/
	return gain
}

function pointSoftcapPower() {
 let power=n(0.25)
// if(hasUpgrade('e',27)) power=buyableEffect('e',13)
 return power
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
 devSpeed:n(1),
 timePlayed:n(0),//游戏时间
 timeplayed:n(0),//现实时间
 pointSoftcapStart:n("ee7"),//点数软上限起始点
 pointSoftcapPower:n(0.25),//点数软上限力量
 shitDown:false,//对于手机版玩家是否按下Shift的Qol
}}
 var QqQ="QqQe308"
 var banana="3.8642180e38642180"
 var Liu="6.666666666666666666666666e308"
 var fufu=['cutefu~','c','u','t','e','f','u','~'] 
 var Loader="也可以试试Loader的音乐游戏树mod哦！链接：https://qq1010903229.github.io/The-Rhythm-Game-Tree/" 
 var yszqzls="元素周期增量树是不是停更了😡" 
 var yyyxs="音乐游戏树，鱼鱼永相随，游泳一小时，原原原x神" 
 var Genshin="启动！" 
 var Phigros="Phigros什么时候更新急急急" 
 var long2024="龙年马上要到了！祝大家新年龙腾虎跃，龙飞凤舞，龙批一个，事业有成，学业顺利，身体健康，财源滚滚，音游全AP，考试全满分，工作全加薪，玩树全通关，再次献上音乐游戏树全体作者（共1人）的真挚祝福！！！！！！！！！！（已经八月份了，我觉得这个彩蛋完全没有意义）" 
 var QqQe308="我是QqQe308，v我50更新音乐游戏树" 
//彩蛋区



 
// Less important things beyond this point!



// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return n(1e308) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
 player.QqQ=0;player.banana=0;player.Liu=0;player.fufu=0;player.Loader=0;player.yszqzls=0;player.yyyxs=0;player.Genshin=0;player.Phigros=0;player.long2024=0;player.QqQe308=0;//过去的彩蛋变量，现在留着太占存档空间了，修改一下
}



function gba(a,b){return getBuyableAmount(a,b)}

function gcs(a,b){return getClickableState(a,b)}

function milestoneEffect(layer,id) {return layers[layer].milestones[id].effect()}


//以下来自someUsefulFunctions_QwQe308.js
//快捷调用+提高运算速度
var zero = n(0)
var one = n(1)
var two = n(2)
var three = n(3)
var four = n(4)
var five = n(5)
var six = n(6)
var seven = n(7)
var eight = n(8)
var nine = n(9)
var ten = n(10)
//快捷定义
function n(a) {
 return new Decimal(a)
}
//检测旁边的升级是否被购买
function checkAroundUpg(UPGlayer,place){
    place = Number(place)
    return hasUpgrade(UPGlayer,place-1)||hasUpgrade(UPGlayer,place+1)||hasUpgrade(UPGlayer,place-10)||hasUpgrade(UPGlayer,place+10)
}
//指数软上限
function powsoftcap(num,start,power){
	if(num.gt(start)){
		num = num.root(power).mul(start.pow(one.sub(one.div(power))))
	}
    return num
}
//e后数字开根
function expRoot(num,root){
    return ten.pow(num.log10().root(root))
}
//e后数字乘方
function expPow(num,pow){
    return ten.pow(num.log10().pow(pow))
}
//e后数字指数软上限
function expRootSoftcap(num,start,power){
    if(num.lte(start)) return num;
    num = num.log10();start = start.log10()
    return ten.pow(num.root(power).mul(start.pow(one.sub(one.div(power)))))
}
//修改class属性
function setClass(id,toClass = []){
    var classes = ""
    for(i in toClass) classes += " "+toClass[i]
    if(classes != "") classes = classes.substr(1)
    document.getElementById(id).className = classes
}
//快速创建sub元素
function quickSUB(str){
    return `<sub>${str}</sub>`
}
//快速创建sup元素
function quickSUP(str){
    return `<sup>${str}</sup>`
}
//快速给文字上色
function quickColor(str,color){
    return `<text style='color:${color}'>${str}</text>`
}


