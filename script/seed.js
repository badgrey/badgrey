/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Artist} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({username: 'markoAdmin', email: 'marko@email.com', password: '123', isAdmin: true, isBlogger: true, isEmployee: true}),
    User.create({username: 'coleNotAdmin', email: 'cole@email.com', password: '123', isAdmin: false, isBlogger: false, isEmployee: true}),
    User.create({username: 'dane', email: 'dane@email.com', password: '123', isAdmin: false, isBlogger: false, isEmployee: true}),
    User.create({username: 'rage', email: 'rage@email.com', password: '123', isAdmin: false, isBlogger: false, isEmployee: true}),
    User.create({username: 'mrpinto', email: 'pinto@email.com', password: '123', isAdmin: false, isBlogger: false, isEmployee: true}),
    User.create({username: 'cgardner', email: 'chris@email.com', password: '123', isAdmin: false, isBlogger: true, isEmployee: true}),
    User.create({username: 'markzucks', email: 'zuck@email.com', password: '123', isAdmin: false, isBlogger: false, isEmployee: false}),
    User.create({username: 'rhirhi', email: 'rihiana@email.com', password: '123', isAdmin: false, isBlogger: false, isEmployee: false})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} Users!`)

  const artists = await Promise.all([
    Artist.create({name: 'A Boogie Wit Da Hoodie', city: 'Bronx', imageURL: 'aboogiewitdahoodie', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10332955&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['fUtlqtdn1Xo', 'DVbKboc8XmE'], genre: 'Trap', stateAbbrev: 'NY'}),
    Artist.create({name: 'Kweku Collins', city: 'Chicago', imageURL: 'kwekucollins', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13591743&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['nl6OW07A5q4', '0lLqwlVF9bU'], genre: 'Alternative', stateAbbrev: 'IL'}),
    Artist.create({name: 'Mir Fontane', city: 'Camden', imageURL: 'mirfontane', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4121408&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['nUj4I7P5Bu0', 'oDgvWMrXInc'], genre: 'Conscious', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Lil Skies', city: 'Waynesboro', imageURL: 'lilskies', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/95492698&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['tcaw6lzYt1Q', 'WlosjSe5B8c'], genre: 'Cloud', stateAbbrev: 'PA'}),
    Artist.create({name: 'Lil Uzi Vert', city: 'Philadelphia', imageURL: 'liluzivert', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10494998&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['WrsFXgQk5UI', 'zqflC-as2Qo'], genre: 'Cloud', stateAbbrev: 'PA'}),
    Artist.create({name: 'Matt Ox', city: 'Philadelphia', imageURL: 'mattox', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/242128695&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['0cZ8-RgtrP0', 'qquyvwH-QH8'], genre: 'Cloud', stateAbbrev: 'PA'}),
    Artist.create({name: 'KilConfirmed', city: 'Philadelphia', imageURL: 'kilconfirmed', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30398868&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['2XwFup-_sOE'], genre: 'Instrumental', stateAbbrev: 'PA'}),
    Artist.create({name: 'Yung Lean', city: 'Stockholm', imageURL: 'yunglean', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24878713&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['BMayAfYlN_k', 'tMgkt9jdjTU'], genre: 'Cloud', stateAbbrev: 'International'})
  ])

  await users[0].addArtist(artists[0])
  await users[0].addArtist(artists[1])
  console.log(`seeded ${artists.length} Artists!`)
  console.log(`seeded successfully`)

}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
