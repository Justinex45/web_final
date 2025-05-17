const apiKey = '5d8834b3';
const categories = {
  '首頁': [],
  '科幻': [
    'Inception', 'Interstellar', 'The Matrix', 'The Matrix Resurrections', 'Tenet',
    'Blade Runner', 'Blade Runner 2049', 'Dune', 'Dune: Part Two', 'Arrival',
    '2001: A Space Odyssey', 'Ad Astra', 'Gravity', 'The Martian', 'Edge of Tomorrow',
    'Ready Player One', 'Minority Report', 'Oblivion', 'Elysium', 'District 9',
    'Ex Machina', 'Annihilation', 'The Fifth Element', 'Ghost in the Shell', 'I, Robot',
    'AI: Artificial Intelligence', 'Her', 'Looper', 'Snowpiercer', 'Passengers',
    'Sunshine', 'Contact', 'War of the Worlds', 'Independence Day', 'Star Trek',
    'Star Trek Into Darkness', 'Star Trek Beyond', 'Avatar', 'Avatar: The Way of Water',
    'Guardians of the Galaxy', 'Ant-Man and the Wasp: Quantumania', 'The Tomorrow War', 'Ender\'s Game',
    'Love and Monsters', 'Chaos Walking', 'Moon', 'The Prestige', 'Dark City', 'The Island'
  ],
  '動作': [
    'Mad Max: Fury Road', 'John Wick', 'John Wick: Chapter 2', 'John Wick: Chapter 3', 'John Wick: Chapter 4',
    'The Dark Knight', 'Inception', 'The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions',
    'Tenet', 'Interstellar', 'The Batman', 'Avengers: Endgame', 'Avengers: Infinity War',
    'Captain America: Civil War', 'Iron Man', 'Iron Man 2', 'Iron Man 3', 'Thor: Ragnarok',
    'Guardians of the Galaxy', 'Black Panther', 'Doctor Strange', 'Shang-Chi', 'The Marvels',
    'The Equalizer', 'The Equalizer 2', 'The Equalizer 3', 'Taken', 'Taken 2', 'Taken 3',
    'Skyfall', 'No Time to Die', 'Casino Royale', 'Quantum of Solace', 'Spectre',
    'Fast & Furious', 'Furious 7', 'Fast Five', 'Hobbs & Shaw', 'Mission: Impossible – Fallout',
    'Mission: Impossible – Dead Reckoning', 'Top Gun: Maverick', 'Edge of Tomorrow',
    'Transformers', 'Transformers: Dark of the Moon', 'Bumblebee', 'The Bourne Identity', 'The Bourne Ultimatum'
  ],
  '動畫': [
    'Spirited Away', 'Howl\'s Moving Castle', 'My Neighbor Totoro',
    'Kiki\'s Delivery Service', 'Ponyo', 'The Wind Rises', 'Weathering with You', 'The Tale of the Princess Kaguya',
    'Akira', 'Ghost in the Shell', 'Nausicaä of the Valley of the Wind', 'Grave of the Fireflies', 'Paprika',
    'The Garden of Words', '5 Centimeters per Second', 'Perfect Blue', 'Tokyo Godfathers',
    'The Boy and the Beast', 'Belle', 'Summer Wars', 'Wolf Children', 'The Girl Who Leapt Through Time',
    'In This Corner of the World', 'Redline', 'The Secret World of Arrietty', 'When Marnie Was There', 'Big Hero 6',
    'Zootopia', 'Frozen', 'Frozen II', 'Encanto', 'Tangled', 'Moana', 'Raya and the Last Dragon', 'Luca', 'Turning Red',
    'Coco', 'Soul', 'Inside Out', 'Brave', 'Finding Nemo', 'Finding Dory', 'Wall-E', 'Up', 'Toy Story', 'Toy Story 2',
    'Toy Story 3', 'Toy Story 4'
  ],
  '愛情': [
    'The Notebook', 'La La Land', 'Pride and Prejudice', 'Titanic', 'Before Sunrise',
    'Before Sunset', 'Before Midnight', '500 Days of Summer', 'The Fault in Our Stars', 'Call Me by Your Name',
    'Eternal Sunshine of the Spotless Mind', 'Notting Hill', 'Love Actually', 'The Holiday', 'Me Before You',
    'To All the Boys I\'ve Loved Before', 'The Vow', 'Dear John', 'Safe Haven', 'The Lucky One',
    'A Walk to Remember', 'The Age of Adaline', 'About Time', 'Brooklyn', 'The Spectacular Now',
    'Blue Valentine', 'Carol', 'Her', 'The Theory of Everything', 'Midnight in Paris',
    'One Day', 'Crazy Rich Asians', 'Silver Linings Playbook', 'Begin Again', 'Emma',
    'Little Women', 'Anna Karenina', 'The Time Traveler\'s Wife', 'Jane Eyre', 'Becoming Jane',
    'The Great Gatsby', 'Romeo + Juliet', 'Letters to Juliet', 'Love, Rosie', 'The Longest Ride',
    'Water for Elephants', 'Endless Love', 'The Best of Me', 'If I Stay', 'The Last Song'
  ],
  '喜劇': [
    'Superbad', 'The Hangover', 'The Hangover Part II', 'The Hangover Part III', 'Step Brothers',
    'Anchorman', 'Anchorman 2', 'Dumb and Dumber', 'Tropic Thunder', 'Bridesmaids',
    'Mean Girls', 'Clueless', 'Pitch Perfect', '21 Jump Street', '22 Jump Street',
    'Zombieland', 'Zombieland: Double Tap', 'Deadpool', 'Deadpool 2', 'Free Guy',
    'The Nice Guys', 'Game Night', 'Crazy Rich Asians', 'The Grand Budapest Hotel', 'The French Dispatch',
    'The Intern', 'The Proposal', 'Yes Man', 'Liar Liar', 'The Mask',
    'Shaun of the Dead', 'Hot Fuzz', 'Scott Pilgrim vs. The World', 'Palm Springs', 'Eurovision Song Contest',
    'Night at the Museum', 'Night at the Museum: Battle of the Smithsonian', 'School of Rock', 'The 40-Year-Old Virgin',
    'Forgetting Sarah Marshall', 'Knives Out', 'Glass Onion', 'Juno', 'Napoleon Dynamite',
    'Ferris Bueller\'s Day Off', 'The Breakfast Club', 'Super Troopers', 'White Chicks', 'Get Smart'
  ],
  '驚悚': [
    'The Conjuring', 'The Conjuring 2', 'The Conjuring: The Devil Made Me Do It', 'Annabelle', 'Annabelle: Creation',
    'Annabelle Comes Home', 'The Nun', 'The Nun II', 'Insidious', 'Insidious: Chapter 2',
    'Insidious: The Red Door', 'Sinister', 'The Exorcist', 'The Exorcist: Believer', 'Hereditary',
    'Midsommar', 'The Babadook', 'The Witch', 'It Follows', 'The Ring',
    'The Grudge', 'It', 'It Chapter Two', 'A Quiet Place', 'A Quiet Place Part II',
    'The Boogeyman', 'Smile', 'Barbarian', 'X', 'Pearl',
    'Texas Chainsaw Massacre', 'Halloween', 'Halloween Kills', 'Halloween Ends', 'Scream',
    'Scream VI', 'Scream 4', 'The Cabin in the Woods', 'Don\'t Breathe', 'Us',
    'Get Out', 'Nope', 'The Visit', 'The Others', 'The Mist',
    '1408', 'The Shining', 'Doctor Sleep', 'Final Destination'
  ]
};

