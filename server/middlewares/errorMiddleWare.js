const errorHandler = (err, req, res, next) =>
{
    res.json({
        Error:err.message
    })
}
module.exports =errorHandler