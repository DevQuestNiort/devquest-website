export interface Membre {
  picture: string;
  name: string;
  metier: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  role: 'MEMBRE' | 'BENEVOLE'| 'MC' | 'HELPER' ;
}
