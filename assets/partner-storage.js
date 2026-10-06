/* GitHub Pages has no server-side storage. Supply the PUBLIC Formspree form endpoint
   from your own account to enable submissions. Never paste a password or API key here. */
const PARTNER_FORM_ENDPOINT = 'https://formspree.io/f/mljgdgzn'; // Public form endpoint; not an API secret.

(() => {
  'use strict';
  const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(PARTNER_FORM_ENDPOINT);
  window.PartnerStorage = {
    configured,
    notice: configured
      ? 'Your details are sent to Cubernity through Formspree. Records are not published on this website.'
      : 'Registration is not open yet. The owner needs to connect the submission service before details can be saved.',
    async save(values) {
      if (!configured) throw new Error('Registration is not connected yet. Please try again once registration opens.');
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(PARTNER_FORM_ENDPOINT, {
          method: 'POST',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          body: JSON.stringify(values),
          signal: controller.signal
        });
        const type = response.headers.get('content-type') || '';
        if (!type.includes('application/json')) throw new Error('We could not confirm your submission. Please try again.');
        const result = await response.json();
        if (!response.ok || result.ok === false || result.errors?.length) {
          throw new Error(response.status === 429
            ? 'Too many attempts. Please wait a few minutes before trying again.'
            : (response.status === 400 || response.status === 422)
              ? 'The service could not accept these details. Please check your entries and try again.'
              : 'The service could not accept your details. Please try again later.');
        }
        // Formspree confirms acceptance with a successful HTTP response; no record ID is required.
        return {accepted: true};
      } catch (error) {
        if (error.name === 'AbortError') throw new Error('The request timed out. We could not confirm whether it arrived. Please retry later.');
        if (error instanceof TypeError) throw new Error('Unable to reach the registration service. Check your connection and try again.');
        throw error;
      } finally { clearTimeout(timeout); }
    },
    successMessage() { return 'Your partner details have been submitted successfully to Cubernity. Thank you for registering.'; }
  };
})();
