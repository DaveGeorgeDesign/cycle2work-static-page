import { Fragment } from 'react';
import { HomeIcon, ChevronForwardIcon } from './Icons.jsx';
import { STORES } from '../data.js';

const IMG = `${import.meta.env.BASE_URL}images/c2w-a/`;

// Version A: the current live Cycle to Work pages (Figma Reference page, "Cycle to Work Static").
// The landing page is a menu of cards that branch off to separate pages; each is its own `page` here.
// The CMS "Edit page" and floating "top" buttons are left out, as employees don't see them.
// The first page is the RG-employee intro (no `page` param); its buttons lead to the calculator and the
// Cycle to Work homepage (`page=home`), which the other pages branch off from.
export const A_PAGES = ['home', 'how-it-works', 'benefits', 'store-locator', 'calculator'];

function PageLink({ to, onPage, className = '', children }) {
  const href = to ? `?view=a&page=${to}` : '?view=a';
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onPage(to);
      }}
    >
      {children}
    </a>
  );
}

// "Apply now" takes you to Halfords on the live site; the prototype stays put.
function ApplyNow({ className = '' }) {
  return <a href="#" className={`ca-button ${className}`} onClick={(e) => e.preventDefault()}>Apply now</a>;
}

function Crumbs({ current, onPage }) {
  const trail = current ? [['Benefits', null, true], ['CycleToWork', 'home']] : [['Benefits', null, true]];
  return (
    <nav className="ca-crumbs" aria-label="Breadcrumb">
      <a href="#" aria-label="Home" onClick={(e) => e.preventDefault()}><HomeIcon size={16} color="#056BCC" /></a>
      {trail.map(([label, to, dead]) => (
        <Fragment key={label}>
          <ChevronForwardIcon />
          {dead ? (
            <a href="#" className="ca-crumb-link" onClick={(e) => e.preventDefault()}>{label}</a>
          ) : (
            <PageLink to={to} onPage={onPage} className="ca-crumb-link">{label}</PageLink>
          )}
        </Fragment>
      ))}
      <ChevronForwardIcon />
      <span className="ca-crumb-current" aria-current="page">{current || 'Cycle To Work'}</span>
    </nav>
  );
}

function BackLink({ onPage }) {
  return (
    <PageLink to="home" onPage={onPage} className="ca-back">‹ Back</PageLink>
  );
}

// RG staff land here first: an intro card with links to the savings calculator and the homepage.
function RgIntro({ onPage }) {
  return (
    <div className="ca-page">
      <div className="ca-inner">
        <h1 className="ca-title">RG Cycle to Work</h1>
        <div className="ca-rg">
          <div className="ca-card ca-rg-card">
            <img className="ca-rg-logo" src={`${IMG}rg-logo.png`} width="620" height="100" alt="RG Cycle to Work: bigger savings, national coverage" />
            <p>RG Cycle to Work allows you to apply for your very own brand new, shiny bicycle or even just kit yourself out with some nice new cycling gear! It’s instant, that's right, INSTANT. So you'll be able to go and pick up your new things tonight and then pay it off in really nice manageable amounts from your monthly salary.</p>
            <p className="ca-rg-note"><strong>Please note:</strong> If you do decide to apply as an RG employee you will not see your salary displayed in the example. Your personal data is extremely important to us and as many people at RG have access to Reward Manager we wanted to ensure your salary was kept private. Instead of your salary, we've uploaded dummy data into SmartPay™ and as such, you'll see a dummy salary when you apply – don’t panic. This is meant to be there and it's just to allow you to pass the National Minimum Wage check.</p>
            <p className="ca-rg-note">You can see your actual savings with the Savings Calculator, but when applying please be aware that the savings will appear differently due to the dummy data.</p>
            <div className="ca-rg-buttons">
              <PageLink to="calculator" onPage={onPage} className="ca-button ca-button-sm ca-button-block">Savings Calculator</PageLink>
              <PageLink to="home" onPage={onPage} className="ca-button ca-button-sm ca-button-block">RG Cycle to Work Homepage</PageLink>
            </div>
          </div>
          <aside className="ca-card ca-rg-updated"><strong>Last updated:</strong>7 Oct 2022, 14:27</aside>
        </div>
      </div>
    </div>
  );
}

