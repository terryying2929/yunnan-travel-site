import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Fuel,
  Map,
  MapPin,
  MountainSnow,
  Plane,
  ShieldAlert,
  Train,
  Users,
  Wallet,
} from 'lucide-react';
import './styles.css';

const images = {
  hero:
    'https://commons.wikimedia.org/wiki/Special:FilePath/1_lijiang_old_town_night.jpg',
  snow:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Lijiang_Yunnan_China_Jade-Dragon-Snow-Mountain-01.jpg',
  dali:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Dali-Cangshan_Erhai_Lake_2017-11-16.jpg',
  lijiang:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Lijiang_Ancient_City_(4336169958).jpg',
  gorge:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Tiger_Leaping_Gorge_(6170291174).jpg',
  songzanlin:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Songzanlin_Monastery,_Shangri-La,_China_-_panoramio.jpg',
};

const sources = [
  {
    label: '佛山市教育局 2025-2026 学年校历',
    url: 'https://edu.foshan.gov.cn/attachment/0/552/552156/6634199.pdf',
  },
  {
    label: '佛山 2026 中考时间：6月30日-7月2日',
    url: 'https://www.thepaper.cn/newsDetail_forward_32448290',
  },
  {
    label: '佛山中考与录取时间线参考',
    url: 'https://fs.bendibao.com/edu/zhuantizhongkao/',
  },
  {
    label: '2025 佛山普通高中录取日程参考',
    url: 'https://m.fs.bendibao.com/edu/129039.shtm',
  },
  {
    label: '2025 佛山第二批录取及补录时间参考',
    url: 'https://www.ygacity.com/ent/20250724/20738.html',
  },
  {
    label: 'B站：云南北线九天攻略，昆明-大理-丽江-香格里拉',
    url: 'https://www.bilibili.com/video/BV1No4y1n717/',
  },
  {
    label: 'B站：昆大丽香自驾攻略系列',
    url: 'https://www.bilibili.com/video/BV1qT4y1N7Gp/',
  },
  {
    label: 'B站：丽江自驾香格里拉 214 国道实拍',
    url: 'https://www.bilibili.com/video/BV1Wm411S76V/',
  },
  {
    label: 'Klook：云南 10 天经典路线',
    url: 'https://www.klook.com/blog/yunnan-itinerary-for-first-timers/',
  },
  {
    label: '佛山到昆明自驾距离与用时参考',
    url: 'https://www.icauto.com.cn/route/113_357.html',
  },
  {
    label: '佛山西到昆明南高铁时间参考',
    url: 'https://www.gaotie.com.cn/lieche/foshanxi-kunmingnan.html',
  },
  {
    label: '广东 92/95 号油价参考',
    url: 'https://www.icauto.com.cn/oil/price_440000_0.html',
  },
  {
    label: '五菱星光730 插混续航与油耗参考',
    url: 'https://article.pchome.net/news/10793.html',
  },
  {
    label: '昆明租车 SUV 日租价格参考',
    url: 'https://www.zuchew.com/auto/6111.html',
  },
  {
    label: '丽江古城 UNESCO 世界遗产说明',
    url: 'https://whc.unesco.org/en/list/811',
  },
  {
    label: '图片来源：Wikimedia Commons 玉龙雪山',
    url: 'https://commons.wikimedia.org/wiki/File:Lijiang_Yunnan_China_Jade-Dragon-Snow-Mountain-01.jpg',
  },
  {
    label: '图片来源：Wikimedia Commons 丽江古城夜景',
    url: 'https://commons.wikimedia.org/wiki/File:1_lijiang_old_town_night.jpg',
  },
  {
    label: '图片来源：Wikimedia Commons 大理苍山洱海',
    url: 'https://commons.wikimedia.org/wiki/File:Dali-Cangshan_Erhai_Lake_2017-11-16.jpg',
  },
  {
    label: '图片来源：Wikimedia Commons 虎跳峡与松赞林寺',
    url: 'https://commons.wikimedia.org/wiki/Category:Tiger_Leaping_Gorge',
  },
];

