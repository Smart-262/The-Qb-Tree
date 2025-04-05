//Other Rows
addLayer("A", {
  infoboxes: {
 introBox: {
  title: "成就",
  body(){return "成就。。。"},
        },
},
  name:"Achievements",
  symbol:"🏆",
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
    update(diff) {},
	   devSpeedCal() {//我也不知道为什么放这里
	    let dev=n(1)
	    return dev
	   },
    achievementPopups: true,
    achievements: {
     /*   
        11: {
     name: "音游之始",
     done() {return player.s.points.gte(1)}, 
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得你的第一首歌曲！", 
     textStyle: {'color': '#ABCDEF'},
        },
        12: {
     name: "进展很快",
     done() {return player.points.gte(1.79e308)}, 
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得1.79e308Notes！", 
     textStyle: {'color': '#ABABAB'},
        },
        13: {
     name: "制作音游<br>🏆",
     done() {return player.a.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个源点！<br>奖励：源点获取基本指数为0.5，Notes×1e50",
     textStyle: {'color': '#DDBBDD'},
        },
        14: {
     name: "进展快吗",
     done() {return player.points.gte('1e400')},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到1e400Notes！",
     textStyle: {'color': '#DDAAAA'},
        },
        15: {
     name: "进入挑战",
     done() {return hasUpgrade('a',15)},
    onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "解锁Arcaea挑战！",
     textStyle: {'color': '#DDCCCC'},
        },
        21: {
     name: "音游之盛",
     done() {return player.s.points.gte(1e15)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到1e15歌曲！",
     textStyle: {'color': '#ABBBBB'},
        },
        22: {
     name: "韵律源点<br>🏆",
     done() {return player.a.points.gte(1e10)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "达到1e10源点！<br>奖励：歌曲基本指数+0.616",
     textStyle: {'color': '#DD66AA'},
        },
        23: {
     name: "调律诗篇",
     done() {return player.l.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个诗篇",
     textStyle: {'color': '#44DDDD'},
        },
        24: {
     name: "一古戈尔",
     done() {return player.s.points.gte(1e100)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得1e100(1 Googol)歌曲",
     textStyle: {'color': '#5244ff'},
        },
        25: {
     name: "有必要吗",
     done() {return player.a.ptt.gte(2.886499075)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得2.886499075PTT",
     textStyle: {'color': '#ff5eee'},
        },
        31: {
     name: "下一进展<br>🏆",
     done() {return player.p.points.gte(1)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得一个Phidata！<br>奖励：源点获取量变为原来的10倍（软上限前），解锁剧情",
     textStyle: {'color': '#CC11AA'},
     
        },
        32: {
     name: "再次挑战",
     done() {return hasUpgrade('p',13)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "解锁Phigros挑战！",
     textStyle: {'color': '#CCBBAA'},
     
        },
        33: {
     name: "遗忘的层<br>🏆",
     done() {return player.l.points.gte(8)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得8个诗篇！<br>奖励：被动获得100%Phidata每秒",
     textStyle: {'color': '#98f8f2'},
     
        },
        34: {
     name: "从未遗忘<br>🏆",
     done() {return player.l.points.gte(15)},
     onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "获得15个诗篇！<br>奖励：解锁更多Phidata升级",
     textStyle: {'color': '#BBCCDD'},
     
        },
        35: {
     name: "DABCABCD<br>ABCADBAA<br>BABCABCD<br>BAAADBAB",
     done() {return hasUpgrade('a',32)},
    onComplete(){player.A.ach=player.A.ach.add(1)},
     tooltip: "购买升级“Cyaegha”<br>梗来源：人声部分的空耳",
     textStyle: {'color': '#DABCABCD'},
     
        }, */
      
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
  title: "原点",
  body(){return "欢迎您来到本游戏！"},
        },
},
    name: "原点", // This is optional, only used in a few places, If absent it just uses the layer main-display
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: n(0),
		sc: n(15000),
		sce:n(0.5),
    }},
     color: "#33ff00",
    requires: n(10), // Can be a function that takes requirement increases into account
    resource: "原点", // Name of prestige currency
    baseResource: "Q币", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.05,
    // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
    //sgainmult//
        mult = n(0.5)
        sc = player.s.sc
        sce=player.s.sce
        //mult = mult.times(player['a'].points).add(1)
        if (hasUpgrade('p', 12)) mult = mult.times(upgradeEffect('p', 12))
       /* if (hasUpgrade('a', 11)&&hasUpgrade('s',15)) mult = mult.times(100)
        if (hasUpgrade('a', 12)) mult = mult.times(upgradeEffect('a', 12))
        mult=mult.times(buyableEffect('s',11))
        if (hasUpgrade('p',13)) mult = mult.times(1e15)
        if (hasUpgrade('p',24)) mult = mult.pow(1.2)
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
       mult = mult.times(player['p'].points.add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(player['p'].points.add(1).pow(4).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(player['p'].points.add(1).pow(3).pow(player.m.points.add(1).pow(0.5)))
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        
        if(mult>1e160) mult = mult.times(mult.div(1e160).pow(-0.35))//sc1
        
  if(buyableEffect('c',13)>1) mult = mult.times(buyableEffect('c',13))
  
        if(inChallenge('c',11))mult=mult.pow(0.1)
        if(inChallenge('c',13))mult = mult.pow(n(0.9).pow(player.c.challengeTime))
        
        if(inChallenge('r',14)) mult=mult.max(10).log10()
        if(mult.log10().gte(sc)&&hasChallenge('c',13)) mult = n(10).pow(mult.log10().sub(sc).pow(sce).add(sc))//sc2
     if(!hasChallenge('c',13))   mult=mult.min(n(10).pow(sc))
     */
        return mult
    },
    gainExp() {},
    directMult() {},
    canReset() {return player.devSpeed.gt(0)},
    scCal() {
      sc=n(15000)
      /*if(hasMilestone('sp',0)) sc=n(16000)
      if(hasMilestone('sp',1)) sc=n(17000)
      if(hasMilestone('sp',3)) sc=n(18000)
      if(hasMilestone('sp',3)) sc=n(18000)
      if(hasUpgrade('ch',45)) sc=sc.add(upgradeEffect('ch',45).log(10))
      if(hasAchievement('A',73)) sc=sc.add(4000)
      */
      
      return sc
    },
    sceCal() {
      sce=n(0.5)
      
      return sce
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
   /* hotkeys: 
   [
        {key: "o", description:"按O键原点重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],*/
   /* deactivated(){de = false
      if(inChallenge('p',13))de = true
      return de
    },*/
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
  
  return mult},
  
  softcap:n (1e20),
  softcapPower:n(0.05),
  /*autoUpgrade() {upg=false
 if(hasMilestone('l',0)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},*/
  //resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
