import { Desktop } from './desktop';
import { Mobile } from './mobile';

export default function Header() {
  return (
    <header>
      <Desktop />
      <Mobile />
    </header>
  );
}
