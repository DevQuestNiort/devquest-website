export interface Partenaire {
  name: string;
  asset: string;
  site?: string;
  actif: boolean;
  level:  'LEGENDAIRE' | 'EPIQUE'| 'RARE' | 'COMMUN' | 'AUTRE' ;
}