/*     if (resettingLayer == "a") {
         if (hasUpgrade("a", 12)&&!player.a.activeChallenge) {kept.push("upgrades")}
     }
     if (resettingLayer == "p") {
         if (hasMilestone("p", 5)) {kept.push("buyables")}
     }
     
         if (hasMilestone("sp", 0)) {kept.push("upgrades")} */
    
     layerDataReset(this.layer, kept)
        }
    },

      upgrades: {
    11:{ title: "来到原点",

         description: "和其他树一样简单明了，原点提高赚钱速度!",

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
       /*
    16:{title:"我讨厌挂机",
    description:"源点获取量指数+0.3（0.5-0.8），并且源点获取量×2",
    cost: n(10000),
    unlocked() { return (hasUpgrade('a', 14))}, },
    17:{ title: "讨厌的时间墙",
         description:"解锁一个Arcaea升级，每秒获得200%歌曲和源点",
         unlocked() { return (hasUpgrade('s', 16))},
         cost: n(1e5),},
    21:{title:"为何不多点升级？",
    description:"源点对Notes的增益效果增强（源点^10）",
    cost: n(1e6),
    unlocked() { return (hasUpgrade('s', 17))},
      effect() {
        return player.a.points.add(1).pow(10)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    22:{title:"终于结束挂机",
    description:"解锁更多Arcaea升级，源点获取量变为原来的10倍（源点软上限：1e10）",
    cost: n(1e7),
    unlocked() { return (hasChallenge('a', 11))},
      effect() {
        return n(10) }, },
    23:{title:"单曲精选集",
    description:"歌曲基本指数增加0.5，源点获取量×5",
    cost: n(1e14),
    unlocked() { return (hasUpgrade('a', 17))},},
    24:{title:"歌曲太多了…",
    description:"解锁一个歌曲可购买，源点获取指数+0.1（软上限前）",
    cost: n(1e28),
    unlocked() { return (hasUpgrade('a', 21))},},
    25:{title:"极限数值",
    description:"根据歌曲数量增益源点获取量",
    cost: n(1e95),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
        return player.s.points.add(10).log(2).pow(1.2).add(1) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    },
    26:{title:"无限歌曲",
    description:"歌曲指数乘以1.1",
    cost: n('1.80e308'),
    unlocked() { return (hasUpgrade('s', 25))}, },
    27:{title:"10^2^9=1e512",
    description:"源点指数乘以1.15",
    cost: n('1e512'),
    unlocked() { return (hasUpgrade('s', 26))}, },
    31:{title:"Songs.mp3",
    description:"再次根据歌曲数量提升Notes<br>想不出升级名字，如有好的会替换",
    cost: n('1e8100'),
    unlocked() { return hasChallenge('c',11)},
    effect() {
        return player.s.points.pow(0.3).min('1e3000') },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    },
    32:{title:"Songs.wav",
    description:"降低Phidata对源点的需求(1e17--1e10)",
    cost: n('1e8666'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('a',41)},
    },
    33:{title:"Songs.mpeg",
    description() {return "Cyten获取指数×1.2"},
    cost: n('9.6e9696'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('c',16)},
    },
    34:{title:"Songs.wma",
    description() {return "基于Notes提升Notes"},
    cost: n('1e11666'),
    effect() {
        return n(2).pow(player.points.max(10).log(1000).pow(0.75)).pow(5).min('1e5000')},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('l',16)},
    },
    35:{title:"Songs.midi",
    description() {return "自动获得RKS，解锁下一个Cytus可购买"},
    cost: n('1e12121'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('a',44)},
    },
    36:{title:"Songs.songs",
    description() {return "基于超过1e200000的歌曲指数提升Rot升级83的效果"},
    cost: n('1e216000'),
    effect() {
     let a=player.s.points.max(10).log(10).div(10000).sub(19).max(0).pow(0.5).max(1)
        return a.min(10)},
 effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    unlocked() { return hasUpgrade('r',42)},
    },
    37:{title:"Songs.sgnoS",
    description() {return "基于歌曲指数提升Cytus力量"},
    cost: n("1e216888"),
    tooltip:"在RC3中加强",
    effect() {
     let a=player.s.points.max(10).log(10).div(100000).add(1).pow(0.4)
     eff=(a.pow(-1).add(1)).pow(a)
     if(inChallenge('r',13)) eff=eff.pow(1.08)
     return eff.div(2).min(2)
    },
 effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    unlocked() { return hasUpgrade('s',36)},
    },
*/
      },
    /*buyables: {
    11: {
        cost(){return this.effect().pow(3)},
        display() { return "基于购买次数增加歌曲的乘数（软上限前）<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名曲师",
        effect() {return n(2).pow(gba(this.layer,this.id))},
        unlocked(){unlock= false
        if(hasChallenge('a',13)) unlock=true
        if(hasMilestone('p',1)) unlock=true
   return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
     setBuyableAmount(this.layer, this.id, gba(this.layer,this.id).add((player.s.points.div(this.cost())).max(1).log(2).div(3)))
        },
        
    },
    12: {
        cost(){return this.effect().pow(2)},
        display() { return "基于购买次数增加Note乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名谱师",
        effect() {return n(3).pow(gba(this.layer,this.id))},
        unlocked(){unlock= false
        if(hasUpgrade('s',24)) unlock=true
        if(hasMilestone('p',1)) unlock=true
   return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
     setBuyableAmount(this.layer, this.id, gba(this.layer,this.id).add((player.s.points.div(this.cost())).max(1).log(3).div(2)))
        },
        
    },
    13: {
        cost(){return this.effect().pow(10)},
        display() { return "基于购买次数增加源点乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名画师",
        effect() {return n(5).pow(gba(this.layer,this.id))},
        unlocked(){unlock= false
        if(hasMilestone('p',3)) unlock=true
   return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost()) },
        buy() {
     if(hasMilestone('p',3)) {setBuyableAmount(this.layer, this.id, gba(this.layer,this.id).add((player.s.points.div(this.cost())).max(1).log(5).div(10)))}
        },
        
    },
}*/
})//原点

