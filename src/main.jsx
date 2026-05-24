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
  Sparkles,
  Train,
  Users,
  Wallet,
} from 'lucide-react';
import './styles.css';

const images = {
  hero:
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
    label: '丽江古城 UNESCO 世界遗产说明',
    url: 'https://whc.unesco.org/en/list/811',
  },
  {
    label: '图片来源：Wikimedia Commons 玉龙雪山',
    url: 'https://commons.wikimedia.org/wiki/File:Lijiang_Yunnan_China_Jade-Dragon-Snow-Mountain-01.jpg',
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

const transportOptions = [
  {
    icon: <Train />,
    name: '方案 A：佛山西/广州南高铁到昆明，昆明租车',
    verdict: '9-10天首选',
    time: '高铁约7小时左右，到达后昆明取车',
    cost: '车票+当地租车，整体可控',
    comfort: '孩子少坐长途高速，爸爸保留体力',
    good: ['最适合7月11日一放假就走', '保留自驾自由', '不用把4天浪费在广东-云南往返高速'],
    weak: ['需要提前抢高铁票', '大件行李要收拾精简'],
  },
  {
    icon: <Plane />,
    name: '方案 B：广州飞昆明/大理，落地租车',
    verdict: '最省体力',
    time: '广州飞昆明约2.5小时，算上机场也半天内到',
    cost: '旺季机票波动大，四个人可能贵',
    comfort: '对孩子最轻松，对爸爸最友好',
    good: ['适合预算允许、想把时间留给云南', '遇到生意临时变化也好调整', '回程不累'],
    weak: ['暑假机票可能涨价', '租车异地还车可能加费用'],
  },
  {
    icon: <Car />,
    name: '方案 C：佛山平胜全程自驾进云南',
    verdict: '12-14天才建议',
    time: '佛山到昆明单程约1300km，实际建议拆成2天',
    cost: '省机票/高铁票，但油费、过路费、住宿会增加',
    comfort: '仪式感最强，但司机最累',
    good: ['真正一家人一路开出去', '行李自由', '可顺路南宁、百色中转'],
    weak: ['9-10天太赶', '来回高速占用4天', '雨季长途驾驶风险更高'],
  },
];

const coreDays = [
  {
    day: 'D1',
    title: '平胜出发 → 昆明',
    stay: '住昆明',
    drive: '高铁/飞机到昆明，取车后只做轻松适应',
    focus: '给儿子一个“考完真的开始了”的开场',
    plan: '抵达后取车，吃过桥米线或汽锅鸡，晚上不赶景点。住市区或滇池/昆明南站附近，第二天出发更顺。',
  },
  {
    day: 'D2',
    title: '昆明 → 大理',
    stay: '住大理古城/才村',
    drive: '约4小时，建议早出发',
    focus: '从城市切换到洱海慢节奏',
    plan: '下午到大理，先不环海，逛大理古城、吃菌子火锅或白族菜。晚上早点休息，为第二天留体力。',
  },
  {
    day: 'D3',
    title: '洱海轻环线：喜洲、海西、双廊',
    stay: '住大理',
    drive: '当天短途分段开，不追求完整环海',
    focus: '轻松、拍照、孩子不累',
    plan: '上午喜洲古镇，午后海西生态廊道骑车或散步，天气好再去双廊。不要把洱海环线开成打卡任务。',
  },
  {
    day: 'D4',
    title: '大理 → 沙溪 → 丽江',
    stay: '住束河/白沙',
    drive: '分段约3-4小时',
    focus: '比直接去丽江更有层次',
    plan: '中午停沙溪古镇，走一走茶马古道老镇。下午到丽江，建议住束河或白沙，安静、停车相对友好。',
  },
  {
    day: 'D5',
    title: '丽江：玉龙雪山或蓝月谷',
    stay: '住丽江',
    drive: '短途，景区需早起',
    focus: '给儿子的“高光奖励日”',
    plan: '如果抢到票且天气好，安排玉龙雪山；若担心高反或天气差，换成蓝月谷、白沙古镇、黑龙潭慢游。',
  },
  {
    day: 'D6',
    title: '丽江 → 虎跳峡 → 香格里拉',
    stay: '住独克宗古城附近',
    drive: '约3-4小时，雨季预留时间',
    focus: '真正进入高原风景',
    plan: '走丽江到香格里拉方向，中途安排虎跳峡轻量观景，不做高强度徒步。下午到香格里拉后只逛独克宗古城。',
  },
  {
    day: 'D7',
    title: '香格里拉：松赞林寺、纳帕海',
    stay: '住香格里拉',
    drive: '城郊短途',
    focus: '文化感、草原感、不要剧烈运动',
    plan: '上午松赞林寺，下午纳帕海或依拉草原。海拔约3300m，少跑跳，晚餐简单，观察孩子状态。',
  },
  {
    day: 'D8',
    title: '香格里拉 → 丽江/大理',
    stay: '住丽江或大理',
    drive: '回撤日，约3-5小时',
    focus: '把高原段安全收回来',
    plan: '若一家人状态好，回丽江住一晚；如果想减少次日车程，可继续到大理。当天不塞景点。',
  },
  {
    day: 'D9',
    title: '大理/丽江 → 昆明',
    stay: '住昆明',
    drive: '大理回昆明约4小时；丽江回昆明更长',
    focus: '返程缓冲，避免最后一天崩盘',
    plan: '回昆明还车前留半天缓冲，晚上吃一顿舒服的庆功饭，让儿子讲这次最喜欢哪一天。',
  },
  {
    day: 'D10',
    title: '昆明 → 佛山',
    stay: '回家',
    drive: '高铁/飞机返程',
    focus: '不疲劳返工返校',
    plan: '上午不排硬景点。高铁或飞机回佛山/广州，保留半天整理照片和休息。',
  },
];

const longPlan = [
  '增加 D2 昆明石林或云南省博物馆，不急着开去大理。',
  '大理多住1晚：苍山、扎染体验、亲子骑行都可以慢慢来。',
  '丽江多住1晚：玉湖村、白沙古镇、黑龙潭，适合拍照和休息。',
  '香格里拉多住1晚：普达措或小中甸花海，但只在身体适应后安排。',
  '如果全程从佛山开车进云南，建议把南宁/百色作为往返中转点，12-14天才不累。',
];

const budgetRows = [
  ['大交通', '高铁四人往返或机票四人往返', '高铁通常更稳，飞机看暑假价格'],
  ['租车', '紧凑 SUV / MPV 约 9-10 天', '优先选空间、后备箱、保险，不追豪车'],
  ['住宿', '9晚，家庭房或两间房混合', '大理/丽江可选民宿，香格里拉选暖气和停车方便'],
  ['门票体验', '玉龙雪山、松赞林寺、虎跳峡等', '玉龙雪山和索道要提前看票，雨天可替换'],
  ['餐饮', '以本地菜、米线、菌子、简单晚餐为主', '高原段不要饮酒，不安排重口大餐'],
];

const evidenceCards = [
  {
    icon: <CalendarDays />,
    title: '时间窗口',
    text: '佛山中小学暑假从 2026年7月11日 开始；中考 6月30日-7月2日，自主招生考核通常在中考后几天，所以7月11日后出发最稳。',
  },
  {
    icon: <Map />,
    title: '路线真实性',
    text: '昆明-大理-丽江-香格里拉是多条视频攻略和旅行攻略反复出现的云南第一次经典北线，不是临时拼出来的路线。',
  },
  {
    icon: <ShieldAlert />,
    title: '家庭安全',
    text: '暑假云南处于雨季，高原段不做重徒步，不把全程自驾压进9-10天，优先保证一家四口舒服和安全。',
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
        <a href="#transport">交通对比</a>
        <a href="#route">10天路线</a>
        <a href="#extend">12-14天</a>
        <a href="#budget">预算</a>
        <a href="#sources">来源</a>
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
          <img className="hero-img" src={images.hero} alt="丽江玉龙雪山" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">给老婆看的真实可行版</p>
            <h1>一家四口云南自驾游方案</h1>
            <p className="hero-copy">
              从广东佛山南海平洲平胜出发，围绕儿子中考后的奖励旅行来设计。主方案 9-10 天，备用 12-14 天，交通方式、车程、预算和风险都摆清楚。
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
                <strong>7月11日</strong>
                <span>小学暑假开始后出发</span>
              </div>
              <div>
                <strong>9-10天</strong>
                <span>正常推荐天数</span>
              </div>
              <div>
                <strong>4人</strong>
                <span>爸爸妈妈+初三哥哥+三年级妹妹</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section verdict" id="recommendation">
          <div className="verdict-card">
            <div>
              <p className="eyebrow">我的建议</p>
              <h2>首选：高铁到昆明 + 云南当地租车自驾。</h2>
              <p>
                这样最适合预算实用、又想保留自驾自由的家庭。9-10天可以真正玩到大理、丽江、香格里拉，不会把爸爸累在广东到云南的高速上。
              </p>
            </div>
            <ul className="check-list">
              <li>
                <CheckCircle2 size={18} />
                7月11日后出发，刚好接上妹妹小学暑假。
              </li>
              <li>
                <CheckCircle2 size={18} />
                儿子刚考完，路线重点放在雪山、古城、洱海、虎跳峡和高原草原。
              </li>
              <li>
                <CheckCircle2 size={18} />
                不晕车也不要硬拼长途，暑假雨季要给车程留余量。
              </li>
            </ul>
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
            <h2>三个交通方式放在一个页面，但用决策卡片呈现。</h2>
            <p>你可以直接给老婆看：不是只说“去云南”，而是把怎么去、累不累、贵不贵、适合几天都讲清楚。</p>
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
            <img src={images.dali} alt="大理苍山洱海" />
            <figcaption>大理：洱海和古城适合放慢节奏</figcaption>
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
            <h2>9-10天经典北线：昆明、大理、丽江、香格里拉。</h2>
            <p>这是给第一次出省不多、又想有“云南代表性”的家庭设计：不追求小众炫技，追求稳、漂亮、孩子记得住。</p>
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
            <h2>少钱实用，不等于一路将就。</h2>
            <p>钱优先花在交通效率、靠谱住宿、租车保险和孩子体验上；少花在无意义打卡、重复古城、临时高价包车上。</p>
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
              实操提醒：7月是暑假+云南雨季。玉龙雪山、虎跳峡、香格里拉高原段都要看天气；高铁票、租车、可取消住宿建议提前锁定，门票和索道到出发前一周再按天气确认。
            </p>
          </div>
        </section>

        <section className="section dad-note">
          <div>
            <p className="eyebrow">给老婆看的话</p>
            <h2>这不是为了赶景点，是为了奖励孩子，也让一家人有一次认真出发。</h2>
          </div>
          <p>
            哥哥初中三年很辛苦，这趟旅行的重点不是“爸爸规划得多厉害”，而是让他在考完后真的换个地方喘口气。妹妹还小，所以每天不要排太满；妈妈也不用被迫跟着赶路。这个版本先把方向定稳，后面再按机票/高铁票/天气微调。
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
        <span>佛山南海平洲平胜出发 · 暑假一放假就走 · 预算实用版</span>
        <a href="#top">回到顶部</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
