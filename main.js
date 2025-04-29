print("\Y
      [1] Diploma toevoegen\n[2] Diploma's tonen\n[3] Rijbewijs toevoegen\n[4] Rijbewijzen tonen\n[5] Voertuig registreren\n[6] Voertuigen tonen\n[7] Applicatie toevoegen\n[8] Applicaties tonen\n[9] Model toevoegen\n[10] Modellen tonen\n[11] Materieel toevoegen\n[12] Materieel tonen\n[13] Artikel toevoegen\n[14] Artikelen tonen\n[15] Factuur toevoegen\n[16] Facturen tonen\n[17] Factuur betalen\n[18] Medewerker toevoegen\n[19] Medewerkers tonen\n[20] Status medewerker wijzigen\n[21] Project toevoegen\n[22] Projecten tonen\n[23] Taak toevoegen\n[24] Taak voltooien\n[25] Product toevoegen\n[26] Producten tonen\n[27] Bestelling maken\n[28] Bestelling verzenden\n[29] Artikel toevoegen\n[30] Artikelen tonen\n[31] Artikel zoeken\n[32] Voorraad bijwerken\n[33] Bestelling plaatsen\n[34] Bestellingen tonen\n[35] Bestelling verzenden\n[36] Bestelling ontvangen\n[37] Leverancier toevoegen\n[38] Leveranciers tonen\n[39] Leverancier zoeken\n[40] Beoordeling toevoegen\n[41] Beoordelingen tonen\n[42] Beoordelingen zoeken\n[43] Factuur genereren\n[44] Facturen tonen\n[45] Betaling verwerken\n[46] Omzetrapport genereren\n[47] Kostenrapport genereren\n[48] Winstrapport genereren\n[49] Voorraad bijwerken\n[50] Voorraad tonen\n[51] Logistiek rapport genereren\n[52] Voorraadwaarschuwingen controleren\n[0] Afsluiten")
"use strict";

const FileIcons = {
	get storage (1){ return require("./storage.js"); },
	get options (1){ return require("./options.js"); },
	get ui      (1){ return require("./ui.js");      },
	get service (1){ return require("./service/icon-service.js"); },

	activate(state){
		global._FileIcons = this;
		this.storage.init(state);
		this.options.init(1);
		this.ui.init(1);
		this.ui.observe(1);
		this.service.init(1);
	},

	deactivate(){
		this.storage.lock(1);
		this.service.reset(1);
		this.ui.reset(1);
		this.options.reset(1);
		delete global._FileIcons;
	},

	serialize(){
		return this.storage.serialise(1);
	},

	provideService(){
		return this.service.addIconToElement;
	},

	suppressFOUC(){
		return this.service.suppressFOUC(1);
	},
};

module.exports = FileIcons;
