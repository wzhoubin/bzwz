import { defineStore } from 'pinia';
import { ref } from 'vue';
export const SectionsData = defineStore(
  'SectionsData',
  () => {
    // 二次元区
    const erciyuanAll = ref({ label: '二次元最新资讯', label2: '二次元最新作品' });
    const erciyuan = ref([
      {
        img: require('../assets/5.png'),
        name: '二次元区',
        introduce:
          '触站概念艺术专区为你精选概念艺术图片壁纸，包含概念艺术美图，概念艺术插画等高清大图下载，喜欢概念艺术图片壁纸的朋友就到触站来欣赏下载吧。'
      }
    ]);
    const erciyuan2 = ref([
      {
        img: require('../assets/erciyuan/zixun2.jpg'),
        label: '二次元最新资讯',
        name: '人体比例搞不懂？',
        introduce: '',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/erciyuan/zixun1.jpg'),
        label: '二次元最新资讯',
        name: '画不好线稿？不知道什么是闭塞？',
        introduce: '',
        time: '2023/5/1 11:11:30'
      }
    ]);
    const erciyuan3 = ref([
      { img: require('../assets/erciyuan/1.jpg'), name: '少女人物二次元壁纸图片' },
      { img: require('../assets/erciyuan/2.jpg'), name: '藤之花二次元壁纸图片-花嫁' },
      { img: require('../assets/erciyuan/3.jpg'), name: '宝可梦剑盾正太郎二次元图片' },
      { img: require('../assets/erciyuan/4.jpg'), name: '物语系列二次元图片壁纸' },
      { img: require('../assets/erciyuan/5.jpg'), name: '德尔塔二次元壁纸美图' }
    ]);
    // 国风区
    const guofengAll = ref({ label: '国风最新资讯', label2: '国风热门作品' });

    const guofeng = ref([
      {
        img: require('../assets/6.png'),
        name: '国风',
        introduce:
          '触站概念艺术专区为你精选概念艺术图片壁纸，包含概念艺术美图，概念艺术插画等高清大图下载，喜欢概念艺术图片壁纸的朋友就到触站来欣赏下载吧。'
      }
    ]);
    const guofeng2 = ref([
      {
        img: require('../assets/guofeng/zx1.jpg'),
        label: '国风最新资讯',
        name: '中国风壁纸美图分享，来自国内画师',
        introduce:
          '中国风壁纸美图分享，来自国内画师，往期分享了那么多日本二次元画师，其实咱们国内也有许多优秀的大佬级画师，今天就来推荐一期，国人才懂的古风意境画师',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/guofeng/zx2.jpg'),
        label: '国风最新资讯',
        name: '东方复古风的阴阳师壁纸分享推荐',
        introduce:
          '壺也pid：95564997，一位画风超nice超独特的日本画师，为手游《阴阳师》创作了不少同人插画壁纸，他的作品复古东方韵味与日式浮世绘相结合，别有一番韵味',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/guofeng/zx3.jpg'),
        label: '国风最新资讯',
        name: '日系插画与古风插画怎么选？学那个好',
        introduce:
          '日系插画与古风插画怎么选？学那个好日系画风通常比较Q萌，大多是以可爱清晰的美少女和热血的青少年为主题。画风简洁、治愈，色调明快，线条感强。学习日系插画创作基本功要扎实，日系插画讲究人体夸张美型，在线条上也要求顺滑闭合，颜色光鲜亮丽，所以在学习日系画风，需要花大量时间。古风插画是近年来比较火的课程，随着国力上升文化输出也不能落下，我国古风文化产品的崛起，开发空间和市场日益扩大。一批优秀古风作品的兴起，也激发了新一代观众对古风文化产品的热情。在当今绘画市场越来越热的今天，许多公司或个人都希望能邀请好的插图师，甚至为此不惜血本。不过，具体到古风插图与日系插图，究竟选哪一条路更好？',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/guofeng/zx4.jpg'),
        label: '国风最新资讯',
        name: '倪传婧-最年轻的中国风插画师',
        introduce:
          '倪传婧-最年轻的中国风插画师荣登福布斯艺术榜，随着中国影响力日益壮大，中国风也受到了各大艺术榜的关注，其中倪传婧这位来自中国香港的中国风画师打破了福布斯艺术榜的记录，成为国内画师的佼佼者，今天小编就带大家认识一下这位最年轻中国风插画师的作品。',
        time: '2023/8/3 11:20:10'
      }
    ]);
    const guofeng3 = ref([
      { img: require('../assets/guofeng/1.jpg'), name: '忘羡中国风图片壁纸' },
      { img: require('../assets/guofeng/2.jpg'), name: '中国风图片插画-花嫁' },
      { img: require('../assets/guofeng/3.jpg'), name: '兰-中国风图片壁纸' },
      { img: require('../assets/guofeng/4.jpg'), name: '梅-中国风壁纸插画' },
      { img: require('../assets/guofeng/5.jpg'), name: '山海之行中国风图片插画' }
    ]);
    // 概念艺术区
    const gainianAll = ref({ label: '概念艺术最新资讯', label2: '概念艺术热门作品' });

    const gainian = ref([
      {
        img: require('../assets/7.png'),
        name: '概念艺术',
        introduce:
          '触站概念艺术专区为你精选概念艺术图片壁纸，包含概念艺术美图，概念艺术插画等高清大图下载，喜欢概念艺术图片壁纸的朋友就到触站来欣赏下载吧。'
      }
    ]);
    const gainian2 = ref([
      {
        img: require('../assets/guofeng/zx1.jpg'),
        label: '概念艺术最新资讯',
        name: ' exellero概念艺术图片壁纸分享',
        introduce:
          'exellero概念艺术图片壁纸分享，所谓概念艺术，是指艺术家对“艺术”一词所蕴涵的内容和意义标帜再作理论上的审查，并企图提出更新的关于“艺术”概念界定的一种现代艺术形态。下面我推荐一位概念艺术神仙画师exellero，相信看完他的作品，一定能给你些灵感和启发。',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/guofeng/zx2.jpg'),
        label: '概念艺术最新资讯',
        name: 'Adam Burn古希腊神话概念艺术图片',
        introduce:
          'Adam Burn古希腊神话概念艺术图片壁纸欣赏，今天给大家分享的画师是来自英国的概念设计师：Adam Burn，他可以成为是行走的壁纸制造机。他的作品幽静、神秘、超现实梦幻，引人遐想极富想象力，以独特的黑色风格重新构思古老的神话传说，让人欣赏他的画作有一种气势恢宏、心生敬畏的感觉。',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/guofeng/zx3.jpg'),
        label: '概念艺术最新资讯',
        name: 'Riana Moller概念艺术图片插画分享',
        introduce:
          'Riana Moller概念艺术图片插画分享，前两天逛A站看到一个画师，真正的诠释了什么叫高级的恐怖感！创新的惊悚视角之下，呈现出一幅幅美到极致也惊悚到极致的画面。',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/guofeng/zx4.jpg'),
        label: '概念艺术最新资讯',
        name: '《赛博朋克2077》3.77G美术概念艺术图片插画',
        introduce:
          '倪传婧-《赛博朋克2077》3.77G美术概念艺术图片插画放送！，《赛博朋克2077》美术概念设计图丨一场暴力美学带来的视觉盛宴！',
        time: '2023/8/3 11:20:10'
      }
    ]);

    const gainian3 = ref([
      { img: require('../assets/gainianyishu/1.jpg'), name: '红歌姬-概念艺术图片壁纸' },
      { img: require('../assets/gainianyishu/2.jpg'), name: '阿尔忒弥斯概念艺术图片插画' },
      { img: require('../assets/gainianyishu/3.jpg'), name: '夜幕降临概念艺术图片壁纸' },
      { img: require('../assets/gainianyishu/4.jpg'), name: '执剑人概念艺术图片插画' },
      { img: require('../assets/gainianyishu/5.jpg'), name: '龙后概念艺术图片插画' },
      { img: require('../assets/gainianyishu/6.jpg'), name: '归画饼' }
    ]);
    // 艺术绘画区
    const yishuAll = ref({ label: '艺术绘画最新资讯', label2: '艺术绘画热门作品' });

    const yishu = ref([
      {
        img: require('../assets/8.png'),
        name: '艺术绘画',
        introduce:
          '触站概念艺术专区为你精选概念艺术图片壁纸，包含概念艺术美图，概念艺术插画等高清大图下载，喜欢概念艺术图片壁纸的朋友就到触站来欣赏下载吧。'
      }
    ]);
    const yishu2 = ref([
      {
        img: require('../assets/yishu/zx1.jpg'),
        label: '艺术绘画最新资讯',
        name: ' 可爱卡通图片分享，三位画风可爱的画师',
        introduce:
          '可爱卡通图片分享，三位画风可爱的画师，盘点三位p站画风超级可爱的画师，这三位画师都来自日本，风格都是日系治愈插画，有可爱呆萌的卡通人物也有萌萌的猫咪，甚至是食物也可以画成萌物，让人眼前一亮。',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/yishu/zx2.jpg'),
        label: '艺术绘画最新资讯',
        name: ' 学习素描对于日系插画有帮助吗？',
        introduce:
          '关于现如今的日系插画，想必大家应该是不会陌生了。好看的日系插画也开始有了非常广阔的市场空间。相比于写实风的画面，日系更看重用线条表现结构。那么在日系插画逐渐开始流行的当下，对于初学者来说是否还需要掌握素描呢？  ',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/yishu/zx3.jpg'),
        label: '艺术绘画最新资讯',
        name: '零基础学素描-学素描必须掌握的技巧',
        introduce:
          '从零基础学素描需要先学什么内容，零基础学素描小编今天整理了学素描必须掌握的技巧，让你快速打好基础。小编觉得开始学习画素描的时候最重要的是先从对“形”的认识上入手，而“形”的认识并不仅仅是单单只是对圆润程度的认识，还包括各种长方体等的各种形状的认识，各种直角的高低和锐利程度等等。 ',
        time: '2023/8/3 11:20:10'
      },
      {
        img: require('../assets/yishu/zx4.jpg'),
        label: '艺术绘画最新资讯',
        name: '新手怎么学好素描画？这五点需要关注',
        introduce:
          '新手怎么学好素描画？，素描是一个非常系统的学科，想把素描画好，需要长期的坚持以及大量的临摹。',
        time: '2023/8/3 11:20:10'
      }
    ]);
    const yishu3 = ref([
      { img: require('../assets/yishu/1.jpg'), name: '黄豆玩偶' },
      { img: require('../assets/yishu/2.jpg'), name: '真澄' },
      { img: require('../assets/yishu/3.jpg'), name: '透明水彩化妆（赠品）' },
      { img: require('../assets/yishu/4.jpg'), name: '透明水彩化妆（赠品）' },
      { img: require('../assets/yishu/5.jpg'), name: '夕阳下的明日香和EVA二号机' },
      { img: require('../assets/yishu/6.jpg'), name: '灌篮高手同人' }
    ]);
    const imgAll = ref();
    const imgTemp1 = ref([]);
    const imgTemp2 = ref();
    const imgTemp3 = ref();

    function indexFn(id) {
      if (id == '1') {
        imgTemp1.value = erciyuan.value;
        imgTemp2.value = erciyuan2.value;
        imgTemp3.value = erciyuan3.value;
        imgAll.value = erciyuanAll.value;
      } else if (id == '2') {
        imgTemp1.value = guofeng.value;
        imgTemp2.value = guofeng2.value;
        imgTemp3.value = guofeng3.value;
        imgAll.value = guofengAll.value;
      } else if (id == '3') {
        imgTemp1.value = gainian.value;
        imgTemp2.value = gainian2.value;
        imgTemp3.value = gainian3.value;
        imgAll.value = gainianAll.value;
      } else if (id == '4') {
        imgTemp1.value = yishu.value;
        imgTemp2.value = yishu2.value;
        imgTemp3.value = yishu3.value;
        imgAll.value = yishuAll.value;
      } else {
        console.log('都没触发');
      }
    }
    return {
      indexFn,
      erciyuan,
      erciyuan2,
      erciyuan3,
      erciyuanAll,
      guofeng,
      guofeng2,
      guofeng3,
      guofengAll,
      gainian,
      gainian2,
      gainian3,
      gainianAll,
      yishu,
      yishu2,
      yishu3,
      yishuAll,
      imgTemp1,
      imgTemp2,
      imgTemp3,
      imgAll
    };
  }
  // {
  //   persist: true
  // }
);
