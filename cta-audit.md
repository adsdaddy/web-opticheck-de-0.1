# CTA Audit

## Already correct (pointing to WOHNGEBAUDE_CHECK_URL):
- Home.tsx line 507: Hero primary CTA
- Home.tsx line 696: SmartCheck section CTA
- Home.tsx line 972: Bottom CTA section
- PublicHeader.tsx: Desktop + Mobile CTA buttons
- Hilfe.tsx: FAQ bottom CTA
- Kontakt.tsx: Quick link to Wohngebäude-Check
- Krankenversicherung.tsx: Fallback CTA

## Need to change (currently #versicherungen):
- Home.tsx line 513: Hero secondary button "Alle Versicherungsarten" -> should go to WOHNGEBAUDE_CHECK_URL
- Home.tsx line 978: Bottom CTA secondary "Alle Versicherungsarten ansehen" -> should go to WOHNGEBAUDE_CHECK_URL

Since only Wohngebäude is active, the "Alle Versicherungsarten" secondary buttons should also point to the check URL.
