import { hydrateRoot } from 'react-dom/client';
import { App } from '../App';

export { render };

async function render(pageContext: any) {
  const { dehydratedState } = pageContext;
  const container = document.getElementById('root');
  if (!container) throw new Error('Could not find root element');
  
  hydrateRoot(container, <App dehydratedState={dehydratedState} />);
}