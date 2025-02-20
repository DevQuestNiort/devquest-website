import { Section } from "@/components/Section";
import { promises as fs } from "fs";
import Image from "next/image";

import styles from "./faq.module.scss";
import BulleQuestionReponse from "@/app/faq/BulleQuestionReponse";
import { QuestionReponse } from "@/model/QuestionReponse";

const getFaq = async () =>
  JSON.parse(
    await fs.readFile(process.cwd() + "/src/data/faq.json", "utf8"),
  ) as QuestionReponse[];

export async function Faq() {
  const questionAndAnswer = await getFaq();
  return (
    <>
      <Section theme={"Light"}>
        <h1>FAQ</h1>
        <div className={styles.faq}>
          <span>
            <h2>Bienvenue aventurier à la bibliothèque des grands mages.</h2>
            <p>
              Les mages possèdent l&apos;ensemble de toutes la connaissance du
              monde, c&apos;est donc ici que vous trouverez des réponses à vos
              questions. Si vous ne trouvez pas de réponse à votre questions,
              peut être, êtes vous le premier à vous interroger sur le sujet,
              n&apos;hésitez donc pas à envoyer votre question en pigeon
              voyageur à bureau@devquest.fr.
            </p>
          </span>

          <Image
            height={128}
            width={128}
            alt="wizard"
            src="/icons-rp/wizard.png"
            aria-hidden="true"
          />
        </div>
        {questionAndAnswer.map((questionReponse) => (
          <BulleQuestionReponse
            key={questionReponse.uuid}
            questionReponse={questionReponse}
          />
        ))}
      </Section>
    </>
  );
}
