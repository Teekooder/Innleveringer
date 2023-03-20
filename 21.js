class Kortstokk {
    constructor() {
    
      this.startKort = [
        { type: "spar", verdi: 1, navn: "Ess" },
        { type: "spar", verdi: 2, navn: "2" },
        { type: "spar", verdi: 3, navn: "3" },
        { type: "spar", verdi: 4, navn: "4" },
        { type: "spar", verdi: 5, navn: "5" },
        { type: "spar", verdi: 6, navn: "6" },
        { type: "spar", verdi: 7, navn: "7" },
        { type: "spar", verdi: 8, navn: "8" },
        { type: "spar", verdi: 9, navn: "9" },
        { type: "spar", verdi: 10, navn: "Knekt" },
        { type: "spar", verdi: 10, navn: "Dronning" },
        { type: "spar", verdi: 10, navn: "Konge" },
        { type: "ruter", verdi: 1, navn: "Ess" },
        { type: "ruter", verdi: 2, navn: "2" },
        { type: "ruter", verdi: 3, navn: "3" },
        { type: "ruter", verdi: 4, navn: "4" },
        { type: "ruter", verdi: 5, navn: "5" },
        { type: "ruter", verdi: 6, navn: "6" },
        { type: "ruter", verdi: 7, navn: "7" },
        { type: "ruter", verdi: 8, navn: "8" },
        { type: "ruter", verdi: 9, navn: "9" },
        { type: "ruter", verdi: 10, navn: "Knekt" },
        { type: "ruter", verdi: 10, navn: "Dronning" },
        { type: "ruter", verdi: 10, navn: "Konge" },
        { type: "kløver", verdi: 1, navn: "Ess" },
        { type: "kløver", verdi: 2, navn: "2" },
        { type: "kløver", verdi: 3, navn: "3" },
        { type: "kløver", verdi: 4, navn: "4" },
        { type: "kløver", verdi: 5, navn: "5" },
        { type: "kløver", verdi: 6, navn: "6" },
        { type: "kløver", verdi: 7, navn: "7" },
        { type: "kløver", verdi: 8, navn: "8" },
        { type: "kløver", verdi: 9, navn: "9" },
        { type: "kløver", verdi: 10, navn: "Knekt" },
        { type: "kløver", verdi: 10, navn: "Dronning" },
        { type: "kløver", verdi: 10, navn: "Konge" },
        { type: "hjerter", verdi: 1, navn: "Ess" },
        { type: "hjerter", verdi: 2, navn: "2" },
        { type: "hjerter", verdi: 3, navn: "3" },
        { type: "hjerter", verdi: 4, navn: "4" },
        { type: "hjerter", verdi: 5, navn: "5" },
        { type: "hjerter", verdi: 6, navn: "6" },
        { type: "hjerter", verdi: 7, navn: "7" },
        { type: "hjerter", verdi: 8, navn: "8" },
        { type: "hjerter", verdi: 9, navn: "9" },
        { type: "hjerter", verdi: 10, navn: "Knekt" },
        { type: "hjerter", verdi: 10, navn: "Dronning" },
        { type: "hjerter", verdi: 10, navn: "Konge" },
        
      ];
  
      this.kort = [...this.startKort];
    }

    stokke() {
        this.kort = this.kort
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
      }
    
      trekkeKort() {
        return this.kort.shift();
      }
    }

    let spiller = { kortene:[], stop:false};
    let huset = {kortene:[], stop:false}

    let kortstokk = new Kortstokk();
    kortstokk.stokke();
    
  spiller.kortene.push(kortstokk.trekkeKort());
  huset.kortene.push(kortstokk.trekkeKort());
  
  while(spiller.stop === false){
    spiller.kortene.push(kortstokk.trekkeKort())
    if (spiller >= 21) spiller.stop === true

  while(huset.stop === false){
    huset.kortene.push(kortstokk.trekkeKort())
    if (huset >= 21) huset.stop === true
    
  }
  
if (spiller.kortene > huset.kortene){
    console.log("Spiller vinner!")}
    else console.log("Huset vinner!")
}

