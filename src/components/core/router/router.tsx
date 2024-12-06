import { Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ScrollToTop } from '../../shared/scrollToTop';

export function Router() {
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <ScrollToTop />
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={3000}>
            <Routes></Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </main>
  );
}