function Landing({ onPage }) {
  return (
    <>
      <section className="ca-hero" style={{ backgroundImage: `url(${IMG}hero-bike.webp), linear-gradient(180deg, #cdebf7 0%, #e4f3f9 45%, #ebf5f8 100%)` }}>
        <div className="ca-inner ca-hero-text">
          <h1>Save on a brand new bike and equipment</h1>
          <p>and start cycling to work today!</p>
          <ApplyNow />
        </div>
      </section>
      <div className="ca-page">
        <div className="ca-inner">
          <Crumbs onPage={onPage} />
          <div className="ca-grid">
            <div className="ca-card ca-card-wide">
              <div className="ca-card-row">
                <div className="ca-card-text">
                  <h2>Cycle to Work is for everyone</h2>
                  <p>Whether you want a new bike, equipment or both, top of the range or new starter, Cycle to Work will save you from 28% to 47% on the total cost. See where you can order from <PageLink to="store-locator" onPage={onPage} className="ca-link">here</PageLink>, or apply now below.</p>
                </div>
                <img src={`${IMG}ill-bike.png`} width="228" height="200" alt="" />
              </div>
              <ApplyNow />
            </div>
            <div className="ca-card ca-card-center">
              <h2>Find your nearest cycle store</h2>
              <p>Or order online and have it delivered</p>
              <img src={`${IMG}ill-pin.png`} width="220" height="170" alt="" />
              <PageLink to="store-locator" onPage={onPage} className="ca-button ca-button-outline">Find nearest store</PageLink>
            </div>
          </div>
          <div className="ca-grid ca-grid-half">
            <PageLink to="benefits" onPage={onPage} className="ca-card ca-card-link">
              <div className="ca-card-text">
                <h2>Benefits of cycling to work</h2>
                <p>A healthier you, a money saving commute and much more.</p>
              </div>
              <img src={`${IMG}ill-heart.png`} width="140" height="160" alt="" />
            </PageLink>
            <PageLink to="how-it-works" onPage={onPage} className="ca-card ca-card-link">
              <div className="ca-card-text">
                <h2>How it works?</h2>
                <p>We've got everything you'll need to know.</p>
              </div>
              <img src={`${IMG}ill-gears.png`} width="160" height="145" alt="" />
            </PageLink>
          </div>
          <PageLink to="how-it-works" onPage={onPage} className="ca-card ca-card-link ca-card-faq">
            <img src={`${IMG}ill-faq.png`} width="110" height="102" alt="" />
            <div className="ca-card-text">
              <h2>Frequently asked questions</h2>
              <p>Want to know more? Take a look at our frequently asked questions.</p>
            </div>
          </PageLink>
        </div>
      </div>
    </>
  );
}

const HOW_STEPS = [
  ['step-store.png', 'Choose your bike, equipment or both', (onPage) => <>Using our <PageLink to="store-locator" onPage={onPage} className="ca-link ca-visited">Store Locator</PageLink>, find your preferred cycle store and choose what you want to order up to the value of £2,000.00. Remember you can also use your LOC online.</>],
  ['step-total.png', 'Add up your total', () => 'When you know what you want to order, add up the total cost. This should not exceed the £2,000.00 limit. Make sure you know exactly how much you want to spend as you cannot change your order amount once you’ve applied.'],
  ['step-apply.png', 'Apply and confirm', () => 'Enter the total order amount into your application and it will show you much you’ll save as well as how much will be deducted from your salary. And when you’re happy confirm your application by electronically signing your Hire Agreement.'],
  ['step-employer.png', 'Employer review', () => 'Your employer will review your submitted application to ensure you meet the Cycle to Work requirements. They may take into account other gross salary deductions such as Childcare Vouchers and Pensions.'],
  ['step-download.png', 'Download your Letter of Collection', () => 'After your employer approves your application, you’ll receive your LoC via email to use in-store or online. Please read your LoC carefully to make sure you’ve got everything you need before picking up your bike.'],
];