const schoolMilestones = [
  {
    date: '6月30日-7月2日',
    title: '中考',
    state: '不能出发',
    text: '考试结束只是身体自由，心理上还要等成绩、志愿和录取结果。',
  },
  {
    date: '7月11日',
    title: '妹妹小学暑假开始',
    state: '家庭时间具备',
    text: '从小学放假角度可以走，但哥哥录取还没有完全落定。',
  },
  {
    date: '7月中旬',
    title: '成绩、提前批、第一批、第二批陆续录取',
    state: '每天要看系统',
    text: '2026 官方信息目前写普通高中各批次录取在7月中旬；按2025参考，普通高中录取集中在7月19日-25日。',
  },
  {
    date: '约7月22日-26日',
    title: '第二批、征集志愿/补录关键窗口',
    state: '建议留在佛山',
    text: '2025 年第二批为7月22日-24日，普通高中补录为7月25日-26日；如果要等第二批，最好不要提前远行。',
  },
  {
    date: '7月27日以后',
    title: '确认录取、电子通知书、注册要求',
    state: '较稳出发',
    text: '查到录取状态，确认是否需要现场注册、缴费、体检、军训通知或资料提交，再开车出发。保守建议7月28日后走。',
  },
];

const transportOptions = [
  {
    icon: <Car />,
    name: '方案 A：佛山平胜开自家车进云南',
    verdict: '你们现在的主方案',
    time: '建议14天；佛山到昆明单程约1300km，拆成2天更稳',
    cost: '交通现金成本最低，不用租车和买4人往返票',
    comfort: '行李自由，仪式感强；但爸爸驾驶压力最大',
    good: ['最符合你们“自己开车过去”的想法', '一家四口行李、零食、雨具和孩子用品都好带', '总交通费通常低于高铁/飞机+租车'],
    weak: ['至少要等第二批录取和注册事项确认', '不建议压缩到9-10天', '雨季长途高速和高原山路要留缓冲'],
  },
  {
    icon: <Train />,
    name: '方案 B：高铁到昆明，昆明租车',
    verdict: '省体力备选',
    time: '高铁约7小时左右，到达后昆明取车',
    cost: '4人往返高铁约4000元，再加租车',
    comfort: '少开长途高速，爸爸体力最好保留',
    good: ['适合假期只有9-10天', '保留云南当地自驾自由', '路上风险比全程自驾少'],
    weak: ['整体花费会高于开自家车', '暑假高铁票要提前抢', '租车保险和押金要看清楚'],
  },
  {
    icon: <Plane />,
    name: '方案 C：广州飞昆明/大理，落地租车',
    verdict: '最省体力',
    time: '广州飞昆明约2.5小时，算上机场也半天内到',
    cost: '暑假机票波动最大，4人往返可能明显贵',
    comfort: '对孩子最轻松，对爸爸最友好',
    good: ['适合预算允许、想把时间留给云南', '遇到生意临时变化也好调整', '回程不累'],
    weak: ['暑假机票可能涨价', '租车异地还车可能加费用'],
  },
];

