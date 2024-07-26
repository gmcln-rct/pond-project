'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.scss';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = async () => {
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
      <p className={styles.unsubscribe__content}>Email: {email}</p>
      <p className={styles.unsubscribe__content}>Do you want to unsubscribe from any emails from Little Bear?</p>
      <button className={styles.unsubscribe__button} onClick={handleConfirm}>Confirm</button>
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