function HowItWorks({ onPage }) {
  return (
    <div className="ca-page">
      <div className="ca-inner">
        <Crumbs current="How it works" onPage={onPage} />
        <article className="ca-card ca-article">
          <div className="ca-article-top">
            <div>
              <h1>How it works</h1>
              <p>Cycle to Work allows you to order a new bike, equipment or both up to the value of £2,000.00. Your employer pays for the order up front, you agree to hire the bike from Halfords, who are the legal owner of the bike from the start of the hire period. You pay your employer back through your salary to make tax savings of 28% - 47%.</p>
              <p>When your application is successful, you'll be given a Letter of Collection (LoC) to use in-store or online at over 1,250 cycling retailers – including Halfords, tredz.co.uk, and hundreds of independent bike shops. Find out more in our <a href="#faqs" className="ca-link">FAQs.</a></p>
            </div>
            <img src={`${IMG}ill-gears-lg.png`} width="275" height="255" alt="" />
          </div>
          <p>As well as all of the health and wellbeing benefits of cycling to work, you'll also have exclusive access to a range of other benefits whilst Cycle to Work payments are deducted from your salary:</p>
          <ul>
            <li>Lifetime safety checks on all cycles obtained through the scheme</li>
            <li>Lifetime guarantee on Halfords brand cycles</li>
            <li>10% off cycling essentials in any Halfords store for the duration of your initial hire period (restrictions apply)</li>
            <li>Access to all instore sale and promotional prices at Halfords and Tredz</li>
            <li>14 days free cycle insurance</li>
          </ul>
          <p>Is there something you want to know but not covered above? Please check out a full list of FAQs <a href="#faqs" className="ca-link">here</a>.</p>
          <ApplyNow />
        </article>

        <ol className="ca-card ca-steps">
          {HOW_STEPS.map(([icon, title, body]) => (
            <li key={title}>
              <div className="ca-step-head">
                <img src={`${IMG}${icon}`} width="98" height="96" alt="" />
                <p>{title}</p>
              </div>
              <p className="ca-step-body">{body(onPage)}</p>
            </li>
          ))}
        </ol>

        <div className="ca-card ca-qa" id="faqs">
          <div className="ca-qa-item">
            <img src={`${IMG}ill-piggy.png`} width="162" height="180" alt="" />
            <div>
              <h2>How much can I save?</h2>
              <p>You can save from 28% to 47% on the value of your Cycle to Work order. If you're a basic rate taxpayer, you pay 20% Income Tax and 8% National Insurance (NI) on what you earn. As you won't have to pay those on the value of your Cycle to Work order, you save 28%. The same works if you're a higher rate taxpayer, except you save the 40% Tax and 2% NI – adding up to a 42% saving. And if you are an additional rate taxpayer you save 47%.</p>
            </div>
          </div>
          <div className="ca-qa-item">
            <img src={`${IMG}ill-ownership.png`} width="176" height="160" alt="" />
            <div>
              <h2>Who owns the bike?</h2>
              <p>Halfords are the legal owners of the bike from the start of the hire period, and the bike is leased to you. Once you reach the end of your initial hire period, Halfords Cycle2Work will get in touch to discuss your options, one of which is Halfords' managed extended hire.</p>
            </div>
          </div>
          <div className="ca-qa-item">
            <img src={`${IMG}ill-complete.png`} width="176" height="205" alt="" />
            <div>
              <h2>What happens when I've completed my payments?</h2>
              <p>Once your hire period has come to an end, Halfords Cycle2Work will get in touch to discuss your options. This will include the opportunity to extend the hire of the cycle at no additional cost until the HMRC deem the value to be negligible. This is typically 4 or 5 years, and once this agreement has finished you will become the owner.</p>
            </div>
          </div>
          <div className="ca-qa-item">
            <img src={`${IMG}ill-stopwatch.png`} width="168" height="130" alt="" />
            <div>
              <h2>How long does it all take?</h2>
              <p>Once your employer has reviewed and approved your application, Halfords Cycle2Work will send through your LoC via email within 48 hours.</p>
            </div>
          </div>
          <div className="ca-qa-item">
            <img src={`${IMG}ill-shop.png`} width="168" height="200" alt="" />
            <div>
              <h2>Collecting your bike</h2>
              <p>As soon as you have your LoC, you can pick up your bike and equipment in-store and online.</p>
              <h3>In-store</h3>
              <p>You can collect in-store at Halfords and at hundreds of independent bike shops. You can take advantage of any in-store promotions too, and in some cases, they may reserve your order at the promotion price until you receive your LoC. This is entirely at the store's discretion.</p>
              <p>To find your nearest independent bike shop who will accept your LoC, please use the <PageLink to="store-locator" onPage={onPage} className="ca-link ca-visited">Store Locator</PageLink>. When using your LoC with them, they may need a Service Order from Halfords before they can complete your order. We recommend checking with them in advance and letting them know you have a Cycle to Work Letter of Collection.</p>
              <h3>Online</h3>
              <p>You can use your LoC online at tredz.co.uk, and any other online store who is approved by Halfords. When ordering online, add the items to your basket ensuring they don't exceed your LoC value, and enter the LoC Number at the checkout. Get your bike and equipment delivered and you can start cycling to work as soon as they arrive.</p>
            </div>
          </div>
        </div>
        <BackLink onPage={onPage} />
      </div>
    </div>
  );
}

