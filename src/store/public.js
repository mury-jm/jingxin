export default {
    namespaced: true,
    state: {
        // 轮播图
        timeswiper: [
            { img: require('../assets/img/0.jpg') },
            { img: require('../assets/img/1.jpg') },
            { img: require('../assets/img/2.jpg') },
            { img: require('../assets/img/3.jpg') },
        ],

        // 视频  api接口 为你推荐
        videolist: [
            {
                type: 1,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/ttqxo9s3cblgofl1495616523/332',
                name: '全职高手',
                text: '十年热血书写电竞辉煌',
                video: 'http://v.qq.com/iframe/player.html?vid=x002353t5ih',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/ttqxo9s3cblgoflt1471595407.jpg/0',
                details: '网游荣耀中被誉为教科书级别的顶尖高手叶修，因为种种原因遭到俱乐部的驱逐，离开职业圈的他寄身于一家网吧成了一个小小的网管，但是，拥有十年游戏经验的他，在荣耀新开的第十区重新投入了游戏，带着对往昔的回忆，'
            },
            {
                type: 1,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/0s8n49g3g1rv1oz1529090021/332',
                name: '星辰变 第1季',
                text: '少年逆天改命成王',
                video: 'http://v.qq.com/iframe/player.html?vid=m002777wq26',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/0s8n49g3g1rv1oz1556590676/0',
                details: '秦德渡劫大战后，秦羽和小黑下落不明，怒不可赦的秦德回朝抓紧了攻取楚国的行动，然而秦羽大难之后并没有死，并且与小黑意外的到达雷山居中，依靠流星泪修复身体，和雷卫的《星辰变》'
            },
            {
                type: 1,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/8vdu7i5hr7anq5q1535824631/332',
                name: '全职法师 第3季',
                text: '法师集结，决战狂魔',
                video: 'http://v.qq.com/iframe/player.html?vid=s0027wa48uk',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/8vdu7i5hr7anq5q1535824602/0',
                details: '莫凡迁至魔都，卷入“秘密事件”的调查中。过程中，莫凡帮助唐月脱困，意外获得玫炎火种，再度觉醒双系，目标直指明珠学府。大学生活开始，召唤系迎来“斗兽大赛”的挑战。'
            },
            {
                type: 1,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/t3r079jy8xze9cv1509086905/332',
                name: '帝王攻略',
                text: '朝堂上的恩怨纠葛',
                video: 'http://v.qq.com/iframe/player.html?vid=g0026mxl1x7',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/t3r079jy8xze9cv1509086785/0',
                details: '楚渊与段白月一个在朝堂一个在西南，所有人都以为他们是相互对立的关系，却没想到他们之间却并不是如此。为这大好河山，楚渊要做一个好皇帝，段白月便成为他最大的助力。'
            },
        ],
        // 日漫
        videolist2: [
            {
                type: 2,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/53q0eh78q97e4d11547290567/332',
                name: '名侦探柯南 日语版',
                text: 'chu~这是我对你告白的回答',
                video: 'http://v.qq.com/iframe/player.html?vid=x00174aq5no',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/53q0eh78q97e4d11555149422/0',
                details: '工藤新一，米花高中二年极学生，与小兰是青梅竹马，两人感情很好。继承了父亲的超强推理能力，被誉为高中生名侦探。他喜欢看推理小说，最崇拜福尔摩斯，另外踢足球的水平也是一流。'
            },
            {
                type: 2,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/5inc5xigj39zzgq1563366378/332',
                name: '异世界超能魔术师',
                text: '无敌天赋！最强异界法师',
                video: 'http://v.qq.com/iframe/player.html?vid=g0031flsruf',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/5inc5xigj39zzgq1561369298/0',
                details: ' 随处可见的普通高中生·西村太一，以及运动神经出众的模特体型美少女·吾妻凛。 过着和平的高中生活的二人，有一天突然被不可思议的魔法阵光包围，误入了陌生的土地。'
            },
            {
                type: 2,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/w1ppt1vtbxcilgv1501232199/332',
                name: '蜡笔小新 第6季',
                text: '最爆笑的小男孩儿',
                video: 'http://v.qq.com/iframe/player.html?vid=o0024gd0w91',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/w1ppt1vtbxcilgv1537345415/0',
                details: '《蜡笔小新》是一部描写主人公野原新之助和周围人群的日常生活的搞笑喜剧片。调皮的野原新之助作已经是最为知名的动漫角色形象之一。虽然原作者的臼井仪人先生已经离世，但蜡笔小新的故事还将继续。第6季继续为我们带来热闹爆笑的小新新故事。'
            },
            {
                type: 2,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/7jzjwwtpqo2hilut1444777842.jpg/332',
                name: '中华小当家',
                text: '料理的梦想',
                video: 'http://v.qq.com/iframe/player.html?vid=z0024gai02c',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/7jzjwwtpqo2hilut1444753053.jpg/0',
                details: '中华小当家，（日文：中华一番!‎，漫画连载后期改为：真中华一番!‎），又译中华一番！或中华小厨师，是1997年至1999年于日本少年Magazine周刊连载，由小川悦司的漫画作品，此外并有动画版本发行播出。'
            },
        ],
        // 国漫
        videolist3: [
            {
                type: 3,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/3enwc74hj562xjd1526607778/332',
                name: '一人之下 第2季',
                text: '风起云涌罗天大醮',
                video: 'http://v.qq.com/iframe/player.html?vid=o0565ln4aq0',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/3enwc74hj562xjd1508914052/0',
                details: '这个世界是存在异人的。刚刚接触异人世界的张楚岚，加入了管理异人的组织“哪都通”。为了解开爷爷和自身的秘密，张楚岚和冯宝宝一起前往龙虎山天师府参加异人界的盛会——罗天大醮，并与众多异人高手对战。'
            },
            {
                type: 3,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/z4ulitk78335qjq1550115257/332',
                name: '猫妖的诱惑 正式版',
                text: '自古爱恨两难，当然是插他两刀',
                video: 'http://v.qq.com/iframe/player.html?vid=g08159ql4v6',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/z4ulitk78335qjq1550115240/0',
                details: ' 精分猫妖带着前世记忆重生，扬言要找前世恋人复仇，但是看到他就好想亲亲扑倒怎么办？！看史上最没节操的女主在高冷禁欲男神和邪魅冷艳妖王之间，如何抉择！'
            },
            {
                type: 3,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/jg2a5feze5bryj21543543009/332',
                name: '通灵妃',
                text: '年度鬼畜爱情大戏',
                video: 'http://v.qq.com/iframe/player.html?vid=c0805uscvd8',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/jg2a5feze5bryj21544668734/0',
                details: ' 丞相府大小姐千云兮自小身负异能，被视为不详之人养在灵云山上，16岁这年代替妹妹千云裳嫁入夜王府，传说夜幽冥性情古怪，冷酷残暴，千云兮将面临的会是怎样的处境呢……'
            },
            {
                type: 3,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/g6da8tj74x97ebk1499667567/332',
                name: '实验品家庭',
                text: '非正常人类的温馨日常',
                video: 'http://v.qq.com/iframe/player.html?vid=e00265q0t24',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/g6da8tj74x97ebk1523260871/0',
                details: '丹尼斯的双亲是未受到社会支持的疯狂科学家。他们将自己的孩子监禁在孤岛的研究所，进行秘密实验，将除丹尼斯以外的一个哥哥和三个姐姐改造成了特异的人类。 某天，父母被警察拘捕、孩子们则在社工安排下到另一个小岛上居住。 问题是，除主人公以外的四名兄姐， 没有一人拥有现代人的常识'
            },
        ],
        // 强档推荐
        videolist4: [
            {
                type: 4,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/m441e3rjq9kwpsc1580520073/498',
                name: '斗罗大陆',
                text: '巍巍昊天，佼佼战锤！',
                video: 'http://v.qq.com/iframe/player.html?vid=m00253deqqo',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/m441e3rjq9kwpsc1575196882/0',
                details: '唐门外门弟子唐三，因偷学内门绝学为唐门所不容，跳崖明志时却发现没有死，反而以另外一个身份来到了另一个世界，一个属于武魂的世界，名叫斗罗大陆。'
            },
            {
                type: 4,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/ipmc5u3dwb48mv21580432321/498 ',
                name: '武庚纪',
                text: '结束纷争，一统部族！',
                video: 'http://v.qq.com/iframe/player.html?vid=k0020b47y1z',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/ipmc5u3dwb48mv21568708922/0',
                details: '最强脑洞封神演义《武庚纪》，是由玄机科技与腾讯视频联合出品，是由杭州玄机科技信息技术有限公司根据香港封神漫画题材改编而来的动画系列，并由著名动画导演沈乐平(《秦时明月》总导演)亲自执导,由玄机科技最顶级的制作团队倾力打造,作品将在漫画原著基础上，沿袭中国古代神话背景，浓墨重彩地演绎一出封神题材3D魔幻史诗巨制。'
            },
            {
                type: 4,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/mzc002007ipixwq1580432784/498',
                name: '妖精种植手册',
                text: '少女献祭！化身地狱囚笼',
                video: 'http://v.qq.com/iframe/player.html?vid=j0033deh0c9',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc002007ipixwq1569758227/0',
                details: ' 主人公园丁打算坐飞机去动漫乐园游玩，不料还未登机时却误入到了朵雅大陆。这个大陆是多元宇宙论中无限个宇宙集合中的其中一个。园丁见识到了美丽的朔月学院，地龙拉着的马车，天空中学员使用魔法决斗，对于游戏老玩家的园丁来说很快地适应和认知到了自己已经来到朵雅大陆的局面。'
            },
            {
                type: 4,
                img: 'https://puui.qpic.cn/vcover_hz_pic/0/0gsf9fytppje54d1579053679/498',
                name: '西行纪·完结',
                text: '孙悟空再掀世纪之战',
                video: 'http://v.qq.com/iframe/player.html?vid=d0027mif1kk',
                titimg: 'https://puui.qpic.cn/vcover_vt_pic/0/0gsf9fytppje54d1569567552/0',
                details: '《西行纪之集结篇》唐三藏师徒四人取得奇经交予天庭的十六年后，如今奇经下落不明，天庭血洗天羽山大肆搜寻，狼妖白狼不辞万难地寻回唐僧师徒，小队集结踏上还经之路……“西行众生”为正义集结，再赴热血征程！'
            },
        ],


        //地址列表信息：
        addressbool:false,
        addresslist:[
            {
                name: "张三",
                tel: "13099998888",
                province: "山西省",
                city: "晋中市",
                county: "和顺县",
                addressDetail: "文三路 138 号东方通信大厦 7 楼4 501 室",
                address: "山西省晋中市和顺县文三路 138 号东方通信大厦 7 楼4 501 室",
                areaCode: "140723",
                isDefault: true,
                id: 0,
            },
          ],

        //评论区数据
        pinlun: [
            { name: '熊大', text: '，真的好好看呀，收藏了！！', imgurl: require('../assets/img/0.jpg'), time: '2020/3/6', btnbool: 'true', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
            { name: '熊二', text: '，里的男主好帅', imgurl: require('../assets/img/1.jpg'), time: '2020/3/5', btnbool: 'true', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
            { name: '熊三', text: '，里的女主也好漂亮', imgurl: require('../assets/img/2.jpg'), time: '2020/3/4', btnbool: 'true', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
            { name: '熊四', text: '，此番必追', imgurl: require('../assets/img/3.jpg'), time: '2020/3/3', btnbool: 'true', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
            { name: '熊五', text: '，真是一部良心漫', imgurl: require('../assets/img/4.jpg'), time: '2020/3/2', btnbool: 'true', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
            { name: '熊六', text: '，真的太好看了！！！', imgurl: require('../assets/img/5.jpg'), time: '2020/3/1', btnbool: 'true', color: 'linear-gradient(to right, #4bb0ff, #6149f6)' },
        ]
    },
    mutations:{
        //编辑地址列表  删除键显示隐藏
        active_true(state){
            state.addressbool = true;
        },
        active_false(state){
            state.addressbool = false;
        }
    }
}