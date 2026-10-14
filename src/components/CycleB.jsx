import { Breadcrumbs, Faq } from './Sections.jsx';
import { ChevronDownIcon, ExternalLinkIcon, RenewIcon } from './Icons.jsx';
import { CYCLE_FAQS } from '../data.js';

const IMG = `${import.meta.env.BASE_URL}images/c2w/`;

const HIGHLIGHTS = [
  { eyebrow: 'Spend up to', value: '£2,000', note: 'on a bike, equipment or both' },
  { eyebrow: 'Save', value: '28-47%', note: 'on Tax & NI', green: true },
  { eyebrow: '14 days', value: 'Free insurance', note: 'From the day you collect' },
  { eyebrow: 'Save an additional', value: '10%', note: 'on cycling extras', green: true },
];

const STEPS = [
  { icon: 'step-find.svg', title: 'Choose your bike and kit', body: 'Find a shop below, or browse online at tredz.co.uk. Add up the total - bike, equipment or both, up to £2,000.' },
  { icon: 'step-sign.svg', title: 'Apply and sign', body: 'Halfords take over from here. Enter the total, confirm what you’ll save and what comes off your salary, then sign the Hire Agreement electronically.' },
  { icon: 'step-review.svg', title: 'Employer review', body: 'Your employer checks you meet the scheme rules, taking account of any other gross salary deductions such as pensions.' },
  { icon: 'step-collect.svg', title: 'Collect your bike', body: 'Your Letter of Collection arrives by email, usually within 48 hours of approval. Take it to the shop or enter the number at an online checkout.' },
];

const SUMMARY = [
  ['Order value', '£2,000.00'],
  ['Hire period', '12 months'],
  ['Tax and NI saved', '£560.00'],
  ['Total you pay', '£1440.00'],
];

function ApplyButton({ className = '' }) {
  return (
    <a href="#" className={`primary-button gf-button ${className}`} onClick={(e) => e.preventDefault()}>
      Apply at Halfords
      <ExternalLinkIcon />
    </a>
  );
}

function MoneyField({ label, value, hint, prefix = '£' }) {
  return (
    <label className="cb-field">
      <span className="cb-label">{label}</span>
      <span className="cb-input">
        {prefix && <span className="cb-prefix">{prefix}</span>}
        <input type="text" inputMode="decimal" defaultValue={value} />
      </span>
      {hint && <span className="cb-hint">{hint}</span>}
    </label>
  );
}