const BENEFITS = [
  ['photo-tax.jpg', 'Save on Income Tax & National Insurance', 'Depending on which tax bracket you fall into will depend on how much you save when using Cycle to Work. If you’re a basic rate taxpayer, you’ll save 28% on your order by not having to pay the 20% Income Tax and 8% National Insurance (NI) on the amount taken from your salary. The same works if you’re a high rate taxpayer, saving 40% Tax and 2% NI – adding up to a 42% saving.'],
  ['photo-commute.jpg', 'Save money and time', 'On top of the savings, you’ll also save on all our other costs associated with commuting – rail fares, bus fares, fuel, and car parking – which soon add up. Think about all of the times you’ve been waiting for the train or the bus too, and all of the times you’ve been stuck in traffic, and think about how much time you’ll save not having to deal with that anymore. Now you can smile to yourself as you whizz past the traffic jam on your bike.'],
  ['photo-fit.jpg', 'Get fit and healthy', 'It’s an obvious one and probably the most important – cycling to work each day is incredible exercise. And people who exercise regularly are far less likely to suffer from stroke, heart disease and type 2 diabetes. Turning your commute into your daily exercise routine will also mean you can spend less time in the gym and cancel your membership entirely to save even more money.'],
  ['photo-planet.jpg', 'A greener planet', 'Whether you agree that the climate is changing or not, a greener planet is a bonus for us all. A bike is a carbon-neutral form of transport and by cycling to work, you’ll reduce your carbon footprint by around 600 kg of CO2 each year.'],
];

