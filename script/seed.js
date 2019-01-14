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
    User.create({username: 'marko', email: 'mlisonek98@gmail.com', password: '123', isAdmin: true, isBlogger: true, isEmployee: true}),
    User.create({username: 'cole', email: 'coleeckerle@aol.com', password: '123', isAdmin: true, isBlogger: true, isEmployee: true})
  ])
  return users
}

async function seedAlabamaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Bianca Clarke', city: 'Mobile', imageURL: 'biancaclarke', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11521121&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AL'}),
    Artist.create({name: 'Jay Dot Rain', city: 'Tuscaloosa', imageURL: 'jaydotrain', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10981652&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AL'})
  ])
  return artists
}

async function seedAlaskaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Bishop Slice', city: 'Fairbanks', imageURL: 'bishopslice', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16763769&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AK'})
  ])
  return artists
}

async function seedArizonaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Cash Lanksy', city: 'Tucson', imageURL: 'cashlanksy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5197440&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AZ'}),
    Artist.create({name: 'Charlie Mumbles', city: 'Phoenix', imageURL: 'charliemumbles', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23075488&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AZ'}),
    Artist.create({name: 'Injury Reserve', city: 'Tempe', imageURL: 'injuryreserve', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/45895213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AZ'}),
    Artist.create({name: 'J Rob The Chief', city: 'Phoenix', imageURL: 'jrobthechief', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9407757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AZ'}),
    Artist.create({name: 'Jaca Zulu', city: 'Tucson', imageURL: 'jacazulu', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/19669054&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AZ'}),
    Artist.create({name: 'Jae Tilt', city: 'Tucson', imageURL: 'jaetilt', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/104639706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AZ'})
  ])
  return artists
}

async function seedArkansasArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Chris Echols', city: 'Blytheville', imageURL: 'chrisechols', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8373990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AR'}),
    Artist.create({name: 'Cuz Lightyear', city: 'Little Rock', imageURL: 'cuzlightyear', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8373990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AR'}),
    Artist.create({name: 'Feezi Redd', city: 'Little Rock', imageURL: 'feeziredd', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/70678014&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AR'}),
    Artist.create({name: 'Goon De Garcons', city: 'Little Rock', imageURL: 'goondegarcons', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/37487188&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'AR'})
  ])
  return artists
}

async function seedCaliforniaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'A$ton Matthews', city: 'Los Angeles', imageURL: 'a$tonmatthews', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/37600135&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Ab-Soul', city: 'Los Angeles', imageURL: 'ab-soul', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/46525995&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Ackrite', city: 'Inglewood', imageURL: 'ackrite', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/52326785&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'AD', city: 'Los Angeles', imageURL: 'ad', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/7062973&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Adam Vida', city: 'San Fransisco', imageURL: 'adamvida', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/101699326&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Anderson .Paak', city: 'Oxnard', imageURL: 'andersonpaak', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23590048&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Audio Push', city: 'Inland Empire', imageURL: 'audiopush', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/14053376&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Blueface', city: 'Los Angeles', imageURL: 'blueface', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/332778009&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Boogie', city: 'Los Angeles', imageURL: 'boogie', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/71129992&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Boskoe 100', city: 'Inglewood', imageURL: 'boskoe100', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/146711527&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Bricc Baby Shitro', city: 'Los Angeles', imageURL: 'briccbabyshitro', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/131697725&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Buddy', city: 'Los Angeles', imageURL: 'buddy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39976679&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Chris King', city: 'Fontana', imageURL: 'chrisking', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/34643931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Chuuwee', city: 'Sacramento', imageURL: 'chuuwee', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4114945&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'D Savage', city: 'Gardena', imageURL: 'dsavage', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/200421143&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Desto Dubb', city: 'Los Angeles', imageURL: 'destodubb', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/144829799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Drakeo The Ruler', city: 'Los Angeles', imageURL: 'drakeotheruler', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/62915002&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Duckwrth', city: 'Los Angeles', imageURL: 'duckwrth', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3216431&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Dumbfoundead', city: 'Los Angeles', imageURL: 'dumbfoundead', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/52042226&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Ezale', city: 'Oakland', imageURL: 'ezale', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/51390839&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Fashawn', city: 'Fresno', imageURL: 'fashawn', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9532160&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'G Perico', city: 'Los Angeles', imageURL: 'gperico', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/137949464&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Guapdad 4000', city: 'Oakland', imageURL: 'guapdad4000', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2039092&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Hodgy', city: 'Los Angeles', imageURL: 'hodgy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/123994686&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Iamsu!', city: 'Richmond', imageURL: 'iamsu!', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/131433255&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Ill Camille', city: 'Los Angeles', imageURL: 'illcamille', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/20046993&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Indica', city: 'Los Angeles', imageURL: 'indica', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/79475492&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Jaden Smith', city: 'Los Angeles', imageURL: 'jadensmith', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/249815534&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Jay 305', city: 'Los Angeles', imageURL: 'jay305', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/47127866&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Kamaiyah', city: 'Oakland', imageURL: 'kamaiyah', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/43001237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Kid Buu', city: 'Los Angeles', imageURL: 'kidbuu', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30372145&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'King Lil G', city: 'Los Angeles', imageURL: 'kinglilg', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16491209&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Koran Streets', city: 'Berkeley', imageURL: 'koranstreets', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/174496020&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Kyle', city: 'Ventura', imageURL: 'kyle', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12239113&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Lando Chill', city: 'Los Angeles', imageURL: 'landochill', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/95158860&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Larry June', city: 'Vallejo', imageURL: 'larryjune', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/49051224&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Lil Blurry', city: 'San Fransisco', imageURL: 'lilblurry', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/305978718&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Lil House Phone', city: 'Los Angeles', imageURL: 'lilhousephone', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/196366901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'}),
    Artist.create({name: 'Lil Xan', city: 'Redlands', imageURL: 'lilxan', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/218008901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'})
  ])
  return artists
}

async function seedColoradoArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'A Meazy', city: 'Denver', imageURL: 'ameazy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5065593&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CO'})
  ])
  return artists
}

