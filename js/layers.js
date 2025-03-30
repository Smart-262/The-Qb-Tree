//Other Rows
addLayer("A", {
  infoboxes: {
 introBox: {
  title: "成就",
  body(){return "成就页面可以帮助你查看当前的进度！标🏆的成就还有奖励哦！注：隐藏成就不会计入累计成就数量，也不会影响游戏发展，但是可以作为一个挑战目标，建议在现版本通关以后再做隐藏成就"},
        },
},
  name:"成就",
  symbol:"Λ",
    startData() { return {
        unlocked: true,
        ach: n(0),
    }},
     color: "#ffe125",
    resource: "成就", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
     
}
	},
    achievementPopups: true,
    achievements: {
        11: {
     name: "从原点出发",
     done() {return player.o.points.gte(1)}, 
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "首次原点重置", 
     textStyle: {'color': '#33ff00'},
        },
      
        /*15: {
     name: "进入挑战",
     done() {return hasUpgrade('a',15)},
    onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "解锁Arcaea挑战！",
     textStyle: {'color': '#DDCCCC'},
        },
        */
    },
    tabFormat: {
   "Achievements": {
        content: [ ["infobox","introBox"],
    ["display-text",
      function() {return '你有 ' + player.A.ach + ' 成就!'},
     {"color": "#ffe125", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
    "achievements",
],
  unlocked(){return true}
},
},
},
)//成就

//Row 0
addLayer("o", {
  infoboxes: {
 introBox: {
  title:"原 点",
  body(){return "欢迎您来到本游戏！导师:QqQe308"},
        },
},
    name: "原点", // This is optional, only used in a few places, If absent it just uses the layer main-display
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: n(0),
    }},
     color: "#33ff00",
    requires: n(10), // Can be a function that takes requirement increases into account
    resource: "原点", // Name of prestige currency
    baseResource: "Q币", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5,
    // Prestige currency exponent
    gainMult() {
	    if (hasUpgrade('p', 12)) gain = gain.times(upgradeEffect('p', 12))
    },
    gainExp() {},
    directMult() { //sdirectmult
        mult = n(1)
        return mult
    },
    canReset() {return player.devSpeed.gt(0)},
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "O:原点", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    tabFormat: {
   "General": {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
    "resource-display",
    "buyables",
    "upgrades",

],
    }},
 passiveGeneration()
  {mult = n(0)
if (hasUpgrade('p', 13)) mult = mult.add(1)
  return mult},
  softcap:n (1e20),
  softcapPower:n(0.05),
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     //if (resettingLayer == "a") {
         //if (hasUpgrade("a", 12)) {kept.push("upgrades")}
     //}
     //上面的代码先注释着，以后要用
     layerDataReset(this.layer, kept)
        }
    },
      upgrades: {
    11:{ title: "来到原点",
         description: "和其他树一样简单明了，原点提高赚钱速度！",
         cost: n(1),
         effect() { return player.o.points.add(2).pow(0.3) },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "不太对劲",
         description:"你应该也注意到了，上一个升级公式不太对劲，这里使它的指数再加0.05",
         cost: n(3),
         unlocked() { return (hasUpgrade('o', 11))},
         effect() {
      return player.o.points.add(2).pow(0.05)
         },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "谁能告诉我这是怎么个事？",
         description:"好吧，第一个升级的指数其实只有0.3，但无论怎样也好，它就是弱，总之让Q币加成自己得了",
         cost: n(10),
         unlocked() { return (hasUpgrade('o', 12))},
         effect() {
        return player.points.add(10).log10().pow(1.2)},},
    14:{ title: "Q币卡?",
         description:"嗯，只要你购买了这张Q币卡，就能使上一个升级的效果增加250.000‰，是不是很多",
         cost: n(50),
         unlocked() { return (hasUpgrade('o', 13))},
         effect() {
        return player.points.add(10).log10().pow(0.3000)
        },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    15:{ title: "还缺两种",
         description:"你应该发现了，前面的两对升级都是加成player.points的，那么剩下两种...敬请期待新层级",
         cost: n(1500),
         unlocked() { return (hasUpgrade('s', 14))},
       },
    //16:{title:"我讨厌挂机",
    //description:"源点获取量指数+0.3（0.5-0.8），并且源点获取量×2",
    //cost: n(10000),
    //unlocked() { return (hasUpgrade('a', 14))}, },
    //17:{ title: "讨厌的时间墙",
         //description:"解锁一个Arcaea升级，每秒获得200%歌曲和源点",
         //unlocked() { return (hasUpgrade('s', 16))},
         //cost: n(1e5),},
},

}
})//原点

//Row 1 
addLayer("p", {
  infoboxes: {
    introBox: {
    title: "声望",
    body(){ return "新的行在召唤！——原版声望树成就(第二行重置)
    <br>等等声望你不是在第一行吗
         },
        },
  
},
    name: "声望",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked() { return hasUpgrade('o',15)
        //||hasAchievement('A',111)
          
        },
		points: n(0),
    }},
     color: "#99ff11",
    requires: n(1000), 
    resource: "声望",
    baseResource: "原点", 
    baseAmount() {return player['o'].points}, 
    type: "static", 
    exponent: 1.1, 
    base:10
    row: 1, 
    branches() {return 'o']}
    hotkeys: [
        {key: "p", description: "P声望重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
  
    layerShown(){
    return player.p.points.gt(0)||player.p.unlocked()||hasAchievement('A',111)},
 resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
          let kept = ["unlocked", "auto"]}
        
    },
  challenges: {
    11: {
        name: "Past",
        challengeDescription: "歌曲获取量变为原来的0.6次方",
        goalDescription:"1e440 Notes",
        rewardDescription:"歌曲获取量^1.2",
        unlocked(){unlock= false
        if(hasUpgrade('a',15)) unlock=true
   return unlock
        },
        canComplete: function() {return player.points.gte('1e440')||hasMilestone('p',0)},
    },
},
  upgrades: {
    11:{ title: "PQ链接",
    description:"阿哲，这不是应该出现在资源效果里的吗，怎么跑到升级里来了，但是每个声望照样能使Q币变为3倍！(基础3倍)",
    cost: n(1),
    effect() {
    return three.pow.player['p'].points.mult(3)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "PO直达",
    description:"让原点声望化!谁说声望不能提高原点，但是效果比上个升级弱多了",
    cost: n(2),
    unlocked() { return (hasUpgrade('a', 11))},
    effect() {
   return player['p'].points.add(1).pow(3)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "QoL来了",
    description:"这是第一个QoL!使你每秒获得100%的原点!",
   cost: n(3),
    unlocked() { return (hasUpgrade('a', 12))},
     },
  
},
tabFormat: {
   "Upgrades": {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
    "resource-display",
    "upgrades",
],
    },
   "Challenges": {
        content: [ ["infobox","chalBox"],
   "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('a',15)}
},
},
})//声望