function Benefits({ onPage }) {
  return (
    <div className="ca-page">
      <div className="ca-inner">
        <Crumbs current="Benefits of cycling to work" onPage={onPage} />
        <h1 className="ca-title">Benefits of Cycling to work</h1>
        <div className="ca-benefits">
          {BENEFITS.map(([img, title, body]) => (
            <div key={title} className="ca-card ca-benefit">
              <img src={`${IMG}${img}`} width="536" height="399" alt="" />
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="ca-ready">
          <h2>Ready to start cycling?</h2>
          <p>You can apply for your new bike right now!</p>
          <a href="#" className="ca-button ca-button-sm" onClick={(e) => e.preventDefault()}>Apply Now</a>
        </div>
      </div>
    </div>
  );
}

// Static: the live store locator is a Google Maps embed with a postcode search.
function StoreLocator({ onPage }) {
  return (
    <div className="ca-page">
      <div className="ca-inner">
        <Crumbs current="Store Locator" onPage={onPage} />
        <div className="ca-card ca-locator">
          <div className="ca-locator-side">
            <h1>Store locator</h1>
            <label className="ca-locator-search">
              <span>Search by postcode, town or city</span>
              <span className="ca-locator-field">
                <input type="text" />
                <button type="button" aria-label="Search">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="14" cy="10" r="7" stroke="#fff" strokeWidth="1.6" /><path d="M9 15l-7 7" stroke="#fff" strokeWidth="1.6" /></svg>
                </button>
              </span>
            </label>
            <fieldset className="ca-radios">
              <legend className="ca-sr">Show</legend>
              <label><input type="radio" name="stores" defaultChecked /> Show all</label>
              <label><input type="radio" name="stores" /> <img src={`${IMG}icon-halfords.png`} width="18" height="19" alt="" /> Halfords stores</label>
              <label><input type="radio" name="stores" /> <img src={`${IMG}icon-independent.png`} width="18" height="19" alt="" /> Independent stores</label>
            </fieldset>
            <button type="button" className="ca-button ca-button-sm">Filter stores</button>
            <p className="ca-locator-count">50 stores near you.<br />Your nearest store is <strong>0.2 miles away.</strong></p>
            <ul className="ca-store-list">
              {STORES.map((s) => (
                <li key={s.name}>
                  <img src={`${IMG}icon-independent.png`} width="18" height="19" alt="" />
                  <div>
                    <p className="ca-store-name">{s.name}</p>
                    <p>{s.address}</p>
                    <p className="ca-store-distance">{s.distance}</p>
                    <a href="#" className="ca-link-plain" onClick={(e) => e.preventDefault()}>Get directions ›</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="ca-locator-map">
            <p className="ca-partner">In partnership with <img src={`${IMG}halfords-badge.png`} width="136" height="36" alt="Halfords" /></p>
            <img className="ca-map" src={`${IMG}map.jpg`} width="617" height="659" alt="Map of stores near you" />
          </div>
        </div>
        <div className="ca-grid ca-grid-half">
          <div className="ca-card ca-card-cta">
            <div className="ca-card-row">
              <div className="ca-card-text">
                <h2>Found your nearest store?</h2>
                <p>You can now apply and start cycling in no time.</p>
              </div>
              <img src={`${IMG}ill-bike-2.png`} width="170" height="155" alt="" />
            </div>
            <ApplyNow />
          </div>
          <div className="ca-card ca-card-cta">
            <div className="ca-card-row">
              <div className="ca-card-text">
                <h2>How it works</h2>
                <p>We've got everything you'll need to know.</p>
              </div>
              <img src={`${IMG}ill-wrench.png`} width="170" height="155" alt="" />
            </div>
            <PageLink to="how-it-works" onPage={onPage} className="ca-button">See how</PageLink>
          </div>
        </div>
        <PageLink to="home" onPage={onPage} className="ca-back ca-back-plain">‹ Back</PageLink>
      </div>
    </div>
  );
}

// Static: inputs can be typed in but nothing recalculates.
function Calculator({ onPage }) {
  const field = (label, value, prefix = '£ ') => (
    <label className="ca-calc-field">
      <span>{label}<sup>*</sup></span>
      <input type="text" defaultValue={`${prefix}${value}`} />
    </label>
  );
  return (
    <div className="ca-page">
      <div className="ca-inner">
        <PageLink to="home" onPage={onPage} className="ca-broken-img">Cycle to work</PageLink>
        <div className="ca-card ca-calc">
          <div className="ca-calc-form">
            <h1>Savings calculator</h1>
            <p className="ca-calc-max">The maximum you are eligible for is £2000.</p>
            <p className="ca-calc-italic">Please enter the details as per your regular payslip</p>
            <div className="ca-slider" aria-hidden="true">
              <span>£100</span>
              <span className="ca-slider-track"><span className="ca-slider-knob" /></span>
              <span>£2000</span>
            </div>
            <p className="ca-slider-value">£2000</p>
            {field('How much do you want to spend on a new bike and equipment?', '2000')}
            <div className="ca-calc-field">
              <span>How much do you earn before tax<sup>*</sup></span>
              <div className="ca-calc-row">
                <input type="text" defaultValue="£ 40000" aria-label="Earnings before tax" />
                <span className="ca-toggle"><button type="button" className="is-on">yearly</button><button type="button">hourly</button></span>
              </div>
            </div>
            {field('How many hours do you work per week?', '40', '')}
            {field('How many weeks do you work per year?', '52', '')}
            <label className="ca-calc-field">
              <span>Do you have any other Salary Sacrifices (This excludes Childcare Vouchers. An example might be Pension)?</span>
              <input type="text" defaultValue="£ 0" />
              <em>Please enter the amount reflected on your regular payslip</em>
            </label>
            <div className="ca-calc-submit"><button type="button" className="ca-button ca-button-sm">Calculate my savings</button></div>
          </div>
          <div className="ca-calc-result">
            <h2>Your tax savings based on a 12-month hire period and application amount £2000</h2>
            <dl>
              <div className="is-big"><dt>You will save</dt><dd className="is-green">£665.00</dd></div>
              <div className="is-big"><dt>How much you’ll pay</dt><dd className="is-blue">£1335.00</dd></div>
              <div><dt>Your monthly payments before tax</dt><dd>£166.67</dd></div>
              <div><dt>Your monthly pay will reduce by</dt><dd>£111.25</dd></div>
            </dl>
            <div className="ca-calc-info">
              <img src={`${IMG}icon-help.png`} width="34" height="34" alt="" />
              <div>
                <p>- Savings are based on Tax and National Insurance.</p>
                <p>- Your available balance is based on spending limits set by your employer as well as National Minimum Wage regulations based on your salary and age. This is an estimate that does not take into account the rest SmartPay Products, which are enabled by your employer.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ca-tiles">
          <PageLink to="home" onPage={onPage} className="ca-card ca-tile"><img src={`${IMG}icon-wheel.png`} width="34" height="34" alt="" />Cycle to Work</PageLink>
          <a href="#" className="ca-card ca-tile" onClick={(e) => e.preventDefault()}><img src={`${IMG}icon-help.png`} width="34" height="34" alt="" />Help &amp; Support</a>
          <PageLink to="store-locator" onPage={onPage} className="ca-card ca-tile"><img src={`${IMG}icon-store.png`} width="34" height="34" alt="" />Store locator</PageLink>
        </div>
      </div>
    </div>
  );
}

export default function CycleA({ page, onPage }) {
  return (
    <main className="ca">
      {page === 'how-it-works' && <HowItWorks onPage={onPage} />}
      {page === 'benefits' && <Benefits onPage={onPage} />}
      {page === 'store-locator' && <StoreLocator onPage={onPage} />}
      {page === 'calculator' && <Calculator onPage={onPage} />}
      {page === 'home' && <Landing onPage={onPage} />}
      {!A_PAGES.includes(page) && <RgIntro onPage={onPage} />}
    </main>
  );
}
