'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

import styles from './page.module.scss';

function UnsubscribeContent() {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (router.query && router.query.email) {
      setEmail(router.query.email);
    }
  }, [router.query]);

  const handleConfirm = async () => {
    if (!email) return;

    const response = await fetch('/api/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setConfirmed(true);
    }
  };

  if (confirmed) {
    return <p>You have been unsubscribed from our mailing list.</p>;
  }

  return (
    <div className={styles.unsubscribe}>
      {email ? (
        <>
          <p className={styles.unsubscribe__content}>Email: {email}</p>
          <p className={styles.unsubscribe__content}>Do you want to unsubscribe from any emails from Little Bear?</p>
          <button className={styles.unsubscribe__button} onClick={handleConfirm}>Confirm</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UnsubscribeContent />
    </Suspense>
  );
}