const coreDays = [
  {
    day: 'D1',
    title: '平胜 → 南宁',
    stay: '住南宁',
    drive: '约560km，6-7小时，第一天不要贪远',
    focus: '离开广东，旅行真正开始',
    plan: '早上从平胜出发，走广西方向。南宁只作为中转，晚上吃饭、散步、补给，早点睡。',
  },
  {
    day: 'D2',
    title: '南宁 → 百色/兴义',
    stay: '住百色或兴义',
    drive: '约250-430km，按当天状态决定',
    focus: '把长途拆碎，保护司机体力',
    plan: '如果状态好可到兴义，状态一般就住百色。不要为了赶到昆明硬开夜路。',
  },
  {
    day: 'D3',
    title: '百色/兴义 → 昆明',
    stay: '住昆明',
    drive: '约300-520km',
    focus: '抵达云南，先休整',
    plan: '下午到昆明后不赶景点。检查车辆、洗衣、补给，吃一顿舒服的云南菜。',
  },
  {
    day: 'D4',
    title: '昆明 → 大理',
    stay: '住大理古城/才村',
    drive: '约340km，4小时左右',
    focus: '进入洱海慢节奏',
    plan: '下午到大理，先逛古城或才村，不急着环海。住宿优先选停车方便、可洗衣。',
  },
  {
    day: 'D5',
    title: '大理洱海轻环线',
    stay: '住大理',
    drive: '当天短途分段开',
    focus: '少赶路，多拍照',
    plan: '喜洲、海西生态廊道、双廊择优安排。重点是放松，不把环海变成打卡任务。',
  },
  {
    day: 'D6',
    title: '大理 → 沙溪 → 丽江',
    stay: '住束河/白沙',
    drive: '约200km，分段3-4小时',
    focus: '茶马古道老镇，比直奔丽江更舒服',
    plan: '中午停沙溪古镇，下午到丽江。住束河或白沙，安静、停车友好，比丽江古城核心区更适合自驾。',
  },
  {
    day: 'D7',
    title: '丽江：玉龙雪山或蓝月谷',
    stay: '住丽江',
    drive: '短途，景区需早起',
    focus: '给儿子的高光奖励日',
    plan: '天气好且票合适就玉龙雪山；天气差或担心高反，换蓝月谷、白沙古镇、黑龙潭慢游。',
  },
  {
    day: 'D8',
    title: '丽江 → 虎跳峡 → 香格里拉',
    stay: '住独克宗古城附近',
    drive: '约180km，3-4小时，雨季预留时间',
    focus: '真正进入高原风景',
    plan: '中途轻量看虎跳峡，不做高强度徒步。下午到香格里拉后只逛独克宗古城，少跑跳。',
  },
  {
    day: 'D9',
    title: '香格里拉：松赞林寺、纳帕海',
    stay: '住香格里拉',
    drive: '城郊短途',
    focus: '文化感、草原感、控制海拔节奏',
    plan: '上午松赞林寺，下午纳帕海或依拉草原。海拔约3300m，少跑跳，晚餐简单。',
  },
  {
    day: 'D10',
    title: '香格里拉 → 丽江/大理',
    stay: '住丽江或大理',
    drive: '约180-360km',
    focus: '高原回撤日',
    plan: '根据状态决定住丽江还是继续到大理。当天不塞景点，把安全和休息放第一。',
  },
  {
    day: 'D11',
    title: '丽江/大理 → 昆明',
    stay: '住昆明',
    drive: '约340-500km',
    focus: '返程缓冲',
    plan: '回昆明后做车辆检查、补给、洗衣。晚上吃庆功饭，让儿子选这趟最喜欢的一天。',
  },
  {
    day: 'D12',
    title: '昆明 → 百色/兴义',
    stay: '住百色或兴义',
    drive: '约300-520km',
    focus: '返程不硬顶',
    plan: '开始回广东，继续坚持不夜驾。雨大就缩短当天距离。',
  },
  {
    day: 'D13',
    title: '百色/兴义 → 南宁',
    stay: '住南宁',
    drive: '约250-430km',
    focus: '最后一个中转休息',
    plan: '南宁作为返程中转，晚上吃饭休息，不安排景点。',
  },
  {
    day: 'D14',
    title: '南宁 → 平胜',
    stay: '回家',
    drive: '约560km，6-7小时',
    focus: '安全回家',
    plan: '早出发，下午或傍晚回到佛山。第二天最好留半天收拾和休息。',
  },
];

