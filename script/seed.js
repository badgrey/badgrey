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
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'AL'})
  ])
  return artists
}

async function seedAlaskaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'AK'})
  ])
  return artists
}

async function seedArizonaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'AZ'})
  ])
  return artists
}

async function seedArkansasArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'AR'})
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
    Artist.create({name: 'Audio Push', city: 'Inland Empire', imageURL: 'audiopush', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/14053376&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CA'})
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
    Artist.create({name: 'ANoyd', city: 'Bloomfield', imageURL: 'anoyd', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3048144&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'CT'})
  ])
  return artists
}

async function seedDMVArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Ace Cosgrove', city: 'Maryland', imageURL: 'acecosgrove', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12868429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'}),
    Artist.create({name: 'Bandhunta Izzy', city: 'Maryland', imageURL: 'bandhuntaizzy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/12868429&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'DMV'})
  ])
  return artists
}

async function seedFloridaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '$not', city: 'Lake Worth', imageURL: '$not', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/219805540&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: '1WayFrank', city: 'Broward', imageURL: '1wayfrank', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/44079828&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Baby Soulja', city: 'Jacksonville', imageURL: 'babysoulja', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/302912077&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'}),
    Artist.create({name: 'Ball Greezy', city: 'Miami', imageURL: 'ballgreezy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/148981824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'FL'})
  ])
  return artists
}

async function seedGeorgiaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '21 Savage', city: 'Atlanta', imageURL: '21savage', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/71223630&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: '24 Hrs', city: 'Atlanta', imageURL: '24hrs', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/194344880&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: '6 Dogs', city: 'Atlanta', imageURL: '6dogs', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/246426669&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: '6lack', city: 'Atlanta', imageURL: '6lack', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/35810257&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'}),
    Artist.create({name: 'Abra', city: 'Atlanta', imageURL: 'abra', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/31028732&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'GA'})
  ])
  return artists
}

async function seedIllinoisArtists () {
  const artists = await Promise.all([
    Artist.create({name: '600 Breezy', city: 'Chicago', imageURL: '600breezy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/110230477&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Adamn Killa', city: 'Chicago', imageURL: 'adamnkilla', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/29357959&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'}),
    Artist.create({name: 'Alex Wiley', city: 'Chicago', imageURL: 'alexwiley', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/69862172&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'IL'})
  ])
  return artists
}

async function seedInternationalArtists () {
  const artists = await Promise.all([
    Artist.create({name: '88Camino', city: 'Toronto', imageURL: '88camino', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/30922948&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'}),
    Artist.create({name: 'Azizi Gibson', city: 'Bangkok', imageURL: 'azizigibson', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3610679&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'International'})
  ])
  return artists
}

async function seedLouisianaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'August Alsina', city: 'New Orleans', imageURL: 'augustalsina', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4409909&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'LA'})
  ])
  return artists
}

async function seedMassachusettsArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Antonio Breez', city: 'Boston', imageURL: 'antoniobreez', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4086298&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MA'})
  ])
  return artists
}

async function seedMichiganArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Amir Obe', city: 'Detroit', imageURL: 'amirobe', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/84310696&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MI'})
  ])
  return artists
}

async function seedMinnesotaArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Allan Kingdom', city: 'Saint Paul', imageURL: 'allankingdom', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/27940538&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MN'})
  ])
  return artists
}

async function seedMississippiArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Ahmad Abeezy', city: 'Meridian', imageURL: 'ahmadabeezy', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/216689409&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MS'})
  ])
  return artists
}

async function seedMissouriArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Arshad Goods', city: 'St. Louis', imageURL: 'arshadgoods', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24488962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'MO'})
  ])
  return artists
}

async function seedNevadaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'NV'})
  ])
  return artists
}

async function seedNewJerseyArtists () {
  const artists = await Promise.all([
    Artist.create({name: '070 Shake', city: 'North Bergen', imageURL: '070shake', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/174755600&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Albee Al', city: 'Jersey City', imageURL: 'albeeal', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/158091182&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Angelo Mota', city: 'West Orange', imageURL: 'angelomota', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/7132681&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'}),
    Artist.create({name: 'Ant Beale', city: 'Gloucester City', imageURL: 'antbeale', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3412768&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NJ'})
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
    Artist.create({name: 'Austin Sour', city: 'Bronx', imageURL: 'austinsour', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/54719188&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NY'})
  ])
  return artists
}

async function seedNorthCarolinaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '10cellphones', city: 'Charlotte', imageURL: '10cellphones', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39494971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'NC'})
  ])
  return artists
}

async function seedOhioArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'OH'})
  ])
  return artists
}

async function seedOregonArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Amine', city: 'Portland', imageURL: 'amine', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4917203&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'OR'})
  ])
  return artists
}

async function seedPennsylvaniaArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'PA'})
  ])
  return artists
}

async function seedRhodeIslandArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'RI'})
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
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'TN'})
  ])
  return artists
}

async function seedTexasArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'Asian Doll', city: 'Dallas', imageURL: 'asiandoll', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/121290920&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'TX'})
  ])
  return artists
}

async function seedWashingtonArtists () {
  const artists = await Promise.all([
    Artist.create({name: 'A$tro King Phoenix', city: 'Seattle', imageURL: 'a$trokingphoenix', soundcloudURL: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/24652933&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true', youtubeID: [], genre: '', stateAbbrev: 'WA'})
  ])
  return artists
}

async function seedWisconsinArtists () {
  const artists = await Promise.all([
    Artist.create({name: '', city: '', imageURL: '', soundcloudURL: '', youtubeID: [], genre: '', stateAbbrev: 'WI'})
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
