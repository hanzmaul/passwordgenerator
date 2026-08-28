# Passwordgenerator

Ein sicherer Passwort- und Passphrase-Generator im Bitwarden-Stil, als einzelne HTML-Datei.
Läuft komplett lokal im Browser – nichts wird übertragen oder gespeichert. Check source code to verify.

## Nutzung

Einfach `index.html` im Browser öffnen, oder auf einem beliebigen Webserver hosten (siehe unten).

## Features

- **Passwort-Tab:** Länge 4–128, A–Z / a–z / 0–9 / Sonderzeichen einzeln wählbar, individuell
  auswählbare Sonderzeichen, Minimum/Maximum für Ziffern und Sonderzeichen, "Mehrdeutige Zeichen
  vermeiden" (0/O/o, 1/l/I/|)
- **Passphrase-Tab:** frei wählbare Wortanzahl, Trennzeichen, Großschreibung, optionale Ziffer
- Farbige Anzeige (Buchstaben weiß, Zahlen blau, Sonderzeichen rot)
- Ein-Klick-Kopieren als reiner Text
- Stärke-/Entropie-Anzeige
- Zufallsgenerierung über die Web Crypto API (`crypto.getRandomValues`), unbiased per Rejection
  Sampling
- Einstellungen werden lokal im Browser gespeichert (nur Optionen, keine Passwörter), inkl.
  Zurücksetzen-Button
- Optionale `config.js`: Betreiber-Standardwerte für alle Erstbesucher (siehe unten)

## Einstellungen: lokal vs. global

Es gibt zwei unabhängige Ebenen für gespeicherte Optionen:

1. **Pro Browser (automatisch, immer aktiv):** Jede Änderung wird per `localStorage` im
   jeweiligen Browser gespeichert und beim nächsten Besuch wiederhergestellt. Betrifft nur den
   einen Browser, in dem geändert wurde. Über den Link "Einstellungen auf Standard zurücksetzen"
   im Footer lässt sich das jederzeit rückgängig machen.
2. **Global über `config.js` (optional, vom Betreiber gepflegt):** Die Datei `config.js` neben
   `index.html` legt die Standardwerte fest, die *jeder* Besucher beim allerersten Aufruf sieht
   (und auf die "Zurücksetzen" zurückspringt). Sobald ein Besucher selbst etwas ändert, hat seine
   lokale Einstellung Vorrang – `config.js` wird für ihn dann nicht mehr wirksam, bis er
   zurücksetzt. Die Datei ist optional: fehlt sie, greifen die eingebauten Standardwerte. Einfach
   die Werte in `config.js` anpassen und zusammen mit `index.html` hochladen.

## Hosting

Da alles in `index.html` steckt (kein Build-Schritt, keine externen Abhängigkeiten), reicht es,
die Datei auf einen beliebigen Webserver hochzuladen – z. B. per FTP/SFTP in das Webroot-
Verzeichnis (`public_html`, `htdocs`, `www` o. ä.) oder über kostenlose statische Hoster wie
GitHub Pages, Netlify, Vercel oder Cloudflare Pages.
