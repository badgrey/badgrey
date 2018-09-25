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
const {User, Artist, Blog} = require('../server/db/models')

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

  const blogs = await Promise.all([
    Blog.create({title: 'I love It', description: 'Check out New Single I Love It by Lil Pump featuring Kanye West', author: 'Chris Gardner', date: new Date('Auguest 25, 2018'), blogPic: 'https://ssle.ulximg.com/image/750x750/cover/1536326085_f0573ef5c038e554ef31e7d1032fa5ad.jpg/358c67ca9c6b4a40f3e480e5f2f0171a/1536326085_db38e87e3d3947fa2c65a3a2a995adff.jpg', blogPost: 'Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang'}),
    Blog.create({title: 'Mir X Fetty?', description: 'Mir Fontane and Fetty Wap might be in the studio together', author: 'Chris Gardner', date: new Date('August 28, 2018'), blogPic: 'https://ssle.ulximg.com/image/750x750/cover/1535042461_b858913611cf52af4c13fad4c6fdfcd6.jpg/add1777eb09da2b07a9da466f8c8ac21/1535042461_547cfd6db556dc2e80ef5093386b21dc.jpg', blogPost: 'Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega'}),
    Blog.create({title: 'YNW Melly Up Next', description: 'Listen Mellys new bangers, theyre amazing', author: 'Cole Eckerle', date: new Date('September 2, 2018'), blogPic: 'https://i2.wp.com/curatedflame.com/wp-content/uploads/2018/03/avatars-000353116778-yb8rnq-t500x500.jpg?fit=500%2C500&quality=80&strip=all&ssl=1', blogPost: 'I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder'})
  ])

  console.log(`seeded ${blogs.length} Blogs!`)
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
