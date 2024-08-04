# jquery-ui-menu.js

## Beschreibung

Das jQuery-Widget bietet eine flexible und anpassbare Lösung für die Erstellung von Menüs, die sich automatisch an verschiedene Bildschirmbreiten anpassen. Es unterstützt sowohl Klick- als auch Hover-Interaktionen und ermöglicht die Darstellung von Untermenüs.

## Optionen

- **breakpoint**: Der Standard-Breakpoint liegt bei 992 Pixel. Darunter wird die mobile Ansicht aktiviert.
- **duration**: Die Dauer der Ein- und Ausblendeffekte beträgt standardmäßig 300 Millisekunden.
- **menuHover**: Ermöglicht die Aktivierung von Hover-Effekten für Desktop-Ansichten.

## Methoden

- **\_create**: Initialisiert das jQuery-Widget und ruft die erforderlichen Methoden zur Erstellung, Größenanpassung und Event-Bindung auf.
- **\_render**: Definiert die jQuery-Objekte für das Fenster, das Menü, die Menüpunkte, Links und Untermenüs.
- **\_resize**: Passt das Menü basierend auf der Fensterbreite an und wechselt zwischen mobiler und Desktop-Ansicht.
- **\_close**: Schließt alle Untermenüs, die nicht mit dem aktuellen Ziel übereinstimmen.
- **\_toggle**: Schaltet den Zustand des aktuellen Menüpunkts um und zeigt/verbirgt das zugehörige Untermenü und verbirgt die Geschwistermenüs.
- **\_enter**: Zeigt das Untermenü beim überfahren mit der Maus an, wenn die menuHover Option aktiviert ist und das jQuery-Widget sich im Desktop-Modus befindet.
- **\_leave**: Verbirgt das Untermenü beim verlassen mit der Maus, wenn die menuHover Option aktiviert ist und das jQuery-Widget sich im Desktop-Modus befindet.
- **\_events**: Bindet die Resize-, Click- und Mouse-Events an die entsprechenden Methoden.

## Event-Handler

- **\_onResize**: Wird bei der Größenänderung des Fensters aufgerufen, um das Menü anzupassen.
- **\_onClose**: Wird bei Klick außerhalb des Menüs aufgerufen, um alle (Unter)Menüs zu schließen.
- **\_onToggle**: Wird bei Klick auf einen Menüpunkt mit Untermenü aufgerufen, um das Untermenü umzuschalten.
- **\_onEnter**: Wird bei überfahren eines Menüpunkts aufgerufen, um das Untermenü anzuzeigen.
- **\_onLeave**: Wird bei Verlassen eines Menüpunkts aufgerufen, um das Untermenü zu verbergen.

## Initialisierung

- Das jQuery-Widget wird automatisch auf das Element aktiviert, dass das Attribut **data-plugin="menu"** besitzt.
- Alle Optionen können über das **data-** Attribut initialisiert werden.
  - data-breakpoint="992"
  - data-duration="300"
  - data-menu-hover="false"
