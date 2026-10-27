import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';

const NotFound = () => (
  <PageLayout name="Page not found" eyebrow="404" title="Page not found." intro="The page you're looking for doesn't exist or has moved.">
    <div className="container-content pb-[120px]">
      <Link to="/" className="link-ul">
        Back to home
      </Link>
    </div>
  </PageLayout>
);

export default NotFound;
