module.exports = {
  PORT: 8081,
  dbURL: 'mongodb+srv://peoplejack:b6CV91EzD28kLM@cluster0.txcoa.mongodb.net/bigdata?retryWrites=true&w=majority',
  dbOptions: { useNewUrlParser: true },
  jwt: {
    secret: 'my secret string',
    tokens: {
      access: {
        type: 'access',
        expiresIn: '2m'
      },
      refresh: {
        type: 'refresh',
        expiresIn: '3m'
      }
    }
  }
}