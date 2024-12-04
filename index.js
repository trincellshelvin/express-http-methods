import express from "express";

const app = express();

app.use(express.json());

const contact = [];

const about = {
    "info": "This is the about page."
};

app.get("/", (req, res) => {
    res.send("Welcome to the Express Server!");
});

app.get("/about", (req, res) => {
    res.json(about);
});

app.post("/contact", (req, res) => {
    const contactData = req.body;
    if (contactData.name && contactData.email) {
        contact.push(contactData);
        const id = contacts.length -1;
        console.log(`Contact added: ${contactData.name}`);
        res.status(200).send({id, ...contactData});
    } else {
        res.status(400).send({
            error: "contact information required"
        })
    }
});

app.get("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const contactData = contacts[id];
    if (contactData) {
        res.json(contactData);
    } else {
        res.status(404).send({
            error: "User not found"
        });
    }
    console.log(`User ID requested: ${id}`);
});

app.get("/search", (req,res) => {
    const term = req.query.term;
    const sort = req.query.sort;
    res.json({
        term: term,
        sort: sort
    });
});

app.use((req,res)=> {
    res.status(404).send({
        error: "Not Found"
    });
});

app.listen(3000, () => {
    console.log("Express server initialized");
})