async function seedConnecticutArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Andre Jakai', city: 'Hartford', imageURL: 'andrejakai', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11553669&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'ANoyd', city: 'Bloomfield', imageURL: 'anoyd', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3048144&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'Chris $treets', city: 'New Haven', imageURL: 'chris$treets', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13879842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'Christ Dillinger', city: 'Bridgeport', imageURL: 'christdillinger', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13879842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'Craigy F', city: 'New London', imageURL: 'craigyf', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/43901471&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'Don Zio P', city: 'Middletown', imageURL: 'donziop', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/242461384&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'Jaden Castro', city: 'Hartford', imageURL: 'jadencastro', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2302642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'K$ubi Kayy', city: 'Hartford', imageURL: 'k$ubikayy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/25753399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'}),
    Artist.create({name: 'King Of August', city: 'Hartford', imageURL: 'kingofaugust', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1499766&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'})
  ])
  return artists
}

async function seedDMVArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Ace Cosgrove', city: 'Maryland', imageURL: 'acecosgrove', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12868429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Bandhunta Izzy', city: 'Maryland', imageURL: 'bandhuntaizzy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12868429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Beau Young Prince', city: 'D.C.', imageURL: 'beauyoungprince', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/414982923&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Black Kray', city: 'Virginia', imageURL: 'blackkray', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3147157&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Brent Faiyaz', city: 'Maryland', imageURL: 'brentfaiyaz', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8987114&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Chaz French', city: 'D.C.', imageURL: 'chazfrench', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/100324379&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Ciscero', city: 'Maryland', imageURL: 'ciscero', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/46858913&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Ezko', city: 'Maryland', imageURL: 'ezko', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4260317&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Fat Trel', city: 'D.C.', imageURL: 'fattrel', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/21126684&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Goldlink', city: 'D.C.', imageURL: 'goldlink', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6010584&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Goonew', city: 'Maryland', imageURL: 'goonew', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/368508989&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'IDK', city: 'Maryland', imageURL: 'idk', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/20960197&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'JPEGMAFIA', city: 'Maryland', imageURL: 'jpegmafia', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2912574&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'K.A.A.N.', city: 'Maryland', imageURL: 'kaan', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/46277462&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Kelow LaTesha', city: 'Maryland', imageURL: 'kelowlatesha', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2686999&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Lamar Crushin', city: 'Maryland', imageURL: 'lamarcrushin', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11244503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Lil Raven', city: 'Virginia', imageURL: 'lilraven', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54208020&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Lil Tracy', city: 'Virginia', imageURL: 'liltracy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/61628112&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'})
  ])
  return artists
}

async function seedFloridaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '$not', city: 'Lake Worth', imageURL: '$not', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/219805540&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: '1WayFrank', city: 'Broward', imageURL: '1wayfrank', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/44079828&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Baby Soulja', city: 'Jacksonville', imageURL: 'babysoulja', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/302912077&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Ball Greezy', city: 'Miami', imageURL: 'ballgreezy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/148981824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Bossman JD', city: 'Altamonte', imageURL: 'bossmanjd', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/17724284&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Bruno Mali', city: 'Miami', imageURL: 'brunomali', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/163931720&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Chester Watson', city: 'Miami', imageURL: 'chesterwatson', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/7322175&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Denzel Curry', city: 'Carol City', imageURL: 'denzelcurry', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4791237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Fat Nick', city: 'Miami', imageURL: 'fatnick', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9931761&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Foolio', city: 'Jacksonville', imageURL: 'foolio', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/477343311&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Gank Gaank', city: 'Pompano Beach', imageURL: 'gankgaank', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/95169515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'GlokkNine', city: 'Orlando', imageURL: 'glokknine', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/334622063&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'GrownBoiTrap', city: 'Palm Beach', imageURL: 'grownboitrap', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/159502671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Ice Billion Berg', city: 'Miami', imageURL: 'icebillionberg', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5221700&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Jackboy', city: 'Broward', imageURL: 'jackboy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/261376591&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'JDola', city: 'Broward', imageURL: 'jdola', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/200931109&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Kid Trunks', city: 'Broward', imageURL: 'kidtrunks', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/40663540&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Kodak Black', city: 'Pompano Beach', imageURL: 'kodakblack', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/72181005&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Kolyon', city: 'Broward', imageURL: 'kolyon', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/17874033&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Lajan Slim', city: 'Broward', imageURL: 'lajanslim', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6289879&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Lil Boom', city: 'Tallahassee', imageURL: 'lilboom', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/112007688&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Lil Pump', city: 'Miami', imageURL: 'lilpump', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/173834487&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'})
  ])
  return artists
}

