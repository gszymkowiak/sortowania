# Algorytmy Sortowania

Aplikacja edukacyjna prezentująca podstawowe oraz zaawansowane algorytmy sortowania wraz z ich wizualizacjami, właściwościami oraz złożonością obliczeniową.

Projekt został wykonany w technologii HTML, CSS (Bootstrap) oraz JavaScript.

---

## Funkcjonalności

- prezentacja różnych typów algorytmów sortowania,
- podział na:
  - sortowania proste,
  - sortowania zaawansowane,
  - sortowania specjalne,
- wizualizacje działania algorytmów,
- informacje o:
  - złożoności czasowej,
  - złożoności pamięciowej,
  - stabilności algorytmów,
- responsywny interfejs oparty o Bootstrap 5,
- dynamiczne przełączanie sekcji za pomocą JavaScript.

---

## Zastosowane algorytmy

### Sortowania proste
- Bubble Sort
- Insertion Sort
- Selection Sort

### Sortowania zaawansowane
- Quick Sort
- Merge Sort

### Sortowania specjalne
- Counting Sort

<p align="center">
  <img src="./images/aortowanai.png" width="600">
</p>

---

## Technologie

Projekt wykorzystuje:

- HTML5
- Bootstrap 5
- JavaScript (ES6)

---

## Struktura projektu

```text
project/
│
├── index.html
├── app.js
├── assets/
    ├── bubble_sort.png
    ├── insertion_sort.png
    ├── selection_sort.png
    ├── quicksort.png
    ├── mergeSort.png
    ├── countingSort.png
    └── time_sort.png
```

---

## Uruchomienie projektu

1. Pobierz lub sklonuj repozytorium:
```bash
git clone https://github.com/twoje-repozytorium/sorting-algorithms.git
```
2. Otwórz folder projektu.
3. Uruchom plik `index.html` w przeglądarce.

---

## Opis działania aplikacji

Po uruchomieniu aplikacji użytkownik może wybrać jedną z kategorii algorytmów sortowania:

- Sortowanie proste
- Sortowanie zaawansowane
- Sortowanie specjalne

Po kliknięciu odpowiedniej sekcji wyświetlane są:

- opis działania algorytmu,
- grafika przedstawiająca przebieg sortowania,
- podstawowe informacje teoretyczne.

Dynamiczne przełączanie sekcji realizowane jest w pliku `app.js`.

---

## Przykładowe właściwości algorytmów

| Algorytm | Średnia złożoność | Pamięć | Stabilność |
|---|---|---|---|
| Bubble Sort | O(n²) | O(1) | Tak |
| Insertion Sort | O(n²) | O(1) | Tak |
| Selection Sort | O(n²) | O(1) | Nie |
| Quick Sort | O(n log n) | O(log n) | Nie |
| Merge Sort | O(n log n) | O(n) | Tak |
| Counting Sort | O(n + k) | O(n + k) | Tak |

---

## Responsywność

Projekt został przygotowany w sposób responsywny z wykorzystaniem siatki Bootstrap (`container`, `row`, `col-md-*`), dzięki czemu poprawnie działa zarówno na komputerach, jak i urządzeniach mobilnych.

---

## Możliwe rozszerzenia projektu

- animowane wizualizacje sortowania,
- możliwość generowania losowych danych,
- pomiar czasu działania algorytmów,
- dodanie kolejnych algorytmów:
  - Heap Sort,
  - Radix Sort,
  - Shell Sort,
- implementacje algorytmów w językach:
  - C++,
  - C#,
  - JavaScript.

---

## Autor

Projekt edukacyjny przygotowany do nauki algorytmów sortowania.

© ZEG 2025
