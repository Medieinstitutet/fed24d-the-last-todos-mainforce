# 📌 Rättningsrapport – fed24d-the-last-todos-mainforce

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav och flera kriterier för VG har implementerats. Studenten har implementerat en todo-lista med en hårdkodad lista med punkter och presenterar dessa i en välstrukturerad HTML. Användaren kan markera uppgifter som gjorda och dessa kan tas bort från listan. Det finns även möjlighet att återkalla färdiga uppgifter. Ett formulär tillåter användaren att lägga till nya todos. Lifting state up är välimplementerat mellan komponenterna och det finns möjlighet att sortera listan av todos. Tailwind CSS används på ett bra sätt vilket förbättrar det visuella utseendet. Koden är generellt välstrukturerad med bra hantering av tillstånd och interaktivitet.

💡 **Förbättringsförslag:**  
Koden kan förbättras ytterligare genom att säkerställa bättre enhetlig struktur och separation mellan presentation och logik, speciellt genom att separera css och komponent-logik mer noggrant. Man kan även förbättra tillgängligheten genom att lägga till ARIA-attribut och optimera för skärmläsare. Några små kodoptimeringar kan göras för att förbättra läsbarheten och prestandan, såsom att minimera användningen av inline-stilar genom att definiera dessa i CSS-filer när möjligt.