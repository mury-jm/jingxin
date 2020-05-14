import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    namespaced: true,
    state: {
        addid:0,
        addressbool:null,
        aa: 0,
        bb:0,
        shopallnum: 0,
        orderlist:[],
        orderbool:null,
        //联系人信息
        contentbool:true,
        contentlist:[],
        basequery:[],
        basebool:false,

        nookbool:null,
        nooklength:null,

        mylikelist:[],
        myvideolist:[],
        datalists: [
            { name: "首页", icon: "shop-collect-o" },
            { name: "分类", icon: "apps-o" },
            // { name: "花动态", icon: "flower-o" },
            { name: "购物车", icon: "shopping-cart-o" },
            { name: "我的", icon: "user-o" }
        ],
        //classify的数据
        classlist: [
            { name: '新品', isActive: true },
            { name: '预售', isActive: false },
            { name: '余量预售', isActive: false },
            { name: '火影忍者', isActive: false },
            { name: '异世界', isActive: false },
            { name: '初音', isActive: false },
            { name: 'ANIPLEX', isActive: false },
        ],
        imglists: [
            {
                topimg: 'http://www.aadongman.com/templets/2013/images/2020_chunjiebn_da.jpg',
                botbox: [
                    {
                        tit: '新品',
                        imgs: [
                            {
                                img: require('../assets/img/sb1.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '空运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb2.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb3.jpg'),
                                name: '精美手办3',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办4',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    },
                ]
            },
            {
                topimg: 'http://www.aadongman.com/templets/2013/images/dierda.jpg',
                botbox: [
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    }
                ]
            },
            {
                topimg: 'http://www.aadongman.com/templets/2013/images/diyida.jpg',
                botbox: [
                    {
                        tit: '余量预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb1.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb3.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    }
                ]
            },
            {
                topimg: 'http://www.aadongman.com/templets/2013/images/diwuda.jpg',
                botbox: [
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb2.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    }
                ]
            },
            {
                topimg: 'http://www.aadongman.com/templets/2013/images/hezuo_bn_da.jpg',
                botbox: [
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb1.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb2.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb3.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    }
                ]
            },
            {
                topimg: 'http://www.aadongman.com/templets/2013/images/2020_chunjiebn_da.jpg',
                botbox: [
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    }
                ]
            },
            {
                topimg: 'http://www.aadongman.com/templets/2013/images/dierda.jpg',
                botbox: [
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb1.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb2.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                        ]
                    },
                    {
                        tit: '预售',
                        imgs: [
                            {
                                img: require('../assets/img/sb5.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb6.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb7.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb8.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb9.jpg'),
                                name: '精美手办1',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb10.jpg'),
                                name: '精美手办2',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb11.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            },
                            {
                                img: require('../assets/img/sb4.jpg'),
                                name: '精美手办',
                                price: 99,
                                text: '描述：这手办很nice，放心购买【此处省略】',
                                isActive: true,
                                guige: [{ tit: '规格', datalist: [{ name: '香草', isActive: true, }, { name: '珍珠', isActive: false }] }, { tit: '方式', datalist: [{ name: '海运', isActive: true }, { name: '陆运', isActive: false }] }]
                            }
                        ]
                    }
                ]
            },
        ],
        // 购物车数据
        shopall: []
    },
    mutations: {
        likevideo(state,obj){
            state.myvideolist.push(obj)
        },
        delvideo(state){
            state.myvideolist.splice(state.myvideolist.length-1,1)
            // console.log('删除收藏')
        },
        addiddemo(state,index){
            // console.log('调用了+++++++++++++++++++++')
            state.addid = index.id
            // console.log(state.addid)
            // console.log(index)
        },
        address_true(state){
            state.addressbool = true
        },
        address_false(state){
            state.addressbool = false
        },
        like(state, data) {
            Toast('收藏成功');
            let aa = JSON.parse(JSON.stringify((state.imglists[data.index1].botbox[data.index2].imgs[data.index3])))
            state.mylikelist.push(aa);
            // console.log(state.mylikelist)
            state.imglists[data.index1].botbox[data.index2].imgs[data.index3].isActive = false
        },
        like2(state, data) {
            Toast('取消成功');
            state.mylikelist.splice(state.mylikelist.length-1,1);
            state.imglists[data.index1].botbox[data.index2].imgs[data.index3].isActive = true
            // console.log(state.mylikelist)
        },
        dellike(state,index){
            state.mylikelist.splice(index,1)
        },
        removelist(state){
            // console.log('orderlist  退出前---------------------------',state.orderlist)
            state.orderlist = [];
            // console.log('orderlist  退出后---------------------------',state.orderlist)
        },
        content_sel(state){
            state.contentbool = false;
        },
        order_true(state){
            state.orderbool = true;
        },
        order_false(state){
            state.orderbool = false;
        },
        conlistdemo(state,obj){
            state.contentlist = obj;
        },
        basedemo(state,obj){
            if(obj != []){
            state.basequery = obj
            }
        },
        base_true(state){
            state.basebool = true;
        },
        base_false(state){
            state.basebool = false;
        },
        orderall(state,obj){
            state.orderlist.push(obj)
        },
        nook_true(state){
            state.nookbool = true;
            // console.log('超级背包不不不不不不不不不不不不不不不不不不不不')
        },
        nook_false(state){
            state.nookbool = false;
        },
        nookdelleng(state,obj){
            state.nooklength =obj.length
        }
    },
    getters: {
        sum(state) {
            if (state.shopall.length == 0) {
                return 0
            }
            state.aa = 0;
            for (let i = 0; i < state.shopall.length; i++) {

                if (state.shopall[i].active) {
                    state.aa += parseInt(state.shopall[i].price) * parseInt(state.shopall[i].num)
                }


            }
            return state.aa;
        },
        orderSum(state){
            let bb = 0;
            for(let i =0 ; i< state.orderlist[0].length; i++){
                bb += parseInt(state.orderlist[0][i].price) * parseInt(state.orderlist[0][i].num)
            }
            return bb;
        },
        shopnum(state) {
            state.shopallnum =0;
            for (let i = 0; i < state.shopall.length; i++) {
                
                if (state.shopall[i].active) {
                    state.shopallnum += parseInt(state.shopall[i].num)
                }

            }
            return state.shopallnum
        },
        checkAll(state) {
            return state.shopall.every(item => {
                return item.active;
            });
        }
    }
}