//Row 1
/*
addLayer("p", {
  infoboxes: {
    introBox: {
    title: "声望",
    body(){ return "欢迎来到第二层！"
         },
        },
    chalBox: {
    title: "Arcaea挑战",
    body(){ return "欢迎来到挑战！你可以进入挑战让游戏变得更困难，但是完成挑战会有更多提升，也能解锁后面的游戏内容！"
    },
        },
    pttBox: {
    title: "PTT",
    body(){ return "PTT是Arcaea中的游戏实力衡量标准，有了越多的PTT，就会给其他资源一些增益，不过PTT是有上限的，接下来可以解锁更多和PTT相关的内容"
    },
        },
    snakeBox: {
    title: "蛇",
    body(){ return "蛇是Arcaea中比较特殊的一种音符，类似于长条，你需要按住蛇，并且不能松手或换手。与长条不同的是，蛇的位置会改变：往上往下，左右摇晃，甚至几条蛇一起移动，这就有了Arcaea中著名的“反手蛇”等经典。在这里你需要点击底下的可点击来增加蛇的长度，注意的是它们不一定随时都可点击。你会根据蛇的长度来获得增益效果，并且随着游戏进度的推进，你还会获得更多的增益效果！"
    },
        },
},
    name: "Arcaea",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked() { return hasUpgrade('o',15)
        //||hasAchievement('A',111)
        },
		points: n(0),
		sc:n(4000),
		sce:n(0.5),
		ptt: n(0),
		pttMax: n(1),
		pttMax2: n(1),
		sn:n(0),//蛇
		sna:n(1),//蛇每次增加
		sns:n(2),//蛇可点击数量
		snRandom:n(1),
		dr:n(0),//龙
		dra:n(0)//龙增加
    }},
     color: "#DDBBDD",
    requires: n(2000), 
    resource: "源点",
    baseResource: "歌曲", 
    baseAmount() {return player['s'].points}, 
    type: "normal", 
    exponent: 0.15, 
    effect(){
      return {Notes: player['a'].points.add(1)}
    },
    effectDescription() { 
     return "Notes和歌曲增益乘以"+format(player['a'].points.add(1))},
    gainMult() { //againmult//
        mult = n(2)
        sc = player.a.sc
        sce=player.a.sce

        if (hasUpgrade('s', 16)) mult = mult.times(2)
        if (hasChallenge('a', 12)) mult = mult.times(15)
        if (hasUpgrade('s', 22)) mult = mult.times(10)
        if(hasUpgrade('s',23)){mult = mult.times(5)}
        if(hasUpgrade('s',25)){mult = mult.times(upgradeEffect('s',25))}
        if (hasChallenge('p',11)) mult = mult.times(challengeEffect('p',11))
        mult=mult.times(buyableEffect('s',13))
        
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
       mult = mult.times(player['p'].points.add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(player['p'].points.add(1).pow(4).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(player['p'].points.add(1).pow(3).pow(player.m.points.add(1).pow(0.5)))
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        if(hasUpgrade('a',26)){mult = mult.times(upgradeEffect('a',26))}
        if(buyableEffect('c',21)>1) mult = mult.times(buyableEffect('c',21))
        
        
        if (hasUpgrade('a', 45)) mult = mult.pow(1.2)
        if(inChallenge('c',11))mult = mult.pow(0.2)
        if(inChallenge('c',13))mult = mult.pow(n(0.9).pow(player.c.challengeTime))
        
        if(mult.log10().gte(sc)) mult = n(10).pow(mult.log10().sub(sc).pow(sce).add(sc))//sc1
        
        if(tmp.a.snEff2.gte(1)) mult=mult.times(tmp.a.snEff2)
        if(inChallenge('r',14)) mult=mult.max(10).log10()
       if(!hasChallenge('c',13)) mult=mult.min('1e4000')
        return mult
    },
    gainExp() { //againexp
      exp= n(0.1)
      if(hasAchievement('A',13)){exp= exp.add(0.4)}
      if(hasUpgrade('a',23)){exp= exp.add(1)}
      if(hasUpgrade('s',16)){exp= exp.add(0.2)}
      if(hasUpgrade('s',24)){exp= exp.add(0.1)}
      if(hasChallenge('a',14)){exp= exp.times(1.2)}
      if(inChallenge('p',11)){exp= exp.times(0.5)}
      if(inChallenge('p',12)){exp= exp.times(0.1)}
      if(hasUpgrade('a',25)){exp= exp.times(1.2)}
      if(hasUpgrade('p',21)){exp= exp.times(upgradeEffect('p',21))}
      if(hasUpgrade('s',27)){exp= exp.times(1.15)}
      if(inChallenge('p',13)){exp= exp.times(0.1)}
      if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
      if(hasAchievement('A',33)){exp= exp.times(1.04)}
      if(hasUpgrade('p',34)){exp= exp.times(upgradeEffect('p',34))}
      if(hasUpgrade('a',36)){exp= exp.times(1.005)}
      if(hasUpgrade('a', 45)) exp= exp.times(1.1)
      if(tmp.ch.holdEff>1) exp = exp.times(tmp.ch.holdEff)
      if(buyableEffect('c',34)>1) exp = exp.times(buyableEffect('c',34))
      if(hasMilestone('sp', 4)) exp= exp.times(1.035)
      if(gcs("r",81)==1) exp = exp.times(clickableEffect("r", 81))
      
     if(inChallenge('c',11))exp=exp.pow(0.2)
     
     if(tmp.a.snEff5.gte(0)) exp=exp.add(tmp.a.snEff5)
     if(!hasChallenge('c',12)) exp=exp.min(4.5)
      return exp
    },
    directMult() { //adirectmult
        mult = n(1)
        if(gcs("r",71)==1) mult = mult.times(clickableEffect("r", 71))
        if(gcs("r",101)==1) mult = mult.times(clickableEffect("r", 101))
        if(n(gba('sp',21)).gt(0)) mult=mult.times(buyableEffect('sp',21))
        return mult
    },
    row: 1, 
    branches() {return ['s']},
    deactivated(){
      return inChallenge('p',13)
    },
    scCal() {
      sc=n(4000)
      
      return sc
    },
    sceCal() {
      sce=n(0.5)
      if(hasUpgrade('ch',51)) sce=n(0.6)
      
      return sce
    },
    hotkeys: [
        {key: "a", description: "A: Reset for Arcaea", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    snaCal() {
sna=n(1)
if(buyableEffect('c',44).gte(1)) sna=sna.times(buyableEffect('c',44))
if(tmp.a.snEff3.gte(1)) sna=sna.times(tmp.a.snEff3)
if(hasUpgrade('sp',14)) sna=sna.times(2)
if(hasUpgrade('sp',15)) sna=sna.times(upgradeEffect('sp',15))
if(hasUpgrade('sp',16)) sna=sna.times(upgradeEffect('sp',16))
if(tmp.a.drEff1.gte(1)) sna=sna.times(tmp.a.drEff1)
if(hasUpgrade('sp',23)) sna=sna.times(upgradeEffect('sp',23))
if(hasUpgrade('sp',26)) sna=sna.times(2)
if(hasMilestone('r',0)) sna=sna.times(2)
return sna
    },
    snsCal() {
      sns=n(2)
      if(hasUpgrade('sp',14)) sns=sns.add(2)
      if(hasUpgrade('ch',53)) sns=sns.add(1)
      if(hasUpgrade('ch',55)) sns=sns.add(1)
      return sns
    },
    snEff1() {
  sn=player.a.sn.max(1)
eff=sn.log(10).pow(2).add(1)
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff>25) eff = eff.sub(24).pow(0.5).add(24)//sc
return eff
    },
    snEff2() {
    sn=player.a.sn.max(1)
eff=n(1e4).pow(sn.pow(0.5))
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff.log10().gte(1000)) eff = n(10).pow(eff.log10().sub(1000).pow(0.8).add(1000))//sc
if(eff.log10().gte(5000)) eff = n(10).pow(eff.log10().sub(5000).pow(0.5).add(5000))//sc2
if(!hasAchievement('A',74)) return n(1)
return eff},
    snEff3() {
  sn=player.a.sn.max(1)
eff=sn.log(100).pow(2.5).add(1)
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff>10) eff = eff.sub(9).pow(0.5).add(9)//sc
if(!hasUpgrade('sp',13)) return n(1)
return eff
    },
    snEff4() {
    sn=player.a.sn.max(1)
eff=n('1e1000').pow(sn.pow(0.4).div(10))
if(tmp.a.drEff2.gte(1)) eff=eff.pow(tmp.a.drEff2)
if(eff.log10().gte(10000)) eff = n(10).pow(eff.log10().sub(10000).pow(0.8).add(10000))//sc
if(eff.log10().gte(100000)) eff = n(10).pow(eff.log10().sub(100000).pow(0.5).add(100000))//sc2
if(!hasUpgrade('ch',54)) return n(1)
return eff},
    snEff5() {
  sn=player.a.sn.max(1)
eff=sn.log(100).div(3).pow(0.5).sub(0.75).max(0)
if(tmp.a.drEff2.gte(1)) eff=eff.mul(tmp.a.drEff2)
if(eff>1) eff = eff.pow(0.5)//sc
if(!hasUpgrade('sp',22)) return n(1)
return eff
    },
    draCal() {
      sn=player.a.sn
      dr=sn.div(1e5).pow(0.2)
      if(hasUpgrade('sp',24)) dr=dr.times(upgradeEffect('sp',24))
      if(hasUpgrade('sp',26)) dr=dr.times(2)
      return dr
    },
    drEff1() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(10).add(1).pow(2)
if(eff.gte(10)) eff = eff.sub(9).pow(0.5).add(9)//sc
if(!hasUpgrade('ch',57)) return n(1)
return eff
    },
    drEff2() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(10).add(1).pow(0.5).sub(1).div(10).add(1)
if(gcs("r",91)==1) eff = eff.pow(clickableEffect("r", 91))
if(!hasUpgrade('sp',21)) return n(1)
return eff
    },
    drEff3() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(10).add(1).pow(0.4).sub(1).div(10).add(1)
if(!hasUpgrade('sp',22)) return n(1)
return eff
    },
    drEff4() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(15).add(1).pow(0.4).sub(1).div(10).add(1)
if(!hasUpgrade('sp',25)) return n(1)
return eff
    },
    drEff5() {
  dr=player.a.dr.max(1)
eff=dr.add(1).log(18).add(1).pow(0.4).sub(1).div(10).add(1)
if(!hasUpgrade('sp',27)) return n(1)
return eff
    },
    update(diff) {
     if(player.devSpeed.neq(0)) {
			if (hasMilestone('c',8)) layers.a.clickables[11].onClick()
			if (hasMilestone('c',8)) layers.a.clickables[12].onClick()
			if (hasMilestone('c',8)) layers.a.clickables[13].onClick()
			if(hasUpgrade('sp',11)) player.a.ptt=player.a.pttMax
			if(hasUpgrade('sp',17)) player.a.sn=player.a.sn.add(player.a.sna.mul(diff))
			if(hasUpgrade('sp',25)) player.a.dr=player.a.dr.add(player.a.dra.mul(diff).mul(0.1))
			if(hasUpgrade('sp',27)) player.a.dr=player.a.dr.add(player.a.dra.mul(diff).mul(0.9))
			player.a.sna=tmp.a.snaCal
			player.a.sc=tmp.a.scCal
			player.a.sce=tmp.a.sceCal
			player.a.sns=tmp.a.snsCal
			player.a.dra=tmp.a.draCal
     }
		},
    layerShown(){
    return player.a.points.gt(0)||player.a.unlocked()||hasAchievement('A',111)},
 passiveGeneration(){
   mult = n(0)
  if(hasUpgrade('s',17))
  mult = n(2)
  if(hasMilestone('p',0))
  mult = mult.add(5)
  if(hasUpgrade('p',13))
  mult = mult.times(5)
  if(hasMilestone('r',0))
  mult = mult.add(10);
  return mult },
  softcap:n (1e10),
  softcapPower:n(0.05),
  autoUpgrade() {upg=false
 if(hasMilestone('p',2)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
  resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
     if (resettingLayer == "t") {
         kept.push("challenges")
     }
     if (resettingLayer == "p") {
       if (hasMilestone("p", 0)||hasMilestone("c", 0)) {kept.push("ptt","pttMax","pttMax2")}
         if (hasMilestone("p", 4)||hasMilestone("c", 0)) {kept.push("challenges")}
     }
     if (resettingLayer == "m") {
         if (hasMilestone("m", 1)||hasMilestone("c", 0)) {kept.push("challenges","ptt","pttMax","pttMax2")}
     }
     if (resettingLayer == "c") {
         if (hasMilestone("c", 0)) {kept.push("challenges")}
         if (hasMilestone("c", 3)) {kept.push("challenges","upgrades")}
     if (hasMilestone("c", 5)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2")}
     }
     if (resettingLayer == "ch") {
     if (hasMilestone("ch", 0)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2")}}
    if (hasMilestone("sp", 0)) {kept.push("upgrades","challenges")}
    if(hasUpgrade('ch',55)) kept.push("sn","dr")
    if (hasMilestone("r", 1)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2","sn","dr")}
     layerDataReset(this.layer, kept)
        }
        
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
    12: {
        name: "Present",
        challengeDescription:"Notes获取量变为原来的1e-500倍",
        goalDescription:"1e20 Notes",
        rewardDescription:"源点获取量变为原来的15倍",
        unlocked(){unlock= false
        if(hasChallenge('a',11)) unlock=true
   return unlock
        },
        canComplete: function() {return player.points.gt(1e20)||hasMilestone('p',0)},
    },
    13: {
        name: "Future",
        challengeDescription:"歌曲获取量^0.35，且Notes获取量×1e-500",
        goalDescription:"1e200 Notes",
        rewardDescription:"解锁一个歌曲可购买",
        unlocked(){unlock= false
        if(hasChallenge('a',12)) unlock=true
   return unlock
        },
        canComplete: function() {return player.points.gt(1e200)||hasMilestone('p',0)},
    },
    14: {
        name: "Beyond",
        challengeDescription:"歌曲获取量^0.15，且Notes获取量×1e-800",
        goalDescription:"114514 Notes",
        rewardDescription:"解锁下一个层级，歌曲和源点的指数×1.2（软上限前）",
        unlocked(){unlock= false
        if(hasUpgrade('a',24)) unlock=true
   return unlock
        },
        canComplete: function() {return player.points.gt(114514)||hasMilestone('p',0)},
    },
},
  upgrades: {
    11:{ title: "我们音游玩家是这样的",
    description:"根据源点乘以歌曲的获取量，效果是源点^3",
    cost: n(1),
    effect() {
    return player['a'].points.add(1).pow(3)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "韵律的力量",
    description:"升级11效果提升（源点^3——^8），源点不重置歌曲升级",
    cost: n(2),
    unlocked() { return (hasUpgrade('a', 11))},
    effect() {
   return player['a'].points.add(1).pow(5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "我知道，这很痛苦",
    description:"每秒获得100%重置时获得的歌曲",
   cost: n(2),
    unlocked() { return (hasUpgrade('a', 12))},
     },
    14:{ title: "优质曲库",
   description:"解锁更多歌曲升级",
    cost: n(5),
    unlocked() { return (hasUpgrade('a', 13))},},
    15:{title:"PoTenTial",
    description:"解锁挑战",
    cost: n(500),
    unlocked() { return (hasUpgrade('s', 17))},},
    16:{title:"有那么快吗？",
    description:"歌曲^1.25，Notes×1e30（挑战中可能有效！）",
    cost: n(9999),
    unlocked() { return (hasChallenge('a', 11))},},
    17:{title:"高质量曲库",
    description:"再次解锁更多歌曲升级",
    cost: n(199999),
    unlocked() { return (hasChallenge('a', 12))},},
     21:{title:"挑战3的额外奖励？？",
    description:"歌曲基本指数增加0.25",
    cost: n(3e8),
    unlocked() { return (hasChallenge('a', 13))},},
    22:{title:"购买歌曲",
    description:"歌曲指数乘以1.2（软上限前）",
    cost: n(3e9),
    unlocked() { return (hasUpgrade('a', 21))},},
    23:{title:"真的有软上限吗？",
    description:"歌曲和源点指数+1（软上限前）",
    cost: n(1e12),
    unlocked() { return (hasUpgrade('a', 22))},},
    24:{title:"未来的挑战",
    description:"解锁第四个挑战“Beyond”，歌曲指数×1.2（软上限前）",
    cost: n(1e13),
    unlocked() { return (hasUpgrade('a', 23))},},
    25:{ title: "韵律之光",
    description:"源点指数乘以1.2（软上限前）",
    cost: n(5e14),
    unlocked() { return (hasMilestone('l', 0))}, },
    26:{ title: "韵律的力量 II",
    description:"根据PTT增益源点，效果是100^(PTT+1)（软上限前）",
    cost: n(1.5e15),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
   return n(100).pow(player.a.ptt.add(1))
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    27:{ title: "韵律之神",
    description: "解锁下一个层级，Phigros",
    cost: n(1e17),
    unlocked() { return (hasMilestone('l', 2))}, },
    31:{ 
      fullDisplay() {return "Singularity<br>加强PTT对Phidata的增益效果<br>当前效果："+format(this.effect())+"×<br>需要：8 PTT"},
    cost() {return n(8)},
    canAfford() {return player.a.ptt.gte(8)},
    unlocked() { return (hasUpgrade('p', 23))},
    effect() {
   a= n(2).pow(player.a.ptt.div(3))
   if(hasUpgrade('j',24)) a=a.pow(25)
   return a
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    32:{ 
      fullDisplay() {return "Cyaegha<br>基于歌曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.1 PTT"},
    canAfford() {return player.a.ptt.gte(8.1)},
    unlocked() { return (hasUpgrade('a', 31))},
    effect() {
   a=player.s.points.add(10).log(3).pow(0.25)
     if(hasUpgrade('j',24)) a=a.pow(25)
   return a
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    33:{ 
      fullDisplay() {return "烈華RESONANCE<br>基于源点增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.4 PTT"},
    canAfford() {return player.a.ptt.gte(8.4)},
    unlocked() { return (hasUpgrade('a', 32))},
    effect() {
    a=player.a.points.add(10).log(2).pow(0.4)
     if(hasUpgrade('j',24)) a=a.pow(25)
   return a
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    34:{ 
      fullDisplay() {return "Halcyon<br>基于魔王曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.5 PTT"},
    canAfford() {return player.a.ptt.gte(8.5)},
    unlocked() { return (hasMilestone('m',0))},
    effect() {
   return player.m.points.mul(3).add(1).pow(4)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    35:{ 
      fullDisplay() {return "#1f1e33<br>基于Phidata增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：9.2 PTT"},
    canAfford() {return player.a.ptt.gte(9.2)},
    unlocked() { return (hasMilestone('m',1))},
    effect() {
   return player.p.points.add(10).log(10).pow(1.2)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    36:{ 
      fullDisplay() {return "Dantalion<br>源点^1.005（软上限后）<br>当前效果：^1.005<br>需要：10 PTT"},
    canAfford() {return player.a.ptt.gte(10)},
    unlocked() { return (hasUpgrade('p',35))},},
    37:{ 
      fullDisplay() {return "CHAOS<br>是时候了<br>...<br>解锁下一个层级，Cytus<br>需要：10.8 PTT"},
      onPurchase() {if(!hasMilestone('c',0)) confirm("…下一纪元，Cytus")},
    canAfford() {return player.a.ptt.gte(10.8)},
    unlocked() { return hasUpgrade('p',37)},},
    41:{ 
      fullDisplay() {return "最强STRONGER<br>基于PTT增益Notes<br>当前效果:"+format(this.effect())+"×<br>价格: 1e830源点"},
      cost: n('1e830'),
      effect() {return n(10).pow(player.a.ptt.pow(2.5).min(2000))},
    unlocked() { return hasChallenge('c',11)},},
    42:{ 
      fullDisplay() {return "Abstruse Dilemma<br>基于RKS增益Notes<br>当前效果:"+format(this.effect())+"×<br>价格: 8.88e880源点"},
      cost: n('8.88e880'),
      effect() {return n(10).pow(player.p.rks.mul(5).pow(2.25).min(2000))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',32)},},
    43:{ 
      fullDisplay() {return "Aegleseeker<br>基于源点降低诗篇的基本需求<br>当前效果:^"+format(this.effect())+"<br>价格: 1.060e1060源点"},
      cost: n('1.06e1060'),
      effect() {return n(1).div(player.a.points.add(15).log(10000).pow(0.3).min(10).max(1))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',33)},},
    44:{ 
      fullDisplay() {return "Grievous Lady<br>基于源点降低魔王曲的基本需求<br>当前效果:^"+format(this.effect())+"<br>价格: 1e1185源点"},
      cost: n('1e1185'),
      effect() {return n(1).div(player.a.points.add(15).log(150).pow(0.2).min(8).max(1))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',34)},},
    45:{ 
      fullDisplay() {return "Tempetissimo<br>根据累计前八个Cytus可购买数量增益Note<br>当前效果:×"+format(this.effect())+"<br>价格: 1e1230源点"},
      cost: n('1e1230'),
      effect() {return n(2.02e20).pow(gba('c',11).add(gba('c',12)).add(gba('c',13)).add(gba('c',14)).add(gba('c',21)).add(gba('c',22)).add(gba('c',23)).add(gba('c',24)))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('l',17)},},
    46:{ 
      fullDisplay() {return "Testify<br>上一个升级效果提升，并且对所有Cytus可购买都生效<br>当前效果:×"+format(this.effect())+"<br>价格: 1e1775源点"},
      cost: n('1e1775'),
      effect() {return n(1e50).pow(gba('c',11).add(gba('c',12)).add(gba('c',13)).add(gba('c',14)).add(gba('c',21)).add(gba('c',22)).add(gba('c',23)).add(gba('c',24)).add(gba('c',31)).add(gba('c',32)).add(gba('c',33)).add(gba('c',34)).add(gba('c',41)).add(gba('c',42)).add(gba('c',43)).add(gba('c',44)))
      },
    unlocked() { return hasChallenge('c',14)},},
    47:{ 
      fullDisplay() {return "Arcaea Forever<br>Notes获取量乘以源点量^5<br>当前效果:×"+format(this.effect())+"<br>价格: 1e1855源点"},
      cost: n('1e1855'),
      effect() {eff= player.a.points.pow(5)
    if(eff.gte('1e50000')) eff=n(10).pow(eff.log(10).sub(50000).pow(0.8).add(50000))//sc
        return eff.max(1)},
    unlocked() { return hasUpgrade('ch',35)},},
},
  clickables: {
    11: {
      title() {return "增加PTT"},
      display() {return "点击或按住以增加PTT！"},
      canClick() {return true},
      onClick() {
       let ptt=n(10).pow(player.a.pttMax.add(1)).log(2).div(n(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0)
       player.a.ptt = player.a.ptt.add(ptt)
      },
      onHold() {
       let ptt=n(10).pow(player.a.pttMax.add(1)).log(2).div(n(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0)
       player.a.ptt = player.a.ptt.add(ptt)
      },
    },
    12: {
      title() {return "增加PTT上限"},
      display() {return "点击或按住以增加PTT上限<br>（基于诗篇数量，最大35）"},
      canClick() {return true},
      onClick() {
       let pttMax=player.l.points.min(35).add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0)
       player.a.pttMax = player.a.pttMax.add(pttMax).min(tmp.ri.arc1)
      },
      onHold() {
       let pttMax=player.l.points.min(35).add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0)
        player.a.pttMax = player.a.pttMax.add(pttMax).min(tmp.ri.arc1)
      },
      unlocked() {return hasMilestone('l',2)||hasMilestone('p',1)}
    },
    13: {
      title() {return "增加PTT上限2"},
      display() {return "增加上一个可点击效果的上限（基于Phidata数量）<br>上限×"+format(n(1).div(player.a.pttMax2))+"<br>确切来说，×"+n(1).div(player.a.pttMax2)},
      canClick() {return true},
      onClick() {player.a.pttMax2 = player.a.pttMax2.sub(player.p.points.add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1)))},
      onHold() {player.a.pttMax2 = player.a.pttMax2.sub(player.p.points.add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1)))},
      unlocked() {return hasUpgrade('l',13)}
    },
    21: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==1},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',11)}
    },
    22: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==2},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',11)}
    },
    23: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==3},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',14)}
    },
    24: {
      title() {return "蛇长度+"},
      display() {return "将蛇的长度增加"+format(player.a.sna)},
      canClick() {return player.a.snRandom==4},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna)
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('sp',14)}
    },
    31: {
      title() {return "蛇长度++"},
      display() {return "将蛇的长度增加"+format(player.a.sna.times(2))},
      canClick() {return player.a.snRandom==5},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna.times(2))
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('ch',53)}
    },
    32: {
      title() {return "蛇长度++"},
      display() {return "将蛇的长度增加"+format(player.a.sna.times(2))},
      canClick() {return player.a.snRandom==6},
      onClick() {player.a.sn=player.a.sn.add(player.a.sna.times(2))
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return hasUpgrade('ch',55)}
    },
    41: {
      title() {return "强制重置"},
      display() {return "当所有蛇可点击都不能点击时，点此重置可点击（这八成是因为你漏了某些升级）"},
      canClick() {return true},
      onClick() {
player.a.snRandom=n(Math.random()).times(player.a.sns).floor().add(1)},
      unlocked() {return true}
    },
    51: {
      title() {return "龙重置"},
      display() {return "重置蛇使龙的长度增加"+format(player.a.dra)},
      canClick() {return player.a.dra.gte(1)&&player.a.sn.gte(1e5)},
      onClick() {player.a.dr=player.a.dr.add(player.a.dra)
        player.a.sn=n(0)
      },
      unlocked() {return hasUpgrade('ch',57)}
    },
},
tabFormat: {
   "Upgrades": {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
    "resource-display",
        ["display-text",
      function() {return '你有 ' + format(player.s.points) + ' 歌曲<br>你正在获得 ' + format(n(tmp.a.resetGain).mul(tmp.a.passiveGeneration))+' 源点每秒'},
      function() {
        if(tmp.a.gainMult.log10().gte(player.a.sc)) return "由于源点获取量超过"+format(n(10).pow(player.a.sc))+"，源点获得量超出部分指数^"+format(player.a.sce)+"！//2"
      },
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
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
   "PTT": {
        content: [ ["infobox","pttBox"],
   "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.a.ptt) + ' PTT!'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '当前PTT上限： ' + format(player.a.pttMax) + ' PTT'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '确切来说，你有 ' + player.a.ptt + ' PTT'+'<br>当前的PTT上限为 ' + player.a.pttMax},
     {"color": "#ffffff", "font-size": "9px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {if(player.a.pttMax.gte(13)) return 'PTT在13时达到硬上限！'},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     "blank",
        ['row',[['clickable',11],['clickable',12],['clickable',13]]],
    ['row',[['upgrade',31],['upgrade',32],['upgrade',33],['upgrade',34],['upgrade',35],['upgrade',36],['upgrade',37]]],
      ['row',[['upgrade',41],['upgrade',42],['upgrade',43],['upgrade',44],['upgrade',45],['upgrade',46],['upgrade',47]]],
],
  unlocked(){return hasUpgrade('l',11)||hasMilestone('p',1)}
},
   "Snake": {
        content: [ ["infobox","snakeBox"],
   "main-display",
    "prestige-button",
    ["display-text",
      function() {return '当前蛇的长度：' + format(player.a.sn) + ' 物量!'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '每次点击增加蛇的长度：' + format(player.a.sna) + ' 物量!'},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {return '1.使课题力量获取量×' + format(tmp.a.snEff1)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasAchievement('A',74)) return '2.软上限后源点获取量×' + format(tmp.a.snEff2)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',13)) return '3.蛇每次点击获取量×' + format(tmp.a.snEff3)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('ch',54)) return '4.Notes获取量×' + format(tmp.a.snEff4)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',22)) return '5.源点获取指数+' + format(tmp.a.snEff5)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     "blank",
    ['row',[['clickable',21],['clickable',22],['clickable',23],['clickable',24]]],
    ['row',[['clickable',31],['clickable',32],['clickable',33],['clickable',34]]],
    ['row',[['clickable',41]]],
    ["display-text",
      function() {if(hasUpgrade('ch',57)) return '当前龙的长度：' + format(player.a.dr) + ' 物量!'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {if(hasUpgrade('ch',57)) return '现在重置增加龙的长度：' + format(player.a.dra) + ' 物量!'},
     {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('ch',57)) return '1.蛇每次点击获取量×' + format(tmp.a.drEff1)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',21)) return '2.软上限前蛇的所有效果^' + format(tmp.a.drEff2)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',22)) return '3.课题力量^' + format(tmp.a.drEff3)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',25)) return '4.Notes获取量^' + format(tmp.a.drEff4)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
     ["display-text",
      function() {if(hasUpgrade('sp',27)) return '5.课题模式总分×' + format(tmp.a.drEff5)},
     {"color": "#ffffff", "font-size": "18px", "font-family": "Comic Sans MS"}],
    ['row',[['clickable',51],['clickable',52],['clickable',53],['clickable',54]]],
],
  unlocked(){return hasUpgrade('sp',11)}
},
},
})*/

