const { logEvents } = require('./logger')

const errorHandler = (err: { name: any; message: any; stack: any }, req: { method: any; url: any; headers: { origin: any } }, res: { statusCode: any; status: (arg0: any) => void; json: (arg0: { message: any }) => void }, next: any) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 

    res.status(status)

    res.json({ message: err.message })
}

module.exports = errorHandler 