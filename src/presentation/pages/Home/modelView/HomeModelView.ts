import { MoyensContact } from '../../../../domain/MoyensContact/MoyensContact.ts';
import { Membre } from '../../../../domain/Membre/Membre.ts';
import { Theme } from '../../../../domain/Theme/Theme.ts';

export interface HomeModelView {
  readonly contacts: Array<MoyensContact>;
  readonly membres: Array<Membre>;
  readonly themes: Array<Theme>;
}
