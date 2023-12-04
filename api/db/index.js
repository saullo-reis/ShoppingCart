import pgp from 'pg-promise';
const db = pgp('postgre://postgres:admin@localhost:5432/theShoppingCart')

db.one('SELECT $1 AS VALUE', 123)
    .then((data) => {
        console.log('DATA: ', data.value)

    })
    .catch((error) => {
        console.log('ERROR: ', error)
    })

export { db }