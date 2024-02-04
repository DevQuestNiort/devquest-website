import BaseController from "../../commons/BaseController.ts";
import {HomeModelView} from "./modelView/HomeModelView.ts";
import {IsLoadable} from "../../commons/IsLoadable.ts";
import {MoyensContact} from "../../../domain/MoyensContact/MoyensContact.ts";
import {Membre} from "../../../domain/Membre/Membre.ts";
import {Theme} from "../../../domain/Theme/Theme.ts";

interface HomeControllerDepandencies {
    contacts: Array<MoyensContact>;
    membres: Array<Membre>;
    themes: Array<Theme>;
}

export default class HomeController extends BaseController<HomeModelView> implements IsLoadable {
    private _state: HomeModelView;

    constructor(readonly depandencies: HomeControllerDepandencies) {
        super();

        this._state = {
            contacts: [],
            membres: [],
            themes: []
        }
    }


    onLoad(): void {
        this._state = {
            contacts: this.depandencies.contacts,
            membres: this.depandencies.membres,
            themes: this.depandencies.themes
        }

        console.log(`
            Félicitations explorateur !
            Tu es l'heureux gagnant d'une place gratuite pour accéder à notre aventure grâce à ta curiosité !
            Pour récupérer ta place, utilise le code secret issue d'un langage ancien LAPIN_GAROU directement sur notre billetterie.
            Attention ce code ne fonctionnera qu'une seule fois!
            A bientôt !
        `);

        this.raiseStateChanged()
    }

    get state(): HomeModelView {
        return this._state;
    }

}