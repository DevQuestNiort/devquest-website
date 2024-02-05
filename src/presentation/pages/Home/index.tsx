import HomeView from './HomeView.tsx';
import { ListMoyensContactData } from '../../../domain/MoyensContact/ListMoyensContactData.ts';
import { ListMembreData } from '../../../domain/Membre/ListMembreData.ts';
import { ListThemeData } from '../../../domain/Theme/ListThemeData.ts';
import HomeController from './HomeController.ts';

export default function Home() {
  const controller = new HomeController({
    contacts: ListMoyensContactData,
    membres: ListMembreData,
    themes: ListThemeData,
  });

  return <HomeView controller={controller} />;
}
