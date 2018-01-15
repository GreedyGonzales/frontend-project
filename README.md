# Projektsteckbrief:
Das Projekt soll einen Pokédex aus der ersten Generation darstellen. Im Anime diente der Pokédex der Identifikation eines neu gesichtete, oder eines bereits Gefangenen Pokémon. Ich möchte mit dem Projekt genau so einen Pokédex darstellen.


# Proforma-Pflichtenheft:
* Ich arbeite mit GitHub und der Entwicklungsumgebung PHPStorm, um größtmögliche Transparenz bieten zu können.
* Anforderungen werden effizient und gewissenhaft umgesetzt.
* Visuelles Hauptmittel ist das simple 50/50 Layout und der scrollbare Contentbereich auf der linken Seite.
* Namenskonvention: BEM
* Ablagestruktur: http://thesassway.com/beginner/how-to-structure-a-sass-project
* Git Workflow: Feature Branch Workflow
* CSS Framework: Nein.


# Ablagestruktur
:file_folder: *project-root*

- :file_folder: *idea*
- :file_folder: *img*
- :file_folder: *js*
- :file_folder: *stylesheets*
   - :file_folder: *modules*
   - :file_folder: *partials*

# Styleguide

![Styleguide-Image](https://github.com/GreedyGonzales/frontend-project/blob/master/img/styleguide-1.png)

**Module:**
* Pokemon
  
**Inhalt:**
* A: Textbereich
  * A.1: Überschrift
  * A.2: Eckdaten
  * A.3: Typ(en)
  * A.4: Beschreibung
  
* B: Bildbereich
  * A.1: Bild
  
Auf der linken Seite befindet sich der scrollbare Content-Bereich. Hier wurde bewust ein feststehendes, screenfüllendes Layout im 50/50-Format gewählt. Links kann zwischen den Pokémon hin- und hergescrollt werden, während auf der rechten Seite jeweils das passende Bild angezeigt wird.

**Farben:**
* Hintergrundfarbe Content-Bereich
  * #ECF0F1
  * Verwendung: Diese Farbe findet im Hintergrund des scrollbaren Content-Bereichs Anwendung.
  
  ![Introtext-Image](https://github.com/GreedyGonzales/frontend-project/blob/master/img/styleguide-0.png)
  
* Textfarbe Introtext
  * #D91E18
  * Verwendung: Diese Farbe findet sich im Intro-Schriftzug: "Pokédex" wieder.

* Typenfarben: Pflanze, Gift, Feuer, Wasser
  * Pflanze: #2ECC71
  * Gift: #913D88
  * Feuer: #F89406
  * Wasser: #19B5FE
  * Verwendung: Je nach Typ, oder Typenkombination des Pokémon, wird eine andere Farbe zur Visualisierung verwendet.
  
  **Schriften:**
* Roboto
  * Roboto wird für jeglichen Text im Projekt verwendet.
  * https://fonts.google.com/specimen/Roboto
