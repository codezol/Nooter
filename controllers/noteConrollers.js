const Note = require('../modules/Note');

const note_index = (req,res) => {
     Note.find()
        .then(notes => {
            res.render('index',{ title : "All Blogs", notes : notes});
        }).catch(err=> {
            console.log(err);
        })
}
const note_create_post = (req, res) => {
    const note = new Note(req.body);
    note.save()
    .then(result => {
        res.redirect('/notes');
    }).catch(err => {
        console.log(err);
    })
}
const note_create_get = (req, res) => {
    res.render('create', {title : 'Create New Blog'});
}
const note_details = (req, res) => {
    console.log('details page')
    const id = req.params.id;
    Note.findById(id)
    .then(result => {
        res.render('details', {title: 'Details', note : result})
    }).catch(err => {
        console.log(err)
    }) 
    
}
const note_delete = (req, res) => {
    const id = req.params.id;
    console.log('delete controller')
    Note.findByIdAndDelete(id)
    .then((result) => {
        console.log('deleted from server')
        res.json({redirect : '/notes'});
    }).catch(err => {
        console.log(err);
    })
}
module.exports = {
    note_index,
    note_create_get, 
    note_create_post,
    note_details,
    note_delete
}