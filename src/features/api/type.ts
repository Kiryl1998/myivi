interface ExternalId {
  kpHD: string;
  imdb: string;
  tmdb: number;
}

interface Name {
  name: string;
  language: string;
  type: string;
}

interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

interface Rating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface Votes {
  kp: string;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

interface Video {
  url: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

interface Genre {
  name: string;
}

interface Country {
  name: string;
}

interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}

interface ReviewInfo {
  count: number;
  positiveCount: number;
  percentage: string;
}

interface SeasonInfo {
  number: number;
  episodesCount: number;
}

interface Budget {
  value: number;
  currency: string;
}

interface Fees {
  world: {
    value: number;
    currency: string;
  };
  russia: {
    value: number;
    currency: string;
  };
  usa: {
    value: number;
    currency: string;
  };
}

interface Premiere {
  country: string;
  world: string;
  russia: string;
  digital: string;
  cinema: string;
  bluray: string;
  dvd: string;
}

interface Poster {
  url: string;
  previewUrl: string;
}

interface SimilarMovie {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: Poster;
  rating: Rating;
  year: number;
}

interface SequelOrPrequel {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: Poster;
  rating: Rating;
  year: number;
}

interface WatchabilityItem {
  name: string;
  logo: {
    url: string;
  };
  url: string;
}

interface ReleaseYear {
  start: number;
  end: number;
}

interface Audience {
  count: number;
  country: string;
}

interface NetworksItem {
  name: string;
  logo: {
    url: string;
  };
}

export interface Movie {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string;
  enName: string;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string;
  facts: Fact[];
  rating: Rating;
  votes: Votes;
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
  logo: {
    url: string;
  };
  poster: Poster;
  backdrop: Poster;
  videos: {
    trailers: Video[];
  };
  genres: Genre[];
  countries: Country[];
  persons: Person[];
  reviewInfo: ReviewInfo;
  seasonsInfo: SeasonInfo[];
  budget: Budget;
  fees: Fees;
  premiere: Premiere;
  similarMovies: SimilarMovie[];
  sequelsAndPrequels: SequelOrPrequel[];
  watchability: {
    items: WatchabilityItem[];
  };
  releaseYears: ReleaseYear[];
  top10: number;
  top250: number;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: boolean;
  audience: Audience[];
  lists: string[];
  networks: {
    items: NetworksItem[];
  };
  updatedAt: string;
  createdAt: string;
}

export interface MovieResponse {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
export interface Ifilm {
  id: number;
  externalId: {
    imdb: string;
    tmdb: number;
  };
  name: string;
  alternativeName: string | null;
  names: {
    name: string;
    language: string | null;
    type: string | null;
  }[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string | null;
  slogan: string;
  status: string;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number | null;
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number | null;
  };
  movieLength: number | null;
  ratingMpaa: string | null;
  ageRating: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  genres: {
    name: string;
  }[];
  countries: {
    name: string;
  }[];
  persons: {
    id: number;
    photo: string;
    name: string;
    enName: string | null;
    description: string | null;
    profession: string;
    enProfession: string | null;
  }[];
  budget: {};
  fees: {
    world: {};
    russia: {};
    usa: {};
  };
  premiere: {
    world: string;
    digital: string;
  };
  ticketsOnSale: boolean;
  sequelsAndPrequels: [];
  watchability: {
    items: {
      name: string;
      logo: {
        url: string;
      };
      url: string;
    }[];
  };
  releaseYears: {
    start: number;
    end: number;
  }[];
  top10: null;
  top250: number;
  facts: {
    value: string;
    type: string;
    spoiler: boolean;
  }[];
  spokenLanguages: [];
  seasonsInfo: {
    number: number;
    episodesCount: number;
  }[];
  collections: [];
  productionCompanies: [];
  similarMovies: [];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  isSeries: boolean;
  seriesLength: number;
  totalSeriesLength: number | null;
  lists: string[];
  logo: {
    url: string;
  };
  networks: {
    items: {
      name: string;
    }[];
  };
  enName: string;
  videos: {
    trailers: {
      url: string;
      name: string;
      site: string;
      type: string;
    }[];
  };
}