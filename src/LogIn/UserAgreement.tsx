import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';

const UserAgreement: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <div>
      <main className="container mt-4">
        <h2>User Agreement</h2>
        <p>Welcome to Just Podcast! Before registering to be a user, please read the following User Agreement carefully.</p>

        <section>
          <h3>1. Acceptance of Terms</h3>
          <p>By registering with Just Podcast, you agree to comply with and be bound by the following terms and conditions of use.</p>
        </section>

        <section>
          <h3>2. Privacy Policy</h3>
          <p>Your privacy is important to us. Please review our Privacy Policy for details on how we collect, use, and protect your information.</p>
        </section>

        <section>
          <h3>3. User Conduct</h3>
          <p>As a user, you agree not to use Just Podcast for any unlawful or prohibited activities. You must not:</p>
          <ul>
            <li>Post or share content that is defamatory, obscene, or harmful.</li>
            <li>Use the site to harass, abuse, or harm other individuals.</li>
            <li>Engage in any activity that interferes with or disrupts the services provided by Just Podcast.</li>
          </ul>
        </section>

        <section>
          <h3>4. Content Ownership</h3>
          <p>All content provided on Just Podcast is owned by us or our licensors. You may not copy, distribute, or create derivative works from this content without prior written permission.</p>
        </section>

        <section>
          <h3>5. Termination</h3>
          <p>We reserve the right to terminate or suspend your access to Just Podcast at any time, without notice, for any reason, including breach of this User Agreement.</p>
        </section>

        <section>
          <h3>6. Changes to the Agreement</h3>
          <p>We may update this User Agreement from time to time. Continued use of Just Podcast after any changes constitutes your acceptance of the new terms.</p>
        </section>

        <section>
          <h3>7. Contact Information</h3>
          <p>If you have any questions or concerns about this User Agreement, please contact us at <a href="mailto:support@justpodcast.com">support@justpodcast.com</a>.</p>
        </section>

        <div className="text-center mt-4">
          <button className="btn btn-dark rounded-0" onClick={handleBackClick}>Return to Sign Up</button>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        <div className="container">
          <p>&copy; 2024 Just Podcast. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default UserAgreement;
