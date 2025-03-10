export interface Partenaire {
  name: string;
  asset: string;
  site?: string;
  level:  'LEGENDAIRE' | 'EPIQUE'| 'RARE' | 'COMMUN' | 'AUTRE' ;
}
