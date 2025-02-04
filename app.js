const express = require('express')
const app = express()
const port = 3000

// defianiamo la cartella per i file statici
app.use(express.static('dolci'));

// proggetto base con rotta "/"
app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

// creazione rotta /bacheca
app.get('/bacheca', (req, res) => {

    // array da ritornare
    const bacheca = [
        {
          title: "Torta Paesana",
          content: "Un dolce tradizionale della Brianza preparato con pane raffermo, latte, cacao e frutta secca.",
          image: "http://localhost:3000/dolci/torta_paesana.jpeg",
          tags: ["dolce", "tradizionale", "cioccolato", "frutta secca"]
        },
        {
          title: "Ciambellone",
          content: "Un classico dolce soffice e profumato, perfetto per la colazione o la merenda.",
          image: "http://localhost:3000/dolci/ciambellone.jpeg",
          tags: ["dolce", "colazione", "soffice", "merenda"]
        },
        {
          title: "Cracker di Barbabietola",
          content: "Snack croccanti e colorati a base di barbabietola e semi, perfetti con formaggi o salse.",
          image: "http://localhost:3000/dolci/cracker_barbabietola.jpeg",
          tags: ["snack", "barbabietola", "croccante", "healthy"]
        },
        {
          title: "Pane Fritto Dolce",
          content: "Un modo goloso per recuperare il pane avanzato, fritto e cosparso di zucchero e cannella.",
          image: "http://localhost:3000/dolci/pane_fritto_dolce.jpeg",
          tags: ["dolce", "fritto", "riciclo", "cannella"]
        },
        {
          title: "Pasta alla Barbabietola",
          content: "Un primo piatto cremoso e colorato con barbabietola e pistacchi per un tocco croccante.",
          image: "http://localhost:3000/dolci/pasta_barbabietola.jpeg",
          tags: ["pasta", "barbabietola", "vegetariano", "gourmet"]
        }
      ];

    // ritorniamo l'array in formato json
    res.json(bacheca);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

