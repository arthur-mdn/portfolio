import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function TurnstileWidget({ onToken }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onTokenRef = useRef(onToken);
  const [siteKey, setSiteKey] = useState(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
  );
  const [configError, setConfigError] = useState(false);

  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  useEffect(() => {
    if (siteKey) return;

    let cancelled = false;

    fetch("/api/turnstile-config")
      .then((response) => {
        if (!response.ok) throw new Error("config unavailable");
        return response.json();
      })
      .then((payload) => {
        if (cancelled) return;
        if (payload?.siteKey) {
          setSiteKey(payload.siteKey);
        } else {
          setConfigError(true);
        }
      })
      .catch(() => {
        if (!cancelled) setConfigError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [siteKey]);

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
    if (!siteKey) return;

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

  if (configError) {
    return (
      <p className="contact-error">
        Captcha non configuré (clé Turnstile manquante).
      </p>
    );
  }

  if (!siteKey) {
    return <div className="contact-turnstile" aria-hidden="true" />;
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
