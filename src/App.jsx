import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import { Footer } from './components/Sections.jsx';
import PrototypeControls from './components/PrototypeControls.jsx';
import CycleA, { A_PAGES } from './components/CycleA.jsx';
import CycleB from './components/CycleB.jsx';

// ?view=a shows the current Cycle to Work pages (Version A); no view param shows the proposed page (Version B).
// Neutral names so test participants can't tell which is the redesign.
// Version A branches into sub-pages, kept in ?page= so each one has its own link and the back button works.
function readState() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page');
  return {
    view: params.get('view') === 'a' ? 'current' : 'new',
    page: A_PAGES.includes(page) ? page : null,
  };
}

function go(view, page) {
  const url = new URL(window.location.href);
  url.searchParams.delete('page');
  if (view === 'current') {
    url.searchParams.set('view', 'a');
    if (page) url.searchParams.set('page', page);
  } else {
    url.searchParams.delete('view');
  }
  window.history.pushState({}, '', url);
  window.scrollTo(0, 0);
}

export default function App() {
  const [state, setState] = useState(readState);

  useEffect(() => {
    const onPop = () => setState(readState());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const selectView = (view) => {
    go(view, null);
    setState({ view, page: null });
  };

  const selectPage = (page) => {
    go('current', page);
    setState({ view: 'current', page });
  };

  return (
    <>
      <Header />
      {state.view === 'current' ? <CycleA page={state.page} onPage={selectPage} /> : <CycleB />}
      <Footer />
      <PrototypeControls key="prototype-controls" view={state.view} onView={selectView} />
    </>
  );
}
