import { db } from '@/lib/db';
import { deletePost, togglePublish } from './actions';
import NewPostForm from './NewPostForm';

const dateFormatter = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default async function BlogAdminPage() {
  const posts = await db.blogPost.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '2.5rem var(--gutter)' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow">Admin</span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.9rem',
            margin: '0.5rem 0 0.75rem',
            color: 'var(--ink)',
          }}
        >
          Blog
        </h1>
        <p style={{ color: 'var(--ink-soft)' }}>
          {posts.length} post{posts.length === 1 ? '' : 's'} — write here, publish when ready.
        </p>
      </div>

      <NewPostForm />

      {posts.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)' }}>No posts yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                const published = Boolean(post.publishedAt);
                return (
                  <tr key={post.id}>
                    <td style={{ fontWeight: 600 }}>{post.title}</td>
                    <td>
                      <span className={`admin-pill ${published ? 'admin-pill-green' : 'admin-pill-gray'}`}>
                        {published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td>{dateFormatter.format(post.createdAt)}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        {published && (
                          <a
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="admin-icon-btn"
                            title="View on site"
                            aria-label="View on site"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                        <form action={togglePublish.bind(null, post.id, !published)}>
                          <button type="submit" className="admin-icon-btn" title={published ? 'Unpublish' : 'Publish'} aria-label={published ? 'Unpublish' : 'Publish'}>
                            {published ? (
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                <line x1="1" y1="1" x2="23" y2="23" />
                              </svg>
                            ) : (
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            )}
                          </button>
                        </form>
                        <form action={deletePost.bind(null, post.id)}>
                          <button type="submit" className="admin-icon-btn is-danger" title="Delete" aria-label="Delete">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
