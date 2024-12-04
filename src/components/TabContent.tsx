import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface TabContentProps {
  active: boolean;
  children: React.ReactNode;
}

export function TabContent({ active, children }: TabContentProps) {
  return (
    <CSSTransition
      in={active}
      timeout={300}
      classNames="tab"
      unmountOnExit
    >
      <div className={`tab-content ${active ? 'active' : ''}`}>
        {children}
      </div>
    </CSSTransition>
  );
}