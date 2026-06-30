# Změny v databázi pro novou registraci (Jedna tabulka)

Pro správné fungování nového registračního formuláře je potřeba upravit stávající tabulku `Zavodnici` tak, aby obsahovala pole pro ubytování a pro všechny kategorie lodí (NSS, RG650, Footy).

## 1. Úprava tabulky `Zavodnici`

Spusťte následující SQL příkazy pro aktualizaci struktury tabulky:

```sql
-- Odstranění starých nebo nepotřebných sloupců (pokud existují)
ALTER TABLE Zavodnici
  DROP COLUMN IF EXISTS rg,
  DROP COLUMN IF EXISTS kategorie,
  DROP COLUMN IF EXISTS nazev,
  DROP COLUMN IF EXISTS plocha,
  DROP COLUMN IF EXISTS delka,
  DROP COLUMN IF EXISTS vytlak,
  DROP COLUMN IF EXISTS meritko;

-- Přidání nových sloupců pro ubytování a všechny kategorie lodí
ALTER TABLE Zavodnici
  -- Základní údaje a ubytování
  ADD COLUMN IF NOT EXISTS ubytovani TINYINT(1) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS pocet_osob INT DEFAULT 0,

  -- NSS kategorie
  ADD COLUMN IF NOT EXISTS nss_kat VARCHAR(50) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS nss_nazev VARCHAR(255) DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS nss_meritko DOUBLE DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS nss_vytlak DOUBLE DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS nss_plocha DOUBLE DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS nss_delka DOUBLE DEFAULT NULL,

  -- RG650 kategorie
  ADD COLUMN IF NOT EXISTS rg_plachta VARCHAR(50) DEFAULT NULL,

  -- Footy kategorie
  ADD COLUMN IF NOT EXISTS footy_plachta VARCHAR(50) DEFAULT NULL;
```

---
**Poznámka:** Pokud tabulka `Zavodnici` ještě neexistuje, můžete ji vytvořit celou najednou:

```sql
CREATE TABLE IF NOT EXISTS Zavodnici (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jmeno VARCHAR(255) NOT NULL,
    prijmeni VARCHAR(255) NOT NULL,
    vek CHAR(1) NOT NULL, -- 'J' nebo 'S'
    mail VARCHAR(255) NOT NULL,
    klub VARCHAR(255),
    licence VARCHAR(255),
    stat CHAR(3) NOT NULL,
    ubytovani TINYINT(1) DEFAULT 0,
    pocet_osob INT DEFAULT 0,
    nss_kat VARCHAR(50),
    nss_nazev VARCHAR(255),
    nss_meritko DOUBLE,
    nss_vytlak DOUBLE,
    nss_plocha DOUBLE,
    nss_delka DOUBLE,
    rg_plachta VARCHAR(50),
    footy_plachta VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