const longPlan = [
  '如果只有12天：压缩大理或丽江各1晚，但不压缩进出云南的中转安全天。',
  '如果有14天：保留南宁、百色/兴义中转，云南段玩大理、丽江、香格里拉，整体最舒服。',
  '如果录取或注册时间突然变化：先砍香格里拉，不要砍回程缓冲。',
  '如果雨季路况不好：宁愿多住一晚，也不要夜间赶高速或山路。',
  '如果预算紧：住宿选停车方便的家庭房/双床房，把钱留给油费、门票和车辆保险。',
];

const budgetRows = [
  ['自家车全程自驾', '约3,800-5,500元交通现金成本', '星光730插混按长途5.3-6.5L/100km估；油费约1,800-2,500，高速约1,600-2,200，停车/洗车/补能预留400-800'],
  ['高铁+昆明租车', '约8,200-11,500元交通成本', '4人往返高铁约4,000；SUV租车9-10天约3,000-5,500；云南油费/过路费约1,000-1,800'],
  ['飞机+落地租车', '约11,000-18,000元交通成本', '4人暑假往返机票波动大；再加租车、保险、云南当地油费和过路费'],
  ['住宿', '14晚约4,200-8,400元', '按300-600元/晚估算；大理丽江可民宿，香格里拉优先暖气和停车'],
  ['餐饮门票', '约5,000-9,000元', '餐饮按一家四口350-550元/天；玉龙雪山、松赞林寺、虎跳峡等另算'],
];

const visualMoments = [
  {
    image: images.dali,
    title: '洱海车窗日落',
    text: '适合 Pocket 3 拍车内聊天、孩子看风景、妈妈放松的生活感镜头。',
  },
  {
    image: images.lijiang,
    title: '丽江和白沙慢逛',
    text: '不用赶，拍一家四口走在古镇里的片段，比硬拍景点更有纪念意义。',
  },
  {
    image: images.gorge,
    title: '虎跳峡路上感',
    text: '无人机不一定每处都能飞，但这一天适合拍“开车进入高原”的气势。',
  },
  {
    image: images.songzanlin,
    title: '香格里拉高原感',
    text: '松赞林寺、纳帕海、云层和草地，是整趟旅行最像大片的部分。',
  },
];