addLayer("p", 
{
  infoboxes: {
    introBox: {
    title: "声望",
    body(){ return "欢迎来到声望!!!"
         },
        },
},
    name: "声望",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked() { return (hasUpgrade('o', 15))
        //||hasAchievement('A',111)},
		points: n(0),
    }}},
     color: "#22eeff",
    requires() {req=n(1000)
   // if(hasUpgrade('a',43))req=req.pow(upgradeEffect('a',43))
    return req},
    resource: "声望",
    baseResource: "Q币", 
    baseAmount() {return player.points}, 
    type: "static", 
    exponent: 1, 
    gainMult() { //lgainmult//
        mult = n(1)
        return mult
    },
    gainExp() { //lgainexp
      exp= n(0.1)
//if(!hasChallenge('c',11)) {
      if(player.p.points.gte(4)) exp= n(0.06)
      if(player.p.points.gte(15)) exp= n(0.015).div(player.p.points.sub(14).pow(0.5))
      if(player.p.points.gte(30)) exp= n(0.001)
  //    }
      //if(hasUpgrade('ch',27)) exp=exp.max(0.075)
     // if(buyableEffect('c',24)>1) exp = exp.times(buyableEffect('c',24))
       return exp
    },
    directMult() { //ldirectmult
        mult = n(1)
        
        return mult
    },
    row: 1, 
    branches(){return ['o']},
    canBuyMax(){return false
    //hasChallenge('c',11)
    },
    hotkeys: [
        {key: "p", description: "P重置声望", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown=true
   /* hasAchievement('A',111)
    if(hasChallenge('a',14)){shown=true}
    if(hasMilestone('p',0)){shown=true}*/
    return shown},
    autoPrestige() {return hasUpgrade('p',12)},
    resetsNothing() {return hasUpgrade('p',12)},
    /*autoUpgrade() {upg=false
 if(hasMilestone('p',2)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},*/
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
     let kept = ["unlocked", "auto"]
    /* if (resettingLayer == "p") {
         if (hasMilestone("p", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
     }
     if (resettingLayer == "m") {
         if (hasMilestone("m", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
     }
     if (resettingLayer == "c") {
         if (hasMilestone("c", 1)) {kept.push("milestones")}
         if (hasMilestone("c", 3)) {kept.push("milestones","upgrades")}
     }
     if (resettingLayer == "ch") {
         if (hasMilestone("ch", 0)) {kept.push("milestones","upgrades")}
     }
     
     if (hasMilestone("sp", 0)) {kept.push("upgrades")}
     if (hasMilestone("sp", 2)) {kept.push("milestones")}
     if(hasMilestone('r',2)) kept.push("upgrades","milestones")*/
     layerDataReset(this.layer, kept)
        }
    },
  softcap:n (1e1000000),
  softcapPower:n(0.05),
    upgrades: {
    11:{ title: "PQ链接",
    description:"使声望加成赚钱速度",
    effect() {return player.p.points.add(2).pow(5)},

    effectDisplay() { return format(upgradeEffect(this.layer, this.id))×},
    cost: n(1),
    unlocked() {return true}, },
    12:{ title: "PO直达",

    description() {return "声望同样加成原点"},

    effect() {return player.p.points.add(3).pow(2.5)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))×},
    cost: n(2),
    unlocked() {return hasUpgrade('p',11)}, },
    /*
    14:{ title: "潜能无限 II",
    description() {return "让RKS也生效于“潜能无限”的效果（基于RKS指数提升Notes）"},
    effect() {return player.p.rks.add(9).log(10).min(1.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id),4)},
    cost: n(25),
    unlocked() {return hasUpgrade('p',37)}, },
    15:{ title: "歌曲串烧",
    description() {return "歌曲^1.035（软上限后）"},
    cost: n(28),
    unlocked() {return hasUpgrade('p',37)}, },
    16:{ title: "诗笺之理",
    description() {return "基于诗篇提升Notes"},
    effect() {return player.l.points.max(1).pow(player.l.points.max(1)).pow(10).min('1e5000')
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: n(110),
    unlocked() {return hasChallenge('c',11)&&hasUpgrade('a',43)}, },
    17:{ title: "空笺之理",
    description() {return "基于魔王曲提升Notes<br>升级谐音反物质维度：时间之理、空间之理"},
    effect() {return player.m.points.add(1).pow(player.m.points.mul(3).max(100)).pow(4).min('1e1200') },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: n(129),
    unlocked() {return hasUpgrade('s',35)}, },*/
   },
   /* milestones: {
    0: {
        requirementDescription: "获得1个诗篇",
        effectDescription: "自动购买歌曲升级，解锁一个Arcaea升级",
        done() { return player.l.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个诗篇",
        effectDescription: "解锁一个歌曲升级和一个Arcaea升级，解锁Lanota升级",
        unlocked() {return hasMilestone('l',0)},
        done() { return player.l.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个诗篇",
        effectDescription: "解锁更多升级",
        unlocked() {return hasMilestone('l',1)},
        done() { return player.l.points.gte(3) }
    },
},*/
tabFormat: {
    /*"Milestones":
    {
        content: [ ["infobox","introBox"],
   "main-display",
    "prestige-button",
        [
   "display-text",function(){if(!hasChallenge('c',11)) return '软上限：3诗篇，15诗篇，30诗篇！'},
        {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
     [
   "display-text",function(){if(hasUpgrade('c',12)&&!hasUpgrade('ch',27)) return '由于自动重置诗篇不稳定，诗篇获取量变得不稳定！<br>好吧对不起，这其实是一系列原因导致的bug，不过请放心，它不会对游戏有太大影响，而且在接下来的游戏进展中会修复'},
        {"color": "#ffffff", "font-size": "15px", "font-family": "Comic Sans MS"}],
    "milestones",],},*/
    "Upgrades": {
        content: [ 
     "main-display",
    "prestige-button",
    "upgrades",
],

    },
},
})//声望