async function seedGeorgiaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '21 Savage', city: 'Atlanta', imageURL: '21savage', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/71223630&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: '24 Hrs', city: 'Atlanta', imageURL: '24hrs', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/194344880&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: '6 Dogs', city: 'Atlanta', imageURL: '6dogs', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/246426669&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: '6lack', city: 'Atlanta', imageURL: '6lack', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/35810257&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Abra', city: 'Atlanta', imageURL: 'abra', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31028732&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Bando Jonez', city: 'Atlanta', imageURL: 'bandojonez', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/70838853&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Cantrell', city: 'Albany', imageURL: 'cantrell', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6697266&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Cellus Hamilton', city: 'Atlanta', imageURL: 'cellushamilton', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1053182&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Childish Major', city: 'Atlanta', imageURL: 'childishmajor', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16348791&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Cyhi The Prynce', city: 'Atlanta', imageURL: 'cyhitheprynce', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8185245&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Dae Dae', city: 'Atlanta', imageURL: 'daedae', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/207842091&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Danny Wolf', city: 'Atlanta', imageURL: 'dannywolf', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/22810504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Derez Deshon', city: 'Atlanta', imageURL: 'derezdeshon', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/44646566&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Domani Harris', city: 'Atlanta', imageURL: 'domaniharris', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/122320404&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Dre Kiken', city: 'Atlanta', imageURL: 'drekiken', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/57845789&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'EarthGang', city: 'Atlanta', imageURL: 'earthgang', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1358662&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Father', city: 'Atlanta', imageURL: 'father', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11078773&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Gunna', city: 'College Park', imageURL: 'gunna', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/286263397&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Hoodrich Pablo Juan', city: 'Atlanta', imageURL: 'hoodrichpablojuan', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/164055187&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'J.I.D.', city: 'Atlanta', imageURL: 'jid', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/98022439&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Jarren Benton', city: 'Decatur', imageURL: 'jarrenbenton', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/127471394&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Jay5', city: 'Atlanta', imageURL: 'jay5', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/233737631&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'K Camp', city: 'Atlanta', imageURL: 'kcamp', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6010381&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'K$upreme', city: 'Atlanta', imageURL: 'k$upreme', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/144603656&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Kap G', city: 'College Park', imageURL: 'kapg', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/51460878&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Kelechi', city: 'Atlanta', imageURL: 'kelechi', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/307113&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Kodie Shane', city: 'Atlanta', imageURL: 'kodieshane', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/200963678&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Larry League', city: 'Atlanta', imageURL: 'larryleague', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/87533525&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Lil Bby', city: 'Atlanta', imageURL: 'lilbaby', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/300932089&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Lil Gotit', city: 'Atlanta', imageURL: 'lilgotit', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/469986759&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Lil Reek', city: 'Atlanta', imageURL: 'lilreek', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/438409386&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Lil Wop', city: 'Atlanta', imageURL: 'lilwop', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/128613767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Lil Yachty', city: 'Atlanta', imageURL: 'lilyachty', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/107010237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Loso Loaded', city: 'Atlanta', imageURL: 'losoloaded', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/231071008&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'})
  ])
  return artists
}

async function seedIllinoisArtists () {
  const artists = await Promise.all([
    Artist.create({name: '600 Breezy', city: 'Chicago', imageURL: '600breezy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/110230477&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Adamn Killa', city: 'Chicago', imageURL: 'adamnkilla', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/29357959&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Alex Wiley', city: 'Chicago', imageURL: 'alexwiley', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/69862172&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Big Body Fiji', city: 'Chicago', imageURL: 'bigbodyfiji', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/43420550&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Calez', city: 'Chicago', imageURL: 'calez', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1233834&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Cdot Honcho', city: 'Chicago', imageURL: 'cdothoncho', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/58376736&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Chief Keef', city: 'Chicago', imageURL: 'chiefkeef', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30597862&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Duffle Bag Buru', city: 'Chicago', imageURL: 'dufflebagburu', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/119862606&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Famous Dex', city: 'Chicago', imageURL: 'famousdex', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/338493990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Femdot', city: 'Chicago', imageURL: 'femdot', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/34938926&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'G Herbo', city: 'Chicago', imageURL: 'gherbo', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/34938926&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Jean Deaux', city: 'Chicago', imageURL: 'jeandeaux', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6445181&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Joey Purp', city: 'Chicago', imageURL: 'joeypurp', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/40074118&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Joseph Chilliams', city: 'Chicago', imageURL: 'josephchilliams', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/168001987&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Juice WRLD', city: 'Chicago', imageURL: 'juicewrld', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/132790246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'KAMI', city: 'Chicago', imageURL: 'kami', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/14367566&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Kembe X', city: 'Chicago', imageURL: 'kembex', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/26891083&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Knox Fortune', city: 'Chicago', imageURL: 'knoxfortune', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/19764185&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Kweku Collins', city: 'Evanston', imageURL: 'kwekucollins', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13591743&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'L.A. VanGogh', city: 'Chicago', imageURL: 'lavangogh', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12187851&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Lil Bibby', city: 'Chicago', imageURL: 'lilbibby', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/41323784&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Lil Durk', city: 'Chicago', imageURL: 'lildurk', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/172743103&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Lil Reese', city: 'Chicago', imageURL: 'lilreese', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/56610138&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Lucki', city: 'Chicago', imageURL: 'lucki', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5993221&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Lud Foe', city: 'Chicago', imageURL: 'ludfoe', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/248335099&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'})
  ])
  return artists
}

async function seedInternationalArtists () {
  const artists = await Promise.all([
    Artist.create({name: '88Camino', city: 'Toronto', imageURL: '88camino', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30922948&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Azizi Gibson', city: 'Bangkok', imageURL: 'azizigibson', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3610679&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Belly', city: 'Ottawa', imageURL: 'belly', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23957363&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Bladee', city: 'Stockholm', imageURL: 'bladee', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/76355215&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Derek Wise', city: 'Toronto', imageURL: 'derekwise', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4791237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Dillon Ponders', city: 'Toronto', imageURL: 'dillonponders', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8778759&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Ecco2k', city: 'Stockholm', imageURL: 'ecco2k', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/330352518&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Giggs', city: 'London', imageURL: 'giggs', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/121074378&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Higher Brothers', city: 'Sichuan', imageURL: 'higherbrothers', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/268629549&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Jacin Trill', city: 'Hoorn', imageURL: 'jacintrill', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/82630085&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Jahkoy', city: 'Toronto', imageURL: 'jahkoy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4122084&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Jay Prince', city: 'London', imageURL: 'jayprince', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/303504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Jazz Cartier', city: 'Toronto', imageURL: 'jazzcartier', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5367367&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Jimmy Prime', city: 'Toronto', imageURL: 'jimmyprime', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38446013&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Joji', city: 'Osaka', imageURL: 'joji', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/126350865&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Keith Ape', city: 'Seoul', imageURL: 'keithape', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/13376711&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Killy', city: 'Toronto', imageURL: 'killy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/33536302&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Kohh', city: 'Tokyo', imageURL: 'kohh', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/258522925&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'})
  ])
  return artists
}

async function seedKentuckyArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Jack Harlow', city: 'Louisville', imageURL: 'jackharlow', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3759694&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'KY'})
  ])
  return artists
}

