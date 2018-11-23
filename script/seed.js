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
const {User, Artist, Blog, Comment, Interview, OriginalContent} = require('../server/db/models')

async function seedUsers() {
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
  return users
}

async function seedArtists () {

  const artists = await Promise.all([
    Artist.create({name: 'A Boogie Wit Da Hoodie', city: 'Bronx', imageURL: 'aboogiewitdahoodie', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10332955&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['fUtlqtdn1Xo', 'DVbKboc8XmE'], genre: 'Trap', stateAbbrev: 'NY'}),
    Artist.create({name: 'Kweku Collins', city: 'Chicago', imageURL: 'kwekucollins', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13591743&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['nl6OW07A5q4', '0lLqwlVF9bU'], genre: 'Alternative', stateAbbrev: 'IL'}),
    Artist.create({name: 'Mir Fontane', city: 'Camden', imageURL: 'mirfontane', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4121408&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['nUj4I7P5Bu0', 'oDgvWMrXInc'], genre: 'Conscious', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Lil Skies', city: 'Waynesboro', imageURL: 'lilskies', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/95492698&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['tcaw6lzYt1Q', 'WlosjSe5B8c'], genre: 'Cloud', stateAbbrev: 'PA'}),
    Artist.create({name: 'Lil Uzi Vert', city: 'Philadelphia', imageURL: 'liluzivert', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10494998&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['WrsFXgQk5UI', 'zqflC-as2Qo'], genre: 'Cloud', stateAbbrev: 'PA'}),
    Artist.create({name: 'Matt Ox', city: 'Philadelphia', imageURL: 'mattox', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/242128695&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['0cZ8-RgtrP0', 'qquyvwH-QH8'], genre: 'Cloud', stateAbbrev: 'PA'}),
    Artist.create({name: 'KilConfirmed', city: 'Philadelphia', imageURL: 'kilconfirmed', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30398868&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['2XwFup-_sOE'], genre: 'Instrumental', stateAbbrev: 'PA'}),
    Artist.create({name: 'Yung Lean', city: 'Stockholm', imageURL: 'yunglean', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24878713&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['BMayAfYlN_k', 'tMgkt9jdjTU'], genre: 'Cloud', stateAbbrev: 'International'}),
    Artist.create({name: 'YNW Melly', city: 'Gifford', imageURL: 'ynwmelly', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/57260844&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['hqDinxaPUK4', '7LWQEokkCqo'], genre: 'Alternative', stateAbbrev: 'FL'}),
    Artist.create({name: 'Lil Pump', city: 'Miami', imageURL: 'lilpump', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/173834487&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: ['cwQgjq0mCdE', '4LfJnj66HVQ'], genre: 'Alternative', stateAbbrev: 'FL'}),
    Artist.create({name: 'Chase N Cashe', city: 'New Orleans', imageURL: 'chasencashe', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/490529712&amp;color=ff5500', youtubeID: ['5M46hksoxdg', 'FNQtaK8x7MQ'], genre: 'Conscious', stateAbbrev: 'LA'}),
    Artist.create({name: 'J.K. The Reaper', city: 'Greensboro', imageURL: 'jkthereaper', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485223534&amp;color=ff5500', youtubeID: ['N_Z64Bsyj5U', 'bNnVZsLSXIg'], genre: 'Conscious', stateAbbrev: 'NC'}),
    Artist.create({name: 'Wave Chapelle', city: 'Milwaukee', imageURL: 'wavechapelle', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/529890900&amp;color=ff5500', youtubeID: ['zeUKNPNTRQo', 'ruqXcC8d7b4'], genre: 'Conscious', stateAbbrev: 'WI'})
  ])


  return artists
}

async function seedBlogs () {
  const blogs = await Promise.all([
    Blog.create({title: 'I love It', description: 'Check out New Single I Love It by Lil Pump featuring Kanye West', author: 'Chris Gardner', date: new Date('Auguest 25, 2018'), blogPic: 'https://ssle.ulximg.com/image/750x750/cover/1536326085_f0573ef5c038e554ef31e7d1032fa5ad.jpg/358c67ca9c6b4a40f3e480e5f2f0171a/1536326085_db38e87e3d3947fa2c65a3a2a995adff.jpg', blogPost: 'Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang'}),
    Blog.create({title: 'Mir X Fetty?', description: 'Mir Fontane and Fetty Wap might be in the studio together', author: 'Chris Gardner', date: new Date('August 28, 2018'), blogPic: 'https://ssle.ulximg.com/image/750x750/cover/1535042461_b858913611cf52af4c13fad4c6fdfcd6.jpg/add1777eb09da2b07a9da466f8c8ac21/1535042461_547cfd6db556dc2e80ef5093386b21dc.jpg', blogPost: 'Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega'}),
    Blog.create({title: 'YNW Melly Up Next', description: 'Listen Mellys new bangers, theyre amazing', author: 'Cole Eckerle', date: new Date('September 2, 2018'), blogPic: 'https://i2.wp.com/curatedflame.com/wp-content/uploads/2018/03/avatars-000353116778-yb8rnq-t500x500.jpg?fit=500%2C500&quality=80&strip=all&ssl=1', blogPost: 'I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder'})
  ])
  return blogs
}

async function setBlogAssociations (blogs, users, artists) {
  await blogs[0].setUser(users[0])
  await blogs[1].setUser(users[0])
  await blogs[2].setUser(users[1])
  await blogs[0].setArtist(artists[9])
  await blogs[1].setArtist(artists[2])
  await blogs[2].setArtist(artists[8])

  await blogs[0].addBlogLikes(users[0])
  await blogs[0].addBlogLikes(users[1])
  await blogs[0].addBlogLikes(users[2])
  await blogs[1].addBlogLikes(users[3])
  await blogs[2].addBlogLikes(users[4])
  await blogs[1].addBlogLikes(users[4])
  await blogs[2].addBlogLikes(users[3])
  await blogs[1].addBlogLikes(users[6])
  await blogs[0].addBlogDislikes(users[1])
  await blogs[0].addBlogDislikes(users[0])
  await blogs[0].addBlogDislikes(users[2])
  await blogs[1].addBlogDislikes(users[5])
}

async function seedComments () {
  const comments = await Promise.all([
    Comment.create({comment: 'This song is trash'}),
    Comment.create({comment: 'Fetty is trash'}),
    Comment.create({comment: 'STOOP KIDS AFRAID TO LEAVE HIS STOOP'}),
    Comment.create({comment: 'Mirs up next for sure'}),
    Comment.create({comment: 'LUCIFER!'}),
    Comment.create({comment: 'Lil Uzi is a god'}),
    Comment.create({comment: 'cloud genius'}),
    Comment.create({comment: 'fuego'})
  ])
  return comments
}

async function setCommentAssociations (comments, users, blogs, artists) {
  await comments[0].setUser(users[0])
  await comments[1].setUser(users[0])
  await comments[2].setUser(users[1])
  await comments[3].setUser(users[1])
  await comments[4].setUser(users[0])
  await comments[5].setUser(users[0])
  await comments[6].setUser(users[1])
  await comments[7].setUser(users[2])
  await comments[0].setBlog(blogs[1])
  await comments[1].setBlog(blogs[1])
  await comments[2].setBlog(blogs[1])
  await comments[3].setBlog(blogs[1])
  await comments[4].setArtist(artists[4])
  await comments[5].setArtist(artists[4])
  await comments[6].setArtist(artists[4])
  await comments[7].setArtist(artists[4])
  await comments[0].addLikes(users[0])
  await comments[1].addLikes(users[1])
  await comments[0].addLikes(users[2])
  await comments[4].addLikes(users[3])
  await comments[5].addLikes(users[0])
  await comments[6].addDislikes(users[2])
  await comments[7].addDislikes(users[1])
  await comments[2].addDislikes(users[2])
  await comments[2].addDislikes(users[3])
  await comments[3].addDislikes(users[0])
}

async function seedInterviews () {
  const interviews = await Promise.all([
    Interview.create({description: 'Chase N. Cashe is undoubtedly one of the most multifaceted and experienced producers/artists in Hip-Hop. With credits from artists ranging from Drake, Lil Wayne, Eminem and J Cole to Beyonce, Brandy and The Pussycat Dolls, Chase N. Cashe has developed an extensive portfolio throughout the last decade. We caught up with him to discuss growing up in New Orleans, the state of hip-hop and his biggest musical influences. Take a look and stream his newest project "DJ Lil Vegan The Natural Selector." below.', interview: 'chasencashe', soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/490529712&amp;color=ff5500' }),
    Interview.create({description: 'J.K. The Reaper is one of the most enigmatic figures in the underground Hip-Hop Scene. Frequently collaborating with artists like Denzel Curry and Yoshi Thompkins, J.K The Reaper tells his unique story through blending Florida trap sounds with experimental new wave flows and instrumentals. We caught up with him to talk about growing up in Greensboro, North Carolina, his favorite artists and his goals for the upcoming year. Take a look and stream his new EP "Almost Angelic 3" below.', interview: 'jkthereaper', soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485223534&amp;color=ff5500' }),
    Interview.create({description: `Wave Chapelle has been making his unique imprint on the rap game for several years now, combining his lyrical storytelling ability with booming trap instrumentals. Discovered and signed by Yo Gotti in 2014, Wave has significantly elevated his style and sound by collaborating with some of the hottest artists in the game including Lil Uzi Vert, K Camp & Curren$y. We caught up with Wave to discuss his upbringing in Wisconsin, his take on the modern music industry and his favorite artists and inspirations. Take a look and stream his new project "It'll All Make Sense Soon 2" below.`, interview: 'wavechapelle', soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/529890900&amp;color=ff5500' })
  ])
  return interviews
}

async function setInterviewAssociations(interviews, artists, users) {

  await interviews[0].setArtist(artists[10])
  await interviews[1].setArtist(artists[11])
  await interviews[2].setArtist(artists[12])

  await interviews[0].addInterviewLikes(users[0])
  await interviews[1].addInterviewLikes(users[1])
  await interviews[0].addInterviewLikes(users[2])
  await interviews[2].addInterviewLikes(users[3])
  await interviews[2].addInterviewLikes(users[0])
  await interviews[1].addInterviewDislikes(users[2])
  await interviews[1].addInterviewDislikes(users[1])
  await interviews[2].addInterviewDislikes(users[2])
  await interviews[2].addInterviewDislikes(users[3])
  await interviews[1].addInterviewDislikes(users[0])
}

async function seedOriginalContent() {
  const originalcontent = await Promise.all([
    OriginalContent.create({youtubeId: 'v9tvZToTAH4'}),
    OriginalContent.create({youtubeId: 'N2fhF-VDogs'}),
    OriginalContent.create({youtubeId: 'Ua0CUh02-0k'}),
    OriginalContent.create({youtubeId: 'kl2uu-RSVw4'}),
    OriginalContent.create({youtubeId: '-fVOkqhHNw0'}),
    OriginalContent.create({youtubeId: '6zSl-DHofbI'})
  ])
  return originalcontent
}

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await seedUsers()
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} Users!`)

  const artists = await seedArtists()

  await users[0].addArtist(artists[0])
  await users[0].addArtist(artists[1])

  console.log(`seeded ${artists.length} Artists!`)

  const blogs = await seedBlogs()
  await setBlogAssociations(blogs, users, artists)

  console.log(`seeded ${blogs.length} Blogs!`)

  const comments = await seedComments()

  await setCommentAssociations(comments, users, blogs, artists)

  console.log(`seeded ${comments.length} Comments!`)

  const interviews = await seedInterviews()

  await setInterviewAssociations(interviews, artists, users)
  console.log(`seeded ${interviews.length} Interviews!`)

  const originalcontent = await seedOriginalContent()
  console.log(`seeded ${originalcontent.length} Original Contents!`)

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
