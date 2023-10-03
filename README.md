# vue-boolzapp

## Consegna:
### Milestone 1 
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

### Pseudocodice:
1. Creare layout html e stilizzarlo con css 




### Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

### Pseudocodice:
1. Aggiungere classe active quando un account viene cliccato tramite una variabile che tenga traccia dell'elemento cliccato e un metodo che imposta la variabile sull'indice del contatto su cui è stato fatto click. E poi in html mettere una condizione per attivare la classe active.