async function seedLouisianaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'August Alsina', city: 'New Orleans', imageURL: 'augustalsina', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4409909&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'}),
    Artist.create({name: 'Boosie Badazz', city: 'Baton Rouge', imageURL: 'boosiebadazz', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/150431751&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'}),
    Artist.create({name: 'Caleb Brown', city: 'Baton Rouge', imageURL: 'calebbrown', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/151587087&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'}),
    Artist.create({name: 'Chase N Cashe', city: 'New Orleans', imageURL: 'chasencashe', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/17417161&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'}),
    Artist.create({name: 'Curren$y', city: 'New Orleans', imageURL: 'curren$y', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3061864&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'}),
    Artist.create({name: 'Jungle Muzik Larry', city: 'New Orleans', imageURL: 'junglemuziklarry', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3061864&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'}),
    Artist.create({name: 'Kevin Gates', city: 'Baton Rouge', imageURL: 'kevingates', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38863592&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'})
  ])
  return artists
}

async function seedMassachusettsArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Antonio Breez', city: 'Boston', imageURL: 'antoniobreez', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4086298&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Bia', city: 'Boston', imageURL: 'bia', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/11200092&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Big Leano', city: 'Boston', imageURL: 'bigleano', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/141392675&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Black El', city: 'Boston', imageURL: 'blackel', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5087732&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Cousin Stizz', city: 'Boston', imageURL: 'cousinstizz', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/86268399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Dutch Rebelle', city: 'Boston', imageURL: 'dutchrebelle', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/643693&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Gio Dee', city: 'Boston', imageURL: 'giodee', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5392901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Haasan Barclay', city: 'Boston', imageURL: 'haasanbarclay', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9141881&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Jefe Replay', city: 'Roxbury', imageURL: 'jefereplay', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3129222&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Joyner Lucas', city: 'Worcester', imageURL: 'joynerlucas', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/47473146&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'}),
    Artist.create({name: 'Latrell James', city: 'Boston', imageURL: 'latrelljames', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3869638&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'})
  ])
  return artists
}

async function seedMichiganArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Amir Obe', city: 'Detroit', imageURL: 'amirobe', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/84310696&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MI'}),
    Artist.create({name: 'Black Milk', city: 'Detroit', imageURL: 'blackmilk', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1508067&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MI'}),
    Artist.create({name: 'Boldy James', city: 'Detroit', imageURL: 'boldyjames', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4602933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MI'}),
    Artist.create({name: 'Bones', city: 'Howell', imageURL: 'bones', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2152092&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MI'}),
    Artist.create({name: 'Danny Brown', city: 'Detroit', imageURL: 'dannybrown', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/203409810&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MI'}),
    Artist.create({name: 'Icewear Vezzo', city: 'Detroit', imageURL: 'icewearvezzo', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/55752104&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MI'})
  ])
  return artists
}

async function seedMinnesotaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Allan Kingdom', city: 'Saint Paul', imageURL: 'allankingdom', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/27940538&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MN'}),
    Artist.create({name: 'Lucien Parker', city: 'Minneapolis', imageURL: 'lucienparker', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/19036020&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MN'})
  ])
  return artists
}

async function seedMississippiArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Ahmad Abeezy', city: 'Meridian', imageURL: 'ahmadabeezy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/216689409&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MS'}),
    Artist.create({name: 'Big K.R.I.T.', city: 'Meridian', imageURL: 'bigkrit', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9031681&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MS'})
  ])
  return artists
}

async function seedMissouriArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Arshad Goods', city: 'St. Louis', imageURL: 'arshadgoods', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24488962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MO'}),
    Artist.create({name: 'ChaseTheMoney', city: 'St. Louis', imageURL: 'chasethemoney', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/41551539&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MO'}),
    Artist.create({name: 'Comethazine', city: 'St. Louis', imageURL: 'comethazine', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/183618003&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MO'}),
    Artist.create({name: 'Dante Wolfe', city: 'St. Louis', imageURL: 'dantewolfe', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4947271&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MO'}),
    Artist.create({name: 'Dettsa', city: 'Kansas City', imageURL: 'dettsa', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/144829799&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MO'})
  ])
  return artists
}

async function seedNevadaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Dizzy Wright', city: 'Las Vegas', imageURL: 'dizzywright', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/127473642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NV'})
  ])
  return artists
}

async function seedNewJerseyArtists () {
  const artists = await Promise.all([
    Artist.create({name: '070 Shake', city: 'North Bergen', imageURL: '070shake', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/174755600&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Albee Al', city: 'Jersey City', imageURL: 'albeeal', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/158091182&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Angelo Mota', city: 'West Orange', imageURL: 'angelomota', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/7132681&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Ant Beale', city: 'Gloucester City', imageURL: 'antbeale', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3412768&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Chad B', city: 'Newark', imageURL: 'chadb', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39026533&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Charlie Heat', city: 'Woodbury', imageURL: 'charlieheat', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10648366&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Coi Leray', city: 'Unknown', imageURL: 'coileray', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/356775017&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Da$h', city: 'Hackensack', imageURL: 'da$h', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/112887764&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Dougie F', city: 'Orange', imageURL: 'dougief', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/50781028&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Dutchboy', city: 'Piscataway', imageURL: 'dutchboy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2448633&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Ish Williams', city: 'Collingswood', imageURL: 'ishwilliams', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/36315933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Jay Solstice', city: 'Camden', imageURL: 'jaysolstice', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/7130493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Kenif Muse', city: 'Collingswood', imageURL: 'kenifmuse', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6529780&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Kev Rodgers', city: 'Collingswood', imageURL: 'kevrodgers', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/35861423&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'})
  ])
  return artists
}

async function seedNewYorkArtists () {
  const artists = await Promise.all([
    Artist.create({name: '22Gz', city: 'Brooklyn', imageURL: '22gz', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/449909790&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: '6ix9ine', city: 'Brooklyn', imageURL: '6ix9ine', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/307809061&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'A Boogie Wit Da Hoodie', city: 'Bronx', imageURL: 'aboogiewitdahoodie', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10332955&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'A$AP Ant', city: 'Harlem', imageURL: 'a$apant', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/284618037&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'A$AP Ferg', city: 'Harlem', imageURL: 'a$apferg', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30695751&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'A$AP Rocky', city: 'Harlem', imageURL: 'a$aprocky', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/26482329&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'A$AP Twelvyy', city: 'Harlem', imageURL: 'a$aptwelvyy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/110923051&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Al-Doe', city: 'Bronx', imageURL: 'al-doe', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/60338851&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Audubon', city: 'Washington Heights', imageURL: 'audubon', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1071342&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Austin Sour', city: 'Bronx', imageURL: 'austinsour', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54719188&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Bas', city: 'Queens', imageURL: 'bas', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2778435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Black Dave', city: 'Harlem', imageURL: 'blackdave', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5399792&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'BurnKas', city: 'Brooklyn', imageURL: 'burnkas', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16541300&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Chris Rivers', city: 'Bronx', imageURL: 'chrisrivers', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30626405&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Dave East', city: 'Harlem', imageURL: 'daveeast', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12756528&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Desiigner', city: 'Brooklyn', imageURL: 'desiigner', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/179900582&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Don Mykel', city: 'Harlem', imageURL: 'donmykel', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12098779&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Dot Demo', city: 'Bronx', imageURL: 'dotdemo', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4672140&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Downtown Dion', city: 'Manhattan', imageURL: 'downtowndion', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/89804807&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Dyme A Duzin', city: 'Brooklyn', imageURL: 'dymeaduzin', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4675720&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Emilio Rojas', city: 'Rochester', imageURL: 'emiliorojas', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/134253958&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Flatbush Zombies', city: 'Brooklyn', imageURL: 'flatbushzombies', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5736626&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Flipp Dinero', city: 'Brooklyn', imageURL: 'flippdinero', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/146137028&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Frankk Finesse', city: 'Brooklyn', imageURL: 'frankkfinesse', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3808173&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Frosty Preme', city: 'Brooklyn', imageURL: 'frostypreme', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/49665554&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'G Mims', city: 'Harlem', imageURL: 'gmims', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5862764&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Indigo General', city: 'Harlem', imageURL: 'indigogeneral', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8436483&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Jay Critch', city: 'Brooklyn', imageURL: 'jaycritch', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38560704&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Jay Prezi', city: 'Harlem', imageURL: 'jayprezi', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/65310860&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Joey Bada$$', city: 'Brooklyn', imageURL: 'joeybada$$', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/228408362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Kamau Kenyatte', city: 'Manhattan', imageURL: 'kamaukenyatte', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23030829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Kemba', city: 'Bronx', imageURL: 'kemba', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/106895&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Kirk Knight', city: 'Brooklyn', imageURL: 'kirkknight', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23507802&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Leeky Bandz', city: 'Manhattan', imageURL: 'leekybandz', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/51871426&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'}),
    Artist.create({name: 'Levy Grey', city: 'Harlem', imageURL: 'levygrey', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/56840349&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'})
  ])
  return artists
}

async function seedNorthCarolinaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '10cellphones', city: 'Charlotte', imageURL: '10cellphones', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39494971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Bigbabygucci', city: 'Charlotte', imageURL: 'bigbabygucci', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/58692000&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'DaBaby', city: 'Charlotte', imageURL: 'dababy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/132004414&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Danny Blaze', city: 'Durham', imageURL: 'dannyblaze', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/162921152&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Deniro Farrar', city: 'Charlotte', imageURL: 'denirofarrar', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/363131&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Duru Tha King', city: 'Raleigh', imageURL: 'duruthaking', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/60621149&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Elevator Jay', city: 'Charlotte', imageURL: 'elevatorjay', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38864344&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'J.K. The Reaper', city: 'Greensboro', imageURL: 'jkthereaper', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/19438093&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Jay Storm', city: 'Charlotte', imageURL: 'jaystorm', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/45226368&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Jayway Sosa', city: 'Charlotte', imageURL: 'jaywaysosa', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9538589&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'King Mez', city: 'Raleigh', imageURL: 'kingmez', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8145450&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'}),
    Artist.create({name: 'Lute', city: 'Charlotte', imageURL: 'lute', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/298484504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'})
  ])
  return artists
}

async function seedOhioArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Billard', city: 'Cleveland', imageURL: 'billard', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/48358352&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'BOOFBOIICY', city: 'Dayton', imageURL: 'boofboiicy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/126281033&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Chxpo', city: 'Cleveland', imageURL: 'Chxpo', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/211145990&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Cook Laflare', city: 'Cincinnati', imageURL: 'cooklaflare', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/217448908&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Crash Rarri', city: 'Columbus', imageURL: 'crashrarri', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/98588882&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Curly Chuck', city: 'Cleveland', imageURL: 'curlychuck', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/109729678&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Doe Boy', city: 'Cleveland', imageURL: 'doeboy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/226913384&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Easy Lantana', city: 'Cincinnati', imageURL: 'easylantana', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12063669&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Ezri', city: 'Cleveland', imageURL: 'ezri', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/36928905&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Fijimacintosh', city: 'Canton', imageURL: 'fijimacintosh', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/56453859&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Josh White', city: 'Cleveland', imageURL: 'joshwhite', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/22536899&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Kipp Stone', city: 'Cleveland', imageURL: 'kippstone', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31620391&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Lamb$', city: 'Cincinnati', imageURL: 'lamb$', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/98323411&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'}),
    Artist.create({name: 'Lil Cray', city: 'Cleveland', imageURL: 'lilcray', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/22391910&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OH'})
  ])
  return artists
}

async function seedOregonArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Amine', city: 'Portland', imageURL: 'amine', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4917203&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OR'}),
    Artist.create({name: 'Donte Thomas', city: 'Portland', imageURL: 'dontethomas', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/113717318&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OR'}),
    Artist.create({name: 'Glenn Waco', city: 'Portland', imageURL: 'glennwaco', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/45466619&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OR'})
  ])
  return artists
}

async function seedPennsylvaniaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Chill Moody', city: 'Philadelphia', imageURL: 'chillmoody', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/629756&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Chynna', city: 'Philadelphia', imageURL: 'chynna', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/9527164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Demrick', city: 'Philadelphia', imageURL: 'demrick', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/22171184&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Grande Marshall', city: 'Philadelphia', imageURL: 'grandemarshall', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6127138&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Hardo', city: 'Pittsburgh', imageURL: 'hardo', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/32357944&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Jimmy Wopo', city: 'Pittsburgh', imageURL: 'jimmywopo', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/130004205&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'KilConfirmed', city: 'Philadelphia', imageURL: 'kilconfirmed', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/130004205&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Kur', city: 'Philadelphia', imageURL: 'kur', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/59853133&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Lee Mazin', city: 'Philadelphia', imageURL: 'leemazin', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/22018019&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Lil Skies', city: 'Waynesboro', imageURL: 'lilskies', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/95492698&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'}),
    Artist.create({name: 'Lil Uzi Vert', city: 'Philadelphia', imageURL: 'liluzivert', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/10494998&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'PA'})
  ])
  return artists
}

async function seedRhodeIslandArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Khary', city: 'Providence', imageURL: 'khary', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1315136&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'RI'})
  ])
  return artists
}

async function seedSouthCarolinaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'IL'})
  ])
  return artists
}

