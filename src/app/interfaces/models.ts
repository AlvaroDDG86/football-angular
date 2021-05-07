export interface Team {
  id: number
  area: Area
  activeCompetitions: ActiveCompetition[]
  name: string
  shortName: string
  tla: string
  crestUrl: string
  address: string
  phone: string
  website: string
  email: string
  founded: number
  clubColors: string
  venue: string
  squad: Squad[]
  lastUpdated: string
}

export interface Area {
  id: number
  name: string
}

export interface ActiveCompetition {
  id: number
  area: Area
  name: string
  code: string
  plan: string
  lastUpdated: string
}

export interface Squad {
  id: number
  name: string
  position?: string
  dateOfBirth: string
  countryOfBirth: string
  nationality: string
  shirtNumber: any
  role: string
}
