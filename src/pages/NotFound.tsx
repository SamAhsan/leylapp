import { Link } from 'react-router-dom';
import Container from '../components/Container';
import SEO from '../components/SEO';

const NotFound = () => (
  <>
    <SEO title="Page not found â€” Leylapp" description="The page you were looking for is gone, but Leylapp is still here." path="/404" />
    <section className="section-padding">
      <Container className="text-center">
        <p className="text-sm uppercase tracking-wide text-neutral-500">404</p>
        <h1 className="mt-4 text-4xl font-bold text-neutral-900">This page wandered off.</h1>
        <p className="mt-3 text-neutral-600">Try heading back home or exploring features.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/" className="rounded-3xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-glow">
            Go home
          </Link>
          <Link to="/features" className="rounded-3xl border border-neutral-200 px-6 py-3 font-semibold text-neutral-700">
            Features
          </Link>
        </div>
      </Container>
    </section>
  </>
);

export default NotFound;

