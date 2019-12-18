const pdf = require("html-pdf")
const generateHtml = require("../lib/generateHtml")

module.exports = (req, res, next) => {
    try{
        let shortlist = JSON.parse(req.query.data)
        pdf.create(generateHtml(shortlist), {
            format: "Letter",
            orientation: "portrait",
            border: "1in"
        }).toStream((err, stream)=>{
            res.setHeader('Content-type', 'application/pdf')
            stream.pipe(res)
        })
    } catch(e) {
        next(e)
    }
}