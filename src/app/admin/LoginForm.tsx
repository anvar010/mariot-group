'use client';

import { useActionState } from 'react';
import { login, type LoginState } from './actions';

const initialState: LoginState = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--gutter)',
        overflow: 'hidden',
        backgroundColor: 'var(--ink)',
      }}
    >
      <video
        className="admin-login-video"
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        src="/hero-bg.mp4"
      />
      <div className="admin-login-scrim" aria-hidden />

      <form
        action={formAction}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '380px',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-2)',
          padding: '2.5rem 2rem',
        }}
      >
        <span className="eyebrow">Admin</span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.6rem',
            margin: '0.75rem 0 1.75rem',
            color: 'var(--ink)',
          }}
        >
          Sign in
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label
              htmlFor="username"
              style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--ink-soft)' }}
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="form-input"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--ink-soft)' }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="form-input"
            />
          </div>

          {state?.error && (
            <p role="alert" style={{ color: 'var(--accent)', fontSize: '0.85rem', margin: 0 }}>
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="btn-primary"
            style={{ width: '100%', marginTop: '0.5rem', opacity: pending ? 0.7 : 1 }}
          >
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
}
