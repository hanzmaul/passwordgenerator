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
- Einstellungen werden lokal im Browser gespeichert (nur Optionen, keine Passwörter)

## Hosting

Da alles in `index.html` steckt (kein Build-Schritt, keine externen Abhängigkeiten), reicht es,
die Datei auf einen beliebigen Webserver hochzuladen – z. B. per FTP/SFTP in das Webroot-
Verzeichnis (`public_html`, `htdocs`, `www` o. ä.) oder über kostenlose statische Hoster wie
GitHub Pages, Netlify, Vercel oder Cloudflare Pages.
