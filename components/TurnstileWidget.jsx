import { useEffect, useRef } from "react";
import Script from "next/script";

export default function TurnstileWidget({ onToken }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  function renderWidget() {
    if (!siteKey || !window.turnstile || !containerRef.current) return;
    if (widgetIdRef.current != null) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token) => onTokenRef.current?.(token),
      "expired-callback": () => onTokenRef.current?.(""),
      "error-callback": () => onTokenRef.current?.(""),
    });
  }

  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
    }

    return () => {
      if (widgetIdRef.current != null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

  if (!siteKey) {
    return (
      <p className="contact-error">
        Captcha non configuré (clé Turnstile manquante).
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div className="contact-turnstile" ref={containerRef} />
    </>
  );
}
