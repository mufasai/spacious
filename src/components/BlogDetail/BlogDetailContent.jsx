import React from 'react';
import './BlogDetailContent.css';

const BlogDetailContent = () => {
  return (
    <section className="blog-detail-content-section">
      <div className="blog-detail-container">
        <aside className="blog-detail-sidebar">
          <div className="overview-card">
            <h3 className="overview-title">Overview</h3>
            <ul className="overview-list">
              <li className="active">Introduction</li>
              <li>Why Marketing Needs Automation</li>
              <li>Key Areas You Can Automate To...</li>
              <li>Best Tools to Connect</li>
              <li>Conclusion</li>
            </ul>

            <div className="share-blog">
              <p className="share-title">Share this blog</p>
              <div className="share-icons">
                <button className="share-icon-box" title="Copy Link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </button>
                <button className="share-icon-box" title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                  </svg>
                </button>
                <button className="share-icon-box" title="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </button>
                <button className="share-icon-box" title="X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="blog-main-article">
          <div className="article-meta">
            <div className="meta-item">
              <span className="meta-label">Written by</span>
              <div className="author-info">
                <img src="/emily.png" alt="John Doe" className="author-avatar" />
                <span className="author-name">John Doe</span>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-label">Published on</span>
              <span className="publish-date">March 18, 2025</span>
            </div>
          </div>

          <article className="article-body">
            <h2 className="article-section-title">The Problem With Traditional CRM Systems</h2>
            <p>
              Most traditional CRMs were designed to record information, not interpret it. They rely heavily on manual input, rigid fields, and static pipelines.
            </p>
            <p>Common limitations include:</p>
            <ul>
              <li>Fragmented data across email, chat, calls, and tools</li>
              <li>Heavy dependence on manual updates</li>
              <li>Lack of context behind customer actions</li>
              <li>Reactive workflows instead of proactive guidance</li>
            </ul>
            <p>
              As a result, teams spend more time managing the CRM than actually using it to build relationships.
            </p>

            <h2 className="article-section-title">Customers Are More Complex Than Data Fields</h2>
            <p>
              Modern customers don't move in straight lines. Their intent evolves through:
            </p>
            <ul>
              <li>Subtle changes in communication tone</li>
              <li>Engagement frequency across multiple channels</li>
              <li>Timing, silence, hesitation, or urgency</li>
              <li>Behavioral patterns over time</li>
            </ul>
            <p>
              A spreadsheet-like CRM cannot capture this complexity. Understanding customers today requires analyzing signals, not just storing facts.
            </p>

            <h2 className="article-section-title">How AI Changes the Role of CRM</h2>
            <p>
              AI transforms CRM from a passive database into an active intelligence layer. Instead of asking teams to interpret raw data, AI helps by:
            </p>
            <ul>
              <li>Analyzing interactions and behavioral patterns automatically</li>
              <li>Connecting signals across channels into a unified context</li>
              <li>Identifying intent, urgency, and likelihood to act</li>
              <li>Suggesting next best actions in real time</li>
            </ul>
            <p>
              This shift allows CRM to move from "system of record" to "system of understanding."
            </p>

            <h2 className="article-section-title">From Data Collection to Customer Understanding</h2>
            <p>
              AI-powered CRM doesn't just collect more data—it makes sense of it. For example:
            </p>
            <ul>
              <li>A delayed reply combined with reduced engagement may signal hesitation</li>
              <li>Repeated visits to pricing pages may indicate buying intent</li>
              <li>Consistent interaction without conversion could point to unresolved objections</li>
            </ul>
            <p>
              AI recognizes these patterns at scale, helping teams respond thoughtfully rather than guessing.
            </p>

            <h2 className="article-section-title">Final Thought</h2>
            <p>
              CRM was never meant to be a data entry tool. With AI, it finally becomes what it was always supposed to be: a system that helps teams understand customers and act with confidence.
            </p>
          </article>
        </main>
      </div>
    </section>
  );
};

export default BlogDetailContent;