async function seedTennesseeArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Blac Youngsta', city: 'Memphis', imageURL: 'blacyoungsta', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/120188265&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'}),
    Artist.create({name: 'Brian Brown', city: 'Nashville', imageURL: 'brianbrown', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/67334512&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'}),
    Artist.create({name: 'Chancellor Warhol', city: 'Nashville', imageURL: 'chancellorwarhol', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12084864&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'}),
    Artist.create({name: 'Don Trip', city: 'Memphis', imageURL: 'dontrip', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/93486158&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'}),
    Artist.create({name: 'Isaiah Rashad', city: 'Chattanooga', imageURL: 'isaiahrashad', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6541597&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'}),
    Artist.create({name: 'Key Glock', city: 'Memphis', imageURL: 'keyglock', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/308933105&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'}),
    Artist.create({name: 'Kiya Lacey', city: 'Nashville', imageURL: 'kiyalacey', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/19764185&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'}),
    Artist.create({name: "L'Orange", city: 'Nashville', imageURL: 'lorange', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1394196&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TN'})
  ])
  return artists
}

async function seedTexasArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Asian Doll', city: 'Dallas', imageURL: 'asiandoll', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/121290920&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Blake', city: 'San Antonio', imageURL: 'blake', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/16417885&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Bobby Sessions', city: 'Dallas', imageURL: 'bobbysessions', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/427783086&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Brockhampton', city: 'San Marcos', imageURL: 'brockhampton', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/419852343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Cuban Doll', city: 'Dallas', imageURL: 'cubandoll', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/280811580&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'D Flowers', city: 'Houston', imageURL: 'dflowers', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/454396515&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Dice SoHo', city: 'Houston', imageURL: 'dicesoho', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/32770114&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Diego Money', city: 'Oak Cliff', imageURL: 'diegomoney', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/233286637&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Doeman Dyna', city: 'Houston', imageURL: 'doemandyna', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5305511&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Don Toliver', city: 'Houston', imageURL: 'dontoliver', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/70960906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Emotional Xan', city: 'Dallas', imageURL: 'emotionalxan', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/283324217&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Evander Griiim', city: 'El Paso', imageURL: 'evandergriiim', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/203449249&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Go Yayo', city: 'Dallas', imageURL: 'goyayo', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/162864005&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Imaj', city: 'Dallas', imageURL: 'imaj', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/258620522&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Kirko Bangz', city: 'Houston', imageURL: 'kirkobangz', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/43483751&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Kydd Jones', city: 'Austin', imageURL: 'kyddjones', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/17303445&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Lecrae', city: 'Houston', imageURL: 'lecrae', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/62328364&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Lil 2z', city: 'Dallas', imageURL: 'lil2z', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/83314551&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Lil Rarri', city: 'Houston', imageURL: 'lilrarri', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/5754624&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Lil Ronny MothaF', city: 'Dallas', imageURL: 'lilronnymothaf', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3747313&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Lilwaterbed', city: 'Houston', imageURL: 'lilwaterbed', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/354536459&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Lou Charle$', city: 'Dallas', imageURL: 'loucharle$', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/8924108&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'}),
    Artist.create({name: 'Loudiene', city: 'Dallas', imageURL: 'loudiene', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/165419668&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'})
  ])
  return artists
}

async function seedWashingtonArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'A$tro King Phoenix', city: 'Seattle', imageURL: 'a$trokingphoenix', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24652933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'}),
    Artist.create({name: 'Brothers From Another', city: 'Seattle', imageURL: 'brothersfromanother', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6723924&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'}),
    Artist.create({name: 'Dave B', city: 'Seattle', imageURL: 'daveb', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4345199&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'}),
    Artist.create({name: 'Dizzi Slick', city: 'Seattle', imageURL: 'dizzislick', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/65473870&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'}),
    Artist.create({name: 'DoNormaal', city: 'Seattle', imageURL: 'donormaal', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/70068171&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'}),
    Artist.create({name: 'Jarv Dee', city: 'Seattle', imageURL: 'jarvdee', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1408453&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'}),
    Artist.create({name: 'Jay Park', city: 'Edmonds', imageURL: 'jaypark', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/203413337&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'}),
    Artist.create({name: 'Lil Mosey', city: 'Mountlake Terrace', imageURL: 'lilmosey', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/210558840&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'})
  ])
  return artists
}

async function seedWisconsinArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Carti Bankx', city: 'Milwaukee', imageURL: 'cartibankx', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/18754798&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WI'}),
    Artist.create({name: 'Denny Lanez', city: 'Milwaukee', imageURL: 'dennylanez', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/109636362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WI'}),
    Artist.create({name: 'IshDarr', city: 'Milwaukee', imageURL: 'ishdarr', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/53387258&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WI'})
  ])
  return artists
}

async function seedBlogs () {
  const blogs = await Promise.all([
    Blog.create({title: 'I love It', description: 'Check out New Single I Love It by Lil Pump featuring Kanye West', author: 'Chris Gardner', date: new Date('Auguest 25, 2018'), blogPic: 'iloveit', blogPost: 'Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang Gucci Gang'}),
    Blog.create({title: 'Mir X Fetty?', description: 'Mir Fontane and Fetty Wap might be in the studio together', author: 'Chris Gardner', date: new Date('September 21, 2018'), blogPic: 'mirxfetty', blogPost: 'Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega Bustin moves outside the Bodega, Bodega, Bodega'}),
    Blog.create({title: 'YNW Melly Up Next', description: 'Listen Mellys new bangers, theyre amazing', author: 'Cole Eckerle', date: new Date('September 2, 2018'), blogPic: 'ynwmellyupnext', blogPost: 'I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder I got Murder on My Mind I got my Mind on My Muder'})
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
    Interview.create({description: 'Chase N. Cashe is undoubtedly one of the most multifaceted and experienced producers/artists in Hip-Hop. With credits from artists ranging from Drake, Lil Wayne, Eminem and J Cole to Beyonce, Brandy and The Pussycat Dolls, Chase N. Cashe has developed an extensive portfolio throughout the last decade. We caught up with him to discuss growing up in New Orleans, the state of hip-hop and his biggest musical influences. Take a look and stream his newest project "DJ Lil Vegan The Natural Selector." below.', interview: ['Growing up in New Orleans, what impact did that unique culture have on your early inspiration to create music?', 'Growing up in New Orleans is a 24/7 live musical. There’s so much music and dancing going on that it becomes second nature. It enabled me to learn how music affected people felt at a young age.', 'You moved to Los Angeles after Hurricane Katrina. There you met Hit-Boy and formed the "Surf Club," through which you collaborated with Drake, Lil Wayne, Eminem, J Cole and some other leaders of the rap game. What is the most important lesson you learned about the industry through working with these artists on these records?', "The most important lesson I learned was to teach what i know and be open minded to what i don't know. I met a lot of the artists you named at the beginning of their careers where we were able to exchange valuables to each other that would propel us towards success.", 'What advice would you give to young artists and producers looking to find their sound and take their skills to the next level in this soundcloud based streaming era?', 'The best advice is to create as much as possible and share it with people. Learning the business will help you share your music with more confidence so do that as well. Connect with artists in your proximity and work lateral while going vertical. The people close to you and can help you a lot.', 'If you could collab with one artist dead or alive who would it be?', 'The Great Bob Marley on a whole album.', 'Who are your 3 favorite artists to listen to currently?', 'Bob Marley, Slick Rick, & B.G. of Chopper City.'], soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/490529712&amp;color=ff5500' }),
    Interview.create({description: 'J.K. The Reaper is one of the most enigmatic figures in the underground Hip-Hop Scene. Frequently collaborating with artists like Denzel Curry and Yoshi Thompkins, J.K The Reaper tells his unique story through blending Florida trap sounds with experimental new wave flows and instrumentals. We caught up with him to talk about growing up in Greensboro, North Carolina, his favorite artists and his goals for the upcoming year. Take a look and stream his new EP "Almost Angelic 3" below.', interview: ['Growing up in Greensboro, North Carolina what was your neighborhood like? Was there a significant music scene that inspired you to start recording?', `Growing up in Greensboro there was no scene or any kids like us. It’s an inspiration in itself to be such an outcast. Being an outcast period is what inspired me making music, listen to my first project “The Losers Table” that’s basically what it’s about. I was 16 when I made it. Fucking 10 years ago I was in a redneck pimple country ass high school with a ridiculous hate for life around me.`, 'What is C9 and what is the most important lesson you learned from collaborating within C9?', `C9 ain’t a thing anymore, it’s more just a landmark in time for all of us. We are fam still but that umbrella been closed. Like my family Yoshi Thompkins said “it taught me how to love with no attachments”`, 'If you could collaborate with one artist dead or alive who would it be?', "Patrice O'Neal. He’s not even a rapper but I’d have him host my fucking album.  He’s my favorite person to ever have existed, look him up & watch elephant in the room.", 'Who are your 3 favorite artists to listen to currently?', 'Me, 2chea the Zombie & old Soulja Boy (laughing) like the song WAR where he talks about the guy he murdered, I play that & Skinny Niggas Runnin Shit everyday.', 'What are your biggest goals for 2018?', 'Release all these albums and be so transparent with my fans that they feel like they actually know me personally. This year I want to embrace these people 100% because I have nothing else but them & FANGLIFE.'], soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485223534&amp;color=ff5500' }),
    Interview.create({description: `Wave Chapelle has been making his unique imprint on the rap game for several years now, combining his lyrical storytelling ability with booming trap instrumentals. Discovered and signed by Yo Gotti in 2014, Wave has significantly elevated his style and sound by collaborating with some of the hottest artists in the game including Lil Uzi Vert, K Camp & Curren$y. We caught up with Wave to discuss his upbringing in Wisconsin, his take on the modern music industry and his favorite artists and inspirations. Take a look and stream his new project "It'll All Make Sense Soon 2" below.`, interview: ['You grew up in Milwaukee and lived there for most of your life. How would you describe the Wisconsin hip-hop culture and where do you see it going in the future?', `Growing up in Milwaukee the Hip Hop culture was very underground. There weren’t many national acts when I was younger. The guys that did make it big were from Wisconsin but like outside of Milwaukee. In Highschool everyone would always talk about who would be the first rapper to make it big out of the city or I would hear people talk about how " Nobody was putting on for the city". Fast forward to like my senior year and that narrative started to change. I started to see a lot more artists doing their thing, still on a underground level but the effort was there. Nowadays the hip hop culture is well and alive. Radio is finally playing local artists, the newspaper is writing about the local scene more and the city in general just has a wave going (no pun intended). Going forward I think Milwaukee will have a break-out year where you see a lot of the artists out are from the city. We’re literally the diamond in the rough. S/O to "The 4.”`, 'Yo Gotti signed you a few years ago and helped introduce you as his protégé to the industry. What is the most important lesson you learned from working with him?', 'Yeah S/O to Gotti for giving me a platform, I learned a bunch of things from him; how the music business works, how to write complete songs, etc. Like my thing was always freestyling and killing verses, thats what came easiest to me. I was never really good at hooks till I worked with him and thats one of the things I really improved on, writing solid hooks. Most important thing I learned was to chase the dream not the money. As long as you chase your dream relentlessly the money will come. Now I just take everything I learned from him and apply that to the independent grind.', 'What advice would you give to young artists looking to break out in areas like Wisconsin that aren’t necessarily hotbeds for hip-hop?', `I would tell them to stay consistent and patient. Breaking into the music scene can be such a process and in this era you see a lot of artists blow up on social media and it seems overnight but there’s truly a process to it and you have to trust it. The minute you give up on the process or try to take shortcut it could go south really fast. I would also say do as much as you can independently as possible. The less help you need, the better. Not saying you shouldn’t have help because everybody has a team, just saying your value goes up the more you can do for yourself.`, 'If you could collab with one artist dead or alive who would it be?', `If I could collaborate with any artist it would probably be Kendrick Lamar. He’s really good at making smash records and still being himself. I feel like I do the same so that would be dope song.`, 'Who are your 3 favorite artists to listen to currently?', `Thats a tough question because I listen to so much music on a daily basis. I’m not one of those rappers thats like “I don’t listen to nobody but me” haha I listen to everybody, but to answer the question recently I've been listening to a lot of  Big Sean, J.I.D and Cyhi The Prynce. Honorable mention Meek Mill, his last project give me a lot of motivation.`], soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/529890900&amp;color=ff5500' })
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
