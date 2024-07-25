'use client';

// app/unsubscribe/page.js
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UnsubscribePage() {
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
    <div>
      <p>Do you want to unsubscribe from any emails from Little Bear?</p>
      <p>Email: {email}</p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}
