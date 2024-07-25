import { useState } from 'react';
import { useRouter } from 'next/router';

export default function UnsubscribePage() => {
  const router = useRouter();
  const { email } = router.query;
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleUnsubscribe = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setConfirmationMessage('You have been unsubscribed.');
    } else {
      setConfirmationMessage('There was an error. Please try again.');
    }
  };

  return (
    <div>
      <h1>Unsubscribe</h1>
      {email ? (
        <>
          <p>Do you want to unsubscribe from any emails from Little Bear?</p>
          <form onSubmit={handleUnsubscribe}>
            <input type="hidden" name="email" value={email} />
            <button type="submit">Confirm</button>
          </form>
        </>
      ) : (
        <p>Email not provided.</p>
      )}
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

