## Erntechallenge-Server
Dies ist das Repository für den ernte-challenge Server

## Voraussetzungen
Um den Server starten zu können wird folgendes benötigt:
- nodeJS
- npm (oder ähnliches)
- git
- postgresql

# Download der Daten und Installation der packages
Wenn ihr bei irgendeinem Schritt Probleme habt, schreibt einfach in den Dev-Channel
1. Mit git das Repo in den bevorzugten Ordner klonen (git-clone). 
2. In der Shell in dem Verzeichnis npm install ausführen
3. Die Postsgresql-Datenbank anlegen, z.B.: createdb erntechallenge
4. Eine .env Datei im Root-Verzeichnis des Projekts erstellen (siehe .env.example). Die Datei kann einfach kopiert und angepasst werden
5. npm run start

Unter Umständen muss der Postgres-Benutzer noch angepasst werden, fragt einfach, wenn ihr Probleme hant

Dann sollte der Server laufen. Dies kann im Browser getestet werden:
http://localhost:8080/example