// The calculator is a static mock: fields can be typed in but the result doesn't change.
function Calculator() {
  return (
    <section className="gf-section" id="calculator">
      <div className="gf-inner gf-stack">
        <div className="cb-heading">
          <h2 className="section-title">What you could save</h2>
          <p>Enter what you want to spend and we will show what comes off your salary each month, and what the tax relief is worth. Nothing here is submitted - the application happens on the Halfords site.</p>
        </div>
        <div className="cb-calc">
          <div className="cb-calc-inputs">
            <div className="cb-panel">
              <p className="cb-step"><span className="cb-step-num">1</span>Your salary</p>
              <div className="cb-fields">
                <MoneyField label="Your gross annual salary" value="40,000" hint="Enter your salary before tax and National Insurance is deducted" />
                <label className="cb-field">
                  <span className="cb-label">Your tax band</span>
                  <span className="cb-input cb-select">
                    <select defaultValue="basic">
                      <option value="basic">Basic rate (20%)</option>
                      <option value="higher">Higher rate (40%)</option>
                      <option value="additional">Additional rate (45%)</option>
                    </select>
                    <ChevronDownIcon color="#666666" />
                  </span>
                  <span className="cb-hint">Set from your salary. Change it if other income puts you in a different band.</span>
                </label>
                <MoneyField label="Other gross deductions" value="0.00" hint="Pension, Salary Sacrifice, etc. (not Childcare Vouchers)" />
              </div>
            </div>
            <div className="cb-panel">
              <p className="cb-step"><span className="cb-step-num">2</span>Choose your amount</p>
              <MoneyField
                label="How much do you want to spend?"
                value="2,000.00"
                hint="Your employer sets a spend limit of £2,000. The amount you may spend might change depending on your circumstances, for example if the deductions would take you below the National Minimum Wage."
              />
            </div>
          </div>
          <aside className="cb-panel cb-result" aria-live="polite">
            <p className="cb-result-title">What you could save</p>
            <dl className="cb-rows">
              {SUMMARY.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className="cb-monthly">
              <p>What you pay each month</p>
              <p className="cb-monthly-value">£120.00</p>
            </div>
            <p className="cb-note">Twelve deductions from your gross pay. You save £560.00 against the £2,000.00 order value - 28%, the Income Tax and National Insurance you would have paid on it.</p>
            <p className="cb-note">An estimate. Your employer may set a lower limit, and National Minimum Wage rules can reduce the maximum available to you.</p>
            {/* Disabled until a field changes; the figures already match the fields */}
            <button type="button" className="secondary-button cb-update" disabled>
              Update calculation
              <RenewIcon size={16} color="currentColor" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

// Version B: the proposed Cycle to Work page (Figma Design Development, "Cycle to Work - Desktop concept")
export default function CycleB() {
  return (
    <main className="gf">
      <div className="gf-crumbs">
        <div className="gf-inner">
          <Breadcrumbs trail={['Benefits']} current="Cycle2Work" />
        </div>
      </div>

      <section className="gf-hero cb-hero">
        <div className="gf-inner gf-hero-inner">
          <div className="gf-hero-text">
            <h1>Save up to 47% on a new bike and accessories with Cycle2Work</h1>
            <p>Get a new bike, helmet, and equipment now, and pay back later from your pre-tax salary. Save big on tax and NI, improve your health &amp; fitness, as well as doing your bit for the environment.</p>
            <ApplyButton />
          </div>
          <img className="cb-hero-image" src={`${IMG}hero-cyclists.png`} width="616" height="396" alt="" />
        </div>
      </section>

      <section className="gf-section cb-kpis-section">
        <div className="gf-inner gf-stack">
          <h2 className="section-title">Highlights</h2>
          <ul className="cb-kpis">
            {HIGHLIGHTS.map((h) => (
              <li key={h.value} className="cb-kpi">
                <p className="cb-kpi-eyebrow">{h.eyebrow}</p>
                <p className={`cb-kpi-value${h.green ? ' is-green' : ''}`}>{h.value}</p>
                <p className="cb-kpi-small">{h.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gf-section">
        <div className="gf-inner gf-describe">
          <div className="gf-describe-text">
          <h2 className="section-title">Choose your bike today, pay later from your salary</h2>
          <p>Pick a bike, kit, or both, up to £2,000. Your employer buys it up front and you pay them back from your gross salary over twelve months. Because it comes out before Income Tax and National Insurance, you save 28% to 47% on the ticket price.</p>
          <p>Once you're approved, your Letter of Collection arrives by email, usually within 48 hours. Spend it at Halfords, at tredz.co.uk, or at any independent shop on the scheme. You also get lifetime safety checks, 14 days of free insurance and 10% off cycling essentials.</p>
          <p>When the payments finish, you choose: Keep it for a refundable deposit of 3% to 7% and it's yours outright after three more years. Buy it now for its current market value, usually 18% to 25%. Or hand it back and pay nothing more.</p>
          </div>
          <img className="gf-describe-image" src={`${IMG}bike-shop.jpg`} width="420" height="240" alt="" />
        </div>
      </section>

      <Calculator />

      <section className="gf-section">
        <div className="gf-inner gf-stack gf-stack-32">
          <h2 className="section-title">How to apply</h2>
          <ol className="gf-steps">
            {STEPS.map((s) => (
              <li key={s.title} className="gf-step">
                <span className="gf-step-circle"><img src={`${IMG}${s.icon}`} width="40" height="40" alt="" /></span>
                <p className="gf-step-title">{s.title}</p>
                <p className="gf-step-body">{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="gf-cta-bar"><ApplyButton /></div>
        </div>
      </section>

      <section className="gf-section">
        <div className="gf-inner gf-provider">
          <div className="gf-provider-logo cb-provider-logo">
            <img src={`${IMG}halfords-logo.png`} width="168" height="40" alt="Halfords" />
          </div>
          <div className="gf-provider-text">
            <h2>Halfords</h2>
            <p>Halfords run the scheme as Cycle2Work. They are the legal owner of the bike for the length of the hire, they issue the Letter of Collection, and they handle the end of the agreement. The shop you spend it in does not have to be a Halfords.</p>
          </div>
        </div>
      </section>

      <Faq items={CYCLE_FAQS} className="gf-faq" />

      <section className="gf-section">
        <div className="gf-inner gf-stack">
          <h2 className="section-title">Help and support</h2>
          <div className="gf-cards">
            <div className="gf-card">
              <p className="gf-card-eyebrow">About the benefit</p>
              <p className="gf-card-title">Halfords Cycle2Work</p>
              <p className="gf-card-note">Your application, your bike, your agreement</p>
              <p className="gf-card-note">Anything about the Letter of Collection, what you can spend it on, collection, or what happens at the end of the hire.</p>
            </div>
            <div className="gf-card">
              <p className="gf-card-eyebrow">About your pay or access</p>
              <p className="gf-card-title">Our support team</p>
              <a href="#" className="gf-card-link">rg.co/happytohelp</a>
              <p className="gf-card-note">Eligibility, salary deductions, and anything about getting into the benefit from here. We cannot see your Halfords application.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gf-section">
        <div className="gf-inner gf-closing">
          <div className="gf-closing-text">
            <h2>Ready to get on a bike?</h2>
            <p>You will be taken to the Halfords site to apply. Before you go we show you exactly what is shared with them, and you can turn back. Your Letter of Collection follows within 48 hours of your employer approving it.</p>
          </div>
          <ApplyButton />
        </div>
      </section>
    </main>
  );
}
