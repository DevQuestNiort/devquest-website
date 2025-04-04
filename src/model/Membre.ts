export interface Membre {
  picture: string;
  name: string;
  metier: string;
  github?: string;
  linkedin?: string;
  role: 'MEMBRE' | 'BENEVOLE'| 'MC' | 'VIP' ;
}
