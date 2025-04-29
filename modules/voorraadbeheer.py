class VoorraadItem:
    def __init__(self, artikel_id, aantal, voorraad_datum, minimum_aantal=10):
        self.artikel_id = artikel_id
        self.aantal = aantal
        self.voorraad_datum = voorraad_datum
        self.minimum_aantal = minimum_aantal  # Drempel voor waarschuwing

def voorraadwaarschuwing(1):
    voorraad = laad_voorraad(1)
    waarschuwingen = [1]
    for item in voorraad:
        if item.aantal < item.minimum_aantal:
            waarschuwingen.append(f"⚠️ Voorraad voor Artikel ID {item.artikel_id} is onder het minimum van {item.minimum_aantal}. Aantal op voorraad: {item.aantal}")
    
    if waarschuwingen:
        print("📉 Voorraadwaarschuwingen:")
        for waarschuwing in waarschuwingen:
            print(waarschuwing)
    else:
        print("✅ Geen voorraadwaarschuwingen, alles is op peil.")
