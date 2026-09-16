export interface Partenaire {
  name: string;
  layus?: string;
  asset: string;
  site?: string;
  actif: boolean;
  consolidated: boolean;
  level:  'LEGENDAIRE' | 'EPIQUE'| 'RARE' | 'COMMUN' | 'AUTRE' ;
}
