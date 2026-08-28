/*
 * Betreiber-Standardwerte für den Passwordgenerator.
 *
 * Diese Datei ist optional: Wird sie nicht mit hochgeladen, nutzt die App die
 * eingebauten Standardwerte. Ist sie vorhanden, gelten diese Werte für JEDEN
 * Besucher beim allerersten Aufruf (bzw. nach "Einstellungen auf Standard
 * zurücksetzen"). Sobald ein Besucher in seinem Browser selbst etwas
 * verändert, merkt sich sein Browser das lokal (localStorage) und diese
 * Datei wird für ihn ab dann ignoriert, bis er zurücksetzt.
 *
 * Es werden hier keine Passwörter gespeichert, nur Voreinstellungen für die
 * Oberfläche. Einfach die Werte unten anpassen und hochladen.
 */
window.PWGEN_CONFIG = {
  // Welcher Tab beim Start aktiv ist: 'password' oder 'passphrase'
  activeTab: 'password',

  // --- Passwort-Tab ---
  length: '16',                // Länge, 4-128
  optUpper: true,               // A-Z
  optLower: true,               // a-z
  optDigits: true,              // 0-9
  optSpecial: true,             // Sonderzeichen

  // Welche Sonderzeichen erlaubt sind (nur Zeichen aus dieser Liste werden
  // berücksichtigt): ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
  selectedSpecials: ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}','~'],

  digitMin: '1', digitMax: '5',     // Minimum/Maximum Ziffern
  specialMin: '1', specialMax: '5', // Minimum/Maximum Sonderzeichen
  optAmbiguous: false,              // Mehrdeutige Zeichen (0/O/o, 1/l/I/|) vermeiden

  // --- Passphrase-Tab ---
  wordCount: '4',        // Anzahl Wörter
  sep: '-',              // Trennzeichen, eines aus: ! ? , . - _ + # * = $ < >
  optCapitalize: true,   // Wortanfänge groß schreiben
  optIncludeNumber: true // Zufällige Ziffer an ein zufälliges Wort anhängen
};