const evidenceCards = [
  {
    icon: <CalendarDays />,
    title: '时间窗口',
    text: '佛山中小学暑假从 2026年7月11日 开始，但哥哥真正自由要看录取状态。等第二批和可能的补录窗口后，7月28日以后更稳。',
  },
  {
    icon: <Map />,
    title: '路线真实性',
    text: '佛山-南宁-百色/兴义-昆明进云南，再走大理-丽江-香格里拉，是把长途拆开的实用路线，不硬拼夜车。',
  },
  {
    icon: <ShieldAlert />,
    title: '家庭安全',
    text: '全程自驾不再按9-10天设计，主方案改成14天。暑假雨季和高原段都要留缓冲，司机体力比多打卡更重要。',
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">
          <MountainSnow size={22} />
        </span>
        <span>
          <strong>云南自驾家庭方案</strong>
          <small>佛山平胜出发 · 2026 暑假</small>
        </span>
      </a>
      <nav className="nav" aria-label="页面导航">
        <a href="#school">学校时间</a>
        <a href="#transport">交通对比</a>
        <a href="#route">14天路线</a>
        <a href="#visuals">拍摄</a>
        <a href="#extend">12-14天</a>
        <a href="#budget">预算</a>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div className="site" id="top">
      <Header />
      <main>
        <section className="hero">
          <img className="hero-img" src={images.hero} alt="大理苍山洱海" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">给老婆看的真实可行版</p>
            <h1>一家四口云南自驾游方案</h1>
            <p className="hero-copy">
              从广东佛山南海平洲平胜出发，等哥哥第二批录取和注册事项确认后，开五菱星光730插混 MPV 去云南。主方案 14 天，预算实用，路线稳一点，照片视频也要拍得值得。
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#recommendation">
                先看结论
                <ArrowRight size={18} />
              </a>
              <a className="btn secondary" href="#route">
                看每日行程
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>7月28日后</strong>
                <span>等录取和注册事项确认</span>
              </div>
              <div>
                <strong>14天</strong>
                <span>全程自驾更舒服</span>
              </div>
              <div>
                <strong>星光730</strong>
                <span>插混 MPV + 无人机 + Pocket 3</span>
              </div>
            </div>
          </div>
          <div className="hero-gallery" aria-hidden="true">
            <img src={images.snow} alt="" />
            <img src={images.dali} alt="" />
            <img src={images.songzanlin} alt="" />
          </div>
        </section>

        <section className="section verdict" id="recommendation">
          <div className="verdict-card">
            <div>
              <p className="eyebrow">我的建议</p>
              <h2>首选改成：等第二批录取落定后，自家车14天进云南。</h2>
              <p>
                你们已经换了适合家庭长途的插混 MPV，又想自己开过去，这个方向是成立的。关键不是能不能开到云南，而是不要在孩子录取没落定、司机疲劳、雨季赶路这三件事上冒险。
              </p>
            </div>
            <ul className="check-list">
              <li>
                <CheckCircle2 size={18} />
                妹妹 7月11日 后放暑假，但哥哥要等普通高中录取和注册要求确认。
              </li>
              <li>
                <CheckCircle2 size={18} />
                参考 2025 年节奏，第二批、补录、第三批集中在 7月下旬，保守按 7月28日后 出发。
              </li>
              <li>
                <CheckCircle2 size={18} />
                全程自驾按 14 天设计，南宁、百色/兴义做中转，不把长途压成硬仗。
              </li>
            </ul>
          </div>
        </section>

        <section className="section school" id="school">
          <div className="section-head">
            <p className="eyebrow">什么时候才算真正自由</p>
            <h2>先把升学手续放第一位，再出发。</h2>
            <p>中考完、妹妹放暑假，都还不等于哥哥完全自由。下面按 2026 已知信息和 2025 录取节奏做保守判断。</p>
          </div>
          <div className="school-grid">
            {schoolMilestones.map((item) => (
              <article className="school-card" key={item.title}>
                <span>{item.date}</span>
                <strong>{item.state}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section evidence">
          {evidenceCards.map((item) => (
            <article className="evidence-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="section transport" id="transport">
          <div className="section-head">
            <p className="eyebrow">交通方式对比</p>
            <h2>现在把“自家车进云南”作为主线，另外两种作为费用参照。</h2>
            <p>这样你老婆看的是同一件事：自己开车是不是划算、是不是值得、需要多少天，而不是被三个路线弄乱。</p>
          </div>
          <div className="transport-grid">
            {transportOptions.map((option) => (
              <article className="transport-card" key={option.name}>
                <div className="transport-top">
                  <span className="transport-icon">{option.icon}</span>
                  <strong>{option.verdict}</strong>
                </div>
                <h3>{option.name}</h3>
                <dl>
                  <div>
                    <dt>
                      <Clock3 size={16} />
                      时间
                    </dt>
                    <dd>{option.time}</dd>
                  </div>
                  <div>
                    <dt>
                      <Wallet size={16} />
                      花费
                    </dt>
                    <dd>{option.cost}</dd>
                  </div>
                  <div>
                    <dt>
                      <Users size={16} />
                      舒适度
                    </dt>
                    <dd>{option.comfort}</dd>
                  </div>
                </dl>
                <div className="pros-cons">
                  <div>
                    <b>优点</b>
                    {option.good.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <div>
                    <b>注意</b>
                    {option.weak.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="photo-band">
          <figure>
            <img src={images.snow} alt="丽江玉龙雪山" />
            <figcaption>丽江：雪山这一日留给哥哥做高光奖励</figcaption>
          </figure>
          <figure>
            <img src={images.gorge} alt="虎跳峡" />
            <figcaption>丽江到香格里拉途中可轻量看虎跳峡</figcaption>
          </figure>
          <figure>
            <img src={images.songzanlin} alt="香格里拉松赞林寺" />
            <figcaption>香格里拉：文化感强，但要注意海拔</figcaption>
          </figure>
        </section>

        <section className="section route" id="route">
          <div className="section-head">
            <p className="eyebrow">主方案</p>
            <h2>14天全程自驾：平胜、南宁、百色/兴义、昆明、大理、丽江、香格里拉。</h2>
            <p>这是给新车、孩子、雨季和司机体力一起考虑的版本。不炫技，不夜驾，不把长途压缩成硬拼。</p>
          </div>
          <div className="timeline">
            {coreDays.map((day) => (
              <article className="day-card" key={day.day}>
                <div className="day-index">{day.day}</div>
                <div className="day-body">
                  <div className="day-meta">
                    <span>
                      <MapPin size={16} />
                      {day.stay}
                    </span>
                    <span>
                      <Car size={16} />
                      {day.drive}
                    </span>
                  </div>
                  <h3>{day.title}</h3>
                  <p className="focus">{day.focus}</p>
                  <p>{day.plan}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section visuals" id="visuals">
          <div className="section-head">
            <p className="eyebrow">拍摄和期待感</p>
            <h2>无人机、Pocket 3 和新 MPV，应该成为这次旅行的一部分。</h2>
            <p>图片丰富是有必要的。它不只是装饰，而是让老婆和孩子提前看到这趟旅行会留下什么。</p>
          </div>
          <div className="visual-grid">
            {visualMoments.map((item) => (
              <article className="visual-card" key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section extend" id="extend">
          <div className="extend-copy">
            <p className="eyebrow">如果生意不好，可以拉长</p>
            <h2>12-14天不是加景点，而是把节奏变舒服。</h2>
            <p>
              云南最怕“每个地方都到此一游”。如果时间多，优先增加停留和缓冲，而不是塞西双版纳、泸沽湖、腾冲这种跨区大跳跃。
            </p>
          </div>
          <div className="extend-list">
            {longPlan.map((item, index) => (
              <article key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section budget" id="budget">
          <div className="section-head">
            <p className="eyebrow">预算思路</p>
            <h2>自己开车最省交通现金，但要把时间和司机体力算进去。</h2>
            <p>下面只比较交通和大项预算，真实订票订房前还要按当日油价、房价、景区票价再更新一次。</p>
          </div>
          <div className="budget-table">
            {budgetRows.map(([name, content, note]) => (
              <div className="budget-row" key={name}>
                <strong>{name}</strong>
                <p>{content}</p>
                <span>{note}</span>
              </div>
            ))}
          </div>
          <div className="risk-box">
            <Fuel size={22} />
            <p>
              实操提醒：插混 MPV 很适合家庭长途，但云南段充电不作为刚需，按亏电油耗估算更稳。高速服务区能充就补，不能充也不影响行程。
            </p>
          </div>
        </section>

        <section className="section dad-note">
          <div>
            <p className="eyebrow">给老婆看的话</p>
            <h2>这不是为了赶景点，是为了奖励孩子，也让一家人有一次认真出发。</h2>
          </div>
          <p>
            哥哥初中三年很辛苦，这趟旅行的重点不是“爸爸规划得多厉害”，而是等学校事情落定后，全家开着新车认真出去一次。无人机和 Pocket 3 不是为了炫设备，是为了把哥哥毕业、小妹第一次远行、妈妈路上的笑脸都留下来。
          </p>
        </section>

        <section className="section sources" id="sources">
          <div className="section-head compact">
            <p className="eyebrow">参考来源</p>
            <h2>路线不是凭空编的。</h2>
          </div>
          <div className="source-grid">
            {sources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                <BadgeCheck size={18} />
                <span>{source.label}</span>
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <strong>云南自驾家庭方案</strong>
        <span>佛山南海平洲平胜出发 · 等第二批录取后 · 自家车14天预算实用版</span>
        <a href="#top">回到顶部</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