const movieCache = {};
const allMovies = [...new Set(Object.values(categories).flat())];
const feedEl = document.getElementById('feed');
const spinnerEl = document.getElementById('spinner');
const searchInput = document.getElementById('searchInput');

let currentSort = 'year-desc';
let searchQuery = '';
let currentPage = 1;
let totalPages = 1;
let isLoading = false;
let LimitError = false;
let currentCategory = null;

const showSpinner = () => spinnerEl.style.display = 'block';
const hideSpinner = () => spinnerEl.style.display = 'none';
const sortSelect = document.createElement('select');
sortSelect.id = 'sortSelect';

function resetSearch() {
  searchQuery = '';
  searchInput.value = '';
  currentPage = 1;
  totalPages = 1;
  currentCategory = null;
}

async function fetchMovie(title) {
  if (movieCache[title]) {
    return movieCache[title];
  }
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}&plot=short`);
    const data = await res.json();
    if (data.Response === 'False' && data.Error === 'Request limit reached!' && !LimitError) {
      alert('API 請求限制已達。');
      LimitError = true;
      return null;
    }
    movieCache[title] = data;
    return data;
  } catch (e) {
    console.error('Fetch movie error:', e);
    return null;
  }
}

function sortMovies(movies, sortType) {
  return [...movies].sort((a, b) => {
    switch (sortType) {
      case 'year-asc':
        return (parseInt(a.Year) || 0) - (parseInt(b.Year) || 0);
      case 'year-desc':
        return (parseInt(b.Year) || 0) - (parseInt(a.Year) || 0);
      case 'rating-desc':
        return (parseFloat(b.imdbRating) || 0) - (parseFloat(a.imdbRating) || 0);
      case 'title-asc':
        return a.Title.localeCompare(b.Title);
      default:
        return 0;
    }
  });
}

async function renderCategory(category) {
  currentCategory = category;
  feedEl.innerHTML = '';
  showSpinner();
  sortSelect.style.display = 'block'; // 在分類頁面顯示排序選單
  try {
    let movies = await Promise.all(categories[category].map(title => fetchMovie(title)));
    movies = movies.filter(data => data?.Response === 'True');
    if (currentSort) {
      movies = sortMovies(movies, currentSort);
    }
    movies.forEach(data => appendCard(data, category));
    if (movies.length === 0) {
      feedEl.innerHTML = '<p>無符合條件的電影。</p>';
    }
  } catch (e) {
    console.error('Render category error:', e);
    feedEl.innerHTML = '<p>載入電影失敗，請稍後再試。</p>';
  }
  hideSpinner();
}

async function searchMovies(query, page = 1) {
  if (isLoading) return;
  isLoading = true;
  showSpinner();
  sortSelect.style.display = 'block'; // 在搜尋頁面顯示排序選單
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}&page=${page}`);
    const data = await res.json();
    if (data.Response === 'True') {
      const details = await Promise.all(
        data.Search.map(async item => {
          await new Promise(resolve => setTimeout(resolve, 100));
          const resDetail = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${item.imdbID}&plot=short`);
          return await resDetail.json();
        })
      );
      let validDetails = details.filter(detail => detail.Response === 'True');
      if (currentSort) {
        validDetails = sortMovies(validDetails, currentSort);
      }
      validDetails.forEach(detail => appendCard(detail));
      totalPages = Math.ceil(data.totalResults / 10);
      currentPage = page;
      if (validDetails.length === 0) {
        feedEl.innerHTML = '<p>無符合條件的電影。</p>';
      }
    } else {
      feedEl.innerHTML = '<p>無搜尋結果。</p>';
    }
  } catch (e) {
    console.error('Search movies error:', e);
    feedEl.innerHTML = '<p>搜尋失敗，請稍後再試。</p>';
  }
  hideSpinner();
  isLoading = false;
}

async function renderHome() {
  currentCategory = '首頁';
  feedEl.innerHTML = '';
  showSpinner();
  sortSelect.style.display = 'none'; // 在首頁隱藏排序選單
  try {
    const randomMovies = allMovies.sort(() => 0.5 - Math.random()).slice(0, 6);
    let movies = await Promise.all(randomMovies.map(title => fetchMovie(title)));
    movies = movies.filter(data => data?.Response === 'True');
    if (currentSort) {
      movies = sortMovies(movies, currentSort);
    }
    movies.forEach(data => appendCard(data, '推薦電影'));
    if (movies.length === 0) {
      feedEl.innerHTML = '<p>無符合條件的電影。</p>';
    }
  } catch (e) {
    console.error('Render home error:', e);
    feedEl.innerHTML = '<p>載入電影失敗，請稍後再試。</p>';
  }
  hideSpinner();
}

function showMovieDetail(title, plot, poster, director, actors, rating) {
  const detailEl = document.getElementById('movieDetail');
  detailEl.style.display = 'flex';
  document.getElementById('detailTitle').textContent = title;
  document.getElementById('detailPlot').textContent = plot || '（無電影簡介）';
  document.getElementById('detailPoster').src = poster !== 'N/A' ? poster : 'https://via.placeholder.com/600x900?text=No+Image';
  document.getElementById('detailDirector').textContent = `導演: ${director || 'N/A'}`;
  document.getElementById('detailActors').textContent = `演員: ${actors || 'N/A'}`;
  document.getElementById('detailRating').textContent = `⭐ IMDb 評分: ${rating || 'N/A'}`;
}

function appendCard(data, category = '') {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/600x900?text=No+Image'}" alt="${data.Title}">
    <div class="info">
      ${category ? `<div class="category-tag">@${category}</div>` : ''}
      <div class="title">${data.Title}</div>
      <div class="year">${data.Year}</div>
      <div class="rating">⭐ IMDb: ${data.imdbRating || 'N/A'}</div>
      <div class="plot">${data.Plot && data.Plot !== 'N/A' ? data.Plot : '（無電影簡介）'}</div>
    </div>
  `;
  card.addEventListener('click', () => showMovieDetail(data.Title, data.Plot, data.Poster, data.Director, data.Actors, data.imdbRating));
  feedEl.appendChild(card);
}

searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    if (!query) return;
    resetSearch();
    feedEl.innerHTML = '';
    searchQuery = query;
    searchMovies(query);
  }
});

sortSelect.innerHTML = `
  <option value="year-desc">年份 (新到舊)</option>
  <option value="year-asc">年份 (舊到新)</option>
  <option value="rating-desc">評分 (高到低)</option>
  <option value="title-asc">標題 (A-Z)</option>
`;

sortSelect.addEventListener('change', e => {
  currentSort = e.target.value;
  feedEl.innerHTML = '';
  if (searchQuery) {
    searchMovies(searchQuery, 1);
  } else if (currentCategory && currentCategory !== '首頁') {
    renderCategory(currentCategory);
  } else {
    renderHome();
  }
});

window.addEventListener('scroll', () => {
  if (searchQuery && !isLoading && currentPage < totalPages) {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      searchMovies(searchQuery, currentPage + 1);
    }
  }
});

document.getElementById('closeDetail').addEventListener('click', () => {
  document.getElementById('movieDetail').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('div');
  header.className = 'sort-header';
  header.appendChild(sortSelect);
  feedEl.insertAdjacentElement('beforebegin', header);
});